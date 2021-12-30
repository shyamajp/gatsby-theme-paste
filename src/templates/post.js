import React from "react";
import { Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";

const PostTemplate = ({ pageContext }) => {
  const { post } = pageContext;
  const shortcodes = { Link };

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer frontmatter={post.frontmatter}>{post.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export default PostTemplate;
