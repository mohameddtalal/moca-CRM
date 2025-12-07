"use client";
import React, { useState } from "react";


const NotificationList = () => {
  const [activeNotifications, setActiveNotifications] = useState("Today");

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
      className="flex flex-col"
      style={{
        flex: 1,
        backgroundColor: "transparent",
        padding: "20px",
        marginLeft: "clamp(1rem, 0rem + 3.125vw, 3rem)",
      }}
    >
      {/* HEADER */}
      <div className="flex flex-row ">
        <h1
          style={{
     
            color: "var(--hot-purple)",
            fontSize: "24px",
            fontWeight: "600",
            marginBottom: "20px",
            letterSpacing: "1px",
          }}
        >
          NOTIFICATIONS
        </h1>

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
            margin: "0 auto", // <-- centers it perfectly
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
              transition: "all 0.3s ease",
              fontWeight: "500",
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
              transition: "all 0.3s ease",
              fontWeight: "500",
            }}
          >
            Previous
          </button>
        </div>

       
      </div>

      {/* ✨ MAIN WHITE GLASS CARD ✨ */}
      <div
        style={{
          borderRadius: "30px",
          padding: "30px",
          maxHeight: "calc(100vh - 180px)",
          overflowY: "auto",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
          clipPath: "inset(0 round 30px)", // Important!
        }}
      >
        {notifications.map((notif) => (
          <div
            key={notif.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px 0",
              borderBottom: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ display: "flex", gap: "16px", flex: 1 }}>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    color: "var(hot--purple)",
                    fontSize: "15px",
                    margin: 0,
                    fontWeight: "600",
                  }}
                >
                  {notif.title}
                </p>

                {notif.description && (
                  <p
                    style={{
                      color: "var(--black)",
                      fontSize: "14px",
                      marginTop: "6px",
                      lineHeight: "1.4",
                    }}
                  >
                    {notif.description}
                  </p>
                )}

                <p
                  style={{
                    color: "#aaa",
                    fontSize: "12px",
                    marginTop: "8px",
                  }}
                >
                  {notif.time}
                </p>
              </div>
            </div>

            {/* View button */}
            <button
              style={{
                backgroundColor: "var(--hot-purple)",
                color: "white",
                border: "none",
                borderRadius: "25px",
                padding: "10px 24px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
                height: "40px",
              }}
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationList;
