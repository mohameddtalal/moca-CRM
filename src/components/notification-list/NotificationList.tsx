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
      className="flex flex-col "
      style={{
        position:"relative",
        flex: 1,
        width:"100%",
        height:"100%",
        padding: "30px",
        marginLeft: "clamp(1rem, 0rem + 3.125vw, 3rem)",
        marginRight: '20px',
        backgroundColor:"white",
        clipPath: "url(#notifClip)",
        WebkitClipPath: "url(#notifClip)", // Safari fix
        overflow:"hidden"
      }}
    >
      {/* HEADER */}
      <div className="flex flex-row items-center justify-between ">

        <h1
          style={{
            color: "var(--hot-purple)",
            fontSize: " clamp(0.8125rem, -1.0797rem + 2.7523vw, 1.5625rem)",
            fontWeight: "600",
            letterSpacing: "1px",
            width: '100%',
            marginBottom:"80px"

          }}
        >
          NOTIFICATIONS
        </h1>
      </div>

      {/* MAIN GLASS CARD */}
      <div
        className="custom-scroll"
        style={{
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
                borderRadius: "32px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.07)",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              {/* Left Section */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                {/* Purple Dot */}
              {isRead ? (
                  <Image src="/assets/RadioRead.svg" alt="radio-read" width="16" height="16" />
                ) : (
                  <Image src="/assets/Radio.svg" alt="radio" width="16" height="16" />
                )}

                {/* Text */}
                <div>
                  <p
                    style={{
                      color: isRead ? "#9E9E9E" : "#2C2C2C",
                      fontWeight: isRead ? "500" : "700",
                      fontSize: "clamp(0.5rem, -0.6038rem + 1.6055vw, 0.9375rem)",
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
                        fontSize: "clamp(0.5rem, -0.6038rem + 1.6055vw, 0.9375rem)",
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
                      fontSize: "clamp(0.5rem, -0.6038rem + 1.6055vw, 0.9375rem)",
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
                  fontSize: "clamp(0.5rem, -0.6038rem + 1.6055vw, 0.9375rem)",
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
