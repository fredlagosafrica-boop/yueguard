#!/usr/bin/env node
const fs = require('fs');
const files = fs.readdirSync('.').filter(function(f) { return f.startsWith('s_2_1_1_x_') && f.endsWith('.js'); });
var errors = [];
files.forEach(function(f) {
  try {
    new Function(fs.readFileSync(f, 'utf8'));
  } catch(e) {
    errors.push(f + ': ' + e.message);
  }
});
if (errors.length) {
  console.log('ERRORS: ' + errors.length);
  errors.slice(0,5).forEach(function(e) { console.log(e); });
} else {
  console.log('All ' + files.length + ' files OK');
});