export default function TypeBadge({ type }: { type: "Credit" | "Debit" }) {
  const dotColor = type === "Credit" ? "#087A2E" : "#C6381B";
  return (
    <span
      className="inline-flex items-center gap-2 px-2 py-1 rounded-[16px]"
      style={{
        background: "rgba(52, 97, 111, 0.09)",
      }}
    >
      <span
        className="inline-block rounded-full"
        style={{
          width: 6,
          height: 6,
          background: dotColor,
        }}
      />
      <span
        className="font-medium text-[15px]"
        style={{
          color: "#1B2528",
          fontFamily: "'Public Sans', sans-serif",
        }}
      >
        {type}
      </span>
    </span>
  );
}