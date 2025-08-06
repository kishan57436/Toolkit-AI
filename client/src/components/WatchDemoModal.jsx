// import React from "react";

// const WatchDemoModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
//       <div className="bg-white rounded-xl overflow-hidden max-w-3xl w-full shadow-lg relative">
//         <div className="relative pb-[56.25%]"> {/* 16:9 aspect ratio */}
//           <iframe
//             className="absolute top-0 left-0 w-full h-full"
//             src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video link
//             title="Demo Video"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//         <button
//           onClick={onClose}
//           className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-medium text-lg transition"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default WatchDemoModal;
// components/WatchDemoModal.jsx

import React from "react";
import { X } from "lucide-react";

const WatchDemoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white bg-opacity-95 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Video Player */}
        <div className="p-6">
          <video
            src="/videos/demo.mp4" // 🟡 Make sure to place demo.mp4 in the public/videos folder
            controls
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WatchDemoModal;
