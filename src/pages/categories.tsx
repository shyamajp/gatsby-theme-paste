import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

const CategoriesPage = ({ data }) => {
  const categories = data.allMdx.group;

  return (
    <Layout>
      <h1>Tags</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.fieldValue}>
            <Link to={`/categories/${category.fieldValue}/`}>
              {category.fieldValue} ({category.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default CategoriesPage;

export const pageQuery = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`;
