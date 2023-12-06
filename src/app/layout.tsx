import { roboto } from "@/fonts";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
