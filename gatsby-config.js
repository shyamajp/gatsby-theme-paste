module.exports = ({ contentPath = "content", basePath = "/" }) => ({
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-remark-images",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "content",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".md", ".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "blog",
        engine: "flexsearch",
        engineOptions: {
          encode: "icase",
          tokenize: "forward",
          async: false,
        },
        query: `
          {
            allMdx {
              nodes {
                id
                frontmatter {
                  title
                  slug
                }
              }
            }
          }
        `,
        ref: "id",
        index: ["title", "slug"],
        store: ["id", "title", "slug"],
        normalizer: ({ data }) =>
          data.allMdx.nodes.map((node) => ({
            id: node.id,
            title: node.frontmatter.title,
            slug: node.frontmatter.slug,
          })),
      },
    },
  ],
});
