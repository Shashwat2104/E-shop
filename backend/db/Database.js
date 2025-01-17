const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = async () => {
  try {
    const dbUrl = process.env.DB_URL; // Use environment variable for DB URL
    if (!dbUrl) {
      throw new Error("Database URL is not defined in environment variables.");
    }

    await mongoose.connect(dbUrl, {
      useNewUrlParser: true, // Ensures compatibility with the connection string
      useUnifiedTopology: true, // Optimizes connection management
    });

    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Failed to connect to MongoDB:");
    console.error(`Error Message: ${error.message}`);
    // Optional: Log stack trace for detailed debugging in development
    if (process.env.NODE_ENV === "development") {
      console.error(error.stack);
    }
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDatabase;

