import React from "react";

import { Box } from "@twilio-paste/box";
import { Stack } from "@twilio-paste/stack";
import { Paragraph } from "@twilio-paste/paragraph";
import { Text } from "@twilio-paste/text";

import { PasteLink, PostGroupPills } from "./common";
import { ExtendedPostGroups, Page, PageFrontmatter } from "../queries/post";

type Props = ExtendedPostGroups &
  Pick<PageFrontmatter, "date" | "title"> &
  Pick<Page, "excerpt"> & {
    link: string;
  };

const PostMeta = ({ link, title, date, categories, tags, excerpt }: Props) => {
  return (
    <Stack orientation="vertical" spacing="space20">
      <Text as="h2" fontSize="fontSize50">
        <PasteLink to={link}>{title}</PasteLink>
      </Text>
      <Box>
        <Text as="small" color="colorTextWeak" fontSize="fontSize20">
          {date}
        </Text>
      </Box>
      <PostGroupPills type="categories" postGroups={categories} />
      <PostGroupPills type="tags" postGroups={tags} />
      <Paragraph>{excerpt}</Paragraph>
    </Stack>
  );
};

export default PostMeta;
