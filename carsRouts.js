import express from "express";
import * as carsControler from "../controllers/care.js";

const router = express.Router();

router.get("/", carsControler.getAllCars);
router.get("/:id", carsControler.getCareById);
router.delete("/id", carsControler.deleteCare);
router.post("/", carsControler.addCare);
router.put("/:careid", carsControler.updateCare);


export default router;