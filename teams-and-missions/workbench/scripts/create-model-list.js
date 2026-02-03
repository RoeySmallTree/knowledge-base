const fs = require('fs');
const path = require('path');

const SUPABASE_URL = 'https://rnfnqkygadgeaochiucg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuZm5xa3lnYWRnZWFvY2hpdWNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1NTIyNDEsImV4cCI6MjA3NDEyODI0MX0.bDfc-zfu6_m70oJkcZRXHxHNPHxXUKSCHx43svkTo1A';

const workDir = path.join(__dirname, '..');

async function main() {
  // Query active (non-archived) models
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/llm_models?is_active=eq.true&select=*`,
    { headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` } }
  );

  if (!response.ok) {
    console.error('Failed:', await response.text());
    process.exit(1);
  }

  const models = await response.json();

  // Load test results
  const testResults = JSON.parse(fs.readFileSync(path.join(workDir, 'copywrite/models-test-results.json'), 'utf-8'));

  // Merge scores into models
  const modelList = models.map(m => {
    const testData = testResults.models.find(t => t.api_id === m.api_id);
    return {
      id: m.id,
      api_id: m.api_id,
      display_name: m.display_name,
      is_active: m.is_active,
      ranking: testData?.ranking || null,
      score: testData?.score || null,
      tier: testData?.tier || null,
      isFail: testData?.isFail || null,
      failReason: testData?.failReason || null,
      scores: testData?.scores || null,
      tested: testData?.tested || false
    };
  });

  // Sort by ranking (tested first, then by score)
  modelList.sort((a, b) => {
    if (a.tested && !b.tested) return -1;
    if (!a.tested && b.tested) return 1;
    if (a.ranking && b.ranking) return a.ranking - b.ranking;
    if (a.ranking) return -1;
    if (b.ranking) return 1;
    return (b.score || 0) - (a.score || 0);
  });

  const output = {
    generated_at: new Date().toISOString(),
    total_models: modelList.length,
    active: modelList.filter(m => m.is_active).length,
    tested: modelList.filter(m => m.tested).length,
    models: modelList
  };

  const outPath = path.join(workDir, 'processing/members-models/model-list.json');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2));

  console.log('Created model-list.json');
  console.log('Total models:', output.total_models);
  console.log('Active:', output.active);
  console.log('Tested:', output.tested);
}

main();
