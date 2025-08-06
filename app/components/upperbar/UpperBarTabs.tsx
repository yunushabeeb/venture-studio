"use client";
import { useState } from "react";
import clsx from "clsx";

const tabs = [
  { label: "Overview", key: "overview" },
  { label: "Transactions", key: "transactions" },
];

export default function UpperBarTabs({
  defaultTab = "overview",
  onTabChange,
}: {
  defaultTab?: string;
  onTabChange?: (tab: string) => void;
}) {
  const [active, setActive] = useState(defaultTab);

  function handleTab(tab: string) {
    setActive(tab);
    onTabChange?.(tab);
  }

  return (
    <div className="flex flex-col">
      <div className="flex gap-2 border-b" style={{ borderColor: "rgba(73, 101, 110, 0.2)" }}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={clsx(
              "relative font-normal text-[15px] px-7 py-3 transition-colors",
              "rounded-t-[8px]",
              "focus:outline-none",
              active === tab.key
                ? "text-[#437D8E] font-medium"
                : "text-[#15272D] opacity-80"
            )}
            style={{
              fontFamily: "'Public Sans', sans-serif",
            }}
            onClick={() => handleTab(tab.key)}
          >
            {tab.label}
            {active === tab.key && (
              <span
                className="absolute left-0 right-0 -bottom-[1px] h-1 rounded-t bg-[#4B8B9F]"
                style={{ height: 4 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}