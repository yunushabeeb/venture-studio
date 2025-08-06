import Image from "next/image";
import IconButton from "./IconButton";
import Avatar from "./Avatar";
import Brand from "./Brand";
import { useState, useRef, useEffect } from "react";
import { useSearchStore } from "../lib/store";

type HeaderProps = {
  onSidebarToggle?: () => void;
};

export default function Header({ onSidebarToggle }: HeaderProps) {
  const [showSearch, setShowSearch] = useState(false);
  const search = useSearchStore((s) => s.search);
  const setSearch = useSearchStore((s) => s.setSearch);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showSearch) inputRef.current?.focus();
  }, [showSearch]);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleBlur() {
    setShowSearch(false);
  }

  return (
    <>
      <header className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white bg-opacity-90 backdrop-blur">
        {/* Left: Menu + Brand */}
        <div className="flex items-center">
          <button
            aria-label="Open sidebar"
            onClick={onSidebarToggle}
            className="p-2 rounded hover:bg-gray-100 transition"
          >
            <Image src="/icons/menu.png" alt="Menu" width={24} height={24} />
          </button>
          <Brand />
        </div>
        {/* Right: Search, App Grid, Avatar */}
        <div className="flex items-center gap-1 md:gap-7 relative">
          {/* Desktop search input */}
          <div className="hidden sm:block">
            {showSearch ? (
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={handleInput}
                onBlur={handleBlur}
                placeholder="Search transactions..."
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring w-48 transition"
              />
            ) : (
              <IconButton
                src="/icons/search.png"
                alt="Search"
                onClick={() => setShowSearch(true)}
              />
            )}
          </div>
          {/* Hide search icon on mobile when input is shown */}
          <div className={`block sm:hidden ${showSearch ? "hidden" : ""}`}>
            <IconButton
              src="/icons/search.png"
              alt="Search"
              onClick={() => setShowSearch(true)}
            />
          </div>
          <IconButton src="/icons/app-grid.png" alt="Apps" />
          <Avatar src="/images/avatars/avatar-1.png" alt="User Avatar" />
        </div>
      </header>
      {/* Mobile search input below header */}
      {showSearch && (
        <div className="block sm:hidden px-4 py-2 bg-white border-b border-gray-100 sticky top-[56px] z-10">
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={handleInput}
            onBlur={handleBlur}
            placeholder="Search transactions..."
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring bg-white shadow"
          />
        </div>
      )}
    </>
  );
}
