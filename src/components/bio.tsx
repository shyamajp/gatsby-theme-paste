import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Bio = ({ avatar, author }) => {
  const image = getImage(avatar);

  return (
    <div>
      <h3>About Author</h3>
      <GatsbyImage image={image} alt={author} />
      <span>I am {author}</span>
    </div>
  );
};

export default Bio;
