// import React, { useState } from 'react'

// export default function Contact(){
//   const [form, setForm] = useState({name:'', email:'', message:''})
//   return (
//     <section id="contact" className="mt-5 mb-5">
//       <h2>Get in touch</h2>
//       <div className="row mt-3">
//         <div className="col-md-5">
//           <div className="card card-glass p-4">
//             <p className="text-muted">I’m open to new opportunities — reach out for collaborations or freelance work.</p>
//             <div className="mt-3"><strong className="text-white">Email</strong><div className="text-muted">varshabalumathi@gmail.com</div></div>
//           </div>
//         </div>
//         <div className="col-md-7">
//           <form className="card card-glass p-4" onSubmit={(e)=>{e.preventDefault(); alert('Message sent (stub)')}}>
//             <div className="mb-2">
//               <label className="form-label small">Name</label>
//               <input className="form-control" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
//             </div>
//             <div className="mb-2">
//               <label className="form-label small">Email</label>
//               <input className="form-control" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
//             </div>
//             <div className="mb-2">
//               <label className="form-label small">Message</label>
//               <textarea className="form-control" rows="4" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})}></textarea>
//             </div>
//             <button className="btn btn-danger">Send Message</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   )
// }


import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    // your whatsapp number → change this
    const phoneNumber = "916374269898";

    const text =
      `*New Portfolio Inquiry*%0A` +
      `----------------------------%0A` +
      `*Name:* ${form.name}%0A` +
      `*Email:* ${form.email}%0A` +
      `*Message:* ${form.message}%0A` +
      `----------------------------`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappURL, "_blank");

    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="mt-5 mb-5">
      <h2 className="fw-bold mb-3">Get in touch</h2>

      <div className="row mt-3">
        
        {/* Left Card */}
        <div className="col-md-5">
          <div className="card card-glass p-4">
            <p className="text-muted">
              I’m open to new opportunities — reach out for collaborations or freelance work.
            </p>

            <div className="mt-3">
              <strong className="text-white">Email</strong>
              <div className="text-muted">varshabalumathi@gmail.com</div>
            </div>

            <div className="mt-3">
              <strong className="text-white">WhatsApp</strong>
              <div className="text-muted">+91 6374269898</div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="col-md-7">
          <form className="card card-glass p-4" onSubmit={sendToWhatsApp}>
            
            <div className="mb-3">
              <label className="form-label small">Name</label>
              <input
                className="form-control"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label small">Email</label>
              <input
                className="form-control"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label small">Message</label>
              <textarea
                className="form-control"
                rows="4"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              ></textarea>
            </div>

            <button className="btn btn-success w-100 fs-6 fw-semibold">
              Send Message on WhatsApp
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
