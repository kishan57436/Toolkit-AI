// import { useAuth, useUser } from '@clerk/clerk-react'
// import React, { useEffect, useState } from 'react'
// import { dummyPublishedCreationData } from '../assets/assets'
// import { Heart } from 'lucide-react'
// import axios from 'axios'
// import toast from 'react-hot-toast'


// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

// const Community = () => {

//   const [creations, setCreations] = useState([])
//   const {user} = useUser()
//   const [loading, setLoading] = useState(true)
//   const { getToken } = useAuth()

//   const fetchCreations = async ()=>{
//     try {
//       const {data} = await axios.get('/api/user/get-published-creations', {
//         headers : {Authorization: `Bearer ${await getToken()}`}
//       })
//       if (data.success){
//         setCreations(data.creations)
//       }else{
//         toast.error(data.message)
//       }
//     } catch (error) {
//       toast.error(error.message)
//     }
//     setLoading(false)
//   }

//   const imageLikeToggle = async (id)=>{
//     try {
//       const {data} = await axios.post('/api/user/toggle-like-creation', {id}, {
//         headers : {Authorization: `Bearer ${await getToken()}`}
//       })

//       if (data.success){
//         toast.success(data.message)
//         await fetchCreations()
//       }else{
//         toast.error(data.message)
//       }
//     } catch (error) {
//       toast.error(error.message)
//     }
//   }

//   useEffect(()=>{
//     if(user){
//       fetchCreations()
//     }
//   },[user])

//   return !loading ? (
//     <div className='flex-1 h-full flex flex-col gap-4 p-6'>
//       Creations
//       <div className='bg-white h-full w-full rounded-xl overflow-y-scroll'>
//         {creations.map((creation, index)=> (
//           <div key={index} className='relative group inline-block pl-3 pt-3 w-full sm:max-w-1/2 lg:max-w-1/3'>
//             <img src={creation.content} alt="" className='w-full h-full object-cover rounded-lg'/>

//             <div className='absolute bottom-0 top-0 right-0 left-3 flex gap-2 items-end justify-end group-hover:justify-between p-3 group-hover:bg-gradient-to-b from-transparent to-black/80 text-white rounded-lg'>
//               <p className='text-sm hidden group-hover:block'>{creation.prompt}</p>
//               <div className='flex gap-1 items-center'>
//                 <p>{creation.likes.length}</p>
//                 <Heart onClick={()=> imageLikeToggle(creation.id)} className={`min-w-5 h-5 hover:scale-110 cursor-pointer ${creation.likes.includes(user.id) ? 'fill-red-500 text-red-600' : 'text-white'}`}/>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   ) : (
//     <div className='flex justify-center items-center h-full'>
//       <span className='w-10 h-10 my-1 rounded-full border-3 border-primary border-t-transparent animate-spin'></span>
//     </div>
//   )
// }

// export default Community
import { useAuth, useUser } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import { Heart, Download } from 'lucide-react'
import axios from 'axios'
import toast from 'react-hot-toast'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

const Community = () => {
  const [creations, setCreations] = useState([])
  const { user } = useUser()
  const [loading, setLoading] = useState(true)
  const { getToken } = useAuth()

  const fetchCreations = async () => {
    try {
      const { data } = await axios.get('/api/user/get-published-creations', {
        headers: { Authorization: `Bearer ${await getToken()}` },
      })
      if (data.success) {
        setCreations(data.creations)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
    setLoading(false)
  }

  const imageLikeToggle = async (id) => {
    try {
      const { data } = await axios.post(
        '/api/user/toggle-like-creation',
        { id },
        {
          headers: { Authorization: `Bearer ${await getToken()}` },
        }
      )

      if (data.success) {
        toast.success(data.message)
        await fetchCreations()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  // ✅ Download Handler
  const handleDownload = async (url) => {
    try {
      const response = await fetch(url)
      const blob = await response.blob()
      const blobUrl = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = 'downloaded_image.png' // default name
      link.click()
      window.URL.revokeObjectURL(blobUrl)
    } catch (error) {
      console.error('Download failed:', error)
      toast.error('Failed to download image')
    }
  }

  useEffect(() => {
    if (user) {
      fetchCreations()
    }
  }, [user])

  return !loading ? (
    <div className="flex-1 h-full flex flex-col gap-4 p-6">
      <h2 className="text-lg font-semibold text-gray-700">Creations</h2>

      <div className="bg-white h-full w-full rounded-xl overflow-y-scroll p-3 flex flex-wrap gap-4 justify-center">
        {creations.map((creation, index) => (
          <div
            key={index}
            className="relative group inline-block w-full sm:w-[48%] lg:w-[30%]"
          >
            <img
              src={creation.content}
              alt="creation"
              className="w-full h-full object-cover rounded-lg"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between bg-black/0 group-hover:bg-black/60 text-white rounded-lg transition-all p-3">
              {/* Top Right: Download Button */}
              <div className="flex justify-end opacity-0 group-hover:opacity-100 transition">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDownload(creation.content)
                  }}
                  className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded-md"
                >
                  <Download className="w-4 h-4" /> Download
                </button>
              </div>

              {/* Bottom: Prompt & Likes */}
              <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition">
                <p className="text-xs sm:text-sm line-clamp-2 pr-3">
                  {creation.prompt}
                </p>
                <div className="flex gap-1 items-center">
                  <p>{creation.likes.length}</p>
                  <Heart
                    onClick={() => imageLikeToggle(creation.id)}
                    className={`min-w-5 h-5 hover:scale-110 cursor-pointer ${
                      creation.likes.includes(user.id)
                        ? 'fill-red-500 text-red-600'
                        : 'text-white'
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-full">
      <span className="w-10 h-10 my-1 rounded-full border-3 border-primary border-t-transparent animate-spin"></span>
    </div>
  )
}

export default Community
