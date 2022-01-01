import React from "react";

import { useSiteMetadata } from "../queries/siteMetadata";

import Header from "./header";
import Footer from "./footer";

export const Layout = ({ children }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <div>
      <Header title={siteMetadata.title} menuLinks={siteMetadata.menuLinks} />
      {children}
      <Footer title={siteMetadata.title} author={siteMetadata.author} social={siteMetadata.social} />
    </div>
  );
};

export default Layout;
