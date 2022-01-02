import React from "react";
import { graphql } from "gatsby";

import { Heading } from "@twilio-paste/heading";

import { PageContext, PostData } from "../types";
import { Page } from "../queries/post";

import Layout from "../components/layout";
import { PasteLink } from "../components/common";
import PostCard from "../components/post-card";

type Props = PageContext<"tag", string> & PostData<Pick<Page, "frontmatter" | "fields" | "excerpt">>;

const Tags = ({ pageContext, data }: Props) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`;

  return (
    <Layout>
      <Heading variant="heading10" as="h1">
        {tagHeader}
      </Heading>
      {edges.map(({ node }) => (
        <PostCard post={node} />
      ))}
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
