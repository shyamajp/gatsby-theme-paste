import React from "react";
import { graphql } from "gatsby";

import { PostData } from "../types";
import { Post } from "../queries/post";

import Layout from "../components/layout";
import { PasteLink } from "../components/common";

type Props = PostData<Pick<Post, "frontmatter">>;

const PostsTemplate = ({ data }: Props) => {
  const edges = data.allMdx.edges;

  return (
    <Layout>
      <ul>
        {edges.map(({ node: post }: { node: Pick<Post, "frontmatter"> }) => {
          return (
            <li key={post.frontmatter.slug}>
              <PasteLink to={`/blog/${post.frontmatter.slug}`}>{post.frontmatter.title}</PasteLink> on {post.frontmatter.date}
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default PostsTemplate;

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip, filter: { frontmatter: { type: { eq: "post" } } }) {
      ...PostSummary
    }
  }
`;
