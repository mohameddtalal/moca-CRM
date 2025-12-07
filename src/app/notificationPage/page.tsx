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
        <NavbarDynamic/>

        <div 
            className="flex flex-row justify-between h-full w-full" 
            
        >
            <NotificationList/>
            <ToDo/>
        </div>
        </div>
  );
};

export default NotificationPage;