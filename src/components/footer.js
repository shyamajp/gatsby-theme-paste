import React from "react";
import { Link } from "gatsby";

const Footer = ({ title, author, social }) => {
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
