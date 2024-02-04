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
        <Header />
        <main className="absolute bg-base-white dark:bg-base-black-200 md:left-[250px] w-full md:w-full-custom min-h-screen    p-6 mt-24">
          {children}
        </main>
      </PrivateRouter>
    </>
  );
}
