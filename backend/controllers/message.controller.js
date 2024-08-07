import Message from "../models/Message.js";

export const getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: messages });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

export const getMessageByUser = async (req, res) => {
    try {
        const messages = await Message.find({ user_id: req.user._id}).sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: messages });   
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
} 

export const createMessage = async (req, res) => {
    try {
        const newMessage = await Message.create({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
            user_id: req.body.user_id
        });
        res.status(200).json({ success: true, data: newMessage });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}