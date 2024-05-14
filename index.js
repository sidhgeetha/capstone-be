// import mongoose

const mongoose = require("mongoose");

// const config = require("./utils/config");

console.log("connecting to MongoDB...");


// import app from app.js
const app = require("./app");

//connecting to MOongoDB



mongoose
  .connect("mongodb+srv://sidhgeetha:Guvi2024@cluster0.gts1nzk.mongodb.net/capstone-db")
  .then(() => {
    console.log("connected to MongoDB"); 

    //after db connection, start server
    app.listen(3001, () => {
      console.log("server is running on port 3001");
    });
  })

  .catch((error) => {
    console.log("Connection failed", error.message);
  });
//index.js for db connectivity & application sever connectivity
