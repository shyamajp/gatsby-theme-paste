import React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

import { Box } from "@twilio-paste/box";
import { Width } from "@twilio-paste/style-props";

import { useSiteMetadata } from "../../queries/siteMetadata";

type Props = { width?: Width };

export const Avatar = ({ width }: Props) => {
  const { siteMetadata, avatar } = useSiteMetadata();
  const avatarImage = getImage(avatar);

  return (
    <Box width={width}>
      {avatarImage ? (
        <GatsbyImage image={avatarImage} alt={siteMetadata.author.name} style={{ borderRadius: "50%" }} />
      ) : (
        <StaticImage src="../../../static/avatar.png" alt={siteMetadata.author.name} width={200} style={{ borderRadius: "50%" }} />
      )}
    </Box>
  );
};
