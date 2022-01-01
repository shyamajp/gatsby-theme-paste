import React from "react";

import { SiteMetadata } from "../queries/siteMetadata";

const Footer = ({ title, author, social }: Pick<SiteMetadata, "title" | "author" | "social">) => {
  return (
    <div>
      <span>
        {title} by {author}
      </span>
      <ul>
        {social.map((socialLink) => (
          <a href={socialLink.url} key={socialLink.url} target="_blank">
            {socialLink.name}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
