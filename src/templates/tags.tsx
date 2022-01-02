import React from "react";
import { Link, graphql } from "gatsby";

import { Page } from "../queries/post";

import Layout from "../components/layout";
import { PageContext, PostData } from "../types";

type Props = PageContext<"tag", string> & PostData<Pick<Page, "frontmatter">>;

const Tags = ({ pageContext, data }: Props) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`;

  return (
    <Layout>
      <h1>{tagHeader}</h1>
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
      <Link to="/tags">see all tags</Link>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(limit: 2000, sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { tags: { in: [$tag] } } }) {
      ...PostSummary
    }
  }
`;
