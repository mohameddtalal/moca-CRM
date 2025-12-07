"use client"
import React, { useState } from 'react';
import NavbarDynamic from "@/components/Navbars/NavbarDynamic";
import { useEffect, useRef } from "react";
import ToDo from '@/components/ToDoList/todo';
import NotificationList from '@/components/notification-list/NotificationList';

const NotificationPage = () => {
  const [activeNotifications, setActiveNotifications] = useState("Today");


 
  return (
    <div className="flex flex-col" style={{ flex: 1 }}>
        <NavbarDynamic/>

        <div 
            className="flex flex-row justify-between h-full w-full" 
            style={{ margin: "8px" }}
        >
            <NotificationList/>
            <ToDo/>
        </div>

      
    <div style={{ 
      display: "flex", 
      minHeight: "100vh", 
      backgroundColor: "white",
    }}>
      {/* Notifications Section */}
      <div style={{ 
        flex: 1, 
        padding: "32px",
        borderRight: "1px solid #333"
      }}>
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          marginBottom: "24px"
        }}>
          <h1 style={{ 
            color: "var(--hot-purple)", 
            fontSize: "24px",
            fontWeight: "600",
            margin: 0
          }}>
            NOTIFICATIONS
          </h1>

          <div style={{
            backgroundColor: "var(--navbar)",
            borderRadius: "50px",
            padding: "5px",
            display: "flex",
            gap: "4px",
          }}>
            <button
              onClick={() => setActiveNotifications("Today")}
              style={{
                backgroundColor: activeNotifications === "Today" ? "#D489FF" : "transparent",
                color: activeNotifications === "Today" ? "#2C2C2C" : "#B433FF",
                width: "98px",
                height: "40px",
                borderRadius: "50px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontWeight: "500"
              }}
            >
              Today
            </button>

            <button
              onClick={() => setActiveNotifications("Previous")}
              style={{
                backgroundColor: activeNotifications === "Previous" ? "#D489FF" : "transparent",
                color: activeNotifications === "Previous" ? "#2C2C2C" : "#B433FF",
                width: "98px",
                height: "40px",
                borderRadius: "50px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontWeight: "500"
              }}
            >
              Previous
            </button>
          </div>
        </div>

       
        </div>
      </div>
        </div>
  );
};

export default NotificationPage;