import express from "express";
import { getHome, getLogout, postLogin, postSignup } from "../controller/user.js";
const router = express.Router();

router.post("/signup", postSignup);
router.post("/login", postLogin);

router.get('/logout', getLogout)
router.get('/', getHome)
export default router;