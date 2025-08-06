"use client";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import clsx from "clsx";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Header onSidebarToggle={() => setSidebarOpen((v) => !v)} />
      <div className="flex flex-col md:flex-row md:items-start md:gap-12 px-4">
        {/* Sidebar */}
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        {/* Main Content */}
        <main className={clsx(
          sidebarOpen ? 'md:mt-0 md:pl-8 md:w-3/4 md:ml-auto' : 'flex-1'
        )}>{children}</main>
      </div>
    </>
  );
}