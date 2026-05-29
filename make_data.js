const fs = require('fs');
const html = fs.readFileSync('src/pages/index.astro', 'utf8');

const sectionMatches = html.match(/<section[\s\S]*?<\/section>/g);

const data = {
  textSection1: "",
  section2Title: "Lorem Ipsum Dolor Sit Amet",
  textSection2: "",
  textSection3: "",
  textSection4: "",
  section5Title: "Lorem Ipsum Dolor Sit Amet",
  textSection5: "",
  textSection6: "",
  section7Title: "Lorem Ipsum Dolor Sit Amet",
  textSection7: "",
  textSection8: "",
  textSection9: ""
};

let sectionIndex = 1;
let textKeyIndex = 1;

sectionMatches.forEach(sec => {
  const isTitleSec = sec.includes('<h2');
  const pTags = sec.match(/<p[^>]*>([\s\S]*?)<\/p>/g);
  
  if (pTags && !sec.includes('timeline') && !sec.includes('Timeline') && sec.match(/text-lg|text-center/)) { // skip timeline and other specialized complex p tags if possible
    // Only map the major text sections.
    // The timeline section has p tags but they are part of cards. 
    // timeline section is index 4 (0-based) based on grep. Let's see:
    
  }
});
