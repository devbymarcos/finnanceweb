"use client";

import "../globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "./dash/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <main className="absolute md:left-[250px] w-full md:w-full-custom   p-6">
        <div className="container-custom mx-auto">
          <Header />
          {children}
        </div>
      </main>
    </>
  );
}
