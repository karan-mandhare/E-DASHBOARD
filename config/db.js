const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to MongoDB Database ${conn.connection.host}`.bgMagenta.white);
  } catch (err) {
    console.log(`Error in Mongodb ${err}`.bgRed.white);
  }
};

module.exports = {
  connectDB,
};
