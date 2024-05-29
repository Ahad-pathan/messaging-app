import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ahadpathan0786:5cp8h8wGHX40E069@cluster0.2xy4fw0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

export default connectToMongoDB;
