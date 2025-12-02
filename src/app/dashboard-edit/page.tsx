import Navbar from "@/components/Navbar";
import ScrollingHeader from "../../components/ScrollingHeader";
import BentoGrid from "@/components/BentoGrid-edit";
import NavbarDynamic from "@/components/NavbarDynamic";
import { NavProvider } from "@/components/Context/Navcontext";

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