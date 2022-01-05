import React from "react";
import { navigate } from "gatsby";

import { Box } from "@twilio-paste/box";
import { JustifyContent } from "@twilio-paste/style-props";

// A slightly modified version of DisplayPillGroup and DisplayPill by @twilio-paste/display-pill-group

type PostGroupPillGroupProps = {
  children: React.ReactNode;
  justifyContent?: JustifyContent;
};

export const PostGroupPillGroup = ({ children, justifyContent = "flex-start" }: PostGroupPillGroupProps) => {
  return (
    <Box as="ul" margin="space0" padding="space0" display="flex" justifyContent={justifyContent} flexWrap="wrap" rowGap="space30" columnGap="space30">
      {children}
    </Box>
  );
};

type PostGroupPillProps = {
  to: string;
  children: React.ReactNode;
};

export const CategoryPill = ({ to, children }: PostGroupPillProps) => {
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

export const TagPill = ({ to, children }: PostGroupPillProps) => {
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
