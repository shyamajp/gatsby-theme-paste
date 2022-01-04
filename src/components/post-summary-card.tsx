import React from "react";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

import { Box } from "@twilio-paste/box";
import { Grid, Column } from "@twilio-paste/grid";
import { Stack } from "@twilio-paste/stack";
import { DisplayPillGroup } from "@twilio-paste/display-pill-group";
import { Paragraph } from "@twilio-paste/paragraph";
import { Text } from "@twilio-paste/text";

import { useSiteMetadata } from "../queries/siteMetadata";

import { CategoryPill, PasteLink, TagPill } from "./common";

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
  const { defaultImage } = useSiteMetadata();
  const postImage = getImage(image);
  const defaultPostImage = getImage(defaultImage);

  return (
    <Box width="100%">
      <Grid gutter="space60">
        <Column span={[12, 4, 4]} vertical={[true, false, false]}>
          <GatsbyImage image={postImage ? postImage : defaultPostImage} alt={title} />
        </Column>
        <Column span={[12, 8, 8]} vertical={[true, false, false]}>
          <Stack orientation="vertical" spacing="space40">
            <DisplayPillGroup aria-label="categories">
              {categories?.map((category) => (
                <CategoryPill to={`/categories/${category.toLowerCase()}`}>{category}</CategoryPill>
              ))}
              {tags?.map((tag) => (
                <TagPill to={`/tags/${tag.toLowerCase()}`}>{tag}</TagPill>
              ))}
            </DisplayPillGroup>
            <PasteLink to={`/blog/${slug}`}>
              <Text as="h2" fontSize="fontSize50">
                {title}
              </Text>
            </PasteLink>
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
