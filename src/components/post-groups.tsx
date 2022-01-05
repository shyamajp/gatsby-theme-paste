import React from "react";

import { Box } from "@twilio-paste/box";

import { PostGroup } from "../types";

import { Widget, CategoryPill, PostGroupPillGroup, PasteLink, TagPill } from "./common";

type PostGroupProps = {
  postGroups: PostGroup[];
  title: "Categories" | "Tags";
};

const PostGroups = ({ postGroups, title }: PostGroupProps) => {
  const lowerCasedTitle = title.toLowerCase();

  if (!postGroups.length) {
    return <></>;
  }

  return (
    <Widget title={title}>
      <PostGroupPillGroup aria-label={lowerCasedTitle} justifyContent="center">
        {postGroups.slice(0, 20).map(({ fieldValue, totalCount }) => {
          return title === "Categories" ? (
            <CategoryPill key={fieldValue} to={`/${lowerCasedTitle}/${fieldValue.toLowerCase()}`}>
              {fieldValue} {totalCount}
            </CategoryPill>
          ) : (
            <TagPill key={fieldValue} to={`/${lowerCasedTitle}/${fieldValue.toLowerCase()}`}>
              {fieldValue} {totalCount}
            </TagPill>
          );
        })}
      </PostGroupPillGroup>
      {postGroups.length > 20 && (
        <Box marginTop="space30">
          <PasteLink to={`/${lowerCasedTitle}`}>See all {lowerCasedTitle}</PasteLink>
        </Box>
      )}
    </Widget>
  );
};

export default PostGroups;
