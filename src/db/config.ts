import mongoose from "mongoose";
import Logger from "../lib/logger";

export async function connectToMongoDB() {
    if (!process.env.MONGODB_URL) {
        Logger.error("MONGODB_URL is not specified in environment variables");
        throw new Error("MONGODB_URL is not specified in environment variables");
    }

    const options = {
        connectTimeoutMS: 30000,
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    };

    try {
        await mongoose.connect(process.env.MONGODB_URL!, options);
        Logger.success("Connected to MongoDB");
    } catch (error) {
        Logger.error("Failed to connect to MongoDB", error);
        throw new Error("Failed to connect to the MongoDB database");
    }
}

export async function closeMongoDB() {
    await mongoose.disconnect();
}
