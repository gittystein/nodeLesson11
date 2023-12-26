import Joi from "joi";
import mongoose from "mongoose";

const carsSchema = mongoose.Schema({
    name: {type: stringify, require: true},
    price: Number,
    campany: String
})

export const Cares = mongoose.model("cars", carsSchema);

export const careValidator = (_careToValidator) => {
    let careJoi = Joi.object({
        name: Joi.string().min(5).max(9),
        price: Joi.number().min(100000).max(100000000),
    })
    return careJoi.validate(_careToValidator);
}