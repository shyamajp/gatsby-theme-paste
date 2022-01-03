import React from "react";
import { graphql } from "gatsby";

import { PostGroupData } from "../types";
import { sortByTotalCount } from "../utils/queries";

import Layout from "../components/layout";
import { PasteLink } from "../components/common";

type Props = PostGroupData;

const CategoriesPage = ({ data }: Props) => {
  const categories = data.allMdx.group;

  return (
    <Layout>
      <h1>Categories</h1>
      <ul>
        {categories.sort(sortByTotalCount).map((category) => (
          <li key={category.fieldValue}>
            <PasteLink to={`/categories/${category.fieldValue.toLowerCase()}/`}>
              {category.fieldValue} ({category.totalCount})
            </PasteLink>
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
