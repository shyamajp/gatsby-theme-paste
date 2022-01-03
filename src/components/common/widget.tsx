import React from "react";

import { Box } from "@twilio-paste/box";
import { Flex } from "@twilio-paste/flex";
import { Heading } from "@twilio-paste/heading";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const Widget = ({ title, children }: Props) => {
  return (
    <Box padding="space60">
      <Flex vertical hAlignContent="center">
        <Heading variant="heading30" as="h3">
          {title}
        </Heading>
        {children}
      </Flex>
    </Box>
  );
};
