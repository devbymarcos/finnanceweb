import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
  title?: string;
};

const BtnLinkSubMenu = ({ children, href, title }: Props) => {
  return (
    <Link
      href={href}
      title={title}
      className="bg-base-secondary px-5 py-3  text-base-white flex items-center gap-3 rounded-lg mb:rounded-sm"
    >
      {children}
    </Link>
  );
};

export default BtnLinkSubMenu;
