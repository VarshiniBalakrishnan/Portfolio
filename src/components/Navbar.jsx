// import React from 'react'

// export default function Navbar(){
//   return (
//     <nav className="navbar navbar-expand-md navbar-dark bg-transparent fixed-top">
//       <div className="container">
//         <a className="navbar-brand d-flex align-items-center gap-2" href="#">
//           <div className="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center" style={{width:40, height:40}}>V</div>
//           <span className="ms-2">Varshini</span>
//         </a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="nav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
//             <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
//             <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
//             <li className="nav-item"><a href="#contact" className="btn btn-danger btn-sm text-white ms-3">Contact</a></li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }


// import React from "react";

// export default function Navbar(){
//   return (
//     <nav className="navbar navbar-expand-md fixed-top" style={{backdropFilter:'blur(8px)', background:'rgba(0,0,0,0.12)', borderBottom:'1px solid rgba(255,255,255,0.03)'}}>
//       <div className="container">
//         <a className="navbar-brand d-flex align-items-center gap-2" href="#">
//           <div style={{width:42,height:42,borderRadius:10, background:'linear-gradient(90deg,var(--accent),var(--accent-2))', display:'flex', justifyContent:'center', alignItems:'center', color:'#fff', fontWeight:700}}>V</div>
//           <div style={{fontWeight:600}}>Varshini</div>
//         </a>

//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="nav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
//             <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
//             <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
//             <li className="nav-item"><a className="btn btn-accent ms-3" href="#contact">Contact</a></li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }



import React from "react";
import resume from "../assets/Varshini_Resume.pdf"; // Make sure your resume file is in src/assets/

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-md fixed-top"
      style={{
        backdropFilter: "blur(8px)",
        background: "rgba(0,0,0,0.12)",
        borderBottom: "1px solid rgba(255,255,255,0.03)",
      }}
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 10,
              background:
                "linear-gradient(90deg,var(--accent),var(--accent-2))",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            V
          </div>
          <div style={{ fontWeight: 600 }}>Varshini</div>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            {/* Download Resume Button */}
            <li className="nav-item">
              <a
                className="btn btn-accent ms-3"
                href={resume}
                download="Varshini_Resume.pdf"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
