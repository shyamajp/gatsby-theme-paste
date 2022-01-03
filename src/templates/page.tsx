import React from "react";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react";

import { Heading } from "@twilio-paste/heading";

import { Page } from "../queries/post";
import { PageContext } from "../types";

import Layout from "../components/layout";

type Props = PageContext<"page", Page>;

const PageTemplate = ({ pageContext: { page } }: Props) => {
  const shortcodes = { Link };
  const image = getImage(page.frontmatter.image);

  return (
    <Layout>
      <Heading variant="heading10" as="h1">
        {page.frontmatter.title}
      </Heading>
      <GatsbyImage image={image} alt={page.frontmatter.title} />
      <MDXProvider components={shortcodes}>
        <MDXRenderer frontmatter={page.frontmatter}>{page.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export default PageTemplate;
