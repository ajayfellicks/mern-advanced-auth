import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("mongo_url: ", process.env.MONGO_URL);
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connection to MongoDB: ", error.message);
    process.exit(1);
  }
};
