import Application from "../models/Application.js";

export const getApplications = async (req, res) => {
    try {
        const applications = await Application.find({read: false}).sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: applications });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

export const createApplication = async (req, res) => {
    try {
        const newApplication = await Application.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            resume: req.file.path,
            job_id: req.body.job_id
        });
        res.status(200).json({ success: true, data: newApplication });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

export const markAsRead = async (req, res) => {
    try {
        const application = await Application.findById(req.params.id);
        application.read = true;
        await application.save();
        res.status(200).json({ success: true, data: application });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

