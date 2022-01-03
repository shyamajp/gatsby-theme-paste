const fs = require("fs");
const { createFilePath } = require("gatsby-source-filesystem");

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
      fields: MdxFields!
    }
    type MdxFields {
      slug: String!
    }
    type MdxFrontmatter {
      date: Date! @dateformat
      title: String!
      draft: Boolean
      type: String!
      image: File @fileByRelativePath
      tags: [String]
      categories: [String]
    }
    `);
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const filePath = createFilePath({ node, getNode, basePath: "posts", trailingSlash: false });

    const slugify = (text) => {
      const lastPath = text.substring(text.lastIndexOf("/") + 1) || text;

      return lastPath
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumerical characters with hyphens
        .replace(/(^-|-$)+/g, "") // remove leading or trailing hyphens
        .replace(/\/\/+/g, "/"); // remove consecutive slashes
    };

    createNodeField({
      node,
      name: "slug",
      value: slugify(filePath),
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }, options) => {
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
            excerpt
            fields {
              slug
            }
            timeToRead
            body
            frontmatter {
              date
              title
              image {
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
            excerpt
            fields {
              slug
            }
            body
            frontmatter {
              date
              title
              image {
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

  const { postsPerPage } = options;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: totalPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/blog/${i + 1}`,
      component: postsTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        pagination: {
          currentPage: i + 1,
          totalPages,
          totalPosts: posts.length,
          postsPerPage,
        },
      },
    });
  });

  posts.forEach(({ node: post }) => {
    createPage({
      path: `/blog/${post.fields.slug}`,
      component: postTemplate,
      context: {
        post,
      },
    });
  });

  pages.forEach(({ node: page }) => {
    createPage({
      path: page.fields.slug,
      component: pageTemplate,
      context: {
        page,
      },
    });
  });

  tags.forEach((tag) => {
    createPage({
      path: `/tags/${tag.fieldValue.toLowerCase()}/`,
      component: tagsTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });

  categories.forEach((category) => {
    createPage({
      path: `/categories/${category.fieldValue.toLowerCase()}/`,
      component: categoriesTemplate,
      context: {
        category: category.fieldValue,
      },
    });
  });
};
