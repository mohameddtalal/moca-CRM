import Card1 from "./Cards/Card1/Card1";
import Card10 from "./Cards/Card10/Card10";
import Card11 from "./Cards/Card11/Card11"
import Card2 from "./Cards/Card2/Card2";
import Card3 from "./Cards/Card3/Card3";
import Card4 from "./Cards/Card4/Card4";
import Card5 from "./Cards/Card5/Card5";
import Card6 from "./Cards/Card6/Card6";
import Card7 from "./Cards/Card7/Card7";
import Card8 from "./Cards/Card8/Card8";
import Card9 from "./Cards/Card9/Card9";


interface BentoGridProps {
isEditMode?: Record<string, boolean>;
  // optionally pass a map/object describing which cards are authorized
  // e.g. { Card11: true, Card3: false }
  authorizationMap?: Record<string, boolean>;
}


const BentoGrid = ({ isEditMode={}, authorizationMap = {} }: BentoGridProps) => {
const isAuthorized = (cardKey: string) =>
 authorizationMap[cardKey] ?? true; // default true for demo
const isEdit = (cardKey:string)=>
isEditMode[cardKey]??false;
    return (
  <div className="bentogrid overflow-auto " style={{
  display: "block",

}}>

  <div className="grid grid-cols-12 grid-rows-12 w-full " style={{
    gridGap: "clamp(8px, 1.5vw, 16px)",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: "repeat(12, auto)",
   
  }}>

       
      {/* Card1 - Place your profile photo in public/assets/ folder and update the profilePhoto path */}
      <Card1 title="Bookings Planner"
            description="Centralized management of bookings, schedules, and space availability across locations."
            color="bg-[var(--yellow)]"
             isEditMode={isEdit("Card1")}
            isAuthorized={isAuthorized("Card1")}
        />
        <Card2 title={"People of \nMoca"} 
                        
            description="Centralized management of bookings, schedules, and space availability across locations."
            color="bg-[var(--green)]"
            isEditMode={isEdit("Card2")}
            isAuthorized={isAuthorized("Card2")}/>

        <Card3 title={"Operations \nCenter"}
            description="Central hub linking key operational tasks for seamless tracking, reporting, and workflow management."
            color="bg-[var(--purple)]"
          isEditMode={isEdit("Card3")}
            isAuthorized={isAuthorized("Card3")}/>

        <Card4 title="Insights"
            description="A real-time dashboard for bookings, revenue, members, and workspace performance."
            color="bg-[var(--energy-green)]"
             isEditMode={isEdit("Card4")}
            isAuthorized={isAuthorized("Card4")}/>

        <Card5 title={"Experience &\nEngagement Lab"}
            description="A tools lab that drives engagement and growth where experience is refined and elevated."
            color="bg-[var(--skin-pink)]"
            isEditMode={isEdit("Card5")}
            isAuthorized={isAuthorized("Card5")}/>
        <Card6 title="Payment center"
            description="An integrated hub for transparent financial management and insightful reporting."
            color="bg-[var(--purple)]"
            isEditMode={isEdit("Card6")}
            isAuthorized={isAuthorized("Card6")}/>
        <Card7 title="Moca"
            description=""
            color="bg-[var(--purple)]"/>

        <Card8 title={"Leads & \nDeals"}
            description="A gateway for partnerships and corporate deals that drive strategic growth."
            color="bg-[var(--yellow)]"
            isEditMode={isEdit("Card8")}
            isAuthorized={isAuthorized("Card8")}/>
        <Card9 title="Data Hub"
            description="A centralized hub to collect, analyze, and access data for informed decisions. "
            color="bg-[var(--energy-green)]"
            isEditMode={isEdit("Card9")}
            isAuthorized={isAuthorized("Card6")}
            />
     <Card10
            title="Security Control"
            description="Manage & monitor access, permissions, and security to ensure a safe space."
            color="bg-[var(--green)]"
           isEditMode={isEdit("Card10")}
            isAuthorized={isAuthorized("Card10")}
            />
        <Card11 title="Control Room"
            description="Serves as the central command center of the platform, giving administrators full oversight and configuration power across the entire system. "
            color="bg-[var(--skin-pink)]"
            isEditMode={isEdit("Card11")}
            isAuthorized={isAuthorized("Card11")}
            
            />

    
    </div>
</div>

  );
}

export default BentoGrid;