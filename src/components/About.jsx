import React from 'react'

export default function About(){
  return (
    <section id="about" className="mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card card-glass p-4">
            <h5>About Me</h5>
            <p className="text-muted">
            Hi, I’m Varshini, a passionate Frontend Developer with 2+ years of experience building modern, responsive, and user-friendly applications.
I specialize in React.js, Next.js, React Native, Tailwind CSS, Bootstrap, JavaScript, TypeScript, HTML, and CSS.

I love transforming ideas into clean, elegant UI designs and delivering smooth, pixel-perfect user experiences. My work focuses on clarity, creativity, and performance — ensuring every project not only looks great but works beautifully on all devices.
               </p>
            {/* <ul className="text-muted">
              <li>Based in India</li>
              <li>Frontend Developer at Appsfor2</li>
              <li>Teaching HTML, CSS, Tailwind</li>
            </ul> */}
          </div>
        </div>
        <div className="col-md-8">
          <div className="card card-glass p-4">
            <h5>Experience & Approach</h5>
            <p className="text-muted">
       ✔ What I Do
          <ul className="text-muted">
          <li>Build fast, modern, and responsive UI</li>

          <li>Develop clean and reusable components</li>

          <li>Convert Figma designs into real, pixel-perfect applications</li>

          <li>Create mobile apps using React Native</li>

          <li>Connect APIs and handle dynamic data</li> </ul>

✔ How I Work
<ul>
<li>Simple & Elegant UI — easy for users, attractive for clients</li>

<li>Detail-oriented — every pixel matters</li>

<li>Efficient Code — clean, fast, maintainable</li>

<li>Client-focused — I build exactly what the business needs</li>

<li>Always Improving — learning new tools and trends</li> </ul>

My goal is always to deliver work that is clean, smooth, and delightful to use.
              {/* I convert designs to production-ready code, focusing on accessibility, performance and maintainability. I prefer axios for HTTP requests and clean folder structure. */}
              </p>
          </div>
        </div>
      </div>
    </section>
  )
}