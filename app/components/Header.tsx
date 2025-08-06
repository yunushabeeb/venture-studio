import Image from "next/image";
import { timmana } from "../lib/fonts";
import IconButton from "./IconButton";
import Avatar from "./Avatar";
import Brand from "./Brand";

type HeaderProps = {
  onSidebarToggle?: () => void;
};

export default function Header({ onSidebarToggle }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
      {/* Left: Menu + Brand */}
      <div className="flex items-center">
        <button
          aria-label="Open sidebar"
          onClick={onSidebarToggle}
          className="p-2 rounded hover:bg-gray-100 transition"
        >
          <Image src="/icons/menu.png" alt="Menu" width={24} height={24} />
        </button>

        {/* Brand Identification */}
        <Brand />

      </div>
      {/* Right: Search, App Grid, Avatar */}
      <div className="flex items-center gap-7">
        <IconButton src="/icons/search.png" alt="Search" />
        <IconButton src="/icons/app-grid.png" alt="Apps" />
        <Avatar src="/images/avatars/avatar-1.png" alt="User Avatar" />
      </div>
    </header>
  );
}
