import React from "react";
import { Anchor } from "@twilio-paste/anchor";

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
          <Anchor href={socialLink.url} key={socialLink.url} showExternal>
            {socialLink.name}
          </Anchor>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
