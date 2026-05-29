const fs = require('fs');
let html = fs.readFileSync('src/pages/index.astro', 'utf8');

// Replace first text section
const sec1Regex = /<div class="text-lg md:text-xl text-gray-800 space-y-6 font-serif leading-relaxed">\s*<p data-motion="fade-up" style="animation-delay: 0ms">[\s\S]*?<p data-motion="fade-up" style="animation-delay: 3600ms">[\s\S]*?<\/p>\s*<\/div>/;
html = html.replace(sec1Regex, 
`<div class="text-lg md:text-xl text-gray-800 space-y-6 font-serif leading-relaxed">
            {parseParagraphs(homepage.textSection1).map((p, i) => {
              const isQuote = p.trim().startsWith('“') || p.trim().startsWith('"');
              return (
                <p data-motion="fade-up" style={\`animation-delay: \${i * 150}ms\`} class={isQuote ? "italic text-gray-600 pl-4 border-l-4 border-yellow-400" : ""}>
                  {p}
                </p>
              );
            })}
          </div>`
);

fs.writeFileSync('src/pages/index.astro', html);
