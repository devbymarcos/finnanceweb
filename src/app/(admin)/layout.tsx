"use client";
import { roboto } from "@/fonts";
import "../globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import { AppContext } from "@/hooks/useContextApp";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppContext>
      <Sidebar />
      <main className="absolute left-[250px]">{children}</main>
    </AppContext>
  );
}
