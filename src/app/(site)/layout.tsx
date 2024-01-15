import HeaderSite from "./HeaderSite";

interface Children {
  children: React.ReactNode;
}

const SiteLayout = ({ children }: Children) => {
  return (
    <>
      <HeaderSite />
      <main className="w-full">{children}</main>
    </>
  );
};
export default SiteLayout;
