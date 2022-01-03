import React from "react";

import { Post } from "../queries/post";

import Layout from "../components/layout";
import PostCard from "../components/post-card";
import { Pagination, PaginationProps } from "../components/common";
import { graphql } from "gatsby";
import { PostData } from "../types";

type Props = PostData<Pick<Post, "frontmatter" | "fields" | "excerpt">> & {
  limit: number;
  skip: number;
  pageContext: {
    limit: number;
    skip: number;
    pagination: PaginationProps;
  };
};

const PostsTemplate = ({ data, pageContext }: Props) => {
  const edges = data.allMdx.edges;
  const { pagination } = pageContext;

  return (
    <Layout>
      {edges.map(({ node }) => (
        <PostCard post={node} key={node.fields.slug} />
      ))}
      <Pagination {...pagination} />
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
