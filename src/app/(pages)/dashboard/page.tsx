
import ScrollingHeader from "@/components/Dashboard/ScrollingHeader/ScrollingHeader";
import BentoGrid from "@/components/Dashboard/BentoGrid/BentoGrid";
import NavbarDynamic from "@/components/Dashboard/Navbars/NavbarDynamic";

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