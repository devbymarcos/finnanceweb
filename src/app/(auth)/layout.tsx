"use client";
import Alert from "@/components/alert/Alert";

interface Children {
  children: React.ReactNode;
}

const LoginLayout = ({ children }: Children) => {
  return (
    <>
      <main className=" bg-base-gray dark:bg-base-black-200 w-full h-screen grid grid-cols-1">
        {children}
      </main>
    </>
  );
};
export default LoginLayout;
