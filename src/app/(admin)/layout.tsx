import "../globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import PrivateRouter from "./PrivateRouter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PrivateRouter>
        <Sidebar />
        {/* <Header /> */}
        <main className=" bg-base-white dark:bg-base-black-200  container-custom min-h-screen mx-auto   p-6 mt-6">
          {children}
        </main>
      </PrivateRouter>
    </>
  );
}
