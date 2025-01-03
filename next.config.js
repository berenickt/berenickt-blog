const { remarkCodeHike } = require('@code-hike/mdx')

/**
 * @see https://nextra.site/docs/guide/syntax-highlighting#copy-button
 * @see https://nextra.site/docs/guide/syntax-highlighting#custom-themes
 * @see https://codehike.org/docs/configuration
 * @see https://github.com/shuding/nextra/issues/2477
 */
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  mdxOptions: {
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          theme: 'dark-plus',
          lineNumbers: true,
          showCopyButton: true,
          skipLanguages: ['mermaid'],
        },
      ],
    ],
  },
})

module.exports = withNextra()
