import React from "react";
import { graphql } from "gatsby";

import { Heading } from "@twilio-paste/heading";
import { Breadcrumb, BreadcrumbItem } from "@twilio-paste/breadcrumb";

import { PageContext, PaginatedPageContext, PostData } from "../types";
import { Post } from "../queries/post";

import Layout from "../components/layout";
import { PasteLink } from "../components/common";
import PostList from "../components/post-list";

type Props = PostData<Pick<Post, "frontmatter" | "fields" | "excerpt">> & PaginatedPageContext & PageContext<"tag", string>;

const Tags = ({ pageContext, data }: Props) => {
  const { tag, pagination } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`;

  return (
    <Layout>
      <Breadcrumb>
        <BreadcrumbItem>
          <PasteLink to="/">All Posts</PasteLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <PasteLink to="/tags">Tags</PasteLink>
        </BreadcrumbItem>
        <BreadcrumbItem>{tag}</BreadcrumbItem>
      </Breadcrumb>
      <Heading variant="heading10" as="h1">
        {tagHeader}
      </Heading>
      <PostList edges={edges} pagination={{ ...pagination, link: { first: `/tags/${tag}`, pagePrefix: `/tags/${tag}` } }} />
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query ($tag: String, $skip: Int!, $limit: Int!) {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip, filter: { frontmatter: { tags: { in: [$tag] }, type: { eq: "post" } } }) {
      ...PostSummary
    }
  }
`;
