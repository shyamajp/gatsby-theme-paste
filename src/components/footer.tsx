import React from "react";

import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Grid, Column } from "@twilio-paste/grid";
import { Heading } from "@twilio-paste/heading";
import { Stack } from "@twilio-paste/stack";
import { Flex } from "@twilio-paste/flex";
import { Text } from "@twilio-paste/text";
import { Paragraph } from "@twilio-paste/paragraph";
import { ChevronUpIcon } from "@twilio-paste/icons/esm/ChevronUpIcon";

import { SiteMetadata } from "../queries/siteMetadata";
import { PostGroup } from "../types";

import { PasteLink, PostGroupPills } from "./common";

type Props = {
  siteMetadata: SiteMetadata;
  tags: PostGroup[];
  categories: PostGroup[];
};

type FooterBlockProps = {
  children: React.ReactNode;
  title: string;
};

const FooterBlock = ({ children, title }: FooterBlockProps) => (
  <Flex vertical hAlignContent="center" paddingX="space60">
    <Heading variant="heading40" as="h4">
      {title}
    </Heading>
    <Stack orientation="vertical" spacing="space30">
      {children}
    </Stack>
  </Flex>
);

const Footer = ({ siteMetadata, categories, tags }: Props) => {
  return (
    <Box backgroundColor="colorBackgroundPrimaryWeakest" padding="space60" width="100%">
      <Flex hAlignContent="center" marginBottom="space60">
        <Button variant="reset" size="reset" onClick={() => document.getElementById("main").scrollTo({ top: 0, behavior: "smooth" })}>
          <ChevronUpIcon decorative={false} title="Go back to page top" size="sizeIcon60" />
        </Button>
      </Flex>
      <Grid>
        <Column span={[12, 6, 3]}>
          <FooterBlock title="Quick Links">
            {siteMetadata.quickLinks.map((quickLink) => (
              <PasteLink to={quickLink.link} key={quickLink.link}>
                {quickLink.name}
              </PasteLink>
            ))}
          </FooterBlock>
        </Column>
        <Column span={[12, 6, 3]}>
          <FooterBlock title="Social">
            {siteMetadata.social.map((socialLink) => (
              <Anchor href={socialLink.url} key={socialLink.url} showExternal>
                {socialLink.name}
              </Anchor>
            ))}
          </FooterBlock>
        </Column>
        <Column span={[12, 6, 3]}>
          <FooterBlock title="Categories and Tags">
            <Stack orientation="vertical" spacing="space60">
              <PostGroupPills type="categories" postGroups={categories} justifyContent="center" limit={5} />
              <PostGroupPills type="tags" postGroups={tags} justifyContent="center" limit={5} />
            </Stack>
          </FooterBlock>
        </Column>
        <Column span={[12, 6, 3]}>
          <FooterBlock title="About">
            <Text as="b" fontWeight="fontWeightBold" fontSize="fontSize40">
              {siteMetadata.title}
            </Text>
            <Paragraph>{siteMetadata.description}</Paragraph>
            <Text as="b" fontWeight="fontWeightBold" fontSize="fontSize40">
              {siteMetadata.author.name}
            </Text>
            <Paragraph>{siteMetadata.author.description}</Paragraph>
          </FooterBlock>
        </Column>
      </Grid>
    </Box>
  );
};

export default Footer;
