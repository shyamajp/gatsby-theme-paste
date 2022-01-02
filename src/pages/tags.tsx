import React from "react";
import { graphql } from "gatsby";

import { PostGroupData } from "../types";
import { sortByTotalCount } from "../utils";

import Layout from "../components/layout";
import { PasteLink } from "../components/common";

type Props = PostGroupData;

const TagsPage = ({ data }: Props) => {
  const tags = data.allMdx.group;

  return (
    <Layout>
      <h1>Tags</h1>
      <ul>
        {tags.sort(sortByTotalCount).map((tag) => (
          <li key={tag.fieldValue}>
            <PasteLink to={`/tags/${tag.fieldValue.toLowerCase()}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </PasteLink>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMdx(limit: 2000, filter: { frontmatter: { type: { eq: "post" } } }) {
      group(field: frontmatter___tags) {
        ...PostGroup
      }
    }
  }
`;
