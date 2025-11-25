// import React from 'react'

// const projects = [
//   { title: 'Matter Manager', desc: 'Law firm management panel built with Next.js and Tailwind.' },
//   { title: 'Time Entries', desc: 'Interactive time tracking UI with Excel export.' },
//   { title: 'Profile Grid', desc: 'Responsive grid with profile selection and attachments.' }
// ]

// export default function Projects(){
//   return (
//     <section id="projects" className="mt-5">
//       <h2 className="mb-4">Selected Projects</h2>
//       <div className="row">
//         {projects.map((p, i) => (
//           <div className="col-md-4 mb-3" key={i}>
//             <div className="card card-glass p-3 h-100">
//               <h6 className="fw-bold">{p.title}</h6>
//               <p className="text-muted small">{p.desc}</p>
//               <div className="mt-auto">
//                 <a className="btn btn-sm btn-outline-light me-2">Live</a>
//                 <a className="btn btn-sm btn-outline-light">Code</a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }


// import React from "react";
// import { motion } from "framer-motion";

// const projects = [
//   { title: "Matter Manager", desc: "Law firm panel built with Next.js + Tailwind", tags:["Next.js","Tailwind"] },
//   { title: "Time Entries", desc: "Interactive time tracking UI with export", tags:["React","Docx"] },
//   { title: "Profile Grid", desc: "Profile selection & attachments", tags:["RN","Tailwind"] }
// ];

// export default function Projects(){
//   return (
//     <section id="projects" className="mt-5">
//       <h2 className="mb-4">Selected Projects</h2>
//       <div className="row">
//         {projects.map((p,i)=>(
//           <div className="col-md-4 mb-3" key={i}>
//             <motion.div className="card card-glass p-3 h-100 project-card" whileHover={{ y:-12 }} transition={{ type:'spring', stiffness:200 }}>
//               <div className="fw-bold">{p.title}</div>
//               <div className="small-muted mt-2">{p.desc}</div>
//               <div className="mt-3 d-flex gap-2 flex-wrap">
//                 {p.tags.map((t,ti)=>(<span className="badge badge-theme px-2 py-1" key={ti}>{t}</span>))}
//               </div>
//               <div className="mt-4">
//                 <a className="btn btn-sm btn-outline-light me-2">Live</a>
//                 <a className="btn btn-sm btn-outline-light">Code</a>
//               </div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// import React from "react";
// import { motion } from "framer-motion";

// const projects = [
//   { 
//     title: "Dum & Dine (Food Delivery App)", 
//     desc: "A full food ordering and delivery application featuring real-time menu updates, secure Stripe payment integration, cart management, and responsive UI. Backend is powered by Node.js and MongoDB for seamless and efficient order processing.",
//     tags: ["React.js", "Node.js", "MongoDB", "Stripe"]
//   },
//   { 
//     title: "Time Tracker Mobile App", 
//     desc: "A mobile application for employees to clock in/out, monitor work hours, review attendance history, and request leaves. Includes JWT authentication, secure API endpoints, and MongoDB for accurate time log storage and reporting.",
//     tags: ["React Native", "MongoDB", "API", "JWT"]
//   },
//   { 
//     title: "Appsfor2 Time Tracking System", 
//     desc: "A production-level time tracking and employee management platform with admin approvals, leave workflows, clock-in/out functionality, advanced filtering, monthly reports, and export features. Used internally by Appsfor2.",
//     tags: ["Next.js", "API Integration", "Tailwind", "MongoDB"]
//   },
//   { 
//     title: "Cromwell Diwali Event Booking", 
//     desc: "A complete event booking platform featuring a multi-step reservation flow, user-friendly ticket booking, form validation, and responsive layouts for smooth navigation on all devices.",
//     tags: ["React.js", "Bootstrap", "Forms"]
//   },
//   { 
//     title: "Event Booking System", 
//     desc: "A simple yet effective event booking portal allowing users to browse events, select tickets, and complete reservations. Built with a clean UI, lightweight structure, and responsive design.",
//     tags: ["React.js", "UI/UX", "Responsive"]
//   },
//   { 
//     title: "Fuzionest Company Website", 
//     desc: "A modern, responsive corporate website for Fuzionest featuring service pages, dynamic sections, branding-based layouts, company information, and optimized UI components built with Next.js.",
//     tags: ["Next.js", "Tailwind", "UI Design"]
//   },
//   { 
//     title: "BharatAves Drone Website", 
//     desc: "A product-focused drone presentation website featuring detailed drone specifications, features, imagery, categories, and a clean modern layout designed for maximum visual appeal.",
//     tags: ["React.js", "Responsive", "UI/UX"]
//   }
// ];

// export default function Projects(){
//   return (
//     <section id="projects" className="mt-5">
//       <h2 className="mb-4">Selected Projects</h2>

//       <div className="row">
//         {projects.map((p,i)=>(
//           <div className="col-md-3 mb-4" key={i}> 
//             {/* 4 items per row → col-md-3 */}
            
//             <motion.div 
//               className="card card-glass p-3 h-100 project-card"
//               whileHover={{ y:-10 }}
//               transition={{ type:'spring', stiffness:200 }}
//             >
//               <div className="fw-bold fs-6">{p.title}</div>

//               <div className="small-muted mt-2" style={{ fontSize: "14px", lineHeight: "20px" }}>
//                 {p.desc}
//               </div>

//               <div className="mt-3 d-flex gap-2 flex-wrap">
//                 {p.tags.map((t,ti)=>(
//                   <span className="badge badge-theme px-2 py-1" key={ti}>
//                     {t}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }




import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
  })
};

const projects = [
  { 
    title: "Dum & Dine (Food Delivery App)", 
    desc: "A complete food delivery system with live menu updates, secure online payments using Stripe, cart management, and real-time order flows. Designed with a modern interface and supported by a performance-optimized Node.js + MongoDB backend.",
    tags: ["React.js", "Node.js", "MongoDB", "Stripe"]
  },
  { 
    title: "Time Tracker Mobile App", 
    desc: "A mobile solution for employees to clock in/out, track work duration, manage attendance, and request leaves. Built with secure JWT authentication and MongoDB for real-time and accurate data handling.",
    tags: ["React Native","Nodejs", "taiwind css","Typescript", "UI/UX", "Responsive", "MongoDB", "API", "JWT"]
  },
  { 
    title: "Appsfor2 Time Tracking System", 
    desc: "A production-grade internal platform used by Appsfor2 for employee tracking. Includes admin approvals, leave workflows, clock in/out, attendance analytics, advanced filtering, and exportable time entry reports.",
    tags: ["Reactnative","Nodejs", "taiwind css","Typescript", "UI/UX", "Responsive", "API Integration",  "MongoDB", "MongoDB", "API", "JWT"]
  },
  { 
    title: "Cromwell Diwali Event Booking", 
    desc: "A complete multi-step event reservation system with form validation, ticket booking flow, and a beautifully responsive interface designed for seamless user booking.",
    tags: ["React.js","Nodejs", "taiwind css","Typescript", "UI/UX", "Responsive", "MongoDB", "API", "JWT"]
  },
  { 
    title: "Event Booking System", 
    desc: "A minimal and clean event reservation portal allowing users to explore events, choose tickets, and receive instant confirmations. Lightweight, fast, and mobile-friendly.",
    tags: ["Reactnative","Nodejs", "taiwind css","Typescript", "UI/UX", "Responsive", "MongoDB", "API", "JWT"]
  },
  { 
    title: "Fuzionest Company Website", 
    desc: "A polished corporate website for Fuzionest, featuring dynamic sections, service showcases, company insights, and a professionally branded Next.js UI design.",
    tags: ["React.js","Nodejs", "Tailwind","Javascript", "UI Design", "MongoDB", "API", "JWT"]
  },
  { 
    title: "BharatAves Drone Website", 
    desc: "A visually engaging drone showcase website displaying drone features, categories, technical specifications, and modern layouts presenting products with clarity and style.",
    tags: ["React.js","Nodejs", "Responsive", "UI/UX", "MongoDB", "API", "JWT"]
  }
];

export default function Projects(){
  return (
    <section id="projects" className="mt-5">
      <motion.h2 
        className="mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
    Projects
      </motion.h2>

      <div className="row">
        {projects.map((p, i) => (
          <motion.div 
            className="col-md-3 mb-4"
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={i}
          >
            <motion.div 
              className="card card-glass p-4 h-100 project-card text-center"
              whileHover={{ 
                y: -12, 
                scale: 1.03, 
                boxShadow: "0 15px 35px rgba(0,0,0,0.4)" 
              }}
              transition={{ type: "spring", stiffness: 220 }}
            >
              <div className="fw-bold fs-6">{p.title}</div>

              <div 
                className="small-muted mt-3"
                style={{ fontSize: "14px", lineHeight: "22px" }}
              >
                {p.desc}
              </div>

              <div className="mt-4">
  <div 
    className="d-flex flex-wrap justify-content-center"
    style={{ fontSize: "13px", color: "#ddd", gap: "6px" }}
  >
    {p.tags.map((t, ti) => (
      <span key={ti}>
        {t}{ti < p.tags.length - 1 && <span className="mx-1">·</span>}
      </span>
    ))}
  </div>
</div>


              {/* <div className="mt-4 d-flex gap-2 flex-wrap justify-content-center">
                {p.tags.map((t, ti) => (
                  <span 
                    className="badge badge-theme px-3 py-2"
                    key={ti}
                    style={{ fontSize: "12px" }}
                  >
                    {t}
                  </span>
                ))}
              </div> */}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
