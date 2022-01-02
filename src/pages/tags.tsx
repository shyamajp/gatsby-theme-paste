import React from "react";
import { Link, graphql } from "gatsby";

import { PostGroupData } from "../types";
import { sortByTotalCount } from "../utils";

import Layout from "../components/layout";

type Props = PostGroupData;

const TagsPage = ({ data }: Props) => {
  const tags = data.allMdx.group;

  return (
    <Layout>
      <h1>Tags</h1>
      <ul>
        {tags.sort(sortByTotalCount).map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${tag.fieldValue}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
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
