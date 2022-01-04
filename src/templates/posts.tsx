import React from "react";
import { graphql } from "gatsby";

import { PageContext, PaginatedPageContext, PostData } from "../types";
import { Post } from "../queries/post";

import Layout from "../components/layout";
import PostList from "../components/post-list";

type Props = PostData<Pick<Post, "frontmatter" | "fields" | "excerpt">> & PaginatedPageContext & PageContext<"category", string>;

const PostsTemplate = ({ data, pageContext }: Props) => {
  const edges = data.allMdx.edges;
  const { pagination } = pageContext;

  return (
    <Layout>
      <PostList edges={edges} pagination={pagination} />
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
