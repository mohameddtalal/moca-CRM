"use client";
import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Todo {
  id: number;
  title: string;
  description: string;
  day: string;
  month: string;
  label: string;
  color?: string;
  status?: string;
  theme?: string;
  descriptionColor?: string;
  iconColor?: string;
  iconStar?: string;
  iconCalendar?: string;
  iconChevron?: string;
  iconRight?: string;
}

const ToDo = () => {
  const defaultStatus = "Status";
  const statusOptions = ["Prepared", "Review", "Completed"];

  const todos: Todo[] = [
    { id: 1, title: "Reminder for Contract Renewal", description: "Renew Moca [Location Name] lease contract with [Landlord Commercial Name].", day: "12", month: "May", label: "Deadline" },
    { id: 2, title: "Reminder for Contract Renewal", description: "Renew Moca [Location Name] lease contract with [Landlord Commercial Name].", day: "10", month: "Jun", label: "Deadline" },
    { id: 3, title: "Reminder for Contract Renewal", description: "Renew Moca [Location Name] lease contract with [Landlord Commercial Name].", day: "16", month: "Aug", label: "Deadline" },
    { id: 4, title: "Reminder for Contract Renewal", description: "Renew Moca [Location Name] lease contract with [Landlord Commercial Name].", day: "20", month: "Sep", label: "Deadline" },
  ];

  const [todoStatuses, setTodoStatuses] = useState<string[]>(todos.map(() => defaultStatus));
  const [todoDates, setTodoDates] = useState<(string | null)[]>(todos.map(() => null));
  const [starred, setStarred] = useState<boolean[]>(todos.map(() => false));
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [showCalendar, setShowCalendar] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeTodos, setActiveTodos] = useState<"Open" | "Completed">("Open");

  /** ⭐ Toggle Star */
  const toggleStar = (index: number) => {
    const updated = [...starred];
    updated[index] = !updated[index];
    setStarred(updated);
  };

  /** ⭐ Save Date (Date object → dd/mm/yyyy) */
  const handleDateChange = (index: number, date: Date | null) => {
    if (!date) return;

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    const formatted = `${day}/${month}/${year}`;

    const updated = [...todoDates];
    updated[index] = formatted;
    setTodoDates(updated);

    setShowCalendar(null);
  };
/** Extract day (DD) from stored dd/mm/yyyy */
const getBadgeDay = (stored: string | null) => {
  if (!stored) return null;
  const [day] = stored.split("/");
  return day;
};

/** Check if stored date is overdue (past today's date) */
const isOverdue = (stored: string | null) => {
  if (!stored) return false;

  const [day, month, year] = stored.split("/");
  const date = new Date(Number(year), Number(month) - 1, Number(day));

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return date < today;
};
/** Extract month abbreviation from stored dd/mm/yyyy */
const getBadgeMonth = (stored: string | null) => {
  if (!stored) return null;
  const [, month] = stored.split("/");

  const date = new Date(2024, Number(month) - 1, 1);
  return date.toLocaleString("en-GB", { month: "short" });
};

  /** ⭐ Convert stored dd/mm/yyyy → JS Date */
  const storedToDate = (stored: string | null) => {
    if (!stored) return null;
    const [day, month, year] = stored.split("/");
    return new Date(Number(year), Number(month) - 1, Number(day));
  };

  /** ⭐ Format dd/mm/yyyy → 12 Jan 2025 */
  const formatDisplayDate = (stored: string | null) => {
    if (!stored) return "Due Date";
    const date = storedToDate(stored);
    if (!date) return "Due Date";

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  /** ⭐ Scroll Reset */
useEffect(() => {
  const scrollContainer = scrollRef.current;
  if (!scrollContainer) return;

  let isScrolling = false;

  const handleScroll = () => {
    if (isScrolling) return; // prevent multiple triggers

    const { scrollTop, scrollHeight, clientHeight } = scrollContainer;

    if (scrollTop + clientHeight >= scrollHeight-0.5) {
      isScrolling = true;
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });

      // reset flag after scroll completes (~300ms)
      setTimeout(() => {
        isScrolling = false;
      }, 350);
    }
  };

  scrollContainer.addEventListener("scroll", handleScroll);
  return () => scrollContainer.removeEventListener("scroll", handleScroll);
}, []);



  /** ⭐ Apply Theme */
  const applyStaticTheme = (todo: Todo, index: number) => {
    const safe = index % 4;

    const icons = [
      { star: "/assets/starred.svg", calendar: "/assets/calendar.svg", chevron: "/assets/chevron-up.svg", right: "/assets/rightchevron.svg" },
      { star: "/assets/starred.svg", calendar: "/assets/calendar.svg", chevron: "/assets/chevron-up.svg", right: "/assets/rightchevron.svg" },
      { star: "/assets/starred-yellow.svg", calendar: "/assets/calendar-yellow.svg", chevron: "/assets/chevron-up-yellow.svg", right: "/assets/rightchevron-yellow.svg" },
      { star: "/assets/starred-black.svg", calendar: "/assets/calendar-black.svg", chevron: "/assets/chevron-up-black.svg", right: "/assets/rightchevron-black.svg" },
    ];

    const colors = [
      { color: "var(--yellow)", theme: "var(--hot-purple)", descriptionColor: "var(--black)", iconColor: "var(--hot-purple)" },
      { color: "var(--skin-pink)", theme: "var(--hot-purple)", descriptionColor: "var(--black)", iconColor: "var(--hot-purple)" },
      { color: "var(--purple)", theme: "var(--yellow)", descriptionColor: "var(--white)", iconColor: "var(--yellow)" },
      { color: "var(--energy-green)", theme: "var(--black)", descriptionColor: "var(--black)", iconColor: "var(--black)" },
    ];

    return {
      ...todo,
      ...colors[safe],
      iconStar: icons[safe].star,
      iconCalendar: icons[safe].calendar,
      iconChevron: icons[safe].chevron,
      iconRight: icons[safe].right,
    };
  };

  return (
    <div className="flex flex-row justify-end h-full" style={{ marginRight: "clamp(1rem, 0rem + 3.125vw, 3rem)" }}>
      <div className="flex flex-col justify-center card-bg" style={{ alignItems: "center", backgroundColor: "var(--navbar)" }}>
        <div style={{ width: "clamp(15.625rem, 0.6793rem + 29.8913vw, 25rem)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexDirection: "column" }}>
            <h2 style={{ fontFamily: "GT Walsheim", color: "#434343", fontSize: "clamp(0.875rem, -1.3326rem + 3.211vw, 1.75rem)", fontWeight: 600 }}>
              TO DO LIST
            </h2>

            {/* TOGGLE BUTTONS */}
            <div style={{ backgroundColor: "var(--navbar)", borderRadius: "50px", padding: "5px", display: "flex", gap: "4px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
              <button
                onClick={() => setActiveTodos("Open")}
                style={{
                  backgroundColor: activeTodos === "Open" ? "#D489FF" : "transparent",
                  color: activeTodos === "Open" ? "#2C2C2C" : "#B433FF",
                  padding: "6px 16px",
                  borderRadius: "50px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "clamp(0.625rem, 0.1519rem + 0.6881vw, 0.8125rem)",
                  fontWeight: 500,
                }}
              >
                Open
              </button>

              <button
                onClick={() => setActiveTodos("Completed")}
                style={{
                  backgroundColor: activeTodos === "Completed" ? "#D489FF" : "transparent",
                  color: activeTodos === "Completed" ? "#2C2C2C" : "#B433FF",
                  padding: "6px 16px",
                  borderRadius: "50px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "clamp(0.625rem, 0.1519rem + 0.6881vw, 0.8125rem)",
                  fontWeight: 500,
                }}
              >
                Completed
              </button>
            </div>
          </div>
        </div>

        {/* MAIN TODOS LIST */}
        <div style={{ position: "relative" }}>
{/* Top fade */}
<div
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "24px",
    background: "linear-gradient(to bottom, white, transparent)",
    zIndex: 20,
    pointerEvents: "none",
  }}
/>

{/* Bottom fade */}
<div
  style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "24px",
    background: "linear-gradient(to top, white, transparent)",
    zIndex: 20,
    pointerEvents: "none",
  }}
/>

        <div
          ref={scrollRef}
          className="card-bg custom-scroll"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxHeight: "calc(100vh - 145px)",
            overflowY: "auto",
            paddingRight: "8px",
            width: "clamp(15.625rem, 8.7971rem + 16.5525vw, 24.6875rem)",
            
          }}
        >
          {[...todos, ...todos, ...todos].map((todo, index) => {
            const i = index % todos.length;
            const display = applyStaticTheme(todo, i);
            

            return (
              <div key={index} style={{ backgroundColor: display.color, borderRadius: "16px", padding: "20px" }}>
                
                {/* TOP SECTION */}
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: "0 0 8px 0", fontSize: "14px", fontWeight: 600, color: display.theme }}>{display.title}</p>
                    <p style={{ margin: 0, fontSize: "12px", opacity: 0.9, color: display.descriptionColor }}>{display.description}</p>
                  </div>

                 {/* DATE BADGE + LABEL CONTAINER */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                {/* DATE BADGE */}
              <div
                className="rounded-lg bg-white flex flex-col items-center justify-center"
                style={{ width: "3rem", height: "3rem", borderRadius: "24px" }}
              >
                <div
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: isOverdue(todoDates[i]) ? "red" : "#343434",
                  }}
                >
                  { display.day}
                </div>

                <div
                  style={{
                    fontSize: "0.65rem",
                    opacity: 0.8,
                    color: isOverdue(todoDates[i]) ? "red" : "#343434",
                  }}
                >
                  { display.month}
                </div>
              </div>

              {/* LABEL UNDER BADGE */}
              <div
                style={{
                  fontSize: "0.65rem",
                  color: display.descriptionColor,
                  marginTop: "4px",
                  opacity: 0.7,
                  textAlign: "center",
                }}
              >
                {display.label}
              </div>

            </div>
            </div>
                {/* ACTIONS */}
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>

                  {/* STAR */}
                  <span
                    onClick={() => toggleStar(i)}
                    style={{
                      width: "20px",
                      height: "20px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={starred[i] ? display.iconStar! : "/assets/unstarred.svg"}
                      alt="star"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </span>

                  {/* STATUS */}
                  <div style={{ position: "relative" }}>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                      style={{
                        border: `1px solid ${display.theme}`,
                        borderRadius: "1536px",
                        width: "clamp(6.25rem, 1.25rem + 7.8125vw, 8.75rem)",
                        height: "2rem",
                        padding: "0 12px",
                        fontSize: "11px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        color: display.theme,
                      }}
                    >
                      {todoStatuses[i]}
                      <img src={display.iconChevron!} alt="chevron" />
                    </button>

                    {openDropdown === index && (
                      <div
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          marginTop: "4px",
                          backgroundColor: "white",
                          borderRadius: "12px",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                          zIndex: 1000,
                          overflow: "hidden",
                          minWidth: "120px",
                        }}
                      >
                        {statusOptions.map((status) => (
                          <div
                            key={status}
                            onClick={() => {
                              const updated = [...todoStatuses];
                              updated[i] = status;
                              setTodoStatuses(updated);
                              setOpenDropdown(null);
                            }}
                            style={{
                              padding: "10px 16px",
                              cursor: "pointer",
                              fontSize: "12px",
                              backgroundColor: todoStatuses[i] === status ? "#f0f0f0" : "white",
                            }}
                          >
                            {status}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* DATE PICKER */}
                  <div style={{ position: "relative" }}>
                    <button
                      onClick={() => setShowCalendar(showCalendar === index ? null : index)}
                      style={{
                        border: `1px solid ${display.theme}`,
                        borderRadius: "1536px",
                        width: "clamp(6.25rem, 1.25rem + 7.8125vw, 8.75rem)",
                        height: "2rem",
                        padding: "0 12px",
                        fontSize: "11px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "8px",
                        cursor: "pointer",
                        color: display.theme,
                        fontWeight: todoDates[i] ? 400 : 700,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {formatDisplayDate(todoDates[i])}
                      <img src={display.iconCalendar!} alt="calendar" style={{ width: 14, height: 14 }} />
                    </button>

                    {showCalendar === index && (
                      <div
                        style={{
                          position: "absolute",
                          top: "100%",
                          right: 0,
                          marginTop: "4px",
                          backgroundColor: "white",
                          borderRadius: "12px",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                          zIndex: 1000,
                          padding: "16px",
                          minWidth: "200px",
                        }}
                      >
                        <DatePicker
                          selected={storedToDate(todoDates[i])}
                          onChange={(date) => handleDateChange(i, date)}
                          dateFormat="dd MMM yyyy"  // ⭐ Abbreviations
                          inline
                        />
                      </div>
                    )}
                  </div>

                  {/* RIGHT → */}
                  <button style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", marginLeft: "auto" }}>
                    <img src={display.iconRight!} alt="right" />
                  </button>

                </div>

              </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
