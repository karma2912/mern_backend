const mongoose = require('mongoose');

// Load connection string from environment variable
const mongoURI = process.env.MONGO_URI;

const connectToMongo = async () => {
  try {
    // Set Mongoose options to avoid deprecation warnings
    mongoose.set('strictQuery', false);

    // Connect to MongoDB
    await mongoose.connect(mongoURI);

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    // Optionally, you can exit the process if needed
    // process.exit(1);
  }
};

// Export the connection function
module.exports = connectToMongo;