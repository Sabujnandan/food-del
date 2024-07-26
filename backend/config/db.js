import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sabujnandan41:8335860037@cluster0.b9tmo4w.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}