import React, { useState, useEffect, useContext } from "react";
import TaskList from "./components/TaskList.jsx";
import { TaskContext } from "./context/TaskContext.jsx";

export default function App() {
  const getInitialDarkMode = () => {
    if (typeof window !== "undefined") {
      if (localStorage.theme === "dark") return true;
      if (localStorage.theme === "light") return false;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  };

  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  return (
    <div className={"app-container" + (darkMode ? " dark" : "") }>
      <div className="todo-wrapper">
        <div className="todo-header">
          <h1 className="todo-title">To Do List</h1>
          <div className="todo-controls">
            <button
              className="darkmode-btn"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
        <div className="todo-main">
          <TaskList />
        </div>
      </div>
    </div>
  );
}