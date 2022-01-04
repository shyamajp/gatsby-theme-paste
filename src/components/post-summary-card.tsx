import React from "react";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

import { Box } from "@twilio-paste/box";
import { Stack } from "@twilio-paste/stack";
import { Flex } from "@twilio-paste/flex";
import { Paragraph } from "@twilio-paste/paragraph";
import { Text } from "@twilio-paste/text";

import { useSiteMetadata } from "../queries/siteMetadata";

import { PasteLink } from "./common";

type Props = {
  id: string;
  title: string;
  slug: string;
  date: string;
  image: ImageDataLike;
  excerpt: string;
};

const PostSummaryCard = ({ slug, title, date, image, excerpt }: Props) => {
  const { defaultImage } = useSiteMetadata();
  const postImage = getImage(image);
  const defaultPostImage = getImage(defaultImage);

  return (
    <Box width="100%">
      <Flex>
        <Box marginRight="space60">
          <GatsbyImage image={postImage ? postImage : defaultPostImage} alt={title} style={{ width: 200 }} />
        </Box>
        <Flex grow>
          <Stack orientation="vertical" spacing="space40">
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
        </Flex>
      </Flex>
    </Box>
  );
};

export default PostSummaryCard;
