import React from "react";

// https://github.com/twilio-labs/paste/discussions/1552
const BREAKPOINTS: Record<string, number> = {
  MOBILE: 400,
  TABLET: 1024,
  PC: 1232,
};

type Device = keyof typeof BREAKPOINTS;

export const useDevice = () => {
  const [width, setWidth] = React.useState(undefined);
  const [device, setDevice] = React.useState<Device>(undefined);

  React.useLayoutEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    if (width > BREAKPOINTS.PC) {
      setDevice("PC");
    } else if (width > BREAKPOINTS.TABLET) {
      setDevice("TABLET");
    } else {
      setDevice("MOBILE");
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return device;
};
