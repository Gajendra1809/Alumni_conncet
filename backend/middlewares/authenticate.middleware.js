import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
        console.log("token not found");
        return res.status(401).send("Access Denied. No Token Provided");
    }

    const token = authHeader.split(' ')[1]; // Extracting the token from the "Bearer <token>" format
    if (!token) {
        console.log("token not found");
        return res.status(401).send("Access Denied. No Token Provided");
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send("Invalid Token");
    }
}

export default authenticate