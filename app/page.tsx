import UpperBar from "./components/UpperBar";
import SummarySection from "./components/SummarySection";
import TransactionTable from "./components/TransactionTable";

export default function Home() {
  return (
    <div>
      <UpperBar />
      <SummarySection />
      <TransactionTable />
    </div>
  );
}
