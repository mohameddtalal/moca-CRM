import Navbar from "@/components/Navbars/Navbar";
import ScrollingHeader from "../../components/Scrollingheader/ScrollingHeader";
import BentoGrid from "@/components/BentoGrid";

const Page=() => {
  return (
    <div className="flex flex-col" style={{ flex: 1 }}>
      <Navbar/>
      <ScrollingHeader />
        <BentoGrid/>
      </div>

  );
}

export default Page;