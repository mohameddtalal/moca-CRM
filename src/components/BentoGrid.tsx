import Card1 from "../components/Cards/Card1";
import Card10 from "./Cards/Card10";
import Card11 from "./Cards/Card11";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";
import Card5 from "./Cards/Card5";
import Card6 from "./Cards/Card6";
import Card7 from "./Cards/Card7";
import Card8 from "./Cards/Card8";
import Card9 from "./Cards/Card9";

const BentoGrid = () => {
  
    return (
  <div className="bentogrid min-h-screen overflow-auto " style={{
  display: "block",
  minHeight:"auto",  
}}>

  <div className="grid grid-cols-12 grid-rows-12 w-full " style={{
    flex:1,
    gridGap: "clamp(8px, 1.5vw, 16px)",
    gridTemplateColumns: "repeat(12, auto)",
    gridTemplateRows: "repeat(12, auto)",
    minHeight:"auto",    
  }}>

       
      {/* Card1 - Place your profile photo in public/assets/ folder and update the profilePhoto path */}
      <Card1 title="Bookings Planner"
            description="Centralized management of bookings, schedules, and space availability across locations."
            color="bg-[var(--yellow)]"
        />
        <Card2 title={"People of \nMoca"} 
                        
            description="Centralized management of bookings, schedules, and space availability across locations."
            color="bg-[var(--green)]"/>
        <Card3 title={"Operations \nCenter"}
            description="Central hub linking key operational tasks for seamless tracking, reporting, and workflow management."
            color="bg-[var(--purple)]"/>

        <Card4 title="Insights"
            description="A real-time dashboard for bookings, revenue, members, and workspace performance."
            color="bg-[var(--energy-green)]"/>

        <Card5 title={"Experience &\nEngagement Lab"}
            description="A tools lab that drives engagement and growth where experience is refined and elevated."
            color="bg-[var(--skin-pink)]"/>
        <Card6 title="Payment center"
            description="An integrated hub for transparent financial management and insightful reporting."
            color="bg-[var(--purple)]"/>
        <Card7 title="Moca"
            description=""
            color="bg-[var(--purple)]"/>

        <Card8 title={"Leads & \nDeals"}
            description="A gateway for partnerships and corporate deals that drive strategic growth."
            color="bg-[var(--yellow)]"/>
        <Card9 title="Data Hub"
            description="A centralized hub to collect, analyze, and access data for informed decisions. "
            color="bg-[var(--energy-green)]"/>
        <Card10 title="Security Control"
            description="Manage & monitor access, permissions, and security to ensure a safe space."
            color="bg-[var(--green)]"/>
        <Card11 title="Control Room"
            description="Serves as the central command center of the platform, giving administrators full oversight and configuration power across the entire system. "
            color="bg-[var(--skin-pink)]"/>

    
    </div>
</div>

  );
}

export default BentoGrid;