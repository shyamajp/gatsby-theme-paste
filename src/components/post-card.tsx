import React from "react";

import { Box } from "@twilio-paste/box";
import { Stack } from "@twilio-paste/stack";
import { Paragraph } from "@twilio-paste/paragraph";
import { Text } from "@twilio-paste/text";

import { Post } from "../queries/post";

import { PasteLink, PostGroupPills } from "./common";
import PostImage from "./post-image";

type Props = {
  post: Pick<Post, "frontmatter" | "fields" | "excerpt">;
};

const PostCard = ({ post }: Props) => {
  return (
    <Box width="100%">
      <Stack orientation="vertical" spacing="space40">
        <PostImage image={post.frontmatter.image} alt={post.frontmatter.title} width={600} />
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
