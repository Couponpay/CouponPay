let ShopMediator = function () { };
import ApiMessages from "../config/ApiMessages";
import CommonController from "../controllers/CommonController";
import ShopController from "../controllers/ShopController";
import RazorpayController from "../controllers/RazorpayController";
import { isBoolean, Boolify } from "node-boolify";
import AdminController from "../controllers/AdminController";

ShopMediator.Get_My_Box_Buyers_Data = async (req, res) => {
    try {

        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.BuyerID != ""
            && req.body.SessionID != null && req.body.SessionID != ""
            && req.body.Box_Num != null && isFinite(req.body.Box_Num)
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Get_My_Box_Buyers_Data(req.body, BuyerData);


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

ShopMediator.getdelteData = async (req, res) => {
    try {
        let Result = await ShopController.getdelteData();
        res.json(Result);
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

ShopMediator.Get_Upgrade_Box_Product = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.BuyerID != ""
            && req.body.SessionID != null && req.body.SessionID != ""
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Get_Upgrade_Box_Product(req.body, BuyerData);
            //  console.log("45--->"+JSON.stringify(Result));
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

ShopMediator.Purchase_Box_Product = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Box_Product_Data = await CommonController.Check_for_Box_Product(req.body);
            let Result = await ShopController.Purchase_Box_Product(req.body, Box_Product_Data, BuyerData);
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

ShopMediator.User_Network_Heirarchy = async (req, res) => {
    try {
        console.log("92--->" + JSON.stringify(req.body));

        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.BuyerID != ""
            && req.body.SessionID != null && req.body.SessionID != ""
            && req.body.Network_USERID != null
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let NetworkUserData = await ShopController.User_Network_Heirarchy_Validate_Network_USERID(req.body);
            let Result = await ShopController.User_Network_Heirarchy(req.body, NetworkUserData);
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

ShopMediator.Coupons_NetworkData = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.BuyerID != ""
            && req.body.SessionID != null && req.body.SessionID != ""
            // && req.body.skip != null && isFinite(req.body.skip)
            // && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Coupons_NetWorkData(req.body, BuyerData);
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

ShopMediator.List_My_Referals = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.BuyerID != ""
            && req.body.SessionID != null && req.body.SessionID != ""
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.List_My_Referals(req.body, BuyerData);
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

ShopMediator.Buyer_Wallet_Logs = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.BuyerID != ""
            && req.body.SessionID != null && req.body.SessionID != ""
            && req.body.Logs_Type != null && req.body.Logs_Type != ""
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            console.log("174")
            console.time();

            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            console.time();
            console.log("179")
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            console.time();
            console.log("182")
            let Result = await ShopController.Buyer_Wallet_Logs(req.body, BuyerData);
            console.time();
            console.log("185")
            //  console.log("180---> "+JSON.stringify(Result));

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

ShopMediator.Buyer_Wallets = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.BuyerID != ""
            && req.body.SessionID != null && req.body.SessionID != ""
            && req.body.Type != null && req.body.Type != ""
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Buyer_Wallets(req.body, BuyerData);
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

ShopMediator.Check_User_Shops_Request_ShareAmount = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.BuyerID != ""
            && req.body.SessionID != null && req.body.SessionID != ""
            && req.body.Users_ShopsID != null && req.body.Users_ShopsID != ""
            && req.body.Total_Amount != null && req.body.Total_Amount != ""

        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let ShopData = await CommonController.Check_For_User_Shop(req.body);
            let Result = await ShopController.Check_User_Shops_Request_ShareAmount(req.body, BuyerData, ShopData);
            // let Result = await ShopController.User_Shops_Request_ShareAmount(req.body, BuyerData, ShopData);
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

ShopMediator.Check_User_Shop_By_PhoneNumber = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.Users_Shop_PhoneNumber != null && req.body.Users_Shop_PhoneNumber != ''
        ) {

            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let UserData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Check_User_Shop_By_PhoneNumber(req.body);
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

ShopMediator.List_All_User_Shops = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.NearFilter != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            if (!req.body.NearFilter) {
                let DeviceData = await CommonController.Check_for_Api_Key(req.body);
                let UserData = await CommonController.Check_For_Buyer_Session(req.body);
                let Result = await ShopController.List_All_User_Shops(req.body);
                res.json(Result);
            } else if (
                req.body.Latitude != null
                && req.body.NearFilter === true
                && req.body.Longitude != null
            ) {
                let DeviceData = await CommonController.Check_for_Api_Key(req.body);
                let UserData = await CommonController.Check_For_Buyer_Session(req.body);
                let Result = await ShopController.List_All_User_Shops(req.body);
                res.json(Result);
            } else {
                throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };

            }

        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

ShopMediator.List_With_Draw_Gift_Amount_Requests = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.skip != null
            // && isFinite(req.body.skip)
            && req.body.limit != null
            // && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.List_With_Draw_Gift_Amount_Requests(req.body, BuyerData);
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

ShopMediator.With_Draw_Gift_Amount = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.Gift_MeterID != null && req.body.Gift_MeterID != ''
            && req.body.WithDrawn_Amount != null && isFinite(req.body.WithDrawn_Amount)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let GiftMeterData = await CommonController.Check_For_Gift_Meter(req.body);
            let Result = await ShopController.With_Draw_Gift_Amount(req.body, BuyerData, GiftMeterData);
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

ShopMediator.Purchase_Logs = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
            // && req.body.Payment_Status != null && isFinite(req.body.Payment_Status)
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Purchase_Logs(req.body, BuyerData);
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

ShopMediator.List_Gift_Meter = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.skip != null
            // && isFinite(req.body.skip)
            && req.body.limit != null
            // && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.List_Gift_Meter(req.body, BuyerData);
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

ShopMediator.List_Target_Referals = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.skip != null
            // && isFinite(req.body.skip)
            && req.body.limit != null
            // && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.List_Target_Referals(req.body, BuyerData);
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

ShopMediator.Purchase_Coupon_Products = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.Coupons_ProductID != null && req.body.Coupons_ProductID != ''
        ) {

            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);

            let CProduct_Data = await CommonController.Check_for_Coupons_Product_box(req.body);

            let Result = await ShopController.Purchase_Coupon_Products(req.body, CProduct_Data, BuyerData);

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

ShopMediator.Accept_Reject_BuyerShare_Requests = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.Buyer_Shop_request_ID != null && req.body.Buyer_Shop_request_ID != ""
            && req.body.Approve_Reject != null && req.body.Approve_Reject != ""
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Share_RequestData = await CommonController.Buyer_Shop_Request_Data(req.body);
            let ShopData = await CommonController.Check_For_User_Shop(Share_RequestData);

            if (req.body.BuyerID == ShopData.BuyerID) {

                // let BuyerData = await CommonController.Check_for_Buyer(Share_RequestData);
                let Result = await AdminController.Accept_Reject_BuyerShare_Requests(req.body, ShopData, BuyerData, Share_RequestData);
                res.json(Result);
            } else {
                throw { success: false, extras: { msg: ApiMessages.BUYERID_AND_REQUESTID_NOT_MATCHED } };
            }

        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

ShopMediator.List_My_BuyerShare_Requests = async (req, res) => {
    try {
        console.log("494--->" + JSON.stringify(req.body))
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
            // && req.body.Status != null && isFinite(req.body.Status)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            // let ShopData = await CommonController.Check_For_User_Shop_BuyerID(req.body);
            let Result = await AdminController.List_My_BuyerShare_Requests(req.body, BuyerData);
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

ShopMediator.List_BuyerShare_Requests = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
            && req.body.Status != null && isFinite(req.body.Status)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let ShopData = await CommonController.Check_For_User_Shop_BuyerID(req.body);
            let Result = await AdminController.List_BuyerShare_Requests(req.body, ShopData);
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

ShopMediator.List_Coupon_Products = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.skip != null
            // && isFinite(req.body.skip)
            && req.body.limit != null
            // && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.List_Coupon_Products(req.body, BuyerData);
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

ShopMediator.User_Shops_Request_ShareAmount = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.BuyerID != ""
            && req.body.SessionID != null && req.body.SessionID != ""
            && req.body.Users_ShopsID != null && req.body.Users_ShopsID != ""
            && req.body.Total_Amount != null && req.body.Total_Amount != ""

        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let ShopData = await CommonController.Check_For_User_Shop(req.body);
            let Result = await ShopController.User_Shops_Request_ShareAmount_2(req.body, BuyerData, ShopData);
            // let Result = await ShopController.User_Shops_Request_ShareAmount(req.body, BuyerData, ShopData);
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

ShopMediator.Fetch_Shop_By_QRCODE = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.BuyerID != ""
            && req.body.SessionID != null && req.body.SessionID != ""
            && req.body.Users_ShopsID != null && req.body.Users_ShopsID != ""

        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            // let ShopData = await CommonController.Check_For_User_Shop_Data(req.body);
            let Result = await ShopController.Fetch_Shop_By_QRCODE(req.body, BuyerData);
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

ShopMediator.list_My_User_Shop = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.BuyerID != ""
            && req.body.SessionID != null && req.body.SessionID != ""

        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            // let ShopData = await CommonController.Check_For_User_Shop_Data(req.body);
            let Result = await ShopController.list_My_User_Shop(req.body, BuyerData);
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


ShopMediator.Register_Shop = async (req, res) => {
    try {
        console.log("Register_Shop ----> " + JSON.stringify(req.body));
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.BuyerID != ""
            && req.body.SessionID != null && req.body.SessionID != ""
            && req.body.Coupons_CategoryID != null && req.body.Coupons_CategoryID != ""
            && req.body.Users_Shop_Name != null && req.body.Users_Shop_Name != ""
            && req.body.Users_Shop_CountryCode != null && req.body.Users_Shop_CountryCode != ""
            && req.body.Users_Shop_PhoneNumber != null && req.body.Users_Shop_PhoneNumber != ""
            && req.body.Address != null && req.body.Address != ""
            && req.body.Latitude != null && req.body.Latitude != ""
            && req.body.Longitude != null && req.body.Longitude != ""
            && isBoolean(req.body.Whether_Pincode)
            && req.body.PincodeID != null

        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let ShopData = await CommonController.Check_For_User_Shop_Data(req.body);
            console.log("655----> " + JSON.stringify(ShopData));
            let CouponsCategoryData = await CommonController.Check_for_Coupons_Category_Data(req.body);
            console.log("657----> " + JSON.stringify(CouponsCategoryData));
            let PinCodeData = null
            if (req.body.Whether_Pincode) {
                PinCodeData = await CommonController.Check_for_PinCode_Data(req.body);
            }

           
            let Result = await ShopController.Register_Shop(req.body, BuyerData, PinCodeData);
            console.log("665----> " +JSON.stringify(Result));
            res.json(Result);

        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            console.log("675----> " +JSON.stringify(error));
            
            res.json(error);
        }
    }
}

ShopMediator.List_Coupons_Category = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.skip != null
            // && isFinite(req.body.skip)
            && req.body.limit != null
            // && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.List_Coupons_Category(req.body, BuyerData);
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

ShopMediator.List_All_App_Image_Resource = async (req, res) => {
    try {

        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.skip != null
            // && isFinite(req.body.skip)
            && req.body.limit != null
            // && isFinite(req.body.limit)
        ) {

            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.List_All_App_Image_Resource(req.body, BuyerData);
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

ShopMediator.List_All_Plots = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.skip != null
            // && isFinite(req.body.skip)
            && req.body.limit != null
            // && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.List_All_Plots(req.body, BuyerData);
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

ShopMediator.List_All_News = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.skip != null
            // && isFinite(req.body.skip)
            && req.body.limit != null
            // && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.List_All_News(req.body, BuyerData);
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

ShopMediator.Live_Bonanza_Status = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Live_Bonanza_Status(req.body, BuyerData);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(await CommonController.Common_Error_Handler(error));
        }
    }
}

ShopMediator.Product_Matrix_Referral_Amount = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.ProductID != null
            && req.body.Matrix != null && isFinite(req.body.Matrix) && !isNaN(req.body.Matrix)
        ) {
            if (req.body.Matrix > 0 && req.body.Matrix < 10) {
                let DeviceData = await CommonController.Check_for_Api_Key(req.body);
                let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
                let ProductData = await CommonController.Check_For_Product(req.body);
                let Result = await ShopController.Product_Matrix_Referral_Amount(req.body, BuyerData, ProductData);
                res.json(Result);
            } else {
                throw { success: false, extras: { msg: ApiMessages.INVALID_MATRIX } };
            }
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(await CommonController.Common_Error_Handler(error));
        }
    }
}

ShopMediator.Buyer_Withdraw_Amount = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.BeneficiaryID != null
            && req.body.Amount != null && isFinite(req.body.Amount) && !isNaN(req.body.Amount)
            && req.body.OTP != null && isFinite(req.body.OTP)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let ValidityStatus = await ShopController.Check_for_User_OTP_Tries_Count_Withdraw(BuyerData);
            ValidityStatus = await ShopController.Validate_OTP_Withdraw(BuyerData, req.body.OTP);
            let BeneficiaryData = await CommonController.Check_for_Buyer_Bank_Beneficiary_Account(req.body);
            if (BeneficiaryData.Status) {
                let Result = await ShopController.Buyer_Withdraw_Amount(req.body, BuyerData, BeneficiaryData);
                res.json(Result);
            } else {
                throw { success: false, extras: { msg: ApiMessages.ACCOUNT_NOT_ACTIVE } };
            }
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(await CommonController.Common_Error_Handler(error));
        }
    }
}

ShopMediator.Buyer_Fetch_Service_Amount = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.Amount != null && isFinite(req.body.Amount)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Buyer_Fetch_Service_Amount(req.body, BuyerData);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(await CommonController.Common_Error_Handler(error));
        }
    }
}

ShopMediator.Delete_Buyer_Beneficiary_Account = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.BeneficiaryID != null
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let BeneficiaryData = await CommonController.Check_for_Buyer_Bank_Beneficiary_Account(req.body);
            if (BeneficiaryData.Whether_Default_Account) {
                throw { success: false, extras: { msg: ApiMessages.CANNOT_REMOVE_DEFAULT_BENEFICIARY_ACCOUNT } };
            } else {
                let Result = await ShopController.Inactivate_Buyer_Beneficiary_Account_For_Bank_Account(req.body);
                res.json(Result);
            }
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(await CommonController.Common_Error_Handler(error));
        }
    }
}

ShopMediator.Update_Buyer_Beneficiary_Account_For_Bank_Account = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.BeneficiaryID != null
            && req.body.Name != null && req.body.Name != ''
            && req.body.Account_Number != null && isFinite(req.body.Account_Number) && !isNaN(req.body.Account_Number)
            && req.body.IFSC != null && req.body.IFSC != ''
        ) {
            req.body = JSON.parse(JSON.stringify(req.body));
            req.body.IFSC = req.body.IFSC.toUpperCase();
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let BeneficiaryData = await CommonController.Check_for_Buyer_Bank_Beneficiary_Account(req.body);
            let BankData = await CommonController.Validate_IFSC_Code(req.body);
            let ValidityStatus = await ShopController.Validate_Buyer_Beneficiary_Account_For_Bank_Account_Number_Already_Exist(req.body);
            let Result = await ShopController.Update_Buyer_Beneficiary_Account_For_Bank_Account(req.body, BankData, BuyerData);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(await CommonController.Common_Error_Handler(error));
        }
    }
}

ShopMediator.Make_Default_Buyer_Beneficiary_Account_For_Bank_Account = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.BeneficiaryID != null
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let BeneficiaryData = await CommonController.Check_for_Buyer_Bank_Beneficiary_Account(req.body);
            let Result = await ShopController.Make_Default_Buyer_Beneficiary_Account_For_Bank_Account(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(await CommonController.Common_Error_Handler(error));
        }
    }
}

ShopMediator.List_All_Buyer_Beneficiary_Accounts = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.List_All_Buyer_Beneficiary_Accounts(req.body, BuyerData);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(await CommonController.Common_Error_Handler(error));
        }
    }
}

ShopMediator.Add_Buyer_Beneficiary_Account_For_Bank_Account = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.Whether_Default_Account != null && isBoolean(req.body.Whether_Default_Account)
            && req.body.Name != null && req.body.Name != ''
            && req.body.Account_Number != null && isFinite(req.body.Account_Number) && !isNaN(req.body.Account_Number)
            && req.body.IFSC != null && req.body.IFSC != ''
        ) {
            req.body = JSON.parse(JSON.stringify(req.body));
            req.body.IFSC = req.body.IFSC.toUpperCase();
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let BankData = await CommonController.Validate_IFSC_Code(req.body);
            let ValidityStatus = await ShopController.Validate_Buyer_Beneficiary_Account_For_Bank_Account_Number_Already_Exist(req.body);
            let Result = await ShopController.Add_Buyer_Beneficiary_Account_For_Bank_Account(req.body, BankData, BuyerData);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(await CommonController.Common_Error_Handler(error));
        }
    }
}

///////////

ShopMediator.Get_Product_Details_For_Shop = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.ShopID != null && req.body.SessionID != null
            && req.body.ProductID != null && req.body.ProductID != ''
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let ShopData = await CommonController.Check_For_Shop(req.body);
            let Result = await ShopController.Get_Product_Details(req.body)
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

ShopMediator.Get_Product_Details = async (req, res) => {
    try {
        if (
            req.body.Unique_ProductID != null && req.body.Unique_ProductID != ''
        ) {
            let Result = await ShopController.Get_Product_Details(req.body)
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

ShopMediator.Get_Product_Details_For_Buyer = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.ProductID != null && req.body.ProductID != ''
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            //let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Get_Product_Details(req.body)
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

ShopMediator.Validate_Referral_Phone_Number = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.PhoneNumber != null && req.body.PhoneNumber != ''
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let UserData = await CommonController.Check_For_Buyer_Session(req.body);
            let ReferralData = await ShopController.Validate_Referral_Phone_Number(req.body, UserData);
            res.json({ success: true, extras: { Data: { Buyer_Name: ReferralData.Buyer_Name }, Status: "Referral Available" } });
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}


ShopMediator.Check_Phone_Number = async (req, res) => {
    try {
        if (
           req.body.PhoneNumber != null && req.body.PhoneNumber != ''
        ) {

            let Result = await CommonController.Check_Phone_Number(req.body);
           

            res.json({ success: true, extras: { Data: Result } });
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}


ShopMediator.Generate_ShopOTP_For_Buyer_Order = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.OrderID != null && req.body.OrderID != ''
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let ShopData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Generate_ShopOTP_For_Buyer_Order(req.body);
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


ShopMediator.Buyer_Referals = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.Selected_BuyerID != null && req.body.Selected_BuyerID != ''
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let ValidateData = await CommonController.Check_for_Buyer({ BuyerID: req.body.Selected_BuyerID });
            let Result = await ShopController.Buyer_Referals(req.body);
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

ShopMediator.Complete_Buyer_Order = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.ShopID != null && req.body.SessionID != null
            && req.body.ShopOTP != null && req.body.ShopOTP != ''
            && req.body.OrderID != null && req.body.OrderID != ''
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let ShopData = await CommonController.Check_For_Shop(req.body);
            let Result = await ShopController.Complete_Buyer_Order(req.body);
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

ShopMediator.Check_Buyer_Order = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.ShopID != null && req.body.SessionID != null
            && req.body.Order_Number != null && isFinite(req.body.Order_Number)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let ShopData = await CommonController.Check_For_Shop(req.body);
            let Result = await ShopController.Check_Buyer_Order(req.body);
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

ShopMediator.List_All_Shop_Buyer_Order = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.ShopID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
            && req.body.Search != null
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let ShopData = await CommonController.Check_For_Shop(req.body);
            let Result = await ShopController.List_All_Shop_Buyer_Order(req.body);
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

ShopMediator.List_All_Delivery_Type = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null

        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let UserData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.List_All_Delivery_Type(req.body);
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

ShopMediator.Pincode = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.PinCode != null && isFinite(req.body.PinCode)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let UserData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Pincode(req.body);
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

ShopMediator.List_All_Banner = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            //let UserData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.List_All_Banner(req.body);
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

ShopMediator.List_All_Help_Data = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            //let UserData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.List_All_Help_Data(req.body);
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

ShopMediator.Buyer_Wallet_log = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let UserData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Buyer_Wallet_log(req.body);
            console.log("1266----->" + JSON.stringify(Result));
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

ShopMediator.Home_Screen_Details = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let UserData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Home_Screen_Details(req.body);
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

ShopMediator.Cancel_Single_Order = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.OrderID != null && req.body.OrderID != ''
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let UserData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Cancel_Single_Order(req.body);
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

ShopMediator.Get_Buyer_Single_Order = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.OrderID != null && req.body.OrderID != ''
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let UserData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Get_Buyer_Single_Order(req.body, 1);
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

ShopMediator.List_Buyer_Orders = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.Start_Date != null && req.body.Start_Date != ''
            && req.body.End_Date != null && req.body.End_Date != ''
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
            && req.body.Status != null && isBoolean(req.body.Status)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let UserData = await CommonController.Check_For_Buyer_Session(req.body);
            let ValidityStatus = await CommonController.Common_Start_Date_End_Date_Validation(req.body);
            let Result = await ShopController.List_Buyer_Orders(req.body);
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

ShopMediator.List_All_Shops = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.Latitude != null
            && req.body.Longitude != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let UserData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.List_All_Shops(req.body);
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

ShopMediator.Payment_for_Buyer_Order = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.OrderID != null
            && req.body.Total_Amount != null
            && req.body.Wallet_Amount != null
            && req.body.Online_Amount != null
            && req.body.Amount_Used_From_Wallet != null
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Payment_for_Buyer_Order(req.body, BuyerData);
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

ShopMediator.Delete_Buyer_Order = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.OrderID != null
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Delete_Buyer_Order(req.body, BuyerData);
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

ShopMediator.Edit_Checkout_Buyer_Cart = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.OrderID != null && req.body.OrderID != ''
            && req.body.AddressID != null
            && req.body.Delivery_Type != null && isFinite(req.body.Delivery_Type)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Edit_Checkout_Buyer_Cart(req.body, BuyerData);
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

ShopMediator.Checkout_Buyer_Cart = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.Delivery_Type != null && isFinite(req.body.Delivery_Type)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Checkout_Buyer_Cart(req.body, BuyerData);
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

ShopMediator.List_All_Products_In_Buyer_Cart = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.List_All_Products_In_Buyer_Cart(req.body, BuyerData);

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

ShopMediator.Remove_All_Product_From_Cart = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Remove_All_Product_From_Cart(req.body);
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

ShopMediator.Add_Product_To_Cart = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.ProductID != null && req.body.ProductID != ''
            && req.body.Add_Remove != null && isFinite(req.body.Add_Remove)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let ProductData = await CommonController.Check_For_Product(req.body);
            let Result = await ShopController.Add_Product_To_Cart(req.body, ProductData, BuyerData);
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

ShopMediator.Add_Bulk_Product_To_Cart = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.ProductID != null && req.body.ProductID != ''
            && req.body.Add_Remove != null && isFinite(req.body.Add_Remove)
            && req.body.Quantity != null && isFinite(req.body.Quantity)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let ProductData = await CommonController.Check_For_Product(req.body);
            let Result = await ShopController.Add_Bulk_Product_To_Cart(req.body, ProductData, BuyerData);
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

ShopMediator.List_All_Products_For_Buyer = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = '';
            if (req.body.BuyerID != '') {
                BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            }
            let Result = await ShopController.List_All_Products_For_Buyer(req.body, BuyerData);
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

ShopMediator.List_All_Category = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
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

ShopMediator.List_All_Products_For_Buyer_Category = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
            && req.body.CategoryID != null

        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = '';
            if (req.body.BuyerID != '') {
                BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            }
            //let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.List_All_Products_For_Buyer_Category(req.body, BuyerData);
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

ShopMediator.List_Buyer_Address = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.List_Buyer_Address(req.body);
            res.json(Result);

        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
};

ShopMediator.Remove_Buyer_Address = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.AddressID != null && req.body.AddressID != ''
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Remove_Buyer_Address(req.body);
            res.json(Result);

        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
};

ShopMediator.Edit_Buyer_Address = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.AddressID != null && req.body.AddressID != ''
            && req.body.Name != null && req.body.Name != ''
            && req.body.PhoneNumber != null && req.body.PhoneNumber != ''
            && req.body.Flat_No != null
            && req.body.Plot_No != null
            && req.body.Postal_Code != null && req.body.Postal_Code != ''
            && req.body.State != null
            && req.body.City != null
            && req.body.Land_Mark != null
            && req.body.Address_Type != null && req.body.Address_Type != ''
            && req.body.Address_Default != null && isBoolean(req.body.Address_Default)
            && req.body.Latitude != null && req.body.Latitude != ''
            && req.body.Longitude != null && req.body.Longitude != ''
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Edit_Buyer_Address(req.body);
            res.json(Result);

        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
};

ShopMediator.Add_Buyer_Address = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.Name != null && req.body.Name != ''
            && req.body.PhoneNumber != null && req.body.PhoneNumber != ''
            && req.body.Flat_No != null
            && req.body.Plot_No != null
            && req.body.Postal_Code != null && req.body.Postal_Code != ''
            && req.body.State != null
            && req.body.City != null
            && req.body.Land_Mark != null
            && req.body.Address_Type != null && req.body.Address_Type != ''
            && req.body.Address_Default != null && isBoolean(req.body.Address_Default)
            && req.body.Latitude != null && req.body.Latitude != ''
            && req.body.Longitude != null && req.body.Longitude != ''
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Add_Buyer_Address(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
};

ShopMediator.Buyer_Update_Profile = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.Buyer_Name != null && req.body.Buyer_Name != ''
            && req.body.Buyer_PhoneNumber != null
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Buyer_Update_Profile(req.body);
            res.json(Result);
            let Buyer_Network_Processing = await ShopController.Buyer_Network_Processing(req.body, BuyerData);

        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
};

ShopMediator.Buyer_Register = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.Buyer_Name != null && req.body.Buyer_Name != ''
            && req.body.Ref_PhoneNumber != null
        ) {

            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);

            let BuyerAlreadyreg = await CommonController.Check_For_Buyer_Already_reg(req.body);

            // let Buyer_Network_Processing = await ShopController.Buyer_Network_Processing(req.body, BuyerData);

            let ReferralData = await ShopController.Register_Buyer_Validate_Referral_Phone_Number(req.body, BuyerData);

            let Result = await ShopController.Buyer_Register(req.body, ReferralData);

            res.json(Result);

            let Buyer_Ultimate_Network_Processing = await ShopController.Buyer_Ultimate_Network_Processing(req.body, BuyerData, ReferralData);



        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
};

ShopMediator.Validate_Buyer_OTP = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.Buyer_CountryCode != null && req.body.Buyer_CountryCode != ''
            && req.body.Buyer_PhoneNumber != null && req.body.Buyer_PhoneNumber != ''
            && req.body.OTP != null && isFinite(req.body.OTP)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let ValidityStatus = await ShopController.Check_for_User_OTP_Tries_Count(req.body);
            ValidityStatus = await ShopController.Validate_Buyer_OTP(req.body);
            let Result = await ShopController.Find_or_Create_Buyer_Information(req.body, DeviceData);
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

ShopMediator.Generate_Buyer_OTP = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.Buyer_CountryCode != null && req.body.Buyer_CountryCode != ''
            && req.body.Buyer_PhoneNumber != null && req.body.Buyer_PhoneNumber != ''
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let ValidityStatus = await ShopController.Check_for_OTP_Count(req.body);
            let Result = await ShopController.Generate_Buyer_OTP_Send_Message(req.body);

            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
};

ShopMediator.Shop_Get_All_Product_Stock_Logs = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.ShopID != null && req.body.SessionID != null
            && req.body.ProductID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let ShopData = await CommonController.Check_For_Shop(req.body);
            let ProductData = await CommonController.Check_For_Product(req.body);
            let Result = await ShopController.Shop_Get_All_Product_Stock_Logs(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
};

ShopMediator.Generate_OTP_for_Withdraw_Amount = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.BuyerID != ''
            && req.body.SessionID != null && req.body.SessionID != ''
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let ValidityStatus = await ShopController.Check_for_OTP_Count_Withdraw(BuyerData);
            let Result = await ShopController.Generate_OTP_Send_Message_Withdraw(BuyerData);
            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
};

ShopMediator.Shop_List_All_Wallet_Logs_Date_Filter = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.ShopID != null && req.body.SessionID != null
            && req.body.Start_Date != null && req.body.Start_Date != ''
            && req.body.End_Date != null && req.body.End_Date != ''
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let ShopData = await CommonController.Check_For_Shop(req.body);
            let ValidityStatus = await CommonController.Common_Start_Date_End_Date_Validation(req.body);
            let Result = await ShopController.Shop_List_All_Wallet_Logs_Date_Filter(req.body);
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


ShopMediator.Shop_List_All_Wallet_Logs = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.ShopID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let ShopData = await CommonController.Check_For_Shop(req.body);
            let Result = await ShopController.Shop_List_All_Wallet_Logs(req.body);
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

ShopMediator.Shop_Purchase_Ordered_Delivered = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.ShopID != null && req.body.SessionID != null
            && req.body.PurchaseID != null
            && req.body.Description != null && req.body.Description != ''
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let ShopData = await CommonController.Check_For_Shop(req.body);
            let PurchaseData = await CommonController.Check_for_Shop_Purchase(req.body);
            let ValidityStatus = await ShopController.Shop_Purchase_Ordered_Delivered_Validate_Status(PurchaseData);
            let Result = await ShopController.Shop_Purchase_Ordered_Delivered(req.body);
            res.json(Result);
            let ProcessOrderStocks = await ShopController.Shop_Purchase_Ordered_Delivered_Process_Update_Stocks(PurchaseData);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

ShopMediator.Shop_List_All_Purchases = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.ShopID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let ShopData = await CommonController.Check_For_Shop(req.body);
            let Result = await ShopController.Shop_List_All_Purchases(req.body);
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

ShopMediator.Shop_Wallet_Details = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.ShopID != null && req.body.SessionID != null
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let ShopData = await CommonController.Check_For_Shop(req.body);
            await res.json({ success: true, extras: { Data: ShopData } });
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

ShopMediator.Shop_Purchase_Stocks = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.ShopID != null && req.body.SessionID != null
            && req.body.Cart_Information != null && req.body.Cart_Information.length > 0
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let ShopData = await CommonController.Check_For_Shop(req.body);
            let PurchaseRequireData = await ShopController.Shop_Purchase_Stocks_Validate_Cart_Information(req.body);
            let Cart_Information = await PurchaseRequireData[0];
            let Total_Amount = await PurchaseRequireData[1];
            let ValidityStatus = await ShopController.Shop_Purchase_Stocks_Validate_Shop_and_Cart_Amount(Total_Amount, ShopData);
            let Result = await ShopController.Shop_Purchase_Stocks(req.body, Cart_Information, Total_Amount, ShopData);
            await res.json(Result);
            let AdminQuantityUpdate = await ShopController.Update_Product_Stock_in_Admin_Store(Cart_Information);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

ShopMediator.Shop_Add_Amount_From_Razorpay_To_Wallet = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.ShopID != null && req.body.SessionID != null
            && req.body.PaymentID != null && req.body.PaymentID != ''
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let ShopData = await CommonController.Check_For_Shop(req.body);
            let PaymentData = await RazorpayController.Check_Razorpay_Payment(req.body.PaymentID);
            PaymentData = await RazorpayController.Capture_Razorpay_Payment(req.body.PaymentID, PaymentData.amount)
            let Result = await ShopController.Shop_Add_Amount_From_Razorpay_To_Wallet(req.body, PaymentData);
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

ShopMediator.Get_All_Products = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.ShopID != null && req.body.SessionID != null
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let ShopData = await CommonController.Check_For_Shop(req.body);
            let Result = await ShopController.Get_All_Products(req.body);
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

ShopMediator.Apply_Buyer_Offer = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.ShopID != null && req.body.SessionID != null
            && req.body.OfferCode != null && req.body.OfferCode != ''
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let ShopData = await CommonController.Check_For_Shop(req.body);
            let OfferData = await CommonController.Check_for_Buyer_Offer_Code(req.body);
            let ValidityStatus = await ShopController.Apply_Buyer_Offer_Validate_Offer(OfferData);
            let BuyerData = await CommonController.Check_for_Buyer(OfferData);
            let Result = await ShopController.Apply_Buyer_Offer(req.body, OfferData, BuyerData, ShopData);
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

ShopMediator.Fetch_Offer_Code_Details = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.ShopID != null && req.body.SessionID != null
            && req.body.OfferCode != null && req.body.OfferCode != ''
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let ShopData = await CommonController.Check_For_Shop(req.body);
            let OfferData = await CommonController.Check_for_Buyer_Offer_Code(req.body);
            let Result = await ShopController.Fetch_Offer_Code_Details(req.body, OfferData);
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

ShopMediator.Shop_List_All_Bills = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.ShopID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let ShopData = await CommonController.Check_For_Shop(req.body);
            let Result = await ShopController.Shop_List_All_Bills(req.body);
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

ShopMediator.Shop_Generate_Bill_Delivery_Type_3 = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.ShopID != null && req.body.SessionID != null
            && req.body.Buyer_Name != null && req.body.Buyer_Name != ''
            && req.body.Buyer_CountryCode != null && req.body.Buyer_CountryCode != ''
            && req.body.Buyer_PhoneNumber != null && req.body.Buyer_PhoneNumber != ''
            && req.body.Cart_Information != null && req.body.Cart_Information.length > 0
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let ShopData = await CommonController.Check_For_Shop(req.body);
            let BuyerData = await ShopController.Find_or_Create_Buyer_Information(req.body, '');
            let Result = await ShopController.Shop_Generate_Bill_Delivery_Type_3(req.body, BuyerData);
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

ShopMediator.Shop_Generate_Bill = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.ShopID != null && req.body.SessionID != null
            && req.body.Buyer_Name != null && req.body.Buyer_Name != ''
            && req.body.Buyer_CountryCode != null && req.body.Buyer_CountryCode != ''
            && req.body.Buyer_PhoneNumber != null && req.body.Buyer_PhoneNumber != ''
            && req.body.Cart_Information != null && req.body.Cart_Information.length > 0
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let ShopData = await CommonController.Check_For_Shop(req.body);
            let BuyerData = await ShopController.Find_or_Create_Buyer_Information(req.body, '');
            let BillRequireData = await ShopController.Shop_Generate_Bill_Validate_Cart_Information(req.body);
            let Cart_Information = await BillRequireData[0];
            let Total_Amount = await BillRequireData[1];
            let BillGeneratedData = await ShopController.Shop_Generate_Bill(req.body, BuyerData, Cart_Information, Total_Amount);
            let Result = await BillGeneratedData[0];
            let BillData = await BillGeneratedData[1];
            await res.json(Result);
            let Update_Shop_Sales_Product_Stocks_Processing = await ShopController.Shop_Generate_Bill_Update_Shop_Product_Stocks_After_Sale(BillData);
            let Total_Bill_Share_Processing = await ShopController.Shop_Generate_Bill_Total_Product_Share_Processing(ShopData, BuyerData, BillData);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

ShopMediator.Shop_Get_All_Product_Stocks = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.ShopID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let ShopData = await CommonController.Check_For_Shop(req.body);
            let Result = await ShopController.Shop_Get_All_Product_Stocks(req.body);
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

ShopMediator.Shop_Login = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.Shop_CountryCode != null && req.body.Shop_CountryCode != ''
            && req.body.Shop_PhoneNumber != null && req.body.Shop_PhoneNumber != ''
            && req.body.Shop_Password != null && req.body.Shop_Password != ''
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let ShopData = await ShopController.Shop_Login_Validate_PhoneNumber_Already_Exist(req.body);
            let Result = await ShopController.Shop_Login(req.body, ShopData);
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

ShopMediator.Search_All_Products_And_Buyer_Category = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
            && req.body.SearchValue != null

        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = '';
            if (req.body.BuyerID != '') {
                BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            }
            //let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Search_All_Products_And_Buyer_Category(req.body, BuyerData);
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

ShopMediator.List_All_States = async (req, res) => {
    try {
        console.log("Entering api=------------>");
        console.log(req.body)
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.skip != null
            // && isFinite(req.body.skip)
            && req.body.limit != null
            // && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.List_All_States(req.body,BuyerData);
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
ShopMediator.List_All_Districts = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
            
            && req.body.skip != null
            // && isFinite(req.body.skip)
            && req.body.limit != null
            // && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.List_All_Districts(req.body,BuyerData);
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

ShopMediator.List_All_Pincodes = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
            && req.body.DistrictID != null && req.body.DistrictID != ""
            && req.body.skip != null
            // && isFinite(req.body.skip)
            && req.body.limit != null
            // && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let DistrictData = await CommonController.Check_for_District(req.body)

            let Result = await ShopController.List_All_Pincodes(req.body,DistrictData);
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


ShopMediator.List_All_Pincodes_For_Placeorder = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null && req.body.SessionID != null
           
            && req.body.skip != null
            // && isFinite(req.body.skip)
            && req.body.limit != null
            // && isFinite(req.body.limit)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let BuyerData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.List_All_Pincodes_For_PlaceORder(req.body);
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


ShopMediator.Add_OR_Remove_Product_To_Cart = async (req, res) => {
    try {
        let values = JSON.parse(JSON.stringify(req.body));
        if (
            req.body.ApiKey != null && req.body.ApiKey != ""
            && req.body.BuyerID != null && req.body.BuyerID != ""
            && req.body.SessionID != null && req.body.SessionID != ""
            && req.body.Product_Name != null && req.body.Product_Name != ""
            && CommonController.isNumber(values.Add_Remove)
            && CommonController.isNumber(values.Weight)
            && CommonController.isNumber(values.Quantity)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let UserData = await CommonController.Check_For_Buyer_Session(req.body);
            // let Product_Data = await CommonController.Check_For_Products(values);
            let CartData = null
            // if (req.body.CartID != "") {
            CartData = await CommonController.Check_for_User_Cart(req.body);
            // }
            console.log("Entered Cartdata", CartData)
            let Result = await ShopController.Add_OR_Remove_Product_To_Cart(values, CartData, DeviceData);
            res.json(Result);
        } else {
            throw { success: false, extras: { code: 2, msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        res.json(error);
    }
}

ShopMediator.List_All_Cart_Items = async (req, res) => {
    try {
        let values = JSON.parse(JSON.stringify(req.body));
        console.log(values)
        if (
            req.body.ApiKey != null && req.body.ApiKey != ""
            && req.body.BuyerID != null
            && req.body.SessionID != null
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let CartData = null
            let UserData = await CommonController.Check_For_Buyer_Session(req.body);
            CartData = await CommonController.Check_for_User_Cart(req.body);


            if (CartData == null) {
                throw { success: false, extras: { code: 2, msg: ApiMessages.NO_CART_DATA_FOUND } };
            } else {
                let Result = await ShopController.List_All_Cart_Items(values, CartData);
                res.json(Result);
            }

        } else {
            throw { success: false, extras: { code: 2, msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        res.json(error);
    }
}

ShopMediator.Place_Order = async (req, res) => {
    try {
        let values = JSON.parse(JSON.stringify(req.body));

        if (
            req.body.ApiKey != null && req.body.ApiKey != ""
            && req.body.BuyerID != null && req.body.BuyerID != ""
            && req.body.SessionID != null && req.body.SessionID != ""
            && req.body.PincodeID != null && req.body.PincodeID != ""
            && CommonController.isNumber(values.Payment_Type)
            && CommonController.isNumber(values.Order_DeleveryType)
            && req.body.AddressID != null
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let UserData = await CommonController.Check_For_Buyer_Session(req.body);
            let UserShopPincodeData = await CommonController.Check_For_Pincode_Shop(req.body)
            let CartData = await CommonController.Check_for_User_Cart(req.body);

            let AddressData = {}
            if (values.Order_DeleveryType == 2) {
                AddressData = await CommonController.Check_for_User_Address(req.body);
            }


            if (CartData == null) {
                resolve({ success: true, extras: { Data: [] } });
              //  throw { success: false, extras: { code: 2, msg: ApiMessages.NO_CART_DATA_FOUND } };
            } else {

                CartData = await ShopController.List_All_Cart_Items(values, CartData)
                CartData = await CartData.extras.Data
                // let Result = { success: true, extras: { Data: CheckoutData } }
                let Result = await ShopController.Place_Order(req.body, CartData, UserShopPincodeData, AddressData)
                res.json(Result);
            }

        } else {
            throw { success: false, extras: { code: 2, msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        res.json(error);
    }
}

ShopMediator.List_My_Orders = async (req, res) => {
    try {
        if (
            req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
            && req.body.BuyerID != null
            && req.body.SessionID != null
            && req.body.ApiKey != null
        ) {

            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let UserData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.List_My_Orders(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { code: 2, msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        res.json(error);
    }
};

ShopMediator.Add_Address = async (req, res) => {
    try {
        let values = JSON.parse(JSON.stringify(req.body));
        if (
            req.body.ApiKey != null && req.body.ApiKey != ""
            && req.body.BuyerID != "" && req.body.BuyerID != ""
            && req.body.SessionID != null && req.body.SessionID != ""
            && req.body.Name != null && req.body.Name != ''
            && req.body.Street != null && req.body.Street != ''
            && req.body.Landmark != null && req.body.Landmark != ''
            && req.body.House_Flat_Block_NO != null && req.body.House_Flat_Block_NO != ''
            && req.body.PinCode != null && req.body.PinCode != ''
            && req.body.Address_Type != null && req.body.Address_Type != ''
            && req.body.Address_Default != null && isBoolean(req.body.Address_Default)
            && req.body.Latitude != null && req.body.Latitude != ''
            && req.body.Longitude != null && req.body.Longitude != ''
            && req.body.Address != null
            && req.body.PhoneNumber != null && req.body.PhoneNumber != ""
            && req.body.StateID != null && req.body.StateID != ""
            && req.body.DistrictID != null && req.body.DistrictID != ""
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let UserData = await CommonController.Check_For_Buyer_Session(req.body);
            let StateData = await CommonController.Check_for_State(values);
            let DistrictData = await CommonController.Check_for_District(req.body);
            let Result = await ShopController.Add_Address(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { code: 2, msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        res.json(error);
    }
}


ShopMediator.Edit_Address = async (req, res) => {
    try {
        let values = JSON.parse(JSON.stringify(req.body));
        if (

            req.body.SessionID != null && req.body.SessionID != ""
            && req.body.ApiKey != null && req.body.ApiKey != ""
            && req.body.BuyerID != null && req.body.BuyerID != ""
            && req.body.AddressID != null && req.body.AddressID != ''
            && req.body.Name != null && req.body.Name != ''
            && req.body.Street != null && req.body.Street != ''
            && req.body.Landmark != null && req.body.Landmark != ''
            && req.body.House_Flat_Block_NO != null
            && req.body.PinCode != null && req.body.PinCode != ''
            && req.body.Address_Type != null && req.body.Address_Type != ''
            && req.body.Address_Default != null && isBoolean(req.body.Address_Default)
            && req.body.Latitude != null && req.body.Latitude != ''
            && req.body.Longitude != null && req.body.Longitude != ''
            && req.body.Address != null
            && req.body.PhoneNumber != null && req.body.PhoneNumber != ""
            && req.body.StateID != null && req.body.StateID != ""
            && req.body.DistrictID != null && req.body.DistrictID != ""
            // && req.body.State != null && req.body.State != ""
            // && req.body.City != null && req.body.City != ""
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let UserData = await CommonController.Check_For_Buyer_Session(req.body);
            let StateData = await CommonController.Check_for_State(values);
            let DistrictData = await CommonController.Check_for_District(req.body);
            let Result = await ShopController.Edit_Address(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { code: 2, msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        res.json(error);
    }
};


ShopMediator.Remove_Address = async (req, res) => {
    try {
        if (
            req.body.AddressID != null && req.body.AddressID != ''
            && req.body.BuyerID != null
            && req.body.SessionID != null
            && req.body.ApiKey != null
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let UserData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.Remove_Address(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { code: 2, msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        res.json(error);
    }
};

ShopMediator.List_Address = async (req, res) => {
    try {
        if (
            req.body.skip != null && isFinite(req.body.skip)
            && req.body.limit != null && isFinite(req.body.limit)
            && req.body.BuyerID != null
            && req.body.SessionID != null
            && req.body.ApiKey != null
        ) {

            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let UserData = await CommonController.Check_For_Buyer_Session(req.body);
            let Result = await ShopController.List_Address(req.body);
            res.json(Result);
        } else {
            throw { success: false, extras: { code: 2, msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        res.json(error);
    }
};

ShopMediator.Request_OTP = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null
            && req.body.SessionID != null
            && req.body.OrderID != null && req.body.OrderID != ''
            && req.body.Total_Amount != null && req.body.Total_Amount != ""
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let UserData = await CommonController.Check_For_Buyer_Session(req.body);
            let OrderData = await CommonController.Check_for_Order_Data(req.body);

            // let ValidityStatus = await ShopController.Check_for_OTP_Count(req.body);
            let Result = await ShopController.Request_OTP(req.body, OrderData);

            res.json(Result);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
};
ShopMediator.Validate_Order_OTP = async (req, res) => {
    try {
        if (
            req.body.ApiKey != null
            && req.body.BuyerID != null
            && req.body.SessionID != null
            && req.body.OrderID != null && req.body.OrderID != ''
            && req.body.OTP != null && isFinite(req.body.OTP)
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let UserData = await CommonController.Check_For_Buyer_Session(req.body);
            let ValidityStatus = await ShopController.Check_for_Order_OTP_Tries_Count(req.body);
            ValidityStatus = await ShopController.Validate_Order_OTP(req.body);
            // let Result = await ShopController.Find_or_Create_Buyer_Information(req.body, DeviceData);
            let OrderData = await CommonController.Check_for_Order_OTP_Data(req.body);

            let BuyerData = await CommonController.Check_for_Buyer(OrderData);
            let ShopData = await CommonController.Check_For_User_Shop(OrderData);
            console.log("2654----->" +JSON.stringify())
            let Result = await ShopController.User_Shops_Request_ShareAmount_2_For_Order_sanjay(OrderData, BuyerData, ShopData);
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

ShopMediator.Purchase_State = async (req, res) => {
    try {
        let values = JSON.parse(JSON.stringify(req.body));

        if (
            req.body.ApiKey != null && req.body.ApiKey != ""
            && req.body.BuyerID != null && req.body.BuyerID != ""
            && req.body.SessionID != null && req.body.SessionID != ""
            && req.body.StateID != null && req.body.StateID != ""
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let UserData = await CommonController.Check_For_Buyer_Session_State_Purchase(req.body);
            let StateData = await CommonController.Check_for_State(values);
        //    let DistrictData = await CommonController.Check_for_District(req.body);
            let checkStateData = await CommonController.Check_for_State_Purchase(req.body,StateData)

            // let Result = { success: true, extras: { Data: CheckoutData } }
            let Result = await ShopController.Purchase_State(req.body,UserData)
            console.log("2685---->" +JSON.stringify(Result))
            res.json(Result);

        } else {
            throw { success: false, extras: { code: 2, msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        res.json(error);
    }
}

ShopMediator.Purchase_District = async (req, res) => {
    try {
        let values = JSON.parse(JSON.stringify(req.body));

        if (
            req.body.ApiKey != null && req.body.ApiKey != ""
            && req.body.BuyerID != null && req.body.BuyerID != ""
            && req.body.SessionID != null && req.body.SessionID != ""
            && req.body.DistrictID != null && req.body.DistrictID != ""
        ) {
            let DeviceData = await CommonController.Check_for_Api_Key(req.body);
            let UserData = await CommonController.Check_For_Buyer_Session_State_Purchase(req.body);
            
            console.log("2708---->" )
            let DistrictData = await CommonController.Check_for_District(req.body);
            console.log("2710---->" )
            let checkStateData = await CommonController.Check_for_District_Purchase(req.body,DistrictData)
            console.log("2712---->" )

            // let Result = { success: true, extras: { Data: CheckoutData } }
            let Result = await ShopController.Purchase_District(req.body,UserData)
            console.log("2713---->" +JSON.stringify(Result))
            res.json(Result);

        } else {
            throw { success: false, extras: { code: 2, msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        res.json(error);
    }
}



ShopMediator.Receive_Amount_From_DHWallet = async (req, res) => {
    try {
        if (
             req.body.PhoneNumber != null && req.body.PhoneNumber != '' && req.body.Amount != null
        ) {
            let PhoneNumber = await CommonController.Check_Phone_Number(req.body);
            let RecieveAmount = await CommonController.Receive_Amount_From_DHWallet(req.body,PhoneNumber);
            
            
           //let Result = await UserController.Transfer_Wallet(req.body);
            res.json(RecieveAmount);
        } else {
            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
        }
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}



export default ShopMediator;