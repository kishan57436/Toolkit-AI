// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Layout from './pages/Layout'
// import Dashboard from './pages/Dashboard'
// import WriteArticle from './pages/WriteArticle'
// import BlogTitles from './pages/BlogTitles'
// import GenerateImages from './pages/GenerateImages'
// import RemoveBackground from './pages/RemoveBackground'
// import RemoveObject from './pages/RemoveObject'
// import ReviewResume from './pages/ReviewResume'
// import Community from './pages/Community'
// import { useAuth } from '@clerk/clerk-react'
// import { useEffect } from 'react'
// import {Toaster} from 'react-hot-toast'
// import Plan from './components/Plan'

// const App = () => {

//   return (
//     <div>
//       <Toaster />
//       <Routes>
//         <Route path='/' element={<Home />}/>
//         <Route path='/ai' element={<Layout />}>
//           <Route index element={<Dashboard/>} />
//           <Route path='write-article' element={<WriteArticle/>} />
//           <Route path='blog-titles' element={<BlogTitles/>} />
//           <Route path='generate-images' element={<GenerateImages/>} />
//           <Route path='remove-background' element={<RemoveBackground/>} />
//           <Route path='remove-object' element={<RemoveObject/>} />
//           <Route path='review-resume' element={<ReviewResume/>} />
//           <Route path='community' element={<Community/>} />
//           <Route path='plan' element={<Plan/>} />
//         </Route>
//       </Routes>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Layout from './pages/Layout'
// import Dashboard from './pages/Dashboard'
// import WriteArticle from './pages/WriteArticle'
// import BlogTitles from './pages/BlogTitles'
// import GenerateImages from './pages/GenerateImages'
// import RemoveBackground from './pages/RemoveBackground'
// import RemoveObject from './pages/RemoveObject'
// import ReviewResume from './pages/ReviewResume'
// import Community from './pages/Community'
// import { useAuth } from '@clerk/clerk-react'
// import { useEffect } from 'react'
// import { Toaster } from 'react-hot-toast'
// // import Plan from './components/Plan' // ✅ make sure this path is correct
// import Planss from './components/planss'

// const App = () => {

//   return (
//     <div>
//       <Toaster />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/ai' element={<Layout />}>
//           <Route index element={<Dashboard />} />
//           <Route path='write-article' element={<WriteArticle />} />
//           <Route path='blog-titles' element={<BlogTitles />} />
//           <Route path='generate-images' element={<GenerateImages />} />
//           <Route path='remove-background' element={<RemoveBackground />} />
//           <Route path='remove-object' element={<RemoveObject />} />
//           <Route path='review-resume' element={<ReviewResume />} />
//           <Route path='community' element={<Community />} />
//           <Route path='plan' element={<Planss />} /> {/* ✅ New route added */}
//         </Route>
//       </Routes>
//     </div>
//   )
// }

// export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import WriteArticle from './pages/WriteArticle'
import BlogTitles from './pages/BlogTitles'
import GenerateImages from './pages/GenerateImages'
import RemoveBackground from './pages/RemoveBackground'
import RemoveObject from './pages/RemoveObject'
import ReviewResume from './pages/ReviewResume'
import Community from './pages/Community'
import { Toaster } from 'react-hot-toast'
// import Planss from './components/Plans'
import Plans from './components/Plans'; 

import Contact from './pages/Contact';
import Features from './pages/Features'
// to show the toast to the user we used toaster and sonner  from sooner libary tool its help
// to used the tool basically without any without any problem we can solved so easily

const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/plan' element={<Plans />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />

        {/* ✅ Public route */}

        <Route path='/ai' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='write-article' element={<WriteArticle />} />
          <Route path='blog-titles' element={<BlogTitles />} />
          <Route path='generate-images' element={<GenerateImages />} />
          <Route path='remove-background' element={<RemoveBackground />} />
          <Route path='remove-object' element={<RemoveObject />} />
          <Route path='review-resume' element={<ReviewResume />} />
          <Route path='community' element={<Community />} />
          {/* removed plan from here */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
