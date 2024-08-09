import Job from "../models/Job.js";

export const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find().populate("user_id","name").sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: jobs });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

export const getJobsByUser = async (req, res) => {
    const id = req.user._id;
    try {
        const jobs = await Job.find({ user_id: id }).sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: jobs });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

export const createJob = async (req, res) => {
    try {
        const newJob = await Job.create({
            position: req.body.position,
            company: req.body.company,
            description: req.body.description,
            user_id: req.user._id
        });
        res.status(200).json({ success: true, data: newJob });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

export const deleteJob = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedJob = await Job.findByIdAndDelete(id);
        res.status(200).json({ success: true, data: deletedJob });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}
        