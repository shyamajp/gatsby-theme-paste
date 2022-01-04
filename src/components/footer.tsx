import React from "react";

import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import { Stack } from "@twilio-paste/stack";
import { Flex } from "@twilio-paste/flex";
import { Text } from "@twilio-paste/text";

import { SiteMetadata } from "../queries/siteMetadata";
import { PasteLink } from "./common";

type Props = Pick<SiteMetadata, "title" | "author" | "social" | "menuLinks">;

const Footer = ({ title, author, social, menuLinks }: Props) => {
  return (
    <Box backgroundColor="colorBackgroundPrimaryWeakest" padding="space40" width="100%">
      <Stack orientation="vertical" spacing="space40">
        <Flex hAlignContent="around">
          <Box>
            <Heading variant="heading40" as="h4">
              Links
            </Heading>
            <Stack orientation="vertical" spacing="space20">
              {menuLinks.map((socialLink) => (
                <PasteLink to={socialLink.link} key={socialLink.link}>
                  {socialLink.name}
                </PasteLink>
              ))}
            </Stack>
          </Box>
          <Box>
            <Heading variant="heading40" as="h4">
              Social
            </Heading>
            <Stack orientation="vertical" spacing="space20">
              {social.map((socialLink) => (
                <Anchor href={socialLink.url} key={socialLink.url} showExternal>
                  {socialLink.name}
                </Anchor>
              ))}
            </Stack>
          </Box>
        </Flex>
        <Flex hAlignContent="center">
          <Text as="span">
            {title} by {author.name}
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Footer;
