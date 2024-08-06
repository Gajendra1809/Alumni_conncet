import Job from "../models/Job.js";

export const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}