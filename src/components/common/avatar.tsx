import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Box } from "@twilio-paste/box";
import { Width } from "@twilio-paste/style-props";

import { SiteMetadata, UseSiteMetadata } from "../../queries/siteMetadata";

type Props = Pick<SiteMetadata, "author"> & Pick<UseSiteMetadata, "avatar"> & { width?: Width };

export const Avatar = ({ avatar, author, width }: Props) => {
  const image = getImage(avatar);
  return (
    <Box width={width}>
      <GatsbyImage image={image} alt={author} style={{ borderRadius: "50%" }} />
    </Box>
  );
};
