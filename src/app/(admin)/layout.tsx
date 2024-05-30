import "../globals.css";
import NavigationTop from "@/components/navigation/NavigationTop";
import PrivateRouter from "./PrivateRouter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PrivateRouter>
        <NavigationTop />

        <main className="    container-custom min-h-screen mx-auto   p-6 mt-6">
          {children}
        </main>
      </PrivateRouter>
    </>
  );
}
