import React from "react";

// https://github.com/twilio-labs/paste/discussions/1552
const BREAKPOINTS: Record<string, number> = {
  S: 400,
  M: 1024,
  L: 1232,
};

export enum Device {
  S,
  M,
  L,
  XL,
}

export const useDevice = () => {
  const [width, setWidth] = React.useState(undefined);
  const [device, setDevice] = React.useState<Device>(undefined);

  React.useLayoutEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    if (width < BREAKPOINTS.S) {
      setDevice(Device.S);
    } else if (width < BREAKPOINTS.M) {
      setDevice(Device.M);
    } else if (width < BREAKPOINTS.L) {
      setDevice(Device.L);
    } else {
      setDevice(Device.XL);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return React.useMemo(() => device, [device]);
};
