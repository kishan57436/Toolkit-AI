// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// import { clerkMiddleware, requireAuth } from '@clerk/express'
// import aiRouter from './routes/aiRoutes.js';
// import connectCloudinary from './configs/cloudinary.js';
// import userRouter from './routes/userRoutes.js';

// const app = express()
 

// await connectCloudinary()

// app.use(cors())
// app.use(express.json())
// app.use(clerkMiddleware())

// app.get('/', (req, res)=>res.send('Server is Live!'))

// // app.get('/',(req,res)=>{
// //     res.send('server is live ')
// // })
// // what is the req and res in always request then now this is the possible 

// app.use(requireAuth())

// app.use('/api/ai', aiRouter)
// app.use('/api/user', userRouter)

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, ()=>{
//     console.log('Server is running on port', PORT);
// })


// app.listen(PORT,()=>{
//     // arrwo finctuin to perform the task and pritn tsomeinet app. listen it ill print the out which is aid over here
// })
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import aiRouter from './routes/aiRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import userRouter from './routes/userRoutes.js';



// 👉 import swagger setup
import { swaggerUi, swaggerSpec } from "./configs/swagger.js"

const app = express();
await connectCloudinary();

app.use(cors());
app.use(express.json());
// ...existing code...

// Swagger docs route (should be public)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Only apply Clerk middleware to non-Swagger routes
// app.use((req, res, next) => {
//   if (req.path.startsWith("/api-docs")) {
//     return next(); // Skip Clerk for Swagger docs
//   }
//   return clerkMiddleware()(req, res, next);
// });

// ...existing code...
// app.use(clerkMiddleware());


// ✅ Swagger UI docs route


// ...existing code...

app.get('/', (req, res) => res.send('Server is Live!'));
// filepath: c:\Users\kishan kumawat\Downloads\saas ai\QuickAI-Full-Stack\server\server.js
app.get('/test-public', (req, res) => res.send('Public route works!'));

// ✅ Protect only API routes
app.use('/api/ai', requireAuth(), aiRouter);
app.use('/api/user', requireAuth(), userRouter);

// ...existing code...

const PORT =  process.env.PORT||3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});

