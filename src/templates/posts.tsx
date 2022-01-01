import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import { Post } from "../queries/post";

const PostsTemplate = ({ data }) => {
  const edges = data.allMdx.edges;

  return (
    <Layout>
      <ul>
        {edges.map(({ node: post }: { node: Partial<Post> }) => {
          return (
            <li key={post.frontmatter.slug}>
              <Link to={`/blog/${post.frontmatter.slug}`}>{post.frontmatter.title}</Link> on {post.frontmatter.date}
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
      ...PostSummary
    }
  }
`;
