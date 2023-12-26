// import { care } from "./routs/care.js";
import mongoose from "mongoose";
// import { Cares } from "./carsSchema.js";
import { Care, CareValidator } from "../models/care.js";

export const getAllCars = async (req, res) => {
    let { search, name, price, campany } = req.query;
    try {
        let allCars;
        let searchObject = {};
        if (!search)
            searchObject.name = new RegExp(search, "i");
        if (!price)
            searchObject.price = price;
        allCars = await Care.find(searchObject)
            .sort({ name: -1, price: 1 })
            .skilp(price - 1)
            .limit((campany));

        res.json(allCars)
    }
    catch (err) {
        res.status(400).send("i am sorry")
    }
}


export const getCareById = async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id))
            return res.status(400).send("id is not good")

        let care = await Cares.findById(req.params.id)
        if (!care)
            res.status(404).send("not found")

        res.json(care)
    }

    catch (err) {
        res.status(400).send("cannot get the care")
    }
}



export const deleteCare = async (req, res) => {
    let { id } = req.params;
    if (!mongoose.isValidObjectId(id))
        return res.status(400).send("not valid id")

    let detailsCare = await Cares.findByIdAndDelete(id)
    if (!detailsCare)
        res.status(404).send("not found care whis this id")
    return res.json(deleteCare)
}


export const addCare = async (req, res) => {
    let { name, price, campany } = req.body;
    let validate = CareValidator(req.body);
    if (validate.err)
        return res.status(404).send(validate.err[0])
    try {
        let sameCars = await Cares.find({ name, price, campany })
        if (sameCars.length > 0)
            return res.status(409).send("ther is a care whis this name and this price from this campany")

        let newCare = await Cares.create({ name, price, campany })

        return res.status(201).json(newCare)
    }
    catch (err) {
        res.status(400).send("cannot add")
    }
}


export const updateCare = async (req, res) => {
    let { careId } = req.params;
    if (!mongoose.isValidObjectId(careId))
        try {
            let carsToUpdate = await Cares.findById(careId);
            if (!carsToUpdate)
                return res.status(400).send("not found a care whis this id")
            carsToUpdate.name = req.bodt.name || carsToUpdate.name;
            carsToUpdate.price = req.bodt.price || carsToUpdate.price;
            carsToUpdate.campany = req.bodt.campany || carsToUpdate.campany;

            await carsToUpdate.save();
            res.json(carsToUpdate)
        }
        catch (err) {
            res.status(400).send("i am sorry i cant apdate")
        }
}




