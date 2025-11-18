import ScrollingHeader from "../components/ScrollingHeader";
import BentoGrid from "@/components/BentoGrid";

const Page=() => {
  return (
    <div className="h-full overflow-hidden flex flex-col">
      <ScrollingHeader />
    
        <BentoGrid/>
      </div>
   
  );
}

export default Page;