import express from "express";
import CronMediator from "../mediators/CronMediator";
const router = express.Router();

router.post('/Shop_Keepers_Trimmer_Share_Distribution_Shops', CronMediator.Shop_Keepers_Trimmer_Share_Distribution_Shops);

router.post('/Trimmer_Share_Distribution_For_Referal_Buyers', CronMediator.Trimmer_Share_Distribution_For_Referal_Buyers);

// router.post('/Expired_Offer_Credit_Amount_In_Company', CronMediator.Expired_Offer_Credit_Amount_In_Company);

router.post('/Make_Bonanza_Live_Complete', CronMediator.Make_Bonanza_Live_Complete);

router.post('/Buyer_Bonanza_Matrix_Calculation', CronMediator.Buyer_Bonanza_Matrix_Calculation);

export default router;