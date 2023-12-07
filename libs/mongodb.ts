import mongoose from "mongoose";

const connectMongoDB = async () => {
  // const mongoURI = process.env.MONGODB_URI;

  try {
    // if (!mongoURI)
    //   throw new Error("MongoDB URI isn't defined in the environment");
    // else{
    //   await mongoose.connect(mongoURI);
    //   console.log("Connected to mongodb");
    // }

    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connected to MongoDB!");

  } catch (error) {
    console.log(error)
  }
};

export default connectMongoDB;