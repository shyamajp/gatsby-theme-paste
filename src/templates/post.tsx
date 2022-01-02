import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react";

import { PageContext } from "../types";
import { Post } from "../queries/post";

import Layout from "../components/layout";
import { PasteLink } from "../components/common";

type Props = PageContext<"post", Post>;

const PostTemplate = ({ pageContext: { post } }: Props) => {
  const shortcodes = { Link: PasteLink };
  const image = getImage(post.frontmatter.featuredImage);

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <GatsbyImage image={image} alt={post.frontmatter.title} />
      <h4>Tags</h4>
      <ul>
        {post.frontmatter.tags?.map((tag) => (
          <li>
            <PasteLink to={`/tags/${tag.toLowerCase()}`}>{tag}</PasteLink>
          </li>
        ))}
      </ul>
      <h4>Categories</h4>
      <ul>
        {post.frontmatter.categories?.map((category) => (
          <PasteLink to={`/categories/${category.toLowerCase()}`}>{category}</PasteLink>
        ))}
      </ul>
      <MDXProvider components={shortcodes}>
        <MDXRenderer frontmatter={post.frontmatter}>{post.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export default PostTemplate;
