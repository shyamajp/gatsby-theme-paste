import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Box } from "@twilio-paste/box";
import { Stack } from "@twilio-paste/stack";
import { Paragraph } from "@twilio-paste/paragraph";
import { Text } from "@twilio-paste/text";

import { Post } from "../queries/post";
import { useSiteMetadata } from "../queries/siteMetadata";

import { PasteLink, PostGroupPills } from "./common";

type Props = {
  post: Pick<Post, "frontmatter" | "fields" | "excerpt">;
};

const PostCard = ({ post }: Props) => {
  const { defaultImage } = useSiteMetadata();
  const image = getImage(post.frontmatter.image);
  const defaultPostImage = getImage(defaultImage);

  return (
    <Box width="100%">
      <Stack orientation="vertical" spacing="space40">
        {image ? <GatsbyImage image={image} alt={post.frontmatter.title} /> : <GatsbyImage image={defaultPostImage} alt={post.frontmatter.title} />}
        <PasteLink to={`/blog/${post.fields.slug}`}>
          <Text as="h2" fontSize="fontSize50">
            {post.frontmatter.title}
          </Text>
        </PasteLink>
        <Box>
          <Text as="small" color="colorTextWeak" fontSize="fontSize20">
            {post.frontmatter.date}
          </Text>
        </Box>
        <PostGroupPills type="categories" postGroups={post.frontmatter.categories} />
        <PostGroupPills type="tags" postGroups={post.frontmatter.tags} />
        <Paragraph>{post.excerpt}</Paragraph>
      </Stack>
    </Box>
  );
};

export default PostCard;
