"use client";
import clsx from "clsx";

const MENU = [
  { label: "Dashboard", key: "dashboard" },
  { label: "Transactions", key: "transactions" },
  { label: "Reports", key: "reports" },
  { label: "Settings", key: "settings" },
];

export default function Sidebar({
  active = "dashboard",
  open = false,
  onClose,
  onSelect,
}: {
  active?: string;
  open?: boolean;
  onClose?: () => void;
  onSelect?: (key: string) => void;
  }) {
  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={clsx(
          "fixed inset-0 z-20 bg-black/30 transition-opacity md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden={!open}
      />
      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed z-30 left-0 top-0 md:h-full bg-[var(--sidebar-bg)] pb-7 shadow transition-all duration-300 ease-in-out overflow-hidden",
          open
            ? "w-5/12 md:w-3/12 top-16 opacity-100 md:fixed md:top-24 md:left-0 md:h-screen  md:shadow-none"
            : "w-0 opacity-0",

        )}
        aria-hidden={!open && typeof window !== "undefined" && window.innerWidth < 768}
      >
        <nav>
          {MENU.map((item) => {
            const isActive = active === item.key;
            return (
              <button
                key={item.key}
                className={clsx(
                  "w-full text-left font-medium py-2 pl-[18px] text-[15px] transition-colors rounded-[16px]",
                  isActive
                    ? "bg-[var(--sidebar-active-bg)] text-[var(--sidebar-active-text)]"
                    : "bg-[var(--sidebar-bg)] text-[var(--sidebar-text)]",
                  "hover:bg-[var(--sidebar-hover-bg)]"
                )}
                style={{
                  border: "none",
                  outline: "none",
                  fontFamily: "'Public Sans', sans-serif",
                }}
                onClick={() => onSelect?.(item.key)}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}