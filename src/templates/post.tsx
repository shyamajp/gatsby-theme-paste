import React from "react";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react";

import { Post } from "../queries/post";

import Layout from "../components/layout";

const PostTemplate = ({ pageContext: { post } }: { pageContext: { post: Post } }) => {
  const shortcodes = { Link };
  const image = getImage(post.frontmatter.featuredImage);

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <GatsbyImage image={image} alt={post.frontmatter.title} />
      <h4>Tags</h4>
      <ul>
        {post.frontmatter.tags?.map((tag) => (
          <li>
            <Link to={`/tags/${tag}`}>{tag}</Link>
          </li>
        ))}
      </ul>
      <h4>Categories</h4>
      <ul>
        {post.frontmatter.categories?.map((category) => (
          <Link to={`/categories/${category}`}>{category}</Link>
        ))}
      </ul>
      <MDXProvider components={shortcodes}>
        <MDXRenderer frontmatter={post.frontmatter}>{post.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export default PostTemplate;
