import React from "react";
import { Link } from "gatsby";

import { SiteMetadata } from "../queries/siteMetadata";

const Header = ({ title, menuLinks }: Pick<SiteMetadata, "title" | "menuLinks">) => {
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
    </div>
  );
};

export default Header;
