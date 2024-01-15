import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
};

const BtnLinkSubMenu = ({ children, href }: Props) => {
  return (
    <Link
      href={href}
      className="bg-base-secondary px-3 py-3  text-base-white block rounded-full"
    >
      {children}
    </Link>
  );
};

export default BtnLinkSubMenu;
