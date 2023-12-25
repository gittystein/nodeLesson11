import express from "express";
import {config} from "dotenv";
import cars from "./routs/care.js"
import mongoose from "mongoose";

config();
const mongoURI = process.env.DB_CONNECTION || "mongodb://lockalhost:27017/cars";
mongoose.connect(mongoURI)
.then((suc) => {"mongodb conected sucessfully"})
.catch(err => {
    console.log("cannot conected mongodb")
    console.log(err)
    process.exit(1)
}) 

app.use(express.json())

app.use("/api/care");

let port = process.env.PORT || 4000;

app.listen(port => {console.log(`app is listening on port ${port}`)})

const app = express();