"use client";
import React, { useState } from "react";
import Image from "next/image";

const NotificationList = () => {
  const [activeNotifications, setActiveNotifications] = useState("Today");

  // Track read notifications
  const [read, setRead] = useState<number[]>([]);

  const markAsRead = (id: number) => {
    if (!read.includes(id)) {
      setRead([...read, id]);
    }
  };

  const notifications = [
    {
      id: 1,
      title: "Reminder for Contract Renewal",
      description:
        "Renew Moca [Location Name] lease contract with [Landlord Commercial Name].",
      time: "1 hour ago",
      isNew: true,
    },
    {
      id: 2,
      title:
        "Renew Moca [Location Name] lease contract with [Landlord Commercial Name].",
      time: "1 hour ago",
      isNew: false,
    },
    {
      id: 3,
      title:
        "Renew Moca [Location Name] lease contract with [Landlord Commercial Name].",
      time: "1 hour ago",
      isNew: false,
    },
    {
      id: 4,
      title:
        "Renew Moca [Location Name] lease contract with [Landlord Commercial Name].",
      time: "1 hour ago",
      isNew: true,
    },
    {
      id: 5,
      title:
        "Renew Moca [Location Name] lease contract with [Landlord Commercial Name]. Your request has been scheduled on Thursday, August 10 at 10am.",
      time: "1 hour ago",
      isNew: true,
      hasMore: true,
    },
    {
      id: 6,
      title:
        "A new Book a Tour request has been scheduled on Thursday, August 10 at 10am...",
      time: "1 hour ago",
      isNew: false,
      hasMore: true,
    },
  ];

  return (
    <div
      className="flex flex-col card-bg"
      style={{
        flex: 1,

        padding: "20px",
        marginLeft: "clamp(1rem, 0rem + 3.125vw, 3rem)",
        marginRight: '20px',

      }}
    >
      {/* HEADER */}
      <div className="flex flex-row items-center justify-between ">

        <h1
          style={{
            color: "var(--hot-purple)",
            fontSize: "25px",
            fontWeight: "600",
            letterSpacing: "1px",
            backgroundColor: "white",
            width: '90%',
            padding: "30px",
            position:"relative"

          }}
        >
          NOTIFICATIONS
        </h1>
        {/* Tabs */}
        <div className="container-btns" style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          background: '#f7f7f7',
          position: 'relative',
          left: '-57px',
          zIndex: '6',
          
        }}>
          <div
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
      </div>

      {/* MAIN GLASS CARD */}
      <div
        className="custom-scroll"
        style={{
          padding: "30px",
          backgroundColor: "white",
          maxHeight: "calc(100vh - 180px)",
          overflowY: "auto",

        }}
      >
        {notifications.map((notif) => {
          const isRead = read.includes(notif.id);

          return (
            <div
              key={notif.id}
              onClick={() => markAsRead(notif.id)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
                marginBottom: "14px",
                borderRadius: "1536px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.07)",
                cursor: "pointer",
                background: isRead
                  ? "rgba(0,0,0,0.03)"
                  : "rgba(212, 137, 255, 0.10)",
                transition: "0.3s",
              }}
            >
              {/* Left Section */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                {/* Purple Dot */}
                {!isRead && (
                  <Image src="/assets/Radio.svg" alt="radio" width="16" height="16" />
                )}

                {/* Text */}
                <div>
                  <p
                    style={{
                      color: isRead ? "#9E9E9E" : "#2C2C2C",
                      fontWeight: isRead ? "500" : "700",
                      fontSize: "15px",
                      marginBottom: "6px",
                    }}
                  >
                    {notif.title}
                  </p>

                  {notif.description && (
                    <p
                      style={{
                        color: isRead ? "#9E9E9E" : "#2C2C2C",
                        fontWeight: isRead ? "500" : "700",
                        fontSize: "15px",
                        marginBottom: "6px",
                      }}
                    >
                      {notif.description}
                    </p>
                  )}

                  <p
                    style={{
                      color: isRead ? "#9E9E9E" : "#2C2C2C",
                      fontWeight: isRead ? "500" : "700",
                      fontSize: "15px",
                      marginBottom: "6px",

                    }}
                  >
                    {notif.time}
                  </p>
                </div>
              </div>

              {/* View button */}
              <button
                style={{
                  color: isRead ? "##F7F7F7" : "#F7F7F7",
                  fontWeight: isRead ? "500" : "700",
                  backgroundColor: isRead ? "#D489FF" : "var(--hot-purple)",
                  marginBottom: "6px",
                  border: "none",
                  borderRadius: "25px",
                  padding: "10px 24px",
                  cursor: "pointer",
                  fontSize: "14px",
                  height: "40px",
                }}
              >
                View
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationList;
