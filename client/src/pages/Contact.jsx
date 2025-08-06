// import React from 'react';
// import { Link } from 'react-router-dom';

// const Contact = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center px-4 py-12">
//       <div className="max-w-3xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 text-white">
//         <h1 className="text-4xl font-bold mb-4 text-center">📩 Contact Us</h1>
//         <p className="text-center text-sm mb-8">
//           We'd love to hear from you! Please fill out the form below and we'll get in touch soon.
//         </p>

//         <form className="space-y-6">
//           <div>
//             <label htmlFor="name" className="block text-sm font-semibold mb-1">
//               Your Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="w-full px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
//               placeholder="John Doe"
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm font-semibold mb-1">
//               Your Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
//               placeholder="john@example.com"
//             />
//           </div>

//           <div>
//             <label htmlFor="message" className="block text-sm font-semibold mb-1">
//               Your Message
//             </label>
//             <textarea
//               id="message"
//               rows="4"
//               className="w-full px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
//               placeholder="Write your message here..."
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-white text-indigo-700 font-semibold py-2 px-4 rounded-lg hover:bg-indigo-100 transition"
//           >
//             Send Message 🚀
//           </button>
//         </form>

//         <div className="mt-6 text-center">
//           <Link
//             to="/"
//             className="inline-block mt-4 text-sm text-white underline hover:text-indigo-200 transition"
//           >
//             ⬅ Back to Home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
// src/components/Contact.jsx

// import React from "react";
// import Navbar from "../components/Navbar";

// const Contact = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-[#1e1e2f] to-[#232336] text-white">
//       <Navbar />
//       <div className="max-w-4xl mx-auto px-6 py-20">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
//           Get in Touch With Us
//         </h1>
//         <p className="text-lg text-center mb-12 text-gray-300">
//           We're here to answer your questions and help you grow with AI.
//         </p>
//         <form className="space-y-6">
//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-200">Name</label>
//             <input
//               type="text"
//               placeholder="Your full name"
//               className="w-full p-3 rounded-md bg-[#2e2e3e] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-200">Email</label>
//             <input
//               type="email"
//               placeholder="you@example.com"
//               className="w-full p-3 rounded-md bg-[#2e2e3e] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-200">Message</label>
//             <textarea
//               rows="5"
//               placeholder="How can we help you?"
//               className="w-full p-3 rounded-md bg-[#2e2e3e] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-semibold transition-all duration-300"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
// src/components/Contact.jsx

import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Get in Touch With Us
        </h1>
        <p className="text-lg text-center mb-12 text-gray-600">
          We're here to answer your questions and help you grow with AI.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              placeholder="How can we help you?"
              className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-md font-semibold transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
