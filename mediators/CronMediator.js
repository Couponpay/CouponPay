let CronMediator = function () { };
import ApiMessages from "../config/ApiMessages";
import CommonController from "../controllers/CommonController";
import { isBoolean, Boolify } from "node-boolify";
import CronController from "../controllers/CronController";

CronMediator.Buyer_Bonanza_Matrix_Calculation = async (req, res) => {
    try {
        if (
            req.body.SECRETCODE != null && req.body.SECRETCODE != ''
        ) {
            let ValidityStatus = await CommonController.Check_for_Secret_Code(req.body);
            res.json({ success: true, extras: { Status: "Processing the request" } })
            let Result = await CronController.Buyer_Bonanza_Matrix_Calculation();
            // res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

CronMediator.Make_Bonanza_Live_Complete = async (req, res) => {
    try {
        if (
            req.body.SECRETCODE != null && req.body.SECRETCODE != ''
        ) {
            let ValidityStatus = await CommonController.Check_for_Secret_Code(req.body);
            res.json({ success: true, extras: { Status: "Processing the request" } })
            let Result = await CronController.Make_Bonanza_Live_Complete();
            // res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

CronMediator.Expired_Offer_Credit_Amount_In_Company = async (req, res) => {
    try {
        if (
            req.body.SECRETCODE != null && req.body.SECRETCODE != ''
        ) {
            let ValidityStatus = await CommonController.Check_for_Secret_Code(req.body);
            res.json({ success: true, extras: { Status: "Processing the request" } })
            let Result = await CronController.Expired_Offer_Credit_Amount_In_Company();
            // res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

CronMediator.Trimmer_Share_Distribution_For_Referal_Buyers = async (req, res) => {
    try {
        if (
            req.body.SECRETCODE != null && req.body.SECRETCODE != ''
        ) {
            let ValidityStatus = await CommonController.Check_for_Secret_Code(req.body);
            res.json({ success: true, extras: { Status: "Processing the request" } })
            let Result = await CronController.Trimmer_Share_Distribution_For_Referal_Buyers();
            // res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

CronMediator.Shop_Keepers_Trimmer_Share_Distribution_Shops = async (req, res) => {
    try {
        if (
            req.body.SECRETCODE != null && req.body.SECRETCODE != ''
        ) {
            let ValidityStatus = await CommonController.Check_for_Secret_Code(req.body);
            res.json({ success: true, extras: { Status: "Processing the request" } })
            let Result = await CronController.Shop_Keepers_Trimmer_Share_Distribution_Shops();
            // res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

export default CronMediator;