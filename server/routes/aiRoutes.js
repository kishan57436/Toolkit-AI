// import express from "express";
// import { auth } from "../middlewares/auth.js";
// import { generateArticle, generateBlogTitle, generateImage, removeImageBackground, removeImageObject, resumeReview } from "../controllers/aiController.js";
// import { upload } from "../configs/multer.js";

// const aiRouter = express.Router();

// aiRouter.post('/generate-article', auth, generateArticle)
// aiRouter.post('/generate-blog-title', auth, generateBlogTitle)
// aiRouter.post('/generate-image', auth, generateImage)

// aiRouter.post('/remove-image-background', upload.single('image'), auth, removeImageBackground)

// aiRouter.post('/remove-image-object', upload.single('image'), auth, removeImageObject)

// aiRouter.post('/resume-review', upload.single('resume'), auth, resumeReview)

// export default aiRouter



// // here we have created aour rotues to help them out to worrry about the problem so easily

// //import express from 'express''
// //const import auth form midldleware
// // const rotueer=expresss.Rotuer();
// // rotuer.post('/generate-artilce',auth,genaratearticel);
// // this way we can dothe thing so easily without any proble lets nto think about
// // the soluton 
// // this is the problme we can solved so easily withou tay probme 
// // thhis is all about the problme to solved the problem so easily without any worry lets solved them
// //

import express from "express";
import { auth } from "../middlewares/auth.js";
import { 
  generateArticle, 
  generateBlogTitle, 
  generateImage, 
  removeImageBackground, 
  removeImageObject, 
  resumeReview 
} from "../controllers/aiController.js";
import { upload } from "../configs/multer.js";

const aiRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: AI
 *   description: AI-powered APIs
 */

/**
 * @swagger
 * /api/ai/generate-article:
 *   post:
 *     summary: Generate an AI-based article
 *     tags: [AI]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Article generated successfully
 */
aiRouter.post("/generate-article", auth, generateArticle);

/**
 * @swagger
 * /api/ai/generate-blog-title:
 *   post:
 *     summary: Generate a blog title using AI
 *     tags: [AI]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Blog title generated
 */
aiRouter.post("/generate-blog-title", auth, generateBlogTitle);

/**
 * @swagger
 * /api/ai/generate-image:
 *   post:
 *     summary: Generate an image using AI
 *     tags: [AI]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Image generated successfully
 */
aiRouter.post("/generate-image", auth, generateImage);

/**
 * @swagger
 * /api/ai/remove-image-background:
 *   post:
 *     summary: Remove the background from an uploaded image
 *     tags: [AI]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Background removed
 */
aiRouter.post("/remove-image-background", upload.single("image"), auth, removeImageBackground);

/**
 * @swagger
 * /api/ai/remove-image-object:
 *   post:
 *     summary: Remove an object from an uploaded image
 *     tags: [AI]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Object removed
 */
aiRouter.post("/remove-image-object", upload.single("image"), auth, removeImageObject);

/**
 * @swagger
 * /api/ai/resume-review:
 *   post:
 *     summary: Upload a resume for AI review
 *     tags: [AI]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               resume:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Resume review completed
 */
aiRouter.post("/resume-review", upload.single("resume"), auth, resumeReview);

export default aiRouter;
