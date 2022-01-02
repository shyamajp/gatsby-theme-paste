import React from "react";
import { graphql } from "gatsby";

import { Page } from "../queries/post";

import Layout from "../components/layout";
import { PageContext, PostData } from "../types";
import { PasteLink } from "../components/common";

type Props = PageContext<"tag", string> & PostData<Pick<Page, "frontmatter" | "fields" | "excerpt">>;

const Tags = ({ pageContext, data }: Props) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`;

  return (
    <Layout>
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node: post }) => {
          const { title } = post.frontmatter;
          const { slug } = post.fields;
          return (
            <li key={slug}>
              <PasteLink to={`/blog/${slug}`}>{title}</PasteLink>
            </li>
          );
        })}
      </ul>
      <PasteLink to="/tags">see all tags</PasteLink>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(limit: 2000, sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { tags: { in: [$tag] }, type: { eq: "post" } } }) {
      ...PostSummary
    }
  }
`;
