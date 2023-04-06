import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    setTheme(savedTheme || "light");
  }, []);

  return [theme, toggleTheme];
};

export { useDarkMode };