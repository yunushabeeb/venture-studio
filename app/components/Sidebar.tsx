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
  console.log("Sidebar state", open)
  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-black/30 transition-opacity md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden={!open}
      />
      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed z-50 left-0 top-0 md:h-full bg-[var(--sidebar-bg)] max-md:pt-7 pb-7 shadow transition-all duration-300 ease-in-out",
          open
            ? "w-[var(--sidebar-width)] opacity-100"
            : "w-0 opacity-0",
          // "md:fixed md:top-0 md:left-0 md:h-screen md:w-[var(--sidebar-width)] md:shadow-none"
          "md:static md:h-[calc(100vh-var(--header-height,56px))] md:shadow-none -z-1"
        )}
        style={{
          width: open ? "var(--sidebar-width)" : "0",
          minWidth: open ? "var(--sidebar-width)" : "0",
          overflow: "hidden",
        }}
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