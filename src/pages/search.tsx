import React from "react";
import { graphql } from "gatsby";
import { useFlexSearch } from "react-use-flexsearch";
import { parse } from "query-string";
import { HistoryLocation } from "@reach/router";

import { Separator } from "@twilio-paste/separator";
import { Heading } from "@twilio-paste/heading";
import { Breadcrumb, BreadcrumbItem } from "@twilio-paste/breadcrumb";

import Layout from "../components/layout";
import PostSummaryCard from "../components/post-summary-card";
import EmptyState from "../components/empty-state";
import SearchModal from "../components/search-modal";
import { PasteLink, SEO } from "../components/common";
import { Page, PageFields, PostFrontmatter } from "../queries/post";

type Props = {
  data: {
    localSearchBlog: {
      index: string;
      store: { [id: string]: SearchResult[] }[];
    };
  };
  location: HistoryLocation;
};

export type SearchResult = PostFrontmatter &
  Pick<Page, "excerpt"> &
  PageFields & {
    id: string;
    type: string;
  };

const Blog = ({ data, location }: Props) => {
  const { search } = parse(location.search);
  const results: SearchResult[] = useFlexSearch(search, data.localSearchBlog.index, data.localSearchBlog.store);

  return (
    <Layout>
      <SEO title="Search" description="Shows a search result of posts." />
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
        <EmptyState title="No Search Results Found" description={`This query "${search}" did not match any existing posts.`} action={<SearchModal variant="primary">Try another query</SearchModal>} />
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
