import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const [app, html, constants] = await Promise.all([
  readFile(new URL('../App.tsx', import.meta.url), 'utf8'),
  readFile(new URL('../index.html', import.meta.url), 'utf8'),
  readFile(new URL('../constants.ts', import.meta.url), 'utf8'),
]);

assert.match(app, /<h1[\s\S]*We make clear, useful digital things/);
assert.equal((app.match(/<h1\b/g) ?? []).length, 1, 'The page should contain exactly one H1');

for (const phrase of ['MEWPHUB.com', 'SpiderMEWP.com', 'FindAMEWP.com', 'DayStreetMOT.co.uk', 'NKC Bar 141']) {
  assert.match(`${app}\n${constants}`, new RegExp(phrase));
}

assert.match(app, /mailto:info@mewphub\.com/);
assert.match(html, /<link rel="canonical"/);
assert.match(html, /application\/ld\+json/);

for (const url of [
  'https://mewphub.com',
  'https://spidermewp.com',
  'https://findamewp.com',
  'https://daystreetmot.co.uk',
]) {
  assert.match(constants, new RegExp(url.replaceAll('.', '\\.'), 'i'));
}

assert.doesNotMatch(app, /System Online|Establish Connection|Transmission Received|INITIATE TRANSFER/);
assert.doesNotMatch(html, /cdn\.tailwindcss\.com|CLICK_TO_ENTER|System Boot/);

console.log('Site contract passed.');
