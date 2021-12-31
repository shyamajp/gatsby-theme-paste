const fs = require("fs");

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath;

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter!
    }
    type MdxFrontmatter {
      date: Date! @dateformat
      slug: String!
      title: String!
      draft: Boolean
      type: String!
      featuredImage: File @fileByRelativePath
      tags: [String]
      categories: [String]
    }
    `);
};

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || "/";
  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/posts.tsx"),
  });

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          tableOfContents
          timeToRead
          body
          frontmatter {
            date
            slug
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 800, placeholder: BLURRED)
              }
            }
            type
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("error loading events", result.errors);
    return;
  }

  const posts = result.data.allMdx.nodes;
  posts.forEach((node) => {
    actions.createPage({
      path: node.frontmatter.type === "post" ? `/blog/${node.frontmatter.slug}` : node.frontmatter.slug,
      component: require.resolve("./src/templates/post.tsx"),
      context: {
        post: node,
      },
    });
  });
};
