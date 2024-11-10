"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Nprogress = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#e67e22"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Nprogress;
