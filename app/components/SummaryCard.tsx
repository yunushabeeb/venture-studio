import Image from "next/image";

export default function SummaryCard({
  title,
  value,
  change,
}: {
  title: string;
  value: string;
  change: string;
}) {
  return (
    <div
      className="flex flex-col justify-between rounded-[18px] p-7 min-w-[0] flex-1"
      style={{
        background: "rgba(52, 97, 111, 0.09)",
      }}
    >
      <div className="flex items-center justify-between">
        <span
          className="font-bold text-[17px]"
          style={{
            color: "#1B2528",
            fontFamily: "'Public Sans', sans-serif",
          }}
        >
          {title}
        </span>
        <Image
          src="/icons/dots-horizontal.png"
          alt="More"
          width={24}
          height={24}
          style={{ filter: "invert(13%) sepia(7%) saturate(1866%) hue-rotate(142deg) brightness(95%) contrast(90%)" }}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <span
          className="font-bold text-[34px] leading-[40px]"
          style={{
            color: "#1B2528",
            fontFamily: "'Public Sans', sans-serif",
          }}
        >
          {value}
        </span>
        <span
          className="font-medium text-[13px]"
          style={{
            color: "#3E7383",
            fontFamily: "'Public Sans', sans-serif",
          }}
        >
          {change}
        </span>
      </div>
    </div>
  );
}