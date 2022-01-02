import React from "react";
import { navigate } from "gatsby";
import { Anchor } from "@twilio-paste/anchor";

export const PasteLink = ({ to, children }) => {
  return (
    <Anchor
      href={to}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </Anchor>
  );
};
