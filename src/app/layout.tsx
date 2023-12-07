"use client";
import { roboto } from "@/fonts";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import { AppContext, useContextApp } from "@/hooks/useContextApp";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AppContext>
        <body className={`${roboto.className} dark:bg-base-black-200 `}>
          <Sidebar />
          {children}
        </body>
      </AppContext>
    </html>
  );
}
