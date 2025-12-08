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
    const newStatuses = [...todoStatuses];
    newStatuses[index] = newStatus;
    setTodoStatuses(newStatuses);
    setOpenDropdown(null);
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
            <h2 style={{ fontFamily: "GT Walsheim", color: "#434343", fontSize: "clamp(0.875rem, -1.3326rem + 3.211vw, 1.75rem)", fontWeight: 600, margin: 0 }}>TO DO LIST</h2>
            <div style={{ backgroundColor: "var(--navbar)", borderRadius: "50px", padding: "5px", display: "flex", gap: "4px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
              <button onClick={() => setActiveTodos("Open")} style={{ backgroundColor: activeTodos === "Open" ? "#D489FF" : "transparent", color: activeTodos === "Open" ? "#2C2C2C" : "#B433FF", padding: "6px 16px", borderRadius: "50px", border: "none", cursor: "pointer", transition: "all 0.3s ease", fontSize: "clamp(0.625rem, 0.1519rem + 0.6881vw, 0.8125rem)", fontWeight: 500, fontFamily: "GT Walsheim" }}>Open</button>
              <button onClick={() => setActiveTodos("Completed")} style={{ backgroundColor: activeTodos === "Completed" ? "#D489FF" : "transparent", color: activeTodos === "Completed" ? "#2C2C2C" : "#B433FF", padding: "6px 16px", borderRadius: "50px", border: "none", cursor: "pointer", transition: "all 0.3s ease", fontSize: "clamp(0.625rem, 0.1519rem + 0.6881vw, 0.8125rem)", fontWeight: 500, fontFamily: "GT Walsheim" }}>Completed</button>
            </div>
          </div>
        </div>

        <div ref={scrollRef} className="card-bg custom-scroll" style={{ display: "flex", flexDirection: "column", gap: "16px", maxHeight: "calc(100vh - 145px)", overflowY: "auto", paddingRight: "8px", width: "395px", scrollBehavior: "smooth" }}>
          {[...todos, ...todos, ...todos].map((todo, index) => {
            const safeIndex = index % todos.length;
            const displayTodo = applyStaticTheme(todo, safeIndex);

            return (
              <div key={`${todo.id}-${index}`} style={{ backgroundColor: displayTodo.color, borderRadius: "16px", padding: "20px", color: "#000", position: "relative", transition: "transform 0.3s ease" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: "0 0 8px 0", fontSize: "14px", fontWeight: 600, color: displayTodo.theme, fontFamily: "GT Walsheim" }}>{displayTodo.title}</p>
                    <p style={{ margin: 0, fontSize: "12px", opacity: 0.9, color: displayTodo.descriptionColor, fontFamily: "GT Walsheim" }}>{displayTodo.description}</p>
                  </div>

                  <div className="flex flex-col">
                    <div className="rounded-lg bg-white flex flex-col items-center justify-center" style={{ width: "clamp(1.5rem, -2.2844rem + 5.5046vw, 3rem)", height: "clamp(1.5rem, -2.2844rem + 5.5046vw, 3rem)", borderRadius: "24px", backgroundColor: "white" }}>
                      <div style={{ fontSize: "clamp(0.5625rem, -0.8567rem + 2.0642vw, 1.125rem)", fontWeight: 700, lineHeight: 1 }}>{displayTodo.day}</div>
                      <div style={{ fontSize: "clamp(0.375rem, -0.2557rem + 0.9174vw, 0.625rem)", opacity: 0.8 }}>{displayTodo.month}</div>
                    </div>
                    <div style={{ fontSize: "clamp(0.375rem, -0.2557rem + 0.9174vw, 0.625rem)", color: displayTodo.descriptionColor, marginTop: "4px", opacity: 0.7, textAlign: "center" }}>{displayTodo.label}</div>
                  </div>
                </div>

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
    <div className="flex flex-row justify-end">
      <button
        onClick={() =>
          setOpenDropdown(openDropdown === index ? null : index)
        }
        style={{
          backgroundColor: "none",
          border: `1px solid ${displayTodo.theme}`,
          borderRadius: "1536px",
          width: "140px",
          height: "32px",
          padding: "0 12px",
          fontSize: "11px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          color: displayTodo.theme,
        }}
      >
        status
        <img
          src={displayTodo.iconChevron ?? "/assets/chevron-up.svg"}
          alt="chevron"
        />
      </button>
    </div>

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
                                  backgroundColor:
                            todoStatuses[safeIndex] === status ? "#f0f0f0" : "white",
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

            {/* DUE DATE */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() =>
                  setShowCalendar(showCalendar === index ? null : index)
                }
                style={{
                  border: `1px solid ${displayTodo.theme}`,
                  borderRadius: "1536px",
                  width: "140px",
                  height: "32px",
                  padding: "6px 16px",
                  fontSize: "11px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  color: displayTodo.theme,
                }}
              >
                Due Date
                <img
                  src={displayTodo.iconCalendar ?? "/assets/calendar.svg"}
                  alt="calendar"
                />
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
                    style={{
                      width: "100%",
                      padding: "8px",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                </div>
              )}
            </div>

            {/* CHEVRON RIGHT */}
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
                marginLeft: "auto",
              }}
            >
              <img
                src={displayTodo.iconRight ?? "/assets/rightchevron.svg"}
                alt="right"
              />
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
