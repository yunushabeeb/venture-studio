import Image from "next/image";
import ActiveStatus from "./ActiveStatus";
import UpperBarAvatars from "./UpperBarAvatars";
import UpperBarTabs from "./UpperBarTabs";

export default function UpperBar() {
  return (
    <section className="flex flex-col gap-4 py-7">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left: Title, Caret, Status */}
        <div className="flex items-center flex-wrap gap-4">
          <div className="flex items-center">
            <span
              className="font-bold"
              style={{
                color: "#1B2528",
                fontFamily: "'Public Sans', sans-serif",
                fontSize: 34,
                lineHeight: "40px",
              }}
            >
              Wallet Ledger
            </span>
            <Image
              src="/icons/caret-down.png"
              alt="Caret"
              width={24}
              height={24}
              className="ml-1"
            />
          </div>
          <ActiveStatus />
        </div>
        {/* Right: Share & More */}
        <div className="flex items-center gap-3">
          <button
            className="flex items-center bg-[#4B8B9F] text-[#020303] font-medium rounded-[16px] px-[18px] py-2 text-[15px]"
            style={{ fontFamily: "'Public Sans', sans-serif" }}
          >
            Share
          </button>
          <button
            className="flex items-center bg-[#FCFDFD] rounded-[16px] p-2 border"
            style={{
              borderColor: "rgba(73, 101, 110, 0.2)",
              borderWidth: 1,
            }}
            aria-label="More"
          >
            <Image
              src="/icons/dots-horizontal.png"
              alt="More"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
      <UpperBarAvatars />
      <UpperBarTabs />
    </section>
  );
}

