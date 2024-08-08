import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    resume: {
        type: String,
        required: true
    },
    job_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'jobs'
    },
    read: {
        type: Boolean,
        default: false
    }
},{ timestamps: true })

const Application = mongoose.model('applications', ApplicationSchema);
export default Application