const fs = require("fs/promises");
const path = require("path");

const inputPath = process.argv[2]
  ? path.resolve(process.cwd(), process.argv[2])
  : path.resolve(__dirname, "..", "teams-raw.json");
const outputPath = process.argv[3]
  ? path.resolve(process.cwd(), process.argv[3])
  : path.resolve(__dirname, "..", "teams-batch.md");

const ALL_TRUE_CONFIG = {
  folderName: true,
  fileName: true,
  teamId: true,
  teamName: true,
  catchPhrase: true,
  description: true,
  defaultStartingRounds: true,
  quickStarts: true,
  teamMembers: {
    name: true,
    teamFunction: true,
    personalTraits: true,
    personalTraitsTags: true,
    professionalTraits: true,
    professionalTraitsTags: true,
    specialCapabilities: true,
    creativityScore: true,
    logicScore: true,
    brainTier: true,
    memory: true,
    functionalityRequirements: {
      function: true,
      importance: true,
      coverageArea: true,
      modelParameters: {
        creativity: true,
        logic: true,
        brainTier: true,
        memory: true,
      },
    },
  },
  // asObject: false,
};

const TEAM_ID_ENTRIES = [
  { id: "4fb48683-d08b-4a10-9bed-391fddeaf8c0", name: "The Cult Builders" },
  { id: "30daba22-2973-47a5-8f19-9977012856b6", name: "Diss Track Inc." },
  { id: "31e11ae2-3e00-414e-969c-1bfabebcff7a", name: "The Newsroom" },
  { id: "e0047216-c2bc-40d8-b3ae-a6fd421ad61b", name: "Aliens human museum" },
  { id: "4d203095-d33f-4bc3-89d3-cdd98cda8b70", name: "The Ghostwriters" },
  { id: "bcf157e0-f8b2-488a-a755-b011828d6985", name: "The Gossip Girls" },
  { id: "7ef915d0-0b76-4a86-856c-ce46e7d8b823", name: "The Dig" },
  { id: "4f28fb8b-d359-4efa-9a66-6baea895ef08", name: "Diss Track Inc." },
  { id: "2c7e09f4-4097-49a9-b3af-40725634bfb2", name: "Keeping It Reel" },
  {
    id: "f45c2cce-f26c-4279-941b-913dcac89340",
    name: "The Bureau of Unexplained Significance",
  },
  { id: "a1da4f7c-d5bc-4956-8147-797a1f18b47a", name: "The Cult Builder" },
  { id: "63cd72b3-dc65-4f7b-ac35-17e0e2682cf9", name: "The Lens Grinders" },
  { id: "472a87fa-51bc-4b65-8a4c-9f542fe218e8", name: "The Heist Crew" },
  { id: "adba2bbf-84f3-413f-b655-5fe43a3c0474", name: "The Improv Ensemble" },
  { id: "c9944051-5511-46d9-b09e-0c9ed68455e1", name: "The Infinite Table" },
  { id: "8e65fa36-4b9b-40f5-9f34-71b8183292c6", name: "The Last Stand" },
  { id: "a1353328-6900-4ad4-b0d5-e2a612a5c3fd", name: "The Roast Pit" },
  { id: "c49eeac5-67af-411b-b60c-8b0b87c73762", name: "The Shadow Council" },
  { id: "ea14fe38-1e3c-4806-961c-c2ae5ed801b7", name: "The Shark Tank" },
  { id: "08eb2915-d272-4937-bd56-ea69db4ef0fb", name: "The Tin Foil Hat Society" },
  { id: "eadb4cb9-12bc-44b4-a241-a731cc4badc4", name: "The What-If Room" },
  { id: "83a1f867-7b19-4f42-962b-e06fa167ba73", name: "A Thought's Potential" },
  {
    id: "8010742c-237c-409a-a374-02cca14a4c94",
    name: "The Customer Success Core",
  },
  { id: "7b098849-d18f-45dd-be8f-3b37e1a7f9c8", name: "The Digital Brain" },
  { id: "81dd2789-f2c1-4307-8a4c-8002575a04c7", name: "The Document Digestor" },
  {
    id: "8497f490-b28b-4c60-b1e0-db10b5581612",
    name: "The Accountant's Ledger",
  },
  { id: "98ddddb0-684e-49a5-a7bc-2ef812ce9d54", name: "The Legal Repository" },
  { id: "0d750764-476e-448a-9e68-86b3b2a572ae", name: "The Organization Core" },
  { id: "5bb86319-15b1-49da-b995-4f30fe18a445", name: "The Product Bible" },
  { id: "52a32f1d-0860-4354-ab0a-bbb1510d295a", name: "The Project Sink" },
  { id: "e85047f1-6e10-475b-9920-36a31dfad523", name: "The Second Brain" },
  { id: "d33836bb-cad2-4d6c-b4d7-85b1ce8a01c9", name: "The Research Engine" },
  { id: "0062bb4b-12e5-4361-9224-e3e27b660ea3", name: "The Wiki Gardener" },
  {
    id: "0ca66a7d-cc9b-4683-997f-e2fecb69a930",
    name: "The Intelligence Bureau",
  },
  { id: "c2f929c2-afd5-4db7-8800-d3589b7551bb", name: "The People Ops" },
  { id: "07301139-8cbe-473d-9acf-30bc270e1c24", name: "Only Viral" },
  { id: "61cc0e1e-90a0-4975-8334-91f63de06d5a", name: "The Ground Floor" },
  { id: "de2e3df1-3b25-418f-9adc-0b479c922134", name: "The Ledger Room" },
  { id: "860b00ce-5526-4fa9-9b8c-34f57575e64c", name: "The War Room" },
  { id: "24dc7df4-6392-40f4-bf78-835c9f98982b", name: "The Chef's Table" },
  { id: "f76982dc-db59-47fd-ae8d-93f3fc6e65c2", name: "The Oxford Room" },
  { id: "aebfd6d8-2307-4507-aab8-a121215d5b98", name: "The Dreamers" },
  { id: "fb587f18-2284-4ef2-b66c-b4c250a3bec8", name: "The Explainers" },
  { id: "18ed58c1-b20c-416e-b2c6-8c4f5616e718", name: "The Brief Room" },
  { id: "90b98ece-b890-4c5e-b84e-a3a0d8598648", name: "The Ghostwriters" },
  { id: "3d2758cd-3917-4a44-ae46-133804e50fab", name: "The Green Brief" },
  { id: "dba3992f-cb54-412c-8937-5d3fbc50a445", name: "The Incubator" },
  { id: "5f7174e6-c220-4699-9305-80bf3662c203", name: "The Alpha Desk" },
  { id: "9826e674-ec18-4538-ac35-93821cc876ea", name: "The Intelligence Bureau" },
  { id: "c7d919ff-9f2c-4993-b25f-ed46df8e495c", name: "The Panic Room" },
  { id: "818cb679-8e77-4f1e-b780-8dc42bc366eb", name: "The Pitching Room" },
  { id: "e4e88906-d8e3-4b2c-8f4c-3aeb3dc19a4d", name: "The Foundry" },
  { id: "5aad98c3-dc0e-44e5-acee-e7cfa90f4cfe", name: "The Production" },
  { id: "73f3f2b7-cfd4-4d5e-ba55-0f0bdafc41d9", name: "The Publisher" },
  { id: "8da0440b-5807-4773-ab74-e2dae0c21f11", name: "The Raise" },
  { id: "0ba5de29-23dd-4d8b-b2da-6c4381dc59b2", name: "The Red Team" },
  { id: "090d964b-3db5-486e-9c09-614208e76cb5", name: "The Clinical Consult" },
  { id: "981505fd-4aeb-4599-8e13-aee6e2cd2ad2", name: "The Writers' Room" },
  { id: "35712e95-fe95-4fe3-8bcc-e34a6c5744c0", name: "The Think Tank" },
  { id: "8daeae33-ae10-4c33-84dc-a6b88f277854", name: "The Eldercare Navigators" },
  { id: "7266469a-150b-4c5d-9825-d16c8f5bec50", name: "The Biohackers" },
  { id: "e1658081-73b0-4cd0-9148-cb8abc38eec9", name: "Cupid's Wingmen" },
  { id: "ee4a825f-122f-4dba-b43a-47676ea7674a", name: "The Happiness Architects" },
  { id: "4322ce24-947e-4ac0-9393-36a228823d48", name: "Life's Moments" },
  { id: "39b69d67-c989-48a3-83f4-20087b128eb5", name: "The Career Council" },
  { id: "d61ebd50-779c-44b2-ad4b-1282f750b7a1", name: "The People's Court" },
  { id: "1e3a4ffe-73ff-43ef-8ba0-5f41289f20cf", name: "The Infinite Classroom" },
  { id: "4e661334-c2f3-4a39-8c6d-59a48af70ece", name: "The Infinite Classroom" },
  { id: "e0db6f77-13eb-405d-9e2c-1d50000af21b", name: "The Parenting Hub" },
  { id: "aeb69aa6-9121-4b45-a135-b147712e7fc6", name: "Tough Love" },
  { id: "81cb1f36-6ec4-4395-941c-f5371e23c56d", name: "The Wanderlust Bureau" },
];

function normalizeKey(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function buildTeamIdMap(entries) {
  const map = new Map();
  for (const entry of entries) {
    const key = normalizeKey(entry.name);
    if (!key) {
      continue;
    }
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(entry.id);
  }
  return map;
}
function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

function addHeading(lines, level, title) {
  lines.push(`${"#".repeat(level)} ${title}`);
  lines.push("");
}

function addParagraph(lines, text) {
  if (!isNonEmptyString(text)) {
    return;
  }
  lines.push(text.trimEnd());
  lines.push("");
}

function addInlineLabel(lines, label, value) {
  if (value === null || value === undefined) {
    return;
  }
  if (typeof value === "number") {
    lines.push(`**${label}:** ${value}`);
    return;
  }
  if (!isNonEmptyString(value)) {
    return;
  }
  lines.push(`**${label}:** ${value}`);
}

function addCodeBlock(lines, language, text) {
  if (!isNonEmptyString(text)) {
    return;
  }
  lines.push(`\`\`\`${language}`);
  text.split(/\r?\n/).forEach((line) => lines.push(line));
  lines.push("```");
  lines.push("");
}

function addBulletList(lines, items, indentLevel = 0) {
  if (!isNonEmptyArray(items)) {
    return;
  }
  const indent = "  ".repeat(indentLevel);
  items.forEach((item) => lines.push(`${indent}- ${item}`));
}

function addOrderedList(lines, items, indentLevel = 0) {
  if (!isNonEmptyArray(items)) {
    return;
  }
  const indent = "  ".repeat(indentLevel);
  items.forEach((item, index) => {
    lines.push(`${indent}${index + 1}. ${item}`);
  });
}

function addTagsLine(lines, tags) {
  if (!isNonEmptyArray(tags)) {
    return;
  }
  lines.push(`\`Tags: ${tags.join(", ")}\``);
}

function formatModelParameters(modelParameters, config) {
  if (!modelParameters || !config) {
    return [];
  }

  const entries = [
    ["Creativity", modelParameters.creativity, config.creativity],
    ["Logic", modelParameters.logic, config.logic],
    ["Brain-tier", modelParameters.brainTier, config.brainTier],
    ["Memory", modelParameters.memory, config.memory],
  ];

  const lines = [];
  for (const [label, data, enabled] of entries) {
    if (!enabled || !data) {
      continue;
    }
    const hasScore = data.score !== null && data.score !== undefined;
    const rationale = isNonEmptyString(data.rationale) ? data.rationale.trim() : "";
    if (!hasScore && !rationale) {
      continue;
    }

    let text = `${label}:`;
    if (hasScore) {
      text += ` ${data.score}`;
    }
    if (rationale) {
      text += hasScore ? ` - ${rationale}` : ` ${rationale}`;
    }
    lines.push(text);
  }

  return lines;
}

function resolveConfig(configValue, fallback) {
  if (configValue === true) {
    return fallback;
  }
  if (configValue === false || configValue === undefined) {
    return null;
  }
  return configValue;
}

function resolveTeamIds(record, teamIdMap) {
  const name = record.teamName || record.fileName || "";
  const key = normalizeKey(name);
  return teamIdMap.get(key) || [];
}

function addSpacing(lines) {
  if (lines.length > 0 && lines[lines.length - 1] !== "") {
    lines.push("");
  }
}

function renderTraitBlock(lines, title, traits, tags) {
  if (!isNonEmptyArray(traits) && !isNonEmptyArray(tags)) {
    return;
  }
  lines.push(`**${title}:**`);
  addBulletList(lines, traits);
  addTagsLine(lines, tags);
  addSpacing(lines);
}

function formatTeamMembers(lines, members, config) {
  if (!config || !isNonEmptyArray(members)) {
    return;
  }

  addHeading(lines, 2, "Team Members");
  members.forEach((member, index) => {
    const title =
      config.name && isNonEmptyString(member.name)
        ? member.name
        : `Member ${index + 1}`;
    addHeading(lines, 3, title);

    if (config.teamFunction && isNonEmptyString(member.teamFunction)) {
      addInlineLabel(lines, "Team Function", member.teamFunction);
    }

    const requirementsConfig = resolveConfig(
      config.functionalityRequirements,
      ALL_TRUE_CONFIG.teamMembers.functionalityRequirements,
    );
    const requirements = member.functionalityRequirements || {};
    let hasFunctionality = false;

    if (requirementsConfig?.function) {
      if (isNonEmptyString(requirements.function)) {
        addInlineLabel(lines, "Function", requirements.function);
        hasFunctionality = true;
      }
    }
    if (requirementsConfig?.importance) {
      if (isNonEmptyString(requirements.importance)) {
        addInlineLabel(lines, "Importance", requirements.importance);
        hasFunctionality = true;
      }
    }
    if (requirementsConfig?.coverageArea) {
      if (isNonEmptyString(requirements.coverageArea)) {
        addInlineLabel(lines, "Coverage Area", requirements.coverageArea);
        hasFunctionality = true;
      }
    }

    const modelConfig = resolveConfig(
      requirementsConfig?.modelParameters,
      ALL_TRUE_CONFIG.teamMembers.functionalityRequirements.modelParameters,
    );
    const modelLines = modelConfig
      ? formatModelParameters(requirements.modelParameters, modelConfig)
      : [];
    if (modelLines.length > 0) {
      lines.push("**Model Parameters:**");
      addBulletList(lines, modelLines);
      hasFunctionality = true;
    }

    if (config.creativityScore || config.logicScore || config.brainTier || config.memory) {
      const scoreLines = [];
      if (
        config.creativityScore &&
        member.creativityScore !== null &&
        member.creativityScore !== undefined
      ) {
        scoreLines.push(`Creativity: ${member.creativityScore}`);
      }
      if (config.logicScore && member.logicScore !== null && member.logicScore !== undefined) {
        scoreLines.push(`Logic: ${member.logicScore}`);
      }
      if (config.brainTier && member.brainTier !== null && member.brainTier !== undefined) {
        scoreLines.push(`Brain-tier: ${member.brainTier}`);
      }
      if (config.memory && member.memory !== null && member.memory !== undefined) {
        scoreLines.push(`Memory: ${member.memory}`);
      }
      if (scoreLines.length > 0) {
        lines.push("**Scores:**");
        addBulletList(lines, scoreLines);
        hasFunctionality = true;
      }
    }

    if (hasFunctionality) {
      addSpacing(lines);
    }

    const hasPersona =
      (config.personalTraits && isNonEmptyArray(member.personalTraits)) ||
      (config.personalTraitsTags && isNonEmptyArray(member.personalTraitsTags)) ||
      (config.professionalTraits && isNonEmptyArray(member.professionalTraits)) ||
      (config.professionalTraitsTags && isNonEmptyArray(member.professionalTraitsTags));
    if (hasPersona) {
      lines.push("#### Persona");
      lines.push("");
      if (config.personalTraits || config.personalTraitsTags) {
        renderTraitBlock(
          lines,
          "Personal Traits",
          config.personalTraits ? member.personalTraits : [],
          config.personalTraitsTags ? member.personalTraitsTags : [],
        );
      }
      if (config.professionalTraits || config.professionalTraitsTags) {
        renderTraitBlock(
          lines,
          "Professional Traits",
          config.professionalTraits ? member.professionalTraits : [],
          config.professionalTraitsTags ? member.professionalTraitsTags : [],
        );
      }
    }

    if (config.specialCapabilities && isNonEmptyArray(member.specialCapabilities)) {
      lines.push("**Special Capabilities:**");
      addBulletList(lines, member.specialCapabilities);
      addSpacing(lines);
    }
  });
}

function formatTeams(records, config) {
  const lines = [];
  const teamIdMap = buildTeamIdMap(TEAM_ID_ENTRIES);

  records.forEach((record, index) => {
    lines.push(`\n--------- Team ${index + 1} -------`);
    const title = config.teamName
      ? record.teamName || record.fileName || `Team ${index + 1}`
      : record.fileName || record.teamName || `Team ${index + 1}`;
    addHeading(lines, 1, title);
  if (config.teamId) {
      const teamIds = resolveTeamIds(record, teamIdMap);
      teamIds.forEach((teamId) => lines.push(teamId));
    }
    if (config.folderName && isNonEmptyString(record.folderName)) {
      addInlineLabel(lines, "Folder", record.folderName);
    }
    if (config.fileName && isNonEmptyString(record.fileName)) {
      addInlineLabel(lines, "File", record.fileName);
    }
    addSpacing(lines);

    if (config.teamName || config.catchPhrase) {
      const hasTeamName = config.teamName && isNonEmptyString(record.teamName);
      const hasCatchPhrase = config.catchPhrase && isNonEmptyString(record.catchPhrase);
      if (hasTeamName || hasCatchPhrase) {
        addHeading(lines, 2, "Identity");
        if (hasTeamName) {
          addInlineLabel(lines, "Team Name", record.teamName);
        }
        if (hasCatchPhrase) {
          addInlineLabel(lines, "Catch Phrase", record.catchPhrase);
        }
        addSpacing(lines);
      }
    }

    if (config.description && isNonEmptyString(record.description)) {
      addHeading(lines, 2, "Description");
      addParagraph(lines, record.description);
    }

    if (config.defaultStartingRounds || config.quickStarts) {
      const hasDefaultRounds =
        config.defaultStartingRounds &&
        record.defaultStartingRounds !== null &&
        record.defaultStartingRounds !== undefined;
      const hasQuickStarts = config.quickStarts && isNonEmptyArray(record.quickStarts);
      if (hasDefaultRounds || hasQuickStarts) {
        addHeading(lines, 2, "Session Configuration");
        if (hasDefaultRounds) {
          addInlineLabel(lines, "Default Starting Rounds", record.defaultStartingRounds);
        }
        if (hasQuickStarts) {
          lines.push("**Quick Starts:**");
          addOrderedList(lines, record.quickStarts);
        }
        addSpacing(lines);
      }
    }

    const memberConfig = resolveConfig(
      config.teamMembers,
      ALL_TRUE_CONFIG.teamMembers,
    );
    if (memberConfig) {
      formatTeamMembers(lines, record.teamMembers || [], memberConfig);
    }

    if (config.asObject) {
      if (record.asObject && record.asObject.length > 0) {
        addHeading(lines, 2, "asObject");
        const json = JSON.stringify(record.asObject || [], null, 2);
        addCodeBlock(lines, "json", json);
      }
    }

    if (index < records.length - 1) {
      lines.push("---");
      lines.push("");
    }
  });

  return lines.join("\n");
}

async function main() {
  const raw = await fs.readFile(inputPath, "utf8");
  const records = JSON.parse(raw);
  const output = formatTeams(records, ALL_TRUE_CONFIG);
  await fs.writeFile(outputPath, output, "utf8");
  console.log(`Wrote ${records.length} teams to ${outputPath}`);
}

main().catch((error) => {
  console.error("Failed to format teams batch:", error);
  process.exit(1);
});
