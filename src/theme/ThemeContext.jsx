import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

// const THEME_CLASSES = {
//   A: "",     // default root (no special class)
//   B: "theme-b",
//   C: "theme-c",
//   D: "theme-d"
// };

const THEME_CLASSES = {
    A: "",          // Default
    B: "theme-b",
    C: "theme-c",
    D: "theme-d",
    E: "theme-e",   // Soft Peach & Cream
    F: "theme-f",   // Mint Green & White
    G: "theme-g",   // Coral & Turquoise
    H: "theme-h",   // Lavender & Gray
    I: "theme-i",   // Dust Pink & Beige
    J: "theme-j",   // Lemon Yellow & White
  };

  

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("A");

  useEffect(() => {
    // Remove all theme classes then set new
    Object.values(THEME_CLASSES).forEach(cls => {
      if (!cls) return;
      document.documentElement.classList.remove(cls);
      document.body.classList.remove(cls);
    });
    const cls = THEME_CLASSES[theme];
    if (cls) {
      document.documentElement.classList.add(cls);
      document.body.classList.add(cls);
    } else {
      // default: remove custom theme classes
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
