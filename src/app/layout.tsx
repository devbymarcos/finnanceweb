import { roboto } from "@/fonts";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import { AppContext, useAppContext } from "@/hooks/useContexApp";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AppContext>
          <Sidebar />
          {children}
        </AppContext>
      </body>
    </html>
  );
}
