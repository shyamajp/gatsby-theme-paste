import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { SiteMetadata, UseSiteMetadata } from "../queries/siteMetadata";

type Props = Pick<SiteMetadata, "author"> & Pick<UseSiteMetadata, "avatar">;

const Bio = ({ avatar, author }: Props) => {
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
