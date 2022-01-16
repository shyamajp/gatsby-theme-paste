import React from "react";

import { Box } from "@twilio-paste/box";
import { Stack } from "@twilio-paste/stack";

import { Post } from "../queries/post";

import PostImage from "./post-image";
import PostMeta from "./post-meta";

type Props = {
  post: Pick<Post, "frontmatter" | "fields" | "excerpt">;
};

const PostCard = ({ post }: Props) => {
  return (
    <Box width="100%">
      <Stack orientation="vertical" spacing="space30">
        <PostImage image={post.frontmatter.image} alt={post.frontmatter.title} width={600} />
        <PostMeta link={`/blog/${post.fields.slug}`} excerpt={post.excerpt} {...post.frontmatter} />
      </Stack>
    </Box>
  );
};

export default PostCard;
