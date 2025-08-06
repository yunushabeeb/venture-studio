import type { Metadata } from "next";
import "./globals.css";
import AppShell from "./components/AppShell";

export const metadata: Metadata = {
  title: "Wallet Ledger Dashboard",
  description:
    "A modern, responsive dashboard for tracking wallet transactions and managing your cryptocurrency portfolio.",
  icons: {
    icon: "/icons/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
