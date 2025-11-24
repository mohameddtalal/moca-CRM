import ScrollingHeader from "../components/ScrollingHeader";
import BentoGrid from "@/components/BentoGrid";

const Page=() => {
  return (
    <div className="flex flex-col" style={{ flex: 1 }}>
      <ScrollingHeader />
        <BentoGrid/>
      </div>

  );
}

export default Page;