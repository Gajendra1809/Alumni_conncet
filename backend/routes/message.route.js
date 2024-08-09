import { Router } from "express";
import { getMessages, createMessage, getMessageByUser, markAsRead,getReadMessages } from "../controllers/message.controller.js";
import authenticate from "../middlewares/authenticate.middleware.js";

const router = Router();

router.post('/message', createMessage);
router.get('/message', authenticate, getMessageByUser);
router.get('/readmessage', authenticate, getReadMessages);
router.put('/markasread/:id', authenticate, markAsRead);

export default router