#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const workDir = path.dirname(__filename);
const comparison = JSON.parse(fs.readFileSync(path.join(workDir, 'comparison.json'), 'utf-8'));

const teamId = process.argv[2];
if (!teamId || !comparison[teamId]) {
  console.error('Usage: node score-results.js <team-id>');
  console.error('Available teams:', Object.keys(comparison).slice(0, 5).join(', '), '...');
  process.exit(1);
}

const versions = comparison[teamId];
const original = versions.find(v => v.version === 'original');

function scoreModel(version) {
  const result = {
    model: version.version,
    scores: {},
    issues: [],
    disqualified: false
  };

  // 1. JSON Structure Validation
  const requiredFields = ['name', 'catchPhrase', 'description', 'members'];
  const missingFields = requiredFields.filter(f => !version[f]);
  if (missingFields.length > 0) {
    result.issues.push(`Missing fields: ${missingFields.join(', ')}`);
    result.scores.structure = 0;
    if (missingFields.includes('members')) {
      result.disqualified = true;
      result.issues.push('DISQUALIFIED: Missing members array');
    }
  } else {
    result.scores.structure = 10;
  }

  // 2. Members Validation
  if (version.members && Array.isArray(version.members)) {
    const originalMemberCount = original.members?.length || 0;
    const memberCount = version.members.length;

    if (memberCount === 0) {
      result.scores.members = 0;
      result.disqualified = true;
      result.issues.push('DISQUALIFIED: Empty members array');
    } else if (memberCount < originalMemberCount) {
      result.scores.members = Math.round((memberCount / originalMemberCount) * 10);
      result.issues.push(`Lost members: ${originalMemberCount - memberCount} missing`);
    } else {
      result.scores.members = 10;
    }

    // Check member structure
    const memberIssues = [];
    version.members.forEach((m, i) => {
      if (!m.name) memberIssues.push(`Member ${i}: missing name`);
      if (!m.teamFunction) memberIssues.push(`Member ${i}: missing teamFunction`);
      if (!m.lifeStory) memberIssues.push(`Member ${i}: missing lifeStory`);
      if (!Array.isArray(m.personalTraits)) memberIssues.push(`Member ${i}: personalTraits not array`);
      if (!Array.isArray(m.professionalTraits)) memberIssues.push(`Member ${i}: professionalTraits not array`);
    });
    if (memberIssues.length > 0) {
      result.issues.push(...memberIssues.slice(0, 3));
      if (memberIssues.length > 3) result.issues.push(`...and ${memberIssues.length - 3} more member issues`);
    }
  }

  // 3. Directive Compliance - No "we/our" or "you/your"
  const allText = JSON.stringify(version).toLowerCase();
  const weOurMatches = allText.match(/\b(we are|we're|our |ours|ourselves)\b/g) || [];
  const youYourMatches = allText.match(/\b(you |your |you're|yours|yourself)\b/g) || [];

  if (weOurMatches.length > 0) {
    result.issues.push(`Directive violation: "we/our" found ${weOurMatches.length}x`);
    result.scores.directive = Math.max(0, 10 - weOurMatches.length * 2);
  } else if (youYourMatches.length > 0) {
    result.issues.push(`Directive violation: "you/your" found ${youYourMatches.length}x`);
    result.scores.directive = Math.max(0, 10 - youYourMatches.length * 2);
  } else {
    result.scores.directive = 10;
  }

  // 4. Creativity - Did they actually rewrite?
  const nameChanged = version.name !== original.name;
  const catchPhraseChanged = version.catchPhrase !== original.catchPhrase;
  const descriptionChanged = version.description !== original.description;

  let creativityScore = 0;
  if (nameChanged) creativityScore += 4;
  if (catchPhraseChanged) creativityScore += 3;
  if (descriptionChanged) creativityScore += 3;

  result.scores.creativity = creativityScore;
  if (creativityScore === 0) {
    result.issues.push('No creative changes - copied original verbatim');
  } else if (creativityScore < 5) {
    result.issues.push('Minimal changes from original');
  }

  // 5. Description length check (~300 chars target)
  if (version.description) {
    const descLen = version.description.length;
    if (descLen > 500) {
      result.issues.push(`Description too long: ${descLen} chars (target ~300)`);
      result.scores.conciseness = Math.max(0, 10 - Math.floor((descLen - 300) / 50));
    } else if (descLen < 100) {
      result.issues.push(`Description too short: ${descLen} chars`);
      result.scores.conciseness = 5;
    } else {
      result.scores.conciseness = 10;
    }
  } else {
    result.scores.conciseness = 0;
  }

  // Calculate total score
  const scoreValues = Object.values(result.scores);
  result.totalScore = Math.round(scoreValues.reduce((a, b) => a + b, 0) / scoreValues.length * 10) / 10;

  if (result.disqualified) {
    result.totalScore = 0;
  }

  return result;
}

// Score all models
const results = versions
  .filter(v => v.version !== 'original')
  .map(scoreModel)
  .sort((a, b) => b.totalScore - a.totalScore);

// Output results
console.log(`\n# Scoring Results for: ${teamId}\n`);
console.log(`Original team: "${original.name}"`);
console.log(`Original members: ${original.members?.length || 0}`);
console.log(`Models tested: ${results.length}\n`);

console.log('## Rankings\n');
console.log('| Rank | Model | Score | Structure | Members | Directive | Creativity | Concise | Status |');
console.log('|------|-------|-------|-----------|---------|-----------|------------|---------|--------|');

results.forEach((r, i) => {
  const status = r.disqualified ? '❌ DQ' : '✓';
  console.log(`| ${i + 1} | ${r.model} | ${r.totalScore} | ${r.scores.structure || 0} | ${r.scores.members || 0} | ${r.scores.directive || 0} | ${r.scores.creativity || 0} | ${r.scores.conciseness || 0} | ${status} |`);
});

console.log('\n## Issues by Model\n');
results.forEach(r => {
  if (r.issues.length > 0) {
    console.log(`### ${r.model}`);
    r.issues.forEach(issue => console.log(`- ${issue}`));
    console.log('');
  }
});

// Output JSON for further processing
fs.writeFileSync(
  path.join(workDir, 'scoring-results.json'),
  JSON.stringify({ teamId, original: original.name, results }, null, 2)
);
console.log('Detailed results saved to scoring-results.json');
