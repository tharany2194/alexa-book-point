import express from 'express'
import cors from "cors"
import { connectDB } from './config/db.js';
import userRouter from './routes/userRouter.js';
import dotenv from 'dotenv';
dotenv.config();
import orderRouter from './routes/orderRouter.js';




//app config
const app = express()
const port = 4000;

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/user",userRouter);
app.use("/api/order",orderRouter);
app.use("/api", userRouter);


app.get("/", (req,res)=>{
    res.send("API working");
})

app.listen(port,()=>{
    console.log (`Server started on http://localhost:${port}`);
})


//mongodb+srv://tharanysivapaskaran:online-Book-Store24122024@cluster0.0iw51.mongodb.net/?
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmJiZjliZGNiY2FmNzZmODU3YTdkZCIsImlhdCI6MTczNTExNDY1MX0.IEkrO2nm-snCHS635H6vkzOiptxw3Fyk4Ze_qYGgCMw
//stripe:sk_test_51QD2tcFFoCiJwUinSNcoj9B7AyEn37lgTxZ7CrL9cCiJWIkmWtXDkYLyh1lWX1qyDXKTpEaYUHz9fCseGcOrQs1J00TjlbTCDq