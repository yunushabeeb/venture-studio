"use client";
import { useState } from "react";
import Image from "next/image";
import { columns, transactions as initialTransactions } from "../lib/content";
import TableCell from "./TableCell";
import TypeBadge from "./TypeBadge";

type Transaction = typeof initialTransactions[number];
type SortKey = keyof Transaction;
type SortOrder = "asc" | "desc";
function sortTransactions(
  data: Transaction[],
  key: SortKey,
  order: SortOrder
) {
  return [...data].sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];

    // For amount, sort numerically
    if (key === "amount") {
      return order === "asc"
        ? (aValue as number) - (bValue as number)
        : (bValue as number) - (aValue as number);
    }

    // For date, sort by string (ISO format)
    if (key === "date") {
      return order === "asc"
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    }

    // For others, sort alphabetically
    return order === "asc"
      ? String(aValue).localeCompare(String(bValue))
      : String(bValue).localeCompare(String(aValue));
  });
}

export default function TransactionTable() {
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const sortedTransactions = sortTransactions(
    initialTransactions,
    sortKey,
    sortOrder
  );

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  }

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
                className="text-left font-medium text-[13px] px-0 py-2 align-middle cursor-pointer select-none"
                style={{
                  color: "rgba(21, 39, 45, 0.62)",
                  fontFamily: "'Public Sans', sans-serif",
                  fontWeight: 500,
                  minWidth: col.key === "date" ? 180 : 100,
                  width: col.key === "date" ? "40%" : undefined,
                }}
                onClick={() => handleSort(col.key as SortKey)}
              >
                <span className="flex items-center gap-1">
                  {col.label}
                  <Image
                    src="/icons/caret-down.png"
                    alt="Sort"
                    width={24}
                    height={24}
                    style={{
                      transform:
                        sortKey === col.key && sortOrder === "desc"
                          ? "rotate(180deg)"
                          : "none",
                      opacity: sortKey === col.key ? 1 : 0.4,
                      transition: "transform 0.15s",
                    }}
                  />
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedTransactions.map((tx) => (
            <tr
              key={tx.id}
              className="transition-colors hover:bg-[rgba(52,97,111,0.07)] cursor-pointer"
            >
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
