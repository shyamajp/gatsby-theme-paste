import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import { Heading } from "@twilio-paste/heading";
import { Flex } from "@twilio-paste/flex";
import { Box } from "@twilio-paste/box";
import { Paragraph } from "@twilio-paste/paragraph";

type Props = {
  title: string;
  description: string;
  action: React.ReactNode;
};

const EmptyState = ({ title, description, action }: Props) => {
  return (
    <Flex vAlignContent="center" hAlignContent="center" wrap>
      <Box maxWidth={400}>
        <StaticImage src="../../static/Actual size_PNG-illustration-search.png" alt="Not Found" placeholder="blurred" />
      </Box>
      <Flex vertical grow marginTop="space80" hAlignContent="center">
        <Heading as="h3" variant="heading30">
          {title}
        </Heading>
        <Paragraph>{description}</Paragraph>
        {action}
      </Flex>
    </Flex>
  );
};

export default EmptyState;
