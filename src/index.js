// require('dotenv').config({path: './env'})
import('dotenv').then((dotenv) => {
  dotenv.config({ path: './.env' });
});
import {app} from './app.js'
import connectDB from "./db/index.js";
// import { connect } from "mongoose";


connectDB()
.then(() => {
    app.listen(process.env.PORT || 4000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

















// import express from "express"
// const app= express()
// import mongoose from 'mongoose'

// const MONGODB_URI= "mongodb://localhost:27017/chai-db"
// const port=8000

// const connectDB = async () => {
//   try {
//       await mongoose.connect(MONGODB_URI);
//       console.log('MongoDB connected successfully');
//   } catch (error) {
//       console.error('MongoDB connection failed:', error);
//       process.exit(1);
//   }
// };

// app.listen(port, (req, resp)=>{
//   console.log("Server is running");
// })

// connectDB()

