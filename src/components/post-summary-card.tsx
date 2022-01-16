import React from "react";
import { ImageDataLike } from "gatsby-plugin-image";

import { Box } from "@twilio-paste/box";
import { Grid, Column } from "@twilio-paste/grid";
import { Stack } from "@twilio-paste/stack";
import { Paragraph } from "@twilio-paste/paragraph";
import { Text } from "@twilio-paste/text";

import { PasteLink, PostGroupPills } from "./common";
import PostImage from "./post-image";

type Props = {
  id: string;
  title: string;
  slug: string;
  date: string;
  image: ImageDataLike;
  excerpt: string;
  tags?: string[];
  categories?: string[];
};

const PostSummaryCard = ({ slug, title, date, image, excerpt, tags, categories }: Props) => {
  return (
    <Box width="100%">
      <Grid gutter="space60">
        <Column span={[12, 4, 4]} vertical={[true, false, false]}>
          <PostImage image={image} alt={title} width={300} />
        </Column>
        <Column span={[12, 8, 8]} vertical={[true, false, false]}>
          <Stack orientation="vertical" spacing="space40">
            <PasteLink to={`/blog/${slug}`}>
              <Text as="h2" fontSize="fontSize50">
                {title}
              </Text>
            </PasteLink>
            <PostGroupPills type="categories" postGroups={categories} />
            <PostGroupPills type="tags" postGroups={tags} />
            <Text as="small" color="colorTextWeak" fontSize="fontSize20">
              {date}
            </Text>
            <Paragraph>{excerpt}</Paragraph>
          </Stack>
        </Column>
      </Grid>
    </Box>
  );
};

export default PostSummaryCard;
