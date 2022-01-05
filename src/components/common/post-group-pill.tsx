// A slightly modified version of DisplayPillGroup and DisplayPill by @twilio-paste/display-pill-group

import React from "react";
import { navigate } from "gatsby";

import { Box } from "@twilio-paste/box";
import { JustifyContent } from "@twilio-paste/style-props";

import { PostGroup } from "../../types";
import { isString } from "../../utils";

type PostGroupPillProps = {
  to: string;
  children: React.ReactNode;
};

const CategoryPill = ({ to, children }: PostGroupPillProps) => {
  return (
    <Box
      as="a"
      alignItems="center"
      backgroundColor="colorBackgroundPrimaryStrong"
      borderRadius="borderRadius10"
      color="colorTextInverse"
      columnGap="space20"
      cursor={to ? "pointer" : "default"}
      display="flex"
      fontSize="fontSize20"
      fontWeight="fontWeightSemibold"
      lineHeight="lineHeight10"
      paddingX="space30"
      paddingY="space20"
      outline="none"
      tabIndex={0}
      _hover={{
        textDecoration: "none",
        backgroundColor: "colorBackgroundPrimaryLight",
      }}
      _focusVisible={{
        backgroundColor: "colorBackgroundPrimaryLight",
        boxShadow: "shadowFocus",
        color: "colorTextLinkStronger",
      }}
      onClick={() => navigate(to)}
    >
      {children}
    </Box>
  );
};

const TagPill = ({ to, children }: PostGroupPillProps) => {
  return (
    <Box
      as="a"
      alignItems="center"
      backgroundColor="colorBackgroundBody"
      borderRadius="borderRadius10"
      color="colorText"
      columnGap="space20"
      cursor={to ? "pointer" : "default"}
      display="flex"
      fontSize="fontSize20"
      fontWeight="fontWeightSemibold"
      lineHeight="lineHeight10"
      paddingX="space30"
      paddingY="space20"
      outline="none"
      tabIndex={0}
      _hover={{
        textDecoration: "none",
        backgroundColor: "colorBackgroundPrimaryLight",
        color: "colorTextInverse",
      }}
      _focusVisible={{
        backgroundColor: "colorBackgroundPrimaryLight",
        color: "colorTextInverse",
        boxShadow: "shadowFocus",
      }}
      onClick={() => navigate(to)}
    >
      # {children}
    </Box>
  );
};

type PostGroupPillGroupProps = {
  children: React.ReactNode;
  justifyContent?: JustifyContent;
};

const PostGroupPillGroup = ({ children, justifyContent = "flex-start" }: PostGroupPillGroupProps) => {
  return (
    <Box as="ul" margin="space0" padding="space0" display="flex" justifyContent={justifyContent} flexWrap="wrap" rowGap="space30" columnGap="space30">
      {children}
    </Box>
  );
};

type PostGroupPillsProps = {
  postGroups: PostGroup[] | string[];
  type: "tags" | "categories";
  justifyContent?: JustifyContent;
  limit?: number;
};

export const PostGroupPills = ({ type, postGroups, justifyContent = "flex-start", limit }: PostGroupPillsProps) => {
  if (!postGroups) {
    return <></>;
  }

  return (
    <PostGroupPillGroup aria-label={type} justifyContent={justifyContent}>
      {postGroups.slice(0, limit).map((postGroup) => {
        const pill = isString(postGroup) ? postGroup : `${postGroup.fieldValue} ${postGroup.totalCount}`;
        const link = isString(postGroup) ? postGroup : postGroup.fieldValue.toLowerCase();

        return type === "categories" ? (
          <CategoryPill key={link} to={`/${type}/${link}`}>
            {pill}
          </CategoryPill>
        ) : (
          <TagPill key={link} to={`/${type}/${link}`}>
            {pill}
          </TagPill>
        );
      })}
    </PostGroupPillGroup>
  );
};
