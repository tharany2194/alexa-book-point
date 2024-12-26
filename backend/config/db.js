import mongoose from 'mongoose'

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://tharanysivapaskaran:online-Book-Store24122024@cluster0.0iw51.mongodb.net/online-bookstore').then(()=>console.log("DB Connected"))
}