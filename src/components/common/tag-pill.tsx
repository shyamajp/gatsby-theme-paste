import React from "react";
import { navigate } from "gatsby";

import { Box } from "@twilio-paste/box";

type Props = {
  to: string;
  children: React.ReactNode;
};

// Use this with a wrapping DisplayPillGroup
// A slightly modified version of DisplayPill by @twilio-paste/display-pill-group
export const TagPill = ({ to, children }: Props) => {
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
      {children}
    </Box>
  );
};
