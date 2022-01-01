import React from "react";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react";

import Layout from "../components/layout";
import { Post } from "../queries/post";

const PageTemplate = ({ pageContext: { post } }: { pageContext: { post: Partial<Post> } }) => {
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

export default PageTemplate;
