import UpperBar from "./components/upperbar/UpperBar";
import SummarySection from "./components/summary/SummarySection";
import TransactionTable from "./components/table/TransactionTable";

export default function Home() {
  return (
    <div>
      <UpperBar />
      <SummarySection />
      <TransactionTable />
    </div>
  );
}
