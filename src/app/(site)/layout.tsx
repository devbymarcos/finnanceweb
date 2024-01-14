interface Children {
  children: React.ReactNode;
}

const SiteLayout = ({ children }: Children) => {
  return (
    <>
      <main className=" bg-base-gray dark:bg-base-black-200 w-full h-screen grid grid-cols-1">
        {children}
      </main>
    </>
  );
};
export default SiteLayout;
