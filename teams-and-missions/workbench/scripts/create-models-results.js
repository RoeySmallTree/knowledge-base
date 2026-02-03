const fs = require("fs");
const path = require("path");

const workDir = path.join(__dirname, "..");

// Read scoring results
const scoring = JSON.parse(fs.readFileSync(path.join(workDir, "copywrite/scoring-results.json"), "utf-8"));

// Read models from database cache
const dbModels = JSON.parse(fs.readFileSync(path.join(workDir, "temp-models-output.json"), "utf-8"));

// Models that failed to run (from our test)
const apiFailures = {
  "nex-agi/deepseek-v3.1-nex-n1:free": "404: Free period ended",
  "kwaipilot/kat-coder-pro:free": "404: Free period ended",
  "qwen/qwen-2.5-coder-32b-instruct": "404: Data policy mismatch",
  "deepseek/deepseek-r1-distill-qwen-14b": "404: No endpoints found",
  "tngtech/deepseek-r1t-chimera": "404: Data policy mismatch",
  "tngtech/deepseek-r1t2-chimera": "404: Data policy mismatch",
  "nousresearch/deephermes-3-mistral-24b-preview": "404: Data policy mismatch",
  "opengvlab/internvl3-78b": "404: Data policy mismatch",
  "openai/o4-mini-deep-research": "400: Temperature not supported",
  "openai/o3-deep-research": "400: Temperature not supported",
  "nvidia/nemotron-3-nano-30b-a3b": "405: JSON mode not supported",
  "qwen/qwen3-vl-235b-a22b-thinking": "429: Rate limited",
  "google/gemma-3-27b-it:free": "429: Rate limited",
  "mistralai/mistral-small-24b-instruct-2501": "429: Rate limited",
  "cognitivecomputations/dolphin-mistral-24b-venice-edition:free": "429: Rate limited",
  "bytedance-seed/seed-1.6-flash": "429: Rate limited",
  "sao10k/l3-lunaris-8b": "Invalid JSON: Empty response",
  "nousresearch/hermes-2-pro-llama-3-8b": "Invalid JSON: Empty response",
  "z-ai/glm-4.5v": "Invalid JSON: Truncated response",
  "undi95/remm-slerp-l2-13b": "Invalid JSON: Truncated response",
  "meta-llama/llama-3.1-405b-instruct": "Invalid JSON: Malformed response"
};

// Build combined results
const results = [];
let rank = 1;

// Add scored models
scoring.results.forEach(r => {
  const dbModel = dbModels.find(m => m.api_id === r.model);

  results.push({
    id: dbModel?.id || null,
    api_id: r.model,
    display_name: dbModel?.display_name || r.model.split("/")[1],
    ranking: r.status === "success" ? rank++ : null,
    score: r.total,
    tier: r.tier,
    isFail: r.status === "failed" || r.tier === "F",
    failReason: r.status === "failed" ? (r.error || "Disqualified") : (r.tier === "F" ? "Broken output" : null),
    issues: r.issues || [],
    scores: r.scores || null,
    latency_ms: r.latency_ms || null,
    tested: true
  });
});

// Add API failure models
Object.entries(apiFailures).forEach(([api_id, reason]) => {
  const dbModel = dbModels.find(m => m.api_id === api_id);

  // Check if already in results
  if (!results.find(r => r.api_id === api_id)) {
    results.push({
      id: dbModel?.id || null,
      api_id,
      display_name: dbModel?.display_name || api_id.split("/")[1],
      ranking: null,
      score: 0,
      tier: "F",
      isFail: true,
      failReason: reason,
      issues: [reason],
      scores: null,
      latency_ms: null,
      tested: true
    });
  }
});

// Add untested models from DB
dbModels.forEach(m => {
  if (!results.find(r => r.api_id === m.api_id)) {
    results.push({
      id: m.id,
      api_id: m.api_id,
      display_name: m.display_name,
      ranking: null,
      score: null,
      tier: null,
      isFail: null,
      failReason: null,
      issues: [],
      scores: null,
      latency_ms: null,
      tested: false
    });
  }
});

// Sort: tested first (by ranking), then untested
results.sort((a, b) => {
  if (a.tested && !b.tested) return -1;
  if (!a.tested && b.tested) return 1;
  if (a.ranking && b.ranking) return a.ranking - b.ranking;
  if (a.ranking) return -1;
  if (b.ranking) return 1;
  return (b.score || 0) - (a.score || 0);
});

const output = {
  generated_at: new Date().toISOString(),
  test_team: "the-cult-builders",
  total_models: results.length,
  tested: results.filter(r => r.tested).length,
  passed: results.filter(r => r.tested && !r.isFail).length,
  failed: results.filter(r => r.tested && r.isFail).length,
  models: results
};

fs.writeFileSync(path.join(workDir, "copywrite/models-test-results.json"), JSON.stringify(output, null, 2));
console.log("Created models-test-results.json");
console.log("Total models:", output.total_models);
console.log("Tested:", output.tested);
console.log("Passed:", output.passed);
console.log("Failed:", output.failed);
