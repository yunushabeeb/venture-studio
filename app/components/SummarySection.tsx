import { summaryData } from "../lib/content";
import SummaryCard from "./SummaryCard";

export default function SummarySection() {
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
