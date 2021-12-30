const fs = require("fs");
const path = require("path");

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

// TODO: createSchemaCustomization

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || "/";
  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/posts.js"),
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
      path: `/blog/${node.frontmatter.slug}`,
      component: require.resolve("./src/templates/post.js"),
      context: {
        post: node,
      },
    });
  });
};
