export default function ActiveStatus() {
  return (
    <span
      className="flex items-center gap-2 px-2 py-1 rounded-[16px]"
      style={{
        background: "rgba(52, 97, 111, 0.09)",
      }}
    >
      <span
        className="inline-block rounded-full"
        style={{
          width: 6,
          height: 6,
          background: "#087A2E",
        }}
      />
      <span
        className="font-medium text-[15px]"
        style={{
          color: "#1B2528",
          fontFamily: "'Public Sans', sans-serif",
        }}
      >
        Active
      </span>
    </span>
  );
}