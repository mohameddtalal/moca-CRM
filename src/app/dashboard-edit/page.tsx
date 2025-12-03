'use client';
import { useState } from "react";
import NavbarDynamic from "@/components/NavbarDynamic";
import BentoGrid from "@/components/BentoGrid-edit";
import LoginEdit from "@/components/LoginEdit";
import ScrollingHeader from "@/components/ScrollingHeader";
import AuthLayout from "../auth/layout";
import Image from "next/image";

const Page = () => {
  const [active, setActive] = useState<"signin" | "home">("signin");

  return (
    <div className="flex flex-col" style={{ flex: 1 }}>
      <NavbarDynamic />

      {/* Centered toggle buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "16px",

        }}
      >
        <div
          style={{
            backgroundColor: "var(--navbar)",
            borderRadius: "50px",
            padding: "5px 16px",
             // inner spacing for toggle effect
            display: "flex",
            gap: "8px",
          }}
        >
          <button
            onClick={() => setActive("signin")}
            style={{
              backgroundColor: active === "signin" ? "#434343" : "transparent",
              color: active === "signin" ? "white" : "#434343",
              width: "98px",
              height: "40px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.5s ease-in-out",
            }}
          >
            Sign in
          </button>

          <button
            onClick={() => setActive("home")}
            style={{
              backgroundColor: active === "home" ? "#434343" : "transparent",
              color: active === "home" ? "white" : "#434343",
              width: "98px",
              height: "40px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.5s ease-in-out",
            }}
          >
            Homepage
          </button>
        </div>
      </div>
      <div>
        {active === "signin" ? ( 
          <div style={{marginRight: "clamp(1rem, 0rem + 3.125vw, 3rem)",marginLeft: "clamp(1rem, 0rem + 3.125vw, 3rem)" ,marginBottom: "clamp(1rem, 0rem + 3.125vw, 3rem)"}}>
          <div className="flex flex-row ml-auto h-full w-full">
            <AuthLayout>
            <LoginEdit />
          </AuthLayout>
          <div className="flex flex-col" style={{ marginLeft: "8px", gap: "8px" }}>
  <button
    style={{
      width: "32px",
      height: "32px",
      borderRadius: "50%", // circular
      backgroundColor: "var(--hot-purple)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "none",
      cursor: "pointer",
      padding:"8px"
    }}
  >
    <Image src="/assets/upload.svg" alt="Arrow" width={20} height={20} />
  </button>

  <button
    style={{
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      backgroundColor: "var(--hot-purple)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "none",
      cursor: "pointer",
      padding:"8px 4px"
    }}
  >
    <Image src="/assets/preview.svg" alt="Arrow" width={20} height={16} />
  </button>

  <button
    style={{
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      backgroundColor: "var(--hot-purple)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "none",
      cursor: "pointer",
      padding:"8px"
    }}
  >
    <Image src="/assets/back.svg" alt="Arrow" width={16} height={16}  />
  </button>

  <button
    style={{
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      backgroundColor: "var(--hot-purple)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "none",
      cursor: "pointer",
      padding:"8px"
    }}
  >
    <Image src="/assets/publish.svg" alt="Arrow" width={22} height={22} />
  </button>
</div>

          </div> 
          </div>):(
          <>
           <ScrollingHeader />
           <BentoGrid />
          </>
        )}
        
      </div>
    </div>
  );
};

export default Page;
