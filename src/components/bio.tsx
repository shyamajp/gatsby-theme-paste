import React from "react";

import { Box } from "@twilio-paste/box";
import { Flex } from "@twilio-paste/flex";
import { Text } from "@twilio-paste/text";
import { Heading } from "@twilio-paste/heading";

import { SiteMetadata, UseSiteMetadata } from "../queries/siteMetadata";

import Avatar from "./avatar";

type Props = Pick<SiteMetadata, "author"> & Pick<UseSiteMetadata, "avatar">;

const Bio = ({ avatar, author }: Props) => {
  return (
    <Box padding="space40">
      <Flex vertical hAlignContent="center">
        <Heading variant="heading30" as="h3">
          About Author
        </Heading>
        <Avatar avatar={avatar} author={author} />
        <Text as="span" marginTop="space60" fontWeight="fontWeightSemibold" fontSize="fontSize40">
          {author}
        </Text>
        <Text as="p" marginTop="space60" fontSize="fontSize40" textAlign="center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptate eligendi odio est autem enim nostrum perspiciatis, illo exercitationem consectetur nemo quisquam possimus quaerat
          facilis animi aliquid. Illum, repellendus ex!
        </Text>
      </Flex>
    </Box>
  );
};

export default Bio;
