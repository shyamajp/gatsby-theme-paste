import React from "react";
import { graphql } from "gatsby";

import { PostData } from "../types";
import { Post } from "../queries/post";

import Layout from "../components/layout";
import PostCard from "../components/post-card";

type Props = PostData<Pick<Post, "frontmatter" | "fields" | "excerpt">>;

const PostsTemplate = ({ data }: Props) => {
  const edges = data.allMdx.edges;

  return (
    <Layout>
      {edges.map(({ node }) => (
        <PostCard post={node} key={node.fields.slug} />
      ))}
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
