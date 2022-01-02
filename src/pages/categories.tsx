import React from "react";
import { Link, graphql } from "gatsby";

import { PostGroupData } from "../types";
import { sortByTotalCount } from "../utils";

import Layout from "../components/layout";

type Props = PostGroupData;

const CategoriesPage = ({ data }: Props) => {
  const categories = data.allMdx.group;

  return (
    <Layout>
      <h1>Categories</h1>
      <ul>
        {categories.sort(sortByTotalCount).map((category) => (
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
    allMdx(limit: 2000, filter: { frontmatter: { type: { eq: "post" } } }) {
      group(field: frontmatter___categories) {
        ...PostGroup
      }
    }
  }
`;
