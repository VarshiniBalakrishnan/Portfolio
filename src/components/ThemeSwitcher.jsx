// import React, { useContext } from "react";
// import { ThemeContext } from "../theme/ThemeContext";
// import { motion } from "framer-motion";

// export default function ThemeSwitcher(){
//   const { theme, setTheme } = useContext(ThemeContext);


// const pills = [
//     { id: "A", label: "A", style: { background: "linear-gradient(90deg,#071025,#0b1220)", borderRadius: 8 }},
//     { id: "B", label: "B", style: { background: "linear-gradient(90deg,#120007,#3b0008)", borderRadius: 8 }},
//     { id: "C", label: "C", style: { background: "linear-gradient(90deg,#fff7fb,#f0f7ff)", borderRadius: 8 }},
//     { id: "D", label: "D", style: { background: "linear-gradient(90deg,#00293a,#002b4d)", borderRadius: 8 }},
//     { id: "E", label: "E", style: { background: "linear-gradient(90deg,#F7C6A3,#FFEBD9)", borderRadius: 8 }},
//     { id: "F", label: "F", style: { background: "linear-gradient(90deg,#98F0C0,#EFFFF8)", borderRadius: 8 }},
//     { id: "G", label: "G", style: { background: "linear-gradient(90deg,#FF7F6A,#4FD1C5)", borderRadius: 8 }},
//     { id: "H", label: "H", style: { background: "linear-gradient(90deg,#C8B6FF,#EDEBFF)", borderRadius: 8 }},
//     { id: "I", label: "I", style: { background: "linear-gradient(90deg,#E7A1B0,#F5E7DA)", borderRadius: 8 }},
//     { id: "J", label: "J", style: { background: "linear-gradient(90deg,#FFE66D,#FFFBE6)", borderRadius: 8 }},
//   ];
  

//   return (
//     <div className="theme-switcher" role="tablist" aria-label="Theme switcher">
//       {pills.map(p => (
//         <motion.button
//           key={p.id}
//           className="theme-pill"
//           title={`Switch to theme ${p.id}`}
//           style={p.style}
//           onClick={() => setTheme(p.id)}
//           initial={{ scale: 1 }}
//           animate={ theme === p.id ? { scale: 1.06, boxShadow: "0 12px 30px rgba(0,0,0,0.45)" } : { scale: 1 } }
//         >
//           <span style={{ color: p.id === "C" ? "#0b1220" : "#fff", fontWeight:700 }}>{p.label}</span>
//         </motion.button>
//       ))}
//     </div>
//   );
// }



import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  const themeOrder = ["A","B","C","D","E","F","G","H","I","J"];

  const handleNextTheme = () => {
    const currentIndex = themeOrder.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    setTheme(themeOrder[nextIndex]);
  };

  return (
    <button
      onClick={handleNextTheme}
      className="px-4 py-2 rounded-lg"
      style={{
        background: "var(--accent)",
        color: "var(--text)",
        fontWeight: 600,
        border: "1px solid var(--card-border)",
      }}
    >
      Theme Change
    </button>
  );
}
