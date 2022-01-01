import React from "react";
import { graphql, Link, navigate } from "gatsby";
import { useFlexSearch } from "react-use-flexsearch";
import { parse } from "query-string";

import Layout from "../components/layout";

const Blog = ({ data }) => {
  const { search } = parse(location.search);
  const [query, setQuery] = React.useState(search || "");
  const results = useFlexSearch(query, data.localSearchBlog.index, data.localSearchBlog.store);

  return (
    <Layout>
      <input
        id="search"
        type="search"
        placeholder="Search all posts"
        value={query}
        onChange={(e) => {
          navigate(e.target.value ? `/search?search=${e.target.value}` : "/search");
          setQuery(e.target.value);
        }}
      />
      <ul>
        {results.map(({ id, slug, title }) => (
          <li key={id}>
            <Link to={`/blog/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
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
