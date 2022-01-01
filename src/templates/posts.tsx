import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import { Post } from "../queries/post";

const PostsTemplate = ({ data }) => {
  const edges = data.allMdx.edges;

  return (
    <Layout>
      <ul>
        {edges.map(({ node: { frontmatter } }: { node: Partial<Post> }) => {
          return (
            <li key={frontmatter.slug}>
              <Link to={`/blog/${frontmatter.slug}`}>{frontmatter.title}</Link> on {frontmatter.date}
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default PostsTemplate;

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
