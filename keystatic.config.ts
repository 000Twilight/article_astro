import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: '000Twilight/article_astro'
  },
  singletons: {
    homepage: singleton({
      label: 'Homepage Content',
      path: 'src/content/homepage/data',
      format: { data: 'json' },
      schema: {
        textSection1: fields.text({ label: 'Text Section 1', multiline: true }),
        section2Title: fields.text({ label: 'Section 2 Title' }),
        textSection2: fields.text({ label: 'Text Section 2', multiline: true }),
        textSection3: fields.text({ label: 'Text Section 3', multiline: true }),
        textSection4: fields.text({ label: 'Text Section 4 (Colored borders)', multiline: true }),
        section5Title: fields.text({ label: 'Section 5 Title' }),
        textSection5: fields.text({ label: 'Text Section 5', multiline: true }),
        textSection6: fields.text({ label: 'Text Section 6', multiline: true }),
        section7Title: fields.text({ label: 'Section 7 Title' }),
        textSection7: fields.text({ label: 'Text Section 7', multiline: true }),
        textSection8: fields.text({ label: 'Text Section 8 (Dark background)', multiline: true }),
        textSection9: fields.text({ label: 'Text Section 9 (Footer)', multiline: true }),
      },
    }),
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/posts',
              publicPath: '../../assets/images/posts/',
            },
          },
        }),
      },
    }),
  },
});
