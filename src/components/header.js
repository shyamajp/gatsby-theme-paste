import React from "react";
import { Link } from "gatsby";

const Header = ({ title, menuLinks }) => {
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
