import React from 'react'
import {PricingTable} from '@clerk/clerk-react'

// const Plan = () => {
//   return (
//     <div className='max-w-2xl mx-auto z-20 my-30'>

//       <div className='text-center'>
//         <h2 className='text-slate-700 text-[42px] font-semibold'>Choose Your Plan</h2>
//         <p className='text-gray-500 max-w-lg mx-auto'>Start for free and scale up as you grow. Find the perfect plan for your content creation needs.</p>
//       </div>

//       <div className='mt-14 max-sm:mx-8'>
//         <PricingTable />
//       </div>

//     </div>
//   )
// }

// export default Plan
const Plan = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 z-20 relative">
      <div className="text-center mb-12">
        <h2 className="text-slate-800 text-4xl font-bold">Choose Your Plan</h2>
        <p className="text-gray-500 max-w-xl mx-auto mt-4">
          Start for free and scale up as you grow. Find the perfect plan for your content creation needs.
        </p>
      </div>

      <div className="mt-10">
        <PricingTable />
      </div>
    </div>
  );
};
export default Plan