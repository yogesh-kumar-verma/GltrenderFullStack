const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

module.exports = async function main() {
  await mongoose.connect(process.env.mongodconnect);
  // await mongoose.connect(
  //  mongodconnect
  // );

  console.log("database connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
};
