// import React from 'react'
// import { assets } from '../assets/assets'
// import { useNavigate } from 'react-router-dom'
// import { ArrowRight } from 'lucide-react'
// import {useClerk, UserButton, useUser} from '@clerk/clerk-react'

// const Navbar = () => {

//     const navigate = useNavigate()
//     const {user} = useUser()
//     const { openSignIn } = useClerk()


//   return (
//     <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32'>
//       <img src={assets.logo} alt="logo" className='w-32 sm:w-44 cursor-pointer' onClick={()=> navigate('/')}/>

//       {
//         user ? <UserButton /> 
//         : 
//         (
//           <button onClick={openSignIn} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>Get started <ArrowRight className='w-4 h-4'/> </button>
//         )
//       }

      
//     </div>
//   )
// }

// export default Navbar
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser, useClerk, UserButton } from "@clerk/clerk-react";
import { Menu, X, Zap } from "lucide-react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
             ToolKit AI 
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="/features" className="text-gray-600 hover:text-gray-900">
              Features
            </a>
           <a href="/plan" className="text-gray-600 hover:text-gray-900">Pricing</a> 

            <a href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <UserButton />
            ) : (
              <button
                onClick={openSignIn}
                className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2"
              >
                Get Started
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Features
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Pricing
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
              <div className="pt-4">
                {user ? (
                  <div className="flex justify-center">
                    <UserButton />
                  </div>
                ) : (
                  <button
                    onClick={openSignIn}
                    className="w-full flex justify-center items-center gap-2 rounded-full text-sm cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2"
                  >
                    Get Started
                  </button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
// import React, { useState } from 'react'
// import { Outlet, useNavigate } from 'react-router-dom'
// import { Menu, X, Zap } from 'lucide-react'
// import Sidebar from '../components/Sidebar'
// import { SignIn, useUser } from '@clerk/clerk-react'

// const Layout = () => {
//   const navigate = useNavigate()
//   const [sidebar, setSidebar] = useState(false)
//   const { user } = useUser()

//   return user ? (
//     <div className='flex flex-col items-start justify-start h-screen'>

//       {/* Navbar */}
//       <nav className='w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200'>
//         {/* Logo + Title */}
//         <div 
//           onClick={() => navigate('/')} 
//           className='flex items-center space-x-2 cursor-pointer'
//         >
//           <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//             <Zap className="w-5 h-5 text-white" />
//           </div>
//           <h1 className='text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
//             ToolKit AI
//           </h1>
//         </div>

//         {/* Mobile Menu Icon */}
//         {
//           sidebar 
//             ? <X onClick={() => setSidebar(false)} className='w-6 h-6 text-gray-600 sm:hidden' />
//             : <Menu onClick={() => setSidebar(true)} className='w-6 h-6 text-gray-600 sm:hidden' />
//         }
//       </nav>

//       {/* Main Content Area */}
//       <div className='flex-1 w-full flex h-[calc(100vh-64px)]'>
//         <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
//         <div className='flex-1 bg-[#F4F7FB]'>
//           <Outlet />
//         </div>
//       </div>

//     </div>
//   ) : (
//     <div className='flex items-center justify-center h-screen'>
//       <SignIn />
//     </div>
//   )
// }

// export default Layout
