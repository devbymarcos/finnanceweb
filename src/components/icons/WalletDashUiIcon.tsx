"use client";
import { useStore } from "@/hooks/useStore";
import Image from "next/image";
const WalletDashUiIcon = () => {
  const dark = useStore((state) => state.dark);
  return (
    <>
      <Image
        width={24}
        height={24}
        src="/images/icons/walletdash.png"
        alt="icon"
      />
    </>
  );
};

export default WalletDashUiIcon;
