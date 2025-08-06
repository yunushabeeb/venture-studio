'use client'
import { summaryData } from "../lib/content";
import SummaryCard from "./SummaryCard";
import { useSearchStore } from "../lib/store";


export default function SummarySection() {
  const search = useSearchStore((s) => s.search);

  if (search.trim() !== "") return null;

  return (
    <section className="mt-8">
      <h2
        className="font-bold text-[15px] mb-5"
        style={{
          color: "#1B2528",
          fontFamily: "'Public Sans', sans-serif",
        }}
      >
        Summary
      </h2>
      <div className="flex flex-col gap-7 md:flex-row">
        {summaryData.map((item) => (
          <SummaryCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
