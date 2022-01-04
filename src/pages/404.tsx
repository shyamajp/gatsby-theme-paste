import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Heading } from "@twilio-paste/heading";
import { Box } from "@twilio-paste/box";
import { Flex } from "@twilio-paste/flex";
import { Paragraph } from "@twilio-paste/paragraph";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { PasteLink } from "../components/common";

const NotFound = () => {
  return (
    <Layout>
      <SEO title="Not Found" description="Page Not Found" />
      <Heading variant="heading10" as="h1">
        Page Not Found
      </Heading>
      <Flex vAlignContent="center" hAlignContent="center" wrap>
        <Box maxWidth={400}>
          <StaticImage src="../../static/Actual size_PNG-illustration-search.png" alt="Not Found" placeholder="blurred" />
        </Box>
        <Flex vertical grow marginTop="space80" hAlignContent="center">
          <Heading as="h3" variant="heading30">
            No page registered at this url
          </Heading>
          <Paragraph>This page does not exist.</Paragraph>
          <PasteLink to="/">Back to Home</PasteLink>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default NotFound;
