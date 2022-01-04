import React from "react";

import { Text } from "@twilio-paste/text";

import { SiteMetadata } from "../queries/siteMetadata";

import { Avatar } from "./common";
import { Widget } from "./common/widget";

type Props = Pick<SiteMetadata, "author">;

const Bio = ({ author }: Props) => {
  return (
    <Widget title="About Author">
      <Avatar />
      <Text as="span" marginTop="space60" fontWeight="fontWeightSemibold" fontSize="fontSize40">
        {author.name}
      </Text>
      <Text as="p" marginTop="space60" fontSize="fontSize40" textAlign="center">
        {author.description}
      </Text>
    </Widget>
  );
};

export default Bio;
