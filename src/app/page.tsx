import ScrollingHeader from "../components/ScrollingHeader";
import BentoGrid from "@/components/BentoGrid";

const Page=() => {
  return (
    <div className="h-full overflow-hidden flex flex-col">
      <ScrollingHeader />
      <div className="flex-1 min-h-0">
        <BentoGrid/>
      </div>
    </div>
  );
}

export default Page;