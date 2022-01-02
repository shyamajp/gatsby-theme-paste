import React from "react";

import { SiteMetadata } from "../queries/siteMetadata";

type Props = Pick<SiteMetadata, "title" | "author" | "social">;

const Footer = ({ title, author, social }: Props) => {
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
