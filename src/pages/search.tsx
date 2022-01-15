import React from "react";
import { graphql } from "gatsby";
import { useFlexSearch } from "react-use-flexsearch";
import { parse } from "query-string";

import { Separator } from "@twilio-paste/separator";
import { Heading } from "@twilio-paste/heading";
import { Button } from "@twilio-paste/button";
import { Breadcrumb, BreadcrumbItem } from "@twilio-paste/breadcrumb";

import Layout from "../components/layout";
import PostSummaryCard from "../components/post-summary-card";
import EmptyState from "../components/empty-state";
import { PasteLink } from "../components/common";

const Blog = ({ data, location }) => {
  const { search } = parse(location.search);
  const results = useFlexSearch(search, data.localSearchBlog.index, data.localSearchBlog.store);

  return (
    <Layout>
      <Breadcrumb>
        <BreadcrumbItem>
          <PasteLink to="/">All Posts</PasteLink>
        </BreadcrumbItem>
        <BreadcrumbItem>Search</BreadcrumbItem>
      </Breadcrumb>
      <Heading variant="heading10" as="h1">
        {results.length} post{results.length === 1 ? "" : "s"} with "{search}"
      </Heading>
      {results.length ? (
        results.map((result, i) => (
          <React.Fragment key={result.id}>
            <PostSummaryCard {...result} />
            {i < results.length - 1 && <Separator orientation="horizontal" verticalSpacing="space80" />}
          </React.Fragment>
        ))
      ) : (
        <EmptyState title="No Search Results Found" description={`This query "${search}" did not match any existing posts.`} action={<Button variant="primary">Try another query</Button>} />
      )}
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    localSearchBlog {
      index
      store
    }
  }
`;
