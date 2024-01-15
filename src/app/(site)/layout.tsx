import HeaderSite from "./HeaderSite";

interface Children {
  children: React.ReactNode;
}

const SiteLayout = ({ children }: Children) => {
  return (
    <>
      <main className=" bg-base-gray dark:bg-base-black-200 w-full h-screen">
        <HeaderSite />
        {children}
      </main>
    </>
  );
};
export default SiteLayout;
