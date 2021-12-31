import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";

export const query = graphql`
  query {
    allMdx(filter: { frontmatter: { type: { eq: "post" } } }) {
      nodes {
        frontmatter {
          slug
          title
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`;

const PostsTemplate = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <ul>
        {posts.map(({ frontmatter }) => {
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
