import "../globals.css";
import PrivateRouter from "./PrivateRouter";
import { montserrat } from "@/fonts";
import Header from "@/components/header/Header";
import MenuSideBar from "@/components/menu/MenuSidebar";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
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
          className={`container-custom min-h-screen mx-auto pb-40 md:pb-0   mt-6 ${montserrat.className}`}
        >
          {children}
          <ProgressBar
            height="4px"
            color="#e67e22"
            options={{ showSpinner: false }}
            shallowRouting
          />
        </main>
      </PrivateRouter>
    </>
  );
}
