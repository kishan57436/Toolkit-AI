// import React from 'react';

// const Planss = () => {
//   return (
//     <div className="min-h-screen bg-white py-20 px-4">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
//         <p className="text-lg text-gray-500 mb-12">
//           Start for free and scale up as you grow. Find the perfect plan for your content creation needs.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Free Plan */}
//           <div className="border rounded-2xl shadow-md p-6 md:p-10 text-left flex flex-col justify-between">
//             <div>
//               <h3 className="text-2xl font-semibold text-gray-900 mb-2">Free</h3>
//               <p className="text-3xl font-bold text-gray-900">$0 <span className="text-base font-normal text-gray-500">/ Always free</span></p>

//               <ul className="mt-6 space-y-2 text-gray-700">
//                 <li>✓ Title Generation</li>
//                 <li>✓ Article Generation</li>
//               </ul>
//             </div>

//             <button className="mt-8 bg-gray-900 text-white w-full py-3 rounded-lg hover:bg-gray-800 transition">
//               Switch to this plan
//             </button>
//           </div>

//           {/* Premium Plan */}
//           <div className="border rounded-2xl shadow-md p-6 md:p-10 text-left relative flex flex-col justify-between">
//             <div>
//               <div className="absolute top-4 right-4 px-3 py-1 text-sm bg-gray-900 text-white rounded-full">Active</div>
//               <h3 className="text-2xl font-semibold text-gray-900 mb-2">Premium</h3>
//               <p className="text-3xl font-bold text-gray-900">$16 <span className="text-base font-normal text-gray-500">/ month</span></p>
//               <p className="text-sm text-gray-500 mt-1">Only billed monthly</p>

//               <ul className="mt-6 space-y-2 text-gray-700">
//                 <li>✓ Title Generation</li>
//                 <li>✓ Article Generation</li>
//                 <li>✓ Generate images</li>
//                 <li>✓ Remove Background</li>
//                 <li>✓ Remove Object</li>
//                 <li>✓ Resume Review</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Planss;
import React from 'react';
import Navbar from './Navbar'; // ✅ Make sure this path is correct based on your folder structure

const Planss = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar /> {/* ✅ Navbar added at the top */}
      <div className="py-20 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
        <p className="text-lg text-gray-500 mb-12">
          Start for free and scale up as you grow. Find the perfect plan for your content creation needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="border rounded-2xl shadow-md p-6 md:p-10 text-left flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Free</h3>
              <p className="text-3xl font-bold text-gray-900">
                $0 <span className="text-base font-normal text-gray-500">/ Always free</span>
              </p>

              <ul className="mt-6 space-y-2 text-gray-700">
                <li>✓ Title Generation</li>
                <li>✓ Article Generation</li>
              </ul>
            </div>

            <button className="mt-8 bg-gray-900 text-white w-full py-3 rounded-lg hover:bg-gray-800 transition">
              Switch to this plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="border rounded-2xl shadow-md p-6 md:p-10 text-left relative flex flex-col justify-between">
            <div>
              <div className="absolute top-4 right-4 px-3 py-1 text-sm bg-gray-900 text-white rounded-full">Active</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Premium</h3>
              <p className="text-3xl font-bold text-gray-900">
                $16 <span className="text-base font-normal text-gray-500">/ month</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">Only billed monthly</p>

              <ul className="mt-6 space-y-2 text-gray-700">
                <li>✓ Title Generation</li>
                <li>✓ Article Generation</li>
                <li>✓ Generate images</li>
                <li>✓ Remove Background</li>
                <li>✓ Remove Object</li>
                <li>✓ Resume Review</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planss;
