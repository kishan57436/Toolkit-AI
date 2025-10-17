import multer from "multer";

const storage = multer.diskStorage({});

export const upload = multer({storage})




// What is diskStorage?

// In Multer, diskStorage is a storage engine that tells Multer where and how to store uploaded files on your server’s disk.

// By default, Multer stores files in memory (RAM), which isn’t good for large files.

// With diskStorage, Multer writes files directly to your computer/server (like inside an uploads/ folder).

// 🔹 How it works

// multer.diskStorage() takes an object with two functions:

// this is the best thing you can do this so easily without any problem yes

// destination → decides the folder where the file will be saved.

// filename → decides what the saved file will be called.


// this is the worry abou tthe problem
// we can solved the answer
// without anhy problem



// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Save to uploads folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname); // Unique file name
//   }
// });

// export const upload = multer({ storage });
