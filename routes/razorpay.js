import express from "express";
import RazorpayController from "../controllers/RazorpayController";
const router = express.Router();

router.post('/callback', RazorpayController.CallbackInFunctionality);

export default router;