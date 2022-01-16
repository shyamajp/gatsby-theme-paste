import React from "react";

import { Box } from "@twilio-paste/box";
import { Stack } from "@twilio-paste/stack";
import { Paragraph } from "@twilio-paste/paragraph";
import { Text } from "@twilio-paste/text";

import { PasteLink, PostGroupPills } from "./common";
import { PostGroup } from "../types";

type Props = {
  link: string;
  title: string;
  date: string;
  excerpt: string;
  categories?: string[] | PostGroup[];
  tags?: string[] | PostGroup[];
};

const PostMeta = ({ link, title, date, categories, tags, excerpt }: Props) => {
  return (
    <Stack orientation="vertical" spacing="space40">
      <PasteLink to={link}>
        <Text as="h2" fontSize="fontSize50">
          {title}
        </Text>
      </PasteLink>
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
