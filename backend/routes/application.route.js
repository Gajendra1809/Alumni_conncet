import { Router } from "express";
import { createApplication, getApplications, markAsRead } from "../controllers/application.controller.js";
import upload from "../middlewares/multer.middleware.js";
import authenticate from "../middlewares/authenticate.middleware.js";

const router = Router();

router.get('/application', authenticate, getApplications);
router.post('/application', upload.single('resume'), createApplication);
router.put('/markasread/:id', authenticate, markAsRead);

export default router
