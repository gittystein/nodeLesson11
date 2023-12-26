import mongoose from "mongoose";


export const connectToDB = () => {
const mongoURI = process.env.DB_CONNECTION || "mongodb://lockalhost:27017/cars";
mongoose.connect(mongoURI)
.then((suc) => {console.log("mongodb conected sucessfully")})
.catch(err => {
    console.log("cannot conected mongodb")
    console.log(err)
    process.exit(1)
}) 
}