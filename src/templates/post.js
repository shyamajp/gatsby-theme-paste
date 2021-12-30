import React from "react";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react";

import Layout from "../components/layout";

const PostTemplate = ({ pageContext }) => {
  const { post } = pageContext;
  const shortcodes = { Link };
  const image = getImage(post.frontmatter.featuredImage);

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <GatsbyImage image={image} alt={post.frontmatter.title} />
      <MDXProvider components={shortcodes}>
        <MDXRenderer frontmatter={post.frontmatter}>{post.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export default PostTemplate;
