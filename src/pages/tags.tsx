import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

const TagsPage = ({ data }) => {
  const tags = data.allMdx.group;

  return (
    <Layout>
      <h1>Tags</h1>
      <ul>
        {tags.map((tag) => (
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
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
