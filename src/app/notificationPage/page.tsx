"use client"
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
       <div  className='absolute left-1/2 top-2 transform -translate-x-1/2 z-10'>
         {/* Tabs */}
        <div
          className="flex justify-center"
          style={{
            backgroundColor: "var(--navbar)",
            borderRadius: "50px",
            padding: "5px",
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
              width: "98px",
              height: "40px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              fontWeight: "500",
              transition: "0.3s",
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
              width: "98px",
              height: "40px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              fontWeight: "500",
              transition: "0.3s",
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