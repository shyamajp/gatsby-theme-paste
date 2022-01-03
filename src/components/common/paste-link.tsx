import React from "react";
import { navigate } from "gatsby";
import { Anchor } from "@twilio-paste/anchor";

type Props = {
  to: string;
  children: React.ReactNode;
};

export const PasteLink = ({ to, children }: Props) => {
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
