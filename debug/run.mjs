#!/usr/bin/env node
import 'dotenv/config';
import * as queries from './queries.mjs';
import { printEnvHelp } from './supabaseClient.mjs';

const args = process.argv.slice(2);
const [queryName, payloadRaw] = args;

function availableFunctions() {
  return Object.entries(queries)
    .filter(([, value]) => typeof value === 'function')
    .map(([name]) => name);
}

function usage(exitCode = 0) {
  const fns = availableFunctions();
  const envStatus = printEnvHelp();
  console.log(`Usage: node debug/run.mjs <functionName> '<jsonPayload>'`);
  console.log(`Available functions: ${fns.join(', ') || '(none)'}`);
  console.log('Required present:', envStatus.requiredPresent.join(', ') || '(none)');
  console.log('Required missing:', envStatus.requiredMissing.join(', ') || '(none)');
  console.log(
    'Keys available (need at least one):',
    envStatus.keysAvailable.join(', ') || '(none)'
  );
  process.exit(exitCode);
}

if (!queryName || queryName === '--help' || queryName === '-h') {
  usage(queryName ? 0 : 1);
}

const queryFn = queries[queryName];
if (typeof queryFn !== 'function') {
  console.error(`Unknown function "${queryName}".`);
  usage(1);
}

let payload = {};
if (payloadRaw) {
  try {
    payload = JSON.parse(payloadRaw);
  } catch (err) {
    console.error('Failed to parse JSON payload. Wrap it in single quotes.');
    console.error(err.message);
    process.exit(1);
  }
}

console.log(`Running "${queryName}" with payload: ${JSON.stringify(payload) || '{}'}`);

(async () => {
  try {
    const result = await queryFn(payload);
    console.log('Result:');
    console.log(JSON.stringify(result, null, 2));
  } catch (err) {
    console.error(`Query "${queryName}" failed:`, err.message);
    process.exit(1);
  }
})();
