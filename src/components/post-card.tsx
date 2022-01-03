import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Box } from "@twilio-paste/box";
import { Stack } from "@twilio-paste/stack";
import { Flex } from "@twilio-paste/flex";
import { Button } from "@twilio-paste/button";
import { Paragraph } from "@twilio-paste/paragraph";
import { Text } from "@twilio-paste/text";
import { DisplayPillGroup } from "@twilio-paste/display-pill-group";

import { Post } from "../queries/post";
import { Device, useDevice } from "../hooks/device";

import { CategoryPill, PasteLink, TagPill } from "./common";

type Props = {
  post: Pick<Post, "frontmatter" | "fields" | "excerpt">;
};

const PostCard = ({ post }: Props) => {
  const device = useDevice();
  const image = getImage(post.frontmatter.image);

  return (
    <Box width="100%" padding="space60">
      <Stack orientation="vertical" spacing="space40">
        {image && <GatsbyImage image={image} alt={post.frontmatter.title} />}
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
      <Flex hAlignContent={device > Device.S ? "left" : "center"}>
        <Button variant="secondary" size={device > Device.S ? "small" : "default"}>
          Read More
        </Button>
      </Flex>
    </Box>
  );
};

export default PostCard;
