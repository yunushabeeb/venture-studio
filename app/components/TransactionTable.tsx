"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { columns, transactions as initialTransactions } from "../lib/content";
import { useSearchStore } from "../lib/store";
import TableCell from "./TableCell";
import TypeBadge from "./TypeBadge";

type Transaction = typeof initialTransactions[number];
type SortKey = keyof Transaction;
type SortOrder = "asc" | "desc";

function safeString(val: any) {
  return typeof val === "string" ? val : "";
}
function safeNumber(val: any) {
  return typeof val === "number" && !isNaN(val) ? val : 0;
}

function sortTransactions(
  data: Transaction[],
  key: SortKey,
  order: SortOrder
) {
  return [...data].sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];

    if (key === "amount") {
      return order === "asc"
        ? safeNumber(aValue) - safeNumber(bValue)
        : safeNumber(bValue) - safeNumber(aValue);
    }
    if (key === "date") {
      return order === "asc"
        ? safeString(aValue).localeCompare(safeString(bValue))
        : safeString(bValue).localeCompare(safeString(aValue));
    }
    return order === "asc"
      ? safeString(aValue).localeCompare(safeString(bValue))
      : safeString(bValue).localeCompare(safeString(aValue));
  });
}

export default function TransactionTable() {
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [filtered, setFiltered] = useState(initialTransactions);
  const [loading, setLoading] = useState(false);
  const search = useSearchStore((s) => s.search);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      const q = search.toLowerCase();
      setFiltered(
        initialTransactions.filter((tx) => {
          // Defensive: handle missing or invalid fields
          return (
            safeString(tx.date).includes(q) ||
            safeString(tx.remark).toLowerCase().includes(q) ||
            safeString(tx.currency).toLowerCase().includes(q) ||
            safeString(tx.type).toLowerCase().includes(q) ||
            safeNumber(tx.amount).toString().includes(q)
          );
        })
      );
      setLoading(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [search]);

  const sortedTransactions = sortTransactions(filtered, sortKey, sortOrder);

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
      {loading ? (
        <div className="py-10 text-center text-gray-400">Searching...</div>
      ) : sortedTransactions.length === 0 ? (
        <div className="py-16 text-center text-gray-400 flex flex-col items-center gap-2">
          <Image
            src="/icons/search.png"
            alt="No results"
            width={48}
            height={48}
            className="mx-auto mb-2 opacity-40"
          />
          <div className="text-lg font-semibold text-gray-500">No transactions found</div>
          <div className="text-sm text-gray-400">Try a different search term.</div>
        </div>
      ) : (
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
                {sortedTransactions.map((tx, idx) => (
                  <tr
                    key={tx.id || idx}
                    className="transition-colors hover:bg-[rgba(52,97,111,0.07)] cursor-pointer"
                  >
                    <TableCell isFirst>{safeString(tx.date) || "—"}</TableCell>
                    <TableCell>{safeString(tx.remark) || "—"}</TableCell>
                    <TableCell>
                      {typeof tx.amount === "number"
                        ? tx.amount < 0
                      ? `-$${Math.abs(tx.amount).toLocaleString()}`
                          : `$${tx.amount.toLocaleString()}`
                        : "—"}
                    </TableCell>
                    <TableCell>{safeString(tx.currency) || "—"}</TableCell>
                    <TableCell>
                      <TypeBadge type={safeString(tx.type) === "Credit" ? "Credit" : "Debit"} />
                    </TableCell>
                  </tr>
                ))}
              </tbody>
            </table>
      )}
    </section>
  );
}
