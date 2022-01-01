import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

const Categories = ({ pageContext, data }) => {
  const { category } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const categoryHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} categoryged with "${category}"`;

  return (
    <Layout>
      <h1>{categoryHeader}</h1>
      <ul>
        {edges.map(({ node: post }) => {
          const { title, slug } = post.frontmatter;
          return (
            <li key={slug}>
              <Link to={`/blog/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <Link to="/categories">see all categories</Link>
    </Layout>
  );
};

export default Categories;

export const pageQuery = graphql`
  query ($category: String) {
    allMdx(limit: 2000, sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { categories: { in: [$category] } } }) {
      ...PostSummary
    }
  }
`;
