import CompareZone from "../components/CompareZone";
import SummaryZone from "../components/SummaryZone";

export default function Home() {
  return (
    <>
    <div className="flex flex-col gap-5 w-full h-full items-center justify-center">
      <CompareZone />
      <SummaryZone />
    </div>
    </>
  );
}
