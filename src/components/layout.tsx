import React from "react";

import { Theme } from "@twilio-paste/theme";
import { Box } from "@twilio-paste/box";
import { Flex } from "@twilio-paste/flex";

import { useSiteMetadata } from "../queries/siteMetadata";
import { usePostGroups } from "../queries/post";

import Header from "./header";
import Footer from "./footer";
import Bio from "./bio";
import Categories from "./categories";
import Tags from "./tags";

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
            <Box backgroundColor="colorBackgroundRowStriped">
              <Bio author={siteMetadata.author} />
              <Categories categories={categories} />
              <Tags tags={tags} />
            </Box>
          </div>
          <div id="main">
            <Flex vertical hAlignContent="center">
              <Box maxWidth={1200} padding="space80">
                {children}
              </Box>
              <Footer siteMetadata={siteMetadata} categories={categories.splice(0, 5)} tags={tags.splice(0, 5)} />
            </Flex>
          </div>
        </div>
      </Flex>
    </Theme.Provider>
  );
};

export default Layout;
