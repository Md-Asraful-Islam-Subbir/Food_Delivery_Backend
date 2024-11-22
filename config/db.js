import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:12345@cluster0.pkpq7qs.mongodb.net/food_delreact');
        console.log("Database Connected Successfully");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
}
