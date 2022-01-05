import React from "react";

import { Box } from "@twilio-paste/box";

import { PostGroup } from "../types";
import { toTitleCase } from "../utils";

import { Widget, PasteLink, PostGroupPills } from "./common";

type PostGroupProps = {
  postGroups: PostGroup[];
  type: "categories" | "tags";
};

const PostGroups = ({ postGroups, type }: PostGroupProps) => {
  const title = toTitleCase(type);

  if (!postGroups.length) {
    return <></>;
  }

  return (
    <Widget title={title}>
      <PostGroupPills type={type} postGroups={postGroups} justifyContent="center" limit={20} />
      {postGroups.length > 20 && (
        <Box marginTop="space30">
          <PasteLink to={`/${type}`}>See all {type}</PasteLink>
        </Box>
      )}
    </Widget>
  );
};

export default PostGroups;
