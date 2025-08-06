// import React, { useState } from 'react'
// import { Outlet, useNavigate } from 'react-router-dom'
// import { assets } from '../assets/assets'
// import { Menu, X } from 'lucide-react'
// import Sidebar from '../components/Sidebar'
// import {SignIn, useUser } from '@clerk/clerk-react'

// const Layout = () => {

//   const navigate = useNavigate()
//   const [sidebar, setSidebar] = useState(false)
//   const {user} = useUser()
//   // this can be this value will give teh answer of the question

//   return user ? (
//     <div className='flex flex-col items-start justify-start h-screen'>

//       <nav className='w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200'>
//         <img className='cursor-pointer w-32 sm:w-44' src={assets.logo} alt="" onClick={()=>navigate('/')} />
//         {
//           sidebar ? <X onClick={()=> setSidebar(false)} className='w-6 h-6 text-gray-600 sm:hidden'/>
//           : <Menu onClick={()=> setSidebar(true)} className='w-6 h-6 text-gray-600 sm:hidden'/>
//         }
//       </nav>
//       <div className='flex-1 w-full flex h-[calc(100vh-64px)]'>
//           <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
//           <div className='flex-1 bg-[#F4F7FB]'>
//             <Outlet />
//           </div>
//       </div>
      
      
//     </div>
//   ) : (
//     <div className='flex items-center justify-center h-screen'>
//       <SignIn />
//     </div>
//   )
// }

//export default Layout
// import React, { useState } from 'react'
// import { Outlet, useNavigate } from 'react-router-dom'
// import { assets } from '../assets/assets'
// import { Menu, X } from 'lucide-react'
// import Sidebar from '../components/Sidebar'
// import { SignIn, useUser } from '@clerk/clerk-react'

// const Layout = () => {
//   const navigate = useNavigate()
//   const [sidebar, setSidebar] = useState(false)
//   const { user } = useUser()

//   return user ? (
//     <div className='flex flex-col items-start justify-start h-screen'>

//       {/* Navbar */}
//       <nav className='w-full px-6 sm:px-10 py-3 flex items-center justify-between border-b border-gray-200 bg-white'>
//         <div
//           className='flex items-center gap-2 cursor-pointer'
//           onClick={() => navigate('/')}
//         >
//           <img src={assets.logo} alt='logo' className='h-8 w-8 sm:h-10 sm:w-10' />
//           <h1 className='text-lg sm:text-xl font-semibold text-gray-800'>Toolkit AI</h1>
//         </div>

//         {/* Mobile Sidebar Toggle */}
//         {sidebar ? (
//           <X onClick={() => setSidebar(false)} className='w-6 h-6 text-gray-600 sm:hidden' />
//         ) : (
//           <Menu onClick={() => setSidebar(true)} className='w-6 h-6 text-gray-600 sm:hidden' />
//         )}
//       </nav>

//       {/* Main Content */}
//       <div className='flex-1 w-full flex h-[calc(100vh-64px)]'>
//         <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
//         <div className='flex-1 bg-[#F4F7FB] overflow-y-auto'>
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



// import React, { useEffect, useState } from "react";
// import { useNavigate, Outlet } from "react-router-dom";
// import { useAuth } from "@clerk/clerk-react";
// import { Zap } from "lucide-react";
// import { Sidebar } from "@/components/Sidebar";
// import { getUserInfo } from "@/utils/supabase";
// import Loader from "@/components/shared/Loader";

// const Layout = () => {
//   const navigate = useNavigate();
//   const { isSignedIn } = useAuth();
//   const [userInfo, setUserInfo] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getData = async () => {
//       if (!isSignedIn) {
//         navigate("/");
//         return;
//       }

//       const info = await getUserInfo();
//       setUserInfo(info);
//       setLoading(false);
//     };

//     getData();
//   }, [isSignedIn, navigate]);

//   if (loading) {
//     return (
//       <div className="h-screen w-full flex items-center justify-center">
//         <Loader />
//       </div>
//     );
//   }

//   return (
//     <div className="w-full flex flex-col sm:flex-row">
//       <div className="fixed sm:static top-0 w-full sm:w-[250px] h-[60px] sm:h-screen bg-white border-b sm:border-r px-4 sm:px-6 py-2 sm:py-8 z-50 flex items-center justify-between sm:justify-start">
//         {/* 🔄 Updated Logo Section */}
//         <div
//           className="flex items-center gap-2 cursor-pointer"
//           onClick={() => navigate("/")}
//         >
//           <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//             <Zap className="w-5 h-5 text-white" />
//           </div>
//           <h1 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Toolkit AI
//           </h1>
//         </div>
//       </div>

//       {/* 📦 Sidebar + Outlet */}
//       <div className="flex flex-col sm:flex-row w-full">
//         <Sidebar userInfo={userInfo} />
//         <div className="flex-1 p-4 sm:p-6">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;




// import React, { useState } from 'react'
// import { Outlet, useNavigate } from 'react-router-dom'
// import { Menu, X } from 'lucide-react'
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
//         <h1 
//           className='text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 cursor-pointer' 
//           onClick={() => navigate('/')}
//         >
//           ToolKit AI
//         </h1>
//         {
//           sidebar 
//             ? <X onClick={() => setSidebar(false)} className='w-6 h-6 text-gray-600 sm:hidden' />
//             : <Menu onClick={() => setSidebar(true)} className='w-6 h-6 text-gray-600 sm:hidden' />
//         }
//       </nav>

//       {/* Main content */}
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
// import React, { useState } from 'react'
// import { Outlet, useNavigate } from 'react-router-dom'
// import { Menu, X } from 'lucide-react'
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
//           className='flex items-center gap-2 cursor-pointer'
//           onClick={() => navigate('/')}
//         >
//           {/* Replace src path below with your actual logo image path */}
//           <img 
//             src='/logo.png' 
//             alt='ToolKit Logo' 
//             className='h-8 w-8 object-contain'
//           />
//           <h1 className='text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>
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
import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Menu, X ,Zap} from 'lucide-react'
import Sidebar from '../components/Sidebar'
import { SignIn, useUser } from '@clerk/clerk-react'

// ✅ Import your logo
import logo from '../assets/logo.svg' // Change the path if your logo is somewhere else

const Layout = () => {
  const navigate = useNavigate()
  const [sidebar, setSidebar] = useState(false)
  const { user } = useUser()

  return user ? (
    <div className='flex flex-col items-start justify-start h-screen'>

      {/* Navbar */}
      <nav className='w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200'>
        {/* ✅ Logo with text */}
        <div 
          className='flex items-center gap-2 cursor-pointer'
          onClick={() => navigate('/')}
        >
        
           <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
          <h1 className='text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>
            ToolKit AI
          </h1>
        </div>

        {/* Hamburger / Close icons */}
        {
          sidebar 
            ? <X onClick={() => setSidebar(false)} className='w-6 h-6 text-gray-600 sm:hidden' />
            : <Menu onClick={() => setSidebar(true)} className='w-6 h-6 text-gray-600 sm:hidden' />
        }
      </nav>

      {/* Main content */}
      <div className='flex-1 w-full flex h-[calc(100vh-64px)]'>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className='flex-1 bg-[#F4F7FB]'>
          <Outlet />
        </div>
      </div>

    </div>
  ) : (
    <div className='flex items-center justify-center h-screen'>
      <SignIn />
    </div>
  )
}

export default Layout
