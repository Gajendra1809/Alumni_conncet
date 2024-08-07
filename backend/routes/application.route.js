import { Router } from "express";
import { createApplication, getApplications } from "../controllers/application.controller.js";

const router = Router();

router.get('/application', getApplications);
router.post('/application', createApplication);

export default router
