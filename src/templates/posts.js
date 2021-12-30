import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";

const PostsTemplate = () => {
  const data = graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  `;

  const posts = data.allMdx;

  console.log(posts);
  return (
    <Layout>
      <ul>aaa</ul>
    </Layout>
  );
};

export default PostsTemplate;
