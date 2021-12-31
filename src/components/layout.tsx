import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";
import { SiteMetadata } from "../queries/siteMetadata";

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          menuLinks {
            name
            link
          }
          social {
            name
            url
          }
        }
      }
    }
  `);

  const siteMetadata: SiteMetadata = data.site.siteMetadata;

  return (
    <div>
      <Header title={siteMetadata.title} menuLinks={siteMetadata.menuLinks} />
      {children}
      <Footer title={siteMetadata.title} author={siteMetadata.author} social={siteMetadata.social} />
    </div>
  );
};

export default Layout;
