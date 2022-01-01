import React from "react";

import { useSiteMetadata } from "../queries/siteMetadata";

import Header from "./header";
import Footer from "./footer";
import Bio from "./bio";

export const Layout = ({ children }) => {
  const { siteMetadata, avatar } = useSiteMetadata();

  return (
    <div>
      <Header title={siteMetadata.title} menuLinks={siteMetadata.menuLinks} />
      <Bio author={siteMetadata.author} avatar={avatar} />
      {children}
      <Footer title={siteMetadata.title} author={siteMetadata.author} social={siteMetadata.social} />
    </div>
  );
};

export default Layout;
