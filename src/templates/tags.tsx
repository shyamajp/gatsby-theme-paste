import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { nodes, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`;

  return (
    <Layout>
      <h1>{tagHeader}</h1>
      <ul>
        {nodes.map((post) => {
          const { title, slug } = post.frontmatter;
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <Link to="/tags">see all tags</Link>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(limit: 2000, sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      nodes {
        frontmatter {
          slug
          title
        }
      }
    }
  }
`;
