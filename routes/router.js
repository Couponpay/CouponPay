import express from "express";
let router = express.Router();
import AppRouter from "./app";
import AdminRouter from "./admin";
import UploadRouter from "./upload";
import RazorpayRouter from "./razorpay";
import CronRouter from "./cron";
import ShiprocketRouter from "./shiprocket";
import CommonController from "../controllers/CommonController";


//Mobile Applications Apis
router.use('/app', AppRouter);

//Admin Dashboard Api's
router.use('/admin', AdminRouter);

//Upload Api's
router.use('/upload', UploadRouter);

//Cron Api's
router.use('/cron', CronRouter);

//Razorpay Callback Api's
router.use('/razorpay', RazorpayRouter);

//Razorpay Callback Api's
router.use('/shiprocket', ShiprocketRouter);

//Drop Total Database Except Admin
router.get('/Drop_All_Collections_Database', CommonController.Drop_All_Collections_Database);

export default router;