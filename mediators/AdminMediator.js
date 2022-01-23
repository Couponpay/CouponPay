let AdminMediator = function () { };
import ApiMessages from "../config/ApiMessages";
import AdminController from "../controllers/AdminController";
import CommonController from "../controllers/CommonController";
import { isBoolean, Boolify } from "node-boolify";

AdminMediator.List_Box_Amount_Shares = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_Box_Amount_Shares(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Add_Update_Box_Amount_Shares = async (req, res) => {
    try {
        console.log("27--->"+JSON.stringify(req.body))
        if (
            req.body.AdminID != null && req.body.SessionID != null
            // && req.body.Box_Number != null && isFinite(req.body.Box_Number)
            && req.body.Price != null && isFinite(req.body.Price)
            && req.body.Image_Available != null && isBoolean(req.body.Image_Available)
            && req.body.ImageID != null && req.body.ImageID != ''
            && req.body.Description != null && req.body.Description != ''
            && req.body.Product_Name != null && req.body.Product_Name != ''
            && req.body.Box_One != null
            && req.body.Box_Two != null
            && req.body.Box_Three != null
            // && req.body.Cash_Percent != null && isFinite(req.body.Cash_Percent)
            // && req.body.Purchace_Percent != null && isFinite(req.body.Purchace_Percent)
            // && req.body.Gift_Percent != null && isFinite(req.body.Gift_Percent)
            // && req.body.Upgrade_Coupon_Percent != null && isFinite(req.body.Upgrade_Coupon_Percent)
            // && req.body.Nine_Level_Percent != null && isFinite(req.body.Nine_Level_Percent)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let ImageData = await CommonController.Check_for_Image(req.body);
            let Result = await AdminController.Add_Update_Box_Amount_Shares(req.body, ImageData);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_With_Draw_Gift_Amount_Requests = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            // && req.body.Active_Inactive_Status != null && isBoolean(req.body.Active_Inactive_Status)
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_With_Draw_Gift_Amount_Requests(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}


AdminMediator.Buyer_Purchase_Logs = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            // && req.body.Active_Inactive_Status != null && isBoolean(req.body.Active_Inactive_Status)
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Buyer_Purchase_Logs(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Activate_Inactivate_Gift_Meter = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Gift_MeterID != null && req.body.Gift_MeterID != ""
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Activate_Inactivate_Gift_Meter(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_Gift_Meter = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
            && req.body.Active_Inactive_Status != null && isBoolean(req.body.Active_Inactive_Status)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_Gift_Meter(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Check_For_Gift_Meter_SNo_Available = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.SNo != null && isFinite(req.body.SNo)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Check_For_Gift_Meter_SNo_Available(req.body);
            res.json({ success: true, extras: { Status: Result } });
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Update_Gift_Meter = async (req, res) => {
    try {
        
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.SNo != null && isFinite(req.body.SNo)
            && req.body.Title_Name != null && req.body.Title_Name != ""
            && req.body.Gift_MeterID != null && req.body.Gift_MeterID != ""
            && req.body.Image_Available != null && isBoolean(req.body.Image_Available)
            && req.body.Value != null && isFinite(req.body.Value)
            && req.body.ImageID != null && req.body.ImageID != ''
        ) {
            
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let ImageData = await CommonController.Check_for_Image(req.body);
            let Result = await AdminController.Update_Gift_Meter(req.body, ImageData);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Add_Gift_Meter = async (req, res) => {
    try {
        
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.SNo != null && isFinite(req.body.SNo)
            && req.body.Title_Name != null && req.body.Title_Name != ""
            && req.body.Image_Available != null && isBoolean(req.body.Image_Available)
            && req.body.Value != null && isFinite(req.body.Value)
            && req.body.ImageID != null && req.body.ImageID != ''
        ) {
            
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let ImageData = await CommonController.Check_for_Image(req.body);
            let Result = await AdminController.Add_Gift_Meter(req.body, ImageData);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Activate_Inactivate_Target_Referal = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Target_ReferalID != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Activate_Inactivate_Target_Referal(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_Target_Referals = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
            && req.body.Active_Inactive_Status != null && isBoolean(req.body.Active_Inactive_Status)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_Target_Referals(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Update_Target_Referal = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.SNo != null && isFinite(req.body.SNo)
            && req.body.Target_ReferalID != null && req.body.Target_ReferalID != ''
            && req.body.Target_Referal != null && isFinite(req.body.Target_Referal)
            && req.body.Wallet_Limit != null && isFinite(req.body.Wallet_Limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Update_Target_Referal(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Add_Target_Referal = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.SNo != null && isFinite(req.body.SNo)
            && req.body.Target_Referal != null && isFinite(req.body.Target_Referal)
            && req.body.Wallet_Limit != null && isFinite(req.body.Wallet_Limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Add_Target_Referal(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_Coupon_Products = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
            // && req.body.Active_Inactive_Status != null && isBoolean(req.body.Active_Inactive_Status)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_Coupon_Products(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Activate_Inactivate_Coupon_Products = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Coupons_ProductID != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Activate_Inactivate_Coupon_Products(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Check_For_Coupons_Product_SNo_Available = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.SNo != null && isFinite(req.body.SNo) && !isNaN(req.body.SNo)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Check_For_Coupons_Product_SNo_Available(req.body);
            res.json({ success: true, extras: { Status: Result } });
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Check_For_Target_Referal_SNo_Available = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.SNo != null && isFinite(req.body.SNo)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Check_For_Target_Referal_SNo_Available(req.body);
            res.json({ success: true, extras: { Status: Result } });
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Update_Coupon_Products = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Coupons_ProductID != null && req.body.Coupons_ProductID != ''
            && req.body.C_Product_Name != null && req.body.C_Product_Name != ''
            && req.body.C_Product_Description != null && req.body.C_Product_Description != ''
            && req.body.ImageID != null && req.body.ImageID != ''
            && req.body.SNo != null && isFinite(req.body.SNo)
            && req.body.C_Product_Price != null && isFinite(req.body.C_Product_Price)
            && req.body.Cash_Coupons_Share != null && isFinite(req.body.Cash_Coupons_Share)
            && req.body.Purchace_Coupons_Share != null && isFinite(req.body.Purchace_Coupons_Share)
            && req.body.Gift_Coupons_Share != null && isFinite(req.body.Gift_Coupons_Share)
            && req.body.Update_Coupons_Share != null && req.body.Update_Coupons_Share.length == 3
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let CouponsCategoryData = await CommonController.Check_for_Coupons_Product(req.body);
            // let ValidityStatus = await AdminController.Update_News_Validate_All(req.body);
            let ImageData = await CommonController.Check_for_Image(req.body);
            let Result = await AdminController.Update_Coupon_Products(req.body, ImageData);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Add_Coupon_Products = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.C_Product_Name != null && req.body.C_Product_Name != ''
            && req.body.C_Product_Description != null && req.body.C_Product_Description != ''
            && req.body.ImageID != null && req.body.ImageID != ''
            && req.body.SNo != null && isFinite(req.body.SNo)
            && req.body.C_Product_Price != null && isFinite(req.body.C_Product_Price)
            && req.body.Cash_Coupons_Share != null && isFinite(req.body.Cash_Coupons_Share)
            && req.body.Purchace_Coupons_Share != null && isFinite(req.body.Purchace_Coupons_Share)
            && req.body.Gift_Coupons_Share != null && isFinite(req.body.Gift_Coupons_Share)
            && req.body.Update_Coupons_Share != null && req.body.Update_Coupons_Share.length == 3
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            // let ValidityStatus = await AdminController.Add_News_Validate_All(req.body);
            let ImageData = await CommonController.Check_for_Image(req.body);
            let Result = await AdminController.Add_Coupon_Products(req.body, ImageData);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Accept_Reject_BuyerShare_Requests = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Buyer_Shop_request_ID != null && req.body.Buyer_Shop_request_ID != ""
            && req.body.Approve_Reject != null && req.body.Approve_Reject != ""
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Share_RequestData = await CommonController.Buyer_Shop_Request_Data(req.body);
            let ShopData = await CommonController.Check_For_User_Shop(Share_RequestData);
            let BuyerData = await CommonController.Check_for_Buyer(Share_RequestData);
            let Result = await AdminController.Accept_Reject_BuyerShare_Requests(req.body, ShopData, BuyerData, Share_RequestData);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_BuyerShare_Requests = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
            && req.body.Status != null && isFinite(req.body.Status)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_BuyerShare_Requests(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Accept_Reject_User_Shop = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Users_ShopsID != null && req.body.Users_ShopsID != ""
            && req.body.Approve_Reject != null && req.body.Approve_Reject != ""
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let ShopData = await CommonController.Check_For_User_Shop(req.body);
            let BuyerData = await CommonController.Check_for_Buyer(ShopData);
            let Result = await AdminController.Accept_Reject_User_Shop(req.body, ShopData, BuyerData);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_All_User_Shops = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
            && req.body.Status != null && isFinite(req.body.Status)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_All_User_Shops(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_Common_App_Setting = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            // && req.body.skip != null && isFinite(req.body.skip)
            // && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_Common_App_Setting(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Activate_Inactivate_Common_App_Setting = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Common_App_SettingsID != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Activate_Inactivate_Common_App_Setting(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Update_Common_App_Setting = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            // && req.body.Common_App_SettingsID != null && req.body.Common_App_SettingsID != ''
            && req.body.Self_Purchase_ID != null && isFinite(req.body.Self_Purchase_ID)
            && req.body.Direct_Refer_ID != null && isFinite(req.body.Direct_Refer_ID)
            && req.body.Nine_Levels != null && isFinite(req.body.Nine_Levels)
            && req.body.Trimming_For_IDs != null && isFinite(req.body.Trimming_For_IDs)
            && req.body.Shop_Keepers_Trimming != null && isFinite(req.body.Shop_Keepers_Trimming)
            && req.body.Company != null && isFinite(req.body.Company)
            && req.body.GST_Service_Store_etc_Amount != null && isFinite(req.body.GST_Service_Store_etc_Amount)
            && req.body.Box_One_Max_Amount != null && isFinite(req.body.Box_One_Max_Amount)
            && req.body.Box_Two_Max_Amount != null && isFinite(req.body.Box_Two_Max_Amount)
            && req.body.Box_Three_Max_Amount != null && isFinite(req.body.Box_Three_Max_Amount)
            && req.body.District_Price != null && isFinite(req.body.District_Price)
            && req.body.State_Price != null && isFinite(req.body.State_Price)
            && req.body.Pincode_Price != null && isFinite(req.body.Pincode_Price)
            && req.body.District_Share != null && isFinite(req.body.District_Share)
            && req.body.State_Share != null && isFinite(req.body.State_Share)
            && req.body.Pincode_Share != null && isFinite(req.body.Pincode_Share)
            && req.body.User_Shop_Price != null && isFinite(req.body.User_Shop_Price)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            // let ValidityStatus = await AdminController.Add_News_Validate_All(req.body);
            let Result = await AdminController.Update_Common_App_Setting(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Add_Common_App_Setting = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null

            && req.body.Self_Purchase_ID != null && isFinite(req.body.Self_Purchase_ID)
            && req.body.Direct_Refer_ID != null && isFinite(req.body.Direct_Refer_ID)
            && req.body.Nine_Levels != null && isFinite(req.body.Nine_Levels)
            && req.body.Trimming_For_IDs != null && isFinite(req.body.Trimming_For_IDs)
            && req.body.Shop_Keepers_Trimming != null && isFinite(req.body.Shop_Keepers_Trimming)
            && req.body.Company != null && isFinite(req.body.Company)
            && req.body.GST_Service_Store_etc_Amount != null && isFinite(req.body.GST_Service_Store_etc_Amount)
            && req.body.Box_One_Max_Amount != null && isFinite(req.body.Box_One_Max_Amount)
            && req.body.Box_Two_Max_Amount != null && isFinite(req.body.Box_Two_Max_Amount)
            && req.body.Box_Three_Max_Amount != null && isFinite(req.body.Box_Three_Max_Amount)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            // let ValidityStatus = await AdminController.Add_News_Validate_All(req.body);
            let Result = await AdminController.Add_Common_App_Setting(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Check_For_Coupons_Category_SNo_Available = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.SNo != null && isFinite(req.body.SNo) && !isNaN(req.body.SNo)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Check_For_Coupons_Category_SNo_Available(req.body);
            res.json({ success: true, extras: { Status: Result } });
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Activate_Inactivate_Coupons_Category = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Coupons_CategoryID != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Activate_Inactivate_Coupons_Category(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Update_Coupons_Category = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null && req.body.Coupons_CategoryID != null
            && req.body.Coupons_Category_Name != null && req.body.Coupons_Category_Name != ''
            && req.body.SNo != null && isFinite(req.body.SNo)
            && req.body.CC_Admin_Share_Percent != null && isFinite(req.body.CC_Admin_Share_Percent)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let CouponsCategoryData = await CommonController.Check_for_Coupons_Category_Data(req.body);
            // let ValidityStatus = await AdminController.Update_News_Validate_All(req.body);
            let Result = await AdminController.Update_Coupons_Category(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_Coupons_Category = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
            // && req.body.Active_Inactive_Status != null && isBoolean(req.body.Active_Inactive_Status)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_Coupons_Category(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Add_Coupons_Category = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Coupons_Category_Name != null && req.body.Coupons_Category_Name != ''
            && req.body.SNo != null && isFinite(req.body.SNo)
            && req.body.CC_Admin_Share_Percent != null && isFinite(req.body.CC_Admin_Share_Percent)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            // let ValidityStatus = await AdminController.Add_News_Validate_All(req.body);
            let Result = await AdminController.Add_Coupons_Category(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}


AdminMediator.List_All_App_Image_Resource = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.ResourceType != null && isFinite(req.body.ResourceType)
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_All_App_Image_Resource(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}


AdminMediator.Edit_App_Image_Resource = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.ImageID != null
            && req.body.ResourceID != null
            && req.body.SNo != null && isFinite(req.body.SNo)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let ImageData = await CommonController.Check_for_Image(req.body);
            let Result = await AdminController.Edit_App_Image_Resource(req.body, ImageData);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Add_App_Image_Resource = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.ImageID != null
            && req.body.ResourceType != null && isFinite(req.body.ResourceType)
            && req.body.SNo != null && isFinite(req.body.SNo)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let ImageData = await CommonController.Check_for_Image(req.body);
            let ValidityStatus = await AdminController.Add_App_Image_Resource_Validate_All(req.body);
            let Result = await AdminController.Add_App_Image_Resource(req.body, ImageData);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}


AdminMediator.List_All_Plot = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_All_Plot(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}


AdminMediator.Activate_Inactivate_Plot = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.PlotID != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Activate_Inactivate_Plot(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}


AdminMediator.Edit_Plot = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.All_ImageID_Array //&& typeof (req.body.All_ImageID_Array) == "object"
            && req.body.FileID != null
            && req.body.Plot_Name != null && req.body.Plot_Name != ''
            && req.body.Company_Name != null && req.body.Company_Name != ''
            && req.body.ImageID != null
            && req.body.Address != null
            && req.body.Description != null && req.body.Description != ''
            && req.body.Latitude != null && req.body.Latitude != ''
            && req.body.Longitude != null && req.body.Longitude != ''
            && req.body.PlotID != null && req.body.PlotID != ''
            && req.body.SNo != null && isFinite(req.body.SNo)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let ImageData = await CommonController.Check_for_Image(req.body);
            let All_Images_Data = await AdminController.Image_Data_From_ImageID_Array_Plot(req.body);
            let File_Data = await AdminController.Check_File_Data_From_FileID(req.body.FileID);
            let Result = await AdminController.Edit_Plot(req.body, All_Images_Data, File_Data, ImageData);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Create_Plot = async (req, res) => {
    try {
        console.log("867--->" +JSON.stringify(req.body));
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.All_ImageID_Array!= null //&& typeof (req.body.All_ImageID_Array) == "object"
            && req.body.FileID != null
            && req.body.Plot_Name != null && req.body.Plot_Name != ''
            && req.body.Company_Name != null && req.body.Company_Name != ''
            && req.body.ImageID != null
            && req.body.Address != null
            && req.body.Description != null && req.body.Description != ''
            && req.body.Latitude != null && req.body.Latitude != ''
            && req.body.Longitude != null && req.body.Longitude != ''
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let ImageData = await CommonController.Check_for_Image(req.body);
            let All_Images_Data = await AdminController.Image_Data_From_ImageID_Array_Plot(req.body);
            let File_Data = await AdminController.Check_File_Data_From_FileID(req.body.FileID);
            let Result = await AdminController.Create_Plot(req.body, All_Images_Data, File_Data, ImageData);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Add_Remove_Trending_Products = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.ProductID_Arr != null && req.body.ProductID_Arr != ""
            && req.body.Add_Remove != null && isFinite(req.body.Add_Remove)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Add_Remove_Trending_Products(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Activate_Inactivate_News = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.NewsID != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Activate_Inactivate_News(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_All_News = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_All_News(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Update_News = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null && req.body.NewsID != null
            && req.body.NewsID != null
            && req.body.Title != null && req.body.Title != ''
            && req.body.Description != null && req.body.Description != ''
            && req.body.SNo != null && isFinite(req.body.SNo)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let NewsData = await CommonController.Check_for_News(req.body);
            let ValidityStatus = await AdminController.Update_News_Validate_All(req.body);
            let Result = await AdminController.Update_News(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Add_News = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Title != null && req.body.Title != ''
            && req.body.Description != null && req.body.Description != ''
            && req.body.SNo != null && isFinite(req.body.SNo)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let ValidityStatus = await AdminController.Add_News_Validate_All(req.body);
            let Result = await AdminController.Add_News(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Check_For_App_Image_SNo_Available = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.SNo != null && isFinite(req.body.SNo) && !isNaN(req.body.SNo)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Check_For_App_Image_SNo_Available(req.body);
            res.json({ success: true, extras: { Status: Result } });
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Check_For_Plot_SNo_Available = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.SNo != null && isFinite(req.body.SNo) && !isNaN(req.body.SNo)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Check_For_Plot_SNo_Available(req.body);
            res.json({ success: true, extras: { Status: Result } });
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Check_For_News_SNo_Available = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.SNo != null && isFinite(req.body.SNo) && !isNaN(req.body.SNo)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Check_For_News_SNo_Available(req.body);
            res.json({ success: true, extras: { Status: Result } });
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_Buyers_Bonanza_Status = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.BonanzaID != null && req.body.BonanzaID != ""
            && req.body.Bonanza_Type != null && isFinite(req.body.Bonanza_Type)
            && req.body.Levels != null && isFinite(req.body.Levels)
            && req.body.Completed != null && isBoolean(req.body.Completed)
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let BonanzaData = await CommonController.Check_for_Bonanza(req.body)
            let Result = await AdminController.List_Buyers_Bonanza_Status(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        // 
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Delete_Bonanza = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.BonanzaID != null && req.body.BonanzaID != ""
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let BonanzaData = await CommonController.Check_for_Bonanza(req.body);
            let Result = await AdminController.Delete_Bonanza(req.body, BonanzaData);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Activate_Inactivate_Bonanza = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.BonanzaID != null && req.body.BonanzaID != ""
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let BonanzaData = await CommonController.Check_for_Bonanza(req.body);
            let Result = await AdminController.Activate_Inactivate_Bonanza(req.body, BonanzaData);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Fetch_Single_Bonanza = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.BonanzaID != null && req.body.BonanzaID != ""
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let BonanzaData = await CommonController.Check_for_Bonanza(req.body);
            // let Result = await AdminController.Fetch_Single_Bonanza(req.body);
            res.json({ success: true, extras: { Data: BonanzaData } });
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Edit_Bonanza = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.BonanzaID != null && req.body.BonanzaID != ""
            && req.body.Bonanza_Type != null && isFinite(req.body.Bonanza_Type)
            && req.body.Name != null && req.body.Name != ""
            && req.body.Description != null && req.body.Description != ""
            && req.body.Start_Date != null && req.body.Start_Date != ""
            && req.body.End_Date != null && req.body.End_Date != ""

        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Validation = await CommonController.Common_Start_Date_End_Date_Validation(req.body)
            Validation = await AdminController.Date_Range_for_Previous_Bonanza(req.body)
            if (req.body.Bonanza_Type == 1) {
                if (req.body.Amount != null && isFinite(req.body.Amount)
                    && req.body.Points != null && isFinite(req.body.Points)
                    && req.body.Bonanza_Points_Data != null
                    && typeof req.body.Bonanza_Points_Data === "object"
                    && req.body.Bonanza_Points_Data.length > 0
                ) {
                    req.body.Points_Level_Data = []
                    for (let iteration of req.body.Bonanza_Points_Data) {
                        if (
                            iteration.Levels != null && isFinite(iteration.Levels)
                            && iteration.Min_Points != null && isFinite(iteration.Min_Points)
                            && iteration.Max_Points != null && isFinite(iteration.Max_Points)
                            && iteration.Winning != null && iteration.Winning != ""
                        ) {
                            let Points_Level_Data = {
                                Levels: iteration.Levels,
                                Min_Points: iteration.Min_Points,
                                Max_Points: iteration.Max_Points,
                                Winning: iteration.Winning
                            };
                            req.body.Points_Level_Data.push(Points_Level_Data)
                        } else {
                            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
                        }
                    }
                    req.body.Points_Calculation_Data = {
                        Amount: req.body.Amount,
                        Points: req.body.Points
                    };
                    req.body.Matrix_Levels_Data = [{
                        Levels: 0,
                        Winning: "",
                        Matrix: 0
                    }];
                } else {
                    throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
                }
            } else if (req.body.Bonanza_Type == 2) {
                if (
                    req.body.Bonanza_Matrix_Data != null
                    && typeof req.body.Bonanza_Matrix_Data === 'object'
                    && req.body.Bonanza_Matrix_Data.length > 0
                ) {
                    req.body.Points_Level_Data = [{
                        Levels: 0,
                        Winning: "",
                        Min_Points: 0,
                        Max_Points: 0
                    }];
                    req.body.Points_Calculation_Data = {
                        Amount: 0,
                        Points: 0
                    };
                    req.body.Matrix_Levels_Data = []
                    for (let iteration of req.body.Bonanza_Matrix_Data) {
                        if (
                            iteration.Levels != null && isFinite(iteration.Levels)
                            && iteration.Matrix != null && isFinite(iteration.Matrix)
                            && iteration.Winning != null && iteration.Winning != ""
                        ) {
                            let Matrix_Levels_Data = {
                                Levels: iteration.Levels,
                                Winning: iteration.Winning,
                                Matrix: iteration.Matrix
                            };
                            req.body.Matrix_Levels_Data.push(Matrix_Levels_Data)
                        } else {
                            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
                        }
                    }
                } else {
                    throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
                }
            } else if (req.body.Bonanza_Type == 3) {
                if (req.body.Amount != null && isFinite(req.body.Amount)
                    && req.body.Points != null && isFinite(req.body.Points)
                    && req.body.Bonanza_Points_Data != null
                    && typeof req.body.Bonanza_Points_Data === "object"
                    && req.body.Bonanza_Points_Data.length > 0
                    && req.body.Bonanza_Matrix_Data != null
                    && typeof req.body.Bonanza_Matrix_Data === 'object'
                    && req.body.Bonanza_Matrix_Data.length > 0
                ) {
                    req.body.Points_Level_Data = []
                    for (let iteration of req.body.Bonanza_Points_Data) {
                        if (
                            iteration.Levels != null && isFinite(iteration.Levels)
                            && iteration.Min_Points != null && isFinite(iteration.Min_Points)
                            && iteration.Max_Points != null && isFinite(iteration.Max_Points)
                            && iteration.Winning != null && iteration.Winning != ""
                        ) {
                            let Points_Level_Data = {
                                Levels: iteration.Levels,
                                Min_Points: iteration.Min_Points,
                                Max_Points: iteration.Max_Points,
                                Winning: iteration.Winning
                            };
                            req.body.Points_Level_Data.push(Points_Level_Data)
                        } else {
                            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
                        }
                    };
                    req.body.Points_Calculation_Data = {
                        Amount: req.body.Amount,
                        Points: req.body.Points
                    };
                    req.body.Matrix_Levels_Data = []

                    for (let iteration of req.body.Bonanza_Matrix_Data) {
                        if (
                            iteration.Levels != null && isFinite(iteration.Levels)
                            && iteration.Matrix != null && isFinite(iteration.Matrix)
                            && iteration.Winning != null && iteration.Winning != ""
                        ) {
                            let Matrix_Levels_Data = {
                                Levels: iteration.Levels,
                                Winning: iteration.Winning,
                                Matrix: iteration.Matrix
                            };
                            req.body.Matrix_Levels_Data.push(Matrix_Levels_Data)
                        } else {
                            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
                        }
                    };
                } else {
                    throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
                }
            } else {
                throw { success: false, extras: { msg: ApiMessages.INVALID_BONANZA_TYPE } };
            }
            let Result = await AdminController.Edit_Bonanza(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_All_Bonanza = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Bonanza_Status != null && isFinite(req.body.Bonanza_Status) //1- live, 2- completed, 3- cancelled, 4- upcoming, 5- All
            && req.body.Whether_Date_Filter != null && isBoolean(req.body.Whether_Date_Filter)
            && req.body.Start_Date != null
            && req.body.End_Date != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            if (Boolify(req.body.Whether_Date_Filter)) {
                let Validation = await CommonController.Common_Start_Date_End_Date_Validation(req.body)
            }
            let Result = await AdminController.List_All_Bonanza(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        // 
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Create_Bonanza = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Bonanza_Type != null && isFinite(req.body.Bonanza_Type)
            && req.body.Name != null && req.body.Name != ""
            && req.body.Description != null && req.body.Description != ""
            && req.body.Start_Date != null && req.body.Start_Date != ""
            && req.body.End_Date != null && req.body.End_Date != ""
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Validation = await CommonController.Common_Start_Date_End_Date_Validation(req.body)
            Validation = await AdminController.Date_Range_for_Previous_Bonanza(req.body)
            if (req.body.Bonanza_Type == 1) {
                if (req.body.Amount != null && isFinite(req.body.Amount)
                    && req.body.Points != null && isFinite(req.body.Points)
                    && req.body.Bonanza_Points_Data != null
                    && typeof req.body.Bonanza_Points_Data === "object"
                    && req.body.Bonanza_Points_Data.length > 0
                ) {
                    req.body.Points_Level_Data = []
                    for (let iteration of req.body.Bonanza_Points_Data) {
                        if (
                            iteration.Levels != null && isFinite(iteration.Levels)
                            && iteration.Min_Points != null && isFinite(iteration.Min_Points)
                            && iteration.Max_Points != null && isFinite(iteration.Max_Points)
                            && iteration.Winning != null && iteration.Winning != ""
                        ) {
                            let Points_Level_Data = {
                                Levels: iteration.Levels,
                                Min_Points: iteration.Min_Points,
                                Max_Points: iteration.Max_Points,
                                Winning: iteration.Winning
                            };
                            req.body.Points_Level_Data.push(Points_Level_Data)
                        } else {
                            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
                        }
                    }
                    req.body.Points_Calculation_Data = {
                        Amount: req.body.Amount,
                        Points: req.body.Points
                    };
                    req.body.Matrix_Levels_Data = [{
                        Levels: 0,
                        Winning: "",
                        Matrix: 0
                    }];
                } else {
                    throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
                }
            } else if (req.body.Bonanza_Type == 2) {
                if (
                    req.body.Bonanza_Matrix_Data != null
                    && typeof req.body.Bonanza_Matrix_Data === 'object'
                    && req.body.Bonanza_Matrix_Data.length > 0
                ) {
                    req.body.Points_Level_Data = [{
                        Levels: 0,
                        Winning: "",
                        Min_Points: 0,
                        Max_Points: 0
                    }];
                    req.body.Points_Calculation_Data = {
                        Amount: 0,
                        Points: 0
                    };
                    req.body.Matrix_Levels_Data = []
                    for (let iteration of req.body.Bonanza_Matrix_Data) {
                        if (
                            iteration.Levels != null && isFinite(iteration.Levels)
                            && iteration.Matrix != null && isFinite(iteration.Matrix)
                            && iteration.Winning != null && iteration.Winning != ""
                        ) {
                            let Matrix_Levels_Data = {
                                Levels: iteration.Levels,
                                Winning: iteration.Winning,
                                Matrix: iteration.Matrix
                            };
                            req.body.Matrix_Levels_Data.push(Matrix_Levels_Data)
                        } else {
                            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
                        }
                    }
                } else {
                    throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
                }
            } else if (req.body.Bonanza_Type == 3) {
                if (req.body.Amount != null && isFinite(req.body.Amount)
                    && req.body.Points != null && isFinite(req.body.Points)
                    && req.body.Bonanza_Points_Data != null
                    && typeof req.body.Bonanza_Points_Data === "object"
                    && req.body.Bonanza_Points_Data.length > 0
                    && req.body.Bonanza_Matrix_Data != null
                    && typeof req.body.Bonanza_Matrix_Data === 'object'
                    && req.body.Bonanza_Matrix_Data.length > 0
                ) {
                    req.body.Points_Level_Data = []
                    for (let iteration of req.body.Bonanza_Points_Data) {
                        if (
                            iteration.Levels != null && isFinite(iteration.Levels)
                            && iteration.Min_Points != null && isFinite(iteration.Min_Points)
                            && iteration.Max_Points != null && isFinite(iteration.Max_Points)
                            && iteration.Winning != null && iteration.Winning != ""
                        ) {
                            let Points_Level_Data = {
                                Levels: iteration.Levels,
                                Min_Points: iteration.Min_Points,
                                Max_Points: iteration.Max_Points,
                                Winning: iteration.Winning
                            };
                            req.body.Points_Level_Data.push(Points_Level_Data)
                        } else {
                            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
                        }
                    };
                    req.body.Points_Calculation_Data = {
                        Amount: req.body.Amount,
                        Points: req.body.Points
                    };
                    req.body.Matrix_Levels_Data = []

                    for (let iteration of req.body.Bonanza_Matrix_Data) {
                        if (
                            iteration.Levels != null && isFinite(iteration.Levels)
                            && iteration.Matrix != null && isFinite(iteration.Matrix)
                            && iteration.Winning != null && iteration.Winning != ""
                        ) {
                            let Matrix_Levels_Data = {
                                Levels: iteration.Levels,
                                Winning: iteration.Winning,
                                Matrix: iteration.Matrix
                            };
                            req.body.Matrix_Levels_Data.push(Matrix_Levels_Data)
                        } else {
                            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
                        }
                    };
                } else {
                    throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
                }
            } else {
                throw { success: false, extras: { msg: ApiMessages.INVALID_BONANZA_TYPE } };
            }
            let Result = await AdminController.Create_Bonanza(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Get_Shiprocket_Order_Pricing = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.OrderID != null && req.body.OrderID != null
            && req.body.Length != null && isFinite(req.body.Length)
            && req.body.Height != null && isFinite(req.body.Height)
            && req.body.Breadth != null && isFinite(req.body.Breadth)
            && req.body.Weight != null && isFinite(req.body.Weight)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Get_Shiprocket_Order_Pricing(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Get_Single_Shiprocket_Order = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Shiprocket_Order_LogID != null && req.body.Shiprocket_Order_LogID != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Get_Single_Shiprocket_Order(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Cancel_Shiprocket_Order = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Shiprocket_Order_LogID != null && req.body.Shiprocket_Order_LogID != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Cancel_Shiprocket_Order(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Shiprocket_Order_Create = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.OrderID != null && req.body.OrderID != null
            // && req.body.Length != null && isFinite(req.body.Length)
            // && req.body.Height != null && isFinite(req.body.Height)
            // && req.body.Breadth != null && isFinite(req.body.Breadth)
            // && req.body.Weight != null && isFinite(req.body.Weight)
            // && req.body.courier_company_id != null && isFinite(req.body.courier_company_id)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Shiprocket_Order_Create(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Update_Product_Quantity = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.ProductID != null
            && req.body.Quantity != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Update_Product_Quantity(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_All_Category = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_All_Category(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Add_Category = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Category_Name != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Add_Category(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_All_Delivery_Type = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_All_Delivery_Type(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Active_Inactive_Delivery_Type = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Delivery_TypeID != null && req.body.Delivery_TypeID != ''
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Active_Inactive_Delivery_Type(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Add_Delivery_Type = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Delivery_Type != null
            && req.body.Delivery_Type_Name != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Add_Delivery_Type(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Active_Inactive_Banner = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.BannerID != null && req.body.BannerID != ''
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Active_Inactive_Banner(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Edit_Banner = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.BannerID != null && req.body.BannerID != ''
            && req.body.ImageID != null && req.body.ImageID != ''
            && req.body.Web_ImageID != null && req.body.Web_ImageID != ''
            && req.body.Banner_Name != null && req.body.Banner_Name != ''
            && req.body.SNo != null && isFinite(req.body.SNo)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let ImageData = await CommonController.Check_for_Image(req.body);
            let WebImageData = await CommonController.Check_for_Web_Image(req.body);
            let Result = await AdminController.Edit_Banner(req.body, ImageData, WebImageData);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_All_Banner = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            & req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_All_Banner(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Create_Banner = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.ImageID != null && req.body.ImageID != ''
            && req.body.Web_ImageID != null && req.body.Web_ImageID != ''
            && req.body.Banner_Name != null && req.body.Banner_Name != ''
            && req.body.SNo != null && isFinite(req.body.SNo)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let ImageData = await CommonController.Check_for_Image(req.body);
            let WebImageData = await CommonController.Check_for_Web_Image(req.body);
            let Result = await AdminController.Create_Banner(req.body, ImageData, WebImageData);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_All_Help_Data = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            & req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_All_Help_Data(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Active_Inactive_Help = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.HelpDataID != null && req.body.HelpDataID != ''
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Active_Inactive_Help(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Edit_Help = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.HelpDataID != null && req.body.HelpDataID != ''
            && req.body.Title != null && req.body.Title != ''
            && req.body.Description != null && req.body.Description != ''
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Edit_Help(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Create_Help = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Title != null && req.body.Title != ''
            && req.body.Description != null && req.body.Description != ''
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Create_Help(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Complete_Buyer_Order = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.OrderID != null && req.body.OrderID != ''
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Complete_Buyer_Order(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Change_Buyer_Order_Status = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.OrderID != null && req.body.OrderID != ''
            && req.body.Title != null && req.body.Title != ''
            && req.body.Description != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Change_Buyer_Order_Status(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Delete_Buyer_Order = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.OrderID != null && req.body.OrderID != ''
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Delete_Buyer_Order(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_Buyer_Orders = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.BuyerID != null && req.body.BuyerID != ''
            && req.body.Start_Date != null && req.body.Start_Date != ''
            && req.body.End_Date != null && req.body.End_Date != ''
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
            && req.body.Status != null && isBoolean(req.body.Status)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let ValidityStatus = await CommonController.Common_Start_Date_End_Date_Validation(req.body);
            let Result = await AdminController.List_Buyer_Orders(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_All_Buyers_Orders = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Start_Date != null && req.body.Start_Date != ''
            && req.body.End_Date != null && req.body.End_Date != ''
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
            && req.body.Status != null && isBoolean(req.body.Status)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let ValidityStatus = await CommonController.Common_Start_Date_End_Date_Validation(req.body);
            let Result = await AdminController.List_All_Buyers_Orders(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_All_Trending_Buyers = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Whether_All_Shops != null && isBoolean(req.body.Whether_All_Shops)
            && req.body.ShopID != null
            && req.body.Start_Date != null && req.body.Start_Date != ''
            && req.body.End_Date != null && req.body.End_Date != ''
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
            && req.body.sortOptions != null && typeof (req.body.sortOptions) == 'object'
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let ValidityStatus = await CommonController.Common_Start_Date_End_Date_Validation(req.body);
            let All_ShopID_Array = await AdminController.List_All_Trending_Buyers_Validate_Shops_Information(req.body);
            let Result = await AdminController.List_All_Trending_Buyers(req.body, All_ShopID_Array);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Edit_Shop = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.ShopID != null
            && req.body.Latitude != null && req.body.Latitude != ''
            && req.body.Longitude != null && req.body.Longitude != ''
            && req.body.Address != null && req.body.Address != ''
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Edit_Shop(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Edit_Shop_Name = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.ShopID != null
            && req.body.Shop_Name != null && req.body.Shop_Name != ''
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Edit_Shop_Name(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Edit_Shop_GST = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.ShopID != null
            && req.body.GST_Number != null && req.body.GST_Number != ''
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Edit_Shop_GST(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Buyer_List_All_Shop_Bills = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.BuyerID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let BuyerData = await CommonController.Check_for_Buyer(req.body);
            let Result = await AdminController.Buyer_List_All_Shop_Bills(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Get_Purchase_Details = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.PurchaseID != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let PurchaseData = await CommonController.Check_for_Shop_Purchase(req.body);
            res.json({ success: true, extras: { Data: PurchaseData } });
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Shipping_Notification_Shop_Purchase = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.PurchaseID != null
            && req.body.Description != null && req.body.Description != ''
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let PurchaseData = await CommonController.Check_for_Shop_Purchase(req.body);
            let ValidityStatus = await AdminController.Shipping_Notification_Shop_Purchase_Validate_Status(PurchaseData);
            let Result = await AdminController.Shipping_Notification_Shop_Purchase(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Shipping_Shop_Purchase = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.PurchaseID != null
            && req.body.Description != null && req.body.Description != ''
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let PurchaseData = await CommonController.Check_for_Shop_Purchase(req.body);
            let ValidityStatus = await AdminController.Shipping_Shop_Purchase_Validate_Status(PurchaseData);
            let Result = await AdminController.Shipping_Shop_Purchase(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Accept_Shop_Purchase = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.PurchaseID != null
            && req.body.Description != null && req.body.Description != ''
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let PurchaseData = await CommonController.Check_for_Shop_Purchase(req.body);
            let ValidityStatus = await AdminController.Accept_Shop_Purchase_Validate_Status(PurchaseData);
            let Result = await AdminController.Accept_Shop_Purchase(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_All_Shop_Purchases = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_All_Shop_Purchases(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_All_Buyer_Offer_Message_Logs = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.MessageID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let OfferMessageData = await CommonController.Check_for_Offer_Message(req.body);
            let Result = await AdminController.List_All_Buyer_Offer_Message_Logs(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_All_Offer_Messages = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_All_Offer_Messages(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Create_Offer_Message = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Type != null && isFinite(req.body.Type)
            && req.body.ShopID != null
            && req.body.BuyerID != null
            && req.body.Buyer_Min_Amount != null && isFinite(req.body.Buyer_Min_Amount)
            && req.body.Buyer_Max_Amount != null && isFinite(req.body.Buyer_Max_Amount)
            && req.body.Buyer_Deduction_Amount != null && isFinite(req.body.Buyer_Deduction_Amount)
            && req.body.Message != null && req.body.Message != ''
            && req.body.Expiry_Date != null && req.body.Expiry_Date != ''
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let ValidityStatus = await AdminController.Create_Offer_Message_Validity_Params(req.body);
            ValidityStatus = await AdminController.Create_Offer_Message_Validate_Shop(req.body);
            let Buyers_Information = await AdminController.Create_Offer_Message_Fetch_Buyer_Information(req.body);
            let StoreMessageProcess = await AdminController.Create_Offer_Message(req.body, Buyers_Information);
            let Result = await StoreMessageProcess[0];
            let OfferMessageData = await StoreMessageProcess[1];
            res.json(Result);
            let Buyer_Processing = await AdminController.Create_Offer_Message_Process_Individual_Buyer_Offer(req.body, OfferMessageData);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Search_Buyers = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.SearchValue != null && req.body.SearchValue != ''
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Search_Buyers(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Buyer_Network_Heirarchy = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Buyer_Network_Heirarchy(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

// AdminMediator.Trimmer_Share_Information_and_Logs_By_Date = async (req, res) => {
//     try {
//         if (
//             req.body.AdminID != null && req.body.SessionID != null
//             && req.body.Date != null && req.body.Date != ''
//             && req.body.skip != null && isFinite(req.body.skip)
//             && req.body.limit != null && isFinite(req.body.limit)
//         ) {
//             let AdminData = await CommonController.Check_for_Admin(req.body);
//             let Result = await AdminController.Trimmer_Share_Information_and_Logs_By_Date(req.body);
//             res.json(Result);
//         } else {
//             throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
//         }
//     } catch (error) {
//         if (!res.headersSent) {
//             res.json(error);
//         }
//     }
// }

AdminMediator.List_All_Buyers_Share_Logs = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.BuyerID
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let BuyerData = await CommonController.Check_for_Buyer(req.body);
            let Result = await AdminController.List_All_Buyers_Share_Logs(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_All_Buyers = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_All_Buyers(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}


AdminMediator.Company_Share_Information_and_Logs = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Company_Share_Information_and_Logs(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_All_Introducer_Share_Logs = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.IntroducerID
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let IntroducerData = await CommonController.Check_For_Introducer(req.body);
            let Result = await AdminController.List_All_Introducer_Share_Logs(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_All_Introducers = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_All_Introducers(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_All_Shop_Share_Logs = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.ShopID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let ShopData = await CommonController.Check_Only_Shop(req.body);
            let Result = await AdminController.List_All_Shop_Share_Logs(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_All_Shop_Product_stock_Logs = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.ShopID != null && req.body.ProductID != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let ShopData = await CommonController.Check_Only_Shop(req.body);
            let ProductData = await CommonController.Check_For_Product(req.body);
            let Result = await AdminController.List_All_Shop_Product_stock_Logs(req.body);
            res.json(Result);

        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_All_Shop_Product_Stocks = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.ShopID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let ShopData = await CommonController.Check_Only_Shop(req.body);
            let Result = await AdminController.List_All_Shop_Product_Stocks(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}


AdminMediator.Update_Shop_Product_Stock = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.ShopID != null && req.body.ProductID != null
            && req.body.OperationType != null && isFinite(req.body.OperationType)
            && req.body.OperationInput != null && isFinite(req.body.OperationInput)
        ) {

            let AdminData = await CommonController.Check_for_Admin(req.body);
            let ValidityStatus = await AdminController.Update_Shop_Product_Stock_Validate_Operation_Type(req.body);
            let ShopData = await CommonController.Check_Only_Shop(req.body);
            let ProductData = await CommonController.Check_For_Product(req.body);
            let Result = await AdminController.Update_Shop_Product_Stock(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Activate_Product = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.ProductID != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let ProductData = await CommonController.Check_For_Product(req.body);
            let Result = await AdminController.Activate_Product(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_All_Inactive_Products = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_All_Inactive_Products(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}


AdminMediator.Inactivate_Product = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.ProductID != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let ProductData = await CommonController.Check_For_Product(req.body);
            let Result = await AdminController.Inactivate_Product(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Edit_Product = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.ProductID != null
            && req.body.Product_Name != null && req.body.Product_Name != ''
            && req.body.Product_Description != null
            && req.body.Product_Weight != null
            && req.body.CategoryID != null
            //&& req.body.Product_Price != null && isFinite(req.body.Product_Price)
            && req.body.Introducer_Price != null //&& isFinite(req.body.Introducer_Price)
            && req.body.Buyer_Price_Array != null //&&  typeof (req.body.Buyer_Price) == 'object'
            && req.body.Shop_Price != null //&& isFinite(req.body.Shop_Price)
            && req.body.Company_Price != null //&& isFinite(req.body.Company_Price)
            && req.body.ImageID != null
            && req.body.All_ImageID_Array != null
            //&& req.body.Product_HST != null
            //&& req.body.Product_GST != null
            //&& req.body.Product_Quantity != null
        ) {
            console.log("2597--->")
            let AdminData = await CommonController.Check_for_Admin(req.body);
            // console.log("2598--->"+JSON.stringify(AdminData))
            //let ValidityStatus = await AdminController.Edit_Product_Validate_Product_Shares(req.body);
           let ImageData = await CommonController.Check_for_Image(req.body);
            let Product_ImageData = await AdminController.Image_Data_From_ImageID_Array(req.body);
            console.log("2602--->")
            let ProductData = await CommonController.Check_For_Product(req.body);
            console.log("2602A--->"+ProductData)
            let Result = await AdminController.Edit_Product(req.body, ImageData, Product_ImageData);
            console.log("2607--->"+JSON.stringify(Result))
            res.json(Result);
        } else {
            console.log("2610--->");
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            console.log("2615--->"+JSON.stringify(error));
            res.json(error);
        }
    }
}

AdminMediator.List_All_Products = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_All_Products(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Add_Product = async (req, res) => {
    try {
        console.log("2635--->"+JSON.stringify(req.body))
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Product_Name != null && req.body.Product_Name != ''
            && req.body.Product_Description != null
            && req.body.Product_Weight != null
            && req.body.CategoryID != null
            //&& req.body.Product_Price != null && isFinite(req.body.Product_Price)
            && req.body.Introducer_Price != null //&& isFinite(req.body.Introducer_Price)
            && req.body.Buyer_Price_Array != null //&&  typeof (req.body.Buyer_Price) == 'object'
            && req.body.Shop_Price != null //&& isFinite(req.body.Shop_Price)
            && req.body.Company_Price != null //&& isFinite(req.body.Company_Price)
            && req.body.ImageID != null
            && req.body.All_ImageID_Array != null
            //&& req.body.HST != null
            //&& req.body.GST != null
            //&& req.body.Quantity != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
           // let ValidityStatus = await AdminController.Add_Product_Validate_Product_Shares(req.body);
            let ImageData = await CommonController.Check_for_Image(req.body);
            let Product_ImageData = await AdminController.Image_Data_From_ImageID_Array(req.body);
            let Result = await AdminController.Add_Product(req.body, ImageData, Product_ImageData);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_Only_Shops = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_Only_Shops(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}


AdminMediator.List_All_Shops = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_All_Shops(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Create_Shop = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Introducer_Name != null && req.body.Introducer_Name != ''
            && req.body.Introducer_CountryCode != null && req.body.Introducer_CountryCode != ''
            && req.body.Introducer_PhoneNumber != null && req.body.Introducer_PhoneNumber != ''
            && req.body.Introducer_PAN != null && req.body.Introducer_PAN != ''
            && req.body.ImageID != null && req.body.ImageID != ''
            && req.body.Shop_Name != null && req.body.Shop_Name != ''
            && req.body.Shop_CountryCode != null && req.body.Shop_CountryCode != ''
            && req.body.Shop_PhoneNumber != null && req.body.Shop_PhoneNumber != ''
            && req.body.Latitude != null && req.body.Latitude != ''
            && req.body.Longitude != null && req.body.Longitude != ''
            && req.body.Address != null && req.body.Address != ''
            //&& req.body.GST_Number != null && req.body.GST_Number != ''
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let ValidityStatus = await AdminController.Create_Shop_Validate_Shop_Already_Exist_With_Phone_Number(req.body);
            let ImageData = await CommonController.Check_for_Image(req.body)
            let IntroducerData = await AdminController.Find_or_Create_Introducer_Information(req.body, ImageData);
            let Result = await AdminController.Create_Shop(req.body, IntroducerData);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Login = async (req, res) => {
    try {
        if (
            req.body.EmailID != null && req.body.EmailID != ''
            && req.body.Password != null && req.body.Password != ''
        ) {
            let ValidityStatus = CommonController.Common_Email_Validation(req.body.EmailID);
            let AdminData = await AdminController.Check_Whether_Admin_Email_Registered(req.body);
            let Result = await AdminController.Login(req.body, AdminData);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.List_All_Admin_User = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_All_Admin_User(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Create_Admin_User = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Name != null && req.body.Name != ''
            && req.body.EmailID != null && req.body.EmailID != ''
            && req.body.Password != null && req.body.Password != ''
            && req.body.Admin_Section_Permision != null && isBoolean(req.body.Admin_Section_Permision)
        ) {
            let AdminData = {}
            // let AdminData = await CommonController.Check_for_Admin(req.body);
            let ValidityStatus = await CommonController.Common_Email_Validation(req.body.EmailID);
            ValidityStatus = await AdminController.Check_Whether_Admin_Email_Already_Exist(req.body);
            let Result = await AdminController.Create_Admin_User(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}
AdminMediator.List_States = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
        ) {
            // let ImageData = await CommonController.Check_for_Image(req.body);
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_States(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Edit_State = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null,
            req.body.SNo != null && req.body.SNo != "" 
            && req.body.State_Name != null && req.body.State_Name !=""
            && req.body.StateID != null

        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let State_SNO = await AdminController.Check_For_State_SNo_Available(req.body);
            let Result = await AdminController.Edit_State(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Add_State = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null,
            req.body.SNo != null && req.body.SNo != "" 
            && req.body.State_Name != null && req.body.State_Name !=""
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let State_SNO = await AdminController.Check_For_State_SNo_Available(req.body);
            let Result = await AdminController.Add_State(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Activate_Inactivate_State = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.StateID != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Activate_Inactivate_State(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }

    AdminMediator.Check_For_State_SNo_Available = async (req, res) => {
        try {
            if (
                req.body.AdminID != null && req.body.SessionID != null
                && req.body.SNo != null && isFinite(req.body.SNo) && !isNaN(req.body.SNo)
            ) {
                let AdminData = await CommonController.Check_for_Admin(req.body);
                let Result = await AdminController.Check_For_State_SNo_Available(req.body);
                res.json({ success: true, extras: { Status: Result } });
            } else {
                throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
            }
    
        } catch (error) {
            if (!res.headersSent) {
                res.json(await CommonController.Common_Error_Handler(error));
            }
        }
    }
}

AdminMediator.List_Districts = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
        ) {
            // let ImageData = await CommonController.Check_for_Image(req.body);
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_Districts(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Edit_District = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null,
            req.body.SNo != null && req.body.SNo != "" 
            && req.body.District_Name != null && req.body.District_Name !=""
            && req.body.StateID != null && req.body.StateID != ""
            && req.body.DistrictID != null

        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let District_SNO = await AdminController.Check_For_District_SNo_Available(req.body);
            let Result = await AdminController.Edit_District(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Add_District = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null,
            req.body.SNo != null && req.body.SNo != "" 
            && req.body.District_Name != null && req.body.District_Name !=""
            && req.body.StateID != null && req.body.StateID !=""
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let District_SNO = await AdminController.Check_For_District_SNo_Available(req.body);
            let Result = await AdminController.Add_District(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Activate_Inactivate_District = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.DistrictID != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Activate_Inactivate_District(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }

    AdminMediator.Check_For_District_SNo_Available = async (req, res) => {
        try {
            if (
                req.body.AdminID != null && req.body.SessionID != null
                && req.body.SNo != null && isFinite(req.body.SNo) && !isNaN(req.body.SNo)
            ) {
                let AdminData = await CommonController.Check_for_Admin(req.body);
                let Result = await AdminController.Check_For_District_SNo_Available(req.body);
                res.json({ success: true, extras: { Status: Result } });
            } else {
                throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
            }
    
        } catch (error) {
            if (!res.headersSent) {
                res.json(await CommonController.Common_Error_Handler(error));
            }
        }
    }
}


AdminMediator.List_Pincodes = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
        ) {
            // let ImageData = await CommonController.Check_for_Image(req.body);
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.List_Pincodes(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Edit_Pincode = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null,
            req.body.SNo != null && req.body.SNo != "" 
            && req.body.Pincode != null && req.body.Pincode !=""
            && req.body.StateID != null && req.body.StateID != ""
            && req.body.DistrictID != null && req.body.DistrictID != ""
            && req.body.PincodeID != null

        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let District_SNO = await AdminController.Check_For_Pincode_SNo_Available(req.body);
            let Pincode_Check = await AdminController.Check_For_Pincode(req.body);
            let Result = await AdminController.Edit_Pincode(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Add_Pincode = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null,
            req.body.SNo != null && req.body.SNo != "" 
            && req.body.Pincode != null && req.body.Pincode !=""
            && req.body.StateID != null && req.body.StateID !=""
            && req.body.DistrictID != null && req.body.DistrictID !=""
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let District_SNO = await AdminController.Check_For_Pincode_SNo_Available(req.body);
            let Pincode_Check = await AdminController.Check_For_Pincode(req.body);
            let Result = await AdminController.Add_Pincode(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

AdminMediator.Activate_Inactivate_Pincode = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.PincodeID != null
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Activate_Inactivate_Pincode(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }

    AdminMediator.Check_For_Pincode_SNo_Available = async (req, res) => {
        try {
            if (
                req.body.AdminID != null && req.body.SessionID != null
                && req.body.SNo != null && isFinite(req.body.SNo) && !isNaN(req.body.SNo)
            ) {
                let AdminData = await CommonController.Check_for_Admin(req.body);
                let Result = await AdminController.Check_For_Pincode_SNo_Available(req.body);
                res.json({ success: true, extras: { Status: Result } });
            } else {
                throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
            }
    
        } catch (error) {
            if (!res.headersSent) {
                res.json(await CommonController.Common_Error_Handler(error));
            }
        }
    }
}

AdminMediator.Check_For_Pincode = async (req, res) => {
    try {
        if (
            req.body.AdminID != null && req.body.SessionID != null
            && req.body.Pincode != null && isFinite(req.body.Pincode) && !isNaN(req.body.Pincode)
        ) {
            let AdminData = await CommonController.Check_for_Admin(req.body);
            let Result = await AdminController.Check_For_Pincode(req.body);
            res.json({ success: true, extras: { Status: Result } });
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }

    } catch (error) {
        if (!res.headersSent) {
            res.json(await CommonController.Common_Error_Handler(error));
        }
    }
}

export default AdminMediator;