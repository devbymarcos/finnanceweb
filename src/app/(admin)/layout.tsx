import "../globals.css";
import NavigationTop from "@/components/navigation/NavigationTop";
import PrivateRouter from "./PrivateRouter";
import { montserrat } from "@/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PrivateRouter>
        <NavigationTop />

        <main
          className={`container-custom min-h-screen mx-auto    mt-6 ${montserrat.className}`}
        >
          {children}
        </main>
      </PrivateRouter>
    </>
  );
}
