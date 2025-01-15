// const mongoose = require("mongoose");

// const connectDatabase = () => {
//   mongoose
//     .connect(process.env.DB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then((data) => {
//       console.log(`mongod connected with server: ${data.connection.host}`);
//     });
// };

// module.exports = connectDatabase;

const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = async () => {
  try {
    // await mongoose.connect(process.env.DB_URL);
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.qoffovv.mongodb.net/mydatabase",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDatabase;
