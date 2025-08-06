// import React from 'react';
// import Navbar from '../components/Navbar';
// import { AiToolsData } from '../assets/assets';
// import { useNavigate } from 'react-router-dom';

// const Features = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       {/* Navbar */}
//       <Navbar />

//       {/* Features Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//           {/* Header */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-gray-900">
//               Explore Our AI-Powered Features
//             </h2>
//             <p className="mt-4 text-xl text-gray-600">
//               Discover tools designed to help you create, enhance, and manage your content effortlessly.
//             </p>
//           </div>

//           {/* Feature Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {AiToolsData.map((tool, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer"
//                 onClick={() => navigate(tool.path)}
//               >
//                 <tool.Icon
//                   className="w-14 h-14 p-3 mb-4 rounded-xl text-white"
//                   style={{
//                     background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
//                   }}
//                 />
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   {tool.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {tool.description}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <div className="text-center mt-16">
//             <button
//               className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
//               onClick={() => navigate('/')}
//             >
//               Explore All Tools →
//             </button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Features;
import React from 'react';
import Navbar from '../components/Navbar';
import { AiToolsData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Features = () => {
  const navigate = useNavigate();

  // Function to group tools in chunks of 2
  const groupTools = (data, chunkSize) => {
    const result = [];
    for (let i = 0; i < data.length; i += chunkSize) {
      result.push(data.slice(i, i + chunkSize));
    }
    return result;
  };

  const groupedTools = groupTools(AiToolsData, 2);

  return (
    <>
      <Navbar />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Explore Our AI-Powered Features
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Discover tools designed to help you create, enhance, and manage your content effortlessly.
            </p>
          </div>

          {/* Render tools in rows of 2 */}
          {groupedTools.map((toolGroup, groupIndex) => (
            <div key={groupIndex} className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              {toolGroup.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer"
                  onClick={() => navigate(tool.path)}
                >
                  <tool.Icon
                    className="w-14 h-14 p-3 mb-4 rounded-xl text-white"
                    style={{
                      background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
                    }}
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Extra helpful info inside the card */}
                  <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
                    <li><strong>Purpose:</strong> {tool.details?.purpose || 'AI-powered assistance'}</li>
                    <li><strong>Use Cases:</strong> {tool.details?.useCases || 'Content, design, or analysis tasks'}</li>
                    <li><strong>Best For:</strong> {tool.details?.audience || 'Students, developers, marketers'}</li>
                  </ul>
                </div>
              ))}
            </div>
          ))}

          {/* CTA Button */}
          <div className="text-center mt-16">
            <button
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
              onClick={() => navigate('/')}
            >
              Back to Home →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
