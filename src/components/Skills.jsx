// import React from 'react'

// const skills = ['Reactjs','Nextjs','Reactnative','JavaScript','Typescript','Tailwind','Bootstrap','Css','Html','Visual studio','Android studio','Jira','Git']

// export default function Skills(){
//   return (
//     <section id="skills" className="mt-5">
//       <h2 className="mb-3">Skills & Tools</h2>
//       <div className="d-flex flex-wrap  p-4gap-3">
//         {skills.map((s,i)=> <span key={i} className="badge bg-secondary">{s}</span>)}
//       </div>
//     </section>
//   )
// }

import React from "react";
import "animate.css";

const skills = [
  "React.js",
  "Next.js",
  "React Native",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Bootstrap",
  "CSS",
  "HTML",
  "Visual Studio Code",
  "Android Studio",
  "Jira",
  "Git",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mt-5 py-5 px-3 animate__animated animate__fadeInUp"
      // style={{ background: "#e2e3da", borderRadius: "14px" }}
    >
      <h2
        className="mb-4 text-center  "
        style={{ fontWeight: 600 }}
      >
        Skills & Tools
      </h2>

      <div
        className="d-flex flex-wrap justify-content-center gap-3"
        style={{ padding: "20px" }}
      >
        {skills.map((s, i) => (
          <span
            key={i}
            className="badge bg-dark animate__animated animate__zoomIn"
            style={{
              padding: "12px 18px",
              fontSize: "15px",
              borderRadius: "30px",
              letterSpacing: "0.3px",
              animationDelay: `${i * 0.1}s`,
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
