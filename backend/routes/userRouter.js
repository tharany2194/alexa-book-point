import express from "express"
import {loginUser , registerUser,verifyEmail} from "../controllers/userController.js"

const userRouter = express.Router();

userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser)
// Route for email verification
userRouter.get('/verify-email', verifyEmail);






export default userRouter;


