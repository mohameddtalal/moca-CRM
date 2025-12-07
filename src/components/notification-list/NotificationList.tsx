"use client";
import React, { useState, useRef, useEffect } from "react";

const NotificationList: React.FC = () => {
  const [activeNotifications, setActiveNotifications] = useState("Today");
  const [activeTodos, setActiveTodos] = useState("Open");
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [showCalendar, setShowCalendar] = useState<number | null>(null);
  const [isStarred, setIsStarred] = useState(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);

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
        "Renew Moca lease contract. Your request has been scheduled on Thursday, August 10 at 10am.",
      time: "1 hour ago",
      isNew: true,
      hasMore: true,
    },
    {
      id: 6,
      title:
        "A new Book a Tour request has been scheduled on Thursday, August 10 at 10am.",
      time: "1 hour ago",
      isNew: false,
      hasMore: true,
    },
  ];

  return (
      
    <div
      ref={scrollRef}
      className="card-bg custom-scroll"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        maxHeight: "calc(100vh - 140px)",
        overflowY: "auto",
        paddingRight: "8px",
      }}
    >
      {notifications.map((notif) => (
        <div
          key={notif.id}
          style={{
            backgroundColor: "var(--navbar)",
            borderRadius: "32px",
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            opacity: notif.isNew ? 1 : 0.6,
            transition: "opacity 0.3s ease",
          }}
        >
          <div style={{ flex: 1, display: "flex", gap: "12px" }}>
            {notif.isNew && (
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#B433FF",
                  marginTop: "6px",
                  flexShrink: 0,
                }}
              />
            )}

            <div style={{ flex: 1 }}>
              <p
                style={{
                  color: "#fff",
                  margin: "0 0 8px 0",
                  fontSize: "14px",
                  fontWeight: notif.isNew ? "600" : "400",
                }}
              >
                {notif.title}
              </p>

              {notif.description && (
                <p
                  style={{
                    color: "#999",
                    margin: "0 0 8px 0",
                    fontSize: "13px",
                  }}
                >
                  {notif.description}
                </p>
              )}

              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    color: "#666",
                    margin: 0,
                    fontSize: "12px",
                  }}
                >
                  {notif.time}
                </p>

                {notif.hasMore && (
                  <span
                    style={{
                      color: "#B433FF",
                      fontSize: "12px",
                      cursor: "pointer",
                    }}
                  >
                    See More
                  </span>
                )}
              </div>
            </div>
          </div>

          <button
            style={{
              backgroundColor: "var(--hot-purple)",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "1536px",
              padding: "8px 24px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
