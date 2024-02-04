import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected To Mongodb Database ${conn.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.error(`Error in Mongodb ${error}`.bgRed.white);
    process.exit(1); // Escape with error code 1
  }
};

export default connectDB;
