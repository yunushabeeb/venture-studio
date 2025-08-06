export default function TableCell({
  children,
  isFirst = false,
}: {
  children: React.ReactNode;
  isFirst?: boolean;
}) {
  return (
    <td
      className={`py-[18px] border-t`}
      style={{
        borderTop: "1.5px solid rgba(73, 101, 110, 0.2)",
        color: "#1B2528",
        fontFamily: "'Public Sans', sans-serif",
        fontSize: 15,
        fontWeight: 400,
        width: isFirst ? "40%" : undefined,
      }}
    >
      {children}
    </td>
  );
}
