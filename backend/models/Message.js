import mongoose from "mongoose";


const MessageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
},{timestamps:true});

const Message = mongoose.model('messages', MessageSchema);
export default Message