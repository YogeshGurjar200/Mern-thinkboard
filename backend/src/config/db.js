import mongoose from "mongoose"
import * as dotenv from "dotenv"

dotenv.config()

  const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB CONNECTED SUCCESSFULLY ")
        
    } catch (error) {
        console.error("error connecting to MongoDB",error);
        process.exit(1); 
    }
        
}
export default connectDB;