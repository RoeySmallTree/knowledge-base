#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const OPENROUTER_API_KEY = process.env.OPEN_ROUTER_API_KEY;
const BASE_URL = 'https://openrouter.ai/api/v1/chat/completions';

if (!OPENROUTER_API_KEY) {
  console.error('Error: OPEN_ROUTER_API_KEY environment variable is not set');
  process.exit(1);
}

const workDir = path.dirname(__filename);

// Read files
const prompt = fs.readFileSync(path.join(workDir, 'copywriter-prompt.md'), 'utf-8');
const modelsFile = fs.readFileSync(path.join(workDir, 'participating-models.md'), 'utf-8');
const comparison = JSON.parse(fs.readFileSync(path.join(workDir, 'comparison.json'), 'utf-8'));

// Parse models (filter empty lines)
const models = modelsFile.split('\n').map(m => m.trim()).filter(m => m && !m.startsWith('#'));

console.log(`Loaded ${Object.keys(comparison).length} teams`);
console.log(`Loaded ${models.length} models: ${models.join(', ')}`);

async function callOpenRouter(model, teamData) {
  // Remove version field for the prompt
  const { version, ...contentForPrompt } = teamData;

  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://github.com/cabal',
      'X-Title': 'CABAL Copywriter'
    },
    body: JSON.stringify({
      model: model,
      messages: [
        {
          role: 'system',
          content: prompt
        },
        {
          role: 'user',
          content: JSON.stringify(contentForPrompt, null, 2)
        }
      ],
      temperature: 0.8,
      response_format: { type: 'json_object' }
    })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API error for ${model}: ${response.status} - ${error}`);
  }

  const result = await response.json();
  const content = result.choices[0].message.content;

  // Parse and validate JSON response
  let parsed;
  try {
    parsed = JSON.parse(content);
  } catch (e) {
    // Try to extract JSON from markdown code blocks
    const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      parsed = JSON.parse(jsonMatch[1]);
    } else {
      throw new Error(`Invalid JSON response from ${model}: ${content.substring(0, 200)}`);
    }
  }

  return {
    version: model,
    ...parsed
  };
}

async function processTeam(teamId, teamVersions) {
  const originalData = teamVersions[0]; // The "original" version

  console.log(`\nProcessing team: ${teamId} (${originalData.name})`);

  // Call all models in parallel
  const promises = models.map(model =>
    callOpenRouter(model, originalData)
      .then(result => {
        console.log(`  ✓ ${model} completed for ${teamId}`);
        return result;
      })
      .catch(error => {
        console.error(`  ✗ ${model} failed for ${teamId}: ${error.message}`);
        return null;
      })
  );

  const results = await Promise.all(promises);

  // Filter out failed results and append successful ones
  const successfulResults = results.filter(r => r !== null);
  return [...teamVersions, ...successfulResults];
}

async function main() {
  // Get team IDs from command line args, or process all
  const args = process.argv.slice(2);
  let teamIds = Object.keys(comparison);

  if (args.length > 0) {
    // Filter to only specified teams
    teamIds = args.filter(id => comparison[id]);
    if (teamIds.length === 0) {
      console.error('No valid team IDs provided');
      console.log('Available teams:', Object.keys(comparison).slice(0, 10).join(', '), '...');
      process.exit(1);
    }
  }

  console.log(`\nProcessing ${teamIds.length} team(s)...`);

  // Process teams sequentially to avoid rate limits
  for (const teamId of teamIds) {
    try {
      comparison[teamId] = await processTeam(teamId, comparison[teamId]);
    } catch (error) {
      console.error(`Error processing team ${teamId}:`, error.message);
    }
  }

  // Save updated comparison.json
  fs.writeFileSync(
    path.join(workDir, 'comparison.json'),
    JSON.stringify(comparison, null, 2)
  );

  console.log('\n✓ Saved updated comparison.json');
}

main().catch(console.error);
