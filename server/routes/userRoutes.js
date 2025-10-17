// import express from "express";
// import { auth } from "../middlewares/auth.js";
// import { getPublishedCreations, getUserCreations, toggleLikeCreation } from "../controllers/userController.js";

// const userRouter = express.Router();

// // we just write down the router 
// // this is the worst situation ever we knew that how it will changes the automatically basically 


// userRouter.get('/get-user-creations', auth, getUserCreations)
// userRouter.get('/get-published-creations', auth, getPublishedCreations)
// userRouter.post('/toggle-like-creation', auth, toggleLikeCreation)

// export default userRouter;
import express from "express";
import { auth } from "../middlewares/auth.js";
import { 
  getPublishedCreations, 
  getUserCreations, 
  toggleLikeCreation 
} from "../controllers/userController.js";

const userRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User-related APIs
 */

/**
 * @swagger
 * /api/user/get-user-creations:
 *   get:
 *     summary: Get all creations of a logged-in user
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of user creations
 */
userRouter.get("/get-user-creations", auth, getUserCreations);

/**
 * @swagger
 * /api/user/get-published-creations:
 *   get:
 *     summary: Get all published creations
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of published creations
 */
userRouter.get("/get-published-creations", auth, getPublishedCreations);

/**
 * @swagger
 * /api/user/toggle-like-creation:
 *   post:
 *     summary: Like/Unlike a creation
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               creationId:
 *                 type: string
 *                 example: "64a7c3f4d5b21c8a12345678"
 *     responses:
 *       200:
 *         description: Like status toggled
 */
userRouter.post("/toggle-like-creation", auth, toggleLikeCreation);

export default userRouter;
