import LoginIcon from "@/components/icons/LoginIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderSite = () => {
  return (
    <header className="bg-base-secondary flex items-center justify-between overflow-hidden ">
      <div className="px-2 py-4 h-full">
        <Link href="/">
          <Image
            src="/images/logo/wc-logo-white.png"
            alt="logo app"
            width={90}
            height={100}
          />
        </Link>
      </div>
      <div className="hover:bg-blue-600 h-full py-8 px-7">
        <Link
          href="/login"
          className="flex gap-2 items-center text-white font-bold  "
        >
          <LoginIcon />
          Login
        </Link>
      </div>
    </header>
  );
};

export default HeaderSite;
