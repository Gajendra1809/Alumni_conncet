import jwt from "jsonwebtoken";
import User from "../models/User.js";

const authenticate = async (req, res, next) => {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
        console.log("token not found");
        return res.status(401).send({ success: false, message: "Access Denied. No Token Provided" });
    }

    const token = authHeader.split(' ')[1]; // Extracting the token from the "Bearer <token>" format
    if (!token) {
        console.log("token not found");
        return res.status(401).send({ success: false, message: "Access Denied. No Token Provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded.id });
        req.user = user;
        next();
    } catch (error) {
        res.status(400).send({ success: false, message: error.message });
    }
}

export default authenticate