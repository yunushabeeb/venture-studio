import Image from "next/image";
import { columns, transactions } from "../lib/content";
import TableCell from './TableCell';
import TypeBadge from './TypeBadge';


export default function TransactionTable() {
  return (
    <section className="mt-10 overflow-x-auto">
      <table
        className="min-w-full border-separate"
        style={{ borderSpacing: "18px 0" }}
      >
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="text-left font-medium text-[13px] px-0 py-2 align-middle"
                style={{
                  color: "rgba(21, 39, 45, 0.62)",
                  fontFamily: "'Public Sans', sans-serif",
                  fontWeight: 500,
                  minWidth: col.key === "date" ? 180 : 100,
                  width: col.key === "date" ? "40%" : undefined,
                }}
              >
                <span className="flex items-center gap-1">
                  {col.label}
                  <Image
                    src="/icons/caret-down.png"
                    alt="Sort"
                    width={18}
                    height={18}
                  />
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id}>
              <TableCell isFirst>{tx.date}</TableCell>
              <TableCell>{tx.remark}</TableCell>
              <TableCell>
                {tx.amount < 0
                  ? `-$${Math.abs(tx.amount).toLocaleString()}`
                  : `$${tx.amount.toLocaleString()}`}
              </TableCell>
              <TableCell>{tx.currency}</TableCell>
              <TableCell>
                <TypeBadge type={tx.type as "Credit" | "Debit"} />
              </TableCell>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
