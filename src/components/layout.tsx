import React from "react";

import { Theme } from "@twilio-paste/theme";
import { Box } from "@twilio-paste/box";
import { Flex } from "@twilio-paste/flex";
import { Grid, Column } from "@twilio-paste/grid";

import { useSiteMetadata } from "../queries/siteMetadata";
import { usePostGroups } from "../queries/post";

import Header from "./header";
import Footer from "./footer";
import Bio from "./bio";
import Categories from "./categories";
import Tags from "./tags";

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
        <Flex width="100%" grow>
          <Grid vertical={[true, false, false]} equalColumnHeights>
            <Column span={[12, 8, 9]}>
              <Flex width="100%" hAlignContent="center">
                <Box maxWidth={1200} padding="space80">
                  {children}
                </Box>
              </Flex>
            </Column>
            <Column span={[12, 4, 3]}>
              <Box backgroundColor="colorBackgroundRowStriped">
                <Bio author={siteMetadata.author} />
                <Categories categories={categories} />
                <Tags tags={tags} />
              </Box>
            </Column>
          </Grid>
        </Flex>
        <Footer title={siteMetadata.title} author={siteMetadata.author} social={siteMetadata.social} menuLinks={siteMetadata.menuLinks} />
      </Flex>
    </Theme.Provider>
  );
};

export default Layout;
