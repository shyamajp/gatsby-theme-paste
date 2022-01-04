module.exports = ({ contentPath = "content", postsPerPage = 10 }) => ({
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-remark-images",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: contentPath,
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
                fields {
                  slug
                }
                frontmatter {
                  title
                  date(formatString: "MMMM DD, YYYY")
                  image {
                    childImageSharp {
                      gatsbyImageData(width: 600, placeholder: BLURRED)
                    }
                  }
                  tags
                  categories
                }
                excerpt
                body
              }
            }
          }
        `,
        ref: "id",
        index: ["title", "body"],
        store: ["id", "title", "slug", "date", "image", "excerpt", "tags", "categories"],
        normalizer: ({ data }) =>
          data.allMdx.nodes.map((node) => ({
            id: node.id,
            title: node.frontmatter.title,
            slug: node.fields.slug,
            date: node.frontmatter.date,
            excerpt: node.excerpt,
            body: node.body,
            image: node.frontmatter.image,
            tags: node.frontmatter.tags,
            categories: node.frontmatter.categories,
          })),
      },
    },
  ],
});
