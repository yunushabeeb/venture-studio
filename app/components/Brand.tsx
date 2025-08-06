import Image from "next/image";
import { timmana } from "../lib/fonts";

export default function Brand() {
  return (
    <div className="ml-2 md:ml-7 flex items-center">
      <Image src="/icons/logo.png" alt="FinTrack Logo" width={32} height={32} />
      <span
        className={`${timmana.className} ml-1 text-[24px] font-normal`}
        style={{
          color: "#437D8E",
          fontFamily: "var(--font-timmana)",
          textShadow: "0 1px 0 #437D8E, 0 0.5px 0 #437D8E",
        }}
      >
        FinTrack
      </span>
    </div>
  );
}
