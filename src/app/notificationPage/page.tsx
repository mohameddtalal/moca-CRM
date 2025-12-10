"use client";
import React, { useState } from 'react';
import NavbarDynamic from "@/components/Navbars/NavbarDynamic";
import { useEffect, useRef } from "react";
import ToDo from '@/components/notification-list/todo';
import NotificationList from '@/components/notification-list/NotificationList';

const NotificationPage = () => {
  const [activeNotifications, setActiveNotifications] = useState("Today");



  return (
    <div className="flex flex-col" style={{ flex: 1 }}>
      <NavbarDynamic />

      <div
        className="relative flex flex-row justify-between h-full w-full"
      >

        <NotificationList />
       <div  className='   absolute  -translate-x-1/2 z-10
       left-[38%] sm:left-[40%] md:left-[43%] lg:left-[45%] xl:left-[47%]
            top-4      /* very small screens → highest */
            sm:top-3   /* small screens */
            md:top-2    /* medium screens */
            lg:top-0   /* large screens */
            xl:top-0    /* extra-large screens → lowest */'>
         {/* Tabs */}
        <div
          className="flex justify-center"
          style={{
            backgroundColor: "var(--navbar)",
            borderRadius: "50px",
            padding: " clamp(0.3125rem, -1.169rem + 2.3148vw, 0.625rem) clamp(0.625rem, -2.338rem + 4.6296vw, 1.25rem)",
            display: "flex",
            gap: "4px",
            width: "fit-content",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",

          }}
        >
          <button
            onClick={() => setActiveNotifications("Today")}
            style={{
              backgroundColor:
                activeNotifications === "Today" ? "#D489FF" : "transparent",
              color:
                activeNotifications === "Today" ? "#2C2C2C" : "#B433FF",
              width: "clamp(3.125rem, 0.8647rem + 5.4795vw, 6.125rem)",
              height: "clamp(1.25rem, 0.3082rem + 2.2831vw, 2.5rem)",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              fontWeight: "500",
              transition: "0.3s",
              fontSize:'clamp(0.4375rem, 0.1079rem + 0.7991vw, 0.875rem)',
              fontFamily:"GT Walsheim "
            }}
          >
            Today
          </button>

          <button
            onClick={() => setActiveNotifications("Previous")}
            style={{
              backgroundColor:
                activeNotifications === "Previous" ? "#D489FF" : "transparent",
              color:
                activeNotifications === "Previous" ? "#2C2C2C" : "#B433FF",
              width: "clamp(3.125rem, 0.8647rem + 5.4795vw, 6.125rem)",
              height: "clamp(1.25rem, 0.3082rem + 2.2831vw, 2.5rem)",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              fontWeight: "500",
              transition: "0.3s",
              fontSize:'clamp(0.4375rem, 0.1079rem + 0.7991vw, 0.875rem)',
              fontFamily:"GT Walsheim "
            }}
          >
            Previous
          </button>
        </div>
       </div>

        <ToDo />
      </div>

    </div>
  );
};

export default NotificationPage;