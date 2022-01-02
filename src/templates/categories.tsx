import React from "react";
import { graphql } from "gatsby";

import { Heading } from "@twilio-paste/heading";

import { PageContext, PostData } from "../types";
import { Post } from "../queries/post";

import Layout from "../components/layout";
import { PasteLink } from "../components/common";
import PostCard from "../components/post-card";

type Props = PageContext<"category", string> & PostData<Pick<Post, "frontmatter" | "fields" | "excerpt">>;

const Categories = ({ pageContext, data }: Props) => {
  const { category } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const categoryHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} categoryged with "${category}"`;

  return (
    <Layout>
      <Heading variant="heading10" as="h1">
        {categoryHeader}
      </Heading>
      {edges.map(({ node }) => (
        <PostCard post={node} />
      ))}
      <PasteLink to="/categories">see all categories</PasteLink>
    </Layout>
  );
};

export default Categories;

export const pageQuery = graphql`
  query ($category: String) {
    allMdx(limit: 2000, sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { categories: { in: [$category] }, type: { eq: "post" } } }) {
      ...PostSummary
    }
  }
`;
