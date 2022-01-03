import React from "react";
import { navigate } from "gatsby";

import { Box } from "@twilio-paste/box";

type Props = {
  to: string;
  children: React.ReactNode;
};

// Use this with a wrapping DisplayPillGroup
// A slightly modified version of DisplayPill by @twilio-paste/display-pill-group
export const CategoryPill = ({ to, children }: Props) => {
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
