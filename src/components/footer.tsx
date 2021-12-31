import React from "react";
import { Link } from "gatsby";

import { SiteMetadata } from "../queries/siteMetadata";

const Footer = ({ title, author, social }: Partial<SiteMetadata>) => {
  return (
    <div>
      <span>
        {title} by {author}
      </span>
      <ul>
        {social.map((socialLink) => (
          <Link to={socialLink.url} key={socialLink.url}>
            {socialLink.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
