"use client";

type Props = {
  colors?: string;
};

const WalletIcon = ({ colors }: Props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        color={colors}
      >
        <path d="M17 14h.01" />
        <path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" />
      </svg>
    </>
  );
};

export default WalletIcon;
