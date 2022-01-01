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

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const postsTemplate = require.resolve("./src/templates/posts.tsx");
  const postTemplate = require.resolve("./src/templates/post.tsx");
  const pageTemplate = require.resolve("./src/templates/page.tsx");
  const tagsTemplate = require.resolve("./src/templates/tags.tsx");
  const categoriesTemplate = require.resolve("./src/templates/categories.tsx");

  const result = await graphql(`
    query {
      posts: allMdx(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { type: { eq: "post" } } }) {
        edges {
          node {
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
              tags
              categories
            }
          }
        }
        totalCount
      }
      pages: allMdx(filter: { frontmatter: { type: { ne: "post" } } }) {
        edges {
          node {
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
            }
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

  const posts = result.data.posts.edges;
  const pages = result.data.pages.edges;
  const tags = result.data.tags.group;
  const categories = result.data.categories.group;

  // TODO: Add this to config
  const postsPerPage = 2;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/blog/${i + 1}`,
      component: postsTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        posts,
      },
    });
  });

  posts.forEach(({ node: post }) => {
    createPage({
      path: `/blog/${post.frontmatter.slug}`,
      component: postTemplate,
      context: {
        post,
      },
    });
  });

  pages.forEach(({ node: page }) => {
    createPage({
      path: page.frontmatter.slug,
      component: pageTemplate,
      context: {
        page,
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
