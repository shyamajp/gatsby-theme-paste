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
  const { createPage } = actions;

  const basePath = options.basePath || "/";

  const postsTemplate = require.resolve("./src/templates/posts.tsx");
  const postTemplate = require.resolve("./src/templates/post.tsx");
  const tagsTemplate = require.resolve("./src/templates/tags.tsx");
  const categoriesTemplate = require.resolve("./src/templates/categories.tsx");

  createPage({
    path: basePath,
    component: postsTemplate,
  });

  const result = await graphql(`
    query {
      posts: allMdx {
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
            tags
            categories
          }
        }
      }
      tags: allMdx {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
      categories: allMdx {
        group(field: frontmatter___categories) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("error loading events", result.errors);
    return;
  }

  const posts = result.data.posts.nodes;
  const tags = result.data.tags.group;
  const categories = result.data.categories.group;

  posts.forEach((node) => {
    createPage({
      path: node.frontmatter.type === "post" ? `/blog/${node.frontmatter.slug}` : node.frontmatter.slug,
      component: postTemplate,
      context: {
        post: node,
      },
    });
  });

  tags.forEach((tag) => {
    createPage({
      path: `/tags/${tag.fieldValue}/`,
      component: tagsTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });

  categories.forEach((category) => {
    createPage({
      path: `/categories/${category.fieldValue}/`,
      component: categoriesTemplate,
      context: {
        category: category.fieldValue,
      },
    });
  });
};
