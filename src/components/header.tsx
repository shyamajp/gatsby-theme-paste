import React from "react";
import { Link } from "gatsby";

import { SiteMetadata } from "../queries/siteMetadata";

import { Search } from "./search";

type Props = Pick<SiteMetadata, "title" | "menuLinks">;

const Header = ({ title, menuLinks }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {menuLinks.map((menuLink) => (
          <Link to={menuLink.link} key={menuLink.link}>
            {menuLink.name}
          </Link>
        ))}
      </ul>
      <Search />
    </div>
  );
};

export default Header;
