#!/usr/bin/env node

/**
 * Multi-Model Aggregator - Sends a prompt to multiple models and aggregates responses
 *
 * Usage:
 *   node multi-model.js --prompt "Your task" --models "openai/*,anthropic/*" --output results.json
 *   node multi-model.js --prompt-file task.md --models "all" --output results.json
 */

const fs = require('fs');
const path = require('path');

const SUPABASE_URL = "https://rnfnqkygadgeaochiucg.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuZm5xa3lnYWRnZWFvY2hpdWNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1NTIyNDEsImV4cCI6MjA3NDEyODI0MX0.bDfc-zfu6_m70oJkcZRXHxHNPHxXUKSCHx43svkTo1A";
const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

function getApiKey() {
  if (process.env.OPEN_ROUTER_API_KEY) return process.env.OPEN_ROUTER_API_KEY;

  const envPaths = [
    path.join(process.cwd(), '.env'),
    path.join(__dirname, '../../.env'),
    path.join(__dirname, '../../../.env')
  ];

  for (const envPath of envPaths) {
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf-8');
      const match = content.match(/OPEN_ROUTER_API_KEY=(.+)/);
      if (match) return match[1].trim();
    }
  }
  throw new Error('OPEN_ROUTER_API_KEY not found');
}

async function fetchModels() {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/llm_models?is_active=eq.true&select=api_id,display_name`,
    { headers: { "apikey": SUPABASE_ANON_KEY, "Authorization": `Bearer ${SUPABASE_ANON_KEY}` } }
  );
  if (!response.ok) throw new Error(`Failed to fetch models: ${response.status}`);
  return response.json();
}

function filterModels(allModels, spec) {
  if (spec === 'all') return allModels.map(m => m.api_id);

  const specs = spec.split(',').map(s => s.trim());
  const include = [];
  const exclude = [];

  specs.forEach(s => {
    if (s.startsWith('exclude:')) {
      exclude.push(...s.replace('exclude:', '').split('|'));
    } else if (s.includes('*')) {
      const pattern = s.replace('*', '');
      allModels.forEach(m => {
        if (m.api_id.startsWith(pattern)) include.push(m.api_id);
      });
    } else {
      if (allModels.find(m => m.api_id === s)) include.push(s);
      else include.push(s); // Allow models not in DB
    }
  });

  return include.filter(m => !exclude.some(ex => m.toLowerCase().includes(ex.toLowerCase())));
}

async function callModel(apiKey, model, prompt, options = {}) {
  const startTime = Date.now();

  try {
    const body = {
      model,
      messages: [{ role: 'user', content: prompt }]
    };

    if (options.system_prompt) {
      body.messages.unshift({ role: 'system', content: options.system_prompt });
    }
    if (options.temperature !== undefined && !model.includes('deep-research')) {
      body.temperature = options.temperature;
    }
    if (options.json_mode) {
      body.response_format = { type: 'json_object' };
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), options.timeout || 120000);

    const response = await fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://github.com/cabal',
        'X-Title': 'CABAL Multi-Model'
      },
      body: JSON.stringify(body),
      signal: controller.signal
    });

    clearTimeout(timeout);
    const latency = Date.now() - startTime;

    if (!response.ok) {
      const error = await response.text();
      return { model, success: false, error: `${response.status}: ${error.substring(0, 100)}`, latency_ms: latency };
    }

    const result = await response.json();
    let content = result.choices?.[0]?.message?.content;

    if (!content) {
      return { model, success: false, error: 'Empty response', latency_ms: latency };
    }

    // Try to parse JSON if requested
    if (options.json_mode || options.expect_json) {
      try {
        content = JSON.parse(content);
      } catch (e) {
        const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
        if (jsonMatch) {
          try { content = JSON.parse(jsonMatch[1]); } catch (e2) {}
        }
      }
    }

    return { model, success: true, output: content, latency_ms: latency };

  } catch (error) {
    return {
      model,
      success: false,
      error: error.name === 'AbortError' ? 'Timeout' : error.message,
      latency_ms: Date.now() - startTime
    };
  }
}

async function run(prompt, models, options = {}) {
  const apiKey = getApiKey();

  console.log(`\nSending to ${models.length} models...`);

  const results = {};
  const errors = {};
  const batchSize = options.batch_size || 20;

  for (let i = 0; i < models.length; i += batchSize) {
    const batch = models.slice(i, i + batchSize);
    console.log(`Batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(models.length/batchSize)}`);

    const batchResults = await Promise.all(
      batch.map(model => callModel(apiKey, model, prompt, options))
    );

    batchResults.forEach(r => {
      if (r.success) {
        results[r.model] = r.output;
        console.log(`  ✓ ${r.model} (${r.latency_ms}ms)`);
      } else {
        errors[r.model] = r.error;
        console.log(`  ✗ ${r.model}: ${r.error.substring(0, 40)}`);
      }
    });
  }

  return {
    task: prompt.substring(0, 500),
    timestamp: new Date().toISOString(),
    models_attempted: models.length,
    models_succeeded: Object.keys(results).length,
    results,
    errors
  };
}

async function main() {
  const args = process.argv.slice(2);
  const options = {};
  let prompt = '';
  let modelSpec = '';
  let outputFile = 'multi-model-results.json';

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--prompt': prompt = args[++i]; break;
      case '--prompt-file': prompt = fs.readFileSync(args[++i], 'utf-8'); break;
      case '--system-prompt': options.system_prompt = args[++i]; break;
      case '--system-prompt-file': options.system_prompt = fs.readFileSync(args[++i], 'utf-8'); break;
      case '--models': modelSpec = args[++i]; break;
      case '--models-file':
        modelSpec = fs.readFileSync(args[++i], 'utf-8').split('\n').filter(l => l.trim() && !l.startsWith('#')).join(',');
        break;
      case '--output': outputFile = args[++i]; break;
      case '--json-mode': options.json_mode = true; options.expect_json = true; break;
      case '--temperature': options.temperature = parseFloat(args[++i]); break;
      case '--timeout': options.timeout = parseInt(args[++i]) * 1000; break;
      case '--batch-size': options.batch_size = parseInt(args[++i]); break;
      case '--help':
        console.log(`
Multi-Model Aggregator - Send prompt to multiple models, aggregate responses

Usage: node multi-model.js [options]

Options:
  --prompt <text>           Prompt to send
  --prompt-file <path>      Read prompt from file
  --system-prompt <text>    System prompt
  --system-prompt-file <p>  Read system prompt from file
  --models <spec>           Models: "all", "vendor/*", "model1,model2", "exclude:pattern"
  --models-file <path>      Read models from file (one per line)
  --output <path>           Output JSON file
  --json-mode               Request JSON responses
  --temperature <n>         Temperature setting
  --timeout <seconds>       Per-model timeout (default: 120)
  --batch-size <n>          Concurrent requests (default: 20)
`);
        process.exit(0);
    }
  }

  if (!prompt) { console.error('Error: --prompt or --prompt-file required'); process.exit(1); }
  if (!modelSpec) { console.error('Error: --models required'); process.exit(1); }

  console.log('Fetching models...');
  const allModels = await fetchModels();
  const models = filterModels(allModels, modelSpec);
  console.log(`Using ${models.length} models`);

  if (models.length === 0) { console.error('No models match specification'); process.exit(1); }

  const output = await run(prompt, models, options);

  fs.writeFileSync(outputFile, JSON.stringify(output, null, 2));
  console.log(`\n✓ Results saved to ${outputFile}`);
  console.log(`  Succeeded: ${output.models_succeeded}/${output.models_attempted}`);
}

module.exports = { fetchModels, filterModels, run };

if (require.main === module) {
  main().catch(err => { console.error('Error:', err.message); process.exit(1); });
}
