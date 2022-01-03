import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react";

import { Heading } from "@twilio-paste/heading";
import { Box } from "@twilio-paste/box";
import { Text } from "@twilio-paste/text";
import { MediaObject, MediaFigure, MediaBody } from "@twilio-paste/media-object";
import { DisplayPillGroup } from "@twilio-paste/display-pill-group";

import { PageContext } from "../types";
import { Post } from "../queries/post";
import { useSiteMetadata } from "../queries/siteMetadata";

import Layout from "../components/layout";
import { Avatar, CategoryPill, PasteLink, TagPill } from "../components/common";

type Props = PageContext<"post", Post>;

const PostTemplate = ({ pageContext: { post } }: Props) => {
  const shortcodes = { Link: PasteLink };
  const { siteMetadata } = useSiteMetadata();
  const image = getImage(post.frontmatter.image);

  return (
    <Layout>
      <DisplayPillGroup aria-label="categories">
        {post.frontmatter.categories?.map((category) => (
          <CategoryPill key={category} to={`/categories/${category.toLowerCase()}`}>
            {category}
          </CategoryPill>
        ))}
      </DisplayPillGroup>
      <Heading variant="heading10" as="h1" marginBottom="space0">
        {post.frontmatter.title}
      </Heading>
      <DisplayPillGroup aria-label="tags">
        {post.frontmatter.tags?.map((tag) => (
          <TagPill key={tag} to={`/tags/${tag.toLowerCase()}`}>
            {tag}
          </TagPill>
        ))}
      </DisplayPillGroup>
      <Box paddingTop="space40" paddingBottom="space60">
        <MediaObject as="div" verticalAlign="center">
          <MediaFigure as="div" spacing="space40">
            <Avatar width="2rem" />
          </MediaFigure>
          <MediaBody as="div">
            <Text as="div" fontSize="fontSize30" fontWeight="fontWeightSemibold" lineHeight="lineHeight10">
              {siteMetadata.author}
            </Text>
            <Text as="div" color="colorTextWeak" fontSize="fontSize20" lineHeight="lineHeight10">
              {post.frontmatter.date} • {post.timeToRead} mins
            </Text>
          </MediaBody>
        </MediaObject>
      </Box>
      <GatsbyImage image={image} alt={post.frontmatter.title} />
      <MDXProvider components={shortcodes}>
        <MDXRenderer frontmatter={post.frontmatter}>{post.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export default PostTemplate;
