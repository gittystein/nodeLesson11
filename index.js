import express from "express";
import { config } from "dotenv";
import careRouter from "./routs/care.js";
import userRouter from "./routs/user.js";
import {connectToDB} from "./config/dbConfig.js";

config();
connectToDB();

const app = express();
app.use(express.json())

app.use("/api/care", careRouter);
app.use("/api/user", userRouter);

app.use((err, req, res, next) => {
    res.status(res.statusCode || 500);
    res.send(err.message || "its a problem")
})

let port = process.env.PORT || 4000;

app.listen(port => { console.log(`app is listening on port ${port}`) })
