const fs = require('fs');
let html = fs.readFileSync('src/pages/index.astro', 'utf8');

// Section 2 Title
html = html.replace(/<h2\s+class="text-3xl md:text-4xl font-black mb-6 text-gray-900 border-b-2 border-red-500 pb-2"\s+data-motion="fade-right"\s*>\s*Lorem Ipsum Dolor Sit Amet\s*<\/h2>/,
`<h2
              class="text-3xl md:text-4xl font-black mb-6 text-gray-900 border-b-2 border-red-500 pb-2"
              data-motion="fade-right"
            >
              {homepage.section2Title}
            </h2>`
);

// Section 2 Text
const sec2Regex = /<div class="text-lg md:text-xl text-gray-800 space-y-6 font-serif leading-relaxed">\s*<p data-motion="fade-left" style="animation-delay: 100ms">[\s\S]*?<p data-motion="fade-up" style="animation-delay: 700ms">[\s\S]*?<\/p>\s*<\/div>/;
html = html.replace(sec2Regex,
`<div class="text-lg md:text-xl text-gray-800 space-y-6 font-serif leading-relaxed">
            {parseParagraphs(homepage.textSection2).map((p, i) => {
              // The original had an alternating pattern for fade-left, fade-right, and fade-up
              // Let's keep it simple: alternating left-right, and last one up
              const delays = [100, 200, 300, 400, 500, 600, 700];
              const motions = ['fade-left', 'fade-right', 'fade-left', 'fade-right', 'fade-left', 'fade-right', 'fade-up'];
              const motion = motions[i] || 'fade-up';
              const delay = delays[i] || (i * 100);
              return (
                <p data-motion={motion} style={\`animation-delay: \${delay}ms\`}>
                  {p}
                </p>
              );
            })}
          </div>`
);

// Section 3 Text
const sec3Regex = /<div class="text-lg md:text-xl text-gray-800 space-y-6 font-serif leading-relaxed">\s*<p data-motion="fade-up" style="animation-delay: 50ms">[\s\S]*?<p data-motion="fade-up" style="animation-delay: 2050ms">[\s\S]*?<\/p>\s*<\/div>/;
html = html.replace(sec3Regex,
`<div class="text-lg md:text-xl text-gray-800 space-y-6 font-serif leading-relaxed">
            {parseParagraphs(homepage.textSection3).map((p, i) => {
              const isQuote = p.trim().startsWith('“') || p.trim().startsWith('"');
              return (
                <p data-motion="fade-up" style={\`animation-delay: \${50 + (i * 100)}ms\`} class={isQuote ? "italic text-gray-600 pl-4 border-l-4 border-red-500" : ""}>
                  {p}
                </p>
              );
            })}
          </div>`
);

// Section 4 Text (Colored borders)
const sec4Regex = /<div class="text-lg md:text-xl text-gray-800 space-y-6 font-serif leading-relaxed">\s*<p data-motion="fade-left" style="animation-delay: 0ms">[\s\S]*?<p data-motion="fade-left" style="animation-delay: 900ms" class="pl-6 text-stone-600 font-semibold">[\s\S]*?<\/p>\s*<\/div>/;
html = html.replace(sec4Regex,
`<div class="text-lg md:text-xl text-gray-800 space-y-6 font-serif leading-relaxed">
            {parseParagraphs(homepage.textSection4).map((p, i) => {
              const borderColors = ["", "text-red-600 font-semibold", "text-blue-600 font-semibold", "", "", "text-emerald-600 font-semibold", "text-stone-600 font-semibold"];
              const colorClass = borderColors[i] || "";
              const baseClass = colorClass ? \`pl-6 \${colorClass}\` : "";
              return (
                <p data-motion="fade-left" style={\`animation-delay: \${i * 150}ms\`} class={baseClass}>
                  {p}
                </p>
              );
            })}
          </div>`
);

// Section 5 Title
html = html.replace(/<h2 class="text-3xl md:text-4xl font-black mb-6" data-motion="zoom-in">\s*Lorem Ipsum Dolor Sit Amet\s*<\/h2>/,
`<h2 class="text-3xl md:text-4xl font-black mb-6" data-motion="zoom-in">
              {homepage.section5Title}
            </h2>`
);

// Section 5 Text
const sec5Regex = /<div class="text-lg md:text-xl text-gray-800 space-y-6 font-serif leading-relaxed">\s*<p data-motion="zoom-in" style="animation-delay: 100ms">[\s\S]*?<p data-motion="zoom-in" style="animation-delay: 600ms">[\s\S]*?<\/p>\s*<\/div>/;
html = html.replace(sec5Regex,
`<div class="text-lg md:text-xl text-gray-800 space-y-6 font-serif leading-relaxed">
            {parseParagraphs(homepage.textSection5).map((p, i) => {
              const hasBg = p.trim().startsWith('“') || p.trim().startsWith('"');
              const extraClass = hasBg && p.includes("eros laoreet") ? "font-medium bg-yellow-50 p-4 rounded-md shadow-sm border-l-4 border-yellow-500" : "";
              return (
                <p data-motion="zoom-in" style={\`animation-delay: \${(i + 1) * 100}ms\`} class={extraClass}>
                  {p}
                </p>
              );
            })}
          </div>`
);

// Section 6 Text
const sec6Regex = /<div class="text-lg md:text-xl text-gray-800 space-y-6 font-serif leading-relaxed">\s*<p data-motion="fade-up" style="animation-delay: 0ms">\s*Lorem ipsum dolor sit amet[\s\S]*?<p data-motion="fade-up" style="animation-delay: 300ms">\s*Sed eleifend[\s\S]*?<\/p>\s*<\/div>/;
html = html.replace(sec6Regex,
`<div class="text-lg md:text-xl text-gray-800 space-y-6 font-serif leading-relaxed">
            {parseParagraphs(homepage.textSection6).map((p, i) => (
              <p data-motion="fade-up" style={\`animation-delay: \${i * 150}ms\`}>
                {p}
              </p>
            ))}
          </div>`
);

// Section 7 Title 
html = html.replace(/<h2 class="text-3xl md:text-4xl font-black mb-6 text-red-600" data-motion="fade-right">\s*Lorem Ipsum Dolor Sit Amet\s*<\/h2>/,
`<h2 class="text-3xl md:text-4xl font-black mb-6 text-red-600" data-motion="fade-right">
              {homepage.section7Title}
            </h2>`
);

// Section 7 Text
const sec7Regex = /<div class="text-lg md:text-xl text-gray-800 space-y-6 font-serif leading-relaxed">\s*<p data-motion="fade-left" style="animation-delay: 100ms">\s*Lorem ipsum dolor[\s\S]*?<p data-motion="fade-right" style="animation-delay: 600ms">[\s\S]*?<\/p>\s*<\/div>/;
html = html.replace(sec7Regex,
`<div class="text-lg md:text-xl text-gray-800 space-y-6 font-serif leading-relaxed">
            {parseParagraphs(homepage.textSection7).map((p, i) => {
              const motion = i % 2 === 0 ? "fade-left" : "fade-right";
              return (
                <p data-motion={motion} style={\`animation-delay: \${(i + 1) * 100}ms\`}>
                  {p}
                </p>
              );
            })}
          </div>`
);

// Section 8 Text (Dark background)
const sec8Regex = /<div class="text-lg md:text-xl text-gray-300 space-y-6 font-serif leading-relaxed">\s*<p data-motion="fade-up" style="animation-delay: 100ms">[\s\S]*?<p data-motion="fade-up" style="animation-delay: 1300ms">[\s\S]*?<\/p>\s*<\/div>/;
html = html.replace(sec8Regex,
`<div class="text-lg md:text-xl text-gray-300 space-y-6 font-serif leading-relaxed">
            {parseParagraphs(homepage.textSection8).map((p, i) => {
              const isYellow = p.trim().startsWith('“') || p.trim().startsWith('"');
              const motion = isYellow ? "zoom-in" : "fade-up";
              const classStr = isYellow ? "text-yellow-400 font-medium" : "";
              
              // We'll approximate the delay math, the original was somewhat spaced out
              return (
                <p data-motion={motion} style={\`animation-delay: \${100 + (i * 150)}ms\`} class={classStr}>
                  {p}
                </p>
              );
            })}
          </div>`
);

// Section 9 Text (Footer area)
const sec9Regex = /<div class="w-11\/12 md:w-8\/12 xl:w-6\/12 text-center text-sm">\s*<p data-motion="fade-in" style="animation-delay: 200ms">\s*Lorem ipsum dolor sit amet, consectetur adipiscing elit[\s\S]*?<\/p>\s*<\/div>/;
html = html.replace(sec9Regex,
`<div class="w-11/12 md:w-8/12 xl:w-6/12 text-center text-sm">
          {parseParagraphs(homepage.textSection9).map((p, i) => (
            <p data-motion="fade-in" style={\`animation-delay: \${200 + (i * 100)}ms\`}>
              {p}
            </p>
          ))}
        </div>`
);


fs.writeFileSync('src/pages/index.astro', html);
