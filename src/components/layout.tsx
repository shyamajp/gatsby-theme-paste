import React from "react";
import { Theme } from "@twilio-paste/theme";
import { Box } from "@twilio-paste/box";
import { Flex } from "@twilio-paste/flex";

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
      <Header title={siteMetadata.title} menuLinks={siteMetadata.menuLinks} />
      <Flex grow>
        {children}
        <Bio author={siteMetadata.author} avatar={avatar} />
      </Flex>
      <Footer title={siteMetadata.title} author={siteMetadata.author} social={siteMetadata.social} menuLinks={siteMetadata.menuLinks} />
    </Theme.Provider>
  );
};

export default Layout;
