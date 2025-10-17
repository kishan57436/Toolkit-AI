// import React, { useState } from 'react'
// import Markdown from 'react-markdown'

// const CreationItem = ({item}) => {

//     const [expanded, setExpanded] = useState(false)

//   return (
//     <div onClick={()=> setExpanded(!expanded)} className='p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer'>
//         <div className='flex justify-between items-center gap-4'>
//             <div>
//                 <h2>{item.prompt}</h2>
//                 <p className='text-gray-500'>{item.type} - {new Date(item.created_at).toLocaleDateString()}</p>
//             </div>
//             <button className='bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] px-4 py-1 rounded-full'>{item.type}</button>
//         </div>
//         {
//             expanded && (
//                 <div>
//                     {item.type === 'image' ? (
//                         <div>
//                             <img src={item.content} alt="image" className='mt-3 w-full max-w-md'/>
//                         </div>
//                     ) : (
//                         <div className='mt-3 h-full overflow-y-scroll text-sm text-slate-700'>
//                             <div className='reset-tw'>
//                                 <Markdown>{item.content}</Markdown>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             )
//         }
//     </div>
//   )
// }

// export default CreationItem
import React, { useState } from 'react'
import Markdown from 'react-markdown'
import { Download } from 'lucide-react'

const CreationItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false)

  const handleDownload = async (url) => {
    try {
      // ✅ Fetch image blob first (so the browser handles it properly)
      const response = await fetch(url)
      const blob = await response.blob()
      const blobUrl = window.URL.createObjectURL(blob)

      // ✅ Create a temporary <a> element and trigger native browser download
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = 'downloaded_image.png' // <-- custom name
      link.click()

      // ✅ Clean up blob URL
      window.URL.revokeObjectURL(blobUrl)
    } catch (error) {
      console.error('Error downloading image:', error)
    }
  }

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer"
    >
      <div className="flex justify-between items-center gap-4">
        <div>
          <h2 className="font-medium">{item.prompt}</h2>
          <p className="text-gray-500">
            {item.type} - {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>
        <button className="bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] px-4 py-1 rounded-full">
          {item.type}
        </button>
      </div>

      {expanded && (
        <div>
          {item.type === 'image' ? (
            <div className="mt-3">
              <div className="relative inline-block">
                <img
                  src={item.content}
                  alt="Generated"
                  className="w-full max-w-md rounded-md border border-gray-200"
                />

                {/* ✅ Download Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDownload(item.content)
                  }}
                  className="absolute top-3 right-3 flex items-center gap-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs px-3 py-1.5 rounded-md shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-3 h-full overflow-y-scroll text-sm text-slate-700">
              <div className="reset-tw">
                <Markdown>{item.content}</Markdown>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CreationItem

