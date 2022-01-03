import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Box } from "@twilio-paste/box";
import { Width } from "@twilio-paste/style-props";

import { useSiteMetadata } from "../../queries/siteMetadata";

type Props = { width?: Width };

export const Avatar = ({ width }: Props) => {
  const { siteMetadata, avatar } = useSiteMetadata();
  const image = getImage(avatar);

  return (
    <Box width={width}>
      <GatsbyImage image={image} alt={siteMetadata.author} style={{ borderRadius: "50%" }} />
    </Box>
  );
};
