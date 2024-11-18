import mongoose from 'mongoose';
import dotenv from 'dotenv'; 
dotenv.config();
const connectDB = async () => {
  try {
    console.log('process.env.MONGO_URI', process.env.MONGO_URI);
    const mongoUri :string = 'mongodb+srv://piyushkumarhk007:piyush123@cluster0.7fqkb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
