const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html') || f.endsWith('.txt'));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  // replace emails
  content = content.replace(/maheshwarreddymr39@gmail\.com/g, 'social@mahiiverse.com');
  content = content.replace(/hello@mahiiverse\.in/g, 'social@mahiiverse.com');
  content = content.replace(/projects@mahiiverse\.in/g, 'social@mahiiverse.com');
  
  // replace phone numbers
  content = content.replace(/90711\s*60399/g, '81510 00988');
  content = content.replace(/9071160399/g, '8151000988');
  content = content.replace(/\+919071160399/g, '+918151000988');

  fs.writeFileSync(file, content);
}
console.log('Replaced all occurrences in HTML and TXT files.');
