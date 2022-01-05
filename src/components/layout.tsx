import React from "react";

import { Theme } from "@twilio-paste/theme";
import { Box } from "@twilio-paste/box";
import { Flex } from "@twilio-paste/flex";

import { useSiteMetadata } from "../queries/siteMetadata";
import { usePostGroups } from "../queries/post";

import Header from "./header";
import Footer from "./footer";
import Bio from "./bio";
import PostGroups from "./post-groups";
import Social from "./social";

import "./layout.css";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  const { siteMetadata } = useSiteMetadata();
  const { categories, tags } = usePostGroups();

  return (
    <Theme.Provider theme="default">
      <Flex vertical minHeight="100vh">
        <Header title={siteMetadata.title} menuLinks={siteMetadata.menuLinks} />
        <div id="page">
          <div id="side">
            <Box padding="space60" backgroundColor="colorBackgroundRowStriped" minHeight="100%">
              <Bio author={siteMetadata.author} />
              <PostGroups postGroups={categories} type="categories" />
              <PostGroups postGroups={tags} type="tags" />
              <Social social={siteMetadata.social} />
            </Box>
          </div>
          <div id="main">
            <Flex vertical hAlignContent="center">
              <Box flex={1} maxWidth={1000} padding="space120">
                {children}
              </Box>
              <Footer siteMetadata={siteMetadata} categories={categories} tags={tags} />
            </Flex>
          </div>
        </div>
      </Flex>
    </Theme.Provider>
  );
};

export default Layout;
