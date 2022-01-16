import React from "react";
import { graphql } from "gatsby";

import { Heading } from "@twilio-paste/heading";
import { Breadcrumb, BreadcrumbItem } from "@twilio-paste/breadcrumb";

import { PageContext, PaginatedPageContext, PostData } from "../types";
import { Post } from "../queries/post";

import Layout from "../components/layout";
import { PasteLink } from "../components/common";
import PostList from "../components/post-list";
import SEO from "../components/seo";

type Props = PostData<Pick<Post, "frontmatter" | "fields" | "excerpt">> & PaginatedPageContext & PageContext<"category", string>;

const Categories = ({ pageContext, data }: Props) => {
  const { category, pagination } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const categoryHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} in category "${category}"`;

  return (
    <Layout>
      <SEO title={`Pots - Category: ${category}`} description={`Shows a list of posts in category ${category}.`} />
      <Breadcrumb>
        <BreadcrumbItem>
          <PasteLink to="/">All Posts</PasteLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <PasteLink to="/categories">Categories</PasteLink>
        </BreadcrumbItem>
        <BreadcrumbItem>{category}</BreadcrumbItem>
      </Breadcrumb>
      <Heading variant="heading10" as="h1">
        {categoryHeader}
      </Heading>
      <PostList edges={edges} pagination={{ ...pagination, link: { first: `/categories/${category}`, pagePrefix: `/categories/${category}` } }} />
    </Layout>
  );
};

export default Categories;

export const pageQuery = graphql`
  query ($category: String, $skip: Int!, $limit: Int!) {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip, filter: { frontmatter: { categories: { in: [$category] }, type: { eq: "post" } } }) {
      ...PostSummary
    }
  }
`;
