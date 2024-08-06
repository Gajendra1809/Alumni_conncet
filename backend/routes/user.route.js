import { Router } from "express";
import { getUsers, getUser, login, register } from "../controllers/user.controller.js";

const router = Router();

router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.post('/login', login);
router.post('/register', register);

export default router