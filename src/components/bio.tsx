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
        {author}
      </Text>
      <Text as="p" marginTop="space60" fontSize="fontSize40" textAlign="center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptate eligendi odio est autem enim nostrum perspiciatis, illo exercitationem consectetur nemo quisquam possimus quaerat
        facilis animi aliquid. Illum, repellendus ex!
      </Text>
    </Widget>
  );
};

export default Bio;
