import mongoose from "mongoose";
import { stringify } from "querystring";

const carsSchema = mongoose.Schema({
    name: {type: stringify, require: true},
    price: Number,
    campany: String
})

export const Cares = mongoose.model("cars", carsSchema)