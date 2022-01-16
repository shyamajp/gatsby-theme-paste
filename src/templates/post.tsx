import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react";

import { Heading } from "@twilio-paste/heading";
import { Box } from "@twilio-paste/box";
import { Text } from "@twilio-paste/text";
import { Stack } from "@twilio-paste/stack";
import { MediaObject, MediaFigure, MediaBody } from "@twilio-paste/media-object";

import { PageContext } from "../types";
import { Post } from "../queries/post";
import { useSiteMetadata } from "../queries/siteMetadata";

import Layout from "../components/layout";
import { Avatar, PasteLink, PostGroupPills } from "../components/common";
import SEO from "../components/seo";

type Props = PageContext<"post", Post>;

const PostTemplate = ({ pageContext: { post } }: Props) => {
  const shortcodes = { Link: PasteLink };
  const { siteMetadata } = useSiteMetadata();
  const image = getImage(post.frontmatter.image);

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={`${post.excerpt}
          Categories: ${post.frontmatter.categories} / Tags: ${post.frontmatter.tags}`}
      />
      <Stack orientation="vertical" spacing="space40">
        <PostGroupPills type="categories" postGroups={post.frontmatter.categories} />
        <Heading variant="heading10" as="h1" marginBottom="space0">
          {post.frontmatter.title}
        </Heading>
        <PostGroupPills type="tags" postGroups={post.frontmatter.tags} />
        <Box paddingTop="space40" paddingBottom="space60">
          <MediaObject as="div" verticalAlign="center">
            <MediaFigure as="div" spacing="space40">
              <Avatar width="2rem" />
            </MediaFigure>
            <MediaBody as="div">
              <Text as="div" fontSize="fontSize30" fontWeight="fontWeightSemibold" lineHeight="lineHeight10">
                {siteMetadata.author.name}
              </Text>
              <Text as="div" color="colorTextWeak" fontSize="fontSize20" lineHeight="lineHeight10">
                {post.frontmatter.date} • {post.timeToRead} mins
              </Text>
            </MediaBody>
          </MediaObject>
        </Box>
      </Stack>
      {image && <GatsbyImage image={image} alt={post.frontmatter.title} />}
      <MDXProvider components={shortcodes}>
        <MDXRenderer frontmatter={post.frontmatter}>{post.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export default PostTemplate;
