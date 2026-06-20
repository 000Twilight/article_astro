import { config, fields, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: '000Twilight/article_astro', // Ensure your repo is set here
  },
  singletons: {
    homepage: singleton({
      label: 'Homepage Content',
      path: 'src/content/homepage/data',
      format: { data: 'json' },
      schema: {
        // New Header Title
        headerTitle: fields.text({ label: 'Header Navigation Title' }),
        
        // Existing fields
        coverTitle: fields.text({ label: 'Main Article Title', multiline: true }),
        coverIntro: fields.text({ label: 'Main Article Intro Paragraph', multiline: true }),
        coverImage: fields.image({
          label: 'Cover Image',
          directory: 'public/images/homepage',
          publicPath: '/images/homepage/',
        }),
        videoUrl: fields.text({ 
          label: 'YouTube Embed URL', 
          description: 'Use the embed URL format (e.g., https://www.youtube.com/embed/Q7LsgNkcDCY)' 
        }),
        
        textSection1: fields.text({ label: 'Text Section 1', multiline: true }),
        section2Title: fields.text({ label: 'Section 2 Title' }),
        textSection2: fields.text({ label: 'Text Section 2', multiline: true }),
        
        timeline: fields.array(
          fields.object({
            year: fields.text({ label: 'Year / Heading' }),
            text: fields.text({ label: 'Description', multiline: true }),
            image: fields.image({
              label: 'Timeline Image',
              directory: 'public/images/homepage',
              publicPath: '/images/homepage/'
            })
          }),
          { label: 'Timeline Events', itemLabel: props => props.fields.year.value || 'New Event' }
        ),

        textSection3: fields.text({ label: 'Text Section 3', multiline: true }),
        textSection4: fields.text({ label: 'Text Section 4 (Colored borders)', multiline: true }),
        section5Title: fields.text({ label: 'Section 5 Title' }),
        textSection5: fields.text({ label: 'Text Section 5', multiline: true }),
        
        graphic2A: fields.image({
          label: 'Graphic 2A (Left Image)',
          directory: 'public/images/homepage',
          publicPath: '/images/homepage/'
        }),
        graphic2B: fields.image({
          label: 'Graphic 2B (Right Image)',
          directory: 'public/images/homepage',
          publicPath: '/images/homepage/'
        }),

        textSection6: fields.text({ label: 'Text Section 6', multiline: true }),
        section7Title: fields.text({ label: 'Section 7 Title' }),
        textSection7: fields.text({ label: 'Text Section 7', multiline: true }),
        textSection8: fields.text({ label: 'Text Section 8 (Dark background)', multiline: true }),
        
        footerMessage: fields.text({ label: 'Final Footer Message', multiline: true }),
      },
    }),
  },
});