import { User } from "../models/user.js";
import bcrypt from "bcryptjs";

export const addUser = async (req, res) => {
    try {
        let { userName, passeord, email } = req.body;
        if (!userName || !email || !passeord)
            return res.status(404).send("missing parameter user name password or email")
        if (!/[0-9]{3}[A-Za-z]{2}/.test(password))
            return res.status(400).send("password not valid")

        let hashedPassword = await bcrypt.hash(passeord, 30);
        let sameUser = await User.find({ userName, passeord: hashedPassword, email })
        await sameUser.save();
        res.json(sameUser);
    }

    catch (err) {
        res.status(500).send("an error ")
    }
}


export const login = async (req, res) => {
    try {
        let { userName, password } = req.body;
        if (!userName || !password)
            return res.status(404).send("missing parameter user name or password")
        if (!/[0-9]{3}[A-Za-z]{2}/.test(password))
            return res.status(400).send("password not valid")

        let loggedInUser = await User.findOne({ userName });
        if (!loggedInUser)
            return res.status(404).send("no user with this cradentials")
        if (!await bcrypt.compare(password, loggedInUser.password))
            return res.status(404).send("no user with this cradentials")

        let { userName: u, _id, email } = loggedInUser;
        res.json({ userName: u, _id, email });
    }

    catch (err) {
        res.status(500).send("an error ")
    }
}

export const getAllUserr = async (req, res) => {
    try {
        let allUsers = await User.find({}, "-password");
        res.json(allUsers);
    }
    catch (err) {
        res.status(500).send("an error ")
    }
}