import mongoose from "mongoose";
import * as roleType from "./roleTypes.js";
import { string } from "joi";

const userSchema = mongoose.Schema({
    userName: String,
    email: { type: String, unique: true },
    password: String,
    roles: { type: String, default: roleType.USER },
}, { timestamps: true }
)

export const User = mongoose.model("users", userSchema)