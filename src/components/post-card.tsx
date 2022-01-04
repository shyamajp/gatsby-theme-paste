import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Box } from "@twilio-paste/box";
import { Stack } from "@twilio-paste/stack";
import { Paragraph } from "@twilio-paste/paragraph";
import { Text } from "@twilio-paste/text";
import { DisplayPillGroup } from "@twilio-paste/display-pill-group";

import { Post } from "../queries/post";
import { useSiteMetadata } from "../queries/siteMetadata";

import { CategoryPill, PasteLink, TagPill } from "./common";

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
        <DisplayPillGroup aria-label="categories">
          {post.frontmatter.categories?.map((category) => (
            <CategoryPill key={category} to={`/categories/${category.toLowerCase()}`}>
              {category}
            </CategoryPill>
          ))}
        </DisplayPillGroup>
        <DisplayPillGroup aria-label="tags">
          {post.frontmatter.tags?.map((tag) => (
            <TagPill key={tag} to={`/tags/${tag.toLowerCase()}`}>
              {tag}
            </TagPill>
          ))}
        </DisplayPillGroup>
        <Paragraph>{post.excerpt}</Paragraph>
      </Stack>
    </Box>
  );
};

export default PostCard;
