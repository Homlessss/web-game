import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URL;

        if(!mongoURI)
            throw new Error("MongoDB URI isn't defined in the environment");
        await mongoose.connect(mongoURI, {});
        console.log("Connected to mongodb");
    } catch (error) {
        console.log(error)
    }
};

export default connectMongoDB;