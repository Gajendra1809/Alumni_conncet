import { Router } from "express";
import { getJobs, createJob, getJobsByUser, deleteJob } from "../controllers/job.controller.js";
import authenticate from "../middlewares/authenticate.middleware.js";

const router = Router();

router.get('/jobs', getJobs);
router.get('/job', authenticate, getJobsByUser);
router.post('/job', authenticate, createJob);
router.delete('/job/:id', authenticate, deleteJob);

export default router