import React from "react";
import { Box } from "@twilio-paste/box";
import { Anchor } from "@twilio-paste/anchor";
import { Heading } from "@twilio-paste/heading";

import { SiteMetadata } from "../queries/siteMetadata";

import { Search } from "./search";
import { PasteLink } from "./common";

type Props = Pick<SiteMetadata, "title" | "menuLinks">;

const Header = ({ title, menuLinks }: Props) => {
  return (
    <Box>
      <PasteLink to="/">
        <Heading variant="heading10" as="h1">
          {title}
        </Heading>
      </PasteLink>
      <ul>
        {menuLinks.map((menuLink) => (
          <PasteLink to={menuLink.link} key={menuLink.link}>
            {menuLink.name}
          </PasteLink>
        ))}
      </ul>
      <Search />
    </Box>
  );
};

export default Header;
