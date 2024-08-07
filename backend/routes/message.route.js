import { Router } from "express";
import { getMessages, createMessage, getMessageByUser } from "../controllers/message.controller.js";
import authenticate from "../middlewares/authenticate.middleware.js";

const router = Router();

router.post('/message', createMessage);
router.get('/message', authenticate, getMessageByUser);

export default router