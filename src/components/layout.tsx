import React from "react";
import { Theme } from "@twilio-paste/theme";
import { Box } from "@twilio-paste/box";

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
      <Box>
        <Header title={siteMetadata.title} menuLinks={siteMetadata.menuLinks} />
      </Box>
      <Box>
        {children}
        <Bio author={siteMetadata.author} avatar={avatar} />
      </Box>
      <Box>
        <Footer title={siteMetadata.title} author={siteMetadata.author} social={siteMetadata.social} />
      </Box>
    </Theme.Provider>
  );
};

export default Layout;
