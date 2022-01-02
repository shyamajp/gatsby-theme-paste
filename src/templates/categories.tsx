import React from "react";
import { graphql } from "gatsby";

import { PageContext, PostData } from "../types";
import { Post } from "../queries/post";

import Layout from "../components/layout";
import { PasteLink } from "../components/common";

type Props = PageContext<"category", string> & PostData<Pick<Post, "frontmatter">>;

const Categories = ({ pageContext, data }: Props) => {
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
              <PasteLink to={`/blog/${slug}`}>{title}</PasteLink>
            </li>
          );
        })}
      </ul>
      <PasteLink to="/categories">see all categories</PasteLink>
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
