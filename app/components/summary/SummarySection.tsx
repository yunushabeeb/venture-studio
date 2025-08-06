'use client'
import { summaryCards } from "../../lib/content";
import SummaryCard from "./SummaryCard";
import { useSearchStore } from "../../lib/store";


export default function SummarySection() {
  const search = useSearchStore((s) => s.search);

  if (search.trim() !== "") return null;

  return (
    <section>
      <h2
        className="font-bold text-[15px] mb-5"
        style={{
          color: "#1B2528",
          fontFamily: "'Public Sans', sans-serif",
        }}
      >
        Summary
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {summaryCards.map((item) => (
          <SummaryCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
