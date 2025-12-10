"use client";
import React, { useState, useEffect, useRef } from "react";

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
  const [todoDates, setTodoDates] = useState<string[]>(todos.map(() => "")); // empty → shows "Due Date" (red)
  const [starred, setStarred] = useState<boolean[]>(todos.map(() => false));
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [showCalendar, setShowCalendar] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeTodos, setActiveTodos] = useState<"Open" | "Completed">("Open");

  const toggleStar = (index: number) => {
    const newStars = [...starred];
    newStars[index] = !newStars[index];
    setStarred(newStars);
  };

  const handleStatusChange = (index: number, newStatus: string) => {
    const updated = [...todoStatuses];
    updated[index] = newStatus;
    setTodoStatuses(updated);
    setOpenDropdown(null);
  };

  /** Convert stored dd/mm/yyyy -> "12 December 2025" for button display */
  const formatDisplayDate = (rawDate: string) => {
    if (!rawDate) return "Due Date";

    const parts = rawDate.split("/");
    if (parts.length !== 3) return "Due Date";
    const [day, month, year] = parts;
    const monthNum = parseInt(month, 10);
    if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) return "Due Date";

    const monthNames = [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December"
    ];
    const monthName = monthNames[monthNum - 1];

    return `${day} ${monthName} ${year}`;
  };

  /** Convert ISO yyyy-mm-dd -> stored dd/mm/yyyy */
  const handleDateChange = (index: number, isoDate: string) => {
    if (!isoDate) return;

    const dateObj = new Date(isoDate);
    if (isNaN(dateObj.getTime())) return;

    const day = dateObj.getDate().toString().padStart(2, "0");
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObj.getFullYear();

    const formatted = `${day}/${month}/${year}`; // save dd/mm/yyyy

    const updated = [...todoDates];
    updated[index] = formatted;
    setTodoDates(updated);
    setShowCalendar(null);
  };

  /** Convert stored dd/mm/yyyy -> ISO yyyy-mm-dd for input value (so calendar shows current selection) */
  const storedToISO = (rawDate: string) => {
    if (!rawDate) return "";
    const parts = rawDate.split("/");
    if (parts.length !== 3) return "";
    const [day, month, year] = parts;
    // basic validation
    if (!day || !month || !year) return "";
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      if (scrollPercentage > 95) {
        setTimeout(() => {
          scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const applyStaticTheme = (todo: Todo, index: number) => {
    const themedTodo = { ...todo };
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

    const safeIndex = index % 4;
    Object.assign(themedTodo, colors[safeIndex], {
      iconStar: icons[safeIndex].star,
      iconCalendar: icons[safeIndex].calendar,
      iconChevron: icons[safeIndex].chevron,
      iconRight: icons[safeIndex].right,
    });

    return themedTodo;
  };

  return (
    <div className="flex flex-row justify-end h-full" style={{ marginRight: "clamp(1rem, 0rem + 3.125vw, 3rem)" }}>
      <div className="flex flex-col justify-center card-bg" style={{ alignItems: "center", backgroundColor: "var(--navbar)" }}>
        <div style={{ width: "clamp(15.625rem, 0.6793rem + 29.8913vw, 25rem)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexDirection: "column" }}>
            <h2 style={{ fontFamily: "GT Walsheim", color: "#434343", fontSize: "clamp(0.875rem, -1.3326rem + 3.211vw, 1.75rem)", fontWeight: 600 }}>TO DO LIST</h2>

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
          {[...todos, ...todos, ...todos].map((todo, index)=>{
            const safeIndex = index % todos.length;
            const displayTodo = applyStaticTheme(todo, safeIndex);

            return (
              <div key={`${todo.id}-${index}`} style={{ backgroundColor: displayTodo.color, borderRadius: "16px", padding: "20px" }}>

                {/* TOP INFO */}
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: "0 0 8px 0", fontSize: "14px", fontWeight: 600, color: displayTodo.theme }}>{displayTodo.title}</p>
                    <p style={{ margin: 0, fontSize: "12px", opacity: 0.9, color: displayTodo.descriptionColor }}>{displayTodo.description}</p>
                  </div>

                  <div className="flex flex-col">
                    <div className="rounded-lg bg-white flex flex-col items-center justify-center" style={{ width: "3rem", height: "3rem", borderRadius: "24px" }}>
                      <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>{displayTodo.day}</div>
                      <div style={{ fontSize: "0.65rem", opacity: 0.8 }}>{displayTodo.month}</div>
                    </div>
                    <div style={{ fontSize: "0.65rem", color: displayTodo.descriptionColor, marginTop: "4px", opacity: 0.7, textAlign: "center" }}>{displayTodo.label}</div>
                  </div>
                </div>

                {/* ACTIONS */}
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>

                  {/* STAR */}
                  <span
                    onClick={() => toggleStar(safeIndex)}
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
                      src={
                        starred[safeIndex]
                          ? displayTodo.iconStar ?? "/assets/starred.svg"
                          : "/assets/unstarred.svg"
                      }
                      alt="star"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </span>

                  {/* STATUS DROPDOWN */}
                  <div style={{ position: "relative" }}>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                      style={{
                        border: `1px solid ${displayTodo.theme}`,
                        borderRadius: "1536px",
                        width: "8rem",
                        height: "2rem",
                        padding: "0 12px",
                        fontSize: "11px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        color: displayTodo.theme,
                      }}
                    >
                      {todoStatuses[safeIndex]}
                      <img src={displayTodo.iconChevron ?? "/assets/chevron-up.svg"} alt="chevron" />
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
                            onClick={() => handleStatusChange(safeIndex, status)}
                            style={{
                              padding: "10px 16px",
                              cursor: "pointer",
                              fontSize: "12px",
                              backgroundColor: todoStatuses[safeIndex] === status ? "#f0f0f0" : "white",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f5f5f5")}
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.backgroundColor =
                                todoStatuses[safeIndex] === status ? "#f0f0f0" : "white")
                            }
                          >
                            {status}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* FIXED DUE DATE DROPDOWN */}
                  <div style={{ position: "relative" }}>
                    <button
                      onClick={() =>
                        setShowCalendar(showCalendar === index ? null : index)
                      }
                      style={{
                        border: `1px solid ${displayTodo.theme}`,
                        borderRadius: "1536px",
                        width: "9rem",
                        height: "2rem",
                        padding: "0 12px",
                        fontSize: "11px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "8px",
                        cursor: "pointer",
                        color:  displayTodo.theme ,
                        fontWeight: todoDates[safeIndex] ? 400 : 700,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <span style={{ display: "inline-block", minWidth: 0 }}>
                        {todoDates[safeIndex] ? formatDisplayDate(todoDates[safeIndex]) : "Due Date"}
                      </span>
                      <img src={displayTodo.iconCalendar ?? "/assets/calendar.svg"} alt="calendar" style={{ width: 14, height: 14, flexShrink: 0 }} />
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
                       <input
                          type="date"
                          required
                          value={storedToISO(todoDates[safeIndex])}
                          onChange={(e) => handleDateChange(safeIndex, e.target.value)}
                          style={{
                            width: "100%",
                            padding: "8px",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            fontSize: "12px",
                            display:'flex'  ,
                          }}
                                />
                       
                      </div>
                    )}
                  </div>

                  {/* RIGHT ICON */}
                  <button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                      marginLeft: "auto",
                    }}
                  >
                    <img src={displayTodo.iconRight ?? "/assets/rightchevron.svg"} alt="right" />
                  </button>

                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
