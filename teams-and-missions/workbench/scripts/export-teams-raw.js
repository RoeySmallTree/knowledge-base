const fs = require("fs/promises");
const path = require("path");

const baseDir = path.resolve(__dirname, "..", "..", "teams", "v2");
const outputPath = process.argv[2]
  ? path.resolve(process.cwd(), process.argv[2])
  : path.resolve(__dirname, "..", "teams-raw.json");

function parseMarkdownToTree(markdown) {
  const lines = markdown.split(/\r?\n/);
  const root = { level: 0, sub: [] };
  const stack = [root];
  let inCodeBlock = false;

  for (const line of lines) {
    const isFence = line.trim().startsWith("```");

    if (!inCodeBlock) {
      const match = line.match(/^(#{1,4})\s+(.*)$/);
      if (match) {
        const level = match[1].length;
        const title = line.trimEnd();
        while (stack.length > 0 && stack[stack.length - 1].level >= level) {
          stack.pop();
        }

        const node = {
          title,
          _contentLines: [],
          level,
          sub: [],
        };
        const parent = stack[stack.length - 1];
        parent.sub.push(node);
        stack.push(node);
        continue;
      }
    }

    if (isFence) {
      inCodeBlock = !inCodeBlock;
    }

    const current = stack[stack.length - 1];
    if (current && current.level > 0) {
      current._contentLines.push(line);
    }
  }

  const finalize = (nodes) =>
    nodes.map((node) => {
      const raw = node._contentLines.join("\n");
      const content = raw.trim().length === 0 ? "" : raw.trimEnd();
      return {
        title: node.title,
        content,
        sub: finalize(node.sub),
      };
    });

  return finalize(root.sub);
}

function normalizeHeadingTitle(title) {
  return title.replace(/^#+\s*/, "").trim().toLowerCase();
}

function stripHeadingPrefix(title) {
  return title.replace(/^#+\s*/, "").trim();
}

function findNodeByTitle(nodes, title) {
  const normalized = normalizeHeadingTitle(title);
  return nodes.find(
    (node) => normalizeHeadingTitle(node.title) === normalized,
  );
}

function findNodeByPath(nodes, path) {
  let current = null;
  let list = nodes;

  for (const part of path) {
    current = findNodeByTitle(list, part);
    if (!current) {
      return null;
    }
    list = current.sub || [];
  }

  return current;
}

function extractBlockquoteContent(content) {
  const lines = content.split(/\r?\n/);
  const parts = [];

  for (const line of lines) {
    const match = line.match(/^>\s?(.*)$/);
    if (match) {
      parts.push(match[1]);
    }
  }

  return parts.join("\n").trimEnd();
}

function stripSurroundingBold(text) {
  const match = text.match(/^\*\*(.+)\*\*$/);
  return match ? match[1].trim() : text;
}

function extractSingleLineValue(content) {
  const blockquote = extractBlockquoteContent(content);
  const source = blockquote ? blockquote : content;
  const lines = source.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      continue;
    }
    return stripSurroundingBold(trimmed);
  }

  return "";
}

function extractBlockquoteOrContent(content) {
  const blockquote = extractBlockquoteContent(content);
  return blockquote ? blockquote : content.trimEnd();
}

function extractIdentityField(tree, heading, mode) {
  const node = findNodeByPath(tree, [
    "Part 1: Customer-Facing Details",
    "Identity",
    heading,
  ]);
  if (!node) {
    return "";
  }

  if (mode === "single") {
    return extractSingleLineValue(node.content);
  }

  return extractBlockquoteOrContent(node.content);
}

function extractRecommendedNumber(content) {
  const lines = content.split(/\r?\n/);

  for (const line of lines) {
    if (!line.toLowerCase().includes("recommended")) {
      continue;
    }
    const match = line.match(/(-?\d+(?:\.\d+)?)/);
    if (match) {
      return Number(match[1]);
    }
  }

  const fallback = content.match(/(-?\d+(?:\.\d+)?)/);
  return fallback ? Number(fallback[1]) : null;
}

function stripWrappingQuotes(text) {
  const trimmed = text.trim();
  const match = trimmed.match(/^([`"'“”])(.*)\1$/);
  return match ? match[2].trim() : trimmed;
}

function extractListStrings(content) {
  const lines = content.split(/\r?\n/);
  const items = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      continue;
    }
    const match = trimmed.match(/^(\d+\.\s+|[-*]\s+)(.*)$/);
    if (!match) {
      continue;
    }
    const raw = match[2].trim();
    if (!raw) {
      continue;
    }
    items.push(stripWrappingQuotes(raw));
  }

  return items;
}

function extractQuickStarts(tree) {
  const node = findNodeByPathAlternatives(tree, [
    [
      "Part 1: Customer-Facing Details",
      "Session Configuration",
      "Quick Starts",
    ],
    ["Session Configuration", "Quick Starts"],
  ]);
  if (!node) {
    return [];
  }

  return extractListStrings(node.content);
}

function findNodeByPathAlternatives(tree, paths) {
  for (const path of paths) {
    const node = findNodeByPath(tree, path);
    if (node) {
      return node;
    }
  }

  return null;
}

function extractDefaultStartingRounds(tree) {
  const node = findNodeByPathAlternatives(tree, [
    [
      "Part 1: Customer-Facing Details",
      "Session Configuration",
      "Default Starting Rounds",
    ],
    ["Session Configuration", "Default Starting Rounds"],
  ]);
  if (!node) {
    return null;
  }

  return extractRecommendedNumber(node.content);
}

function parseLabeledValue(content, label) {
  const labelLower = label.toLowerCase();
  const lines = content.split(/\r?\n/);
  let collecting = false;
  const parts = [];

  for (const line of lines) {
    const trimmed = line.trim();
    const labelMatch = parseBoldLabelLine(trimmed);
    if (labelMatch) {
      const currentLabel = labelMatch.label.toLowerCase();
      if (currentLabel === labelLower) {
        collecting = true;
        const rest = labelMatch.rest.trim();
        if (rest) {
          parts.push(rest.replace(/^>\s*/, ""));
        }
        continue;
      }
      if (collecting) {
        break;
      }
      continue;
    }

    if (!collecting) {
      continue;
    }

    if (!trimmed) {
      continue;
    }

    if (trimmed.startsWith("|")) {
      continue;
    }

    const cleaned = trimmed.startsWith(">")
      ? trimmed.replace(/^>\s*/, "")
      : trimmed;
    parts.push(cleaned);
  }

  return parts.join("\n").trim();
}

function mapModelParameterKey(name) {
  const normalized = name.toLowerCase();
  if (normalized.includes("creativity")) {
    return "creativity";
  }
  if (normalized.includes("logic")) {
    return "logic";
  }
  if (normalized.includes("brain")) {
    return "brainTier";
  }
  if (normalized.includes("memory")) {
    return "memory";
  }
  return null;
}

function parseModelParametersTable(content) {
  const lines = content.split(/\r?\n/);
  let inTable = false;
  const params = {};

  for (const line of lines) {
    const trimmed = line.trim();
    if (!inTable) {
      if (
        trimmed.startsWith("|") &&
        /parameter/i.test(trimmed) &&
        /score/i.test(trimmed) &&
        /rationale/i.test(trimmed)
      ) {
        inTable = true;
      }
      continue;
    }

    if (!trimmed.startsWith("|")) {
      break;
    }

    const cells = trimmed
      .split("|")
      .map((cell) => cell.trim())
      .filter(Boolean);
    if (cells.length < 2) {
      continue;
    }
    if (cells.every((cell) => /^-+$/.test(cell))) {
      continue;
    }

    const key = mapModelParameterKey(cells[0]);
    if (!key) {
      continue;
    }

    const score = Number(cells[1]);
    params[key] = {
      score: Number.isNaN(score) ? null : score,
      rationale: cells[2] ? cells[2].trim() : "",
    };
  }

  return Object.keys(params).length === 0 ? null : params;
}

function buildModelParameters(tableParams, fallbackScores) {
  const base = {
    creativity: { score: null, rationale: "" },
    logic: { score: null, rationale: "" },
    brainTier: { score: null, rationale: "" },
    memory: { score: null, rationale: "" },
  };

  if (fallbackScores) {
    base.creativity.score = fallbackScores.creativityScore ?? null;
    base.logic.score = fallbackScores.logicScore ?? null;
    base.brainTier.score = fallbackScores.brainTier ?? null;
    base.memory.score = fallbackScores.memory ?? null;
  }

  if (tableParams) {
    for (const [key, value] of Object.entries(tableParams)) {
      base[key] = {
        score: value.score ?? base[key].score ?? null,
        rationale: value.rationale ?? "",
      };
    }
  }

  return base;
}

function parseFunctionalityRequirements(content, fallbackScores) {
  const functionText = parseLabeledValue(content, "Function");
  const importance = parseLabeledValue(content, "Importance");
  const coverageArea =
    parseLabeledValue(content, "Coverage Area") ||
    parseLabeledValue(content, "Coverage");
  const tableParams = parseModelParametersTable(content);

  return {
    function: functionText || "",
    importance: importance || "",
    coverageArea: coverageArea || "",
    modelParameters: buildModelParameters(tableParams, fallbackScores),
  };
}

function normalizeTagLine(line) {
  const trimmed = line.trim();
  const withoutTicks = trimmed.replace(/^`+|`+$/g, "");
  return withoutTicks.replace(/^Tags:\s*/i, "").trim();
}

function parseBoldLabelLine(text) {
  const match = text.match(/^\*\*(.+?)\*\*\s*:?\s*(.*)$/);
  if (!match) {
    return null;
  }

  const label = match[1].trim().replace(/:$/, "");
  const rest = match[2].trim();
  return { label, rest };
}

function extractSectionData(content, labels, options = {}) {
  const labelSet = new Set(labels.map((label) => label.toLowerCase()));
  const lines = content.split(/\r?\n/);
  const allowParagraphItem = options.allowParagraphItem === true;
  let inSection = false;
  const items = [];
  let tags = [];

  for (const line of lines) {
    const trimmed = line.trim();
    const labelMatch = parseBoldLabelLine(trimmed);

    if (labelMatch) {
      const label = labelMatch.label.toLowerCase();
      if (labelSet.has(label)) {
        inSection = true;
        continue;
      }
      if (inSection) {
        break;
      }
      continue;
    }

    if (!inSection) {
      continue;
    }

    if (!trimmed) {
      continue;
    }

    if (/^`?Tags:/i.test(trimmed)) {
      const tagLine = normalizeTagLine(trimmed);
      tags = tagLine
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean);
      continue;
    }

    const listMatch = trimmed.match(/^[-*•]\s+(.*)$/);
    if (listMatch) {
      items.push(listMatch[1].trim());
      continue;
    }

    if (allowParagraphItem && items.length === 0) {
      items.push(stripWrappingQuotes(trimmed));
    }
  }

  return { items, tags };
}

function parseModelRequirements(text) {
  const extract = (label) => {
    const match = text.match(new RegExp(`${label}\\s*[:=]\\s*([0-9]+(?:\\.\\d+)?)`, "i"));
    return match ? Number(match[1]) : null;
  };

  const creativityScore = extract("C");
  const logicScore = extract("L");
  const brainTier = extract("B");
  const memory = extract("M");

  if (
    creativityScore === null &&
    logicScore === null &&
    brainTier === null &&
    memory === null
  ) {
    return null;
  }

  return {
    creativityScore,
    logicScore,
    brainTier,
    memory,
  };
}

function parseCompositionScores(content) {
  const lines = content.split(/\r?\n/);
  const scoresByName = {};

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("|")) {
      continue;
    }

    const cells = trimmed
      .split("|")
      .map((cell) => cell.trim())
      .filter(Boolean);

    if (cells.length < 4) {
      continue;
    }

    const roleCell = cells[0].toLowerCase();
    if (roleCell === "role" || /^-+$/.test(roleCell)) {
      continue;
    }

    const name = cells[1];
    const requirements = cells[cells.length - 1];
    const scores = parseModelRequirements(requirements);
    if (!name || !scores) {
      continue;
    }

    scoresByName[name.toLowerCase()] = scores;
  }

  return scoresByName;
}

function extractMemberProfiles(tree) {
  const compositionNode = findNodeByPath(tree, [
    "Part 3: Team Members",
    "Composition Overview",
  ]);
  const scoresByName = compositionNode
    ? parseCompositionScores(compositionNode.content)
    : {};

  const membersNode = findNodeByPath(tree, [
    "Part 3: Team Members",
    "Member Profiles",
  ]);
  if (!membersNode) {
    return [];
  }

  return membersNode.sub.map((memberNode) => {
    const name = stripHeadingPrefix(memberNode.title);
    const teamFunction = parseLabeledValue(memberNode.content, "Team Function");
    const personaNode = findNodeByTitle(memberNode.sub, "Persona");
    const functionalityNode = findNodeByTitle(
      memberNode.sub,
      "Functionality Requirements (Internal)",
    );
    const lifeStory = personaNode
      ? parseLabeledValue(personaNode.content, "Life Story")
      : "";

    const personal = personaNode
      ? extractSectionData(personaNode.content, ["Personal Traits", "Personal Style"])
      : { items: [], tags: [] };
    const professional = personaNode
      ? extractSectionData(personaNode.content, ["Professional Traits", "Professional Style"])
      : { items: [], tags: [] };
    const special = functionalityNode
      ? extractSectionData(
          functionalityNode.content,
          ["Special Capabilities"],
          { allowParagraphItem: true },
        )
      : { items: [] };

    const scores = scoresByName[name.toLowerCase()] || null;
    const functionalityRequirements = parseFunctionalityRequirements(
      functionalityNode ? functionalityNode.content : "",
      scores,
    );

    return {
      name,
      teamFunction,
      lifeStory,
      personalTraits: personal.items,
      personalTraitsTags: personal.tags,
      professionalTraits: professional.items,
      professionalTraitsTags: professional.tags,
      specialCapabilities: special.items,
      creativityScore: scores ? scores.creativityScore : null,
      logicScore: scores ? scores.logicScore : null,
      brainTier: scores ? scores.brainTier : null,
      memory: scores ? scores.memory : null,
      functionalityRequirements,
    };
  });
}

async function loadTeamFiles() {
  const entries = await fs.readdir(baseDir, { withFileTypes: true });
  const folders = entries
    .filter((entry) => entry.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name));

  const records = [];
  for (const folder of folders) {
    const folderPath = path.join(baseDir, folder.name);
    const fileEntries = await fs.readdir(folderPath, { withFileTypes: true });
    const files = fileEntries
      .filter((entry) => entry.isFile())
      .sort((a, b) => a.name.localeCompare(b.name));

    for (const file of files) {
      const filePath = path.join(folderPath, file.name);
      const content = await fs.readFile(filePath, "utf8");
      const asObject = parseMarkdownToTree(content);
      records.push({
        folderName: folder.name,
        fileName: file.name,
        asObject,
        teamName: extractIdentityField(asObject, "Name", "single"),
        catchPhrase: extractIdentityField(asObject, "Catch Phrase", "single"),
        description: extractIdentityField(asObject, "Description", "block"),
        defaultStartingRounds: extractDefaultStartingRounds(asObject),
        quickStarts: extractQuickStarts(asObject),
        teamMembers: extractMemberProfiles(asObject),
      });
    }
  }

  return records;
}

async function main() {
  const records = await loadTeamFiles();
  await fs.writeFile(outputPath, JSON.stringify(records, null, 2), "utf8");
  console.log(`Wrote ${records.length} records to ${outputPath}`);
}

main().catch((error) => {
  console.error("Failed to export teams:", error);
  process.exit(1);
});
