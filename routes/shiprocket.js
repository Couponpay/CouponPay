import express from "express";
import ShiprocketController from "../controllers/ShiprocketController";
const router = express.Router();

router.post('/callback', ShiprocketController.CallbackFunctionality);

export default router;