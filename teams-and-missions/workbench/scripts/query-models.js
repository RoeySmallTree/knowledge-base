const fs = require('fs');
const path = require('path');

const SUPABASE_URL = "https://rnfnqkygadgeaochiucg.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuZm5xa3lnYWRnZWFvY2hpdWNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1NTIyNDEsImV4cCI6MjA3NDEyODI0MX0.bDfc-zfu6_m70oJkcZRXHxHNPHxXUKSCHx43svkTo1A";

async function main() {
  // First get all columns by selecting *
  const response = await fetch(`${SUPABASE_URL}/rest/v1/llm_models?select=*`, {
    headers: {
      "apikey": SUPABASE_ANON_KEY,
      "Authorization": `Bearer ${SUPABASE_ANON_KEY}`
    }
  });

  const data = await response.json();

  const outputPath = path.join(__dirname, '../temp-models-output.json');
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));

  console.log(`Output written to: ${outputPath}`);
  console.log(`Found ${Array.isArray(data) ? data.length : 0} models`);

  // Show column names if we got data
  if (Array.isArray(data) && data.length > 0) {
    console.log('Columns:', Object.keys(data[0]).join(', '));
  }
}

main().catch(console.error);
