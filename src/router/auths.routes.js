import express from "express";
import AuthController from "../controller/auth.Controller.js";

const router = express.Router();
const authController = new AuthController();

router.post('/register', authController.postRegister);
router.get('/', authController.getLoginPage);
router.post('/login', authController.postLogin);
router.post('/logout', authController.postLogout);

export default router;