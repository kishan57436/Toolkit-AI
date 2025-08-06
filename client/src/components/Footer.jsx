// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 mt-20">
//     <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
//         <div className="md:max-w-96">
//             <img className="h-9" src={assets.logo} alt="logo"/>
//             <p className="mt-6 text-sm">
//                 Experience the power of AI with QuickAi. <br />Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your workflow.
//             </p>
//         </div>
//         <div className="flex-1 flex items-start md:justify-end gap-20">
//             <div>
//                 <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
//                 <ul className="text-sm space-y-2">
//                     <li><a href="#">Home</a></li>
//                     <li><a href="#">About us</a></li>
//                     <li><a href="#">Contact us</a></li>
//                     <li><a href="#">Privacy policy</a></li>
//                 </ul>
//             </div>
//             <div>
//                 <h2 className="font-semibold text-gray-800 mb-5">Subscribe to our newsletter</h2>
//                 <div className="text-sm space-y-2">
//                     <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
//                     <div className="flex items-center gap-2 pt-4">
//                         <input className="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 h-9 rounded px-2" type="email" placeholder="Enter your email" />
//                         <button className="bg-primary w-24 h-9 text-white rounded cursor-pointer">Subscribe</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <p className="pt-4 text-center text-xs md:text-sm pb-5">
//         Copyright 2025 © GreatStack. All Right Reserved.
//     </p>
// </footer>
//   )
// }

// export default Footer
import React from "react";
import { Zap, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Toolkit AI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md text-sm">
              Experience the power of AI with ToolKit AI. Transform your content
              creation with our suite of premium AI tools. Write articles,
              generate images, and enhance your workflow.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  AI Tools
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 Toolkit AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
