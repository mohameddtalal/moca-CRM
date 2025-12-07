
import ScrollingHeader from "../../components/Scrollingheader/ScrollingHeader";
import BentoGrid from "@/components/BentoGrid";
import NavbarDynamic from "@/components/Navbars/NavbarDynamic";

const Page=() => {
  return (
    <div className="flex flex-col" style={{ flex: 1 }}>
      <NavbarDynamic/>
      <ScrollingHeader />
        <BentoGrid/>
      </div>

  );
}

export default Page;