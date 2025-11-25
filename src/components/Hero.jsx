// import React from 'react'

// export default function Hero(){
//   return (
//     <section className="py-5" style={{paddingTop:100}}>
//       <div className="row align-items-center">
//         <div className="col-md-7">
//           <h1 className="display-5 fw-bold">Hi, I'm <span style={{background:'linear-gradient(90deg,#8b0000,#ff6b6b)', WebkitBackgroundClip:'text', color:'transparent'}}>Varshini</span></h1>
//           <p className="lead card card-glass ">Frontend Developer building accessible and pixel-perfect interfaces with React and Bootstrap.</p>
//           <div className="mt-4">
//             <a href="#projects" className="btn btn-danger btn-lg me-2">View Projects</a>
//             <a href="#contact" className="btn btn-outline-light btn-lg">Hire Me</a>
//           </div>
//           <div className="mt-4 d-flex gap-2">
//             <div className="card card-glass p-3">React • Bootstrap • Accessibility</div>
//             <div className="card card-glass p-3">Vite • Performance</div>
//           </div>
//         </div>
//         <div className="col-md-5 text-center">
//           <div className="card card-glass p-4 d-inline-block">
//             <img src="/profile.jpeg" alt="profile" className="rounded-circle" style={{width:160, height:160, objectFit:'cover', border:'4px solid rgba(255,255,255,0.08)'}} />
//             <div className="mt-3 text-muted">Frontend Developer • React Specialist</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import React from "react";
import { motion } from "framer-motion";

const PROFILE_IMG = "/mnt/data/50d53294-e1b7-4bf9-8309-8309-1eaa01363c83.png"; // fallback if needed
// NOTE: your environment earlier saved the uploaded image at /mnt/data/50d53294-e1b7-4bf9-8309-1eaa01363c83.png
// Use the line below for correct path:
const PROFILE = "./Profile";

export default function Hero(){
  return (
    <section className="py-5">
      <div className="row align-items-center">
        <div className="col-md-7">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y:0, opacity:1 }} transition={{ duration: 0.6 }} className="display-5 fw-bold">
            Hi, I'm <span style={{ background:'linear-gradient(90deg,var(--accent),var(--accent-2))', WebkitBackgroundClip:'text', color:'transparent' }}>Varshini</span>
          </motion.h1>
          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.15 }} className="lead lead-muted">
            Frontend Developer crafting interactive, high-performance user interfaces with delightful micro-interactions.
          </motion.p>

          <motion.div className="mt-4" initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.25 }}>
            <a href="#projects" className="btn btn-accent btn-lg me-2">View Projects</a>
            <a href="#contact" className="btn btn-theme btn-lg">Hire Me</a>
          </motion.div>

        </div>

        <motion.div className="col-md-5 text-center" initial={{ scale: 0.98 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}>
          <div className="card card-glass p-4 d-inline-block">
            <img src="/profile.jpeg" alt="profile" className="rounded-circle" style={{width:160, height:160, objectFit:'cover', border:'4px solid rgba(255,255,255,0.06)'}} />
            <div className="mt-3 small-muted">Frontend Developer • React Specialist</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
