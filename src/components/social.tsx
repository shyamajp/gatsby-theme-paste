import React from "react";

import { Box } from "@twilio-paste/box";
import { Anchor } from "@twilio-paste/anchor";

import { Widget } from "./common";
import { SocialLink } from "../queries/siteMetadata";

type Props = {
  social: SocialLink[];
};

const Social = ({ social }: Props) => {
  return (
    <Widget title="Social">
      {social.map(({ name, url }) => (
        <Box key={url}>
          <Anchor href={url}>{name}</Anchor>
        </Box>
      ))}
    </Widget>
  );
};

export default Social;
