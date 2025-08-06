"use client";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Header onSidebarToggle={() => setSidebarOpen((v) => !v)} />
      <div className="flex flex-col md:flex-row md:items-start md:gap-12 px-4 pt-4">
        {/* Sidebar */}
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        {/* Main Content */}
        <main className="flex-1 mt-4 md:mt-0">{children}</main>
      </div>
    </>
  );
}