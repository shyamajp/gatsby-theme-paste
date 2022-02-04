import React from "react";
import { navigate } from "gatsby";

import { Box } from "@twilio-paste/box";
import { Stack } from "@twilio-paste/stack";

import { Post } from "../queries/post";

import PostImage from "./post-image";
import PostMeta from "./post-meta";

type Props = {
  post: Pick<Post, "frontmatter" | "fields" | "excerpt">;
};

const PostCard = ({ post }: Props) => {
  const link = `/blog/${post.fields.slug}`;

  return (
    <Box
      width="100%"
      onClick={() => navigate(link)}
      _hover={{
        backgroundColor: "colorBackground",
      }}
      padding="space60"
    >
      <Stack orientation="vertical" spacing="space30">
        <PostImage image={post.frontmatter.image} alt={post.frontmatter.title} />
        <PostMeta link={link} excerpt={post.excerpt} {...post.frontmatter} />
      </Stack>
    </Box>
  );
};

export default PostCard;
