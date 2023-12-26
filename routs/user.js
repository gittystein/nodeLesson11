import express from "express";
import * as carsControler from "../controllers/care.js";

const router = express.Router();

router.get("/", userControler.getAllUsers);
router.post("/", userControler.login);
router.post("/", userControler.addUser);


export default router;