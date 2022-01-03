import React from "react";

import { Theme } from "@twilio-paste/theme";
import { Box } from "@twilio-paste/box";
import { Flex } from "@twilio-paste/flex";
import { Grid, Column } from "@twilio-paste/grid";

import { useSiteMetadata } from "../queries/siteMetadata";

import Header from "./header";
import Footer from "./footer";
import Bio from "./bio";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  const { siteMetadata, avatar } = useSiteMetadata();

  return (
    <Theme.Provider theme="default">
      <Flex vertical minHeight="100vh">
        <Box width="100%">
          <Header title={siteMetadata.title} menuLinks={siteMetadata.menuLinks} />
        </Box>
        <Flex width="100%" grow>
          <Grid gutter={["space30", "space90", "space120"]}>
            <Column span={[12, 9, 8]}>{children}</Column>
            <Column span={[12, 4, 3]}>
              <Box backgroundColor="colorBackgroundRowStriped">
                <Bio author={siteMetadata.author} avatar={avatar} />
              </Box>
            </Column>
          </Grid>
        </Flex>
        <Box width="100%">
          <Footer title={siteMetadata.title} author={siteMetadata.author} social={siteMetadata.social} menuLinks={siteMetadata.menuLinks} />
        </Box>
      </Flex>
    </Theme.Provider>
  );
};

export default Layout;
