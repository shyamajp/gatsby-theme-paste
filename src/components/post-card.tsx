import React from "react";
import { Link } from "gatsby";

import { Box } from "@twilio-paste/box";
import { Paragraph } from "@twilio-paste/paragraph";
import { Text } from "@twilio-paste/text";
import { DisplayPillGroup, DisplayPill } from "@twilio-paste/display-pill-group";

import { Post } from "../queries/post";

import { PasteLink } from "./common";

type Props = {
  post: Pick<Post, "frontmatter" | "fields" | "excerpt">;
};

const PostCard = ({ post }: Props) => {
  return (
    <Box key={post.fields.slug}>
      <Box>
        <PasteLink to={`/blog/${post.fields.slug}`}>{post.frontmatter.title}</PasteLink>
      </Box>
      <Box>
        <Text as="small" color="colorTextWeak" fontSize="fontSize20">
          {post.frontmatter.date}
        </Text>
      </Box>
      <DisplayPillGroup aria-label="categories">
        {post.frontmatter.categories?.map((category) => (
          <DisplayPill key={category}>
            <Link to={`/categories/${category.toLowerCase()}`}>{category}</Link>
          </DisplayPill>
        ))}
      </DisplayPillGroup>
      <DisplayPillGroup aria-label="tags">
        {post.frontmatter.tags?.map((tag) => (
          <DisplayPill key={tag}>
            <Link to={`/tags/${tag.toLowerCase()}`}>{tag}</Link>
          </DisplayPill>
        ))}
      </DisplayPillGroup>
      <Paragraph>{post.excerpt}</Paragraph>
    </Box>
  );
};

export default PostCard;
