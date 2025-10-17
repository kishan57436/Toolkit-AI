// import React from 'react'
// import { AiToolsData } from '../assets/assets'
// import { useNavigate } from 'react-router-dom'
// import { useUser } from '@clerk/clerk-react'

// const AiTools = () => {

//     const navigate = useNavigate()
//     const {user} = useUser()

//   return (
//     <div className='px-4 sm:px-20 xl:px-32 my-24'>
//       <div className='text-center'>
//         <h2 className='text-slate-700 text-[42px] font-semibold'>Powerful AI Tools</h2>
//         <p className='text-gray-500 max-w-lg mx-auto'>Everything you need to create, enhance, and optimize your content with cutting-edge AI technology.</p>
//       </div>

//       <div className='flex flex-wrap mt-10 justify-center'>
//         {AiToolsData.map((tool, index)=>(
//             <div key={index} className='p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer' onClick={()=> user && navigate(tool.path)}>
//                 <tool.Icon className='w-12 h-12 p-3 text-white rounded-xl' style={{background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`}}/>
//                 <h3 className='mt-6 mb-3 text-lg font-semibold'>{tool.title}</h3>
//                 <p className='text-gray-400 text-sm max-w-[95%]'>{tool.description}</p>
//             </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default AiTools
import React from 'react';
import { AiToolsData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

const AiTools = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  // i will be more powerful the edgecase we will enjoy the answer
  

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Powerful AI Tools at Your{' '}
           <span className="text-blue-600 dark:text-blue-500">
  Fingertips
</span>

          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create, enhance, and optimize your content with cutting-edge AI technology.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {AiToolsData.map((tool, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md border border-gray-100 bg-white hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
              onClick={() => user && navigate(tool.path)}
            >
              <tool.Icon
                className="w-12 h-12 p-3 text-white rounded-xl mb-4"
                style={{ background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})` }}
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{tool.title}</h3>
              <p className="text-gray-500 text-sm">{tool.description}</p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
            View All Tools →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AiTools;