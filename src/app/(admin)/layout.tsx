import "../globals.css";
import PrivateRouter from "./PrivateRouter";
import { montserrat } from "@/fonts";
import Header from "@/components/header/Header";
import MenuSideBar from "@/components/menu/MenuSidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PrivateRouter>
        <Header />
        <MenuSideBar />

        <main
          className={`container-custom min-h-screen mx-auto    mt-6 ${montserrat.className}`}
        >
          {children}
        </main>
      </PrivateRouter>
    </>
  );
}
