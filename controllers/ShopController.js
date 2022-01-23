let ShopController = function () { };
import uuid from "uuid";
import https from "https";
import MaskData from "maskdata";
import ApiMessages from "../config/ApiMessages";
import CommonController from "./CommonController";
import Counters from "../models/Counters";
import async from "async";
import { isBoolean, Boolify } from "node-boolify";
import moment from "moment";
import config from "../config/config";
import Introducers from "../models/Introducers";
import Shops from "../models/Shops";
import Products from "../models/Products";
import Shop_Product_Stocks from "../models/Shop_Product_Stocks";
import Shop_Product_Stock_Logs from "../models/Shop_Product_Stock_Logs";
import Buyers from "../models/Buyers";
import Buyers_Network from "../models/Buyers_Network";
import Shop_Bills from "../models/Shop_Bills";
import Buyer_Share_Logs from "../models/Buyer_Share_Logs";
import Shop_Share_Logs from "../models/Shop_Share_Logs";
import Introducer_Share_Logs from "../models/Introducer_Share_Logs";
import Company_Share_Logs from "../models/Company_Share_Logs";
import Company_Share from "../models/Company_Share";
import Trimer_Share from "../models/Trimer_Share";
import Buyer_Offer_Message from "../models/Buyer_Offer_Message";
import Shop_Purchases from "../models/Shop_Purchases";
import Company_Shop_Purhase_Share_Logs from "../models/Company_Shop_Purhase_Share_Logs";
import Company_Shop_Purhase_Share from "../models/Company_Shop_Purhase_Share";
import MessagesController from "./MessagesController";
import Buyer_Address_Log from "../models/Buyer_Address_Log";
import Devices from "../models/Devices";
import User_OTPS from "../models/User_OTPS";
import User_OTP_Tries from "../models/User_OTP_Tries";
import Images from "../models/Images";
import Buyer_Orders from "../models/Buyer_Orders";
import Help_Data from "../models/Help_Data";
import Banner from "../models/Banner";
import Delivery_Type from "../models/Delivery_Type";
import Axios from "axios";
import RazorpayController from "./RazorpayController";
import Buyer_Wallet_Withdraw_Transactions from "../models/Buyer_Wallet_Withdraw_Transactions";
import Buyer_Wallet_Logs from "../models/Buyer_Wallet_Logs";
import Buyer_Bank_Beneficiary_Accounts from "../models/Buyer_Bank_Beneficiary_Accounts";
import User_Withdraw_OTPS from "../models/User_Withdraw_OTPS";
import User_Withdraw_OTP_Tries from "../models/User_Withdraw_OTP_Tries";
import Buyer_Bonanza_Log from "../models/Buyer_Bonanza_Log";
import News from "../models/News";
import Plots_Log from "../models/Plots_Log";
import App_Image_Resources from "../models/App_Image_Resources";
import Coupons_Category from "../models/Coupons_Category";
import Users_Shops from "../models/Users_Shops";
import AWSController from "./AWSController";
import Buyer_Shop_requests_Notification from "../models/Buyer_Shop_requests_Notification";
import Coupon_Products from "../models/Coupon_Products";
import Buyers_Ultimate_Network from "../models/Buyers_Ultimate_Network";
import Buyers_Purchase_Log from "../models/Buyers_Purchase_Log";
import AdminController from "./AdminController";
import Target_Referal from "../models/Target_Referal";
import Gift_Meter from "../models/Gift_Meter";
import Buyer_Gift_Amount_WithDrawn_Logs from "../models/Buyer_Gift_Amount_WithDrawn_Logs";
import Buyer_Purchase_Wallet_Logs from "../models/Buyer_Purchase_Wallet_Logs";
import Buyer_Expired_Amount_Wallet_Logs from "../models/Buyer_Expired_Amount_Wallet_Logs";
import Buyer_Gift_Coupons_Wallet_Logs from "../models/Buyer_Gift_Coupons_Wallet_Logs";
import Buyer_Update_Coupons_Wallet_Logs from "../models/Buyer_Update_Coupons_Wallet_Logs";
import Buyer_Box_Product_Purchased_Logs from "../models/Buyer_Box_Product_Purchased_Logs";
import Common_App_Settings from "../models/Common_App_Settings";
import Buyer_Upgrade_Coupons_Wallet_Logs from "../models/Buyer_Upgrade_Coupons_Wallet_Logs";
import Trimmer_Share_Wallet_Logs from "../models/Trimmer_Share_Wallet_Logs";
import Trimmer_Share_Wallet from "../models/Trimmer_Share_Wallet";
import Box_Amount_Share from "../models/Box_Amount_Share";
import GST_Serv_Stroe_Share_Wallet from "../models/GST_Serv_Stroe_Share_Wallet";
import GST_Serv_Stroe_Share_Wallet_Logs from "../models/GST_Serv_Stroe_Share_Wallet_Logs";
import Installed_Devices from "../models/Installed_Devices";
import Razorpay_Webhooks from "../models/Razorpay_Webhooks";
import Shop_Keepers_Trimming_Wallet from "../models/Shop_Keepers_Trimming_Wallet";
import Shop_Keepers_Trimming_Wallet_Logs from "../models/Shop_Keepers_Trimming_Wallet_Logs";
import MSG91Controller from "./MSG91Controller";


import States from "../models/State"
import Districts from "../models/District"
import Pincodes from "../models/Pincode"

import Cart from "../models/Cart"
import Orders from "../models/Orders"
import User_Address from "../models/User_Address"
import Order_Otp from "../models/Order_Otp"
import Order_OTP_Tries from "../models/Order_OTP_Tries"
import State_Transaction from "../models/State_Transaction"
import District_Transaction from "../models/District_Transaction"


ShopController.getdelteData = () => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let value = await Buyer_Address_Log.deleteMany({});
                console.log("87--> " + JSON.stringify(value));
                await Buyer_Box_Product_Purchased_Logs.deleteMany({});
                await Buyer_Expired_Amount_Wallet_Logs.deleteMany({});
                await Buyer_Gift_Coupons_Wallet_Logs.deleteMany({});
                await Buyer_Orders.deleteMany({});
                await Buyer_Purchase_Wallet_Logs.deleteMany({});
                await Buyer_Share_Logs.deleteMany({});
                await Buyer_Shop_requests_Notification.deleteMany({});
                await Buyer_Update_Coupons_Wallet_Logs.deleteMany({});
                await Buyer_Upgrade_Coupons_Wallet_Logs.deleteMany({});
                await Buyers.deleteMany({});
                await Buyers_Network.deleteMany({});
                await Buyers_Purchase_Log.deleteMany({});
                await Buyers_Ultimate_Network.deleteMany({});
                // console.log("101--> "+JSON.stringify(valuex));
                await Company_Share.deleteMany({});
                await Company_Share_Logs.deleteMany({});
                await Counters.deleteMany({});
                await Devices.deleteMany({});
                await GST_Serv_Stroe_Share_Wallet.deleteMany({});
                await GST_Serv_Stroe_Share_Wallet_Logs.deleteMany({});
                await Installed_Devices.deleteMany({});
                await Razorpay_Webhooks.deleteMany({});
                await Shop_Keepers_Trimming_Wallet.deleteMany({});
                await Shop_Keepers_Trimming_Wallet_Logs.deleteMany({});
                await Shops.deleteMany({});
                await Trimer_Share.deleteMany({});
                await Trimmer_Share_Wallet.deleteMany({});
                await Trimmer_Share_Wallet_Logs.deleteMany({});
                await User_OTPS.deleteMany({});
                await User_OTP_Tries.deleteMany({});
                await Users_Shops.deleteMany({});

                resolve("done")




            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Get_My_Box_Buyers_Data = (values, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let comn_query = {
                    Status: true
                }

                let Settings_Data = await Common_App_Settings.findOne(comn_query).lean().exec();
                let Box_One_Max_Amount = 0
                let Box_Two_Max_Amount = 0
                let Box_Three_Max_Amount = 0
                if (Settings_Data != null) {
                    Box_One_Max_Amount = Settings_Data.Box_One_Max_Amount
                    Box_Two_Max_Amount = Settings_Data.Box_Two_Max_Amount
                    Box_Three_Max_Amount = Settings_Data.Box_Three_Max_Amount
                } else {
                    Box_One_Max_Amount = config.Box_One_Max_Count
                    Box_Two_Max_Amount = config.Box_Two_Max_Amount
                    Box_Three_Max_Amount = config.Box_Three_Max_Amount
                }

                let Box_Num = (+values.Box_Num)

                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    created_at: -1
                };


                // Box_One_Count: { },
                // Box_One_Arr: [{}],

                let Box_Count = 0
                let Total_Box_Count = 0
                let Box_Buyers_Data;

                switch (Box_Num) {
                    case 1:
                        Total_Box_Count = Box_One_Max_Amount
                        Box_Count = BuyerData.Box_One_Count
                        Box_Buyers_Data = BuyerData.Box_One_Arr.slice(toSkip, toSkip + toLimit)
                        break;
                    case 2:
                        Total_Box_Count = Box_Two_Max_Amount
                        Box_Count = BuyerData.Box_Two_Count
                        Box_Buyers_Data = BuyerData.Box_Two_Arr.slice(toSkip, toSkip + toLimit)
                        break;
                    case 3:
                        Total_Box_Count = Box_Three_Max_Amount
                        Box_Count = BuyerData.Box_Three_Count
                        Box_Buyers_Data = BuyerData.Box_Three_Arr.slice(toSkip, toSkip + toLimit)
                        break;
                }

                async.eachSeries(Box_Buyers_Data, async (item, callback) => {
                    try {
                        let fquery = {
                            BuyerID: item.BuyerID
                        };
                        let Net_Work_BuyerData = await Buyers.findOne(fquery).select('Buyer_PhoneNumber Buyer_Name Current_Box Box_One_Arr Box_One_Count Box_Two_Count Box_Two_Arr Box_Three_Count Box_Three_Arr').lean().exec();
                        item.BuyerData = Net_Work_BuyerData

                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async (err) => {
                    if (err) reject(err);

                    //  

                    resolve({ success: true, extras: { Total_Box_Count, Count: Box_Count, Data: Box_Buyers_Data } });

                });



            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Get_Upgrade_Box_Product = (values, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Buyer_Purchased_Product = true
                let PD_query = {
                    BuyerID: values.BuyerID,
                    Payment_Status: 3
                };
                let PD_Result = await Buyer_Box_Product_Purchased_Logs.findOne(PD_query).lean();
                if (PD_Result != null) {
                    Buyer_Purchased_Product = true

                } else {
                    Buyer_Purchased_Product = false
                }
                let query = {
                    Status: true
                };

                let sortOptions = {
                    created_at: -1
                };

                let Count = await Box_Amount_Share.countDocuments(query).lean().exec();
                let Result = await Box_Amount_Share.findOne(query).lean().exec();
                console.log("187")
                if (Result != null) {
                    Result.Image_Data = await CommonController.Common_Image_Response_Single_Image(true, Result.Image_Data);
                    console.log("190")
                    resolve({ success: true, extras: { Data: Result, Buyer_Purchased_Product: Buyer_Purchased_Product } });
                    console.log("192")

                }
                else {
                    console.log("Buyer_Purchased_Product" + Buyer_Purchased_Product )
                    resolve({ success: true, extras: { Data: {}, Buyer_Purchased_Product: Buyer_Purchased_Product } });
                
                }
                console.log("195")


            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


ShopController.Single_Share_Amounts = (Product_Price, Box_Num, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Cash_Share = parseFloat(Box_Num.Cash_Percent);
                let Cash_Amount = parseFloat(Cash_Share * Product_Price / 100);
                let Purchace_Share = parseFloat(Box_Num.Purchace_Percent);
                let Purchace_Amount = parseFloat(Purchace_Share * Product_Price / 100);
                let Gift_Share = parseFloat(Box_Num.Gift_Percent);
                let Gift_Amount = parseFloat(Gift_Share * Product_Price / 100);
                let Upgrade_Coupon_Share = parseFloat(Box_Num.Upgrade_Coupon_Percent);
                let Upgrade_Coupon_Amount = parseFloat(Upgrade_Coupon_Share * Product_Price / 100);

                let Nine_Level_Share = parseFloat(Box_Num.Nine_Level_Percent);
                let Nine_Level_Amount = parseFloat(Nine_Level_Share * Product_Price / 100);

                let Total_Amount = Cash_Amount + Purchace_Amount + Gift_Amount + Upgrade_Coupon_Amount + Nine_Level_Amount

                let Data = {
                    Cash_Share,
                    Cash_Amount,
                    Purchace_Share,
                    Purchace_Amount,
                    Gift_Share,
                    Gift_Amount,
                    Upgrade_Coupon_Share,
                    Upgrade_Coupon_Amount,
                    Nine_Level_Share,
                    Nine_Level_Amount,
                    Total_Amount
                }
                resolve(Data)

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}



ShopController.Save_Wallet_Logs_Box_Share_new = (BuyerData, BoxPurchaseData, From_BuyerData, Box_Num) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                console.log("252---> Saving Logs for ---> " + BuyerData.Buyer_PhoneNumber + " - b -" + JSON.stringify(Box_Num));

                console.log("254---> Saving Logs for ---> " + BuyerData.BuyerID + " - b -" + JSON.stringify(Box_Num));
                let Ref_Query;
                if ((Box_Num.Current_Box == 2) && (Box_Num.Current_Box == 3)) {
                    Ref_Query = {
                        BuyerID: From_BuyerData.BuyerID
                    }
                } else {
                    Ref_Query = {
                        BuyerID: BoxPurchaseData.BuyerID
                    }
                }

                let Referal_Buyer_Data = await Buyers.findOne(Ref_Query).lean().exec();
                console.log("260---> Saving Logs fromuser ---> " + Referal_Buyer_Data.Buyer_PhoneNumber);



                let Data = {
                    Buyer_Name: Referal_Buyer_Data.Buyer_Name,
                    BuyerData: Referal_Buyer_Data.Buyer_Name
                }
                let EData = {
                    LogID: uuid.v4(),
                    BuyerID: BuyerData.BuyerID,
                    Type: 20, //Credit Amount for Buyer Purchase
                    Amount: Box_Num.Cash_Amount,
                    Data: Data,
                    Time: new Date()
                };
                let ESaveCData = await Buyer_Share_Logs(EData).save();

                let PData = {
                    LogID: uuid.v4(),
                    BuyerID: BuyerData.BuyerID,
                    Type: 1, //Credit Amount for Buyer Purchase
                    Amount: Box_Num.Purchace_Amount,
                    Data: Data,
                    Time: new Date()
                };
                let PSaveCData = await Buyer_Purchase_Wallet_Logs(PData).save();

                let GData = {
                    LogID: uuid.v4(),
                    BuyerID: BuyerData.BuyerID,
                    Type: 1, //Credit Amount for Buyer Purchase
                    Amount: Box_Num.Gift_Amount,
                    Data: Data,
                    Time: new Date()
                };
                let GSaveCData = await Buyer_Gift_Coupons_Wallet_Logs(GData).save();

                let UData = {
                    LogID: uuid.v4(),
                    BuyerID: BuyerData.BuyerID,
                    Type: 1, //Credit Amount for Buyer Purchase
                    Amount: Box_Num.Upgrade_Coupon_Amount,
                    Data: Data,
                    Time: new Date()
                };
                let USaveCData = await Buyer_Upgrade_Coupons_Wallet_Logs(UData).save();

                resolve("success")

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Save_Wallet_Logs_Box_Share = (BuyerData, BoxPurchaseData, From_BuyerData, Box_Num) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Data = {
                    Buyer_Name: From_BuyerData.Buyer_Name,
                    BuyerData: From_BuyerData.Buyer_Name
                }
                let EData = {
                    LogID: uuid.v4(),
                    BuyerID: BuyerData.BuyerID,
                    Type: 20, //Credit Amount for Buyer Purchase
                    Amount: Box_Num.Cash_Amount,
                    Data: Data,
                    Time: new Date()
                };
                let ESaveCData = await Buyer_Share_Logs(EData).save();

                let PData = {
                    LogID: uuid.v4(),
                    BuyerID: BuyerData.BuyerID,
                    Type: 1, //Credit Amount for Buyer Purchase
                    Amount: Box_Num.Purchace_Amount,
                    Data: Data,
                    Time: new Date()
                };
                let PSaveCData = await Buyer_Purchase_Wallet_Logs(PData).save();

                let GData = {
                    LogID: uuid.v4(),
                    BuyerID: BuyerData.BuyerID,
                    Type: 1, //Credit Amount for Buyer Purchase
                    Amount: Box_Num.Gift_Amount,
                    Data: Data,
                    Time: new Date()
                };
                let GSaveCData = await Buyer_Gift_Coupons_Wallet_Logs(GData).save();

                let UData = {
                    LogID: uuid.v4(),
                    BuyerID: BuyerData.BuyerID,
                    Type: 1, //Credit Amount for Buyer Purchase
                    Amount: Box_Num.Upgrade_Coupon_Amount,
                    Data: Data,
                    Time: new Date()
                };
                let USaveCData = await Buyer_Upgrade_Coupons_Wallet_Logs(UData).save();

                resolve("succcess");

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Updated_Box_Two_Sharing = (Updated_RefBuyerData, BuyerData, BoxPurchaseData, Box_One_Max_Amount, Box_Two_Max_Amount, Box_Three_Max_Amount) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let BQuery = {
                    BuyerID: Updated_RefBuyerData.BuyerID
                }

                let Updated_Current_Box = 0
                let Updated_Current_Box_Count = 0
                let U_flag = 0;
                if (Updated_RefBuyerData.Current_Box == 1 && Updated_RefBuyerData.Box_One_Count == Box_One_Max_Amount) {
                    Updated_Current_Box = 2
                    Updated_Current_Box_Count = 0
                    U_flag = 1
                }


                if (Updated_Current_Box == 2) {

                    //this buyer parent direct refral or ultimate network user

                    // let Total_Box_Two_Amount = Updated_RefBuyerData.Box_One_Upgrade_Amount_Available
                    // let Box_Two = await ShopController.Single_Share_Amounts(Total_Box_Two_Amount, BoxPurchaseData.Cart_Information.Box_Two, Updated_RefBuyerData)
                    // let Bchanges = {
                    //     $set: {
                    //         Current_Box: Updated_Current_Box,
                    //         // Current_Box_Count: Updated_Current_Box_Count,
                    //         updated_at: new Date()
                    //     },
                    //     $inc: {
                    //         Cash_Coupons_Amount_Available: Box_Two.Cash_Amount,
                    //         Cash_Coupons_Amount_Total: Box_Two.Cash_Amount,

                    //         Purchace_Coupons_Amount_Available: Box_Two.Purchace_Amount,
                    //         Purchace_Coupons_Amount_Total: Box_Two.Purchace_Amount,

                    //         Gift_Coupons_Amount_Available: Box_Two.Gift_Amount,
                    //         Gift_Coupons_Amount_Total: Box_Two.Gift_Amount,

                    //         Box_Two_Upgrade_Amount_Available: Box_Two.Upgrade_Coupon_Amount,
                    //         Box_Two_Upgrade_Amount_Total: Box_Two.Upgrade_Coupon_Amount,
                    //         Box_Two_Count: 1
                    //     },
                    //     $push: {
                    //         Box_Two_Arr: BoxPurchaseData,
                    //         Total_Box_Arr: BoxPurchaseData
                    //     }
                    // }
                    // //3 wallets create and add in logs
                    // let Save_Wallet_Logs = await ShopController.Save_Wallet_Logs_Box_Share(Updated_RefBuyerData, BoxPurchaseData, BuyerData, Box_Two)

                    // let UpdateData = await Buyers_Ultimate_Network.updateOne(BQuery, Bchanges).lean().exec()
                    // let UpdateBuyerData = await Buyers.updateOne(BQuery, Bchanges).lean().exec()
                }
                resolve("Success")

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Updated_Box_Three_Sharing = (Updated_RefBuyerData, BuyerData, BoxPurchaseData, Box_One_Max_Amount, Box_Two_Max_Amount, Box_Three_Max_Amount) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let BQuery = {
                    BuyerID: Updated_RefBuyerData.BuyerID
                }

                let Updated_Current_Box = 0
                let Updated_Current_Box_Count = 0
                let U_flag = 0;
                if (Updated_RefBuyerData.Current_Box == 1 && Updated_RefBuyerData.Current_Box_Count == Box_One_Max_Amount) {
                    Updated_Current_Box = 2
                    Updated_Current_Box_Count = 0
                    U_flag = 1
                } else if (Updated_RefBuyerData.Current_Box == 2 && Updated_RefBuyerData.Current_Box_Count == Box_Two_Max_Amount) {
                    Updated_Current_Box = 3
                    Updated_Current_Box_Count = 0
                    U_flag = 1
                } else if (Updated_RefBuyerData.Current_Box == 0 && Updated_RefBuyerData.Current_Box_Count == 0) {
                    Updated_Current_Box = 1
                    Updated_Current_Box_Count = 0
                    U_flag = 1
                }


                if (Updated_Current_Box == 2) {
                    let Total_Box_Three_Amount = Updated_RefBuyerData.Box_Two_Upgrade_Amount_Available
                    let Box_Three = await ShopController.Single_Share_Amounts(Total_Box_Three_Amount, BoxPurchaseData.Cart_Information.Box_Three, Updated_RefBuyerData)
                    let Bchanges = {
                        $set: {
                            Current_Box: Updated_Current_Box,
                            Current_Box_Count: Updated_Current_Box_Count,
                            updated_at: new Date()
                        },
                        $inc: {
                            Cash_Coupons_Amount_Available: Box_Three.Cash_Amount,
                            Cash_Coupons_Amount_Total: Box_Three.Cash_Amount,

                            Purchace_Coupons_Amount_Available: Box_Three.Purchace_Amount,
                            Purchace_Coupons_Amount_Total: Box_Three.Purchace_Amount,

                            Gift_Coupons_Amount_Available: Box_Three.Gift_Amount,
                            Gift_Coupons_Amount_Total: Box_Three.Gift_Amount,

                            Box_Three_Upgrade_Amount_Available: Box_Three.Upgrade_Coupon_Amount,
                            Box_Three_Upgrade_Amount_Total: Box_Three.Upgrade_Coupon_Amount,
                            Box_Three_Count: 1
                        },
                        $push: {
                            Box_Three_Arr: { BuyerID: BuyerData.BuyerID },
                            Total_Box_Arr: BoxPurchaseData
                        }
                    }
                    //3 wallets create and add in logs
                    let Save_Wallet_Logs = await ShopController.Save_Wallet_Logs_Box_Share(Updated_RefBuyerData, BoxPurchaseData, BuyerData, Box_Three)

                    let UpdateData = await Buyers_Ultimate_Network.updateOne(BQuery, Bchanges).lean().exec()
                    let UpdateBuyerData = await Buyers.updateOne(BQuery, Bchanges).lean().exec()
                }
                resolve("Success")

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Refral_Buyer_Box_Share = (Referal_Buyer_Data, BuyerData, Box_One, BoxPurchaseData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let comn_query = {
                    Status: true
                }

                let Settings_Data = await Common_App_Settings.findOne(comn_query).lean().exec();
                let Box_One_Max_Amount = 0
                let Box_Two_Max_Amount = 0
                let Box_Three_Max_Amount = 0
                if (Settings_Data != null) {
                    Box_One_Max_Amount = Settings_Data.Box_One_Max_Amount
                    Box_Two_Max_Amount = Settings_Data.Box_Two_Max_Amount
                    Box_Three_Max_Amount = Settings_Data.Box_Three_Max_Amount
                } else {
                    Box_One_Max_Amount = config.Box_One_Max_Count
                    Box_Two_Max_Amount = config.Box_Two_Max_Amount
                    Box_Three_Max_Amount = config.Box_Three_Max_Amount
                }
                let Setting_Data = {
                    Box_One_Max_Amount,
                    Box_Two_Max_Amount,
                    Box_Three_Max_Amount
                }

                let BQuery = {
                    BuyerID: Referal_Buyer_Data.BuyerID
                }

                let Current_Box = 0
                let Current_Box_Count = 0
                let flag = 0;
                if (Referal_Buyer_Data.Current_Box == 1 && Referal_Buyer_Data.Current_Box_Count == Box_One_Max_Amount) {
                    Current_Box = 2
                    Current_Box_Count = 0
                    flag = 1
                } else if (Referal_Buyer_Data.Current_Box == 2 && Referal_Buyer_Data.Current_Box_Count == Box_Two_Max_Amount) {
                    Current_Box = 3
                    Current_Box_Count = 0
                    flag = 1
                } else if (Referal_Buyer_Data.Current_Box == 0) {
                    Current_Box = 1
                    Current_Box_Count = 0
                    flag = 1
                }

                // if (Referal_Buyer_Data.Current_Box == 1) {
                //     Current_Box = 1
                // } else if (Referal_Buyer_Data.Current_Box == 2) {
                //     Current_Box = 2
                // } else if (Referal_Buyer_Data.Current_Box == 3) {
                //     Current_Box = 3
                // }
                if (Current_Box == 1) {
                    let Bchanges = {
                        $set: {
                            Current_Box: Current_Box,
                            Current_Box_Count: Current_Box_Count,
                            updated_at: new Date()
                        },
                        $inc: {
                            Cash_Coupons_Amount_Available: Box_One.Cash_Amount,
                            Cash_Coupons_Amount_Total: Box_One.Cash_Amount,

                            Purchace_Coupons_Amount_Available: Box_One.Purchace_Amount,
                            Purchace_Coupons_Amount_Total: Box_One.Purchace_Amount,

                            Gift_Coupons_Amount_Available: Box_One.Gift_Amount,
                            Gift_Coupons_Amount_Total: Box_One.Gift_Amount,

                            Box_One_Upgrade_Amount_Available: Box_One.Upgrade_Coupon_Amount,
                            Box_One_Upgrade_Amount_Total: Box_One.Upgrade_Coupon_Amount,
                            Box_One_Count: 1
                        },
                        $push: {
                            Box_One_Arr: BoxPurchaseData,
                            Total_Box_Arr: BoxPurchaseData
                        }
                    }
                    //3 wallets create and add in logs
                    let Save_Wallet_Logs = await ShopController.Save_Wallet_Logs_Box_Share(Referal_Buyer_Data, BoxPurchaseData, BuyerData, Box_One)

                    let UpdateData = await Buyers_Ultimate_Network.updateOne(BQuery, Bchanges).lean().exec()
                    let UpdateBuyerData = await Buyers.updateOne(BQuery, Bchanges).lean().exec()
                } else {
                    //expire
                }

                //Box 2 functionality
                let Updated_RefBuyerData = await Buyers.findOne(BQuery).lean().exec()

                let Box_TWO = await ShopController.Updated_Box_Two_Sharing(Updated_RefBuyerData, BuyerData, BoxPurchaseData, Box_One_Max_Amount, Box_Two_Max_Amount, Box_Three_Max_Amount)

                Updated_RefBuyerData = await Buyers.findOne(BQuery).lean().exec()

                let Box_Three = await ShopController.Updated_Box_Three_Sharing(Updated_RefBuyerData, BuyerData, BoxPurchaseData, Box_One_Max_Amount, Box_Two_Max_Amount, Box_Three_Max_Amount)

                resolve("Success")

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Get_DIvident_Amount = (BoxPurchaseData, BuyerData, Box_Num) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                // 
                let Product_Price = await BoxPurchaseData.Cart_Information.Price
                let Divident_Values = {
                    Cash_Amount: 0,
                    Purchace_Amount: 0,
                    Gift_Amount: 0,
                    Upgrade_Coupon_Amount: 0,
                    Nine_Level_Amount: 0
                }
                let Total_Amount = 0
                let Box_Cash_Percent = 0
                let Box_Purchace_Percent = 0
                let Box_Gift_Percent = 0
                let Box_Upgrade_Coupon_Percent = 0
                let Box_Nine_Level_Percent = 0
                let Unique_Box = {}
                switch (Box_Num) {
                    case 1:
                        Total_Amount = BoxPurchaseData.Cart_Information.Price;
                        Unique_Box = BoxPurchaseData.Cart_Information.Box_One;

                        break;
                    case 2:
                        Total_Amount = BuyerData.Box_One_Upgrade_Amount_Available
                        Unique_Box = BoxPurchaseData.Cart_Information.Box_Two
                        break;
                    case 3:
                        Total_Amount = BuyerData.Box_Two_Upgrade_Amount_Available
                        Unique_Box = BoxPurchaseData.Cart_Information.Box_Three
                        break;
                }

                Product_Price = Total_Amount;


                console.log("713--->sharing amount --->" + JSON.stringify(BuyerData.Buyer_PhoneNumber));
                console.log("714--->sharing amount --->" + Product_Price);
                // 
                let Cash_Share = parseFloat(Unique_Box.Cash_Percent);
                console.log("575--- Cash_Share >" + Cash_Share);
                let Cash_Amount = parseFloat(Cash_Share * Product_Price / 100);
                console.log("577---Cash_Amount >" + Cash_Amount);
                let Purchace_Share = parseFloat(Unique_Box.Purchace_Percent);
                console.log("579---Purchace_Share >" + Purchace_Share);

                let Purchace_Amount = parseFloat(Purchace_Share * Product_Price / 100);
                console.log("582---Purchace_Amount >" + Purchace_Amount);
                let Gift_Share = parseFloat(Unique_Box.Gift_Percent);
                console.log("584---Gift_Share >" + Gift_Share);
                let Gift_Amount = parseFloat(Gift_Share * Product_Price / 100);
                console.log("586---Gift_Amount >" + Gift_Amount);
                let Upgrade_Coupon_Share = parseFloat(Unique_Box.Upgrade_Coupon_Percent);
                console.log("588---Upgrade_Coupon_Share >" + Upgrade_Coupon_Share);
                let Upgrade_Coupon_Amount = parseFloat(Upgrade_Coupon_Share * Product_Price / 100);
                console.log("590---Upgrade_Coupon_Amount >" + Upgrade_Coupon_Amount);

                let Nine_Level_Share = parseFloat(Unique_Box.Nine_Level_Percent);
                console.log("593---Nine_Level_Share >" + Nine_Level_Share);

                let Nine_Level_Amount = parseFloat(Nine_Level_Share * Product_Price / 100);
                console.log("596---Nine_Level_Amount >" + Nine_Level_Amount);

                Divident_Values = {
                    Cash_Amount: Cash_Amount,
                    Purchace_Amount: Purchace_Amount,
                    Gift_Amount: Gift_Amount,
                    Upgrade_Coupon_Amount: Upgrade_Coupon_Amount,
                    Nine_Level_Amount: Nine_Level_Amount,
                    Current_Box: Box_Num
                }
                console.log("605---Divident_Values >" + Divident_Values);

                resolve(Divident_Values)

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Share_The_Amount = (BuyerData, Referal_Buyer_Data, BoxPurchaseData, Current_Box) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                console.log("620--->sharing amount --->" + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));

                console.log("764 --->Current_Box--->  " + Current_Box)
                let query = {}
                let WalletChanges = {}
                let Get_Divident_Amount_Data = {}
                let levels_Amount_Saving
                switch (Current_Box) {
                    case 1:
                        console.log("771 --->Current_Box case 1--->  " + Current_Box)
                        Get_Divident_Amount_Data = await ShopController.Get_DIvident_Amount(BoxPurchaseData, BuyerData, 1)

                        query = {
                            BuyerID: Referal_Buyer_Data.BuyerID
                        },
                            WalletChanges = {
                                $set: {
                                    updated_at: new Date()
                                },
                                $inc: {
                                    Cash_Coupons_Amount_Available: Get_Divident_Amount_Data.Cash_Amount,
                                    Cash_Coupons_Amount_Total: Get_Divident_Amount_Data.Cash_Amount,

                                    Purchace_Coupons_Amount_Available: Get_Divident_Amount_Data.Purchace_Amount,
                                    Purchace_Coupons_Amount_Total: Get_Divident_Amount_Data.Purchace_Amount,

                                    Gift_Coupons_Amount_Available: Get_Divident_Amount_Data.Gift_Amount,
                                    Gift_Coupons_Amount_Total: Get_Divident_Amount_Data.Gift_Amount,

                                    Box_One_Upgrade_Amount_Available: Get_Divident_Amount_Data.Upgrade_Coupon_Amount,
                                    Box_One_Upgrade_Amount_Total: Get_Divident_Amount_Data.Upgrade_Coupon_Amount,

                                    Box_One_Count: 1,

                                },
                                $push: {
                                    Box_One_Arr: { BuyerID: BuyerData.BuyerID },
                                    Total_Box_Arr: BoxPurchaseData
                                }
                            }

                        BuyerData.BuyerID = BoxPurchaseData.BuyerID;

                        levels_Amount_Saving = await ShopController.Share_Amount_To_Nine_Levels(BuyerData, Get_Divident_Amount_Data.Nine_Level_Amount, BoxPurchaseData);
                        break;
                    case 2:
                        Get_Divident_Amount_Data = await ShopController.Get_DIvident_Amount(BoxPurchaseData, BuyerData, 2)
                        console.log("808 --->Current_Box case 2--->  " + Current_Box)
                        query = {
                            BuyerID: Referal_Buyer_Data.BuyerID
                        },
                            WalletChanges = {
                                $set: {
                                    updated_at: new Date()
                                },
                                $inc: {
                                    Cash_Coupons_Amount_Available: Get_Divident_Amount_Data.Cash_Amount,
                                    Cash_Coupons_Amount_Total: Get_Divident_Amount_Data.Cash_Amount,

                                    Purchace_Coupons_Amount_Available: Get_Divident_Amount_Data.Purchace_Amount,
                                    Purchace_Coupons_Amount_Total: Get_Divident_Amount_Data.Purchace_Amount,

                                    Gift_Coupons_Amount_Available: Get_Divident_Amount_Data.Gift_Amount,
                                    Gift_Coupons_Amount_Total: Get_Divident_Amount_Data.Gift_Amount,

                                    Box_Two_Upgrade_Amount_Available: Get_Divident_Amount_Data.Upgrade_Coupon_Amount,
                                    Box_Two_Upgrade_Amount_Total: Get_Divident_Amount_Data.Upgrade_Coupon_Amount,

                                    Box_Two_Count: 1,

                                },
                                $push: {
                                    Box_Two_Arr: { BuyerID: BuyerData.BuyerID },
                                    Total_Box_Arr: BoxPurchaseData
                                }
                            }
                        BuyerData.BuyerID = BoxPurchaseData.BuyerID;
                        levels_Amount_Saving = await ShopController.Share_Amount_To_Nine_Levels(BuyerData, Get_Divident_Amount_Data.Nine_Level_Amount, BoxPurchaseData);
                        break;
                    case 3:
                        console.log("842 --->Current_Box case 3--->  " + Current_Box)
                        Get_Divident_Amount_Data = await ShopController.Get_DIvident_Amount(BoxPurchaseData, BuyerData, 3)
                        query = {
                            BuyerID: Referal_Buyer_Data.BuyerID
                        },
                            WalletChanges = {
                                $set: {
                                    updated_at: new Date()
                                },
                                $inc: {
                                    Cash_Coupons_Amount_Available: Get_Divident_Amount_Data.Cash_Amount,
                                    Cash_Coupons_Amount_Total: Get_Divident_Amount_Data.Cash_Amount,

                                    Purchace_Coupons_Amount_Available: Get_Divident_Amount_Data.Purchace_Amount,
                                    Purchace_Coupons_Amount_Total: Get_Divident_Amount_Data.Purchace_Amount,

                                    Gift_Coupons_Amount_Available: Get_Divident_Amount_Data.Gift_Amount,
                                    Gift_Coupons_Amount_Total: Get_Divident_Amount_Data.Gift_Amount,

                                    Box_Three_Upgrade_Amount_Available: Get_Divident_Amount_Data.Upgrade_Coupon_Amount,
                                    Box_Three_Upgrade_Amount_Total: Get_Divident_Amount_Data.Upgrade_Coupon_Amount,

                                    Box_Three_Count: 1,

                                },
                                $push: {
                                    Box_Three_Arr: { BuyerID: BuyerData.BuyerID },
                                    Total_Box_Arr: BoxPurchaseData
                                }
                            }
                        BuyerData.BuyerID = BoxPurchaseData.BuyerID;
                        levels_Amount_Saving = await ShopController.Share_Amount_To_Nine_Levels(BuyerData, Get_Divident_Amount_Data.Nine_Level_Amount, BoxPurchaseData);
                        break;

                }

                // console.log("726--->"+JSON.stringify(query)+"---t---"+JSON.stringify(WalletChanges));

                let UpdateBuyerData = await Buyers.updateOne(query, WalletChanges).lean().exec();
                let Save_Wallet_Logs = await ShopController.Save_Wallet_Logs_Box_Share_new(Referal_Buyer_Data, BoxPurchaseData, BuyerData, Get_Divident_Amount_Data)

                //  console.log("729--->"+JSON.stringify(UpdateBuyerData.Buyer_PhoneNumber));
                resolve("Success")

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Refral_Buyer_Every_Box_Share = (Referal_Buyer_Data, BuyerData, BoxPurchaseData, BUNResult) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let comn_query = {
                    Status: true
                }

                let Settings_Data = await Common_App_Settings.findOne(comn_query).lean().exec();
                let Box_One_Max_Amount = 0
                let Box_Two_Max_Amount = 0
                let Box_Three_Max_Amount = 0
                if (Settings_Data != null) {
                    Box_One_Max_Amount = Settings_Data.Box_One_Max_Amount
                    Box_Two_Max_Amount = Settings_Data.Box_Two_Max_Amount
                    Box_Three_Max_Amount = Settings_Data.Box_Three_Max_Amount
                } else {
                    Box_One_Max_Amount = config.Box_One_Max_Count
                    Box_Two_Max_Amount = config.Box_Two_Max_Amount
                    Box_Three_Max_Amount = config.Box_Three_Max_Amount
                }
                let Setting_Data = {
                    Box_One_Max_Amount,
                    Box_Two_Max_Amount,
                    Box_Three_Max_Amount
                }

                let BQuery = {
                    BuyerID: Referal_Buyer_Data.BuyerID
                }
                let Updated_RefBuyerData = await Buyers.findOne(BQuery).lean().exec()

                if (Updated_RefBuyerData.Current_Box == 1 && Updated_RefBuyerData.Box_One_Count == Box_One_Max_Amount) {
                    Updated_Current_Box = 2
                    Updated_Current_Box_Count = 0
                    U_flag = 1
                }
                if (Updated_Current_Box == 2) {
                    let Check_Ref_Box_User = await ShopController.Check_for_Eligible_Box_User(Referal_Buyer_Data, Updated_Current_Box, BUNResult, BoxPurchaseData, [])

                    if (Check_Ref_Box_User[0] != "") {
                        let B2BQuery = {
                            BuyerID: Check_Ref_Box_User[0]
                        }
                        let Updated_BoxBuyerData = await Buyers.findOne(B2BQuery).lean().exec()

                        let ShareTheAmount = await ShopController.Share_The_Amount(Updated_BoxBuyerData, BoxPurchaseData, Updated_Current_Box)

                    }
                } else {

                }



                resolve("Success")

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.findTheEligibel_Buyer = (BuyerData, BoxPurchaseData, BUNResult) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let comn_query = {
                    Status: true
                }
                let Settings_Data = await Common_App_Settings.findOne(comn_query).lean().exec();

                console.log("813---> new " + BuyerData.Buyer_PhoneNumber)

                if (Settings_Data != null) {
                    console.log("816--->")
                    Settings_Data.Box_One_Max_Amount = Settings_Data.Box_One_Max_Amount
                    Settings_Data.Box_Two_Max_Amount = Settings_Data.Box_Two_Max_Amount
                    Settings_Data.Box_Three_Max_Amount = Settings_Data.Box_Three_Max_Amount
                } else {
                    console.log("821--->")
                    Settings_Data = {}
                    Settings_Data.Box_One_Max_Amount = config.Box_One_Max_Count
                    Settings_Data.Box_Two_Max_Amount = config.Box_Two_Max_Amount
                    Settings_Data.Box_Three_Max_Amount = config.Box_Three_Max_Amount
                }

                if (BUNResult.Parent_BuyerID !== "" && BUNResult.Parent_BuyerID !== "root") {
                    console.log("829--->")
                    let Ref_Query = {
                        BuyerID: BUNResult.Parent_BuyerID
                    }
                    let Referal_Buyer_Data = await Buyers.findOne(Ref_Query).lean().exec();
                    let Current_Box = Referal_Buyer_Data.Current_Box

                    if (Current_Box === 1) {
                        console.log("835--->eligible--->" + Referal_Buyer_Data.Buyer_PhoneNumber);
                        // console.log("832--->"+JSON.stringify(Referal_Buyer_Data));

                        let ShareTheAmount = await ShopController.Share_The_Amount(BuyerData, Referal_Buyer_Data, BoxPurchaseData, Current_Box)
                        console.log("921--->entering second elgible--->");
                        let Check_for_box2 = await ShopController.Check_For_Box_Two_Eligibility(BuyerData, Referal_Buyer_Data, BoxPurchaseData, Current_Box, Settings_Data)

                        // let RefBoxShare = await ShopController.Refral_Buyer_Every_Box_Share(Referal_Buyer_Data, BuyerData, BoxPurchaseData, BUNResult)
                    } else if ((Current_Box === 2) && Current_Box === 3) {

                        console.log("835--->not eligible--> " + Referal_Buyer_Data.Buyer_PhoneNumber);

                        let BQuery = {
                            BuyerID: Referal_Buyer_Data.BuyerID
                        }

                        let BUNResultx = await Buyers_Ultimate_Network.findOne(BQuery).lean().exec();


                        // let Save_Expire_WalletAMount = await ShopController.BOX_P_Expire_Wallet_Amount_Saving(BoxPurchaseData.Cart_Information.Price, Referal_Buyer_Data);


                        let Check_Ref_Box_User = await ShopController.findTheEligibel_Buyer(Referal_Buyer_Data, BoxPurchaseData, BUNResultx)

                    }

                    else {
                        console.log("835--->not eligible--> " + Referal_Buyer_Data.Buyer_PhoneNumber);

                        let BQuery = {
                            BuyerID: Referal_Buyer_Data.BuyerID
                        }

                        let BUNResultx = await Buyers_Ultimate_Network.findOne(BQuery).lean().exec();


                        let Save_Expire_WalletAMount = await ShopController.BOX_P_Expire_Wallet_Amount_Saving(BoxPurchaseData.Cart_Information.Price, Referal_Buyer_Data, BoxPurchaseData);


                        let Check_Ref_Box_User = await ShopController.findTheEligibel_Buyer(Referal_Buyer_Data, BoxPurchaseData, BUNResultx)

                    }

                } else {
                    console.log("840--->")

                    // let Check_Ref_Box_User = await ShopController.Check_for_Box_User_In_Referals_BP(BoxPurchaseData, BuyerData.BuyerID, BuyerData, BuyerData.Current_Box, BuyerData.Box_One_Count, BUNResult)
                    let Check_Ref_Box_User = await ShopController.Check_for_Eligible_Box_User(BuyerData, 1, BUNResult, BoxPurchaseData, [])
                }
                resolve("Success")

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}



ShopController.Check_For_boxTwo_for_dividing = (BuyerData, Referal_Buyer_Data, BoxPurchaseData, Current_Box, Settings_Data) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                console.log("1056--->Current_Box--->  " + Current_Box + "checking Box 2")
                console.log("1056--->Current_Box--->  " + Referal_Buyer_Data.Current_Box + "---ddd---" + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber) + "checking Box 2")
                let BQuery = {
                    BuyerID: Referal_Buyer_Data.BuyerID
                }

                let BUNResult = await Buyers_Ultimate_Network.findOne(BQuery).lean().exec();

                if ((Referal_Buyer_Data.Current_Box == 2)) {

                    console.log("1063--->checking box " + Current_Box + " elible amount dividing" + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));

                    console.log("1065--->Current_Box--->  " + Current_Box)
                    let ShareTheAmount = await ShopController.Share_The_Amount(BuyerData, Referal_Buyer_Data, BoxPurchaseData, Current_Box);

                    let Check_for_box2 = await ShopController.Check_For_Box_Three_Eligibility_new(BuyerData, Referal_Buyer_Data, BoxPurchaseData, Current_Box, Settings_Data)

                } else {
                    console.log("1069--->checking box 2 no elible no root " + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));
                    if (BUNResult.Parent_BuyerID !== "" && BUNResult.Parent_BuyerID !== "root") {
                        let ref_dBQuery = {
                            BuyerID: BUNResult.Parent_BuyerID
                        }

                        let Referal_Buyer_Datan = await Buyers.findOne(ref_dBQuery).lean().exec();
                        console.log("1077--->box 2 conv 2 no elible entering amount dividing to box 2 " + JSON.stringify(Referal_Buyer_Datan.Buyer_PhoneNumber));
                        let Check_Ref_Box_User = await ShopController.Check_For_boxTwo_for_dividing(BuyerData, Referal_Buyer_Datan, BoxPurchaseData, Current_Box, Settings_Data);
                    } else {
                        console.log("1080--->checking box 2 no elible no root " + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));
                    }

                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}




ShopController.Check_For_Box_Two_Eligibility = (BuyerData, Referal_Buyer_Data, BoxPurchaseData, Current_Box, Settings_Data) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let BQuery = {
                    BuyerID: Referal_Buyer_Data.BuyerID
                }

                let BUNResult = await Buyers_Ultimate_Network.findOne(BQuery).lean().exec();
                Referal_Buyer_Data = await Buyers.findOne(BQuery).lean().exec();

                console.log("1011--->" + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));
                console.log("1012----> (" + Referal_Buyer_Data.Current_Box + "== 1) &&(" + Referal_Buyer_Data.Box_One_Count + "==" + Settings_Data.Box_One_Max_Amount + ")")
                if ((Referal_Buyer_Data.Current_Box == 1) && (Referal_Buyer_Data.Box_One_Count == Settings_Data.Box_One_Max_Amount)) {

                    Current_Box = Current_Box + 1

                    let updatBuyerData = await ShopController.Updated_Cuurent_User_New_BOX_Get_Amount(BuyerData, Referal_Buyer_Data, BoxPurchaseData, Current_Box, Settings_Data)

                    let Total_Amount = Referal_Buyer_Data.Box_One_Upgrade_Amount_Available;
                    console.log("1020--->entering checking " + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));


                    console.log("1023--->box 1 conv 2 no elible no expiry " + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));
                    if (BUNResult.Parent_BuyerID !== "" && BUNResult.Parent_BuyerID !== "root") {
                        let ref_dBQuery = {
                            BuyerID: BUNResult.Parent_BuyerID
                        }
                        console.log("1124--->Current_Box--->  " + Current_Box)
                        let Referal_Buyer_Datan = await Buyers.findOne(ref_dBQuery).lean().exec();
                        console.log("1030--->box 2 conv 2 elible entering amount dividing to box 2 " + JSON.stringify(Referal_Buyer_Datan.Buyer_PhoneNumber));
                        let Check_Ref_Box_User = await ShopController.Check_For_boxTwo_for_dividing(Referal_Buyer_Data, Referal_Buyer_Datan, BoxPurchaseData, Current_Box, Settings_Data);
                    } else {
                        console.log("1034--->box 1 conv 2 no elible no root " + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));
                    }




                    // let ShareTheAmount = await ShopController.Share_The_Amount(BuyerData, Referal_Buyer_Data, BoxPurchaseData, Current_Box)
                    console.log("1040--->entering second elgible--->");



                    //     let Direct_Ref = await ShopController.Check_Direct_Referal_Eligible_Buyer(Referal_Buyer_Data, BoxPurchaseData, Current_Box, Settings_Data)
                } else if ((Referal_Buyer_Data.Current_Box == 2) && (Referal_Buyer_Data.Current_Box == 3)) {

                    console.log("1048--->box 1 conv 2 no elible no expiry " + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));
                    if (BUNResult.Parent_BuyerID !== "" && BUNResult.Parent_BuyerID !== "root") {
                        let ref_dBQuery = {
                            BuyerID: BUNResult.Parent_BuyerID
                        }

                        let Referal_Buyer_Datan = await Buyers.findOne(ref_dBQuery).lean().exec();


                        console.log("1055--->box 1 conv 2 no elible entering no expiry  " + JSON.stringify(Referal_Buyer_Datan.Buyer_PhoneNumber));
                        let Check_Ref_Box_User = await ShopController.Check_For_Box_Two_Eligibility(BuyerData, Referal_Buyer_Datan, BoxPurchaseData, Current_Box, Settings_Data);
                    } else {
                        console.log("1058--->box 1 conv 2 no elible no root " + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));
                    }

                } else {
                    if (BUNResult.Parent_BuyerID !== "" && BUNResult.Parent_BuyerID !== "root") {
                        console.log("1063--->box 1 conv 2 no elible yes expiry " + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));

                        let Save_Expire_WalletAMount = await ShopController.BOX_P_Expire_Wallet_Amount_Saving(BuyerData.Box_One_Upgrade_Amount_Available, Referal_Buyer_Data, BoxPurchaseData);

                        let ref_dBQuery = {
                            BuyerID: BUNResult.Parent_BuyerID
                        }

                        let Referal_Buyer_Datan = await Buyers.findOne(ref_dBQuery).lean().exec();
                        console.log("1072--->box 1 conv 2 no elible yes expiry " + JSON.stringify(Referal_Buyer_Datan.Buyer_PhoneNumber));
                        let Check_Ref_Box_User = await ShopController.Check_For_Box_Two_Eligibility(BuyerData, Referal_Buyer_Datan, BoxPurchaseData, Current_Box, Settings_Data);


                    } else {
                        let Save_Expire_WalletAMount = await ShopController.BOX_P_Expire_Wallet_Amount_Saving(BuyerData.Box_One_Upgrade_Amount_Available, Referal_Buyer_Data, BoxPurchaseData);

                        console.log("1079--->box 1 conv 2 no elible yes expiry no root " + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));

                    }

                    console.log("1082--->" + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));

                }
                //  resolve("Success")

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}



ShopController.Check_For_boxthhree_for_dividing = (BuyerData, Referal_Buyer_Data, BoxPurchaseData, Current_Box, Settings_Data) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {


                let BQuery = {
                    BuyerID: Referal_Buyer_Data.BuyerID
                }

                let BUNResult = await Buyers_Ultimate_Network.findOne(BQuery).lean().exec();

                console.log("1208--->" + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));
                console.log("1209----> (" + Referal_Buyer_Data.Current_Box + "== " + Current_Box + ") &&(" + Referal_Buyer_Data.Box_Three_Count + "==" + Settings_Data.Box_Two_Max_Amount + ")")

                Referal_Buyer_Data = await Buyers.findOne(BQuery).lean().exec();

                if ((Referal_Buyer_Data.Current_Box == 3)) {


                    if ((Referal_Buyer_Data.Current_Box == 3) && (Referal_Buyer_Data.Box_Three_Count == Settings_Data.Box_Three_Max_Amount)) {
                        resolve("Namaskaram")
                    } else {

                        console.log("993--->checking box " + Current_Box + " elible amount dividing  " + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));

                        let ShareTheAmount = await ShopController.Share_The_Amount(BuyerData, Referal_Buyer_Data, BoxPurchaseData, Current_Box);

                        resolve("Namaskaram")
                    }

                    //   let Check_for_box2 = await ShopController.Check_For_Box_Three_Eligibility_new(BuyerData, Referal_Buyer_Data, BoxPurchaseData, Current_Box, Settings_Data)

                } else {
                    console.log("993--->checking box 3 no elible no root  " + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));
                    if (BUNResult.Parent_BuyerID !== "" && BUNResult.Parent_BuyerID !== "root") {
                        let ref_dBQuery = {
                            BuyerID: BUNResult.Parent_BuyerID
                        }

                        let Referal_Buyer_Datan = await Buyers.findOne(ref_dBQuery).lean().exec();
                        console.log("1030--->box 2 conv 3 no elible entering amount dividing to box 2  " + JSON.stringify(Referal_Buyer_Datan.Buyer_PhoneNumber));
                        let Check_Ref_Box_User = await ShopController.Check_For_boxthhree_for_dividing(BuyerData, Referal_Buyer_Datan, BoxPurchaseData, Current_Box, Settings_Data);
                    } else {
                        console.log("1034--->checking box 3 no elible no root  " + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));
                    }

                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


ShopController.Check_For_Box_Three_Eligibility_new = (BuyerData, Referal_Buyer_Data, BoxPurchaseData, Current_Box, Settings_Data) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let BQuery = {
                    BuyerID: Referal_Buyer_Data.BuyerID
                }

                let BUNResult = await Buyers_Ultimate_Network.findOne(BQuery).lean().exec();
                Referal_Buyer_Data = await Buyers.findOne(BQuery).lean().exec();
                console.log("1180--->" + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));
                console.log("1181----> (" + Referal_Buyer_Data.Current_Box + "== 2) &&(" + Referal_Buyer_Data.Box_Two_Count + "==" + Settings_Data.Box_Two_Max_Amount + ")")
                if ((Referal_Buyer_Data.Current_Box == 2) && (Referal_Buyer_Data.Box_Two_Count == Settings_Data.Box_Two_Max_Amount)) {

                    Current_Box = Current_Box + 1
                    let updatBuyerData = await ShopController.Updated_Cuurent_User_New_BOX_Get_Amount(BuyerData, Referal_Buyer_Data, BoxPurchaseData, Current_Box, Settings_Data)

                    let Total_Amount = Referal_Buyer_Data.Box_One_Upgrade_Amount_Available

                    let ref_dBQuery = {
                        BuyerID: BUNResult.Parent_BuyerID
                    }
                    let Referal_Buyer_Datan = await Buyers.findOne(ref_dBQuery).lean().exec();
                    console.log("1188--->entering checking for box 3" + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));

                    let Check_Ref_Box_User = await ShopController.Check_For_boxthhree_for_dividing(Referal_Buyer_Data, Referal_Buyer_Datan, BoxPurchaseData, Current_Box, Settings_Data);


                    //      let Direct_Ref = await ShopController.Check_Direct_Referal_Eligible_Buyer(Referal_Buyer_Data, BoxPurchaseData, Current_Box, Settings_Data)
                } else if ((Referal_Buyer_Data.Current_Box == 3)) {
                    console.log("1195--->box 2 conv 3 no elible no expiry" + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));
                    if (BUNResult.Parent_BuyerID !== "" && BUNResult.Parent_BuyerID !== "root") {
                        let ref_dBQuery = {
                            BuyerID: BUNResult.Parent_BuyerID
                        }
                        let Referal_Buyer_Datan = await Buyers.findOne(ref_dBQuery).lean().exec();
                        console.log("1201--->box 2 conv 3 no elible entering no expiry" + JSON.stringify(Referal_Buyer_Datan.Buyer_PhoneNumber));
                        let Check_Ref_Box_User = await ShopController.Check_For_Box_Three_Eligibility_new(BuyerData, Referal_Buyer_Datan, BoxPurchaseData, Current_Box, Settings_Data);
                    } else {
                        console.log("1204--->box 2 conv 3 no elible no root" + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));
                    }

                } else {
                    if (BUNResult.Parent_BuyerID !== "" && BUNResult.Parent_BuyerID !== "root") {
                        console.log("1209--->box 2 conv 3 no elible yes expiry" + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));

                        let Save_Expire_WalletAMount = await ShopController.BOX_P_Expire_Wallet_Amount_Saving(Referal_Buyer_Data.Box_Two_Upgrade_Amount_Available, Referal_Buyer_Data, BoxPurchaseData);

                        let ref_dBQuery = {
                            BuyerID: BUNResult.Parent_BuyerID
                        }

                        let Referal_Buyer_Datan = await Buyers.findOne(ref_dBQuery).lean().exec();
                        console.log("1218--->box 2 conv 3 no elible yes expiry" + JSON.stringify(Referal_Buyer_Datan.Buyer_PhoneNumber));
                        let Check_Ref_Box_User = await ShopController.Check_For_Box_Three_Eligibility_new(BuyerData, Referal_Buyer_Datan, BoxPurchaseData, Current_Box, Settings_Data);

                    } else {
                        let Save_Expire_WalletAMount = await ShopController.BOX_P_Expire_Wallet_Amount_Saving(Referal_Buyer_Data.Box_Two_Upgrade_Amount_Available, Referal_Buyer_Data, BoxPurchaseData);

                        console.log("1224--->box 2 conv 3 no elible yes expiry no root" + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));

                    }

                    console.log("1228--->" + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));

                }
                //  resolve("Success")

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


ShopController.One_Level_Amount_Saving = (one_level_Share_Amount, BuyerID, BoxPurchaseData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                //   console.log("999--->"+one_level_Share_Amount);
                let query_network = {
                    BuyerID: BuyerID
                }
                let network_data = await Buyers_Ultimate_Network.findOne(query_network).lean().exec()
                let BuyerData = await Buyers.findOne(query_network).lean().exec()
                let No_of_Buyers_Network = await network_data.No_of_Network

                if (network_data != null && BuyerData != null) {
                    // console.log("909--->"+JSON.stringify(network_data));
                    if (No_of_Buyers_Network > 0) {

                        let query_tgt_ref = {
                            Target_Referal: {
                                $gte: No_of_Buyers_Network,
                            }
                        }
                        let Target_Referals = await Target_Referal.find(query_tgt_ref).lean().exec()
                        // console.log("909--->"+JSON.stringify(Target_Referals));

                        if (Target_Referals != null) {
                            //  console.log("920--->"+JSON.stringify(Target_Referals));

                            let min = Math.min.apply(null, Target_Referals.map(function (item) {
                                return item.Target_Referal;
                            }))
                            let Find_Doc = await Target_Referals.find(function (Target) {
                                return (Target.Target_Referal == min);
                            });
                            console.log("928--->" + JSON.stringify(Find_Doc));

                            if (Find_Doc.Wallet_Limit !== null) {
                                if (BuyerData.Purchace_Coupons_Amount_Total <= Find_Doc.Wallet_Limit) {

                                    console.log("1015--->success target amt " + BuyerData.Buyer_PhoneNumber + "-amt--" + one_level_Share_Amount.toFixed(0));

                                    let Total_Share_Amount = BuyerData.Purchace_Coupons_Amount_Total + one_level_Share_Amount
                                    let Extra_Amount = 0
                                    let Final_Amount = 0
                                    if (Total_Share_Amount > Find_Doc.Wallet_Limit) {
                                        Extra_Amount = Total_Share_Amount - Find_Doc.Wallet_Limit
                                    }
                                    Final_Amount = one_level_Share_Amount - Extra_Amount

                                    let Ref_Queryf = {
                                        BuyerID: BoxPurchaseData.BuyerID
                                    }
                                    let Referal_Buyer_Dataf = await Buyers.findOne(Ref_Queryf).lean().exec();
                                    console.log("260---> Saving Logs fromuser ---> " + Referal_Buyer_Dataf.Buyer_PhoneNumber);
                                    // 
                                    let PWData = {
                                        LogID: uuid.v4(),
                                        BuyerID: BuyerData.BuyerID,
                                        Type: 3,  //User SHop Credited amount for Buyer Share Amount Request Notofication
                                        Amount: Final_Amount,
                                        Data: {
                                            Buyer_Name: Referal_Buyer_Dataf.Buyer_Name,
                                            From_Buyer_Name: Referal_Buyer_Dataf.Buyer_Name
                                        },
                                        Time: new Date()
                                    }
                                    let ResultlogP = Buyer_Purchase_Wallet_Logs(PWData).save();

                                    let PW_Changes = {
                                        $inc: {
                                            Purchace_Coupons_Amount_Available: Final_Amount,
                                            Purchace_Coupons_Amount_Total: Final_Amount
                                        },
                                        $set: {
                                            updated_at: new Date()
                                        }
                                    }
                                    let UpdateData = await Buyers.updateOne(query_network, PW_Changes).lean().exec()
                                    if (Extra_Amount > 0) {
                                        let Save_Expire_WalletAMount = await ShopController.BOX_P_Expire_Wallet_Amount_Saving(Extra_Amount, BuyerData, BoxPurchaseData);

                                    }

                                } else {

                                    console.log("1057--->fail target amt " + BuyerData.Buyer_PhoneNumber + "-amt--" + one_level_Share_Amount.toFixed(0));

                                    let Save_Expire_WalletAMount = await ShopController.BOX_P_Expire_Wallet_Amount_Saving(one_level_Share_Amount, BuyerData, BoxPurchaseData);
                                }

                            } else {
                                console.log("1057--->fail no targets amt " + BuyerData.Buyer_PhoneNumber + "-amt--" + one_level_Share_Amount.toFixed(0));

                                let Save_Expire_WalletAMount = await ShopController.BOX_P_Expire_Wallet_Amount_Saving(one_level_Share_Amount, BuyerData, BoxPurchaseData);

                            }
                        } else {
                            console.log("1062--->no target amt " + BuyerData.Buyer_PhoneNumber + "-amt--" + one_level_Share_Amount.toFixed(0));

                            let Ref_Queryf = {
                                BuyerID: BoxPurchaseData.BuyerID
                            }
                            let Referal_Buyer_Dataf = await Buyers.findOne(Ref_Queryf).lean().exec();
                            console.log("260---> Saving Logs fromuser ---> " + Referal_Buyer_Dataf.Buyer_PhoneNumber);

                            let Adata = {
                                BuyerData: Referal_Buyer_Dataf,
                                Buyer_Name: Referal_Buyer_Dataf.Buyer_Name,
                            }
                            let APWData = {
                                LogID: uuid.v4(),
                                BuyerID: BuyerData.BuyerID,
                                Type: 6,  //User SHop Credited amount for BOX Purchase product
                                Amount: one_level_Share_Amount.toFixed(0),
                                Data: Adata,
                                Time: new Date()
                            }
                            let ResultlogA = Buyer_Purchase_Wallet_Logs(APWData).save();

                            let PW_ChangesA = {
                                $inc: {
                                    Purchace_Coupons_Amount_Available: one_level_Share_Amount.toFixed(0),
                                    Purchace_Coupons_Amount_Total: one_level_Share_Amount.toFixed(0)
                                },
                                $set: {
                                    updated_at: new Date()
                                }
                            }
                            let UpdateDataA = await Buyers.updateOne(query_network, PW_ChangesA).lean().exec()
                        }
                    }
                } else {

                    let CData = {
                        LogID: uuid.v4(),
                        Type: 9, //Credit Amount Self Purchase Amount Sharing Amount Request
                        Amount: one_level_Share_Amount.toFixed(0),
                        Data: {
                            BuyerData: BuyerData,
                            Buyer_Name: BuyerData.Buyer_Name,
                        },
                        Time: new Date()
                    };
                    let SaveCData = await Company_Share_Logs(CData).save();
                    let Companychanges = {
                        $inc: {
                            Available_Amount: one_level_Share_Amount.toFixed(0),
                            Total_Amount: one_level_Share_Amount.toFixed(0)
                        }
                    }
                    let CSaveData = await Company_Share.updateOne({}, Companychanges).lean().exec();
                }
                resolve("Success")
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Share_Amount_To_Nine_Levels = (BuyerData, Amount, BoxPurchaseData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let one_level_Share_Amount = await Amount / config.max_buyer_network_heirarchy

                console.log("884--->" + one_level_Share_Amount);

                let Buyers_Network_Data = await ShopController.Find_Buyer_Hierarchy([], BuyerData.BuyerID);
                console.log("893--->" + JSON.stringify(Buyers_Network_Data));
                await Buyers_Network_Data.splice(0, 1);
                console.log("895--->" + JSON.stringify(Buyers_Network_Data));
                let No_of_Buyers_Network = Buyers_Network_Data.length;
                let Remaining_Levels = config.max_buyer_network_heirarchy - No_of_Buyers_Network

                let Remaining_Wallet_Amount = await ShopController.Remaining_Level_Amount_Saving_trimming_Wallet(Remaining_Levels, one_level_Share_Amount, BuyerData);



                let query_network = {
                    BuyerID: BuyerData.BuyerID
                }
                let network_data = await Buyers_Ultimate_Network.findOne(query_network).lean().exec()
                for (let i = 0; i < Buyers_Network_Data.length; i++) {
                    //  console.log(Buyers_Network_Data[i], i, "ByerData -->999")                   
                    let Saving_One_Level = await ShopController.One_Level_Amount_Saving(one_level_Share_Amount, Buyers_Network_Data[i], BoxPurchaseData);
                }


                resolve("Suucess")

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Remaining_Level_Amount_Saving_trimming_Wallet = (Remaining_Levels, one_level_Share_Amount, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Remaining_Level_Share_Amount = 0
                if (Remaining_Levels > 0) {
                    // .toFixed(0);
                    Remaining_Level_Share_Amount = one_level_Share_Amount * Remaining_Levels
                    Remaining_Level_Share_Amount = Remaining_Level_Share_Amount.toFixed(2)

                    //Sharing company amount>>>>>>>>>>>>>>>>>>>>>>>>>>
                    let cxData = {
                        BuyerData: BuyerData,
                        Amount: Remaining_Level_Share_Amount
                    }

                    let CData = {
                        LogID: uuid.v4(),
                        Type: 2, //Remaining 9 Level Share Amount Credit Amount Sharing Amount Request
                        Amount: Remaining_Level_Share_Amount,
                        Data: cxData,
                        Time: new Date()
                    };
                    let SaveCData = await Trimmer_Share_Wallet_Logs(CData).save();
                    let Companychanges = {
                        $inc: {
                            Available_Amount: Remaining_Level_Share_Amount,
                            Total_Amount: Remaining_Level_Share_Amount
                        }
                    }
                    let CSaveData = await Trimer_Share.updateOne({}, Companychanges).lean().exec();
                }
                resolve("Success")

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.BOX_P_Expire_Wallet_Amount_Saving = (Amount, BuyerData, BoxPurchaseData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {


                let Ref_Query = {
                    BuyerID: BoxPurchaseData.BuyerID
                }
                let Referal_Buyer_Data = await Buyers.findOne(Ref_Query).lean().exec();
                //  PurchaseData: BoxPurchaseData,

                let query = {
                    BuyerID: BuyerData.BuyerID
                }
                let EWData = {
                    LogID: uuid.v4(),
                    BuyerID: BuyerData.BuyerID,
                    Type: 4,  //User SHop Credited amount for BOX Product purchase
                    Amount: Amount.toFixed(0),
                    Data: {
                        BuyerData: Referal_Buyer_Data.Buyer_Name,
                        From_Buyer_Name: Referal_Buyer_Data.Buyer_Name
                    },
                    Time: new Date()
                }
                let ResultlogP = Buyer_Expired_Amount_Wallet_Logs(EWData).save();

                let EW_Changes = {
                    $inc: {
                        Expired_Amount: Amount.toFixed(0),
                        Expired_Amount_Total: Amount.toFixed(0)
                    },
                    $set: {
                        updated_at: new Date()
                    }
                }
                let UpdateData = await Buyers.updateOne(query, EW_Changes).lean().exec()
                resolve("Processed Succefully")

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Check_boxThree_El_new = (Referal_Buyer_Data, BoxPurchaseData, Current_Box, Settings_Data) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                console.log("1248--->entering checking---> " + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));
                let Direct_Ref = await ShopController.Only_Check_Direct_Refral_Eligible(Referal_Buyer_Data, BoxPurchaseData, Current_Box, Settings_Data)

                resolve("Success")
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Check_Direct_Referal_Eligible_Buyer = (Referal_Buyer_Data, BoxPurchaseData, Current_Box, Settings_Data) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                console.log("1248--->entering checking---> " + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));
                let Direct_Ref = await ShopController.Only_Check_Direct_Refral_Eligible(Referal_Buyer_Data, BoxPurchaseData, Current_Box, Settings_Data)

                resolve("Success")
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Only_Check_Direct_Refral_Eligible = (Referal_Buyer_Data, BoxPurchaseData, Current_Box, Settings_Data) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                console.log("1264--->entering checking" + JSON.stringify(Referal_Buyer_Data.Buyer_PhoneNumber));
                let query = {
                    BuyerID: Referal_Buyer_Data.BuyerID
                }
                let BUNData = await Buyers_Ultimate_Network.findOne(query).lean().exec();
                if (BUNData.Parent_BuyerID != "root") {
                    let query_Parent = {
                        BuyerID: BUNData.Parent_BuyerID
                    }
                    let ParentData = await Buyers.findOne(query_Parent).lean().exec();
                    console.log("1274--->entering checking" + JSON.stringify(ParentData.Buyer_PhoneNumber));
                    if (ParentData.Current_Box == Current_Box) {

                        console.log("1277--->box2 elligible -->" + JSON.stringify(ParentData.Buyer_PhoneNumber));
                        let ShareTheAmount = await ShopController.Share_The_Amount(Referal_Buyer_Data, ParentData, BoxPurchaseData, Current_Box)

                        let Check_Box_Three = await ShopController.Check_For_Box_Three_Eligibility(Referal_Buyer_Data, ParentData, BoxPurchaseData, Current_Box, Settings_Data)
                        resolve("Success")

                    } else {
                        console.log("1284--->box2 not elligible -->" + JSON.stringify(ParentData.Buyer_PhoneNumber));
                        if (ParentData.Current_Box != 3) {
                            let Get_Divident_Amount_Data = await ShopController.Get_DIvident_Amount(BoxPurchaseData, ParentData, Current_Box)
                            let add_expire_Amount = await ShopController.Add_Expire_Amount_Buyer_wallet(ParentData, BoxPurchaseData, Get_Divident_Amount_Data)
                        }
                        let Ref_Data = await ShopController.Only_Check_Direct_Refral_Eligible(ParentData, BoxPurchaseData, ParentData.Current_Box, Settings_Data)
                    }
                }
                resolve("Success")

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Add_Expire_Amount_Buyer_wallet = (BuyerData, BoxPurchaseData, Get_Divident_Amount_Data) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {


                let Total_Amount = Get_Divident_Amount_Data.Cash_Amount + Get_Divident_Amount_Data.Purchace_Amount + Get_Divident_Amount_Data.Gift_Amount + Get_Divident_Amount_Data.Upgrade_Coupon_Amount + Get_Divident_Amount_Data.Nine_Level_Amount
                // Total_Amount = parseFloat(Total_Amount)
                let query = {
                    BuyerID: BuyerData.BuyerID
                }
                let Data = {
                    LogID: uuid.v4(),
                    BuyerID: BuyerData.BuyerID,
                    Type: 3, // 3.Credited from Expire Form Box Sharing 
                    Amount: Total_Amount.toFixed(2),
                    Data: {
                        BuyerData: BuyerData.Buyer_Name,
                        Amount: Total_Amount.toFixed(2)
                    },
                    Time: new Date()
                }
                let PSaveCData = await Buyer_Expired_Amount_Wallet_Logs(Data).save();

                let Wallet_Changes = {
                    $set: {
                        updated_at: new Date()
                    },
                    $inc: {
                        Expired_Amount: Amount,
                        Expired_Amount_Total: Amount
                    }
                }
                let AmountToWallet = await Buyers.updateOne(query, Wallet_Changes).lean().exec();
                resolve("Amount Added Success")

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Check_For_Box_Three_Eligibility = (BuyerData, Referal_Buyer_Data, BoxPurchaseData, Current_Box, Settings_Data) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let query = {
                    BuyerID: Referal_Buyer_Data.BuyerID
                }
                let BUNData = await Buyers_Ultimate_Network.findOne(query).lean().exec();

                console.log("1349---> enter threbox checking" + JSON.stringify(BuyerData.Buyer_PhoneNumber));
                console.log("1350---> box3 (" + Referal_Buyer_Data.Current_Box + " == 2) && (" + Referal_Buyer_Data.Box_One_Count + " == " + Settings_Data.Box_Two_Max_Amount + ")");
                if (BUNData.Parent_BuyerID != "root") {

                    let query_Parent = {
                        BuyerID: BUNData.Parent_BuyerID
                    }
                    let ParentData = await Buyers.findOne(query_Parent).lean().exec();
                    console.log("1363--->entering checking" + JSON.stringify(ParentData.Buyer_PhoneNumber));

                    if (Referal_Buyer_Data.Current_Box == 2 && Referal_Buyer_Data.Box_One_Count == Settings_Data.Box_Two_Max_Amount) {
                        Current_Box = Current_Box + 1

                        console.log("1354---> box3 eligible " + JSON.stringify(BuyerData.Buyer_PhoneNumber));

                        let updatBuyerData = await ShopController.Updated_Cuurent_User_New_BOX_Get_Amount(BuyerData, Referal_Buyer_Data, BoxPurchaseData, Current_Box, Settings_Data)

                        let Total_Amount = Referal_Buyer_Data.Box_Two_Upgrade_Amount_Available
                        let Direct_Ref = await ShopController.Check_Direct_Referal_Eligible_Buyer(Referal_Buyer_Data, BoxPurchaseData, Current_Box, Settings_Data)
                    } else {
                        console.log("1354---> box3 not eligible " + JSON.stringify(BuyerData.Buyer_PhoneNumber));
                        if (ParentData.Current_Box != 3) {
                            console.log("1363---> box3 not eligible expiry " + JSON.stringify(BuyerData.Buyer_PhoneNumber));
                            let Get_Divident_Amount_Data = await ShopController.Get_DIvident_Amount(BoxPurchaseData, ParentData, Current_Box)
                            let add_expire_Amount = await ShopController.Add_Expire_Amount_Buyer_wallet(ParentData, BoxPurchaseData, Get_Divident_Amount_Data)
                        }
                        let Ref_Data = await ShopController.Only_Check_Direct_Refral_Eligible(ParentData, BoxPurchaseData, ParentData.Current_Box, Settings_Data)
                    }
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Updated_Cuurent_User_New_BOX_Get_Amount = (BuyerData, Referal_Buyer_Data, BoxPurchaseData, Current_Box, Settings_Data) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                console.log("1729---> updating to Box " + Current_Box + " - " + Referal_Buyer_Data.Buyer_PhoneNumber)
                let query = {
                    BuyerID: Referal_Buyer_Data.BuyerID
                }

                let Changes;
                if (Current_Box == 1) {

                    Changes = {
                        $set: {
                            Current_Box: Current_Box
                        },
                        $inc: {
                            Box_One_Upgrade_Amount_Available: Referal_Buyer_Data.Box_One_Upgrade_Amount_Available * -1,
                            Box_One_Upgrade_Amount_Withdraw: Referal_Buyer_Data.Box_One_Upgrade_Amount_Available,
                        }
                    }


                } else if (Current_Box == 2) {
                    Changes = {
                        $set: {
                            Current_Box: Current_Box
                        },
                        $inc: {
                            Box_Two_Upgrade_Amount_Available: Referal_Buyer_Data.Box_Two_Upgrade_Amount_Available * -1,
                            Box_Two_Upgrade_Amount_Withdraw: Referal_Buyer_Data.Box_Two_Upgrade_Amount_Available,
                        }
                    }

                } else if (Current_Box == 3) {

                    Changes = {
                        $set: {
                            Current_Box: Current_Box
                        },
                        $inc: {
                            Box_Three_Upgrade_Amount_Available: Referal_Buyer_Data.Box_Three_Upgrade_Amount_Available * -1,
                            Box_Three_Upgrade_Amount_Withdraw: Referal_Buyer_Data.Box_Three_Upgrade_Amount_Available,
                        }
                    }

                }

                let fndupdoptions = {
                    upsert: true,
                    setDefaultsOnInsert: true,
                    new: true
                }
                let updatBuyerData = await Buyers.findOneAndUpdate(query, Changes, fndupdoptions).lean().exec();

                resolve(updatBuyerData)

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Expire_Amount_Saving_Buyer_Wallet = (BuyerData, Amount, Data) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: BuyerData.BuyerID
                }
                let Data = {
                    LogID: uuid.v4(),
                    BuyerID: BuyerData.BuyerID,
                    Type: 3, // 3.Credited from Expire Form Box Sharing 
                    Amount: Amount,
                    Data: {
                        BuyerData: BuyerData.Buyer_Name,
                        Amount: Amount
                    },
                    Time: new Date()
                }
                let PSaveCData = await Buyer_Expired_Amount_Wallet_Logs(Data).save();

                let Wallet_Changes = {
                    $set: {
                        updated_at: new Date()
                    },
                    $inc: {
                        Expired_Amount: Amount,
                        Expired_Amount_Total: Amount
                    }
                }
                let AmountToWallet = await Buyers.updateOne(query, Wallet_Changes).lean().exec();
                resolve("Success")

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Check_for_Eligible_Box_User = (BuyerData, Current_Box, BUNResult, BoxPurchaseData, Not_Elegible_Buyers) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let Current_Boxx = Current_Box
                let Parent_BuyerID = BUNResult.Parent_BuyerID;
                let Not_Elegible_Buyersx = Not_Elegible_Buyers;
                let Parent_Query = {
                    BuyerID: Parent_BuyerID,
                }
                //buyers
                let Parent_Result = await Buyers_Ultimate_Network.findOne(Parent_Query).lean().exec();
                if (Parent_Result == null) {

                    resolve(['', Not_Elegible_Buyersx])
                } else {

                    if (Parent_Result.Current_Box == Current_Boxx) {
                        resolve([Parent_Result.BuyerID, Not_Elegible_Buyersx])
                    } else {

                        Not_Elegible_Buyersx.push(Parent_Result.BuyerID)

                        //Amount need to update
                        let Get_Divident_Amount_Data = await ShopController.Get_DIvident_Amount(BoxPurchaseData, Parent_Result, Parent_Result.Current_Box)
                        let Amount = Get_Divident_Amount_Data.Cash_Amount
                        let SaveExpireWallet = await ShopController.Expire_Amount_Saving_Buyer_Wallet(Parent_Result, Amount, BoxPurchaseData);
                        let Elegible_BuyerID = await ShopController.Check_for_Eligible_Box_User(BuyerData, Current_Boxx, BUNResult, Not_Elegible_Buyersx);
                        resolve(Elegible_BuyerID)
                    }
                }
                // resolve("Success")

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Box_Process_For_Box_Buyer_Network = (BoxPurchaseData, BuyerID, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Product_Price = parseFloat(BoxPurchaseData.Cart_Information.C_Product_Price)


                let UpdateUserBox = await ShopController.Updated_Box_Level(BuyerData, 1)

                // let Box_One = await ShopController.Single_Share_Amounts(Product_Price, BoxPurchaseData.Cart_Information.Box_One, BuyerData) 

                let BQuery = {
                    BuyerID: BuyerID
                }

                let BUNResult = await Buyers_Ultimate_Network.findOne(BQuery).lean().exec();
                let Direct_Network_BD = await Buyers_Network.findOne(BQuery).lean().exec();

                console.log("1360--->buyer--> " + BuyerData.Buyer_PhoneNumber);

                let findTheEligibiBuyer = await ShopController.findTheEligibel_Buyer(BuyerData, BoxPurchaseData, BUNResult)
                resolve("Success")

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Updated_Box_Level = (BuyerData, Box_Num) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Bquery = {
                    BuyerID: BuyerData.BuyerID
                }
                let Changes = {
                    $set: {
                        Current_Box: Box_Num,
                        updated_at: new Date()
                    }
                }

                let UpdateBuyerData = await Buyers.updateOne(Bquery, Changes).lean().exec()
                resolve(UpdateBuyerData)

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Check_for_Box_User_In_Referals = (BoxPurchaseData, BuyerID, BuyerData, Buyers_Ultimate_Network) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let Elegible_BuyerID = await ShopController.Check_for_Elegilble_BuyerID(BuyerID, BResult, Current_Box, Current_Box_Count, []);

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

// ShopController.Check_for_Box_User_In_Referals_BP = (BoxPurchaseData, BuyerID, BuyerData, Current_Box, Box_Count, Buyers_Ultimate_Network) => {
//     return new Promise((resolve, reject) => {
//         setImmediate(async () => {
//             try {
//                 
//                 let Elegible_BuyerID = await ShopController.Check_for_Elegilble_BuyerID_BOX_Product(BuyerID, Buyers_Ultimate_Network, Current_Box, Box_Count, []);

//             } catch (error) {
//                 reject(await CommonController.Common_Error_Handler(error));
//             }
//         });
//     });
// }

ShopController.Box_Process_For_Buyer_Network = (PurchaseData, BuyerID, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Coupon_Product_Price = parseFloat(PurchaseData.Cart_Information.C_Product_Price)
                let Cash_Coupons_Share = parseFloat(PurchaseData.Cart_Information.Purchace_Coupons_Share);
                let Cash_Coupons_Amount = parseFloat(Cash_Coupons_Share * Coupon_Product_Price / 100);
                let Purchace_Coupons_Share = parseFloat(PurchaseData.Cart_Information.Purchace_Coupons_Share);
                let Purchace_Coupons_Amount = parseFloat(Purchace_Coupons_Share * Coupon_Product_Price / 100);
                let Gift_Coupons_Share = parseFloat(PurchaseData.Cart_Information.Gift_Coupons_Share);
                let Gift_Coupons_Amount = parseFloat(Gift_Coupons_Share * Coupon_Product_Price / 100);
                let Update_Coupons_Share = PurchaseData.Cart_Information.Update_Coupons_Share;
                let Update_Coupons_Amount_Array = [];
                let Update_Coupons_Amount = 0;
                for (let Box of Update_Coupons_Share) {
                    let UCA = parseFloat(Box * Coupon_Product_Price / 100);
                    Update_Coupons_Amount_Array.push(UCA)
                }
                let BQuery = {
                    BuyerID: BuyerID
                }
                let BResult = await Buyers_Ultimate_Network.findOne(BQuery).lean().exec();
                if (BResult != null) {
                    if (BResult.Current_Box == 1) {
                        Update_Coupons_Amount = Update_Coupons_Amount_Array[0]
                    } else if (BResult.Current_Box == 2) {
                        Update_Coupons_Amount = Update_Coupons_Amount_Array[1]
                    } else if (BResult.Current_Box == 3 && BResult.Current_Box_Count <= 1000) {
                        Update_Coupons_Amount = Update_Coupons_Amount_Array[2]
                    } else {
                        Update_Coupons_Amount = 0
                    }
                    // }

                    let Total_Amount = Update_Coupons_Amount + Gift_Coupons_Amount + Purchace_Coupons_Amount + Cash_Coupons_Amount
                    let Current_Box = 0
                    let Current_Box_Count = 0
                    let flag = 0;
                    if (BResult.Current_Box == 1 && BResult.Current_Box_Count == 10) {
                        Current_Box = 2
                        Current_Box_Count = 0
                        flag = 1
                    } else if (BResult.Current_Box == 2 && BResult.Current_Box_Count == 100) {
                        Current_Box = 3
                        Current_Box_Count = 0
                        flag = 1
                    } else if (BResult.Current_Box == 0 && BResult.Current_Box_Count == 0) {
                        Current_Box = 1
                        Current_Box_Count = 0
                        flag = 1
                    }
                    if (flag == 1) {
                        let Bchanges = {
                            $set: {
                                Current_Box: Current_Box,
                                Current_Box_Count: Current_Box_Count,
                                Cash_Coupons_Amount_Unprocessed: 0,
                                Purchace_Coupons_Amount_Unprocessed: 0,
                                Gift_Coupons_Amount_Unprocessed: 0,
                                Update_Coupons_Amount_Unprocessed: 0,
                                updated_at: new Date()
                            },
                            $inc: {
                                // Cash_Coupons_Amount_Available: BuyerData.Cash_Coupons_Amount_Unprocessed,
                                // Cash_Coupons_Amount_Total: BuyerData.Cash_Coupons_Amount_Unprocessed,

                                Available_Amount: BuyerData.Cash_Coupons_Amount_Unprocessed,
                                Total_Amount: BuyerData.Cash_Coupons_Amount_Unprocessed,

                                Purchace_Coupons_Amount_Available: BuyerData.Purchace_Coupons_Amount_Unprocessed,
                                Purchace_Coupons_Amount_Total: BuyerData.Purchace_Coupons_Amount_Unprocessed,

                                Gift_Coupons_Amount_Available: BuyerData.Gift_Coupons_Amount_Unprocessed,
                                Gift_Coupons_Amount_Total: BuyerData.Gift_Coupons_Amount_Unprocessed,

                                Update_Coupons_Amount_Available: BuyerData.Update_Coupons_Amount_Unprocessed,
                                Update_Coupons_Amount_Total: BuyerData.Update_Coupons_Amount_Unprocessed,
                            }
                        }
                        //3 wallets create and add in logs
                        let Save_Wallet_Logs = await ShopController.Save_Wallet_Logs(BuyerData, PurchaseData)

                        let UpdateData = await Buyers_Ultimate_Network.updateOne(BQuery, Bchanges).lean().exec()
                        let UpdateBuyerData = await Buyers.updateOne(BQuery, Bchanges).lean().exec()
                    }
                    let Elegible_BuyerID = await ShopController.Check_for_Elegilble_BuyerID(BuyerID, BResult, Current_Box, Current_Box_Count, []);
                    let NEBQuery = {
                        BuyerID: {
                            $in: Elegible_BuyerID[1]
                        }
                    }
                    let NEBchanges = {
                        $set: {
                            Expired_Amount: Total_Amount,
                            updated_at: new Date()
                        },
                        $push: {
                            Box_Amount_Data: {
                                BuyerID: BuyerID,
                                Expired_Amount: Total_Amount,
                                Time: new Date()
                            }
                        }
                    }
                    let NEUpdateData = await Buyers_Ultimate_Network.updateMany(NEBQuery, NEBchanges).lean().exec();
                    let NEUpdateData1 = await Buyers.updateMany(NEBQuery, NEBchanges).lean().exec();

                    if (Elegible_BuyerID[0] == '') {
                        //nothing to do 
                        // Process Amount to company Wallet
                        let cxData = {
                            Cash_Coupons_Amount: Cash_Coupons_Amount,
                            Purchace_Coupons_Amount: Purchace_Coupons_Amount,
                            Gift_Coupons_Amount: Gift_Coupons_Amount,
                            Update_Coupons_Amount: Update_Coupons_Amount,
                            Amount: Total_Amount,
                            BuyerID: BuyerID,
                            PurchaseData: PurchaseData
                        }
                        let CData = {
                            LogID: uuid.v4(),
                            Type: 8, //Credit Amount for Buyer Purchase
                            Amount: Total_Amount,
                            Data: cxData,
                            Time: new Date()
                        };
                        let SaveCData = await Company_Share_Logs(CData).save();
                        let Companychanges = {
                            $inc: {
                                Available_Amount: Total_Amount,
                                Total_Amount: Total_Amount
                            }
                        }
                        let CSaveData = await Company_Share.updateOne({}, Companychanges).lean().exec();

                    } else {
                        let PBQuery = {
                            BuyerID: Elegible_BuyerID[0]
                        }
                        let PBResult = await Buyers_Ultimate_Network.findOne(PBQuery).lean().exec();
                        let Parent_Current_Box = 0
                        if (PBResult.Current_Box == 1 && PBResult.Current_Box_Count == 10) {
                            Parent_Current_Box = 2
                        } else if (PBResult.Current_Box == 2 && PBResult.Current_Box_Count == 100) {
                            Parent_Current_Box = 3
                        } else if (PBResult.Current_Box == 0 && PBResult.Current_Box_Count == 0) {
                            Parent_Current_Box = 1
                        }
                        let PBchanges = {
                            $set: {
                                Current_Box: Parent_Current_Box,
                                updated_at: new Date()
                            },
                            $inc: {
                                Current_Box_Count: 1,
                            },
                            $push: {
                                Box_Amount_Data: {
                                    BuyerID: BuyerID,
                                    Cash_Coupons_Amount: Cash_Coupons_Amount,
                                    Purchace_Coupons_Amount: Purchace_Coupons_Amount,
                                    Gift_Coupons_Amount: Gift_Coupons_Amount,
                                    Update_Coupons_Amount: Update_Coupons_Amount,
                                    Time: new Date()
                                }
                            }
                        }
                        let UpdateData = await Buyers_Ultimate_Network.updateOne(PBQuery, PBchanges).lean().exec()
                        let PBchanges1 = {
                            $set: {
                                updated_at: new Date()
                            },
                            $inc: {
                                Current_Box_Count: 1,
                                Cash_Coupons_Amount_Unprocessed: Cash_Coupons_Amount,
                                Purchace_Coupons_Amount_Unprocessed: Purchace_Coupons_Amount,
                                Gift_Coupons_Amount_Unprocessed: Gift_Coupons_Amount,
                                Update_Coupons_Amount_Unprocessed: Update_Coupons_Amount,
                            }
                        }
                        let PBUpdateData1 = await Buyers.updateMany(PBQuery, PBchanges1).lean().exec();
                    }
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Complete_Payment_for_Buyer_Box_Purchase = (TransactionID, WebhookData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let query = {
                    TransactionID: TransactionID,
                    // Status: true
                }
                // 
                let Result = await Buyer_Box_Product_Purchased_Logs.findOne(query).lean();
                if (Result != null) {
                    let pay_type;
                    if (WebhookData == '') {
                        pay_type = 1;
                    } else {
                        if (WebhookData.Amount == Result.Cart_Final_Price) {


                            // if (WebhookData.Amount == config.User_Shop_Amount) {
                            pay_type = 2;
                        } else {

                            pay_type = 3;
                        }
                    }
                    let BuyersQuery = {
                        BuyerID: Result.BuyerID
                    }
                    let BuyerData = await Buyers.findOne(BuyersQuery).lean().exec();
                    /// amount deduct from from buyer wallet and maintain log for it
                    let Wallet_bal_Used = Result.Amount_Paid.Amount_Used_From_Wallet;
                    if (Wallet_bal_Used > 0) {

                        let Data = {
                            // PurchaseID: Result.PurchaseID,
                            Box_Product_PurchaseID: Result.Box_Product_PurchaseID,
                            Amount: Wallet_bal_Used,
                            BuyerData: BuyerData.Buyer_Name
                        }
                        let WData = {
                            LogID: uuid.v4(),
                            BuyerID: Result.BuyerID,
                            Type: 17,  //User Coupon Product Purchase debited amount
                            Amount: Wallet_bal_Used,
                            Data: Data,
                            Time: new Date()
                        }
                        let Resultlog = Buyer_Share_Logs(WData).save();
                        let BuyerChanges = {
                            $inc: {
                                Cash_Coupons_Amount_Available: Wallet_bal_Used * -1,
                                Cash_Coupons_Amount_Withdraw: Wallet_bal_Used
                            },
                            $set: {
                                updated_at: new Date()
                            },
                        };
                        let fndupdoptions = {
                            upsert: true,
                            setDefaultsOnInsert: true,
                            new: true
                        }
                        let updatBuyerData = await Buyers.findOneAndUpdate(BuyersQuery, BuyerChanges, fndupdoptions).lean().exec();
                    } else {

                        let finalChanges = {
                            $set: {
                                updated_at: new Date()
                            },
                        }
                        let fndupdoptionsx = {
                            upsert: true,
                            setDefaultsOnInsert: true,
                            new: true
                        }
                        let updatBuyerData = await Buyers.findOneAndUpdate(BuyersQuery, finalChanges, fndupdoptionsx).lean().exec();
                    }

                    //////
                    let changes = {
                        $set: {
                            Payment_Status: 3,
                            WebHookData: WebhookData,
                            Payment_Type: pay_type,
                            Updated_at: new Date()
                        }
                    }
                    let PurchaseLink = await ShopController.Box_Process_For_Box_Buyer_Network(Result, BuyerData.BuyerID, BuyerData)

                    let Resultx = await Buyer_Box_Product_Purchased_Logs.findOneAndUpdate(query, changes).lean().exec();
                    resolve("Purchase Completed Successfully");
                } else {

                    reject({ success: false, extras: { msg: ApiMessages.INVALID_ORDER } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Complete_Payment_for_Buyer_Purchase = (TransactionID, WebhookData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let query = {
                    TransactionID: TransactionID,
                    // Status: true
                }
                // 
                let Result = await Buyers_Purchase_Log.findOne(query).lean();
                if (Result != null) {
                    let pay_type;
                    if (WebhookData == '') {
                        pay_type = 1;
                    } else {
                        if (WebhookData.Amount == Result.Cart_Final_Price) {
                            // if (WebhookData.Amount == config.User_Shop_Amount) {
                            pay_type = 2;
                        } else {
                            pay_type = 3;
                        }
                    }
                    let BuyersQuery = {
                        BuyerID: Result.BuyerID
                    }
                    let BuyerData = await Buyers.findOne(BuyersQuery).lean().exec();
                    /// amount deduct from from buyer wallet and maintain log for it
                    let Wallet_bal_Used = Result.Amount_Paid.Amount_Used_From_Wallet;
                    if (Wallet_bal_Used > 0) {
                        let Data = {
                            PurchaseID: Result.PurchaseID,
                            Amount: Wallet_bal_Used,
                            BuyerData: BuyerData.Buyer_Name
                        }
                        let WData = {
                            LogID: uuid.v4(),
                            BuyerID: Result.BuyerID,
                            Type: 17,  //User Coupon Product Purchase debited amount
                            Amount: Wallet_bal_Used,
                            Data: Data,
                            Time: new Date()
                        }
                        let Resultlog = Buyer_Share_Logs(WData).save();
                        let BuyerChanges = {
                            $inc: {
                                Available_Amount: Wallet_bal_Used * -1,
                                Withdrawn_Amount: Wallet_bal_Used
                            },
                            $set: {
                                updated_at: new Date()
                            },
                        };
                        let fndupdoptions = {
                            upsert: true,
                            setDefaultsOnInsert: true,
                            new: true
                        }
                        let updatBuyerData = await Buyers.findOneAndUpdate(BuyersQuery, BuyerChanges, fndupdoptions).lean().exec();
                    } else {
                        let finalChanges = {
                            $set: {
                                updated_at: new Date()
                            },
                        }
                        let fndupdoptionsx = {
                            upsert: true,
                            setDefaultsOnInsert: true,
                            new: true
                        }
                        let updatBuyerData = await Buyers.findOneAndUpdate(BuyersQuery, finalChanges, fndupdoptionsx).lean().exec();
                    }

                    //////
                    let changes = {
                        $set: {
                            Payment_Status: 3,
                            WebHookData: WebhookData,
                            Payment_Type: pay_type,
                            Updated_at: new Date()
                        }
                    }
                    let Resultx = await Buyers_Purchase_Log.findOneAndUpdate(query, changes).lean().exec();
                    resolve("Purchase Completed Successfully");
                    let PurchaseLink = await ShopController.Box_Process_For_Buyer_Network(Result, BuyerData.BuyerID, BuyerData)
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_ORDER } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Purchase_Box_Product = (values, Box_Product_Data, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                console.log("1953---> " + JSON.stringify(values))
                let query = {
                    BuyerID: values.BuyerID,
                    Payment_Status: 3
                };
                let Result = await Buyer_Box_Product_Purchased_Logs.findOne(query).lean();


                let querys = {
                    AddressID: values.AddressID,
                    Status: true
                }
                let Resultdf = await Buyer_Address_Log.findOne(querys).lean();


                console.log("1953---> " + JSON.stringify(Result))
                console.log(Result === null)
                if (Result === null) {
                    // Box_Product_Data.C_Product_GST_Amount = (CProduct_Data.C_Product_GST * CProduct_Data.C_Product_Price) / 100;
                    let Available_Amount = BuyerData.Cash_Coupons_Amount_Available
                    let Amount_Used_From_Wallet = 0
                    let Amount_Paid_Online = 0
                    let calbk = false
                    let Cart_Final_Price = Box_Product_Data.Price
                    let Payment_Status = 1;
                    if (Available_Amount > Cart_Final_Price) {
                        Amount_Used_From_Wallet = Cart_Final_Price
                        Amount_Paid_Online = 0
                        Payment_Status = 3
                    } else {
                        Amount_Used_From_Wallet = Available_Amount
                        Amount_Paid_Online = Cart_Final_Price - Available_Amount
                        Payment_Status = 1
                        calbk = true
                    }

                    let Data = {
                        Box_Product_PurchaseID: uuid.v4(),
                        BuyerID: values.BuyerID,
                        Amount_Paid: {
                            Amount_Used_From_Wallet: Amount_Used_From_Wallet,
                            Amount_Paid_Online: Amount_Paid_Online,
                            Total_Amount_Paid: Amount_Used_From_Wallet + Amount_Paid_Online
                        },
                        Delivery_Address_Information: Resultdf,
                        Purchase_Number: await CommonController.Random_12_Digit_Number(), // 12 digits random number
                        Payment_Status: Payment_Status, // 1- initial, 2- fail, 3- Success, 4- Shop Payment
                        TransactionID: uuid.v4(),
                        Cart_Final_Price: Cart_Final_Price, // Cart_Total_Price + GST
                        Cart_Information: Box_Product_Data,
                        created_at: new Date(),
                        updated_at: new Date()
                    }
                    let SaveData = await Buyer_Box_Product_Purchased_Logs(Data).save();
                    let Dx = {
                        TransactionID: Data.TransactionID,
                        Online_Amount: Amount_Paid_Online,
                        Callback: calbk
                    }
                    resolve({ success: true, extras: { Data: Dx } })
                    if (!calbk) {
                        let updateTranx = await ShopController.Complete_Payment_for_Buyer_Box_Purchase(Data.TransactionID, "");
                    }
                } else {
                    console.log("1953---> fail " + JSON.stringify(Result))
                    reject({ success: false, extras: { msg: ApiMessages.PURCHASE_ALREADY_DELIVERED } });
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Purchase_Coupon_Products = (values, CProduct_Data, BuyerData) => {
    return new Promise((resolve, reject) => {

        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: values.BuyerID,
                    Payment_Status: 3
                    // Payment_Status: {
                    //     $ne: 2
                    // }
                };
                let Result = await Buyers_Purchase_Log.findOne(query).lean();

                if (Result == null) {
                    // CProduct_Data.C_Product_GST_Amount = (CProduct_Data.C_Product_GST * CProduct_Data.C_Product_Price) / 100;
                    let Available_Amount = BuyerData.Cash_Coupons_Amount_Available
                    let Amount_Used_From_Wallet = 0
                    let Amount_Paid_Online = 0
                    let calbk = false
                    let Cart_Final_Price = CProduct_Data.Price
                    if (Available_Amount > Cart_Final_Price) {
                        Amount_Used_From_Wallet = Cart_Final_Price
                        Amount_Paid_Online = 0
                    } else {
                        Amount_Used_From_Wallet = Available_Amount
                        Amount_Paid_Online = Cart_Final_Price - Available_Amount
                        calbk = true
                    }



                    let Data = {
                        PurchaseID: uuid.v4(),
                        BuyerID: values.BuyerID,
                        Amount_Paid: {
                            Amount_Used_From_Wallet: Amount_Used_From_Wallet,
                            Amount_Paid_Online: Amount_Paid_Online,
                            Total_Amount_Paid: Amount_Used_From_Wallet + Amount_Paid_Online
                        },
                        Purchase_Number: await CommonController.Random_12_Digit_Number(), // 12 digits random number
                        Payment_Status: 1, // 1- initial, 2- fail, 3- Success, 4- Shop Payment
                        TransactionID: uuid.v4(),
                        Cart_Final_Price: Cart_Final_Price, // Cart_Total_Price + GST
                        Cart_Information: CProduct_Data,
                        created_at: new Date(),
                        updated_at: new Date()
                    }
                    let SaveData = await Buyers_Purchase_Log(Data).save();

                    let Dx = {
                        TransactionID: Data.TransactionID,
                        Online_Amount: Amount_Paid_Online,
                        Callback: calbk
                    }

                    resolve({ success: true, extras: { Data: Dx } })
                    if (!calbk) {

                        //
                        let updateTranx = await ShopController.Complete_Payment_for_Buyer_Purchase(Data.TransactionID, "");
                    }

                } else {
                    reject({ success: false, extras: { msg: ApiMessages.PURCHASE_ALREADY_DELIVERED } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.User_Network_Heirarchy = (values, NetworkUserData, Type) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let netquery = {
                    BuyerID: NetworkUserData.BuyerID
                };
                let NetworkResult = await Buyers_Ultimate_Network.findOne(netquery).lean();
                console.log("2568--->" + JSON.stringify(NetworkResult));
                let ParentData = await CommonController.Check_for_Buyer(netquery);

                ParentData = await Object.assign({}, ParentData),
                    ParentData.No_of_Child_Network = await NetworkResult.No_of_Network;
                ParentData.Network_Level = await CommonController.Common_Finding_Network_Level(NetworkResult.Network_Number);
                let Network_User_Array = [];
                console.log("2575--->" + JSON.stringify(ParentData));
                await NetworkResult.Network_Information.forEach((item) => {
                    console.log("2577--->" + JSON.stringify(item.Buyer_PhoneNumber));
                    Network_User_Array.push(item.BuyerID);
                });
                let query = {
                    BuyerID: {
                        $in: Network_User_Array
                    },
                    Status: true
                };
                let sortOptions = {
                    No_of_Network: 1
                };
                let ChildData = await Buyers.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().exec();
                console.log("2589--->" + JSON.stringify(ChildData.Buyer_PhoneNumber));
                async.eachSeries(ChildData, async (item, callback) => {
                    try {
                        let fquery = {
                            BuyerID: item.BuyerID
                        };
                        let Child_Network_Data = await Buyers_Ultimate_Network.findOne(fquery).lean().exec();
                        console.log("2596--->" + JSON.stringify(item.Buyer_PhoneNumber));
                        item.No_of_Child_Network = await Child_Network_Data.No_of_Network;
                        item.Network_Level = await CommonController.Common_Finding_Network_Level(Child_Network_Data.Network_Number);
                        callback();
                    } catch (error) {
                        console.log("2596--->" + JSON.stringify(error));
                        callback(error);
                    }
                }, async (err) => {
                    if (err) reject(err);
                    if (Type == 1) {
                        console.log("2606--->" + JSON.stringify(ChildData));
                        resolve({ success: true, extras: { isHeirarchy: true, ParentData: ParentData, ChildData: ChildData } });
                    } else if (Type == 2) {
                        let Datax = {
                            isHeirarchy: true, ParentData: ParentData, ChildData: ChildData
                        }
                        console.log("2612--->" + JSON.stringify(Datax));
                        resolve(Datax);
                    } else {
                        console.log("2617--->");
                    }

                });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


ShopController.User_Network_Heirarchy = (values, NetworkUserData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let netquery = {
                    BuyerID: NetworkUserData.BuyerID
                };
                let NetworkResult = await Buyers_Ultimate_Network.findOne(netquery).lean();


                let ParentData = await CommonController.Check_for_Buyer(NetworkResult);
                ParentData.No_of_Child_Network = await NetworkResult.No_of_Network;
                ParentData.Network_Level = await CommonController.Common_Finding_Network_Level(NetworkResult.Network_Number);
                let Network_User_Array = [];
                await NetworkResult.Network_Information.forEach((item) => {
                    Network_User_Array.push(item.BuyerID);
                });
                let query = {
                    BuyerID: {
                        $in: Network_User_Array
                    },
                    Status: true
                };
                let sortOptions = {
                    No_of_Network: 1
                };
                let ChildData = await Buyers.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().exec();

                async.eachSeries(ChildData, async (item, callback) => {
                    try {
                        let fquery = {
                            BuyerID: item.BuyerID
                        };
                        let Child_Network_Data = await Buyers_Ultimate_Network.findOne(fquery).lean().exec();
                        item.No_of_Child_Network = await Child_Network_Data.No_of_Network;
                        item.Network_Level = await CommonController.Common_Finding_Network_Level(Child_Network_Data.Network_Number);
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async (err) => {
                    if (err) reject(err);
                    resolve({ success: true, extras: { isHeirarchy: true, ParentData: ParentData, ChildData: ChildData } });
                });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}
ShopController.User_Network_Heirarchy_Validate_Network_USERID = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let netquery = {

                };
                console.log()
                if (values.Network_USERID == null || values.Network_USERID == "" || values.Network_USERID == undefined) {
                    console.log("2630-->" + JSON.stringify(values))
                    netquery.BuyerID = values.BuyerID;
                } else {
                    console.log("2632-->" + JSON.stringify(values))
                    netquery.BuyerID = values.Network_USERID
                }

                let Result = await Buyers.findOne(netquery).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_NETWORK_USER } })
                } else {
                    resolve(Result);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Coupons_NetWorkData = (values, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {


                let query = {
                    BuyerID: values.BuyerID
                }
                let Result = await Buyers_Ultimate_Network.findOne(query).lean().exec();

                if (Result.No_of_Network == null) {
                    Result.No_of_Network = 0
                }
                // let Total_Expired_Amount = 0

                var Current_Box = BuyerData.Current_Box;
                let Total_Cash_Coupons_Amount = BuyerData.Cash_Coupons_Amount_Total
                let Total_Purchace_Coupons_Amount = BuyerData.Purchace_Coupons_Amount_Total
                let Total_Gift_Coupons_Amount = BuyerData.Gift_Coupons_Amount_Total
                let Total_Update_Coupons_Amount = 0;
                let Network_Information = [];

                switch (Current_Box) {
                    case 1:
                        Total_Update_Coupons_Amount = BuyerData.Box_One_Upgrade_Amount_Total;
                        Network_Information = BuyerData.Box_One_Arr;

                        break;
                    case 2:


                        Total_Update_Coupons_Amount = BuyerData.Box_Two_Upgrade_Amount_Total;
                        Network_Information = BuyerData.Box_Two_Arr;
                        break;
                    case 3:

                        Total_Update_Coupons_Amount = BuyerData.Box_Three_Upgrade_Amount_Total;
                        Network_Information = BuyerData.Box_Three_Arr;
                        break;

                }

                let Data = {
                    Current_Box: BuyerData.Current_Box,
                    Current_Box_Count: BuyerData.Current_Box_Count,
                    No_of_Network: Result.No_of_Network,
                    Network_Information: Network_Information,
                    // Total_Expired_Amount: Total_Expired_Amount,
                    Total_Cash_Coupons_Amount: Total_Cash_Coupons_Amount,
                    Total_Purchace_Coupons_Amount: Total_Purchace_Coupons_Amount,
                    Total_Gift_Coupons_Amount: Total_Gift_Coupons_Amount,
                    Total_Update_Coupons_Amount: Total_Update_Coupons_Amount,
                    Total_Coupons: Total_Cash_Coupons_Amount + Total_Purchace_Coupons_Amount + Total_Gift_Coupons_Amount,
                    Used_Coupons: BuyerData.Cash_Coupons_Amount_Withdraw + BuyerData.Purchace_Coupons_Amount_Withdraw + BuyerData.Gift_Coupons_Amount_Withdraw + BuyerData.Update_Coupons_Amount_Withdraw
                }

                resolve({ success: true, extras: { Data: Data } })

            } catch (error) {

                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.NetWork_Users_Info = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                async.eachSeries(values, async (item, callback) => {
                    try {
                        let query = {
                            BuyerID: item.BuyerID
                        };
                        let BuyerData = await Buyers.findOne(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -RazorpayX_ContactID -Cart_Information').lean();
                        item.BuyerData = BuyerData

                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async (err) => {
                    if (err) reject(err);
                    resolve(values);
                });

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.List_My_Referals = (values, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    created_at: -1
                };
                let query = {
                    BuyerID: values.BuyerID,
                };
                let Result = await Buyers_Ultimate_Network.findOne(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -Amount_Paid -Users_Shop_Password').lean();
                if (Result == null || Result.No_of_Network == 0) {
                    // reject({ success: false, extras: { msg: ApiMessages.NO_NETWORK_FOUND } });
                    resolve({ success: true, extras: { Count: 0, Data: [] } });
                } else if (Result.No_of_Network > 0) {
                    let Network_Information = await ShopController.NetWork_Users_Info(Result.Network_Information);

                    let Count = Network_Information.length
                    resolve({ success: true, extras: { Count: Count, Data: Network_Information.slice(toSkip, toSkip + toLimit) } });
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Buyer_Wallet_Logs = (values, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                //  console.log("2723---->" + JSON.stringify(values))
                //  Type 1.//main wallet 2.Purchase wallet, //3.Gift Wallet  //4.Update coupons Wallet, //5.Expire Wallet  
                let Available_Amount = 0
                let Withdrawn_Amount = 0
                let Total_Amount = 0
                let Amount_Unprocessed = 0
                let Result;
                let Count;
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    Time: -1
                };

                var start = new Date();
                var hrstart = process.hrtime();



                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    console.log("2740---->" + JSON.stringify(values))
                    sortOptions = values.sortOptions;
                };
                let query = {
                    BuyerID: values.BuyerID
                }


                switch (+(values.Logs_Type)) {
                    //main wallet
                    case 1:
                         var end = new Date() - start,
                         hrend = process.hrtime(hrstart);    
                        Count = await Buyer_Share_Logs.countDocuments(query).lean().exec();
                        Result = await Buyer_Share_Logs.find(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                        console.info("Execution time: %dms", end);
                        console.info("Execution time (hr): %ds %dms", hrend[0], hrend[1]/1000000);
                        break;
                    //Purchase wallet
                    case 2:
                        var end = new Date() - start,
                        hrend = process.hrtime(hrstart);
                        Count = await Buyer_Purchase_Wallet_Logs.countDocuments(query).lean().exec();
                        Result = await Buyer_Purchase_Wallet_Logs.find(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                        console.info("Execution time: %dms", end);
                        console.info("Execution time (hr): %ds %dms", hrend[0], hrend[1]/1000000);
                        //  
                        break;
                    //Gift Wallet   
                    case 3:
                        var end = new Date() - start,
                         hrend = process.hrtime(hrstart);
                        Count = await Buyer_Gift_Amount_WithDrawn_Logs.countDocuments(query).lean().exec();
                        Result = await Buyer_Gift_Amount_WithDrawn_Logs.find(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                        console.info("Execution time: %dms", end);
                        console.info("Execution time (hr): %ds %dms", hrend[0], hrend[1]/1000000);
                        break;
                    //Update coupons Wallet   
                    case 4:
                        var end = new Date() - start,
                         hrend = process.hrtime(hrstart);
                        Count = await Buyer_Update_Coupons_Wallet_Logs.countDocuments(query).lean().exec();
                        Result = await Buyer_Update_Coupons_Wallet_Logs.find(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                        console.info("Execution time: %dms", end);
                        console.info("Execution time (hr): %ds %dms", hrend[0], hrend[1]/1000000);
                        break;
                    //Expire Wallet    
                    case 5:
                        var end = new Date() - start,
                         hrend = process.hrtime(hrstart);
                        Count = await Buyer_Expired_Amount_Wallet_Logs.countDocuments(query).lean().exec();
                        Result = await Buyer_Expired_Amount_Wallet_Logs.find(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                        console.info("Execution time: %dms", end);
                        console.info("Execution time (hr): %ds %dms", hrend[0], hrend[1]/1000000);
                        break;
                }
                //  
                // if()
                resolve({ success: true, extras: { Count: Count, Data: Result } });


            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Buyer_Wallets = (values, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                //  Type 1.//main wallet 2.Purchase wallet, //3.Gift Wallet  //4.Update coupons Wallet, //5.Expire Wallet  
                let Available_Amount = 0
                let Withdrawn_Amount = 0
                let Total_Amount = 0
                let Amount_Unprocessed = 0
                switch (+(values.Type)) {
                    //Cash wallet
                    case 1:
                        Available_Amount = BuyerData.Cash_Coupons_Amount_Available
                        Withdrawn_Amount = BuyerData.Cash_Coupons_Amount_Withdraw
                        Total_Amount = BuyerData.Cash_Coupons_Amount_Total
                        // Amount_Unprocessed = BuyerData.Amount_Unprocessed
                        break;
                    //Purchase wallet
                    case 2:
                        Available_Amount = BuyerData.Purchace_Coupons_Amount_Available
                        Withdrawn_Amount = BuyerData.Purchace_Coupons_Amount_Withdraw
                        Total_Amount = BuyerData.Purchace_Coupons_Amount_Total
                        Amount_Unprocessed = BuyerData.Purchace_Coupons_Amount_Unprocessed
                        break;
                    //Gift Wallet   
                    case 3:
                        Available_Amount = BuyerData.Gift_Coupons_Amount_Available
                        Withdrawn_Amount = BuyerData.Gift_Coupons_Amount_Withdraw
                        Total_Amount = BuyerData.Gift_Coupons_Amount_Total
                        Amount_Unprocessed = BuyerData.Gift_Coupons_Amount_Unprocessed
                        break;
                    //Update coupons Wallet   
                    case 4:
                        Available_Amount = BuyerData.Update_Coupons_Amount_Available
                        Withdrawn_Amount = BuyerData.Update_Coupons_Amount_Withdraw
                        Total_Amount = BuyerData.Update_Coupons_Amount_Total
                        Amount_Unprocessed = BuyerData.Update_Coupons_Amount_Unprocessed
                        break;
                    //Expire Wallet    
                    case 5:
                        Available_Amount = BuyerData.Expired_Amount
                        if (BuyerData.Expired_Amount_Withdraw != undefined) {
                            Withdrawn_Amount = BuyerData.Expired_Amount_Withdraw
                        }
                        if (BuyerData.Expired_Amount_Total != undefined) {
                            Total_Amount = BuyerData.Expired_Amount_Total
                        }
                        break;

                    case 6:
                        Available_Amount = BuyerData.Available_Amount
                        if (BuyerData.Withdrawn_Amount != undefined) {
                            Withdrawn_Amount = BuyerData.Withdrawn_Amount
                        }
                        if (BuyerData.Total_Amount != undefined) {
                            Total_Amount = BuyerData.Total_Amount
                        }
                        break;
                }
                resolve({
                    success: true, extras: {
                        Data: {
                            Available_Amount,
                            Withdrawn_Amount,
                            Total_Amount,
                            Amount_Unprocessed,
                            BuyerData
                        }
                    }
                })

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


ShopController.Check_User_Shops_Request_ShareAmount = (values, BuyerData, ShopData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let query = {
                    Users_ShopsID: values.Users_ShopsID,
                    Payment_Status: 3,
                    User_Shop_Status: 3
                };
                let Result = await Users_Shops.findOne(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -Amount_Paid -Users_Shop_Password').lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.NO_USER_SHOP_FOUND } });
                } else {

                    let Used_Wallet_Amount = 0
                    let Purchase_Used_Wallet_Amount = 0
                    let Remaining_Pay_Amount = values.Total_Amount
                    let Total_User_Share_Amount = Remaining_Pay_Amount + Used_Wallet_Amount

                    let Wallet_Remaining_Pay_Amount = (Remaining_Pay_Amount / 100) * config.Wallet_Amount_Request_Share_Percent
                    let Purchase_Wallet_Remaining_Pay_Amount = (Remaining_Pay_Amount / 100) * config.Purchase_Wallet_Amount_Request_Share_Percent

                    //main Wallet
                    if (BuyerData.Cash_Coupons_Amount_Available > 0) {
                        if (Wallet_Remaining_Pay_Amount <= BuyerData.Cash_Coupons_Amount_Available) {
                            // 
                            Used_Wallet_Amount = Wallet_Remaining_Pay_Amount
                            Wallet_Remaining_Pay_Amount -= Wallet_Remaining_Pay_Amount

                        } else if (Wallet_Remaining_Pay_Amount > BuyerData.Cash_Coupons_Amount_Available) {
                            Wallet_Remaining_Pay_Amount = Wallet_Remaining_Pay_Amount - BuyerData.Cash_Coupons_Amount_Available
                            Used_Wallet_Amount = BuyerData.Cash_Coupons_Amount_Available
                        }
                    }

                    //purchase Wallet
                    if (BuyerData.Purchace_Coupons_Amount_Available > 0) {
                        if (Purchase_Wallet_Remaining_Pay_Amount <= BuyerData.Purchace_Coupons_Amount_Available) {
                            // 
                            Purchase_Used_Wallet_Amount = Purchase_Wallet_Remaining_Pay_Amount
                            Purchase_Wallet_Remaining_Pay_Amount -= Purchase_Wallet_Remaining_Pay_Amount

                        } else if (Purchase_Wallet_Remaining_Pay_Amount > BuyerData.Purchace_Coupons_Amount_Available) {
                            Purchase_Wallet_Remaining_Pay_Amount = Purchase_Wallet_Remaining_Pay_Amount - BuyerData.Purchace_Coupons_Amount_Available
                            Purchase_Used_Wallet_Amount = BuyerData.Purchace_Coupons_Amount_Available
                        }
                    }
                    Remaining_Pay_Amount = Purchase_Wallet_Remaining_Pay_Amount + Wallet_Remaining_Pay_Amount

                    let Payment_Data = {
                        Amount_Used_From_Wallet: Used_Wallet_Amount,
                        Amount_Used_From_Purchase_Wallet: Purchase_Used_Wallet_Amount,
                        Amount_Paid_Online: Remaining_Pay_Amount,
                        Total_Amount: Total_User_Share_Amount,
                        Total_Amount_Paid_From_Wallet: (Used_Wallet_Amount + Purchase_Used_Wallet_Amount),
                        Remaining_Cash_Amount: Remaining_Pay_Amount
                    }
                    resolve({ success: true, extras: { Payment_Data } })

                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Complete_Payment_for_User_Shops_Request = (Buyer_TransactionID, Buyer_WebHookData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query_req = {
                    Buyer_TransactionID: Buyer_TransactionID,
                    Buyer_Payment_Status: 1,
                    // Request_Status: 1
                }
                // 

                let Result = await Buyer_Shop_requests_Notification.findOne(query_req).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -Amount_Paid -Users_Shop_Password').lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.NO_REQUEST_FOUND } });
                } else {
                    let pay_type;
                    if (Buyer_WebHookData == '') {
                        pay_type = 1;
                    } else {
                        // if (WebhookData.Amount == Result.Cart_Final_Price) {
                        if (Buyer_WebHookData.Amount == Result.Total_Amount) {
                            pay_type = 2;
                        } else {
                            pay_type = 3;
                        }
                    }
                    let query_buyer = {
                        BuyerID: Result.BuyerID
                    }
                    let BuyerData2 = await Buyers.findOne(query_buyer).lean().exec();

                    // 
                    let Wallet_bal_Used = Result.Buyer_Amount_Paid.Amount_Used_From_Wallet;
                    let Purchase_Wallet_bal_Used = Result.Buyer_Amount_Paid.Amount_Used_From_Purchase_Wallet;
                    let fndupdoptions = {
                        upsert: true,
                        setDefaultsOnInsert: true,
                        new: true
                    }
                    if (Wallet_bal_Used > 0) {
                        let Data = {
                            Buyer_Shop_request_ID: Result.Buyer_Shop_request_ID,
                            Amount: Wallet_bal_Used,
                            BuyerData: BuyerData2.Buyer_Name,
                            Buyer_Name: BuyerData2.Buyer_Name,
                            From_Buyer_Name: BuyerData2.Buyer_Name
                        }
                        let WData = {
                            LogID: uuid.v4(),
                            BuyerID: Result.BuyerID,
                            Type: 19,  //User SHop debited amount for Buyer Share Amount Request Notofication
                            Amount: Wallet_bal_Used,
                            Data: Data,
                            Time: new Date()
                        }
                        let Resultlog = Buyer_Share_Logs(WData).save();
                        let BuyerChanges = {
                            $inc: {
                                Cash_Coupons_Amount_Available: Wallet_bal_Used * -1,
                                Cash_Coupons_Amount_Withdraw: Wallet_bal_Used
                            },
                            $set: {
                                // Cart_Total_Items: 0,
                                // Cart_Total_Price: 0,
                                updated_at: new Date()
                            },
                            // $pull: {
                            //     Cart_Information: {
                            //         ProductID: {
                            //             $ne: null
                            //         }
                            //     }
                            // }
                        };

                        let updatBuyerData = await Buyers.findOneAndUpdate(query_buyer, BuyerChanges, fndupdoptions).lean().exec();
                    }

                    if (Purchase_Wallet_bal_Used > 0) {
                        let PData = {
                            Buyer_Name: BuyerData2.Buyer_Name,
                            From_Buyer_Name: BuyerData2.Buyer_Name
                        }
                        let PWData = {
                            LogID: uuid.v4(),
                            BuyerID: Result.BuyerID,
                            Type: 2,  //User SHop debited amount for Buyer Share Amount Request Notofication
                            Amount: Purchase_Wallet_bal_Used,
                            Data: PData,
                            Time: new Date()
                        }
                        let ResultlogP = Buyer_Purchase_Wallet_Logs(PWData).save();
                        let PBuyerChanges = {
                            $inc: {
                                Purchace_Coupons_Amount_Available: Purchase_Wallet_bal_Used * -1,
                                Purchace_Coupons_Amount_Withdraw: Purchase_Wallet_bal_Used
                            },
                            $set: {

                                updated_at: new Date()
                            },
                        };

                        let updatBuyerDataP = await Buyers.findOneAndUpdate(query_buyer, PBuyerChanges, fndupdoptions).lean().exec();
                    }


                    let change = {
                        $set: {
                            Buyer_Payment_Status: 3,
                            Request_Status: 1,
                            Buyer_Payment_Type: pay_type,
                            Buyer_WebHookData: Buyer_WebHookData,
                            updated_at: new Date()
                        }
                    }
                    let update_paymentstatus = await Buyer_Shop_requests_Notification.updateOne(query_req, change).lean();
                    resolve("Request Completed Successfully");
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


ShopController.User_Shops_Request_ShareAmount_2 = (values, BuyerData, ShopData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                    console.log("3188--->" +JSON.stringify(values))
                let query = {
                    Users_ShopsID: values.Users_ShopsID,
                    Payment_Status: 3,
                    User_Shop_Status: 3
                };
                let Result = await Users_Shops.findOne(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -Amount_Paid -Users_Shop_Password').lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.NO_USER_SHOP_FOUND } });
                } else {
                    // 
                    let Used_Wallet_Amount = 0
                    let Purchase_Used_Wallet_Amount = 0
                    let Remaining_Pay_Amount = values.Total_Amount
                    let Total_User_Share_Amount = Remaining_Pay_Amount + Used_Wallet_Amount

                    let Wallet_Remaining_Pay_Amount = (Remaining_Pay_Amount / 100) * config.Wallet_Amount_Request_Share_Percent
                    let Purchase_Wallet_Remaining_Pay_Amount = (Remaining_Pay_Amount / 100) * config.Purchase_Wallet_Amount_Request_Share_Percent

                    //main Wallet
                    if (BuyerData.Cash_Coupons_Amount_Available > 0) {
                        if (Wallet_Remaining_Pay_Amount <= BuyerData.Cash_Coupons_Amount_Available) {
                            // 
                            Used_Wallet_Amount = Wallet_Remaining_Pay_Amount
                            Wallet_Remaining_Pay_Amount -= Wallet_Remaining_Pay_Amount

                        } else if (Wallet_Remaining_Pay_Amount > BuyerData.Cash_Coupons_Amount_Available) {
                            Wallet_Remaining_Pay_Amount = Wallet_Remaining_Pay_Amount - BuyerData.Cash_Coupons_Amount_Available
                            Used_Wallet_Amount = BuyerData.Cash_Coupons_Amount_Available
                        }
                    }

                    //purchase Wallet
                    if (BuyerData.Purchace_Coupons_Amount_Available > 0) {
                        if (Purchase_Wallet_Remaining_Pay_Amount <= BuyerData.Purchace_Coupons_Amount_Available) {
                            // 
                            Purchase_Used_Wallet_Amount = Purchase_Wallet_Remaining_Pay_Amount
                            Purchase_Wallet_Remaining_Pay_Amount -= Purchase_Wallet_Remaining_Pay_Amount

                        } else if (Purchase_Wallet_Remaining_Pay_Amount > BuyerData.Purchace_Coupons_Amount_Available) {
                            Purchase_Wallet_Remaining_Pay_Amount = Purchase_Wallet_Remaining_Pay_Amount - BuyerData.Purchace_Coupons_Amount_Available
                            Purchase_Used_Wallet_Amount = BuyerData.Purchace_Coupons_Amount_Available
                        }
                    }
                    Remaining_Pay_Amount = Purchase_Wallet_Remaining_Pay_Amount + Wallet_Remaining_Pay_Amount

                    let Payment_Data = {
                        Amount_Used_From_Wallet: Used_Wallet_Amount,
                        Amount_Used_From_Purchase_Wallet: Purchase_Used_Wallet_Amount,
                        Total_Amount_Paid: (Used_Wallet_Amount + Purchase_Used_Wallet_Amount),
                        Amount_Paid_Online: Remaining_Pay_Amount,
                        Total_Amount: Total_User_Share_Amount,
                        Total_Amount_Paid_From_Wallet: (Used_Wallet_Amount + Purchase_Used_Wallet_Amount),
                        Remaining_Cash_Amount: Remaining_Pay_Amount
                    }
                    let calbk;
                    console.log("3268-->"+JSON.stringify(Remaining_Pay_Amount))
                    if (parseInt(Remaining_Pay_Amount) == 0) {
                        calbk = false;
                        // Payment_Type = 1
                    } else {
                        calbk = true;
                        // Payment_Type = 2
                    }


                    let ShareAMount = 0

                    let Coupons_Category_Data = await CommonController.Check_for_Coupons_Category_only(Result);
                    if (Coupons_Category_Data != null) {
                        if (Coupons_Category_Data.CC_Admin_Share_Percent != undefined && Coupons_Category_Data.CC_Admin_Share_Percent != "") {
                            ShareAMount = (values.Total_Amount / 100) * Coupons_Category_Data.CC_Admin_Share_Percent
                        }
                    }

                    let RequestData = {
                        Buyer_Shop_request_ID: uuid.v4(),
                        Buyer_Amount_Paid: await Object.assign({}, Payment_Data),
                        BuyerID: values.BuyerID,
                        Users_ShopsID: values.Users_ShopsID,
                        Coupons_CategoryID: ShopData.Coupons_CategoryID,
                        Total_Amount: values.Total_Amount,
                        Request_Status: 1,
                        Buyer_Request_Status: 1,
                        Share_Amount: ShareAMount,
                        Shop_Payment_Status: 1,
                        Buyer_Payment_Status: 1,
                        TransactionID: uuid.v4(),
                        Buyer_TransactionID: uuid.v4(),
                        Shop_BuyerID: Result.BuyerID,
                        created_at: new Date(),
                        updated_at: new Date()
                    }

                    calbk = false
                    let ResultData = {
                        Buyer_Shop_request_ID: RequestData.Buyer_Shop_request_ID,
                        Users_ShopsID: RequestData.Users_ShopsID,
                        TransactionID: RequestData.Buyer_TransactionID,
                        Callback: calbk,
                        Final_Amount: Remaining_Pay_Amount.toFixed(2)
                    }

                    let Resultlog = await Buyer_Shop_requests_Notification(RequestData).save();

                   // let updateTranx = await ShopController.Complete_Payment_for_User_Shops_Request(RequestData.Buyer_TransactionID, "");

                    resolve({ success: true, extras: { Status: "User Shop Notification Requested Successfully", Data: ResultData, Payment_Data } })

                    console.log("3296-->"+JSON.stringify(RequestData))

                    console.log("3298-->"+JSON.stringify(calbk))
                    if (!calbk) {
                        
                        //
                        let updateTranx = await ShopController.Complete_Payment_for_User_Shops_Request(RequestData.Buyer_TransactionID, "");
                    }

                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Check_User_Shop_By_PhoneNumber = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let query;
                query = {
                    Users_Shop_PhoneNumber: values.Users_Shop_PhoneNumber,
                    Status: true,
                    Payment_Status: 3,
                    User_Shop_Status: 3
                };

                let Result = await Users_Shops.find(query).select('-_id -__v').lean();//.skip(toSkip).limit(toLimit).exec();
                let Count = Result.length
                let User_Shop_Found;
                if (Result.length == 0) {
                    reject({ success: false, extras: { User_Shop_Found: false, msg: ApiMessages.NO_USER_SHOP_FOUND_FOR_THIS_NUMBER } });

                } else {
                    resolve({ success: true, extras: { User_Shop_Found: true, Data: Result } });
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.List_All_User_Shops = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let query;
                if (values.NearFilter) {
                    let Latitude = parseFloat(values.Latitude);
                    let Longitude = parseFloat(values.Longitude);
                    let Point = [
                        Longitude,
                        Latitude
                    ];
                    query = {
                        'Point': {
                            '$near': {
                                '$minDistance': 0,
                                '$maxDistance': 50000,
                                '$geometry': {
                                    type: "Point",
                                    coordinates: Point
                                }
                            }
                        },
                        'Status': true,
                        'Payment_Status': 3,
                        'User_Shop_Status': 3
                    };
                } else if (!values.NearFilter) {
                    query = {
                        Status: true,
                        Payment_Status: 3,
                        User_Shop_Status: 3
                    };
                }

                let Result = await Users_Shops.find(query).select('Users_ShopsID Users_Shop_Name Users_Shop_CountryCode Users_Shop_PhoneNumber Address User_Shop_Number Latitude Longitude Point').lean();//.skip(toSkip).limit(toLimit).exec();
                let Count = Result.length
                resolve({ success: true, extras: { Count: Count, Data: Result.slice(toSkip, toSkip + toLimit) } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.List_With_Draw_Gift_Amount_Requests = (values, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    created_at: -1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                let query = {
                    BuyerID: values.BuyerID
                };
                let Count = await Buyer_Gift_Amount_WithDrawn_Logs.countDocuments(query).lean().exec();
                let Result = await Buyer_Gift_Amount_WithDrawn_Logs.find(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                resolve({ success: true, extras: { Count: Count, Data: Result } });

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.With_Draw_Gift_Amount = (values, BuyerData, GiftMeterData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let WithDrawn_Amount = parseInt(values.WithDrawn_Amount)
                // 
                if (WithDrawn_Amount >= GiftMeterData.Value && WithDrawn_Amount <= BuyerData.Gift_Coupons_Amount_Available) {
                    let Data = {
                        LogID: uuid.v4(),
                        BuyerID: values.BuyerID,
                        Gift_MeterID: values.Gift_MeterID,
                        Type: 1,
                        Request_Status: 1,
                        // Type: { type: Number, default: 1 }, //1. Credited from Razorpay
                        Amount: WithDrawn_Amount,
                        Data: {
                            GiftMeterData: GiftMeterData,
                            // BuyerData: BuyerData
                        },
                        Time: new Date()
                    }
                    let Resultlog = Buyer_Gift_Amount_WithDrawn_Logs(Data).save();

                    let query_Buyer = {
                        BuyerID: BuyerData.BuyerID
                    }
                    let changes = {
                        $inc: {
                            Gift_Coupons_Amount_Available: WithDrawn_Amount * -1,
                            Gift_Coupons_Amount_Withdraw: WithDrawn_Amount
                        },
                        $set: {

                            updated_at: new Date()
                        },
                    }
                    let fndupdoptions = {
                        upsert: true,
                        setDefaultsOnInsert: true,
                        new: true
                    }
                    let updatBuyerData = await Buyers.findOneAndUpdate(query_Buyer, changes, fndupdoptions).lean().exec();
                    resolve({ success: true, extras: { Status: "Buyer Gift Amount Withdrawn Request Added Successfully" } })

                } else {
                    reject({ success: false, extras: { msg: ApiMessages.GIFT_AMOUNT_NOT_SUFFICIENT_TO_WITHDRAW } });
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Purchase_Logs = (values, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: values.BuyerID,
                    // Payment_Status: values.Payment_Status
                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    created_at: -1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                // 
                // let Result = await Buyers_Purchase_Log.findOne(query).lean();
                let Count = await Buyers_Purchase_Log.countDocuments(query).lean().exec();
                let Result = await Buyers_Purchase_Log.find(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                // resolve({ success: true, extras: { Count: Count, Data: Result } });
                if (Result != null) {
                    async.eachSeries(Result, async (item, callback) => {
                        try {
                            item.Cart_Information.C_Product_Image_Data = await CommonController.Common_Image_Response_Single_Image(true, item.Cart_Information.C_Product_Image_Data);
                            callback();
                        } catch (error) {
                            callback(error);
                        }
                    }, async (err) => {
                        if (err) reject(err);
                        resolve({ success: true, extras: { Count: Count, Data: Result } });
                    });

                } else {
                    reject({ success: false, extras: { msg: ApiMessages.NO_PURCHASE_LOGS_FOUND } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.List_Gift_Meter = (values, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    SNo: -1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                // let query = { 
                //     Status: true
                // };

                let query = {
                    Status: true
                };
                let Count = await Gift_Meter.countDocuments(query).lean().exec();
                let Result = await Gift_Meter.find(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();

                async.eachSeries(Result, async (item, callback) => {
                    try {
                        item.Image_Data = await CommonController.Common_Image_Response_Single_Image(item.Image_Available, item.Image_Data);
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async (err) => {
                    if (err) reject(err);

                    delete BuyerData.SessionID
                    delete BuyerData.DeviceID
                    delete BuyerData.Whether_RazorpayX_Buyer_Register
                    delete BuyerData.RazorpayX_ContactID
                    delete BuyerData.Buyer_Password
                    delete BuyerData.Cart_Information
                    delete BuyerData.Ref_PhoneNumber_Available
                    delete BuyerData.created_at
                    delete BuyerData.updated_at
                    delete BuyerData.__v


                    resolve({ success: true, extras: { Count: Count, Data: Result, BuyerData: BuyerData } });
                });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.List_Target_Referals = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    SNo: -1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                let query = {
                    Status: true
                };
                let Count = await Target_Referal.countDocuments(query).lean().exec();
                let Result = await Target_Referal.find(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                resolve({ success: true, extras: { Count: Count, Data: Result } });

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Reject_Sharing_The_Buyer_Share_Requests = (Share_Request_Data) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query_buyer = {
                    BuyerID: Share_Request_Data.BuyerID
                }

                let BuyerData = await CommonController.Check_for_Buyer(query_buyer);


                let Buyer_Wallet_bal_Used = await Share_Request_Data.Buyer_Amount_Paid.Total_Amount_Paid_From_Wallet;
                let Amount_Used_From_Wallet = await Share_Request_Data.Buyer_Amount_Paid.Amount_Used_From_Wallet;
                let Amount_Used_From_Purchase_Wallet = await Share_Request_Data.Buyer_Amount_Paid.Amount_Used_From_Purchase_Wallet;

                let Data = {
                    // OrderID: Result.OrderID,
                    Buyer_Shop_request_ID: Share_Request_Data.Buyer_Shop_request_ID,
                    Amount: Share_Request_Data.Total_Amount,
                    From_Buyer_Name: BuyerData.Buyer_Name
                }
                let fndupdoptions = {
                    upsert: true,
                    setDefaultsOnInsert: true,
                    new: true
                }
                if (Amount_Used_From_Wallet > 0) {
                    let WData = {
                        LogID: uuid.v4(),
                        BuyerID: BuyerData.BuyerID,
                        Type: 22, //Amount Refunded Credited for Reject user request                        
                        Amount: Amount_Used_From_Wallet,
                        Data: Data,
                        Time: new Date()
                    }
                    let Resultlog = Buyer_Share_Logs(WData).save();



                    let BuyerChanges = {
                        $inc: {
                            Available_Amount: parseFloat(Amount_Used_From_Wallet),
                            Total_Amount: parseFloat(Amount_Used_From_Wallet)
                        },
                        $set: {
                            updated_at: new Date()
                        },
                    };

                    let updatBuyerData = await Buyers.findOneAndUpdate(query_buyer, BuyerChanges, fndupdoptions).lean().exec();

                }
                if (Amount_Used_From_Purchase_Wallet > 0) {
                    let APWData = {
                        LogID: uuid.v4(),
                        BuyerID: BuyerData.BuyerID,
                        Type: 5,  //User SHop Credited amount for Buyer Share Amount Request Notofication Rejected
                        Amount: Amount_Used_From_Purchase_Wallet,
                        Data: Data,
                        Time: new Date()
                    }
                    let PResultlogA = Buyer_Purchase_Wallet_Logs(APWData).save();

                    let PBuyerChanges = {
                        $inc: {
                            Purchace_Coupons_Amount_Available: parseFloat(Amount_Used_From_Purchase_Wallet),
                            Purchace_Coupons_Amount_Total: parseFloat(Amount_Used_From_Purchase_Wallet)
                        },
                        $set: {
                            updated_at: new Date()
                        },
                    };

                    let PupdatBuyerData = await Buyers.findOneAndUpdate(query_buyer, PBuyerChanges, fndupdoptions).lean().exec();
                }

                /////
                let query_Share_Req_query = {
                    Buyer_Shop_request_ID: Share_Request_Data.Buyer_Shop_request_ID
                }
                let changes = {
                    $set: {
                        Request_Status: 2,
                        updated_at: new Date()
                    }
                }
                let updatedSubscription_Links = await Buyer_Shop_requests_Notification.updateOne(query_Share_Req_query, changes).lean();
                //////

                resolve("Request Rejected Successfully");

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


ShopController.Razorpay_Calbk_Sharing_The_Buyer_Share_Requests = (Share_Request_Data, WebhookData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query_buyer = {
                    BuyerID: Share_Request_Data.Shop_BuyerID
                }


                let BuyerData = await CommonController.Check_for_Buyer(query_buyer);

                let Share_data = await AdminController.Sharing_The_Buyer_Share_Requests(Share_Request_Data, Share_Request_Data, BuyerData)
                // return true

                // 
                let pay_type;
                if (WebhookData == '') {

                    pay_type = 1;
                } else {
                    // if (WebhookData.Amount == Result.Cart_Final_Price) {
                    if (WebhookData.Amount == Share_Request_Data.Share_Amount) {
                        pay_type = 2;

                    } else {
                        pay_type = 3;

                    }
                }
                // 
                // 
                let Wallet_bal_Used = Share_Request_Data.Amount_Paid.Amount_Used_From_Wallet;
                if (Wallet_bal_Used > 0) {

                    // 
                    let Data = {
                        // OrderID: Result.OrderID,
                        Buyer_Shop_request_ID: Share_Request_Data.Buyer_Shop_request_ID,
                        Amount: parseFloat(Wallet_bal_Used),
                        BuyerData: BuyerData.Buyer_Name,
                        From_Buyer_Name: BuyerData.Buyer_Name
                    }
                    let WData = {
                        LogID: uuid.v4(),
                        BuyerID: BuyerData.BuyerID,
                        Type: 18,  //User SHop debited amount for Share Amount Request Notofication
                        Amount: parseFloat(Wallet_bal_Used),
                        Data: Data,
                        Time: new Date()
                    }
                    let Resultlog = Buyer_Share_Logs(WData).save();

                    let BuyerChanges = {
                        $inc: {
                            Cash_Coupons_Amount_Available: parseFloat(Wallet_bal_Used) * -1,
                            Cash_Coupons_Amount_Withdraw: parseFloat(Wallet_bal_Used)
                        },
                        $set: {
                            // Cart_Total_Items: 0,
                            // Cart_Total_Price: 0,
                            updated_at: new Date()
                        },
                        // $pull: {
                        //     Cart_Information: {
                        //         ProductID: {
                        //             $ne: null
                        //         }
                        //     }
                        // }
                    };
                    let fndupdoptions = {
                        upsert: true,
                        setDefaultsOnInsert: true,
                        new: true
                    }
                    let updatBuyerData = await Buyers.findOneAndUpdate(query_buyer, BuyerChanges, fndupdoptions).lean().exec();
                } else {

                    // 
                    let finalChanges = {
                        $set: {
                            // Cart_Total_Items: 0,
                            // Cart_Total_Price: 0,
                            updated_at: new Date()
                        },
                        // $pull: {
                        //     Cart_Information: {
                        //         ProductID: {
                        //             $ne: null
                        //         }
                        //     }
                        // }
                    }
                    let fndupdoptionsx = {
                        upsert: true,
                        setDefaultsOnInsert: true,
                        new: true
                    }
                    let updatBuyerData = await Buyers.findOneAndUpdate(query_buyer, finalChanges, fndupdoptionsx).lean().exec();
                }
                let Buyer_Wallet_bal_Used = await Share_Request_Data.Buyer_Amount_Paid.Total_Amount_Paid_From_Wallet;

                // 
                if (Buyer_Wallet_bal_Used > 0) {

                    let BR_Data = {
                        // OrderID: Result.OrderID,
                        Buyer_Shop_request_ID: Share_Request_Data.Buyer_Shop_request_ID,
                        Amount: parseFloat(Buyer_Wallet_bal_Used),
                        BuyerData: BuyerData.Buyer_Name,
                        From_Buyer_Name: BuyerData.Buyer_Name,

                    }
                    let BR_WData = {
                        LogID: uuid.v4(),
                        BuyerID: BuyerData.BuyerID,
                        Type: 21,  //User SHop Credited Buyer amount for Share Amount Request Notofication
                        Amount: parseFloat(Buyer_Wallet_bal_Used),
                        Data: BR_Data,
                        Time: new Date()
                    }
                    let BR_Resultlog = Buyer_Share_Logs(BR_WData).save();
                    let BuyerR_Changes = {
                        $inc: {
                            Cash_Coupons_Amount_Available: parseFloat(Buyer_Wallet_bal_Used),
                            Cash_Coupons_Amount_Total: parseFloat(Buyer_Wallet_bal_Used)
                        },
                        $set: {
                            updated_at: new Date()
                        },

                    };
                    let fndupdoptions = {
                        upsert: true,
                        setDefaultsOnInsert: true,
                        new: true
                    }
                    let Update_RequestData = await Buyers.findOneAndUpdate(query_buyer, BuyerR_Changes, fndupdoptions).lean().exec();

                }

                /////
                let query_Share_Req_query = {
                    Buyer_Shop_request_ID: Share_Request_Data.Buyer_Shop_request_ID
                }


                // 
                let changes = {
                    $set: {
                        Request_Status: 3,
                        Shop_Payment_Status: 3,
                        WebHookData: WebhookData,
                        Payment_Type: pay_type,
                        updated_at: new Date()
                    }
                }
                let updatedSubscription_Links = await Buyer_Shop_requests_Notification.updateOne(query_Share_Req_query, changes).lean();
                //////

                resolve("Order Generated Successfully");

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Check_for_Elegilble_BuyerID = (BuyerID, BuyerNetworkData, Current_Box, Current_Box_Count, Not_Elegible_Buyers) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Current_Boxx = Current_Box
                let Current_Box_Countx = Current_Box_Count
                let Parent_BuyerID = BuyerNetworkData.Parent_BuyerID;
                let Not_Elegible_Buyersx = Not_Elegible_Buyers;
                let Parent_Query = {
                    BuyerID: Parent_BuyerID,
                }
                //buyers
                let Parent_Result = await Buyers_Ultimate_Network.findOne(Parent_Query).lean().exec();
                if (Parent_Result == null) {
                    resolve(['', Not_Elegible_Buyersx])
                } else {
                    if (Parent_Result.Current_Box == Current_Boxx) {
                        resolve([Parent_Result.BuyerID, Not_Elegible_Buyersx])
                    } else {
                        Not_Elegible_Buyersx.push(Parent_Result.BuyerID)
                        let Elegible_BuyerID = await ShopController.Check_for_Elegilble_BuyerID(Parent_Result.BuyerID, Parent_Result, Current_Boxx, Current_Box_Countx);
                        resolve(Elegible_BuyerID)
                    }
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Save_Wallet_Logs = (BuyerData, PurchaseData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Data = {
                    Buyer_Name: BuyerData.Buyer_Name
                }
                let EData = {
                    LogID: uuid.v4(),
                    BuyerID: BuyerData.BuyerID,
                    Type: 20, //Credit Amount for Buyer Purchase product
                    Amount: PurchaseData.Total_Amount,
                    Data: Data,
                    Time: new Date()
                };
                let ESaveCData = await Buyer_Share_Logs(EData).save();

                let PData = {
                    LogID: uuid.v4(),
                    BuyerID: BuyerData.BuyerID,
                    Type: 1, //Credit Amount for Buyer Purchase
                    Amount: BuyerData.Purchace_Coupons_Amount_Unprocessed,
                    Data: Data,
                    Time: new Date()
                };
                let PSaveCData = await Buyer_Purchase_Wallet_Logs(PData).save();

                let GData = {
                    LogID: uuid.v4(),
                    BuyerID: BuyerData.BuyerID,
                    Type: 1, //Credit Amount for Buyer Purchase
                    Amount: BuyerData.Gift_Coupons_Amount_Unprocessed,
                    Data: Data,
                    Time: new Date()
                };
                let GSaveCData = await Buyer_Gift_Coupons_Wallet_Logs(GData).save();

                let UData = {
                    LogID: uuid.v4(),
                    BuyerID: BuyerData.BuyerID,
                    Type: 1, //Credit Amount for Buyer Purchase
                    Amount: BuyerData.Update_Coupons_Amount_Unprocessed,
                    Data: Data,
                    Time: new Date()
                };
                let USaveCData = await Buyer_Update_Coupons_Wallet_Logs(UData).save();

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.List_BuyerShare_Requests = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    created_at: -1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                let query = {
                    BuyerID: values.BuyerID,
                    Request_Status: values.Status  //1.pending 2.cancelled 3.Approved
                };

                let Count = await Buyer_Shop_requests_Notification.countDocuments(query).lean().exec();
                let Result = await Buyer_Shop_requests_Notification.find(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                async.eachSeries(Result, async (item, callback) => {
                    try {
                        // item.Users_ShopsID_QR_Image = `${config.S3URL}${item.Users_ShopsID_QR_Image}`;
                        item.BuyerData = await CommonController.Check_for_Buyer(item);
                        item.User_Shop_Data = await CommonController.Check_For_User_Shop(item);

                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async (err) => {
                    if (err) reject(err);
                    resolve({ success: true, extras: { Count: Count, Data: Result } });
                });

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.List_Coupon_Products = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    created_at: -1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                let query = {
                    Status: true
                };
                let Count = await Coupon_Products.countDocuments(query).lean().exec();
                let Result = await Coupon_Products.find(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();

                async.eachSeries(Result, async (item, callback) => {
                    try {
                        item.C_Product_Image_Data = await CommonController.Common_Image_Response_Single_Image(true, item.C_Product_Image_Data);
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async (err) => {
                    if (err) reject(err);
                    resolve({ success: true, extras: { Count: Count, Data: Result } });
                });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.User_Shops_Request_ShareAmount = (values, BuyerData, ShopData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let query = {
                    Users_ShopsID: values.Users_ShopsID,
                    Payment_Status: 3,
                    User_Shop_Status: 3
                };
                let Result = await Users_Shops.findOne(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -Amount_Paid -Users_Shop_Password').lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.NO_USER_SHOP_FOUND } });
                } else {
                    // let Data = {
                    //     // OrderID: Result.OrderID,
                    //     Users_ShopsID: Result.Users_ShopsID,
                    //     Amount: Wallet_bal_Used,
                    //     BuyerData: BuyerData
                    // }
                    let ShareAMount = 0

                    let Coupons_Category_Data = await CommonController.Check_for_Coupons_Category_only(Result);
                    if (Coupons_Category_Data != null) {
                        if (Coupons_Category_Data.CC_Admin_Share_Percent != undefined && Coupons_Category_Data.CC_Admin_Share_Percent != "") {
                            ShareAMount = (values.Total_Amount / 100) * Coupons_Category_Data.CC_Admin_Share_Percent
                        }
                    }

                    let RequestData = {
                        Buyer_Shop_request_ID: uuid.v4(),
                        BuyerID: values.BuyerID,
                        Users_ShopsID: values.Users_ShopsID,
                        Coupons_CategoryID: ShopData.Coupons_CategoryID,
                        Total_Amount: values.Total_Amount,
                        Request_Status: 1,
                        Share_Amount: ShareAMount,
                        Shop_Payment_Status: 1,
                        TransactionID: uuid.v4(),

                        created_at: new Date(),
                        updated_at: new Date()
                    }
                    let Resultlog = Buyer_Shop_requests_Notification(RequestData).save();
                    // resolve({ success: true, extras: { Data: RequestData, Coupons_Category_Data } });
                    resolve({ success: true, extras: { Status: "Buyer Shop Share Request Added Successfully" } })

                }


                // let Result = await Coupons_Category.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                //levale newto

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Fetch_Shop_By_QRCODE = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let query = {
                    Users_ShopsID: values.Users_ShopsID,
                    Payment_Status: 3,
                    User_Shop_Status: 3
                };
                let Result = await Users_Shops.findOne(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -Users_Shop_Password').lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.NO_USER_SHOP_FOUND } });
                } else {
                    Result.Users_ShopsID_QR_Image = await `${config.S3URL}${Result.Users_ShopsID_QR_Image}`;
                    Result.Coupons_Category_Data = await CommonController.Check_for_Coupons_Category_only(Result);
                    resolve({ success: true, extras: { Data: Result } });
                }


                // let Result = await Coupons_Category.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.list_My_User_Shop = (values, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let query = {
                    BuyerID: values.BuyerID,
                    Payment_Status: 3,
                    User_Shop_Status: [1, 3]
                };
                let Result = await Users_Shops.findOne(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -Users_Shop_Password').lean();
                if (Result == null) {
                    let User_Shop_Price_Amount = await AdminController.List_Common_App_Setting(values)
                    let User_Shop_price_Data = User_Shop_Price_Amount.extras.Data
                    let Used_Wallet_Amount = 0
                    let Used_Wallet_Amount_Pin = 0
                    let Remaining_Pay_Amount = (User_Shop_price_Data.User_Shop_Price.toFixed(2))
                    console.log("Remaining===========>", Remaining_Pay_Amount)
                    let Total_Shop_Amount = Remaining_Pay_Amount + Used_Wallet_Amount
                    // BuyerData.Available_Amount = 40
                    if (BuyerData.Cash_Coupons_Amount_Available > 0) {
                        if (Total_Shop_Amount <= BuyerData.Cash_Coupons_Amount_Available) {
                            // 
                            // Remaining_Wallet_Amount = BuyerData.Available_Amount - Total_Shop_Amount
                            Used_Wallet_Amount = Total_Shop_Amount
                            Remaining_Pay_Amount -= Total_Shop_Amount

                        } else if (Total_Shop_Amount > BuyerData.Cash_Coupons_Amount_Available) {
                            Remaining_Pay_Amount = Total_Shop_Amount - BuyerData.Cash_Coupons_Amount_Available
                            Used_Wallet_Amount = BuyerData.Cash_Coupons_Amount_Available
                            // Remaining_Wallet_Amount = 0
                        }
                    }

                    let Payment_Data = {
                        Amount_Used_From_Wallet: Used_Wallet_Amount,
                        Remaining_Pay_Amount: Remaining_Pay_Amount,
                        Total_Amount: Total_Shop_Amount,
                        Total_Amount_Paid: Total_Shop_Amount
                    }


                    let Remaining_Pay_Amount_Pincode =  (User_Shop_price_Data.Pincode_Price.toFixed(2))
                    console.log("4157 -- Remaining_Pay_Amount_Pincode===========>", Remaining_Pay_Amount_Pincode)
                    let Total_Pincode_Amount = Remaining_Pay_Amount_Pincode + Used_Wallet_Amount_Pin
                    // BuyerData.Available_Amount = 40
                    if (BuyerData.Cash_Coupons_Amount_Available > 0) {
                        if (Total_Pincode_Amount <= BuyerData.Cash_Coupons_Amount_Available) {
                            // 
                            // Remaining_Wallet_Amount = BuyerData.Available_Amount - Total_Shop_Amount
                            Used_Wallet_Amount_Pin = Total_Pincode_Amount
                            Remaining_Pay_Amount_Pincode -= Total_Pincode_Amount

                            console.log("4168--->" + Remaining_Pay_Amount_Pincode)
                            console.log("4168--->" + Used_Wallet_Amount_Pin)
                        } else if (Total_Pincode_Amount > BuyerData.Cash_Coupons_Amount_Available) {
                            Remaining_Pay_Amount_Pincode = Total_Pincode_Amount - BuyerData.Cash_Coupons_Amount_Available
                            Used_Wallet_Amount_Pin = BuyerData.Cash_Coupons_Amount_Available

                            console.log("4175--->" + Remaining_Pay_Amount_Pincode)
                            console.log("4175--->" + Used_Wallet_Amount_Pin)
                            // Remaining_Wallet_Amount = 0
                        }
                    }

                    let Pincode_Payment_Data = {
                        Amount_Used_From_Wallet: Used_Wallet_Amount_Pin,
                        Remaining_Pay_Amount: Remaining_Pay_Amount_Pincode,
                        Total_Amount: Total_Pincode_Amount,
                        Total_Amount_Paid: Total_Pincode_Amount
                    }

                    console.log("4181---> " +JSON.stringify(Pincode_Payment_Data))

                    // if (UserData.Wallet_Information.Available != 0) {
                    //     if (Total_Booking_Price <= UserData.Wallet_Information.Available) {
                    //         
                    //         Remaining_Wallet_Amount = UserData.Wallet_Information.Available - Total_Booking_Price
                    //         Used_Wallet_Amount = Total_Booking_Price
                    //         Remaining_Pay_Amount -= Total_Booking_Price

                    //     } else if (Total_Booking_Price > UserData.Wallet_Information.Available) {
                    //         Remaining_Pay_Amount = Total_Booking_Price - UserData.Wallet_Information.Available
                    //         Used_Wallet_Amount = UserData.Wallet_Information.Available
                    //         // Remaining_Wallet_Amount = 0
                    //     }
                    // }

                    console.log("4194--->" +JSON.stringify(Pincode_Payment_Data))
                    resolve({ success: true, extras: { User_Shop_Available: false, User_Shop_Amount: (User_Shop_price_Data.User_Shop_Price), Pincode_Price: (User_Shop_price_Data.User_Shop_Price) + (User_Shop_price_Data.Pincode_Price), Payment_Data, Pincode_Payment_Data, msg: ApiMessages.NO_USER_SHOP_FOUND } });
                } else {
                    Result.Users_ShopsID_QR_Image = await `${config.S3URL}${Result.Users_ShopsID_QR_Image}`;
                    Result.Coupons_Category_Data = await CommonController.Check_for_Coupons_Category_only(Result);
                    if (Boolify(Result.Whether_Pincode)) {
                       
                        Result.PincodeData = await ShopController.Check_for_Pincode(Result);

                       // console.log("---> "+JSON.stringify(Result.PincodeData))

                    }

                   // console.log("4203 ---> "+JSON.stringify(Result))
                    resolve({ success: true, extras: { User_Shop_Available: true, Data: Result } });
                }


                // let Result = await Coupons_Category.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

// ShopController.Complete_Payment_for_Buyer_Purchase = (TransactionID, WebhookData) => {
//     return new Promise((resolve, reject) => {
//         setImmediate(async () => {
//             try {
//                 let query = {
//                     TransactionID: TransactionID,
//                     // Status: true
//                 }
//                 // 
//                 let Result = await Buyers_Purchase_Log.findOne(query).lean();
//                 if (Result != null) {
//                     let pay_type;
//                     if (WebhookData == '') {
//                         pay_type = 1;
//                     } else {
//                         if (WebhookData.Amount == Result.Cart_Final_Price) {
//                             // if (WebhookData.Amount == config.User_Shop_Amount) {
//                             pay_type = 2;
//                         } else {
//                             pay_type = 3;
//                         }
//                     }
//                     let BuyersQuery = {
//                         BuyerID: Result.BuyerID
//                     }
//                     let BuyerData = await Buyers.findOne(BuyersQuery).lean().exec();
//                     /// amount deduct from from buyer wallet and maintain log for it
//                     let Wallet_bal_Used = Result.Amount_Paid.Amount_Used_From_Wallet;
//                     if (Wallet_bal_Used > 0) {
//                         let Data = {
//                             PurchaseID: Result.PurchaseID,
//                             Amount: Wallet_bal_Used,
//                             BuyerData: BuyerData
//                         }
//                         let WData = {
//                             LogID: uuid.v4(),
//                             BuyerID: Result.BuyerID,
//                             Type: 17,  //User Coupon Product Purchase debited amount
//                             Amount: Wallet_bal_Used,
//                             Data: Data,
//                             Time: new Date()
//                         }
//                         let Resultlog = Buyer_Share_Logs(WData).save();
//                         let BuyerChanges = {
//                             $inc: {
//                                 Available_Amount: Wallet_bal_Used * -1,
//                                 Withdrawn_Amount: Wallet_bal_Used
//                             },
//                             $set: {
//                                 updated_at: new Date()
//                             },
//                         };
//                         let fndupdoptions = {
//                             upsert: true,
//                             setDefaultsOnInsert: true,
//                             new: true
//                         }
//                         let updatBuyerData = await Buyers.findOneAndUpdate(BuyersQuery, BuyerChanges, fndupdoptions).lean().exec();
//                     } else {
//                         let finalChanges = {
//                             $set: {
//                                 updated_at: new Date()
//                             },
//                         }
//                         let fndupdoptionsx = {
//                             upsert: true,
//                             setDefaultsOnInsert: true,
//                             new: true
//                         }
//                         let updatBuyerData = await Buyers.findOneAndUpdate(BuyersQuery, finalChanges, fndupdoptionsx).lean().exec();
//                     }

//                     //////
//                     let changes = {
//                         $set: {
//                             Payment_Status: 3,
//                             WebHookData: WebhookData,
//                             Payment_Type: pay_type,
//                             Updated_at: new Date()
//                         }
//                     }
//                     let Resultx = await Buyers_Purchase_Log.findOneAndUpdate(query, changes).lean().exec();
//                     resolve("Purchase Completed Successfully");
//                     let PurchaseLink = await ShopController.Box_Process_For_Buyer_Network(Result, BuyerData.BuyerID, BuyerData)
//                 } else {
//                     reject({ success: false, extras: { msg: ApiMessages.INVALID_ORDER } });
//                 }
//             } catch (error) {
//                 reject(await CommonController.Common_Error_Handler(error));
//             }
//         });
//     });
// }

ShopController.Complete_Payment_for_Buyer_Shop = (UserShopData, WebhookData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Users_ShopsID: UserShopData.Users_ShopsID,
                    Status: true
                }
                let Result = await Users_Shops.findOne(query).lean();
                console.log("Result================>", Result)
                if (Result != null) {
                    let pay_type;
                    if (WebhookData == '') {
                        pay_type = 1;
                    } else {
                        // if (WebhookData.Amount == Result.Cart_Final_Price) {
                        let User_Shop_Price_Amount = await AdminController.List_Common_App_Setting({})
                        let User_Shop_price_Data = User_Shop_Price_Amount.extras.Data
                        let FinalPrice = 0
                        if (UserShopData.Whether_Pincode) {
                            FinalPrice = (User_Shop_price_Data.User_Shop_Price) + (User_Shop_price_Data.Pincode_Price)
                        } else {
                            FinalPrice = User_Shop_price_Data.User_Shop_Price
                        }
                        if (WebhookData.Amount == FinalPrice) {
                            pay_type = 2;
                        } else {
                            pay_type = 3;
                        }
                    }
                    let BuyersQuery = {
                        BuyerID: Result.BuyerID
                    }
                    let BuyerData = await Buyers.findOne(BuyersQuery).lean().exec();
                    /// amount deduct from from buyer wallet and maintain log for it
                    let Wallet_bal_Used = Result.Amount_Paid.Amount_Used_From_Wallet;
                    if (Wallet_bal_Used > 0) {
                        let Data = {
                            // OrderID: Result.OrderID,
                            Users_ShopsID: Result.Users_ShopsID,
                            Amount: Wallet_bal_Used,
                            BuyerData: BuyerData.Buyer_Name
                        }
                        let WData = {
                            LogID: uuid.v4(),
                            BuyerID: Result.BuyerID,
                            Type: 11,  //User SHop Purchase debited amount
                            Amount: Wallet_bal_Used,
                            Data: Data,
                            Time: new Date()
                        }
                        let Resultlog = Buyer_Share_Logs(WData).save();
                        let BuyerChanges = {
                            $inc: {
                                Cash_Coupons_Amount_Available: Wallet_bal_Used * -1,
                                Cash_Coupons_Amount_Withdraw: Wallet_bal_Used
                            },
                            $set: {
                                // Cart_Total_Items: 0,
                                // Cart_Total_Price: 0,
                                updated_at: new Date()
                            },
                            // $pull: {
                            //     Cart_Information: {
                            //         ProductID: {
                            //             $ne: null
                            //         }
                            //     }
                            // }
                        };
                        let fndupdoptions = {
                            upsert: true,
                            setDefaultsOnInsert: true,
                            new: true
                        }
                        let updatBuyerData = await Buyers.findOneAndUpdate(BuyersQuery, BuyerChanges, fndupdoptions).lean().exec();
                    } else {
                        let finalChanges = {
                            $set: {
                                // Cart_Total_Items: 0,
                                // Cart_Total_Price: 0,
                                updated_at: new Date()
                            },
                            // $pull: {
                            //     Cart_Information: {
                            //         ProductID: {
                            //             $ne: null
                            //         }
                            //     }
                            // }
                        }
                        let fndupdoptionsx = {
                            upsert: true,
                            setDefaultsOnInsert: true,
                            new: true
                        }
                        let updatBuyerData = await Buyers.findOneAndUpdate(BuyersQuery, finalChanges, fndupdoptionsx).lean().exec();
                    }

                    //////
                    let changes = {
                        $set: {
                            Payment_Status: 3,
                            User_Shop_Status: 3,
                            WebHookData: WebhookData,
                            Payment_Type: pay_type,
                            // Order_Report: {
                            //     Title: "Order Received",
                            //     Description: "Order Received",
                            //     Time: new Date()
                            // },
                            Updated_at: new Date()
                        }
                    }
                    let Resultx = await Users_Shops.findOneAndUpdate(query, changes).lean().exec();

                    let Data = {
                        // OrderID: Result.OrderID,
                        Users_ShopsID: Result.Users_ShopsID,
                        Amount: config.User_shop_rejister_cash_coupons,
                        BuyerData: BuyerData.Buyer_Name
                    }

                    BuyersQuery = {
                        BuyerID: Result.BuyerID
                    }
                    let WData = {
                        LogID: uuid.v4(),
                        BuyerID: Result.BuyerID,
                        Type: 12,  //User SHop Purchase debited amount
                        Amount: config.User_shop_rejister_cash_coupons,
                        Data: Data,
                        Time: new Date()
                    }
                    let Resultlog = Buyer_Share_Logs(WData).save();
                    let BuyerChanges = {
                        $inc: {
                            Cash_Coupons_Amount_Available: config.User_shop_rejister_cash_coupons * 1,
                            Cash_Coupons_Amount_Total: config.User_shop_rejister_cash_coupons
                        },
                        $set: {

                            updated_at: new Date()
                        },

                    };
                    let fndupdoptions = {
                        upsert: true,
                        setDefaultsOnInsert: true,
                        new: true
                    }
                    let updatBuyerData = await Buyers.findOneAndUpdate(BuyersQuery, BuyerChanges, fndupdoptions).lean().exec();
                    if (UserShopData.Whether_Pincode) {
                        let UpdatedStatus = await ShopController.Update_Status_For_Pincode(UserShopData, 2);
                    }

                    let Resultdf = await Buyers_Ultimate_Network.findOne(BuyersQuery).lean().exec();
                    if (Resultdf.Parent_BuyerID !== "" && Resultdf.Parent_BuyerID !== "root") {

                        let Data = {
                            // OrderID: Result.OrderID,
                            Users_ShopsID: Result.Users_ShopsID,
                            Amount: config.User_shop_referal_Percent,
                            BuyerData: BuyerData.Buyer_Name
                        }

                        BuyersQuery = {
                            BuyerID: Resultdf.Parent_BuyerID
                        }
                        let WData = {
                            LogID: uuid.v4(),
                            BuyerID: Resultdf.Parent_BuyerID,
                            Type: 13,  //User SHop Purchase referall
                            Amount: config.User_shop_referal_Percent,
                            Data: Data,
                            Time: new Date()
                        }
                        let Resultlog = Buyer_Purchase_Wallet_Logs(WData).save();
                        let BuyerChanges = {
                            $inc: {
                                Purchace_Coupons_Amount_Available: config.User_shop_referal_Percent * 1,
                                Purchace_Coupons_Amount_Total: config.User_shop_referal_Percent
                            },
                            $set: {

                                updated_at: new Date()
                            },

                        };
                        let fndupdoptions = {
                            upsert: true,
                            setDefaultsOnInsert: true,
                            new: true
                        }
                        let updatBuyerData = await Buyers.findOneAndUpdate(BuyersQuery, BuyerChanges, fndupdoptions).lean().exec();


                    }

                    resolve("Order Generated Successfully");


                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_ORDER } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Register_Shop = (values, BuyerData, PinCodeData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                console.log("4462----> " + JSON.stringify(values));
                // parseInt
                values.Amount_Used_From_Wallet = await parseInt(values.Amount_Used_From_Wallet);
                values.Online_Amount = await parseInt(values.Online_Amount);
                values.Total_Amount = await parseInt(values.Total_Amount);

                let PinCode = ""
                if (PinCodeData != null) {
                    PinCode = PinCodeData.PincodeID
                }
                console.log("4542 values.Amount_Used_From_Wallet=====================>", values.Amount_Used_From_Wallet)
                console.log("4543 BuyerData=====================>", BuyerData.Cash_Coupons_Amount_Available)

                if (BuyerData.Cash_Coupons_Amount_Available.toFixed(2) >= parseFloat(values.Amount_Used_From_Wallet.toFixed(2))) {
                    let User_Shop_Price_Amount = await AdminController.List_Common_App_Setting(values)
                    let User_Shop_price_Data = User_Shop_Price_Amount.extras.Data
                    let finalprice = 0
                    if (values.Whether_Pincode) {
                        finalprice = (User_Shop_price_Data.Pincode_Price)
                        // finalprice = (User_Shop_price_Data.User_Shop_Price) + (User_Shop_price_Data.Pincode_Price)
                    } else {
                        finalprice = (User_Shop_price_Data.User_Shop_Price);
                    }

                    let Available_Amount = BuyerData.Cash_Coupons_Amount_Available;
                    console.log("4471----> "+finalprice);
                    // let cartprice = Result.Cart_Final_Price.toFixed(2);
                    let priceCal = parseFloat(values.Amount_Used_From_Wallet.toFixed(2)) + parseFloat(values.Online_Amount.toFixed(2));
                    console.log("Final price==========================>", finalprice)
                    console.log("priceCal==========================>", priceCal)
                    if (finalprice == parseFloat(priceCal.toFixed(2))) {

                        console.log("4476----> ");
                        let TranxID = uuid.v4();
                        let calbk;
                        let Payment_Type;
                        let onlineamount = finalprice - BuyerData.Cash_Coupons_Amount_Available;
                        if (onlineamount <= 0) {
                            onlineamount = 0;
                            console.log("4483----> ");
                        }

                        let online_Amount = onlineamount.toFixed(2);

                        if (parseInt(values.Online_Amount) == 0) {
                            calbk = false;
                            Payment_Type = 1
                            console.log("4491----> ");
                        } else {
                            calbk = true;
                            Payment_Type = 2
                            console.log("4495----> ");
                        }

                        let Users_ShopsID = await CommonController.Random_12_Digit_Number();
                        let Users_ShopsID_QR_Image = `${Users_ShopsID}.png`;
                        let qrstoring = await AWSController.QRCode_File_From_UUID(Users_ShopsID, Users_ShopsID_QR_Image);
                        // let EventID_QR_Image = `${config.S3URL}${Users_ShopsID_QR_Image}`;
                        let Data = {
                            BuyerID: BuyerData.BuyerID,
                            Users_ShopsID: Users_ShopsID,
                            Users_ShopsID_QR_Image: Users_ShopsID_QR_Image,
                            TransactionID: TranxID,
                            Users_Shop_Name: values.Users_Shop_Name,
                            Users_Shop_CountryCode: values.Users_Shop_CountryCode,
                            Users_Shop_PhoneNumber: values.Users_Shop_PhoneNumber,
                            Users_Shop_Password: await CommonController.Random_OTP_Number(),
                            Address: values.Address,
                            Whether_Pincode: values.Whether_Pincode,
                            PincodeID: PinCode,
                            Latitude: parseFloat(values.Latitude),
                            Longitude: parseFloat(values.Longitude),
                            Point: [parseFloat(values.Longitude), parseFloat(values.Latitude)],
                            Payment_Status: 1,
                            User_Shop_Status: 0,
                            // Payment_Type: Payment_Type,
                            Amount_Paid: {
                                Amount_Used_From_Wallet: values.Amount_Used_From_Wallet,
                                Amount_Paid_Online: values.Online_Amount,
                                Total_Amount_Paid: values.Total_Amount
                            },
                            Coupons_CategoryID: values.Coupons_CategoryID,

                            created_at: new Date(),
                            updated_at: new Date()
                        }
                        let UserShopData = await Users_Shops(Data).save();
                        UserShopData = JSON.parse(JSON.stringify(UserShopData));
                        console.log("4471----> " + JSON.stringify(UserShopData));
                        let ResultData = {
                            Users_ShopsID: Users_ShopsID,
                            TransactionID: TranxID,
                            Callback: calbk,
                            Final_Amount: values.Online_Amount.toFixed(2)
                        }
                        if (PinCodeData != null) {
                            let SttausUpdate = await ShopController.Update_Status_For_Pincode(PinCodeData, 1);
                        }

                        if (!calbk) {
                            console.log("4538----> ");
                            //
                            let updateTranx = await ShopController.Complete_Payment_for_Buyer_Shop(UserShopData, "");
                        } else {
                            console.log("4542----> ");
                        }
                        resolve({ success: true, extras: { Data: ResultData } })
                        // resolve({ success: true, extras: { Status: "Shop Created Successfully", EventID_QR_Image, Data } })
                    } else {
                        console.log("4545----> ");
                        reject({ success: false, extras: { msg: ApiMessages.FINAL_AMOUNT_MISSMATCH } });
                    }
                } else {
                    console.log("4549----> ");
                    reject({ success: false, extras: { msg: ApiMessages.AMOUNT_EXCEED_WALLET_AVAILABLE_BALANCE } });
                }



            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}
ShopController.Update_Status_For_Pincode = (values, pincodeStatus) => {
    return new Promise(async (resolve, reject) => {
        try {
            let query = {
                PincodeID: values.PincodeID
            }
            let Changes = {
                $set: {
                    Pincode_Status: pincodeStatus,
                    Up_Time: new Date()
                }
            }
            let findupdateData = await Pincodes.updateOne(query, Changes).select('-_id -__v').lean();
            resolve({ success: true, extras: { Status: "Updated Successfully" } })
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}

ShopController.List_Coupons_Category = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    // Status: true
                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    SNo: 1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                let Result = await Coupons_Category.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                resolve({ success: true, extras: { Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.List_All_App_Image_Resource = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let ResourceType = parseInt(values.ResourceType);
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    SNo: 1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                let query = {
                    ResourceType: ResourceType,
                    Status: true
                };
                let Count = await App_Image_Resources.countDocuments(query).lean().exec();
                let Result = await App_Image_Resources.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                async.eachSeries(Result, async (item, callback) => {
                    try {
                        item.ImageData = await CommonController.Common_Image_Response_Single_Image(true, item.ImageData);
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async (err) => {
                    if (err) reject(err);
                    resolve({ success: true, extras: { Count: Count, Data: Result } });
                });

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


ShopController.List_All_Plots = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                // 
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    SNo: 1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                // let UserType =1
                let User_query = {
                    Status: true
                }
                // if(values.UserType != null && values.UserType != undefined && isFinite(values.UserType) ){
                //     UserType = values.UserType

                // } 
                // User_query = {
                //     UserType:UserType
                // }
                // 
                let Count = await Plots_Log.countDocuments(User_query).lean().exec();
                let Result = await Plots_Log.find(User_query).select('-_id -__v').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                // 
                for (let i = 0; i < Result.length; i++) {
                    Result[i].Company_Image_Data = await CommonController.Common_Image_Response_Single_Image(true, Result[i].Company_Image_Data);
                    Result[i].FileData = await CommonController.Common_File_Response_Single_File(true, Result[i].FileData);
                    for (let j = 0; j < Result[i].Plot_Image_Data.length; j++) {
                        Result[i].Plot_Image_Data[j] = await CommonController.Common_Image_Response_Single_Image(true, Result[i].Plot_Image_Data[j]);
                    }
                }
                resolve({ success: true, extras: { Count: Count, Data: Result } });

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.List_All_News = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    // Status: true
                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    SNo: 1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                let Result = await News.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                resolve({ success: true, extras: { Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}
////

ShopController.Live_Bonanza_Status = (values, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: values.BuyerID,
                    Bonanza_Status: 1,
                    Status: true,
                }
                let Buyer_Live_BonanzaDatax = await Buyer_Bonanza_Log.findOne(query).select('-_id -__v').lean().exec()
                let Buyer_Live_BonanzaData = {}
                if (Buyer_Live_BonanzaDatax != null) {
                    Buyer_Live_BonanzaData = Buyer_Live_BonanzaDatax
                }
                let query1 = {
                    BuyerID: values.BuyerID,
                    Bonanza_Status: 2,
                    Status: true,

                }
                let sortOptions = {
                    updated_at: -1
                }
                let Buyer_Last_BonanzaDatax = await Buyer_Bonanza_Log.findOne(query1).sort(sortOptions).select('-_id -__v').lean().exec()
                let Buyer_Last_BonanzaData = {}
                if (Buyer_Last_BonanzaDatax != null) {
                    Buyer_Last_BonanzaData = Buyer_Last_BonanzaDatax
                }
                let Data = {
                    Live_Bonanza: Buyer_Live_BonanzaData,
                    Last_Bonanza: Buyer_Last_BonanzaData
                }
                resolve({ success: true, extras: { Data: Data } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Product_Matrix_Referral_Amount = (values, BuyerData, ProductData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Matrix = parseInt(values.Matrix) || 9
                let Level_Price_Array = ProductData.Product_Price_Data.Buyer_Price_Array
                let i = 0
                let MatrixData = [];
                let PData = {
                    ProductData: ProductData.ProductID,
                    Unique_ProductID: ProductData.Unique_ProductID,
                    Product_Name: ProductData.Product_Name,
                    Product_Price: ProductData.Product_Price,
                    Image_Data: await CommonController.Common_Image_Response_Single_Image(true, ProductData.Image_Data)
                }
                let Total = 0;
                for (let MatrixPriceData of Level_Price_Array) {
                    ++i
                    // if (i <= Matrix) {
                    Total += Math.pow(Matrix, i) * MatrixPriceData;
                    let Data = {
                        Level: i,
                        Commission: MatrixPriceData,
                        Count: Matrix,
                        Earnings: Math.pow(Matrix, i) * MatrixPriceData
                    }
                    // }
                    MatrixData.push(Data)
                }
                resolve({
                    success: true, extras: {
                        Data: {
                            ProductData: PData,
                            Selected_Matrix: Matrix,
                            Matrix: MatrixData,
                            Total: Total
                        }
                    }
                })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Add_Buyer_Beneficiary_Account_For_Bank_Account = (values, BankData, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Whether_Default_Account = false;
                if (Boolify(values.Whether_Default_Account)) {
                    Whether_Default_Account = true;
                } else {
                    let FetchDefaultAccountAvailable = await Buyer_Bank_Beneficiary_Accounts.findOne({ BuyerID: values.BuyerID, Whether_Default_Account: true, Status: true }).lean();
                    if (FetchDefaultAccountAvailable == null) {
                        Whether_Default_Account = true;
                    } else {
                        let FetchWhetherAccountAvailable = await Buyer_Bank_Beneficiary_Accounts.findOne({ BuyerID: values.BuyerID, Status: true }).lean();
                        if (FetchWhetherAccountAvailable == null) {
                            Whether_Default_Account = true;
                        } else {
                            Whether_Default_Account = false;
                        }
                    }
                }
                let RazorpayXBeneficiaryData = await RazorpayController.Create_Razorpay_Buyer_Beneficiary_Account_for_Bank_Account(values, BuyerData);
                let Data = {
                    BeneficiaryID: uuid.v4(),
                    RazorpayX_BeneficiaryID: RazorpayXBeneficiaryData.id,
                    BuyerID: values.BuyerID,
                    RazorpayX_ContactID: BuyerData.RazorpayX_ContactID,
                    BeneficiaryType: 1,
                    Name: values.Name,
                    Account_Number: values.Account_Number,
                    IFSC: values.IFSC,
                    Whether_Default_Account: Whether_Default_Account,
                    Bank_Details: BankData,
                    created_at: new Date(),
                    updated_at: new Date()
                };
                let BuyerBeneficiaryData = await Buyer_Bank_Beneficiary_Accounts(Data).save();
                BuyerBeneficiaryData = JSON.parse(JSON.stringify(BuyerBeneficiaryData));
                resolve({ success: true, extras: { Status: "Beneficiary Account Added Successfully" } });
                if (Whether_Default_Account) {
                    let dfquery = {
                        BuyerID: values.BuyerID,
                        BeneficiaryID: {
                            $ne: BuyerBeneficiaryData.BeneficiaryID
                        }
                    };
                    let dfchanges = {
                        $set: {
                            Whether_Default_Account: false,
                            updated_at: new Date()
                        }
                    };
                    let dfUpdatedStatus = await Buyer_Bank_Beneficiary_Accounts.updateMany(dfquery, dfchanges).lean();
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.List_All_Buyer_Beneficiary_Accounts = (values, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: values.BuyerID
                };
                let sortOptions = {
                    created_at: -1
                };
                if (values.Whether_Status_Filter === null || values.Whether_Status_Filter === undefined) {
                    query.Status = true;
                }

                if (Boolify(values.Whether_Status_Filter)) {
                    query.Status = await Boolify(values.Status)
                };
                let Result = await Buyer_Bank_Beneficiary_Accounts.find(query).select('-_id -__v -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean();
                resolve({ success: true, extras: { Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Make_Default_Buyer_Beneficiary_Account_For_Bank_Account = values => {
    return new Promise(async (resolve, reject) => {
        try {
            let query = {
                BuyerID: values.BuyerID,
                BeneficiaryID: values.BeneficiaryID
            };
            let changes = {
                $set: {
                    Whether_Default_Account: true,
                    updated_at: new Date()
                }
            };
            let UpdatedStatus = await Buyer_Bank_Beneficiary_Accounts.updateOne(query, changes).lean();
            resolve({ success: true, extras: { Status: "Updated Successfully" } });
            let oquery = {
                BuyerID: values.BuyerID,
                BeneficiaryID: {
                    $ne: values.BeneficiaryID
                }
            };
            let ochanges = {
                $set: {
                    Whether_Default_Account: false,
                    updated_at: new Date()
                }
            };
            let oUpdatedStatus = await Buyer_Bank_Beneficiary_Accounts.updateMany(oquery, ochanges).lean();
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}


ShopController.Update_Buyer_Beneficiary_Account_For_Bank_Account = (values, BankData, BuyerData) => {
    return new Promise(async (resolve, reject) => {
        try {
            let RazorpayXBeneficiaryData = await RazorpayController.Create_Razorpay_Buyer_Beneficiary_Account_for_Bank_Account(values, BuyerData);
            let query = {
                BuyerID: values.BuyerID,
                BeneficiaryID: values.BeneficiaryID
            };
            let changes = {
                $set: {
                    RazorpayX_BeneficiaryID: RazorpayXBeneficiaryData.id,
                    BeneficiaryType: 1,
                    Name: values.Name,
                    Account_Number: values.Account_Number,
                    IFSC: values.IFSC,
                    Bank_Details: BankData,
                    updated_at: new Date()
                }
            };
            let UpdatedStatus = await Buyer_Bank_Beneficiary_Accounts.updateOne(query, changes).lean();
            resolve({ success: true, extras: { Status: "Updated Successfully" } });
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}

ShopController.Validate_Buyer_Beneficiary_Account_For_Bank_Account_Number_Already_Exist = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                values = JSON.parse(JSON.stringify(values));
                if (values.BeneficiaryID == null || values.BeneficiaryID == undefined || values.BeneficiaryID == '') {
                    values.BeneficiaryID = '';
                }
                let query = {
                    BuyerID: values.BuyerID,
                    Account_Number: values.Account_Number,
                    BeneficiaryID: {
                        $ne: values.BeneficiaryID
                    }
                };
                let Result = await Buyer_Bank_Beneficiary_Accounts.findOne(query).lean();
                if (Result == null) {
                    resolve("Validated Successfully");
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.BENEFICIARY_ACCOUNT_NUMBER_ALREADY_EXIST } })
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Inactivate_Buyer_Beneficiary_Account_For_Bank_Account = values => {
    return new Promise(async (resolve, reject) => {
        try {
            let query = {
                BuyerID: values.BuyerID,
                BeneficiaryID: values.BeneficiaryID
            };
            let changes = {
                $set: {
                    Status: false,
                    updated_at: new Date()
                }
            };
            let UpdatedStatus = await Buyer_Bank_Beneficiary_Accounts.updateOne(query, changes).lean();
            resolve({ success: true, extras: { Status: "Deleted Successfully" } });
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}

ShopController.Buyer_Fetch_Service_Amount = (values, BuyerData) => {
    return new Promise(async (resolve, reject) => {
        try {
            let SettingData = await CommonController.Fetch_App_Buyer_Settings();
            let Amount = parseFloat(values.Amount);
            let Minimum_Withdraw_Transaction_Amount = SettingData.Minimum_Withdraw_Transaction_Amount;
            let Maximum_Withdraw_Transaction_Amount = SettingData.Maximum_Withdraw_Transaction_Amount;
            let Available_Amount = BuyerData.Cash_Coupons_Amount_Available;
            if (Minimum_Withdraw_Transaction_Amount <= Amount && Amount <= Maximum_Withdraw_Transaction_Amount) {
                let Service_Amount = await config.RazorpayX_Service_Amount(Amount);
                let Total_Amount = Amount + Service_Amount;
                Amount = await CommonController.Common_Floating_Beautify_Value(Amount);
                Service_Amount = await CommonController.Common_Floating_Beautify_Value(Service_Amount);
                Total_Amount = await CommonController.Common_Floating_Beautify_Value(Total_Amount);
                if (Total_Amount <= Available_Amount) {
                    let Data = {
                        Amount: Amount,
                        Service_Amount: Service_Amount,
                        Total_Amount: Total_Amount,
                    };
                    resolve({ success: true, extras: { Data: Data } })
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INSUFFICIENT_BALANCE } });
                }
            } else {
                reject({ success: false, extras: { msg: ApiMessages.AMOUNT_NOT_SATISFY_MINIMUM_MAXIMUM_TRANSACTION_AMOUNT } });
            }
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}

ShopController.Razorpay_Withdrawl_Wallet_Functionality = (TransactionData) => {
    return new Promise(async (resolve, reject) => {
        try {
            let BuyerID = TransactionData.BuyerID;
            let Amount = TransactionData.Amount;
            let Service_Amount = TransactionData.Service_Amount;
            let Total_Amount = TransactionData.Total_Amount;
            let L1Data = {
                LogID: uuid.v4(),
                BuyerID: BuyerID,
                Type: 9, // amount debited for withdrawl
                Amount: Amount,
                Data: TransactionData,
                Time: new Date()
            };
            let L1SaveResult = await Buyer_Share_Logs.create(L1Data);
            let L2Data = {
                LogID: uuid.v4(),
                BuyerID: BuyerID,
                Type: 10, // Service charge amount debited for withdrawl
                Amount: Service_Amount,
                Data: TransactionData,
                Time: new Date()
            };
            let L2SaveResult = await Buyer_Share_Logs.create(L2Data);
            let fndupdquery = {
                BuyerID: BuyerID
            };
            let fndupdchanges = {
                $set: {
                    updated_at: new Date()
                },
                $inc: {
                    "Available_Amount": (Total_Amount * -1),
                    "Withdrawn_Amount": Total_Amount,
                }
            };
            let fndupdoptions = {
                upsert: true,
                setDefaultsOnInsert: true,
                new: true
            }
            let findupdateData = await Buyers.findOneAndUpdate(fndupdquery, fndupdchanges, fndupdoptions).select('-_id -__v').lean();
            resolve("Wallet Functionality Completed");
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}

ShopController.Buyer_Withdraw_Amount = (values, BuyerData, BeneficiaryData) => {
    return new Promise(async (resolve, reject) => {
        try {
            let SettingData = await CommonController.Fetch_App_Buyer_Settings();
            let Amount = parseFloat(values.Amount);
            let Minimum_Withdraw_Transaction_Amount = SettingData.Minimum_Withdraw_Transaction_Amount;
            let Maximum_Withdraw_Transaction_Amount = SettingData.Maximum_Withdraw_Transaction_Amount;
            let Available_Amount = BuyerData.Cash_Coupons_Amount_Available;
            if (Minimum_Withdraw_Transaction_Amount <= Amount && Amount <= Maximum_Withdraw_Transaction_Amount) {
                let Service_Amount = await config.RazorpayX_Service_Amount(Amount);
                let Total_Amount = Amount + Service_Amount;
                Amount = await CommonController.Common_Floating_Beautify_Value(Amount);
                Service_Amount = await CommonController.Common_Floating_Beautify_Value(Service_Amount);
                Total_Amount = await CommonController.Common_Floating_Beautify_Value(Total_Amount);
                if (Total_Amount <= Available_Amount) {
                    if (Total_Amount <= Available_Amount * 90 / 100) {
                        let Withdraw_TransactionID = uuid.v4();
                        let RazorpayXPayoutData = await RazorpayController.Razorpay_Beneficiary_Account_Payout(BeneficiaryData, Amount, Withdraw_TransactionID, 3);
                        let Transaction_Detailed_Data = await config.Razorpay_Transaction_Data.find(ele => ele.status == RazorpayXPayoutData.status);
                        let Transaction_Status = Transaction_Detailed_Data.Transaction_Status;
                        let Transaction_Status_Logs = {
                            LogID: uuid.v4(),
                            Transaction_Status: Transaction_Status,
                            Comment: Transaction_Detailed_Data.Comment,
                            Time: new Date()
                        };
                        let Transaction_Reference_ID = (Transaction_Status == 2) ? RazorpayXPayoutData.utr : "";
                        let Transaction_Completion_Remarks = (Transaction_Status == 2) ? Transaction_Detailed_Data.Comment : "";
                        let Data = {
                            Withdraw_TransactionID: Withdraw_TransactionID,
                            RazorpayX_TransactionID: RazorpayXPayoutData.id,
                            BuyerID: BuyerData.BuyerID,
                            Amount: Amount,
                            Service_Amount: Service_Amount,
                            Total_Amount: Total_Amount,
                            BeneficiaryID: BeneficiaryData.BeneficiaryID,
                            RazorpayX_BeneficiaryID: BeneficiaryData.RazorpayX_BeneficiaryID,
                            RazorpayX_ContactID: BeneficiaryData.RazorpayX_ContactID,
                            BeneficiaryType: BeneficiaryData.BeneficiaryType,
                            Name: BeneficiaryData.Name,
                            Account_Number: BeneficiaryData.Account_Number,
                            IFSC: BeneficiaryData.IFSC,
                            Whether_Default_Account: BeneficiaryData.Whether_Default_Account,
                            Bank_Details: BeneficiaryData.Bank_Details,
                            UPI: BeneficiaryData.UPI,
                            Transaction_Status: Transaction_Status,
                            Transaction_Reference_ID: Transaction_Reference_ID,
                            Transaction_Completion_Remarks: Transaction_Completion_Remarks,
                            Transaction_Status_Logs: Transaction_Status_Logs,
                            RazorpayXPayoutData: RazorpayXPayoutData,
                            created_at: new Date(),
                            updated_at: new Date()
                        };
                        let TransactionData = await Buyer_Wallet_Withdraw_Transactions.create(Data);
                        resolve({ success: true, extras: { Status: "Withdrawl have been initiated" } })
                        let WalletProcessing = await ShopController.Razorpay_Withdrawl_Wallet_Functionality(TransactionData);
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.INVALID_WITHDRAW_AMOUNT } });
                    }

                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INSUFFICIENT_BALANCE } });
                }
            } else {
                reject({ success: false, extras: { msg: ApiMessages.AMOUNT_NOT_SATISFY_MINIMUM_MAXIMUM_TRANSACTION_AMOUNT } });
            }
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}

ShopController.Get_Product_Details = (values, UserData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    $or: [
                        {
                            ProductID: values.ProductID,
                            Status: true
                        },
                        {
                            Unique_ProductID: values.Unique_ProductID,
                            Status: true
                        }
                    ]

                }
                let ProductData = await Products.findOne(query).lean().exec();
                if (ProductData != null) {
                    let ImageData = await CommonController.Common_Image_Response_Single_Image(true, ProductData.Image_Data);
                    ProductData.Image_Data = ImageData
                    let ProductImageData = await CommonController.Common_Multiple_Image_Response(ProductData.Product_Image_Data);
                    ProductData.Product_Image_Data = ProductImageData;
                    resolve({ success: true, extras: { Data: ProductData } })
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_PRODUCT } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Validate_Referral_Phone_Number = (values, UserData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Buyer_PhoneNumber: values.PhoneNumber
                };
                let Result = await Buyers.findOne(query).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.REFERRAL_NOT_AVAILABLE } })
                } else {
                    if (Result.Buyer_PhoneNumber == UserData.Buyer_PhoneNumber) {
                        reject({ success: false, extras: { msg: ApiMessages.REFERRAL_PHONE_NUMBER_AND_SELF_PHONE_NUMBER_MUST_BE_DIFFERENT } })
                    } else {
                        // resolve(Result.Buyer_Name);
                        resolve(Result);
                    }
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Generate_ShopOTP_For_Buyer_Order = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    OrderID: values.OrderID,
                    Delivery_Type: 3
                }
                let OrderData = await Buyer_Orders.findOne(query).select('-_id -__v -updated_at -Point -Geometry -ShopOTP -Delivery_Address_Information -Delivery_Pricings').lean();
                if (OrderData != null) {
                    let Order_Number = await CommonController.Random_12_Digit_Number();
                    let shopotp = await CommonController.Random_OTP_Number()
                    let TranxID = uuid.v4();
                    let changes = {
                        $set: {
                            Status: true,
                            TransactionID: TranxID,
                            Payment_Type: 4,
                            Payment_Status: 4,
                            Order_Status: 1,
                            ShopOTP: shopotp,
                            Order_Report: {
                                Title: "Order Received",
                                Description: "Order Received",
                                Time: new Date()
                            },
                            Order_Number: Order_Number, //12 digits randaom number
                        }
                    }
                    let updateOrderData = await Buyer_Orders.findOneAndUpdate(query, changes).lean().exec();
                    let BuyersQuery = {
                        BuyerID: values.BuyerID
                    }
                    let BuyerChanges = {
                        $set: {
                            Cart_Total_Items: 0,
                            Cart_Total_Price: 0,
                            updated_at: new Date()
                        },
                        $pull: {
                            Cart_Information: {
                                ProductID: {
                                    $ne: null
                                }
                            }
                        }
                    };
                    let fndupdoptions = {
                        upsert: true,
                        setDefaultsOnInsert: true,
                        new: true
                    }
                    let updatBuyerData = await Buyers.findOneAndUpdate(BuyersQuery, BuyerChanges, fndupdoptions).lean().exec();
                    let ResultData = {
                        ShopOTP: shopotp,
                        OrderID: values.OrderID,
                        TransactionID: TranxID
                    }
                    resolve({ success: true, extras: { Data: ResultData } })

                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_ORDER } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Buyer_Referals = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: values.Selected_BuyerID
                }
                let NetworkData = await Buyers_Network.findOne(query).select('-_id -__v -updated_at -Point -Geometry -ShopOTP -Delivery_Address_Information -Delivery_Pricings').lean();
                if (NetworkData != null) {
                    let Network_Information = NetworkData.Network_Information;
                    if (values.Selected_BuyerID != values.BuyerID) {
                        async.eachSeries(Network_Information, async (item, callback) => {
                            try {
                                item.Amount_Shared = 0;
                                item.Buyer_PhoneNumber = MaskData.maskPhone(item.Buyer_PhoneNumber);
                                callback();
                            } catch (error) {
                                callback(error);
                            }
                        }, async (err) => {
                            if (err) reject(err);
                        });
                    }
                    resolve({ success: true, extras: { Data: Network_Information } });
                } else {
                    reject({ success: true, extras: { Data: [] } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Complete_Buyer_Order = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let queryotp = {
                    OrderID: values.OrderID,
                    ShopOTP: values.ShopOTP
                };
                let OData = await Buyer_Orders.findOne(queryotp).lean().exec();
                if (OData != null) {
                    let query = {
                        OrderID: values.OrderID,
                        Status: true,
                        Payment_Status: { $in: [3, 4] }, //3- Success, 4- Shop Payment
                        Delivery_Type: { $in: [2, 3] }, // 2- Collect at Store, 3- Pay & collect at store
                    }
                    let OrderData = await Buyer_Orders.findOne(query).lean();
                    if (OrderData != null) {
                        ////////Check for Stock Avaliablity
                        let Cart_Information = OrderData.Cart_Information;
                        let flag = false;
                        let Datax = []
                        async.eachSeries(Cart_Information, async (item, callback) => {
                            try {
                                let pQuery = {
                                    ProductID: item.ProductID,
                                    ShopID: values.ShopID
                                }
                                let ProductData = await Shop_Product_Stocks.findOne(pQuery).lean().exec();
                                if (ProductData != null) {
                                    item.Shop_Available_Stock = ProductData.Shop_Available_Stock;
                                    if (ProductData.Shop_Available_Stock < item.Product_Quantity) { flag = true }
                                } else {
                                    item.Shop_Available_Stock = 0
                                    flag = true
                                }
                                let queryx = {
                                    ImageID: item.ImageID
                                }
                                let ImageData = await Images.findOne(queryx).select('-_id -__v -contentType -created_at -updated_at').lean();
                                ImageData = await CommonController.Common_Image_Response_Single_Image(true, ImageData);
                                item.Image_Data = ImageData
                                Datax.push(item);
                                callback();
                            } catch (error) {
                                callback(error);
                            }
                        }, async (err) => {
                            if (err) reject(err);
                            let changes = {
                                $set: {
                                    Order_Status: 3
                                },
                                $push: {
                                    Order_Report: {
                                        Title: 'Order Delivered',
                                        Description: 'Order Delivered at Shop',
                                        Time: new Date()
                                    }
                                }
                            }
                            let UpdatedStatus = await Buyer_Orders.updateOne(query, changes).lean();
                            let BuyerQuery = {
                                BuyerID: OrderData.BuyerID
                            }
                            let BuyerData = await Buyers.findOne(BuyerQuery).lean().exec();
                            let BuyerChanges1 = {
                                $inc: {
                                    Available_Amount: OrderData.Cart_Final_Price,
                                    Total_Amount: OrderData.Cart_Final_Price,
                                },
                                $set: {
                                    updated_at: new Date()
                                }
                            };
                            let AmountToWallet = await Buyers.updateOne(BuyerQuery, BuyerChanges1).lean().exec();
                            //// buyer wallet log hit
                            let AddData = {
                                Amount: OrderData.Cart_Final_Price,
                                BuyerData: BuyerData.Buyer_Name
                            }
                            let AData = {
                                LogID: uuid.v4(),
                                BuyerID: BuyerData.BuyerID,
                                Type: 7,  //debited Cart Amount for buyer order
                                Amount: OrderData.Cart_Final_Price,
                                Data: AddData,
                                Time: new Date()
                            }
                            let ADataSave = await Buyer_Share_Logs(AData).save();
                            ////
                            let BuyerChanges2 = {
                                $inc: {
                                    Available_Amount: OrderData.Cart_Final_Price * -1,
                                    Withdrawn_Amount: OrderData.Cart_Final_Price
                                },
                                $set: {
                                    updated_at: new Date()
                                }
                            };
                            let AmountFromWallet = await Buyers.updateOne(BuyerQuery, BuyerChanges2).lean().exec();
                            //// buyer wallet log hit
                            let RemData = {
                                Amount: OrderData.Cart_Final_Price,
                                BuyerData: BuyerData.Buyer_Name
                            }
                            let RData = {
                                LogID: uuid.v4(),
                                BuyerID: BuyerData.BuyerID,
                                Type: 4,
                                Amount: OrderData.Cart_Final_Price,
                                Data: RemData,
                                Time: new Date()
                            }
                            let RDataSave = await Buyer_Share_Logs(RData).save();
                            ////
                            let Data = {
                                ApiKey: values.ApiKey,
                                ShopID: values.ShopID,
                                SessionID: values.SessionID,
                                Cart_Information: Datax,
                                Buyer_Name: BuyerData.Buyer_Name,
                                Buyer_CountryCode: BuyerData.Buyer_CountryCode,
                                Buyer_PhoneNumber: BuyerData.Buyer_PhoneNumber
                            }
                            if (!flag) {
                                let BillData = JSON.parse(JSON.stringify(Data));
                                let request_optionsdh = {
                                    method: 'post',
                                    baseURL: 'https://api.dogemo.com/app',
                                    url: `/Shop_Generate_Bill`,
                                    data: BillData
                                };
                                let Responsedh = await Axios(request_optionsdh);
                                resolve({ success: true, extras: { Status: "Order Completed" } });
                            } else {
                                reject({ success: false, extras: { msg: ApiMessages.STOCK_NOT_AVAILABLE } });
                            }
                        });

                        /////////////////////

                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.INVALID_ORDER } });
                    }
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_OTP } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Check_Buyer_Order = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Order_Number: values.Order_Number,
                }
                let OrderData = await Buyer_Orders.findOne(query).select('-_id -__v -updated_at -Point -Geometry -ShopOTP -Delivery_Address_Information -Delivery_Pricings').lean();
                if (OrderData != null) {
                    let Cart_Information = OrderData.Cart_Information;
                    let flag = false;
                    let Datax = []
                    async.eachSeries(Cart_Information, async (item, callback) => {
                        try {
                            let pQuery = {
                                ProductID: item.ProductID,
                                ShopID: values.ShopID
                            }
                            let ProductData = await Shop_Product_Stocks.findOne(pQuery).lean().exec();
                            if (ProductData != null) {
                                item.Shop_Available_Stock = ProductData.Shop_Available_Stock;
                                if (ProductData.Shop_Available_Stock < item.Product_Quantity) { flag = true }
                            } else {
                                item.Shop_Available_Stock = 0,
                                    flag = true
                            }

                            let queryx = {
                                ImageID: item.ImageID
                            }
                            let ImageData = await Images.findOne(queryx).select('-_id -__v -contentType -created_at -updated_at').lean();
                            ImageData = await CommonController.Common_Image_Response_Single_Image(true, ImageData);
                            item.Image_Data = ImageData

                            Datax.push(item);
                            callback();
                        } catch (error) {
                            callback(error);
                        }
                    }, async (err) => {
                        if (err) reject(err);
                        OrderData.Cart_Information = Datax;
                        if (!flag) {
                            resolve({ success: true, extras: { Data: OrderData } });
                        } else {
                            reject({ success: false, extras: { msg: ApiMessages.STOCK_NOT_AVAILABLE, Data: OrderData } });
                        }
                    });
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_ORDER } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.List_All_Shop_Buyer_Order = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let searchData = {
                    $regex: String(values.Search),
                    $options: "i"
                }
                let query = {
                    'Shop_Information.ShopID': values.ShopID,
                    Delivery_Type: { $in: [2, 3] }, // 2- Collect at Store, 3- Pay & collect at store
                    Payment_Status: { $in: [3, 4] }, //3- Success, 4- Shop Payment
                    Order_Status: 1,
                    $or: [{
                        Order_Number: searchData
                    }],
                };
                let sortOptions = {
                    created_at: -1
                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let Count = await Buyer_Orders.countDocuments(query).lean().exec();
                let Result = await Buyer_Orders.find(query).select('-_id -__v -updated_at -Point -Geometry -ShopOTP -Delivery_Address_Information -Delivery_Pricings').sort(sortOptions).skip(toSkip).limit(toLimit).lean().exec();
                let Data = [];
                async.eachSeries(Result, async (item, callback) => {
                    try {
                        let Query = {
                            BuyerID: item.BuyerID,
                        }
                        let BuyerData = await Buyers.findOne(Query).lean().exec();
                        if (BuyerData != null) {
                            item.Buyer_Name = BuyerData.Buyer_Name;
                            item.Buyer_CountryCode = BuyerData.Buyer_CountryCode;
                            item.Buyer_PhoneNumber = BuyerData.Buyer_PhoneNumber;
                        } else {
                            reject({ success: false, extras: { msg: ApiMessages.INVALID_BUYER } });
                        }
                        Data.push(item);
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async (err) => {
                    if (err) reject(err);
                    resolve({ success: true, extras: { Count: Count, Data: Data } });
                });


            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.List_All_Delivery_Type = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {

                };
                let sortOptions = {
                    Delivery_Type: 1
                };

                let Result = await Delivery_Type.find(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings').sort(sortOptions).lean().exec();
                resolve({ success: true, extras: { Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Pincode = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let pin = parseInt(values.PinCode);
                https.get('https://api.postalpincode.in/pincode/' + pin, (resp) => {
                    let data = '';
                    // A chunk of data has been recieved.
                    resp.on('data', (chunk) => {
                        data += chunk;
                    });
                    // The whole response has been received. Print out the result.
                    resp.on('end', () => {
                        //
                        var datanew = JSON.parse(data);
                        if (datanew[0].PostOffice != null) {
                            var dat = datanew[0].PostOffice[0];
                            var State = dat.State;
                            var district = dat.District;
                            var Division = dat.Division;
                            var Address = {
                                State: State,
                                District: district,
                                Division: Division
                            }
                            resolve({ success: true, extras: { Status: Address } })
                        } else {
                            resolve({ success: false, extras: { msg: ApiMessages.INVALID_PINCODE } })
                        }
                    });
                }).on("error", (err) => {

                });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.List_All_Banner = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Status: true
                };
                let sortOptions = {
                    SNo: 1
                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let Count = await Banner.countDocuments(query).lean().exec();
                let Result = await Banner.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings').sort(sortOptions).skip(toSkip).limit(toLimit).lean().exec();
                ////////////////////
                let Data = []
                async.eachSeries(Result, async (item, callback) => {
                    try {
                        let ImageData = await CommonController.Common_Image_Response_Single_Image(true, item.Image_Data);
                        item.Image_Data = ImageData
                        let WebImageData = await CommonController.Common_Image_Response_Single_Image(true, item.WebImageData);
                        item.WebImageData = WebImageData
                        Data.push(item);
                        callback();
                    } catch (error) {
                        callback(error);
                    } ``
                }, async (err) => {
                    if (err) reject(err);
                    resolve({ success: true, extras: { Count: Count, Data: Data } })
                });
                /////////////////////

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.List_All_Help_Data = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Status: true
                };
                let sortOptions = {
                    created_at: 1
                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let Count = await Help_Data.countDocuments(query).lean().exec();
                let Result = await Help_Data.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings').sort(sortOptions).skip(toSkip).limit(toLimit).lean().exec();
                resolve({ success: true, extras: { Count: Count, Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Buyer_Wallet_log = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: values.BuyerID
                };
                let sortOptions = {
                    Time: -1
                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let Count = await Buyer_Share_Logs.countDocuments(query).lean().exec();
                let Result = await Buyer_Share_Logs.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings').sort(sortOptions).skip(toSkip).limit(toLimit).lean().exec();
                resolve({ success: true, extras: { Count: Count, Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Home_Screen_Details = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: values.BuyerID
                };
                let Result = await Buyers.findOne(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -Product_Price_Divisions -Product_Image_Data').lean().exec();
                resolve({ success: true, extras: { Data: Result } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Cancel_Single_Order = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: values.BuyerID,
                    OrderID: values.OrderID
                };
                let Result = await Buyer_Orders.findOne(query).lean().exec();
                if (Result != null) {
                    if (Result.Order_Report.length <= 1) {
                        let changes = {
                            $set: {
                                Status: false,
                                Order_Status: 2,
                                updated_at: new Date()
                            },
                            $push: {
                                Order_Report: {
                                    Title: "Cancelled by Buyer",
                                    Description: "",
                                    Time: new Date()
                                }
                            }
                        }
                        let UpdatedStatus = await Buyer_Orders.updateOne(query, changes).lean();
                        let orderDetails = await Buyer_Orders.findOne(query).select('BuyerID Amount_Paid').lean();
                        let BuyerQuery = {
                            BuyerID: orderDetails.BuyerID
                        }
                        let Amount = parseFloat(orderDetails.Amount_Paid.Total_Amount_Paid)
                        let BuyerChanges = {
                            //add money to wallet
                            $inc: {
                                Total_Amount: Amount,
                                Available_Amount: Amount
                            },
                            $set: {
                                updated_at: new Date()
                            }
                        };
                        let fndupdoptions = {
                            upsert: true,
                            setDefaultsOnInsert: true,
                            new: true
                        };
                        let buyerupdate = await Buyers.findOneAndUpdate(BuyerQuery, BuyerChanges, fndupdoptions).lean().exec();
                        let Data = {
                            BuyerData: buyerupdate.Buyer_Name,
                            Amount: Amount
                        };
                        let WData = {
                            LogID: uuid.v4(),
                            BuyerID: orderDetails.BuyerID,
                            Type: 5, //credited amount for cancel order
                            Amount: Amount,
                            Data: Data,
                            Time: new Date()
                        }
                        let logupdate = await Buyer_Share_Logs(WData).save();
                        resolve({ success: true, extras: { Status: "Order Status updated successfully" } })
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.PURCHASE_ORDER_CAN_NOT_CANCEL } });
                    }
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_ORDER } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Get_Buyer_Single_Order = (values, Type) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: values.BuyerID,
                    OrderID: values.OrderID
                };
                let Result = await Buyer_Orders.findOne(query).lean().exec();
                if (Result != null) {
                    let CartData = [];
                    async.eachSeries(Result.Cart_Information, async (item, callback) => {
                        try {
                            let query = {
                                ImageID: item.ImageID
                            }
                            let ImageData = await Images.findOne(query).select('-_id -__v -contentType -created_at -updated_at').lean();
                            ImageData = await CommonController.Common_Image_Response_Single_Image(true, ImageData);
                            let Cart_Information = {
                                Product_Price_Divisions: item.Product_Price_Divisions,
                                Total_Product_Share_Distributed_Amount: item.Total_Product_Share_Distributed_Amount,
                                ProductID: item.ProductID,
                                Product_Name: item.Product_Name,
                                Product_Description: item.Product_Description,
                                Product_Price: parseFloat(item.Product_Price),
                                Product_Quantity: parseInt(item.Product_Quantity),
                                Product_Sub_Total: parseFloat(item.Product_Sub_Total),
                                ImageData: ImageData,
                            }
                            CartData.push(Cart_Information);
                            callback();
                        } catch (error) {
                            callback(error);
                        }
                    }, async (err) => {
                        if (err) reject(err);
                        Result.Cart_Information = CartData
                        delete Result.WebHookData
                        if (Type == 1) {
                            resolve({ success: true, extras: { Data: Result } });
                        } else {
                            resolve(Result)
                        }
                    });
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_ORDER } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.List_Buyer_Orders = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Start_Date = moment(values.Start_Date)//, config.Take_Date_Format).subtract(330, 'minutes').toDate();
                let End_Date = moment(values.End_Date)//, config.Take_Date_Format).subtract(330, 'minutes').add(1, 'day').subtract(1, 'ms').toDate();
                let Orderstats;
                if (values.Status == true) {
                    Orderstats = {
                        $eq: 1
                    }
                } else {
                    Orderstats = {
                        $nin: [1, 0]
                    }
                }
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    created_at: -1
                };
                let matchquery = {
                    Order_Status: Orderstats,
                    BuyerID: values.BuyerID,
                    created_at: {
                        $gte: Start_Date,
                        $lte: End_Date
                    }
                };
                let Count = await Buyer_Orders.countDocuments(matchquery).lean().exec();
                let Result = await Buyer_Orders.find(matchquery).sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                let Data = [];
                async.eachSeries(Result, async (item, callback) => {
                    try {
                        let finalResult = await ShopController.Get_Buyer_Single_Order(item, 2);
                        Data.push(finalResult);
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async (err) => {
                    if (err) reject(err);
                    resolve({ success: true, extras: { Count: Count, Data: Data } });
                });

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.List_All_Shops = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let Latitude = parseFloat(values.Latitude);
                let Longitude = parseFloat(values.Longitude);
                let Point = [
                    Longitude,
                    Latitude
                ];
                let query = {
                    'Point': {
                        '$near': {
                            '$minDistance': 0,
                            '$maxDistance': 50000,
                            '$geometry': {
                                type: "Point",
                                coordinates: Point
                            }
                        }
                    },
                    'Status': true
                };
                let Result = await Shops.find(query).select('-_id -__v').lean();//.skip(toSkip).limit(toLimit).exec();
                let Count = Result.length
                resolve({ success: true, extras: { Count: Count, Data: Result.slice(toSkip, toSkip + toLimit) } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Complete_Payment_for_Buyer_Order = (OrderData, WebhookData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    OrderID: OrderData.OrderID,
                    Status: true
                }
                let Result = await Buyer_Orders.findOne(query).lean();
                if (Result != null) {
                    let pay_type;
                    if (WebhookData == '') {
                        pay_type = 1;
                    } else {
                        if (WebhookData.Amount == Result.Cart_Final_Price) {
                            pay_type = 2;
                        } else {
                            pay_type = 3;
                        }
                    }
                    let BuyersQuery = {
                        BuyerID: Result.BuyerID
                    }
                    let BuyerData = await Buyers.findOne(BuyersQuery).lean().exec();
                    /// amount deduct from from buyer wallet and maintain log for it
                    let Wallet_bal_Used = Result.Amount_Paid.Amount_Used_From_Wallet;
                    if (Wallet_bal_Used > 0) {
                        let Data = {
                            OrderID: Result.OrderID,
                            Amount: Wallet_bal_Used,
                            BuyerData: BuyerData.Buyer_Name
                        }
                        let WData = {
                            LogID: uuid.v4(),
                            BuyerID: Result.BuyerID,
                            Type: 2,  //debited Amount for Buyer Order
                            Amount: Wallet_bal_Used,
                            Data: Data,
                            Time: new Date()
                        }
                        let Resultlog = Buyer_Purchase_Wallet_Logs(WData).save();
                        let BuyerChanges = {
                            $inc: {
                                Purchace_Coupons_Amount_Available: Wallet_bal_Used * -1,
                                Purchace_Coupons_Amount_Withdraw: Wallet_bal_Used
                            },
                            $set: {
                                Cart_Total_Items: 0,
                                Cart_Total_Price: 0,
                                updated_at: new Date()
                            },
                            $pull: {
                                Cart_Information: {
                                    ProductID: {
                                        $ne: null
                                    }
                                }
                            }
                        };
                        let fndupdoptions = {
                            upsert: true,
                            setDefaultsOnInsert: true,
                            new: true
                        }
                        //update wallet amount to purchase wallet
                        let updatBuyerData = await Buyers.findOneAndUpdate(BuyersQuery, BuyerChanges, fndupdoptions).lean().exec();
                    } else {
                        let finalChanges = {
                            $set: {
                                Cart_Total_Items: 0,
                                Cart_Total_Price: 0,
                                updated_at: new Date()
                            },
                            $pull: {
                                Cart_Information: {
                                    ProductID: {
                                        $ne: null
                                    }
                                }
                            }
                        }
                        let fndupdoptionsx = {
                            upsert: true,
                            setDefaultsOnInsert: true,
                            new: true
                        }
                        let updatBuyerData = await Buyers.findOneAndUpdate(BuyersQuery, finalChanges, fndupdoptionsx).lean().exec();
                    }

                    //////
                    let changes = {
                        $set: {
                            Payment_Status: 3,
                            Order_Status: 1,
                            WebHookData: WebhookData,
                            Payment_Type: pay_type,
                            Order_Report: {
                                Title: "Order Received",
                                Description: "Order Received",
                                Time: new Date()
                            },
                            Updated_at: new Date()
                        }
                    }
                    let Resultx = await Buyer_Orders.findOneAndUpdate(query, changes).lean().exec();
                    resolve("Order Generated Successfully");

                    if (OrderData.Delivery_Type == 1) {
                        let CartInformation = OrderData.Cart_Information
                        let AdminQuantityUpdate = await ShopController.Update_Product_Stock_in_Admin_Store(CartInformation);
                    }

                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_ORDER } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Payment_for_Buyer_Order = (values, buyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                console.log("5905--->" + buyerData.Purchace_Coupons_Amount_Available.toFixed(2) + " >=" + parseFloat(values.Amount_Used_From_Wallet.toFixed(2)));

                if (buyerData.Purchace_Coupons_Amount_Available.toFixed(2) >= parseFloat(values.Amount_Used_From_Wallet.toFixed(2))) {
                    let query = {
                        OrderID: values.OrderID,
                        Status: false
                    }
                    let Result = await Buyer_Orders.findOne(query).lean();
                    if (Result != null) {
                        let cartprice = Result.Cart_Final_Price.toFixed(2);
                        let priceCal = parseFloat(values.Amount_Used_From_Wallet.toFixed(2)) + parseFloat(values.Online_Amount.toFixed(2));
                        console.log("5905--->" + parseFloat(values.Amount_Used_From_Wallet.toFixed(2)) + "---" + parseFloat(values.Online_Amount.toFixed(2)));
                        console.log("5909--->" + cartprice + "---" + parseFloat(priceCal.toFixed(2)));

                        if (cartprice == parseFloat(priceCal.toFixed(2))) {
                            let TranxID = uuid.v4();
                            let calbk;
                            let Order_Number = await CommonController.Random_12_Digit_Number();
                            if (parseInt(values.Online_Amount) == 0) { calbk = false } else { calbk = true }
                            let qerryPay = {
                                OrderID: values.OrderID,
                            }
                            let shopotp = 0;
                            if (Result.Delivery_Type == 2) {
                                shopotp = await CommonController.Random_OTP_Number()
                            }
                            let changes = {
                                $set: {
                                    Status: true,
                                    TransactionID: TranxID,
                                    ShopOTP: shopotp,
                                    Amount_Paid: {
                                        Amount_Used_From_Wallet: values.Amount_Used_From_Wallet,
                                        Amount_Paid_Online: values.Online_Amount,
                                        Total_Amount_Paid: values.Total_Amount
                                    },
                                    Order_Number: Order_Number,//12 digits randaom number                            
                                }
                            }
                            let updateOrderData = await Buyer_Orders.findOneAndUpdate(qerryPay, changes).lean().exec()
                            let ResultData = {
                                ShopOTP: shopotp,
                                OrderID: values.OrderID,
                                TransactionID: TranxID,
                                Callback: calbk,
                                Final_Amount: values.Online_Amount.toFixed(2)
                            }
                            if (calbk == false) {
                                //
                                let updateTranx = await ShopController.Complete_Payment_for_Buyer_Order(updateOrderData, "");
                            }
                            resolve({ success: true, extras: { Data: ResultData } })

                        } else {
                            reject({ success: false, extras: { msg: ApiMessages.FINAL_AMOUNT_MISSMATCH } });
                        }
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.INVALID_ORDER } });
                    }
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.AMOUNT_EXCEED_WALLET_AVAILABLE_BALANCE } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Delete_Buyer_Order = (values, buyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    OrderID: values.OrderID,
                    Status: false
                }
                let Result = await Buyer_Orders.findOne(query).lean();
                if (Result != null) {
                    let DeleteOrder = await Buyer_Orders.deleteOne(query).lean().exec();
                    resolve({ success: true, extras: { Status: 'Order Deleted Successfully' } })
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_ORDER } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Edit_Checkout_Buyer_Cart = (values, buyerData) => { // not using
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    AddressID: values.AddressID,
                    Status: true
                }
                let Result = await Buyer_Address_Log.findOne(query).lean();
                if (Result != null) {
                    if (buyerData.Cart_Information <= 0) {
                        reject({ success: false, extras: { msg: ApiMessages.CART_EMPTY } });
                    } else {

                        let CartData = [];
                        let CompanyAmount = 0;
                        let TAXX = 0;
                        async.eachSeries(buyerData.Cart_Information, async (item, callback) => {
                            //
                            try {
                                let query = {
                                    ImageID: item.ImageID
                                }
                                let ImageData = await Images.findOne(query).select('-_id -__v -contentType -created_at -updated_at').lean();
                                ImageData = await CommonController.Common_Image_Response_Single_Image(true, ImageData);
                                let Pquery = {
                                    ProductID: item.ProductID
                                }
                                let ProductData = await Products.findOne(Pquery).select('-_id -__v -contentType -created_at -updated_at').lean();
                                CompanyAmount += parseFloat(item.Total_Product_Share_Distributed_Amount.Company_Amount);
                                TAXX += parseFloat(item.Total_Product_Share_Distributed_Amount.Company_Amount * ProductData.Product_GST / 100);
                                let Cart_Information = {
                                    Product_Price_Divisions: item.Product_Price_Divisions,
                                    Total_Product_Share_Distributed_Amount: item.Total_Product_Share_Distributed_Amount,
                                    ProductID: item.ProductID,
                                    Product_Name: item.Product_Name,
                                    Product_Description: item.Product_Description,
                                    Product_Price: parseFloat(item.Product_Price),
                                    Product_Quantity: parseInt(item.Product_Quantity),
                                    Product_Sub_Total: parseFloat(item.Product_Sub_Total),
                                    ImageData: ImageData,
                                }
                                CartData.push(Cart_Information);
                                callback();
                            } catch (error) {
                                callback(error);
                            }
                        }, async (err) => {
                            if (err) reject(err);
                            let oquery = {
                                OrderID: values.OrderID,
                                Status: false
                            }
                            let carttax = parseFloat(TAXX.toFixed(2));
                            let finalprice = parseFloat(buyerData.Cart_Total_Price + carttax)
                            let OrderData = await Buyer_Orders.findOne(oquery).lean().exec();
                            if (OrderData == null) {
                                reject({ success: false, extras: { msg: ApiMessages.INVALID_ORDER } });
                            } else {
                                let changes = {
                                    $set: {
                                        Delivery_Address_Information: Result,
                                        Delivery_Type: values.Delivery_Type,
                                        updated_at: new Date()
                                    }
                                }
                                let UpdateData = await Buyer_Orders.findOneAndUpdate(oquery, changes).select('-_id -__v').lean().exec()
                                UpdateData.Wallet_Amount = buyerData.Cash_Coupons_Amount_Available;
                                delete UpdateData.Cart_Information;
                                UpdateData.Cart_Information = CartData
                                let onlineamount = finalprice - buyerData.Cash_Coupons_Amount_Available;
                                if (onlineamount <= 0) {
                                    onlineamount = 0;
                                }
                                UpdateData.Online_Amount = onlineamount.toFixed(2);
                                resolve({ success: true, extras: { Data: UpdateData } })
                            }
                        });
                    }
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_ADDRESS } });
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Checkout_Buyer_Cart = (values, buyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                if (values.Delivery_Type == 1) {
                    if (values.AddressID != null && values.AddressID != '') {
                        let query = {
                            AddressID: values.AddressID,
                            Status: true
                        }
                        let Result = await Buyer_Address_Log.findOne(query).lean();
                        if (Result != null) {
                            if (buyerData.Cart_Information <= 0) {
                                reject({ success: false, extras: { msg: ApiMessages.CART_EMPTY } });
                            } else {
                                let CartData = [];
                                let CompanyAmount = 0;
                                let TAXX = 0;
                                let Cart_Weight = 0;
                                async.eachSeries(buyerData.Cart_Information, async (item, callback) => {
                                    try {
                                        let query = {
                                            ImageID: item.ImageID
                                        }
                                        let ImageData = await Images.findOne(query).select('-_id -__v -contentType -created_at -updated_at').lean();
                                        ImageData = await CommonController.Common_Image_Response_Single_Image(true, ImageData);
                                        let Pquery = {
                                            ProductID: item.ProductID
                                        }
                                        let ProductData = await Products.findOne(Pquery).select('-_id -__v -contentType -created_at -updated_at').lean();
                                        CompanyAmount += parseFloat(item.Total_Product_Share_Distributed_Amount.Company_Amount);
                                        TAXX += parseFloat(item.Total_Product_Share_Distributed_Amount.Company_Amount * ProductData.Product_GST / 100);
                                        if (ProductData.Product_Weight == null || ProductData.Product_Weight == undefined) {
                                            Cart_Weight += parseInt(item.Product_Quantity)
                                        } else {
                                            Cart_Weight += ProductData.Product_Weight * parseInt(item.Product_Quantity)
                                        }
                                        let Cart_Information = {
                                            Product_Price_Divisions: item.Product_Price_Divisions,
                                            Total_Product_Share_Distributed_Amount: item.Total_Product_Share_Distributed_Amount,
                                            ProductID: item.ProductID,
                                            Product_Name: item.Product_Name,
                                            Product_Description: item.Product_Description,
                                            Product_Price: parseFloat(item.Product_Price),
                                            Product_Quantity: parseInt(item.Product_Quantity),
                                            Product_Sub_Total: parseFloat(item.Product_Sub_Total),
                                            ImageData: ImageData,
                                        }
                                        CartData.push(Cart_Information);
                                        callback();
                                    } catch (error) {
                                        callback(error);
                                    }
                                }, async (err) => {
                                    if (err) reject(err);
                                    let carttax = parseFloat(TAXX.toFixed(2));
                                    let Delivery_Pricings = 0;
                                    let finalprice = parseFloat(buyerData.Cart_Total_Price + carttax)
                                    let oid = uuid.v4()
                                    let Data = {
                                        BuyerID: buyerData.BuyerID,
                                        OrderID: oid,
                                        Cart_Information: buyerData.Cart_Information,
                                        Delivery_Address_Information: Result,
                                        Delivery_Type: values.Delivery_Type,
                                        Cart_Total_Items: buyerData.Cart_Total_Items,
                                        Cart_Total_Price: buyerData.Cart_Total_Price,
                                        Tax: carttax,
                                        Discount: 0,
                                        Delivery_Pricings: 0,
                                        Courier_Company_Id: "",
                                        ETA_Hrs: "",
                                        ETA: "",
                                        Cart_Weight: Cart_Weight,
                                        Cart_Final_Price: finalprice,
                                        created_at: new Date(),
                                        updated_at: new Date()
                                    }
                                    let FinalData = await Buyer_Orders(Data).save();
                                    Data.Wallet_Amount = buyerData.Purchace_Coupons_Amount_Available;
                                    delete Data.Cart_Information;
                                    Data.Amount_Paid = FinalData.Amount_Paid;
                                    Data.TransactionID = FinalData.TransactionID;
                                    Data.Cart_Information = CartData;
                                    let onlineamount = finalprice - buyerData.Purchace_Coupons_Amount_Available;
                                    let Amount_Used_From_Wallet = buyerData.Purchace_Coupons_Amount_Available;
                                    if (onlineamount <= 0) {
                                        onlineamount = 0;
                                        Amount_Used_From_Wallet = finalprice;
                                    }
                                    Data.Online_Amount = onlineamount.toFixed(2);
                                    Data.Web_Online_Amount = parseFloat(onlineamount.toFixed(2));
                                    Data.Amount_Use_From_Wallet = Amount_Used_From_Wallet;
                                    resolve({ success: true, extras: { Data: Data } })
                                });
                            }
                        } else {
                            reject({ success: false, extras: { msg: ApiMessages.INVALID_ADDRESS } });
                        }
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } });
                    }
                } else if (values.Delivery_Type == 2 || values.Delivery_Type == 3) {
                    if (values.ShopID != null && values.ShopID != '') {
                        /////
                        let query = {
                            ShopID: values.ShopID,
                            Status: true
                        }
                        let ShopData = await Shops.findOne(query).lean();
                        if (ShopData == null) {
                            reject({ success: false, extras: { msg: ApiMessages.INVALID_SHOP } });
                        } else {
                            if (buyerData.Cart_Information <= 0) {
                                reject({ success: false, extras: { msg: ApiMessages.CART_EMPTY } });
                            } else {
                                let CartData = [];
                                let CompanyAmount = 0;
                                let TAXX = 0;
                                async.eachSeries(buyerData.Cart_Information, async (item, callback) => {
                                    try {
                                        let query = {
                                            ImageID: item.ImageID
                                        }
                                        let ImageData = await Images.findOne(query).select('-_id -__v -contentType -created_at -updated_at').lean();
                                        ImageData = await CommonController.Common_Image_Response_Single_Image(true, ImageData);
                                        let Pquery = {
                                            ProductID: item.ProductID
                                        }
                                        let ProductData = await Products.findOne(Pquery).select('-_id -__v -contentType -created_at -updated_at').lean();
                                        CompanyAmount += parseFloat(item.Total_Product_Share_Distributed_Amount.Company_Amount);
                                        TAXX += parseFloat(item.Total_Product_Share_Distributed_Amount.Company_Amount * ProductData.Product_GST / 100);
                                        if (ProductData.Product_Weight == null || ProductData.Product_Weight == undefined) {
                                            Cart_Weight += parseInt(item.Product_Quantity)
                                        } else {
                                            Cart_Weight += ProductData.Product_Weight * parseInt(item.Product_Quantity)
                                        }
                                        let Cart_Information = {
                                            Product_Price_Divisions: item.Product_Price_Divisions,
                                            Total_Product_Share_Distributed_Amount: item.Total_Product_Share_Distributed_Amount,
                                            ProductID: item.ProductID,
                                            Product_Name: item.Product_Name,
                                            Product_Description: item.Product_Description,
                                            Product_Price: parseFloat(item.Product_Price),
                                            Product_Quantity: parseInt(item.Product_Quantity),
                                            Product_Sub_Total: parseFloat(item.Product_Sub_Total),
                                            ImageData: ImageData,
                                        }
                                        CartData.push(Cart_Information);
                                        callback();
                                    } catch (error) {
                                        callback(error);
                                    }
                                }, async (err) => {
                                    if (err) reject(err);
                                    let carttax = parseFloat(TAXX.toFixed(2));
                                    let Delivery = 0
                                    let finalprice = parseFloat(buyerData.Cart_Total_Price + carttax + Delivery_Type)
                                    let oid = uuid.v4()
                                    let Data = {
                                        BuyerID: buyerData.BuyerID,
                                        OrderID: oid,
                                        Cart_Information: buyerData.Cart_Information,
                                        Shop_Information: {
                                            ShopID: ShopData.ShopID,
                                            Shop_Name: ShopData.Shop_Name,
                                            Shop_CountryCode: ShopData.Shop_CountryCode,
                                            Shop_PhoneNumber: ShopData.Shop_PhoneNumber,
                                            Latitude: ShopData.Latitude,
                                            Longitude: ShopData.Longitude,
                                            Point: ShopData.Point,
                                            Address: ShopData.Address
                                        },
                                        Delivery_Type: values.Delivery_Type,
                                        Cart_Total_Items: buyerData.Cart_Total_Items,
                                        Cart_Total_Price: buyerData.Cart_Total_Price,
                                        Tax: carttax,
                                        Discount: 0,
                                        Delivery_Pricings: Delivery,
                                        Courier_Company_Id: 0,
                                        ETA_Hrs: 0,
                                        ETA: 0,
                                        Cart_Weight: Cart_Weight,
                                        Cart_Final_Price: finalprice,
                                        created_at: new Date(),
                                        updated_at: new Date()
                                    }
                                    let FinalData = await Buyer_Orders(Data).save();
                                    Data.Wallet_Amount = buyerData.Purchace_Coupons_Amount_Available;
                                    delete Data.Cart_Information;
                                    Data.Amount_Paid = FinalData.Amount_Paid;
                                    Data.TransactionID = FinalData.TransactionID;
                                    Data.Cart_Information = CartData;
                                    let onlineamount = finalprice - buyerData.Purchace_Coupons_Amount_Available;
                                    let Amount_Used_From_Wallet = buyerData.Purchace_Coupons_Amount_Available;
                                    if (onlineamount <= 0) {
                                        onlineamount = 0;
                                        Amount_Used_From_Wallet = finalprice;
                                    }
                                    Data.Online_Amount = onlineamount.toFixed(2);
                                    Data.Amount_Use_From_Wallet = Amount_Used_From_Wallet;
                                    resolve({ success: true, extras: { Data: Data } })
                                });
                            }
                        }
                        /////
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } });
                    }
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_DELIVERY_TYPE } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.List_All_Products_In_Buyer_Cart = (values, buyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Data = [];
                let CompanyAmount = 0;
                let TAXX = 0;
                async.eachSeries(buyerData.Cart_Information, async (item, callback) => {
                    try {
                        let query = {
                            ImageID: item.ImageID
                        }
                        let ImageData = await Images.findOne(query).select('-_id -__v -contentType -created_at -updated_at').lean();
                        ImageData = await CommonController.Common_Image_Response_Single_Image(true, ImageData);
                        let Pquery = {
                            ProductID: item.ProductID
                        }
                        let ProductData = await Products.findOne(Pquery).select('-_id -__v -contentType -created_at -updated_at').lean();
                        CompanyAmount += parseFloat(item.Total_Product_Share_Distributed_Amount.Company_Amount);
                        TAXX += parseFloat(item.Total_Product_Share_Distributed_Amount.Company_Amount * ProductData.Product_GST / 100);
                        let Cart_Information = {
                            ProductID: item.ProductID,
                            Product_Name: item.Product_Name,
                            Product_Description: item.Product_Description,
                            Product_Price: parseFloat(item.Product_Price),
                            Product_Quantity: parseInt(item.Product_Quantity),
                            Product_Sub_Total: parseFloat(item.Product_Sub_Total),
                            ImageData: ImageData,
                        }
                        Data.push(Cart_Information);
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async (err) => {
                    if (err) reject(err);
                    //
                    let cartprice = parseFloat(buyerData.Cart_Total_Price);
                    let carttax = parseFloat(TAXX.toFixed(2));
                    let discount = 0
                    let pricetotal = parseFloat(cartprice + carttax - discount);
                    let Buyer_Cart_Data = {
                        Cart_Total_Items: parseInt(buyerData.Cart_Total_Items),
                        Cart_Total_Price: parseFloat(cartprice),
                        Discount: parseFloat(discount),
                        Cart_Tax: parseFloat(carttax),
                        Total_Price: parseFloat(pricetotal),
                        Cart_Information: Data
                    }
                    resolve({ success: true, extras: { Data: Buyer_Cart_Data } })
                });

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Remove_All_Product_From_Cart = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: values.BuyerID
                }
                let changespull = {
                    $set: {
                        Cart_Total_Items: 0,
                        Cart_Total_Price: 0,
                    },
                    $pull: {
                        Cart_Information: {
                            ProductID: {
                                $ne: null
                            }
                        }
                    }
                }
                let ResultPull = await Buyers.updateOne(query, changespull).lean().exec();
                resolve({ success: true, extras: { Status: "All Items in Cart Removed Successfully" } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Add_Product_To_Cart = (values, ProductData, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                if (values.Add_Remove == 1) {
                    if (ProductData.Product_Weight == null || ProductData.Product_Weight == undefined) {
                        ProductData.Product_Weight = 1;
                    }
                    let totalWeight = ProductData.Product_Weight;
                    for (const cart of BuyerData.Cart_Information) {
                        let productWeight = await CommonController.Check_For_Product(cart)
                        let Weight = cart.Product_Quantity * productWeight.Product_Weight;
                        totalWeight += Weight;
                    }
                    if (totalWeight > 30) {
                        reject({ success: false, extras: { msg: ApiMessages.CART_WEIGHT_LIMIT_EXCIDED_30KG } })
                    }
                }
                let query = {
                    BuyerID: values.BuyerID
                }
                let qty = 0;
                let Total = 0;
                if (BuyerData.Cart_Information.length > 0) {
                    let Result = BuyerData.Cart_Information.filter(function (ResultTemp) {
                        return ResultTemp.ProductID == ProductData.ProductID;
                    });
                    if (Result.length != 0) {
                        qty = parseInt(Result[0].Product_Quantity);
                        Total = parseInt(Result[0].Product_Sub_Total);
                        let changespull = {
                            $pull: {
                                Cart_Information: {
                                    ProductID: ProductData.ProductID
                                }
                            }
                        }
                        let ResultPull = await Buyers.updateOne(query, changespull).lean().exec();
                    }
                }
                let cartItem = 1;
                let CartPrice = ProductData.Product_Price;
                let Qnty = qty + 1;
                let SubTotal = Total + ProductData.Product_Price;
                let sttus = "Product Added Successfully"
                if (values.Add_Remove == -1) {
                    cartItem = -1;
                    CartPrice = ProductData.Product_Price * -1;
                    Qnty = qty - 1;
                    SubTotal = Total - ProductData.Product_Price;
                    sttus = "Product Removed Successfully"
                }
                let Totalproduct_AmountSharing = await ShopController.Find_Total_Share_Distributed_Amount(SubTotal, ProductData.Product_Price_Divisions, ProductData.Product_Price_Data, Qnty);
                let cartData;
                if (Qnty > 0) {
                    cartData = {
                        ProductID: ProductData.ProductID,
                        Product_Name: ProductData.Product_Name,
                        Product_Price: ProductData.Product_Price,
                        ImageID: ProductData.Image_Data.ImageID,
                        Status: ProductData.Status,
                        Product_Quantity: Qnty,
                        Product_Sub_Total: SubTotal,
                        Product_Price_Divisions: ProductData.Product_Price_Divisions,
                        Product_Price_Data: ProductData.Product_Price_Data,
                        Total_Product_Share_Distributed_Amount: Totalproduct_AmountSharing
                    }
                    let changespush = {
                        $inc: {
                            Cart_Total_Items: cartItem,
                            Cart_Total_Price: CartPrice,
                        },
                        $push: {
                            Cart_Information: cartData
                        }
                    }
                    let ResultPush = await Buyers.updateOne(query, changespush).lean().exec();
                } else {
                    cartData = {}
                    if (qty > 0) {
                        let changespush = {
                            $inc: {
                                Cart_Total_Items: cartItem,
                                Cart_Total_Price: CartPrice,
                            }
                        }
                        let ResultPush = await Buyers.updateOne(query, changespush).lean().exec();
                    }
                }
                let ResultFinal = await Buyers.findOne(query).select('-_id Cart_Total_Items Cart_Total_Price').lean().exec()
                resolve({ success: true, extras: { Status: sttus, Data: ResultFinal, Cart_Information: cartData } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

///////////////////////////////

ShopController.Add_Bulk_Product_To_Cart = (values, ProductData, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Quantity = parseInt(values.Quantity);
                let query = {
                    BuyerID: values.BuyerID
                }
                let qty = 0;
                let Total = 0;
                if (BuyerData.Cart_Information.length > 0) {
                    let Result = BuyerData.Cart_Information.filter(function (ResultTemp) {
                        return ResultTemp.ProductID == ProductData.ProductID;
                    });
                    if (Result.length != 0) {
                        qty = parseInt(Result[0].Product_Quantity);
                        Total = parseInt(Result[0].Product_Sub_Total);
                        let changespull = {
                            $pull: {
                                Cart_Information: {
                                    ProductID: ProductData.ProductID
                                }
                            }
                        }
                        let ResultPull = await Buyers.updateOne(query, changespull).lean().exec();
                    }
                }
                let cartItem = Quantity;
                let CartPrice = ProductData.Product_Price * Quantity;
                let Qnty = qty + Quantity;
                let SubTotal = Total + ProductData.Product_Price * Quantity;
                let sttus = "Product Added Successfully"
                if (values.Add_Remove == -1) {
                    cartItem = Quantity * -1;
                    CartPrice = ProductData.Product_Price * Quantity * -1;
                    Qnty = qty - Quantity;
                    SubTotal = Total - ProductData.Product_Price * Quantity;
                    sttus = "Product Removed Successfully"
                }
                let Totalproduct_AmountSharing = await ShopController.Find_Total_Share_Distributed_Amount(SubTotal, ProductData.Product_Price_Divisions, ProductData.Product_Price_Data, Qnty);
                let cartData;
                if (Qnty > 0) {
                    cartData = {
                        ProductID: ProductData.ProductID,
                        Product_Name: ProductData.Product_Name,
                        Product_Price: ProductData.Product_Price,
                        ImageID: ProductData.Image_Data.ImageID,
                        Status: ProductData.Status,
                        Product_Quantity: Qnty,
                        Product_Sub_Total: SubTotal,
                        Product_Price_Divisions: ProductData.Product_Price_Divisions,
                        Product_Price_Data: ProductData.Product_Price_Data,
                        Total_Product_Share_Distributed_Amount: Totalproduct_AmountSharing
                    }
                    let changespush = {
                        $inc: {
                            Cart_Total_Items: cartItem,
                            Cart_Total_Price: CartPrice,
                        },
                        $push: {
                            Cart_Information: cartData
                        }
                    }
                    let ResultPush = await Buyers.updateOne(query, changespush).lean().exec();
                } else {
                    cartData = {}
                    if (qty > 0) {
                        let changespush = {
                            $inc: {
                                Cart_Total_Items: cartItem,
                                Cart_Total_Price: CartPrice,
                            }
                        }
                        let ResultPush = await Buyers.updateOne(query, changespush).lean().exec();
                    }
                }
                let ResultFinal = await Buyers.findOne(query).select('-_id Cart_Total_Items Cart_Total_Price').lean().exec()
                resolve({ success: true, extras: { Status: sttus, Data: ResultFinal, Cart_Information: cartData } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.List_All_Products_For_Buyer = (values, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let query = {
                    Status: true
                };
                let sortOptions = {
                    Product_Name: 1
                }
                if (values.Trending_Available != undefined && values.Trending_Available != null) {
                    // query = {
                    //     Trending_Available: values.Trending_Available,
                    //     Status: true
                    // };
                    query.Trending_Available = await values.Trending_Available
                }
                // 

                let Count = await Products.countDocuments(query).lean()
                let Result = await Products.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -Product_Price_Divisions -Product_Image_Data').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                let Data = []
                async.eachSeries(Result, async (item, callback) => {
                    try {
                        if (item.Unique_ProductID == "" || item.Unique_ProductID == null || item.Unique_ProductID == undefined) {
                            item.Unique_ProductID = (item.Product_Name.toUpperCase() + await CommonController.Random_OTP_Number()).split(" ").join("")
                            let q = {
                                ProductID: item.ProductID
                            };
                            let c = {
                                $set: {
                                    Unique_ProductID: item.Unique_ProductID
                                }
                            }
                            let update = await Products.updateOne(q, c).lean().exec()
                        }
                        let ImageData = await CommonController.Common_Image_Response_Single_Image(true, item.Image_Data);
                        let Product_Quantity = 0
                        item.Image_Data = ImageData
                        if (BuyerData != '') {
                            let Result = BuyerData.Cart_Information.filter(function (ResultTemp) {
                                if (item.ProductID == ResultTemp.ProductID) {
                                    Product_Quantity = ResultTemp.Product_Quantity;
                                }
                            });
                        }
                        item.Product_Quantity = Product_Quantity;
                        Data.push(item);
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async (err) => {
                    if (err) reject(err);
                    resolve({ success: true, extras: { Count: Count, Data: Data, BuyerData: BuyerData } })
                });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.List_All_Products_For_Buyer_Category = (values, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let query = {}
                if (values.CategoryID == '') {
                    query = {
                        Status: true
                    };
                } else {
                    query = {
                        'Product_Category.CategoryID': values.CategoryID,
                        Status: true
                    };
                }
                let sortOptions = {
                    created_at: -1
                }
                let Count = await Products.countDocuments(query).lean()
                let Result = await Products.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -Product_Price_Divisions -Product_Image_Data').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                let Data = []
                async.eachSeries(Result, async (item, callback) => {
                    try {
                        if (item.Unique_ProductID == "" || item.Unique_ProductID == null || item.Unique_ProductID == undefined) {
                            item.Unique_ProductID = (item.Product_Name.toUpperCase() + await CommonController.Random_OTP_Number()).split(" ").join("")
                            let q = {
                                ProductID: item.ProductID
                            };
                            let c = {
                                $set: {
                                    Unique_ProductID: item.Unique_ProductID
                                }
                            }
                            let update = await Products.updateOne(q, c).lean().exec()
                        }
                        let ImageData = await CommonController.Common_Image_Response_Single_Image(true, item.Image_Data);
                        let Product_Quantity = 0
                        item.Image_Data = ImageData
                        if (BuyerData != '') {
                            let Result = BuyerData.Cart_Information.filter(function (ResultTemp) {
                                if (item.ProductID == ResultTemp.ProductID) {
                                    Product_Quantity = ResultTemp.Product_Quantity;
                                }
                            });
                        }
                        item.Product_Quantity = Product_Quantity;
                        Data.push(item);
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async (err) => {
                    if (err) reject(err);
                    resolve({ success: true, extras: { Count: Count, Data: Data, BuyerData: BuyerData } })
                });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.List_Buyer_Address = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let query = {
                    BuyerID: values.BuyerID,
                    Status: true
                }
                let sortOptions = {
                    Address_Default: -1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                let Count = await Buyer_Address_Log.countDocuments(query).lean();
                let Result = await Buyer_Address_Log.find(query).select('-_id -__v').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                resolve({ success: true, extras: { Count: Count, Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Remove_Buyer_Address = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    AddressID: values.AddressID
                }
                let Result = await Buyer_Address_Log.findOne(query).lean();
                if (Result != null) {
                    let changes = {
                        $set: {
                            Status: false,
                            updated_at: new Date()
                        }
                    }
                    let UpdateData = await Buyer_Address_Log.updateOne(query, changes).lean();
                    resolve({ success: true, extras: { Status: "Address Remove Successfully" } })
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_ADDRESS } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Edit_Buyer_Address = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                if (values.Address_Type == 1 || values.Address_Type == 2 || values.Address_Type == 3) {
                    let query = {
                        AddressID: values.AddressID
                    }
                    let Result = await Buyer_Address_Log.findOne(query).lean();
                    if (Result != null) {
                        if (values.Address_Default == true) {
                            let query = {
                                BuyerID: values.BuyerID,
                            }
                            let changes = {
                                Address_Default: false
                            }
                            let options = {
                                multi: true
                            }
                            let UpdateData = await Buyer_Address_Log.updateMany(query, changes, options).lean();
                        }
                        let changes = {
                            $set: {
                                Name: values.Name,
                                PhoneNumber: values.PhoneNumber,
                                Flat_No: values.Flat_No,
                                Plot_No: values.Plot_No,
                                Postal_Code: values.Postal_Code,
                                State: values.State,
                                City: values.City,
                                Land_Mark: values.Land_Mark,
                                Address_Type: values.Address_Type, //1- Home, 2- Work, 3- Other
                                Address_Default: values.Address_Default,
                                Latitude: parseFloat(values.Latitude),
                                Longitude: parseFloat(values.Longitude),
                                Point: [parseFloat(values.Longitude), parseFloat(values.Latitude)],
                                updated_at: new Date()
                            }
                        }
                        let UpdateData = await Buyer_Address_Log.updateOne(query, changes).lean();
                        resolve({ success: true, extras: { Status: "Address Updated Successfully" } })
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.INVALID_ADDRESS } });
                    }
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_ADDRESS_TYPE } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Add_Buyer_Address = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                if (values.Address_Type == 1 || values.Address_Type == 2 || values.Address_Type == 3) {
                    if (values.Address_Default == true) {
                        let query = {
                            BuyerID: values.BuyerID,
                        }
                        let changes = {
                            Address_Default: false
                        }
                        let options = {
                            multi: true
                        }
                        let UpdateData = await Buyer_Address_Log.updateMany(query, changes, options).lean();
                    }
                    let Data = {
                        AddressID: uuid.v4(),
                        BuyerID: values.BuyerID,
                        Name: values.Name,
                        PhoneNumber: values.PhoneNumber,
                        Flat_No: values.Flat_No,
                        Plot_No: values.Plot_No,
                        Postal_Code: values.Postal_Code,
                        State: values.State,
                        City: values.City,
                        Land_Mark: values.Land_Mark,
                        Address_Type: values.Address_Type, //1- Home, 2- Work, 3- Other
                        Address_Default: values.Address_Default,
                        Status: true,
                        Latitude: parseFloat(values.Latitude),
                        Longitude: parseFloat(values.Longitude),
                        Point: [parseFloat(values.Longitude), parseFloat(values.Latitude)],
                        created_at: new Date(),
                        updated_at: new Date()
                    }
                    let saveData = await Buyer_Address_Log(Data).save();
                    resolve({ success: true, extras: { Status: "Address Created Successfully" } })
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_ADDRESS_TYPE } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Buyer_Update_Profile = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: values.BuyerID
                }
                let changes = {
                    $set: {
                        Buyer_Name: values.Buyer_Name,
                        Buyer_PhoneNumber: values.Buyer_PhoneNumber,
                        updated_at: new Date()
                    }
                }
                let UpdateData = await Buyers.updateOne(query, changes).lean()
                resolve({ success: true, extras: { Status: "Profile Updated Successfully" } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Buyer_Register = (values, ReferralData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: values.BuyerID
                }
                let ref = false;
                if (values.Ref_PhoneNumber != '') { ref = true }
                let changes = {
                    $set: {
                        Buyer_Name: values.Buyer_Name,
                        Ref_PhoneNumber: values.Ref_PhoneNumber,
                        Buyer_Basic_Info_Available: true,
                        Ref_PhoneNumber_Available: ref,
                        ref_Data: ReferralData,
                        updated_at: new Date()
                    }
                }
                console.log("7000---->referal values phoneNumber-- " + JSON.stringify(values.Ref_PhoneNumber))
                console.log("7001---->referallData-- " + JSON.stringify(ReferralData.Buyer_PhoneNumber))
                let UpdateData = await Buyers.updateOne(query, changes).lean();

                if (ReferralData.BuyerID != "") {
                    console.log("7003---->referal values phoneNumber-- " + JSON.stringify(ReferralData.Buyer_PhoneNumber))

                    let query = {
                        BuyerID: values.BuyerID
                    }
                    let BuyrData = await Buyers.findOne(query).select('BuyerID Buyer_Name Buyer_PhoneNumber').lean().exec();
                    console.log("7011----saving data in >-- " + JSON.stringify(BuyrData.Buyer_PhoneNumber))

                    let queryxv = {
                        BuyerID: ReferralData.BuyerID
                    }
                    let PW_Changes = {
                        $push: {
                            DirectRef: BuyrData
                        },
                        $set: {
                            updated_at: new Date()
                        }
                    }
                    let UpdateData = await Buyers.updateOne(queryxv, PW_Changes).lean().exec()
                }



                resolve({ success: true, extras: { Status: "Profile Updated Successfully" } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Validate_Buyer_OTP = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let obj1 = {
                    $ne: null
                };
                let obj2 = {
                    $eq: values.OTP
                }
                let OTP_Query = (config.SECRET_OTP_CODE === String(values.OTP)) ? obj1 : obj2;
                let query = {
                    CountryCode: values.Buyer_CountryCode,
                    PhoneNumber: values.Buyer_PhoneNumber,
                    OTP: OTP_Query,
                    Latest: true
                };
                let Result = await User_OTPS.findOne(query).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_OTP } });
                    let Data = {
                        CountryCode: values.Buyer_CountryCode,
                        PhoneNumber: values.Buyer_PhoneNumber,
                        Time: new Date()
                    };
                    let SaveResult = await User_OTP_Tries(Data).save();
                } else {
                    resolve("OTP Verified Successfully");
                    let RemoveTries = await User_OTP_Tries.deleteMany({
                        CountryCode: values.Buyer_CountryCode,
                        PhoneNumber: values.Buyer_PhoneNumber,
                    }).lean();
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Validate_OTP_Withdraw = (values, OTP) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let obj1 = {
                    $ne: null
                };
                let obj2 = {
                    $eq: OTP
                }
                let OTP_Query = (config.SECRET_OTP_CODE === String(OTP)) ? obj1 : obj2;
                let query = {
                    CountryCode: values.Buyer_CountryCode,
                    PhoneNumber: values.Buyer_PhoneNumber,
                    OTP: OTP_Query,
                    Latest: true
                };
                let Result = await User_Withdraw_OTPS.findOne(query).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_OTP } });
                    let Data = {
                        CountryCode: values.Buyer_CountryCode,
                        PhoneNumber: values.Buyer_PhoneNumber,
                        Time: new Date()
                    };
                    let SaveResult = await User_Withdraw_OTP_Tries(Data).save();
                } else {
                    resolve("OTP Verified Successfully");
                    let RemoveTries = await User_Withdraw_OTP_Tries.deleteMany({
                        CountryCode: values.Buyer_CountryCode,
                        PhoneNumber: values.Buyer_PhoneNumber,
                    }).lean();
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Check_for_User_OTP_Tries_Count = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let time = moment().subtract(config.OTP_TRIES_COUNT_TIME_IN_MINUTES, 'minutes').toDate();
                let query = {
                    CountryCode: values.Buyer_CountryCode,
                    PhoneNumber: values.Buyer_PhoneNumber,
                    Time: {
                        $gte: time
                    }
                };
                let Count = await User_OTP_Tries.countDocuments(query).lean().exec();
                if (Count <= config.OTP_TRIES_COUNT) {
                    resolve('Validated Successfully');
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.OTP_TRIES_EXCEED_TRY_AFTER_SOME_TIME } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Generate_Buyer_OTP_Send_Message = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let OTP = await CommonController.Random_OTP_Number();
                let Data = {
                    CountryCode: values.Buyer_CountryCode,
                    PhoneNumber: values.Buyer_PhoneNumber,
                    OTP: OTP,
                    Latest: true,
                    Time: new Date()
                }
                let SaveResult = await User_OTPS(Data).save();
                resolve({ success: true, extras: { Status: "OTP Sent Successfully" } })
                let PhoneNumber = `${values.Buyer_CountryCode}${values.Buyer_PhoneNumber}`;
                let MsgData = 'Welcome To Dogemo. OTP for login is ' + OTP + ' Do not share OTP with anyone for security reasons.  \n --Thank you,  \n DOGEMO Team'
                let OTPStatus = await MSG91Controller.Send_OTP(PhoneNumber, OTP);
                let query = {
                    CountryCode: values.Buyer_CountryCode,
                    PhoneNumber: values.Buyer_PhoneNumber,
                    OTP: { $ne: OTP }
                };
                let changes = {
                    Latest: false
                };
                let UpdatedStatus = await User_OTPS.updateMany(query, changes).lean();
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Check_for_User_OTP_Tries_Count_Withdraw = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let time = moment().subtract(config.OTP_TRIES_COUNT_TIME_IN_MINUTES, 'minutes').toDate();
                let query = {
                    CountryCode: values.Buyer_CountryCode,
                    PhoneNumber: values.Buyer_PhoneNumber,
                    Time: {
                        $gte: time
                    }
                };
                let Count = await User_Withdraw_OTP_Tries.countDocuments(query).lean().exec();
                if (Count <= config.OTP_TRIES_COUNT) {
                    resolve('Validated Successfully');
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.OTP_TRIES_EXCEED_TRY_AFTER_SOME_TIME } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Generate_OTP_Send_Message_Withdraw = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let OTP = await CommonController.Random_OTP_Number();
                let Data = {
                    CountryCode: values.Buyer_CountryCode,
                    PhoneNumber: values.Buyer_PhoneNumber,
                    OTP: OTP,
                    Latest: true,
                    Time: new Date()
                }
                let SaveResult = await User_Withdraw_OTPS(Data).save();
                resolve({ success: true, extras: { Status: "OTP Sent Successfully" } })
                let PhoneNumber = `${values.Buyer_CountryCode}${values.Buyer_PhoneNumber}`;
                let MsgData = 'OTP for Withdraw Amount is ' + OTP + ' Do not share OTP with anyone for security reasons.  \n --Thank you,  \n DOGEMO Team'
                let OTPStatus = await MessagesController.Send_SMS(PhoneNumber, OTP);
                let query = {
                    CountryCode: values.Buyer_CountryCode,
                    PhoneNumber: values.Buyer_PhoneNumber,
                    OTP: { $ne: OTP }
                };
                let changes = {
                    Latest: false
                };
                let UpdatedStatus = await User_Withdraw_OTPS.updateMany(query, changes).lean();
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Check_for_OTP_Count = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let time = moment().subtract(config.OTP_COUNT_TIME_IN_MINUTES, 'minutes').toDate();
                let query = {
                    CountryCode: values.Buyer_CountryCode,
                    PhoneNumber: values.Buyer_PhoneNumber,
                    Time: {
                        $gte: time
                    }
                };
                let Count = await User_OTPS.countDocuments(query).lean();
                if (Count <= config.OTP_COUNT) {
                    resolve('Validated Successfully')
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.OTP_REQUEST_EXCEED_TRY_AFTER_SOME_TIME } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Check_for_OTP_Count_Withdraw = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let time = moment().subtract(config.OTP_COUNT_TIME_IN_MINUTES, 'minutes').toDate();
                let query = {
                    CountryCode: values.Buyer_CountryCode,
                    PhoneNumber: values.Buyer_PhoneNumber,
                    Time: {
                        $gte: time
                    }
                };
                let Count = await User_Withdraw_OTPS.countDocuments(query).lean();
                if (Count <= config.OTP_COUNT) {
                    resolve('Validated Successfully')
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.OTP_REQUEST_EXCEED_TRY_AFTER_SOME_TIME } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


ShopController.Shop_Get_All_Product_Stock_Logs = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    ShopID: values.ShopID,
                    ProductID: values.ProductID
                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    created_at: -1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                let Result = await Shop_Product_Stock_Logs.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                resolve({ success: true, extras: { Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Shop_List_All_Wallet_Logs_Date_Filter = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Start_Date = moment(values.Start_Date, config.Take_Date_Format).subtract(330, 'minutes').toDate();
                let End_Date = moment(values.End_Date, config.Take_Date_Format).subtract(330, 'minutes').add(1, 'day').subtract(1, 'ms').toDate();
                let query = {
                    ShopID: values.ShopID,
                    Time: {
                        $gte: Start_Date,
                        $lte: End_Date
                    }
                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    Time: 1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                let Result = await Shop_Share_Logs.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                resolve({ success: true, extras: { Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


ShopController.Shop_List_All_Wallet_Logs = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    ShopID: values.ShopID
                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    Time: -1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                let Result = await Shop_Share_Logs.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                resolve({ success: true, extras: { Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Shop_Purchase_Ordered_Delivered_Process_Update_Stocks = (PurchaseData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                async.eachSeries(PurchaseData.Cart_Information, async (item, callback) => {
                    try {
                        let fndupdquery = {
                            ShopID: PurchaseData.ShopID,
                            ProductID: item.ProductID
                        };
                        let fndupdchanges = {
                            $set: {
                                Status: true
                            },
                            $inc: {
                                Shop_Available_Stock: item.Product_Quantity
                            }
                        };
                        let fndupdoptions = {
                            upsert: true,
                            setDefaultsOnInsert: true,
                            new: true
                        }
                        let findupdateData = await Shop_Product_Stocks.findOneAndUpdate(fndupdquery, fndupdchanges, fndupdoptions).select('-_id -__v').lean();
                        let Data = {
                            ReferenceID: uuid.v4(),
                            ShopID: PurchaseData.ShopID,
                            ProductID: item.ProductID,
                            OperationType: 3,
                            OperationInput: item.Product_Quantity,
                            Data: PurchaseData,
                            created_at: new Date(),
                            updated_at: new Date()
                        }
                        let SaveResult = await Shop_Product_Stock_Logs(Data).save();
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async (err) => {
                    if (err) console.error(err);
                    resolve("All Stocks Updated in Stocks");
                });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Shop_Purchase_Ordered_Delivered = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    PurchaseID: values.PurchaseID
                };
                let changes = {
                    $set: {
                        PurchaseStatus: 5,
                        updated_at: new Date()
                    },
                    $push: {
                        PurchaseLogs: {
                            PurchaseStatus: 5,
                            Description: values.Description,
                            Time: new Date()
                        }
                    }
                };
                let UpdatedStatus = await Shop_Purchases.updateMany(query, changes).lean();
                resolve({ success: true, extras: { Status: "Purchase Order Delivered Successfully" } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Shop_Purchase_Ordered_Delivered_Validate_Status = (PurchaseData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                if (PurchaseData.PurchaseStatus == 5) {
                    reject({ success: false, extras: { msg: ApiMessages.PURCHASE_ALREADY_DELIVERED } })
                } else if (PurchaseData.PurchaseStatus == 3 || PurchaseData.PurchaseStatus == 4) {
                    resolve("Validate Successfully")
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.PURCHASE_ORDER_NOT_SHIPPED } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


ShopController.Shop_List_All_Purchases = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    ShopID: values.ShopID,
                    Status: true
                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    created_at: -1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                let Result = await Shop_Purchases.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                resolve({ success: true, extras: { Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Shop_Purchase_Stocks = (values, Cart_Information, Total_Amount, ShopData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let SData = {
                    PurchaseID: uuid.v4(),
                    PurchaseNumber: await CommonController.Common_Unique_String(),
                    ShopID: values.ShopID,
                    Cart_Information: Cart_Information,
                    Total_Amount: Total_Amount,
                    PurchaseStatus: 1,
                    PurchaseLogs: {
                        PurchaseStatus: 1,
                        Description: "Stock Purchase",
                        Time: new Date()
                    },
                    created_at: new Date(),
                    updated_at: new Date()
                };
                let PurchaseData = await Shop_Purchases(SData).save();
                PurchaseData = await JSON.parse(JSON.stringify(PurchaseData));
                PurchaseData.Shop_Name = ShopData.Shop_Name;
                PurchaseData.Shop_CountryCode = ShopData.Shop_CountryCode;
                PurchaseData.Shop_PhoneNumber = ShopData.Shop_PhoneNumber;
                let Amount = PurchaseData.Total_Amount;
                let Data = {
                    LogID: uuid.v4(),
                    ShopID: values.ShopID,
                    Type: 4, //Shop Money Debited for Stcok Purchase
                    Amount: Amount,
                    Data: PurchaseData,
                    Time: new Date()
                };
                let SaveResult = await Shop_Share_Logs(Data).save();
                let fquery = {
                    ShopID: values.ShopID,
                };
                let fchanges = {
                    $set: {
                        updated_at: new Date()
                    },
                    $inc: {
                        Withdrawn_Amount: Amount,
                        Available_Amount: Amount * -1
                    }
                };
                let foptions = {
                    new: true
                };
                let UpdateData = await Shops.findOneAndUpdate(fquery, fchanges, foptions).lean();
                //Credit Amount to Company
                let CData = {
                    LogID: uuid.v4(),
                    Type: 1, //Credited Shop Purchase Stock Amount
                    Amount: Amount,
                    Data: PurchaseData,
                    Time: new Date()
                };
                let CSaveResult = await Company_Shop_Purhase_Share_Logs(CData).save();
                let cquery = {

                };
                let cchanges = {
                    $inc: {
                        Available_Amount: Amount,
                        Total_Amount: Amount
                    }
                };
                let coptions = {
                    upsert: true,
                    setDefaultsOnInsert: true,
                    new: true
                };
                let CUpdateData = await Company_Shop_Purhase_Share.findOneAndUpdate(cquery, cchanges, coptions).lean();
                resolve({ success: true, extras: { Status: "Stocks Purchase Successfully" } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Update_Product_Stock_in_Admin_Store = (Cart_Information) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                async.eachSeries(Cart_Information, async (item, callback) => {
                    try {
                        let query = {
                            ProductID: item.ProductID,
                        };
                        let changes = {
                            $inc: {
                                Product_Quantity: item.Product_Quantity * -1
                            },
                            $set: {
                                updated_at: new Date()
                            }
                        }
                        let SaveData = await Products.updateOne(query, changes).lean().exec();
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, (err) => {
                    if (err) reject(err);
                    resolve("Updated Successfully");
                })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Shop_Purchase_Stocks_Validate_Shop_and_Cart_Amount = (Total_Amount, ShopData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                if (Total_Amount <= ShopData.Available_Amount) {
                    resolve("Validated Successfully")
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INSUFFICIENT_BALANCE } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Shop_Purchase_Stocks_Validate_Cart_Information = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Data = [];
                let Total_Amount = 0;
                async.eachSeries(values.Cart_Information, async (item, callback) => {
                    try {
                        if (
                            item.ProductID != null
                            && item.Product_Quantity != null && isFinite(item.Product_Quantity)
                        ) {
                            let ProductData = await CommonController.Check_For_Product(item);
                            if (ProductData.Product_Quantity < item.Product_Quantity) {
                                throw { success: false, extras: { msg: ApiMessages.STOCK_NOT_AVAILABLE } };
                            } else {
                                item = Object.assign(item, ProductData);
                                item.Product_Sub_Total = parseInt(item.Product_Quantity) * item.Product_Price;
                                Total_Amount += item.Product_Sub_Total;
                                Data.push(item);
                            }
                            callback();
                        } else {
                            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
                        }
                    } catch (error) {
                        callback(error);
                    }
                }, (err) => {
                    if (err) reject(err);
                    resolve([Data, Total_Amount]);
                })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Shop_Add_Amount_From_Razorpay_To_Wallet = (values, PaymentData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Amount = PaymentData.amount / 100;
                let Data = {
                    LogID: uuid.v4(),
                    ShopID: values.ShopID,
                    Type: 3, //Money Credited from Razorpay
                    Amount: Amount,
                    Data: PaymentData,
                    Time: new Date()
                };
                let SaveResult = await Shop_Share_Logs(Data).save();
                let fquery = {
                    ShopID: values.ShopID,
                };
                let fchanges = {
                    $set: {
                        updated_at: new Date()
                    },
                    $inc: {
                        Available_Amount: Amount,
                        Total_Amount: Amount
                    }
                };
                let foptions = {
                    new: true
                };
                let UpdateData = await Shops.findOneAndUpdate(fquery, fchanges, foptions).lean();
                resolve({ success: true, extras: { Status: "Amount Added to Wallet Successfully" } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Get_All_Products = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {

                };
                let sortOptions = {
                    created_at: -1
                }
                let Result = await Products.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().exec();
                resolve({ success: true, extras: { Data: Result } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Apply_Buyer_Offer = (values, OfferData, BuyerData, ShopData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let fndupdquery = {
                    OfferCode: OfferData.OfferCode
                };
                let fndupdchanges = {
                    $set: {
                        OfferStatus: 2, //Aplied or Redeemed
                        Whether_Offer_Applied: true,
                        Applied_Shop_Details: ShopData,
                        updated_at: new Date()
                    }
                };
                let fndupdoptions = {
                    upsert: true,
                    setDefaultsOnInsert: true,
                    new: true
                }
                OfferData = await Buyer_Offer_Message.findOneAndUpdate(fndupdquery, fndupdchanges, fndupdoptions).lean();
                OfferData.Buyer_Name = BuyerData.Buyer_Name;
                OfferData.Buyer_CountryCode = BuyerData.Buyer_CountryCode;
                OfferData.Buyer_PhoneNumber = BuyerData.Buyer_PhoneNumber;
                let Amount = OfferData.Buyer_Deduction_Amount;
                let Data = {
                    LogID: uuid.v4(),
                    ShopID: values.ShopID,
                    Type: 2, //Shop Buyer Offer Credit
                    Amount: Amount,
                    Data: OfferData,
                    Time: new Date()
                };
                let SaveResult = await Shop_Share_Logs(Data).save();
                let fquery = {
                    ShopID: values.ShopID,
                };
                let fchanges = {
                    $set: {
                        updated_at: new Date()
                    },
                    $inc: {
                        Available_Amount: Amount,
                        Total_Amount: Amount
                    }
                };
                let foptions = {
                    new: true
                };
                let UpdateData = await Shops.findOneAndUpdate(fquery, fchanges, foptions).lean();
                resolve({ success: true, extras: { Status: "Offer Applied Successfully" } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Apply_Buyer_Offer_Validate_Offer = (OfferData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Expiry_Date = moment(OfferData.Expiry_Date);
                let now = moment();

                if (OfferData.OfferStatus == 2) {
                    reject({ success: false, extras: { msg: ApiMessages.OFFER_CODE_ALREADY_USED } })
                } else {
                    if (now.isSameOrAfter(Expiry_Date) || OfferData.OfferStatus == 3) {
                        reject({ success: false, extras: { msg: ApiMessages.OFFER_CODE_EXPIRED } })
                    } else {
                        resolve("Validated Successfully");
                    }
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Fetch_Offer_Code_Details = (values, OfferData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let BuyerData = await CommonController.Check_for_Buyer(OfferData);
                OfferData.Buyer_Name = BuyerData.Buyer_Name;
                OfferData.Buyer_CountryCode = BuyerData.Buyer_CountryCode;
                OfferData.Buyer_PhoneNumber = BuyerData.Buyer_PhoneNumber;
                resolve({ success: true, extras: { Status: "OfferCode Details Fetched Successfully", Data: OfferData } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Shop_List_All_Bills = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    ShopID: values.ShopID,
                    Status: true
                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    created_at: -1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                let Count = await Shop_Bills.countDocuments(query).lean().exec();
                let Data = await Shop_Bills.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                async.eachSeries(Data, async (item, callback) => {
                    try {
                        let BuyerData = await CommonController.Check_for_Buyer(item);
                        item.Buyer_Name = BuyerData.Buyer_Name;
                        item.Buyer_CountryCode = BuyerData.Buyer_CountryCode;
                        item.Buyer_PhoneNumber = BuyerData.Buyer_PhoneNumber;
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, err => {
                    resolve({ success: true, extras: { Count: Count, Data: Data } })
                })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Shop_Generate_Bill_Total_Product_Share_Processing = (ShopData, BuyerData, BillData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Buyers_Network_Data = await ShopController.Find_Buyer_Hierarchy([], BuyerData.BuyerID);
                await Buyers_Network_Data.splice(0, 1);
                let No_of_Buyers_Network = Buyers_Network_Data.length;
                async.eachSeries(BillData.Cart_Information, async (item, callback) => {
                    try {
                        let Buyer_Network_Share_Processing = await ShopController.Shop_Generate_Bill_Buyer_Network_Share_Amount_Processing(Buyers_Network_Data, No_of_Buyers_Network, ShopData, BuyerData, BillData, item);
                        let Shop_Share_Processing = await ShopController.Shop_Generate_Bill_Shop_Share_Amount_Processing(Buyers_Network_Data, item.Total_Product_Share_Distributed_Amount.Shop_Amount, ShopData, BuyerData, BillData, item);
                        let Introducer_Share_Processing = await ShopController.Shop_Generate_Bill_Introducers_Share_Amount_Processing(Buyers_Network_Data, item.Total_Product_Share_Distributed_Amount.Introducer_Amount, ShopData, BuyerData, BillData, item);
                        let Company_Share_Processing = await ShopController.Shop_Generate_Bill_Company_Share_Amount_Processing(Buyers_Network_Data, item.Total_Product_Share_Distributed_Amount.Company_Amount, ShopData, BuyerData, BillData, item);
                        //let Trimer_Share_Processing = await ShopController.Shop_Generate_Bill_Trimer_Share_Amount_Processing(Buyers_Network_Data, item.Total_Product_Share_Distributed_Amount.Trimer_Amount, ShopData, BuyerData, BillData, item);
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async err => {
                    if (err) console.error(err);
                    let query = {
                        BillID: BillData.BillID
                    };
                    let changes = {
                        $set: {
                            Buyers_Share_Distribution: {
                                No_of_Buyers_Network: No_of_Buyers_Network,
                                Buyers_Network_Data: Buyers_Network_Data
                            },
                            updated_at: new Date()
                        }
                    };
                    let UpdatedStatus = await Shop_Bills.updateOne(query, changes).lean();
                    resolve("Successfully Processed the Bill Share in all Wallets");
                })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Shop_Generate_Bill_Update_Shop_Product_Stocks_After_Sale = (BillData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                async.eachSeries(BillData.Cart_Information, async (item, callback) => {
                    try {
                        let ShopID = BillData.ShopID;
                        let ProductID = item.ProductID;
                        let Product_Quantity = parseInt(item.Product_Quantity);
                        let Data = {
                            ReferenceID: uuid.v4(),
                            ShopID: ShopID,
                            ProductID: ProductID,
                            OperationType: 2,
                            OperationInput: Product_Quantity,
                            Data: BillData,
                            created_at: new Date(),
                            updated_at: new Date()
                        }
                        let LogResult = await Shop_Product_Stock_Logs(Data).save();
                        let query = {
                            ShopID: ShopID,
                            ProductID: ProductID,
                            Status: true
                        };
                        let changes = {
                            $inc: {
                                Shop_Available_Stock: (Product_Quantity * -1)
                            }
                        };
                        let UpdatedStatus = await Shop_Product_Stocks.updateMany(query, changes).lean();
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, (err) => {
                    if (err) reject(err);
                    resolve("Updated the Shop Sales Products Stocks");
                })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


// ShopController.Shop_Generate_Bill_Trimer_Share_Amount_Processing = (Buyers_Network_Data, Amount, ShopData, BuyerData, BillData, ProductCartData) => {
//     return new Promise((resolve, reject) => {
//         setImmediate(async () => {
//             try {
//                 let date = await CommonController.Common_Start_Date();
//                 let Trimer_DateID = date.toISOString()
//                 let query = {
//                     Date: date
//                 };
//                 let changes = {
//                     $set: {
//                         Trimer_DateID: Trimer_DateID
//                     },
//                     $inc: {
//                         Available_Amount: Amount,
//                         Total_Amount: Amount
//                     }
//                 };
//                 let options = {
//                     upsert: true,
//                     setDefaultsOnInsert: true,
//                     new: true
//                 };
//                 let UpdateData = await Trimer_Share.findOneAndUpdate(query, changes, options).lean();
//                 let Data = {
//                     LogID: uuid.v4(),
//                     Trimer_DateID: Trimer_DateID,
//                     Type: 1,
//                     Amount: Amount,
//                     Data: {
//                         BillID: BillData.BillID,
//                         BillNumber: BillData.BillNumber,
//                         ShopID: ShopData.ShopID,
//                         Shop_Name: ShopData.Shop_Name,
//                         Shop_CountryCode: ShopData.Shop_CountryCode,
//                         Shop_PhoneNumber: ShopData.Shop_PhoneNumber,
//                         BuyerID: BuyerData.BuyerID,
//                         Buyer_Name: BuyerData.Buyer_Name,
//                         Buyer_CountryCode: BuyerData.Buyer_CountryCode,
//                         Buyer_PhoneNumber: BuyerData.Buyer_PhoneNumber,
//                         Buyers_Network_Data: Buyers_Network_Data,
//                         ProductData: ProductCartData
//                     },
//                     Time: new Date()
//                 };
//                 let SaveResult = await Trimer_Share_Logs(Data).save();
//                 resolve("Successfully Processed the Trimer Share in Wallets");
//             } catch (error) {
//                 reject(await CommonController.Common_Error_Handler(error));
//             }
//         });
//     });
// }

ShopController.Shop_Generate_Bill_Company_Share_Amount_Processing = (Buyers_Network_Data, Amount, ShopData, BuyerData, BillData, ProductCartData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Data = {
                    LogID: uuid.v4(),
                    Type: 1,
                    Amount: Amount,
                    Data: {
                        BillID: BillData.BillID,
                        BillNumber: BillData.BillNumber,
                        ShopID: ShopData.ShopID,
                        Shop_Name: ShopData.Shop_Name,
                        Shop_CountryCode: ShopData.Shop_CountryCode,
                        Shop_PhoneNumber: ShopData.Shop_PhoneNumber,
                        BuyerID: BuyerData.BuyerID,
                        Buyer_Name: BuyerData.Buyer_Name,
                        Buyer_CountryCode: BuyerData.Buyer_CountryCode,
                        Buyer_PhoneNumber: BuyerData.Buyer_PhoneNumber,
                        Buyers_Network_Data: Buyers_Network_Data,
                        ProductData: ProductCartData
                    },
                    Time: new Date()
                };
                let SaveResult = await Company_Share_Logs(Data).save();
                let query = {

                };
                let changes = {
                    $inc: {
                        Available_Amount: Amount,
                        Total_Amount: Amount
                    }
                };
                let options = {
                    upsert: true,
                    setDefaultsOnInsert: true,
                    new: true
                };
                let UpdateData = await Company_Share.findOneAndUpdate(query, changes, options).lean();
                resolve("Successfully Processed the Company Share in Wallets");
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Shop_Generate_Bill_Introducers_Share_Amount_Processing = (Buyers_Network_Data, Total_Amount, ShopData, BuyerData, BillData, ProductCartData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Company_Amount = parseFloat(Total_Amount * config.TDS / 100);
                let Amount = parseFloat(Total_Amount - Company_Amount);

                let Data = {
                    LogID: uuid.v4(),
                    IntroducerID: ShopData.IntroducerID,
                    Type: 1,
                    Amount: Amount,
                    Data: {
                        BillID: BillData.BillID,
                        BillNumber: BillData.BillNumber,
                        ShopID: ShopData.ShopID,
                        Shop_Name: ShopData.Shop_Name,
                        Shop_CountryCode: ShopData.Shop_CountryCode,
                        Shop_PhoneNumber: ShopData.Shop_PhoneNumber,
                        BuyerID: BuyerData.BuyerID,
                        Buyer_Name: BuyerData.Buyer_Name,
                        Buyer_CountryCode: BuyerData.Buyer_CountryCode,
                        Buyer_PhoneNumber: BuyerData.Buyer_PhoneNumber,
                        Buyers_Network_Data: Buyers_Network_Data,
                        ProductData: ProductCartData
                    },
                    Time: new Date()
                };
                let SaveResult = await Introducer_Share_Logs(Data).save();
                let query = {
                    IntroducerID: ShopData.IntroducerID,
                };
                let changes = {
                    $set: {
                        updated_at: new Date()
                    },
                    $inc: {
                        Available_Amount: Amount,
                        Total_Amount: Amount
                    }
                };
                let options = {
                    new: true
                };
                let UpdateData = await Introducers.findOneAndUpdate(query, changes, options).lean();
                let Iquery = {
                    IntroducerID: ShopData.IntroducerID,
                }
                let Iresult = await Introducers.findOne(Iquery).lean().exec();
                let CData = {
                    LogID: uuid.v4(),
                    Type: 5, //5. credit Amount Introducter TDS
                    Amount: Company_Amount,
                    Data: {
                        BillID: BillData.BillID,
                        BillNumber: BillData.BillNumber,
                        ShopID: ShopData.ShopID,
                        Shop_Name: ShopData.Shop_Name,
                        Shop_CountryCode: ShopData.Shop_CountryCode,
                        Shop_PhoneNumber: ShopData.Shop_PhoneNumber,
                        IntroducerID: ShopData.IntroducerID,
                        Introducer_Name: Iresult.Introducer_Name,
                        Introducer_CountryCode: Iresult.Introducer_CountryCode,
                        Introducer_PhoneNumber: Iresult.Introducer_PhoneNumber,
                        Introducer_PAN: Iresult.Introducer_PAN,
                        Buyers_Network_Data: Buyers_Network_Data,
                        ProductData: ProductCartData
                    },
                    Time: new Date()
                }
                let iSaveResult = await Company_Share_Logs(CData).save();
                let queryx = {

                };
                let changesx = {
                    $inc: {
                        Available_Amount: Company_Amount,
                        Total_Amount: Company_Amount
                    }
                };
                let optionsx = {
                    upsert: true,
                    setDefaultsOnInsert: true,
                    new: true
                };
                let UpdateDatax = await Company_Share.findOneAndUpdate(queryx, changesx, optionsx).lean();

                //credit amount to IntroBuyer
                let IBquery = {
                    Buyer_CountryCode: Iresult.Introducer_CountryCode,
                    Buyer_PhoneNumber: Iresult.Introducer_PhoneNumber,
                }
                let IntroBuyerData = await Buyers.findOne(IBquery).lean().exec();
                if (IntroBuyerData != null) {
                    let IBchanges = {
                        $set: {
                            updated_at: new Date()
                        },
                        $inc: {
                            Available_Amount: Amount,
                            Total_Amount: Amount
                        }
                    };
                    let IBoptions = {
                        new: true
                    };
                    let UpdateData = await Buyers.findOneAndUpdate(IBquery, IBchanges, IBoptions).lean();
                    //maintain log
                    let Data = {
                        LogID: uuid.v4(),
                        BuyerID: BuyerData.BuyerID,
                        Type: 8, // Amount Credit for Introducer Share
                        Amount: Amount,
                        Data: {
                            BillID: BillData.BillID,
                            BillNumber: BillData.BillNumber,
                            ShopID: ShopData.ShopID,
                            Shop_Name: ShopData.Shop_Name,
                            Shop_CountryCode: ShopData.Shop_CountryCode,
                            Shop_PhoneNumber: ShopData.Shop_PhoneNumber,
                            BuyerID: BuyerData.BuyerID,
                            Buyer_Name: BuyerData.Buyer_Name,
                            Buyer_CountryCode: BuyerData.Buyer_CountryCode,
                            Buyer_PhoneNumber: BuyerData.Buyer_PhoneNumber
                        },
                        Time: new Date()
                    };
                    let SaveResult = await Buyer_Share_Logs(Data).save();
                }
                resolve("Successfully Processed the Introducer Share in Wallets");
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Shop_Generate_Bill_Shop_Share_Amount_Processing = (Buyers_Network_Data, Amount, ShopData, BuyerData, BillData, ProductCartData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Data = {
                    LogID: uuid.v4(),
                    ShopID: ShopData.ShopID,
                    Type: 1, //Shop Bill Credit
                    Amount: Amount,
                    Data: {
                        BillID: BillData.BillID,
                        BillNumber: BillData.BillNumber,
                        ShopID: ShopData.ShopID,
                        Shop_Name: ShopData.Shop_Name,
                        Shop_CountryCode: ShopData.Shop_CountryCode,
                        Shop_PhoneNumber: ShopData.Shop_PhoneNumber,
                        BuyerID: BuyerData.BuyerID,
                        Buyer_Name: BuyerData.Buyer_Name,
                        Buyer_CountryCode: BuyerData.Buyer_CountryCode,
                        Buyer_PhoneNumber: BuyerData.Buyer_PhoneNumber,
                        Buyers_Network_Data: Buyers_Network_Data,
                        ProductData: ProductCartData
                    },
                    Time: new Date()
                };
                let SaveResult = await Shop_Share_Logs(Data).save();
                let query = {
                    ShopID: ShopData.ShopID,
                };
                let changes = {
                    $set: {
                        updated_at: new Date()
                    },
                    $inc: {
                        Available_Amount: Amount,
                        Total_Amount: Amount
                    }
                };
                let options = {
                    new: true
                };
                let UpdateData = await Shops.findOneAndUpdate(query, changes, options).lean();
                resolve("Successfully Processed the Shops Share in Wallets");
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


ShopController.Shop_Generate_Bill_Buyer_Share_Amount_Processing = (BuyerID, Buyers_Network_Data, Amount, ShopData, BuyerData, BillData, ProductCartData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Data = {
                    LogID: uuid.v4(),
                    BuyerID: BuyerID,
                    Type: 1, //product Bill Amount
                    Amount: Amount,
                    Data: {
                        BillID: BillData.BillID,
                        BillNumber: BillData.BillNumber,
                        ShopID: ShopData.ShopID,
                        Shop_Name: ShopData.Shop_Name,
                        Shop_CountryCode: ShopData.Shop_CountryCode,
                        Shop_PhoneNumber: ShopData.Shop_PhoneNumber,
                        BuyerID: BuyerData.BuyerID,
                        Buyer_Name: BuyerData.Buyer_Name,
                        Buyer_CountryCode: BuyerData.Buyer_CountryCode,
                        Buyer_PhoneNumber: BuyerData.Buyer_PhoneNumber
                    },
                    Time: new Date()
                };
                let SaveResult = await Buyer_Share_Logs(Data).save();

                let PData = {
                    LogID: uuid.v4(),
                    BuyerID: BuyerID,
                    Type: 4, //product Bill Amount sharing 9 levels
                    Amount: Amount,
                    Data: {
                        BillID: BillData.BillID,
                        BillNumber: BillData.BillNumber,
                        ShopID: ShopData.ShopID,
                        Shop_Name: ShopData.Shop_Name,
                        Shop_CountryCode: ShopData.Shop_CountryCode,
                        Shop_PhoneNumber: ShopData.Shop_PhoneNumber,
                        BuyerID: BuyerData.BuyerID,
                        Buyer_Name: BuyerData.Buyer_Name,
                        Buyer_CountryCode: BuyerData.Buyer_CountryCode,
                        Buyer_PhoneNumber: BuyerData.Buyer_PhoneNumber
                    },
                    Time: new Date()
                };
                let PSaveResult = await Buyer_Purchase_Wallet_Logs(PData).save();

                let query = {
                    BuyerID: BuyerID
                };
                let changes = {
                    $set: {
                        updated_at: new Date()
                    },
                    $inc: {
                        // Available_Amount: Amount,
                        // Total_Amount: Amount
                        Purchace_Coupons_Amount_Available: Amount,
                        Purchace_Coupons_Amount_Total: Amount
                    }
                };
                let options = {
                    new: true
                };
                let UpdateData = await Buyers.findOneAndUpdate(query, changes, options).lean();
                let networkquery = {
                    BuyerID: BuyerID,
                    'Network_Information.BuyerID': BuyerData.BuyerID
                }
                let networkchanges = {
                    $inc: {
                        'Network_Information.$.Amount_Shared': Amount
                    }
                }
                let networkUpdate = await Buyers_Network.updateOne(networkquery, networkchanges).lean().exec()

                resolve("Successfully Processed the Buyer Share in Wallets");
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Shop_Generate_Bill_Buyer_Network_Share_Amount_Processing = (Buyers_Network_Data, No_of_Buyers_Network, ShopData, BuyerData, BillData, ProductCartData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Company_Buyer_Share_Amount = 0;
                let No_of_Buyer_Share_For_Company = 0;
                if (No_of_Buyers_Network >= config.max_buyer_network_heirarchy) {
                    //deleteMany excess childs
                    Buyers_Network_Data.length = config.max_buyer_network_heirarchy
                } else {
                    let Number_of_Empty = parseFloat(config.max_buyer_network_heirarchy - No_of_Buyers_Network) * -1
                    let DummyArray = ProductCartData.Total_Product_Share_Distributed_Amount.Buyer_Amount_Array
                    Company_Buyer_Share_Amount = DummyArray.slice(Number_of_Empty).reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
                }

                // let Each_Buyer_Amount = parseFloat(ProductCartData.Total_Product_Share_Distributed_Amount.Buyer_Amount / (config.no_of_buyer_share - 1));
                // let No_of_Buyer_Share_For_Company = (config.max_buyer_network_heirarchy - 1) - No_of_Buyers_Network;
                // let Company_Buyer_Share_Amount = Each_Buyer_Amount * No_of_Buyer_Share_For_Company;

                let i = 0;
                async.eachSeries(Buyers_Network_Data, async (BuyerID, callback) => {
                    try {
                        let Each_Buyer_Amount = ProductCartData.Total_Product_Share_Distributed_Amount.Buyer_Amount_Array[i];
                        i++;
                        let BuyerShareProcessing = await ShopController.Shop_Generate_Bill_Buyer_Share_Amount_Processing(BuyerID, Buyers_Network_Data, Each_Buyer_Amount, ShopData, BuyerData, BillData, ProductCartData);
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async err => {
                    try {
                        if (err) console.error(err);
                        resolve("Successfully Processed the Buyer Network Share in all Wallets");
                        if (No_of_Buyer_Share_For_Company > 0) {
                            let CompanyShareProcessing = await ShopController.Shop_Generate_Bill_Company_Buyer_Share_Amount_Processing(No_of_Buyer_Share_For_Company, Company_Buyer_Share_Amount, Buyers_Network_Data, Each_Buyer_Amount, ShopData, BuyerData, BillData, ProductCartData);
                        }
                    } catch (error) {

                    }
                })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Shop_Generate_Bill_Company_Buyer_Share_Amount_Processing = (No_of_Buyer_Share_For_Company, Amount, Buyers_Network_Data, Each_Buyer_Amount, ShopData, BuyerData, BillData, ProductCartData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Data = {
                    LogID: uuid.v4(),
                    Type: 2, //Credited Buyer Share Amount
                    Amount: Amount,
                    Data: {
                        No_of_Buyer_Share_For_Company: No_of_Buyer_Share_For_Company,
                        Each_Buyer_Amount: Each_Buyer_Amount,
                        Amount: Amount,
                        BillID: BillData.BillID,
                        BillNumber: BillData.BillNumber,
                        ShopID: ShopData.ShopID,
                        Shop_Name: ShopData.Shop_Name,
                        Shop_CountryCode: ShopData.Shop_CountryCode,
                        Shop_PhoneNumber: ShopData.Shop_PhoneNumber,
                        BuyerID: BuyerData.BuyerID,
                        Buyer_Name: BuyerData.Buyer_Name,
                        Buyer_CountryCode: BuyerData.Buyer_CountryCode,
                        Buyer_PhoneNumber: BuyerData.Buyer_PhoneNumber,
                        Buyers_Network_Data: Buyers_Network_Data,
                        ProductData: ProductCartData
                    },
                    Time: new Date()
                };
                let SaveResult = await Company_Share_Logs(Data).save();
                let query = {

                };
                let changes = {
                    $inc: {
                        Available_Amount: Amount,
                        Total_Amount: Amount
                    }
                };
                let options = {
                    upsert: true,
                    setDefaultsOnInsert: true,
                    new: true
                };
                let UpdateData = await Company_Share.findOneAndUpdate(query, changes, options).lean();
                resolve("Successfully Processed the Company Share in Wallets");
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


ShopController.Fetch_Buyer_Network_Detail = (BuyerID) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: BuyerID
                };
                let Result = await Buyers_Ultimate_Network.findOne(query).lean();
                resolve(Result);
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


ShopController.Find_Buyer_Hierarchy = (Data, BuyerID) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let NetworkData = await ShopController.Fetch_Buyer_Network_Detail(BuyerID);
                if (NetworkData != null) {
                    Data.push(BuyerID);
                    if (Data.length >= config.max_buyer_network_heirarchy || NetworkData.Parent_BuyerID == 'root') {
                        resolve(Data);
                    } else {
                        Data = await ShopController.Find_Buyer_Hierarchy(Data, NetworkData.Parent_BuyerID);
                        resolve(Data);
                    }
                } else {
                    resolve(Data);
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Shop_Generate_Bill_Delivery_Type_3 = (values, buyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                /////
                let query = {
                    ShopID: values.ShopID,
                    Status: true
                }
                let ShopData = await Shops.findOne(query).lean();
                if (ShopData == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_SHOP } });
                } else {
                    if (values.Cart_Information <= 0) {
                        reject({ success: false, extras: { msg: ApiMessages.CART_EMPTY } });
                    } else {
                        let Cart_Total_Price = 0;
                        let Cart_Total_Items = 0;
                        let CartData = [];
                        let CompanyAmount = 0;
                        let TAXX = 0;
                        async.eachSeries(values.Cart_Information, async (item, callback) => {
                            try {
                                let ProductQuery = {
                                    ProductID: item.ProductID
                                };
                                let ResultData = await Products.findOne(ProductQuery).lean().exec();
                                let Product_Sub_Total = parseFloat(ResultData.Product_Price) * parseInt(item.Product_Quantity)
                                Cart_Total_Price += Product_Sub_Total;
                                Cart_Total_Items += parseInt(item.Product_Quantity)
                                let Total_Product_Share_Distributed_Amount = await ShopController.Find_Total_Share_Distributed_Amount(Product_Sub_Total, ResultData.Product_Price_Divisions, ResultData.Product_Price_Data, item.Product_Quantity);
                                CompanyAmount += Total_Product_Share_Distributed_Amount.Company_Amount;
                                TAXX += parseFloat(Total_Product_Share_Distributed_Amount.Company_Amount * ResultData.Product_GST / 100);
                                let Cart_Information = {
                                    Product_Price_Divisions: ResultData.Product_Price_Divisions,
                                    Product_Price_Data: ResultData.Product_Price_Data,
                                    Total_Product_Share_Distributed_Amount: Total_Product_Share_Distributed_Amount,
                                    ProductID: ResultData.ProductID,
                                    Product_Name: ResultData.Product_Name,
                                    Product_Description: ResultData.Product_Description,
                                    Product_Price: parseFloat(ResultData.Product_Price),
                                    Product_Quantity: parseInt(item.Product_Quantity),
                                    Product_Sub_Total: parseFloat(Product_Sub_Total),
                                    ImageID: ResultData.Image_Data.ImageID,
                                }
                                CartData.push(Cart_Information);
                                callback();
                            } catch (error) {
                                callback(error);
                            }
                        }, async (err) => {
                            if (err) reject(err);
                            let carttax = parseFloat(TAXX.toFixed(2));
                            let finalprice = parseFloat(Cart_Total_Price + carttax);
                            let Order_Number = await CommonController.Random_12_Digit_Number();
                            let shopotp = await CommonController.Random_OTP_Number()
                            let TranxID = uuid.v4();
                            let oid = uuid.v4()
                            let Data = {
                                BuyerID: buyerData.BuyerID,
                                OrderID: oid,
                                Cart_Information: CartData,
                                Shop_Information: {
                                    ShopID: ShopData.ShopID,
                                    Shop_Name: ShopData.Shop_Name,
                                    Shop_CountryCode: ShopData.Shop_CountryCode,
                                    Shop_PhoneNumber: ShopData.Shop_PhoneNumber,
                                    Latitude: ShopData.Latitude,
                                    Longitude: ShopData.Longitude,
                                    Point: ShopData.Point,
                                    Address: ShopData.Address
                                },
                                Delivery_Type: 3,
                                Cart_Total_Items: Cart_Total_Items,
                                Cart_Total_Price: Cart_Total_Price,
                                Tax: carttax,
                                Discount: 0,
                                Cart_Final_Price: finalprice,
                                Status: true,
                                TransactionID: TranxID,
                                Payment_Type: 4,
                                Payment_Status: 4,
                                Order_Status: 1,
                                ShopOTP: shopotp,
                                Order_Report: {
                                    Title: "Order Received",
                                    Description: "Order Received",
                                    Time: new Date()
                                },
                                Order_Number: Order_Number, //12 digits randaom number
                                created_at: new Date(),
                                updated_at: new Date()
                            }
                            let FinalData = await Buyer_Orders(Data).save();

                            let DataReq = {
                                ApiKey: values.ApiKey,
                                ShopID: values.ShopID,
                                SessionID: values.SessionID,
                                OrderID: oid,
                                ShopOTP: shopotp
                            }
                            let OrderData = JSON.parse(JSON.stringify(DataReq));
                            let request_optionsdh = {
                                method: 'post',
                                baseURL: 'https://api.dogemo.com/app',
                                url: `/Complete_Buyer_Order`,
                                data: OrderData
                            };
                            let Responsedh = await Axios(request_optionsdh);
                            resolve({ success: true, extras: { Status: "Bill Generated Successfully" } })
                        });
                    }
                }
                /////
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Shop_Generate_Bill = (values, BuyerData, Cart_Information, Total_Amount) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Data = {
                    BillID: uuid.v4(),
                    BillNumber: await CommonController.Common_Unique_String(),
                    ShopID: values.ShopID,
                    BuyerID: BuyerData.BuyerID,
                    Cart_Information: Cart_Information,
                    Total_Amount: Total_Amount,
                    created_at: new Date(),
                    updated_at: new Date()
                };
                let SaveResult = await Shop_Bills(Data).save();
                resolve([{ success: true, extras: { Status: "Bill Generated Successfully", BillNumber: Data.BillNumber } }, JSON.parse(JSON.stringify(SaveResult))]);
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Find_Total_Share_Distributed_Amount = (Amount, Product_Price_Divisions, Product_Price_Data, Qty) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Total_Product_Share_Distributed_Amount = new Object();
                Total_Product_Share_Distributed_Amount.Introducer_Amount = parseFloat((Amount * Product_Price_Divisions.Introducer_Share) / 100);
                Total_Product_Share_Distributed_Amount.Buyer_Amount = parseFloat((Amount * Product_Price_Divisions.Buyer_Share) / 100);
                Total_Product_Share_Distributed_Amount.Shop_Amount = parseFloat((Amount * Product_Price_Divisions.Shop_Share) / 100);
                Total_Product_Share_Distributed_Amount.Company_Amount = parseFloat((Amount * Product_Price_Divisions.Company_Share) / 100);
                let Buyer_Price_Array = Product_Price_Data.Buyer_Price_Array;
                for (var i = 0; i < Buyer_Price_Array.length; i++) {
                    console.log("8477---->" + i + "--" + Buyer_Price_Array[i]);
                    Buyer_Price_Array[i] = parseFloat(Buyer_Price_Array[i]) * Qty;
                    console.log("8479---->" + i + "--" + Buyer_Price_Array[i]);
                }
                Total_Product_Share_Distributed_Amount.Buyer_Amount_Array = Buyer_Price_Array
                resolve(Total_Product_Share_Distributed_Amount);
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Shop_Generate_Bill_Validate_Cart_Information = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Data = [];
                let Total_Amount = 0;
                async.eachSeries(values.Cart_Information, async (item, callback) => {
                    try {
                        if (
                            item.ProductID != null
                            && item.Product_Quantity != null && isFinite(item.Product_Quantity)
                        ) {
                            let ProductData = await CommonController.Check_For_Product(item);
                            let ValidityStatus = await ShopController.Validate_Whether_Shop_Product_Quantity_Available(values.ShopID, item.ProductID, parseInt(item.Product_Quantity));
                            //item = Object.assign(item, ProductData);
                            item.Product_Sub_Total = parseInt(item.Product_Quantity) * item.Product_Price;
                            item.Total_Product_Share_Distributed_Amount = await ShopController.Find_Total_Share_Distributed_Amount(item.Product_Sub_Total, item.Product_Price_Divisions, item.Product_Price_Data, item.Product_Quantity);
                            Total_Amount += item.Product_Sub_Total;
                            Data.push(item);
                            callback();
                        } else {
                            throw { success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } };
                        }
                    } catch (error) {
                        callback(error);
                    }
                }, (err) => {
                    if (err) reject(err);
                    resolve([Data, Total_Amount]);
                })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Validate_Whether_Shop_Product_Quantity_Available = (ShopID, ProductID, Product_Quantity) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    ShopID: ShopID,
                    ProductID: ProductID,
                    Status: true
                };
                let Result = await Shop_Product_Stocks.findOne(query).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_PRODUCT } })
                } else {
                    if (Result.Shop_Available_Stock >= Product_Quantity) {
                        resolve("Validated Successfully")
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.INVALID_PRODUCT_QUANTITY } });
                    }
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Find_Network_Child_Array = (BuyerID, ALL_BuyerID_ARRAY, LastCount) => {
    return new Promise(async (resolve, reject) => {
        let query = {
            $or: [
                {
                    BuyerID: BuyerID
                },
                {
                    BuyerID: {
                        $in: ALL_BuyerID_ARRAY
                    }
                }
            ]
        };
        //
        let Data = await Buyers_Ultimate_Network.distinct('Network_BuyerID_Array', query).lean();



        console.log("8683---> entering find network child array --" + JSON.stringify(Data))

        let mainfind = ALL_BuyerID_ARRAY.find(ele => ele === BuyerID);
        if (mainfind === null || mainfind === undefined) {
            console.log("8687---> no manfind entered --")
            ALL_BuyerID_ARRAY.push(BuyerID);
        } else {
            console.log("8687---> yes manfind entered --" + JSON.stringify(mainfind))
        };


        async.eachSeries(Data, (item, callback) => {
            //
            let Available = ALL_BuyerID_ARRAY.find(ele => ele == item);
            if (Available === null || Available === undefined) {
                //
                console.log("8687---> no available entered --" + JSON.stringify(item))
                ALL_BuyerID_ARRAY.push(item);
                callback();
            } else {
                //
                console.log("8687---> yes available entered --" + JSON.stringify(Available))
                callback();
            }
        }, async err => {
            let Total_length = ALL_BuyerID_ARRAY.length;
            console.log("8709---> Total Lenght --" + JSON.stringify(Total_length) + " > " + JSON.stringify(LastCount))
            if (Total_length > LastCount) {
                //
                console.log("8711---> Total Lenght --" + JSON.stringify(Total_length) + " > " + JSON.stringify(LastCount))
                ALL_BuyerID_ARRAY = await ShopController.Find_Network_Child_Array(BuyerID, ALL_BuyerID_ARRAY, Total_length);
                console.log("8714---> ALL_BuyerID_ARRAY --" + JSON.stringify(ALL_BuyerID_ARRAY))
                resolve(ALL_BuyerID_ARRAY);
            } else if (Total_length == LastCount) {
                //
                console.log("8718---> Total Lenght --" + JSON.stringify(Total_length) + " = " + JSON.stringify(LastCount))

                ALL_BuyerID_ARRAY = await ShopController.Find_Network_Child_Array(BuyerID, ALL_BuyerID_ARRAY, Total_length + 1);
                console.log("8721---> ALL_BuyerID_ARRAY --" + JSON.stringify(ALL_BuyerID_ARRAY))

                resolve(ALL_BuyerID_ARRAY);
            } else {
                //
                console.log("8726---> ALL_BuyerID_ARRAY --" + JSON.stringify(ALL_BuyerID_ARRAY))

                resolve(ALL_BuyerID_ARRAY);
            }
        })
    })
}

ShopController.Buyer_Ultimate_Network_Processing_Referral_Buyer_Network_Processing = (UserData, ReferralData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: ReferralData.BuyerID
                };
                let ReferralNetworkData = await Buyers_Ultimate_Network.findOne(query).lean();
                // 
                //
                console.log("8723---> is less than --" + ReferralNetworkData.No_of_Network + "--R<N--" + config.max_buyer_ultimate_network_heirarchy)

                if (ReferralNetworkData.No_of_Network < config.max_buyer_ultimate_network_heirarchy) {

                    console.log("8727---->Entering for ultimate processing --" + JSON.stringify(UserData.Buyer_PhoneNumber))
                    //
                    console.log("8729---> is less than and true --" + config.max_buyer_ultimate_network_heirarchy + "---" + JSON.stringify(ReferralNetworkData))
                    let query1 = {
                        BuyerID: ReferralData.BuyerID
                    };
                    let changes1 = {
                        $set: {
                            updated_at: new Date()
                        },
                        $inc: {
                            No_of_Network: 1
                        },
                        $push: {
                            Network_BuyerID_Array: UserData.BuyerID,
                            Network_Information: UserData
                        }
                    };
                    let UpdatedStatus = await Buyers_Ultimate_Network.updateOne(query1, changes1).lean();
                    let data1 = {
                        BuyerID: UserData.BuyerID,
                        Network_Number: await CommonController.Generate_Counter_Sequence('Buyers_Ultimate_Network'),
                        Parent_BuyerID: ReferralNetworkData.BuyerID,
                        Buyer_Name: UserData.Buyer_Name,
                        Buyer_CountryCode: UserData.Buyer_CountryCode,
                        Buyer_PhoneNumber: UserData.Buyer_PhoneNumber,
                        // Whether_Company_Account: UserData.Whether_Company_Account,
                        created_at: new Date(),
                        updated_at: new Date()
                    }


                    let queryss = {
                        BuyerID: ReferralNetworkData.BuyerID
                    }
                    let BuyrData = await Buyers.findOne(queryss).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -RazorpayX_ContactID -Cart_Information').lean().exec();

                    let queryxv = {
                        BuyerID: UserData.BuyerID
                    }
                    let PW_Changes = {
                        $set: {
                            DownID: BuyrData
                        }
                    }
                    let UpdateDatas = await Buyers.updateOne(queryxv, PW_Changes).lean().exec()

                    console.log("8758---->Entering for ultimate processing and saving data --" + JSON.stringify(ReferralData.Buyer_PhoneNumber))
                    let SaveResult = await Buyers_Ultimate_Network(data1).save();



                    resolve("Network Information Processed");
                } else {
                    //
                    console.log("8763---> is less than and false --" + ReferralNetworkData.No_of_Network + "--R<N--" + config.max_buyer_ultimate_network_heirarchy)

                    let squery = {
                        BuyerID: {
                            $in: ReferralNetworkData.Network_BuyerID_Array
                        },
                        No_of_Network: {
                            $lt: config.max_buyer_ultimate_network_heirarchy
                        }
                    }
                    let Available_Network_Data = await Buyers_Ultimate_Network.findOne(squery).sort({ No_of_Network: 1 }).lean().exec();
                    //
                    console.log("8773---> is less than and false --" + JSON.stringify(Available_Network_Data))


                    if (Available_Network_Data == null) {
                        //
                        //free Child Network Available
                        let Child_ALL_BuyerID_ARRAY = await ShopController.Find_Network_Child_Array(ReferralData.BuyerID, [], 0);
                        //
                        //

                        let fndupdquery1 = {
                            Status: true,
                            BuyerID: {
                                $in: Child_ALL_BuyerID_ARRAY
                            },
                            No_of_Network: {
                                $lt: config.max_buyer_ultimate_network_heirarchy
                            }
                        };
                        let fndupdchanges1 = {
                            $set: {
                                updated_at: new Date()
                            },
                            $inc: {
                                No_of_Network: 1
                            },
                            $push: {
                                Network_BuyerID_Array: UserData.BuyerID,
                                Network_Information: UserData
                            }
                        };
                        let fndupdoptions1 = {
                            new: true,
                            sort: {
                                Network_Number: 1
                            }
                        }
                        let ParentDetail = await Buyers_Ultimate_Network.findOneAndUpdate(fndupdquery1, fndupdchanges1, fndupdoptions1).select('-_id -__v').lean();
                        let ParentDetail1 = await Buyers_Ultimate_Network.findOne(fndupdquery1).select('-_id -__v').lean();

                        // 
                        // 
                        // 
                        let data1 = {
                            BuyerID: UserData.BuyerID,
                            Network_Number: await CommonController.Generate_Counter_Sequence('Buyers_Ultimate_Network'),
                            Parent_BuyerID: ParentDetail1.BuyerID,
                            Buyer_Name: UserData.Buyer_Name,
                            Buyer_CountryCode: UserData.Buyer_CountryCode,
                            Buyer_PhoneNumber: UserData.Buyer_PhoneNumber,
                            // Whether_Company_Account: UserData.Whether_Company_Account,
                            created_at: new Date(),
                            updated_at: new Date()
                        }
                        let SaveResult = await Buyers_Ultimate_Network(data1).save();


                        let queryss = {
                            BuyerID: ParentDetail1.BuyerID
                        }
                        let BuyrData = await Buyers.findOne(queryss).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -RazorpayX_ContactID -Cart_Information').lean().exec();

                        let queryxv = {
                            BuyerID: UserData.BuyerID
                        }
                        let PW_Changes = {
                            $set: {
                                DownID: BuyrData
                            }
                        }
                        let UpdateDatas = await Buyers.updateOne(queryxv, PW_Changes).lean().exec()
                        //
                        resolve("Network Information Processed");
                    } else {
                        //
                        //free Child Network Available
                        let query1 = {
                            BuyerID: Available_Network_Data.BuyerID
                        };
                        let changes1 = {
                            $set: {
                                updated_at: new Date()
                            },
                            $inc: {
                                No_of_Network: 1
                            },
                            $push: {
                                Network_BuyerID_Array: UserData.BuyerID,
                                Network_Information: UserData
                            }
                        };
                        let UpdatedStatus = await Buyers_Ultimate_Network.updateOne(query1, changes1).lean();
                        let data1 = {
                            BuyerID: UserData.BuyerID,
                            Network_Number: await CommonController.Generate_Counter_Sequence('Buyers_Ultimate_Network'),
                            Parent_BuyerID: Available_Network_Data.BuyerID,
                            Buyer_Name: UserData.Buyer_Name,
                            Buyer_CountryCode: UserData.Buyer_CountryCode,
                            Buyer_PhoneNumber: UserData.Buyer_PhoneNumber,
                            // Whether_Company_Account: UserData.Whether_Company_Account,
                            created_at: new Date(),
                            updated_at: new Date()
                        }
                        let SaveResult = await Buyers_Ultimate_Network(data1).save();

                        let queryss = {
                            BuyerID: Available_Network_Data.BuyerID
                        }
                        let BuyrData = await Buyers.findOne(queryss).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -RazorpayX_ContactID -Cart_Information').lean().exec();

                        let queryxv = {
                            BuyerID: UserData.BuyerID
                        }
                        let PW_Changes = {
                            $set: {
                                DownID: BuyrData
                            }
                        }
                        let UpdateDatas = await Buyers.updateOne(queryxv, PW_Changes).lean().exec()
                        resolve("Network Information Processed");
                    }
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Register_Buyer_Validate_Referral_Phone_Number = (values, UserData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let ReferralData = {
                    BuyerID: "",
                    Buyer_Name: "",
                    Buyer_CountryCode: "",
                    Buyer_PhoneNumber: ""
                }
                if (values.Ref_PhoneNumber != "") {
                    values.PhoneNumber = values.Ref_PhoneNumber
                    ReferralData = await ShopController.Validate_Referral_Phone_Number(values, UserData);
                    resolve(ReferralData);
                } else {
                    resolve(ReferralData);
                }
            } catch (error) {
                reject(error);
            }
        });
    });
}

ShopController.Buyer_Ultimate_Network_Processing = (values, UserData, ReferralData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                // let query2 = {
                //     Buyer_PhoneNumber: values.Ref_PhoneNumber
                // };
                // let ReferralData = await Buyers.findOne(query2).lean();
                console.log("8892---->User of --" + JSON.stringify(UserData.Buyer_PhoneNumber))
                console.log("8891---->refe phone number entering processing" + JSON.stringify(ReferralData.Buyer_PhoneNumbera))


                if (ReferralData.BuyerID != '' && UserData.Referral_BuyerID != '') {
                    //Referral Network 
                    console.log("8904---->Entering for ultimate processing --" + JSON.stringify(UserData.Buyer_PhoneNumber))
                    console.log("8905---->Entering ref phone number processing" + JSON.stringify(ReferralData.Buyer_PhoneNumbera))

                    let ReferralNetworkCreation = await ShopController.Buyer_Ultimate_Network_Processing_Referral_Buyer_Network_Processing(UserData, ReferralData);
                    //let ReferralAccountSetting = await UserController.User_Network_Processing_Referral_Account_Setting_Yellow_Blue(ReferralData);
                    resolve("Network Information Processed");
                } else {
                    //Not Referral
                    //Check Whether Any Network Exist
                    let query1 = {
                        Status: true
                    }
                    let CheckAtleastOneUserNetworkExist = await Buyers_Ultimate_Network.findOne(query1).lean();
                    console.log("8908---->" + JSON.stringify(CheckAtleastOneUserNetworkExist))
                    if (CheckAtleastOneUserNetworkExist == null) {

                        console.log("8911---->" + JSON.stringify(CheckAtleastOneUserNetworkExist))
                        //Root or First Network User
                        let data1 = {
                            BuyerID: UserData.BuyerID,
                            Network_Number: await CommonController.Generate_Counter_Sequence('Buyers_Ultimate_Network'),
                            Buyer_Name: UserData.Buyer_Name,
                            Buyer_CountryCode: UserData.Buyer_CountryCode,
                            Buyer_PhoneNumber: UserData.Buyer_PhoneNumber,
                            // Whether_Company_Account: UserData.Whether_Company_Account,
                            created_at: new Date(),
                            updated_at: new Date()
                        }
                        let SaveResult = await Buyers_Ultimate_Network(data1).save();
                        resolve("Network Information Processed");
                    } else {
                        console.log("8935---->entering No referal Serchingfro root --" + JSON.stringify(UserData.Buyer_PhoneNumber))
                        console.log("8927---->")
                        //Not the Root User
                        let fndupdquery1 = {
                            Status: true,
                            No_of_Network: {
                                $lt: config.max_buyer_network_heirarchy
                            }
                        };
                        let fndupdchanges1 = {
                            $set: {
                                updated_at: new Date()
                            },
                            $inc: {
                                No_of_Network: 1
                            },
                            $push: {
                                Network_BuyerID_Array: UserData.BuyerID,
                                Network_Information: UserData
                            }
                        };
                        let fndupdoptions1 = {
                            new: true,
                            sort: {
                                Network_Number: 1
                            }
                        }
                        let ParentDetail = await Buyers_Ultimate_Network.findOneAndUpdate(fndupdquery1, fndupdchanges1, fndupdoptions1).select('-_id -__v').lean();
                        let data1 = {
                            BuyerID: UserData.BuyerID,
                            Network_Number: await CommonController.Generate_Counter_Sequence('Buyers_Ultimate_Network'),
                            Parent_BuyerID: ParentDetail.BuyerID,
                            Buyer_Name: UserData.Buyer_Name,
                            Buyer_CountryCode: UserData.Buyer_CountryCode,
                            Buyer_PhoneNumber: UserData.Buyer_PhoneNumber,
                            // Whether_Company_Account: UserData.Whether_Company_Account,
                            created_at: new Date(),
                            updated_at: new Date()
                        }
                        console.log("8935---->entered No root Found parent --" + JSON.stringify(ParentDetail.Buyer_PhoneNumber))

                        let SaveResult = await Buyers_Ultimate_Network(data1).save();


                        let queryss = {
                            BuyerID: ParentDetail.BuyerID
                        }
                        let BuyrData = await Buyers.findOne(queryss).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -RazorpayX_ContactID -Cart_Information').lean().exec();

                        let queryxv = {
                            BuyerID: UserData.BuyerID
                        }
                        let PW_Changes = {
                            $set: {
                                DownID: BuyrData
                            }
                        }
                        let UpdateDatas = await Buyers.updateOne(queryxv, PW_Changes).lean().exec()
                        resolve("Network Information Processed");
                    };
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Buyer_Network_Processing = (values, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: BuyerData.BuyerID
                };
                BuyerData = await Buyers.findOne(query).lean();
                let CheckBuyerNetworkExist = await Buyers_Network.findOne(query).lean();
                if (CheckBuyerNetworkExist == null) {
                    //Buyer Network Not Exist
                    let query2 = {
                        Buyer_PhoneNumber: values.Ref_PhoneNumber
                    };
                    let CheckAtleastOneBuyerNetworkExist = await Buyers_Network.findOne(query2).lean();
                    if (CheckAtleastOneBuyerNetworkExist == null) {
                        //Root or First Network Buyer
                        let Data = {
                            BuyerID: BuyerData.BuyerID,
                            Network_Number: await CommonController.Generate_Counter_Sequence('Buyers_Network'),
                            Buyer_Name: BuyerData.Buyer_Name,
                            Buyer_CountryCode: BuyerData.Buyer_CountryCode,
                            Buyer_PhoneNumber: BuyerData.Buyer_PhoneNumber,
                            created_at: new Date(),
                            updated_at: new Date()
                        }
                        let SaveResult = await Buyers_Network(Data).save();
                        resolve("Network Information Processed");
                    } else {
                        // Not a Root Buyer
                        let query3 = {
                            Buyer_PhoneNumber: values.Ref_PhoneNumber,
                            // No_of_Network: {
                            //     $lt: config.max_buyer_network_heirarchy
                            // },
                        };
                        let changes = {
                            $set: {
                                updated_at: new Date()
                            },
                            $inc: {
                                No_of_Network: 1
                            },
                            $push: {
                                Network_Information: BuyerData
                            }
                        };
                        let options = {
                            new: true,
                            sort: {
                                Network_Number: 1
                            }
                        };
                        let ParentDetail = await Buyers_Network.findOneAndUpdate(query3, changes, options).lean();
                        let Data = {
                            BuyerID: BuyerData.BuyerID,
                            Network_Number: await CommonController.Generate_Counter_Sequence('Buyers_Network'),
                            Parent_BuyerID: ParentDetail.BuyerID,
                            Buyer_Name: BuyerData.Buyer_Name,
                            Buyer_CountryCode: BuyerData.Buyer_CountryCode,
                            Buyer_PhoneNumber: BuyerData.Buyer_PhoneNumber,
                            created_at: new Date(),
                            updated_at: new Date()
                        }
                        let SaveResult = await Buyers_Network(Data).save();
                        resolve("Network Information Processed");
                    }
                } else {
                    //Buyer Network Already Exist
                    resolve("Network Information Processed")
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Find_or_Create_Buyer_Information = (values, DeviceData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Buyer_CountryCode: values.Buyer_CountryCode,
                    Buyer_PhoneNumber: values.Buyer_PhoneNumber
                };
                let Result = await Buyers.findOne(query).lean();
                let deviceID = '';
                let session = '';
                if (DeviceData != '') {
                    deviceID = DeviceData.DeviceID;
                    session = uuid.v4()
                } else {
                    if (Result == null) {
                        session = uuid.v4()
                    } else {
                        session = Result.SessionID
                        deviceID = Result.DeviceID
                    }
                }

                let deviceQuery = {
                    DeviceID: deviceID
                }
                let deviceChanges = {
                    $set: {
                        DeviceID: '',
                    }
                }
                let DeviceArray = await Buyers.updateMany(deviceQuery, deviceChanges).lean()
                if (Result == null) {
                    let Data = {
                        BuyerID: uuid.v4(),
                        SessionID: session,
                        DeviceID: deviceID,
                        Buyer_Name: values.Buyer_Name,
                        Buyer_CountryCode: values.Buyer_CountryCode,
                        Buyer_PhoneNumber: values.Buyer_PhoneNumber,
                        created_at: new Date(),
                        updated_at: new Date()
                    }
                    let SaveResult = await Buyers(Data).save();
                    let Resultxx = await Buyers.findOne(query).lean();
                    let RazorpayXContactStoring = await ShopController.Add_Update_RazorpayX_Buyer_Contact(Resultxx);
                    if (DeviceData != '') {
                        resolve({ success: true, extras: { Data: JSON.parse(JSON.stringify(SaveResult)) } });
                    } else {
                        resolve(JSON.parse(JSON.stringify(SaveResult)));
                    }
                } else {
                    let changes = {
                        $set: {
                            SessionID: session,
                            DeviceID: deviceID,
                            updated_at: new Date()
                        }
                    }
                    let updateDate = await Buyers.findOneAndUpdate(query, changes).lean();
                    let Resultx = await Buyers.findOne(query).lean();
                    if (DeviceData != '') {
                        resolve({ success: true, extras: { Data: JSON.parse(JSON.stringify(Resultx)) } });
                        let RazorpayXContactStoring = await ShopController.Add_Update_RazorpayX_Buyer_Contact(Resultx);
                    } else {
                        resolve(JSON.parse(JSON.stringify(Resultx)));
                    }
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Add_Update_RazorpayX_Buyer_Contact = (BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let RazorpayXContactData = await RazorpayController.Create_Razorpay_Buyer_Contact(BuyerData);
                let query = {
                    BuyerID: BuyerData.BuyerID
                };
                let changes = {
                    $set: {
                        Whether_RazorpayX_Buyer_Register: true,
                        RazorpayX_ContactID: RazorpayXContactData.id,
                        updated_at: new Date()
                    }
                };
                let UpdatedStatus = await Buyers.updateOne(query, changes).lean();
                resolve("Updated Successfully");
            } catch (error) {

                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Shop_Get_All_Product_Stocks = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    ShopID: values.ShopID,
                    Status: true
                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let Count = await Shop_Product_Stocks.countDocuments(query).lean().exec();
                let Result = await Shop_Product_Stocks.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings').lean().skip(toSkip).limit(toLimit).exec();
                async.eachSeries(Result, async (item, callback) => {
                    let ProductData = await CommonController.Check_For_Product(item);
                    item.Product_Name = ProductData.Product_Name;
                    item.Product_Price = ProductData.Product_Price;
                    item.Product_Price_Divisions = ProductData.Product_Price_Divisions;
                    item.Product_Image_Data = await CommonController.Common_Multiple_Image_Response(ProductData.Product_Image_Data);
                    item.Image_Data = await CommonController.Common_Image_Response_Single_Image(true, ProductData.Image_Data);

                    callback();
                }, err => {
                    if (err) reject(err);
                    resolve({ success: true, extras: { Count: Count, Data: Result } });
                })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Shop_Login = (values, ShopData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                if (values.Shop_Password == String(ShopData.Shop_Password)) {
                    let SessionID = uuid.v4();
                    delete ShopData._id;
                    delete ShopData.__v;
                    delete ShopData.updated_at;
                    delete ShopData.Shop_Password;
                    ShopData.SessionID = SessionID;
                    resolve({ success: true, extras: { Status: "Login Successfully", Data: ShopData } });
                    let query = {
                        ShopID: ShopData.ShopID
                    };
                    let changes = {
                        $set: {
                            SessionID: SessionID,
                            updated_at: new Date()
                        }
                    };
                    let UpdatedStatus = await Shops.updateOne(query, changes).lean();
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_PASSWORD } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Shop_Login_Validate_PhoneNumber_Already_Exist = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Shop_CountryCode: values.Shop_CountryCode,
                    Shop_PhoneNumber: values.Shop_PhoneNumber
                };
                let Result = await Shops.findOne(query).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.PHONE_NUMBER_NOT_REGISTERED } })
                } else {
                    if (Result.Status) {
                        resolve(Result);
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.VENDOR_SHOP_IS_INACTIVE } })
                    }
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Search_All_Products_And_Buyer_Category = (values, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let SearchValue = String(values.SearchValue);
                let RegexParam = {
                    $regex: SearchValue,
                    $options: "i"
                }

                let query = {}

                query.$or = [
                    {
                        "Product_Name": RegexParam
                    },
                    {
                        "Product_Category.Category_Name": RegexParam
                    }
                ]
                let sortOptions = {
                    created_at: -1
                }
                let Count = await Products.countDocuments(query).lean()
                let Result = await Products.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -Product_Price_Divisions -Product_Image_Data').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                let Data = []
                async.eachSeries(Result, async (item, callback) => {
                    try {
                        if (item.Unique_ProductID == "" || item.Unique_ProductID == null || item.Unique_ProductID == undefined) {
                            item.Unique_ProductID = (item.Product_Name.toUpperCase() + await CommonController.Random_OTP_Number()).split(" ").join("")
                            let q = {
                                ProductID: item.ProductID
                            };
                            let c = {
                                $set: {
                                    Unique_ProductID: item.Unique_ProductID
                                }
                            }
                            let update = await Products.updateOne(q, c).lean().exec()
                        }
                        let ImageData = await CommonController.Common_Image_Response_Single_Image(true, item.Image_Data);
                        let Product_Quantity = 0
                        item.Image_Data = ImageData
                        if (BuyerData != '') {
                            let Result = BuyerData.Cart_Information.filter(function (ResultTemp) {
                                if (item.ProductID == ResultTemp.ProductID) {
                                    Product_Quantity = ResultTemp.Product_Quantity;
                                }
                            });
                        }
                        item.Product_Quantity = Product_Quantity;
                        Data.push(item);
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async (err) => {
                    if (err) reject(err);
                    resolve({ success: true, extras: { Count: Count, Data: Data, BuyerData: BuyerData } })
                });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.List_All_States = (values, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let query = {
                    Status: true
                };
                if (Boolify(values.Whether_Search_Filter)) {
                    let Search_Input = String(values.Search);
                    let Search_Options = {
                        $regex: Search_Input,
                        $options: "i"
                    };
                    query.$or = [
                        {
                            State_Name: Search_Options,
                        },
                    ]
                }
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    SNo: 1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                let Count = await States.countDocuments(query).lean();
                let Result = await States.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                for (let item of Result) {
                   // if (item.StateID != null && item.StateID != "") {
                        item.Pincode_Count = await ShopController.Check_for_Pincode_Count(item);
                   // }
                }



                let User_Shop_Price_Amount = await AdminController.List_Common_App_Setting(values)
                    let User_Shop_price_Data = User_Shop_Price_Amount.extras.Data
                    let Used_Wallet_Amount = 0
                    let Remaining_Pay_Amount = (User_Shop_price_Data.State_Price.toFixed(2))
                    console.log("Remaining===========>", Remaining_Pay_Amount)
                    let Total_Shop_Amount = Remaining_Pay_Amount + Used_Wallet_Amount
                    // BuyerData.Available_Amount = 40
                    if (BuyerData.Cash_Coupons_Amount_Available > 0) {
                        if (Total_Shop_Amount <= BuyerData.Cash_Coupons_Amount_Available) {
                            // 
                            // Remaining_Wallet_Amount = BuyerData.Available_Amount - Total_Shop_Amount
                            Used_Wallet_Amount = Total_Shop_Amount
                            Remaining_Pay_Amount -=  parseFloat(Total_Shop_Amount)

                        } else if (Total_Shop_Amount > BuyerData.Cash_Coupons_Amount_Available) {
                            Remaining_Pay_Amount = Total_Shop_Amount - BuyerData.Cash_Coupons_Amount_Available
                            Used_Wallet_Amount =  parseFloat(BuyerData.Cash_Coupons_Amount_Available)
                            // Remaining_Wallet_Amount = 0
                        }
                    }

                    let Pincode_Payment_Data = {
                        Amount_Used_From_Wallet: parseFloat(Used_Wallet_Amount),
                        Remaining_Pay_Amount: parseFloat(Remaining_Pay_Amount),
                        Total_Amount: parseFloat(Total_Shop_Amount),
                        Total_Amount_Paid: parseFloat(Total_Shop_Amount)
                    }



                    console.log("9707--->" +JSON.stringify(Pincode_Payment_Data))
                resolve({ success: true, extras: { Count: Count, Data: Result,Pincode_Payment_Data } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Check_for_Pincode_Count = (values) => {
    return new Promise(async (resolve, reject) => {
        try {
            let currentDate = new Date()
            let Currenttime = currentDate.getTime()
            let MinusHours = 60 * 60 * 2000
            let existedDate = new Date(Currenttime - MinusHours)

            console.log("ExistedDate==================>", existedDate)

            let query = {
                StateID: values.StateID,
               
                $or: [{
                    Pincode_Status:0,
                    Up_Time: {
                        $gte: values.created_at
                    }
                },
                {Pincode_Status:1,
                    Up_Time: {
                        $lte: existedDate
                    }
                }
                ]

            }
            console.log("9722--->" +JSON.stringify(query))
            let Result = await Pincodes.countDocuments(query).lean().exec();
            if (Result != null) {
                resolve(Result);
            } else {
                reject({ success: false, extras: { code: 2, msg: ApiMessages.NO_DATA_FOUND } })
            }

        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    })
}



ShopController.Check_for_Pincode = (values) => {
    return new Promise(async (resolve, reject) => {
        try {
           
            let query = {
                PincodeID: values.PincodeID,
                

            }
            let Result = await Pincodes.findOne(query).select("Pincode Pincode_Status").lean().exec();
            if (Result != null) {
                resolve(Result);
            } else {
                reject({ success: false, extras: { code: 2, msg: ApiMessages.NO_DATA_FOUND } })
            }

        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    })
}

ShopController.List_All_Districts = (values, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let query = {
                    Status: true,
                    
                };
                if (Boolify(values.Whether_Search_Filter)) {
                    let Search_Input = String(values.Search);
                    let Search_Options = {
                        $regex: Search_Input,
                        $options: "i"
                    };
                    query.$or = [
                        {
                            District_Name: Search_Options,
                        },
                    ]
                }

                if (Boolify(values.Whether_State_Filter)) {
                    query.StateID = values.StateID
              }

                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    SNo: 1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                let Count = await Districts.countDocuments(query).lean();
                let Result = await Districts.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                for (let item of Result) {
                    if (item.DistrictID != null && item.DistrictID != "") {
                        item.Pincode_Count = await ShopController.Check_for_District_Pincode_Count(item);
                    }
                }



                let User_Shop_Price_Amount = await AdminController.List_Common_App_Setting(values)
                let User_Shop_price_Data = User_Shop_Price_Amount.extras.Data
                let Used_Wallet_Amount = 0
                let Remaining_Pay_Amount = (User_Shop_price_Data.District_Price.toFixed(2))
                console.log("Remaining===========>", Remaining_Pay_Amount)
                let Total_Shop_Amount = Remaining_Pay_Amount + Used_Wallet_Amount
                // BuyerData.Available_Amount = 40
                if (BuyerData.Cash_Coupons_Amount_Available > 0) {
                    if (Total_Shop_Amount <= BuyerData.Cash_Coupons_Amount_Available) {
                        // 
                        // Remaining_Wallet_Amount = BuyerData.Available_Amount - Total_Shop_Amount
                        Used_Wallet_Amount = parseFloat(Total_Shop_Amount)
                        Remaining_Pay_Amount -= Total_Shop_Amount

                    } else if (Total_Shop_Amount > BuyerData.Cash_Coupons_Amount_Available) {
                        Remaining_Pay_Amount = Total_Shop_Amount - BuyerData.Cash_Coupons_Amount_Available
                        Used_Wallet_Amount = parseFloat(BuyerData.Cash_Coupons_Amount_Available)
                        // Remaining_Wallet_Amount = 0
                    }
                }

                let Pincode_Payment_Data = {
                    Amount_Used_From_Wallet: parseFloat(Used_Wallet_Amount),
                    Remaining_Pay_Amount: parseFloat(Remaining_Pay_Amount),
                    Total_Amount: parseFloat(Total_Shop_Amount),
                    Total_Amount_Paid: parseFloat(Total_Shop_Amount)
                }



              
            console.log("9843---->" +JSON.stringify(Pincode_Payment_Data))
           
                resolve({ success: true, extras: { Count: Count, Data: Result ,Pincode_Payment_Data} });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Check_for_District_Pincode_Count = (values) => {
    return new Promise(async (resolve, reject) => {
        try {
            let currentDate = new Date()
            let Currenttime = currentDate.getTime()
            let MinusHours = 60 * 60 * 2000
            let existedDate = new Date(Currenttime - MinusHours)
            let query = {
                DistrictID: values.DistrictID,
                
                $or: [{
                    Pincode_Status:0,
                    Up_Time: {
                        $gte: values.created_at
                    }
                },
                {
                    Pincode_Status:1,
                    Up_Time: {
                        $gte: existedDate
                    }
                }
                ]
            }
            console.log("9755---> " +JSON.stringify(query))
            let Result = await Pincodes.countDocuments(query).lean().exec();
            console.log("9757---> " +JSON.stringify(Result))
            if (Result != null) {
                resolve(Result);
            } else {
                reject({ success: false, extras: { code: 2, msg: ApiMessages.NO_DATA_FOUND } })
            }

        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    })
}

ShopController.List_All_Pincodes = (values,DistrictData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let currentDate = new Date()
                let Currenttime = currentDate.getTime()
                let MinusHours = 60 * 60 * 20
                let existedDate = new Date(Currenttime - MinusHours)
                let query = {
                   $and:[
                       {
                        DistrictID: values.DistrictID,
                        $or: [{
                            Pincode_Status:0,
                            Up_Time: {
                                $gte: DistrictData.created_at
                            }
                        },
                        {
                            Pincode_Status:1,
                            Up_Time: {
                                $gte: existedDate
                            }
                        }
                        ]
                       }
                   ]
                };
                if (Boolify(values.Whether_Search_Filter)) {
                    let Search_Input = String(values.Search);
                    let Search_Options = {
                        $regex: Search_Input,
                        $options: "i"
                    };
                    let thisQuery = {
                        $or:[
                            {
                                Pincode: Search_Options,
                            },
                        ]
                    }
                    query.$and.push(thisQuery);
                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    SNo: 1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                console.log("---> 9795-->" + JSON.stringify(query))
                let Count = await Pincodes.countDocuments(query).lean();
                console.log("---> " +Count)
                let Result = await Pincodes.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                resolve({ success: true, extras: { Count: Count, Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


ShopController.List_All_Pincodes_For_PlaceORder = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let query = {
                    Status: true,
                    Pincode_Status: 2

                };
                if (Boolify(values.Whether_Search_Filter)) {
                    let Search_Input = String(values.Search);
                    let Search_Options = {
                        $regex: Search_Input,
                        $options: "i"
                    };
                    query.$or = [
                        {
                            Pincode: Search_Options,
                        },
                    ]
                }
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    SNo: 1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                let Count = await Pincodes.countDocuments(query).lean();
                let Result = await Pincodes.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                resolve({ success: true, extras: { Count: Count, Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Add_OR_Remove_Product_To_Cart = (values, CartData, DeviceData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: values.BuyerID,
                };
                CartData = await Cart.findOne(query).lean();
                console.log("Enter Query===============================>", query)
                console.log("Enter CartDta===============================>", CartData)
                let Add_Remove = 1;
                let Flag = 0;
                // let Cart_Total_Price = 0
                // let Total_Amount = 0
                // if (CartData != null) {
                //     console.log("Entered Into CartDta===============================>")
                //     Cart_Total_Price = CartData.Cart_Total_Price;
                //     Total_Amount = CartData.Total_Amount;
                // }


                let CartID = uuid.v4();
                if (values.CartID != undefined && values.CartID != null && values.CartID != "") {
                    CartID = values.CartID
                }
                let Unique_CartID = ("COUPSH" + await CommonController.Random_OTP_Number() + new Date().getTime()).replace(/[^A-Z0-9]+/ig, '');
                let qty = 0;
                if (CartData != null) {

                    if (CartData.Unique_CartID != undefined && CartData.Unique_CartID != null && CartData.Unique_CartID != "") {
                        Unique_CartID = CartData.Unique_CartID
                    }

                    // if (CartData.Products_Data.length != 0) {
                    //     let Product_Result = CartData.Products_Data.filter(function (ResultTemp) {
                    //         return ResultTemp.ProductID == Product_Data.ProductID;
                    //     });
                    //     if (Product_Result.length != 0) {
                    //         qty = parseInt(Product_Result[0].Quantity);
                    //     }
                    // }
                }
                let ProductID = ""

                let cartItem = 1;
                let sttus = "Item Added Successfully"
                if (values.Add_Remove == 2) {
                    sttus = "Item Removed Successfully",
                        ProductID = values.ProductID
                }


                let fndupdquery = {
                    // CartID: CartID,
                    BuyerID: values.BuyerID,
                };
                let fndupdoptions = {
                    upsert: true,
                    setDefaultsOnInsert: true,
                    new: true
                }
                let CartDatay = await Cart.findOne(fndupdquery).lean();


                // let Total_Amount = 0
                let fndupdchanges = {}
                let CartDatax;
                console.log("Qty===========================>", qty)
                if (values.Add_Remove == 1) {
                    let ProductData = {
                        ProductID: uuid.v4(),
                        Product_Name: values.Product_Name,
                        Quantity: values.Quantity,
                        Weight: values.Weight,
                    }
                    // if (CartDatay == null) {
                    if (CartDatay == null || qty == 0) {
                        fndupdchanges = {
                            $setOnInsert: {
                                CartID: CartID,
                                BuyerID: values.BuyerID,
                                Unique_CartID: Unique_CartID,
                                created_at: new Date()
                            },
                            $set: {
                                updated_at: new Date()
                            },

                            $push: {
                                Products_Data: ProductData
                            }
                        };
                        CartDatax = await Cart.findOneAndUpdate(fndupdquery, fndupdchanges, fndupdoptions).select('-_id -__v -created_at').lean();
                        console.log("Entered Into CartDatax===============================>", CartDatax)
                    }
                    else if (qty > 0) {

                        let queryx = {
                            // CartID: values.CartID,
                            BuyerID: values.BuyerID,
                            'Products_Data.ProductID': ProductData.ProductID
                        }
                        fndupdchanges = {
                            $set: {
                                'Products_Data.$.Quantity': values.Quantity,
                                'Products_Data.$.Weight': values.Weight,
                                updated_at: new Date()
                            }
                        };
                        CartDatax = await Cart.updateOne(queryx, fndupdchanges).select('-_id -__v -created_at').lean();
                        CartDatax = await Cart.findOne(queryx).select('-_id -__v -created_at').lean();
                    }
                    CartDatax = await JSON.parse(JSON.stringify(CartDatax));
                    console.log("CartDatax========================================>", CartDatax)
                    resolve({ success: true, extras: { Status: sttus, Data: CartDatax } });

                } else if (values.Add_Remove == 2) {

                    //  let ProductDataCheck = await CommonController.Check_for_User_Cart(req.body);
                    //  console.log("ProductDataCheck====================>",ProductDataCheck)
                    let changespush = {
                        $set: {
                            updated_at: new Date()
                        },
                        $pull: {
                            Products_Data: {
                                ProductID: ProductID
                            }
                        }
                    }
                    let ResultPush = await Cart.updateOne(fndupdquery, changespush).lean().exec();
                    CartDatax = await Cart.findOne(fndupdquery).select('-_id -__v -created_at').lean();
                    CartDatax = await JSON.parse(JSON.stringify(CartDatax));
                    resolve({ success: true, extras: { Status: sttus, Data: CartDatax } });
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.List_All_Cart_Items = (values, CartData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let query = {
                    BuyerID: values.BuyerID
                }
                let Result = await Cart.findOne(query).lean();

                if (Result != null) {
                    let Total_Cart_Quantity = 0
                    let Total_Cart_Weight = 0


                    for (let iterator of Result.Products_Data) {

                        if (Result.Products_Data != null) {
                            Total_Cart_Quantity += iterator.Quantity
                            Total_Cart_Weight += iterator.Weight
                        }
                    }
                    Result.Total_Cart_Weight = Total_Cart_Weight
                    Result.Total_Cart_Quantity = Total_Cart_Quantity
                    Result.Cart_Total_Items = Total_Cart_Quantity

                    let CartDatax = await JSON.parse(JSON.stringify(Result));
                    resolve({ success: true, extras: { Data: CartDatax } });

                } else {
                    resolve({ success: true, extras: { Data: [] } });
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Place_Order = (values, CartData, UserShopPincodeData, AddressData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                console.log("CartData=========>", CartData)
                let now = moment()



                let Order_Status_Logs = {
                    LogID: uuid.v4(),
                    Order_Status: 1,
                    Comment: "Order Initiated",
                    Time: new Date()
                }
                let calbk = false
                if (values.Payment_Type == 1) {
                    calbk = false
                } else if (values.Payment_Type == 2) {
                    calbk = true
                }
                // let Pricing_Information = {
                //     Final_Order_Amount: Amount,
                //     Cart_Total_Price: CheckoutData.Cart_Total_Price,
                //     Cart_Total_Items: CheckoutData.Cart_Total_Items,
                //     Products_Data: CheckoutData.Products_Data,
                //     Bowls_Data: CheckoutData.Bowls_Data,
                //     Kits_Data: CheckoutData.Kits_Data,

                // }


                let CurrentDate = moment().format(config.Take_Date_Format_Order)
                let Order_Number = await CommonController.GENERATE_TEN_DIGIT_INCREMENT_COUNTER_SEQUENCE( "ORD" + CurrentDate, 6)

                let Data = {
                    OrderID: uuid.v4(),
                    TransactionID: uuid.v4(),
                    Order_Number: Order_Number,
                    BuyerID: values.BuyerID,
                    Products_Data: CartData.Products_Data,
                    Delivery_Address: AddressData,
                    Order_Status_Logs: Order_Status_Logs,
                    Payment_Type: values.Payment_Type,
                    Payment_Status: 1,
                    Users_ShopsID: UserShopPincodeData.Users_ShopsID,
                    Order_DeleveryType: values.Order_DeleveryType,
                    Order_Status: 1,
                    Unique_CartID: CartData.Unique_CartID,

                    PincodeID:values.PincodeID,
                    Cart_Total_Items: CartData.Cart_Total_Items,
                    Total_Cart_Quantity: CartData.Total_Cart_Quantity,
                    Total_Cart_Weight: CartData.Total_Cart_Weight,


                }
                // resolve({ success: true, extras: { Status: "Order Initiated Successfully", Data: Data } })
                // return true

                let SavePRData = await Orders.create(Data);
                let TransactionID = Data.TransactionID
                let Tranx_Date = {
                    TransactionID: TransactionID,
                    callback: calbk,
                }
                resolve({ success: true, extras: { Status: "Order Initiated Successfully", Data: Tranx_Date } })
                if (calbk === false) {
                    let updateTranx = await ShopController.Complete_Payment_for_Order(TransactionID, "", values.Payment_Type);
                }

                console.log("Entering place order------------->", calbk);

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Complete_Payment_for_Order = (TransactionID, WebHookData, Payment_Type) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Payment_Status = 1;
                if (Payment_Type == 1) {
                    Payment_Status = 4
                } else if (Payment_Type == 2) {
                    Payment_Status = 3
                }
                let query = {
                    TransactionID: TransactionID,
                    Payment_Type: Payment_Type,
                }
                //  
                let Result = await Orders.findOne(query).lean();
                if (Result != null) {
                    let pay_type;
                    if (WebHookData == '') {
                        pay_type = 1;
                    } else {
                        pay_type = 2;
                    }
                    // let CurrentDate = moment().format(config.Take_Date_Format_Order)
                    // let Order_Number = await CommonController.GENERATE_TEN_DIGIT_INCREMENT_COUNTER_SEQUENCE("ORD" + CurrentDate, "ORD" + CurrentDate, 6)

                    let changes = {
                        $set: {
                            Payment_Status: Payment_Status,
                            WebHookData: WebHookData,
                            Payment_Type: pay_type,
                            Updated_at: new Date()
                        }
                    }

                    let Resultx = await Orders.findOneAndUpdate(query, changes).lean().exec();
                    resolve("Purchase Completed Successfully");


                    let query_delete = {
                        BuyerID: Result.BuyerID
                    }
                    let Resultxy = await Cart.deleteOne(query_delete).lean();

                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_ORDER } });
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.List_My_Orders = (values) => {
    return new Promise(async (resolve, reject) => {
        try {

            let toSkip = parseInt(values.skip)
            let toLimit = parseInt(values.limit)
            let sortOptions = {
                updated_at: -1
            }
            let query = {
                // BuyerID: values.BuyerID,
                // $or: [
                //     {
                //         Payment_Type: 1,
                //         Payment_Status: 4
                //     },
                //     {
                //         Payment_Type: 2,
                //         Payment_Status: 3
                //     }
                // ]
            }
            if (Boolify(values.Whether_User_Shop_Filter)) {
                query.Users_ShopsID = values.Users_ShopsID
            }

            if (Boolify(values.Whether_OrderStatus_Filter)) {
                if (values.Order_Status == 1) {
                    query.Order_Status = { $in: [1, 2] }
                } else {
                    query.Order_Status = 3
                }

            }

            if (Boolify(values.Whether_OrderStatus_for_Filter)) {
                    query.Order_Status = values.Order_Status
                

            }

           

            if (Boolify(values.Whether_BuyerID_Filter)) {
                query.BuyerID = values.BuyerID
            }
            // if (Boolify(values.Whether_Status_Filter)) {
            //     query.Status = values.Status
            // }

            if (Boolify(values.Whether_Search_Filter)) {
                let Search_Input = String(values.Search);
                let Search_Options = {
                    $regex: Search_Input,
                    $options: "i"
                };
                query.$or = [
                    {
                        Order_Number: Search_Options,
                    },
                ]
            }

            console.log("10289--->" +JSON.stringify(query))
            let Count = await Orders.countDocuments(query).lean();
            let Result = await Orders.find(query).lean().select('-_id -__v').sort(sortOptions).skip(toSkip).limit(toLimit).exec()
            for (let OrderData of Result) {
                if (OrderData.BuyerID != null && OrderData.BuyerID != "") {
                    OrderData.Buyer_Data = await CommonController.Check_for_Buyer_new_last(OrderData);
                }
                if (OrderData.Users_ShopsID != null && OrderData.Users_ShopsID != "") {
                    OrderData.User_Shop_Data = await CommonController.Check_For_User_Shop_new_la(OrderData);
                }
            }

           // console.log("10301--->" +JSON.stringify(Result))
            resolve({ success: true, extras: { Count: Count, Data: Result } })
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}


ShopController.List_Address = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let query = {
                    BuyerID: values.BuyerID,
                    Status: true,
                }
                let sortOptions = {
                    Address_Default: -1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                let Count = await User_Address.countDocuments(query).lean();
                let Result = await User_Address.find(query).select('-_id -__v').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                resolve({ success: true, extras: { Count: Count, Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Remove_Address = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    AddressID: values.AddressID
                }
                let Result = await User_Address.findOne(query).lean();
                if (Result != null) {
                    let changes = {
                        $set: {
                            Status: false,
                            updated_at: new Date()
                        }
                    }
                    let UpdateData = await User_Address.updateOne(query, changes).lean();
                    resolve({ success: true, extras: { Status: "Removed Successfully" } })
                } else {
                    reject({ success: false, extras: { code: 2, msg: ApiMessages.INVALID_ADDRESS } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Edit_Address = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                if (values.Address_Type == 1 || values.Address_Type == 2 || values.Address_Type == 3) {
                    let query = {
                        AddressID: values.AddressID
                    }
                    let Result = await User_Address.findOne(query).lean();
                    if (Result != null) {
                        if (values.Address_Default == true) {
                            let query = {
                                BuyerID: values.BuyerID,
                            }
                            let changes = {
                                Address_Default: false
                            }
                            let options = {
                                multi: true
                            }
                            let UpdateData = await User_Address.updateMany(query, changes, options).lean();
                        }
                        let changes = {
                            $set: {
                                BuyerID: values.BuyerID,
                                StateID: values.StateID,
                                DistrictID: values.DistrictID,
                                Name: values.Name,
                                Street: values.Street,
                                Landmark: values.Landmark,
                                House_Flat_Block_NO: values.House_Flat_Block_NO,
                                PinCode: values.PinCode,
                                Address_Type: values.Address_Type, //1- Home, 2- Work, 3- Other
                                Address_Default: values.Address_Default,
                                Status: true,
                                Address: values.Address,
                                Latitude: parseFloat(values.Latitude),
                                Longitude: parseFloat(values.Longitude),
                                Point: [parseFloat(values.Longitude), parseFloat(values.Latitude)],
                                PhoneNumber: values.PhoneNumber,
                                updated_at: new Date()
                            }
                        }
                        let UpdateData = await User_Address.updateOne(query, changes).lean();
                        resolve({ success: true, extras: { Status: "Updated Successfully" } })
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.INVALID_ADDRESS } });
                    }
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_ADDRESS_TYPE } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Add_Address = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                if (values.Address_Type == 1 || values.Address_Type == 2 || values.Address_Type == 3) {
                    if (values.Address_Default == true) {
                        let query = {
                            BuyerID: values.BuyerID,
                        }
                        let changes = {
                            Address_Default: false
                        }
                        let options = {
                            multi: true
                        }
                        let UpdateData = await User_Address.updateMany(query, changes, options).lean();
                    }
                    let Data = {
                        AddressID: uuid.v4(),
                        BuyerID: values.BuyerID,
                        StateID: values.StateID,
                        DistrictID: values.DistrictID,
                        Name: values.Name,
                        Street: values.Street,
                        Landmark: values.Landmark,
                        House_Flat_Block_NO: values.House_Flat_Block_NO,
                        PinCode: values.PinCode,
                        Address_Type: values.Address_Type, //1- Home, 2- Work, 3- Other
                        Address_Default: values.Address_Default,
                        Status: true,
                        Address: values.Address,
                        PhoneNumber: values.PhoneNumber,

                        Latitude: parseFloat(values.Latitude),
                        Longitude: parseFloat(values.Longitude),
                        Point: [parseFloat(values.Longitude), parseFloat(values.Latitude)],
                        created_at: new Date(),
                        updated_at: new Date()
                    }
                    let saveData = await User_Address(Data).save();
                    resolve({ success: true, extras: { Status: "Created Successfully" } })
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_ADDRESS_TYPE } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Request_OTP = (values, OrderData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let OTP = await CommonController.Random_OTP_Number();
                console.log("OrderData===================================>", OrderData)
                let BuyerData = await CommonController.Check_for_Buyer(OrderData)
                console.log("BuyerData===========================>", BuyerData)
                let Data = {
                    Request_Id: uuid.v4(),
                    Buyer_PhoneNumber: BuyerData.Buyer_PhoneNumber,
                    Users_ShopsID: OrderData.Users_ShopsID,
                    BuyerID: OrderData.BuyerID,
                    OrderID: values.OrderID,
                    Total_Amount: values.Total_Amount,
                    OTP: OTP,
                    Latest: true,
                    Time: new Date()
                }
                let SaveResult = await Order_Otp(Data).save();
                resolve({ success: true, extras: { Status: "OTP Sent Successfully" } })

                 let PhoneNumber = `+91${BuyerData.Buyer_PhoneNumber}`;
                 console.log("10491--->" + PhoneNumber)
                 console.log("10491--->" + OTP)
                // let MsgData = 'Welcome To Dogemo. OTP for Payment is ' + OTP + ' Do not share OTP with anyone for security reasons.  \n --Thank you,  \n DOGEMO Team'
                 let OTPStatus = await MSG91Controller.Send_OTP(PhoneNumber, OTP);
                let query = {
                    Buyer_PhoneNumber: BuyerData.Buyer_PhoneNumber,
                    OTP: { $ne: OTP }
                };
                let changes = {
                    Latest: false
                };
                let UpdatedStatus = await Order_Otp.updateMany(query, changes).lean();
                let Order_query = {
                    OrderID: values.OrderID,
                };
                let Order_changes = {
                    Total_Amount: values.Total_Amount
                };
                let UpdateAmount = await Orders.updateMany(Order_query, Order_changes).lean();
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Check_for_Order_OTP_Tries_Count = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let time = moment().subtract(config.OTP_TRIES_COUNT_TIME_IN_MINUTES, 'minutes').toDate();
                let query = {
                    OrderID: values.OrderID,
                    Time: {
                        $gte: time
                    }
                };
                let Count = await Order_OTP_Tries.countDocuments(query).lean().exec();
                if (Count <= config.OTP_TRIES_COUNT) {
                    resolve('Validated Successfully');
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.OTP_TRIES_EXCEED_TRY_AFTER_SOME_TIME } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Validate_Order_OTP = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let obj1 = {
                    $ne: null
                };
                let obj2 = {
                    $eq: values.OTP
                }
                let OTP_Query = (config.SECRET_OTP_CODE === String(values.OTP)) ? obj1 : obj2;
                let query = {
                    OrderID: values.OrderID,
                    OTP: OTP_Query,
                    Latest: true
                };
                let Result = await Order_Otp.findOne(query).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_OTP } });
                    let Data = {
                        OrderID: values.OrderID,
                        Time: new Date()
                    };
                    let SaveResult = await Order_OTP_Tries(Data).save();
                } else {
                    resolve("OTP Verified Successfully");
                    let RemoveTries = await Order_OTP_Tries.deleteMany({
                        OrderID: values.OrderID,
                    }).lean();
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.User_Shops_Request_ShareAmount_2_For_Order = (values, BuyerData, ShopData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let query = {
                    Users_ShopsID: values.Users_ShopsID,
                    Payment_Status: 3,
                    User_Shop_Status: 3
                };
                let Result = await Users_Shops.findOne(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -Amount_Paid -Users_Shop_Password').lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.NO_USER_SHOP_FOUND } });
                } else {
                    // 
                    let Used_Wallet_Amount = 0
                    let Purchase_Used_Wallet_Amount = 0
                    let Remaining_Pay_Amount = values.Total_Amount
                    let Total_User_Share_Amount = Remaining_Pay_Amount + Used_Wallet_Amount

                    let Wallet_Remaining_Pay_Amount = (Remaining_Pay_Amount / 100) * config.Wallet_Amount_Request_Share_Percent
                    let Purchase_Wallet_Remaining_Pay_Amount = (Remaining_Pay_Amount / 100) * config.Purchase_Wallet_Amount_Request_Share_Percent

                    //main Wallet
                    if (BuyerData.Cash_Coupons_Amount_Available > 0) {
                        if (Wallet_Remaining_Pay_Amount <= BuyerData.Cash_Coupons_Amount_Available) {
                            // 
                            Used_Wallet_Amount = Wallet_Remaining_Pay_Amount
                            Wallet_Remaining_Pay_Amount -= Wallet_Remaining_Pay_Amount

                        } else if (Wallet_Remaining_Pay_Amount > BuyerData.Cash_Coupons_Amount_Available) {
                            Wallet_Remaining_Pay_Amount = Wallet_Remaining_Pay_Amount - BuyerData.Cash_Coupons_Amount_Available
                            Used_Wallet_Amount = BuyerData.Cash_Coupons_Amount_Available
                        }
                    }

                    //purchase Wallet
                    if (BuyerData.Purchace_Coupons_Amount_Available > 0) {
                        if (Purchase_Wallet_Remaining_Pay_Amount <= BuyerData.Purchace_Coupons_Amount_Available) {
                            // 
                            Purchase_Used_Wallet_Amount = Purchase_Wallet_Remaining_Pay_Amount
                            Purchase_Wallet_Remaining_Pay_Amount -= Purchase_Wallet_Remaining_Pay_Amount

                        } else if (Purchase_Wallet_Remaining_Pay_Amount > BuyerData.Purchace_Coupons_Amount_Available) {
                            Purchase_Wallet_Remaining_Pay_Amount = Purchase_Wallet_Remaining_Pay_Amount - BuyerData.Purchace_Coupons_Amount_Available
                            Purchase_Used_Wallet_Amount = BuyerData.Purchace_Coupons_Amount_Available
                        }
                    }
                    Remaining_Pay_Amount = Purchase_Wallet_Remaining_Pay_Amount + Wallet_Remaining_Pay_Amount

                    let Payment_Data = {
                        Amount_Used_From_Wallet: Used_Wallet_Amount,
                        Amount_Used_From_Purchase_Wallet: Purchase_Used_Wallet_Amount,
                        Total_Amount_Paid: (Used_Wallet_Amount + Purchase_Used_Wallet_Amount),
                        Amount_Paid_Online: Remaining_Pay_Amount,
                        Total_Amount: Total_User_Share_Amount,
                        Total_Amount_Paid_From_Wallet: (Used_Wallet_Amount + Purchase_Used_Wallet_Amount),
                        Remaining_Cash_Amount: Remaining_Pay_Amount
                    }
                    let calbk;
                    if (parseInt(Remaining_Pay_Amount) == 0) {
                        calbk = false;
                        // Payment_Type = 1
                    } else {
                        calbk = true;
                        // Payment_Type = 2
                    }


                    let ShareAMount = 0

                    let Coupons_Category_Data = await CommonController.Check_for_Coupons_Category_only(Result);
                    if (Coupons_Category_Data != null) {
                        if (Coupons_Category_Data.CC_Admin_Share_Percent != undefined && Coupons_Category_Data.CC_Admin_Share_Percent != "") {
                            ShareAMount = (values.Total_Amount / 100) * Coupons_Category_Data.CC_Admin_Share_Percent
                        }
                    }

                    let RequestData = {
                        Buyer_Shop_request_ID: uuid.v4(),
                        Buyer_Amount_Paid: await Object.assign({}, Payment_Data),
                        BuyerID: values.BuyerID,
                        Users_ShopsID: values.Users_ShopsID,
                        Coupons_CategoryID: ShopData.Coupons_CategoryID,
                        Total_Amount: values.Total_Amount,
                        Request_Status: 1,
                        Buyer_Request_Status: 1,
                        Share_Amount: ShareAMount,
                        Shop_Payment_Status: 1,
                        Buyer_Payment_Status: 1,
                        TransactionID: uuid.v4(),
                        Buyer_TransactionID: uuid.v4(),
                        Shop_BuyerID: Result.BuyerID,
                        IsOrderOnline: true,
                        OrderID: values.OrderID,
                        created_at: new Date(),
                        updated_at: new Date()
                    }

                   // calbk = false
                    let ResultData = {
                        Buyer_Shop_request_ID: RequestData.Buyer_Shop_request_ID,
                        Users_ShopsID: RequestData.Users_ShopsID,
                        TransactionID: RequestData.Buyer_TransactionID,
                        Callback: calbk,
                        Final_Amount: Remaining_Pay_Amount.toFixed(2)
                    }

                    let Resultlog = await Buyer_Shop_requests_Notification(RequestData).save();

                 //   let updateTranx = await ShopController.Complete_Payment_for_Order_Shops_Request(RequestData.Buyer_TransactionID, "", values);

                    resolve({ success: true, extras: { Status: "User Shop Notification Requested Successfully", Data: ResultData, Payment_Data } })


                    if (calbk == false) {
                        
                        //
                        let updateTranx = await ShopController.Complete_Payment_for_User_Shops_Request(RequestData.Buyer_TransactionID, "");
                    }

                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


ShopController.User_Shops_Request_ShareAmount_2_For_Order_sanjay = (values, BuyerData, ShopData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                console.log("10718--->" + JSON.stringify(values))
                let query = {
                    Users_ShopsID: values.Users_ShopsID,
                    Payment_Status: 3,
                    User_Shop_Status: 3
                };
                let Result = await Users_Shops.findOne(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -Amount_Paid -Users_Shop_Password').lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.NO_USER_SHOP_FOUND } });
                } else {
                    // 

                    let Used_Wallet_Amount = 0
                    let Purchase_Used_Wallet_Amount = 0
                    let Remaining_Pay_Amount = values.Total_Amount
                    let Total_User_Share_Amount = Remaining_Pay_Amount + Used_Wallet_Amount

                    let Wallet_Remaining_Pay_Amount = (Remaining_Pay_Amount / 100) * config.Wallet_Amount_Request_Share_Percent
                    let Purchase_Wallet_Remaining_Pay_Amount = (Remaining_Pay_Amount / 100) * config.Purchase_Wallet_Amount_Request_Share_Percent

                    //main Wallet
                    if (BuyerData.Cash_Coupons_Amount_Available > 0) {
                        if (Wallet_Remaining_Pay_Amount <= BuyerData.Cash_Coupons_Amount_Available) {
                            // 
                            Used_Wallet_Amount = Wallet_Remaining_Pay_Amount
                            Wallet_Remaining_Pay_Amount -= Wallet_Remaining_Pay_Amount

                        } else if (Wallet_Remaining_Pay_Amount > BuyerData.Cash_Coupons_Amount_Available) {
                            Wallet_Remaining_Pay_Amount = Wallet_Remaining_Pay_Amount - BuyerData.Cash_Coupons_Amount_Available
                            Used_Wallet_Amount = BuyerData.Cash_Coupons_Amount_Available
                        }
                    }

                    //purchase Wallet
                    if (BuyerData.Purchace_Coupons_Amount_Available > 0) {
                        if (Purchase_Wallet_Remaining_Pay_Amount <= BuyerData.Purchace_Coupons_Amount_Available) {
                            // 
                            Purchase_Used_Wallet_Amount = Purchase_Wallet_Remaining_Pay_Amount
                            Purchase_Wallet_Remaining_Pay_Amount -= Purchase_Wallet_Remaining_Pay_Amount

                        } else if (Purchase_Wallet_Remaining_Pay_Amount > BuyerData.Purchace_Coupons_Amount_Available) {
                            Purchase_Wallet_Remaining_Pay_Amount = Purchase_Wallet_Remaining_Pay_Amount - BuyerData.Purchace_Coupons_Amount_Available
                            Purchase_Used_Wallet_Amount = BuyerData.Purchace_Coupons_Amount_Available
                        }
                    }
                    Remaining_Pay_Amount = Purchase_Wallet_Remaining_Pay_Amount + Wallet_Remaining_Pay_Amount

                    let Payment_Data = {
                        Amount_Used_From_Wallet: Used_Wallet_Amount,
                        Amount_Used_From_Purchase_Wallet: Purchase_Used_Wallet_Amount,
                        Total_Amount_Paid: (Used_Wallet_Amount + Purchase_Used_Wallet_Amount),
                        Amount_Paid_Online: Remaining_Pay_Amount,
                        Total_Amount: Total_User_Share_Amount,
                        Total_Amount_Paid_From_Wallet: (Used_Wallet_Amount + Purchase_Used_Wallet_Amount),
                        Remaining_Cash_Amount: Remaining_Pay_Amount
                    }
                    let calbk;
                    if (parseInt(Remaining_Pay_Amount) == 0) {
                        calbk = false;
                        // Payment_Type = 1
                    } else {
                        calbk = true;
                        // Payment_Type = 2
                    }

                    let ShareAMount = 0

                    let Coupons_Category_Data = await CommonController.Check_for_Coupons_Category_only(Result);
                    if (Coupons_Category_Data != null) {
                        if (Coupons_Category_Data.CC_Admin_Share_Percent != undefined && Coupons_Category_Data.CC_Admin_Share_Percent != "") {
                            ShareAMount = (values.Total_Amount / 100) * Coupons_Category_Data.CC_Admin_Share_Percent
                        }
                    }

                    let RequestData = {
                        Buyer_Shop_request_ID: uuid.v4(),
                        BuyerID: values.BuyerID,
                        Buyer_Amount_Paid: await Object.assign({}, Payment_Data),
                        Users_ShopsID: values.Users_ShopsID,
                        Coupons_CategoryID: ShopData.Coupons_CategoryID,
                        Total_Amount: values.Total_Amount,
                        Request_Status: 1,
                        Share_Amount: ShareAMount,
                        Shop_Payment_Status: 1,
                        TransactionID: uuid.v4(),
                        Buyer_TransactionID: uuid.v4(),

                        IsOrderOnline: true,
                        OrderID: values.OrderID,

                        created_at: new Date(),
                        updated_at: new Date()
                    }
                    let Resultlog = Buyer_Shop_requests_Notification(RequestData).save();
                  
                   // let updateTranx = await ShopController.Complete_Payment_for_Order_Shops_Request(RequestData.Buyer_TransactionID, "", values);

                   

                    let orderQuery ={
                        OrderID : values.OrderID
                    }
                    let orderChanges = {
                        $set: {
                            Order_Status: 2,
                            Share_Amount: RequestData.Share_Amount,
                            Buyer_Shop_request_ID: RequestData.Buyer_Shop_request_ID,
                            Updated_at: new Date()
                        }
                    }
                    console.log("10774--->" + JSON.stringify(orderChanges))

                    let Resultx = await Orders.findOneAndUpdate(orderQuery, orderChanges).lean().exec();


                    resolve({ success: true, extras: { Status: "User Shop Notification Requested Successfully" } })

                    
                    // if (calbk == false) {
                    //     
                    //     //
                    //     let updateTranx = await ShopController.Complete_Payment_for_User_Shops_Request(RequestData.Buyer_TransactionID, "");
                    // }

                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


ShopController.Complete_Payment_for_Order_Shops_Request = (Buyer_TransactionID, Buyer_WebHookData, OrderData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query_req = {
                    Buyer_TransactionID: Buyer_TransactionID,
                    Buyer_Payment_Status: 1,
                    // Request_Status: 1
                }
                // 

                let Result = await Buyer_Shop_requests_Notification.findOne(query_req).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -Amount_Paid -Users_Shop_Password').lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.NO_REQUEST_FOUND } });
                } else {
                    let pay_type;
                    if (Buyer_WebHookData == '') {
                        pay_type = 1;
                    } else {
                        // if (WebhookData.Amount == Result.Cart_Final_Price) {
                        if (Buyer_WebHookData.Amount == Result.Total_Amount) {
                            pay_type = 2;
                        } else {
                            pay_type = 3;
                        }
                    }
                    let query_buyer = {
                        BuyerID: Result.BuyerID
                    }
                    let BuyerData2 = await Buyers.findOne(query_buyer).lean().exec();

                    // 
                    let Wallet_bal_Used = Result.Buyer_Amount_Paid.Amount_Used_From_Wallet;
                    let Purchase_Wallet_bal_Used = Result.Buyer_Amount_Paid.Amount_Used_From_Purchase_Wallet;
                    let fndupdoptions = {
                        upsert: true,
                        setDefaultsOnInsert: true,
                        new: true
                    }
                    if (Wallet_bal_Used > 0) {
                        let Data = {
                            Buyer_Shop_request_ID: Result.Buyer_Shop_request_ID,
                            Amount: Wallet_bal_Used,
                            BuyerData: BuyerData2.Buyer_Name,
                            Buyer_Name: BuyerData2.Buyer_Name,
                            From_Buyer_Name: BuyerData2.Buyer_Name
                        }
                        let WData = {
                            LogID: uuid.v4(),
                            BuyerID: Result.BuyerID,
                            Type: 19,  //User SHop debited amount for Buyer Share Amount Request Notofication
                            Amount: Wallet_bal_Used,
                            Data: Data,
                            Time: new Date()
                        }
                        let Resultlog = Buyer_Share_Logs(WData).save();
                        let BuyerChanges = {
                            $inc: {
                                Cash_Coupons_Amount_Available: Wallet_bal_Used * -1,
                                Cash_Coupons_Amount_Withdraw: Wallet_bal_Used
                            },
                            $set: {
                                // Cart_Total_Items: 0,
                                // Cart_Total_Price: 0,
                                updated_at: new Date()
                            },
                            // $pull: {
                            //     Cart_Information: {
                            //         ProductID: {
                            //             $ne: null
                            //         }
                            //     }
                            // }
                        };

                        let updatBuyerData = await Buyers.findOneAndUpdate(query_buyer, BuyerChanges, fndupdoptions).lean().exec();
                    }

                    if (Purchase_Wallet_bal_Used > 0) {
                        let PData = {
                            Buyer_Name: BuyerData2.Buyer_Name,
                            From_Buyer_Name: BuyerData2.Buyer_Name
                        }
                        let PWData = {
                            LogID: uuid.v4(),
                            BuyerID: Result.BuyerID,
                            Type: 2,  //User SHop debited amount for Buyer Share Amount Request Notofication
                            Amount: Purchase_Wallet_bal_Used,
                            Data: PData,
                            Time: new Date()
                        }
                        let ResultlogP = Buyer_Purchase_Wallet_Logs(PWData).save();
                        let PBuyerChanges = {
                            $inc: {
                                Purchace_Coupons_Amount_Available: Purchase_Wallet_bal_Used * -1,
                                Purchace_Coupons_Amount_Withdraw: Purchase_Wallet_bal_Used
                            },
                            $set: {

                                updated_at: new Date()
                            },
                        };

                        let updatBuyerDataP = await Buyers.findOneAndUpdate(query_buyer, PBuyerChanges, fndupdoptions).lean().exec();
                    }


                    let change = {
                        $set: {
                            Buyer_Payment_Status: 3,
                            Request_Status: 1,
                            Buyer_Payment_Type: pay_type,
                            Buyer_WebHookData: Buyer_WebHookData,
                            updated_at: new Date()
                        }
                    }
                    let update_paymentstatus = await Buyer_Shop_requests_Notification.updateOne(query_req, change).lean();
                    let Order_Status_Update = await ShopController.Update_Order_Status(OrderData, 2)
                    resolve("Request Completed Successfully");
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Update_Order_Status = (OrderData, Order_Status) => {
    return new Promise(async (resolve, reject) => {
        try {
            // let Order_Status = 2;
            let Title = ''
            if (Order_Status == 2) {
                Title = 'Payment Initiated'
            } else if (Order_Status == 3) {
                Title = 'Completed'
            }
            let Order_Status_Logs = [{
                LogID: uuid.v4(),
                Order_Status: Order_Status,
                Title: Title,
                Comment: "",
                Time: new Date()
            }];
            let query = {
                OrderID: OrderData.OrderID
            }
            let Changes = {
                $set: {
                    Order_Status: Order_Status
                },
                $push: {
                    Order_Status_Logs: Order_Status_Logs
                }
            }
            let findupdateData = await Orders.updateOne(query, Changes).select('-_id -__v').lean();
            resolve({ success: true, extras: { Status: "Updated Successfully" } })
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}

ShopController.Purchase_State = (values, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                // parseInt
                values.Amount_Used_From_Wallet = await parseInt(values.Amount_Used_From_Wallet);
                values.Online_Amount = await parseInt(values.Online_Amount);
                values.Total_Amount = await parseInt(values.Total_Amount);

                console.log("values.Amount_Used_From_Wallet=====================>", values.Amount_Used_From_Wallet)
                console.log("BuyerData=====================>", BuyerData.Cash_Coupons_Amount_Available)

                
                if (BuyerData.Cash_Coupons_Amount_Available.toFixed(2) >= parseFloat(values.Amount_Used_From_Wallet.toFixed(2))) {
                    let User_Shop_Price_Amount = await AdminController.List_Common_App_Setting(values)
                    let User_Shop_price_Data = User_Shop_Price_Amount.extras.Data
                    let finalprice = (User_Shop_price_Data.State_Price);


                    let Available_Amount = BuyerData.Cash_Coupons_Amount_Available;
                    console.log("4471----> ");
                    // let cartprice = Result.Cart_Final_Price.toFixed(2);
                    let priceCal = parseFloat(values.Amount_Used_From_Wallet.toFixed(2)) + parseFloat(values.Online_Amount.toFixed(2));
                    console.log("Final price==========================>", finalprice)
                    console.log("priceCal==========================>", priceCal)
                    if (finalprice == parseFloat(priceCal.toFixed(2))) {

                        console.log("4476----> ");
                        let TranxID = uuid.v4();
                        let calbk;
                        let Payment_Type;
                        let onlineamount = finalprice - BuyerData.Cash_Coupons_Amount_Available;
                        if (onlineamount <= 0) {
                            onlineamount = 0;
                            console.log("4483----> ");
                        }

                        let online_Amount = onlineamount.toFixed(2);

                        if (parseInt(values.Online_Amount) == 0) {
                            calbk = false;
                            Payment_Type = 1
                            console.log("4491----> ");
                        } else {
                            calbk = true;
                            Payment_Type = 2
                            console.log("4495----> ");
                        }

                        let Data = {
                            State_TransactionID: uuid.v4(),
                            TransactionID: TranxID,
                            BuyerID: BuyerData.BuyerID,
                            StateID: values.StateID,
                            Total_Amount: values.Total_Amount,
                            Payment_Status: 1,
                            created_at: new Date(),
                            updated_at: new Date()
                        }
                        let SavePRData = await State_Transaction.create(Data);

                        let ResultData = {
                            TransactionID: TranxID,
                            Callback: calbk,
                            Final_Amount: parseFloat(values.Online_Amount.toFixed(2))
                        }
                        let SttausUpdate = await ShopController.Update_Status_For_State(values, 1);

                        if (!calbk) {
                            console.log("4538----> ");
                            //
                            // let updateTranx = await ShopController.Complete_Payment_for_State_Purchase(UserShopData, "");
                            let updateTranx = await ShopController.Complete_Payment_for_State_Purchase(TranxID, "");
                        } else {
                            console.log("4542----> ");
                        }
                        resolve({ success: true, extras: { Data: ResultData } })
                        // resolve({ success: true, extras: { Status: "Shop Created Successfully", EventID_QR_Image, Data } })
                    } else {
                        console.log("4545----> ");
                        reject({ success: false, extras: { msg: ApiMessages.FINAL_AMOUNT_MISSMATCH } });
                    }
                } else {
                    console.log("4549----> ");
                    reject({ success: false, extras: { msg: ApiMessages.AMOUNT_EXCEED_WALLET_AVAILABLE_BALANCE } });
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Complete_Payment_for_State_Purchase = (TransactionID, WebhookData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let query = {
                    TransactionID: TransactionID,
                }
                let Result = await State_Transaction.findOne(query).lean();
                console.log("Result================>", Result)
                if (Result != null) {
                    let pay_type;
                    if (WebhookData == '') {
                        pay_type = 1;
                    } else {
                        // if (WebhookData.Amount == Result.Cart_Final_Price) {
                        let User_Shop_Price_Amount = await AdminController.List_Common_App_Setting({})
                        let User_Shop_price_Data = User_Shop_Price_Amount.extras.Data

                        let FinalPrice = User_Shop_price_Data.State_Price
                        if (WebhookData.Amount == FinalPrice) {
                            pay_type = 2;
                        } else {
                            pay_type = 3;
                        }
                    }
                    //////
                    let changes = {
                        $set: {
                            Payment_Status: 3,
                            WebHookData: WebhookData,
                            Payment_Type: pay_type,
                            Updated_at: new Date()
                        }
                    }
                    let Resultx = await State_Transaction.findOneAndUpdate(query, changes).lean().exec();

                    let SttausUpdate = await ShopController.Update_Status_For_State(Result, 2);
                    let buyer_query = {
                        BuyerID: Result.BuyerID
                    }
                    let Buyer_changes = {
                        $set: {
                            Purchase_Type: 1,
                            StateID: Result.StateID,
                        }
                    }
                    let BuyerRelut = await Buyers.findOneAndUpdate(buyer_query, Buyer_changes).lean().exec();
                    let State_query = {
                        StateID: Result.StateID
                    }
                    let State_changes = {
                        $set: {
                            BuyerID: Result.BuyerID,
                        }
                    }
                    let StateRelut = await States.findOneAndUpdate(State_query, State_changes).lean().exec();

                    resolve("Purchased Successfully");

                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_ORDER } });
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Update_Status_For_State = (values, pincodeStatus) => {
    return new Promise(async (resolve, reject) => {
        try {
            let query = {
                StateID: values.StateID
            }
            let Changes = {
                $set: {
                    State_Status: pincodeStatus,
                    Up_Time: new Date()
                }
            }
            let findupdateData = await States.updateOne(query, Changes).select('-_id -__v').lean();
            resolve({ success: true, extras: { Status: "Updated Successfully" } })
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}
ShopController.Purchase_District = (values, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                // parseInt
                values.Amount_Used_From_Wallet = await parseInt(values.Amount_Used_From_Wallet);
                values.Online_Amount = await parseInt(values.Online_Amount);
                values.Total_Amount = await parseInt(values.Total_Amount);

                console.log("values.Amount_Used_From_Wallet=====================>", values.Amount_Used_From_Wallet)
                console.log("BuyerData=====================>", BuyerData.Cash_Coupons_Amount_Available)


                if (BuyerData.Cash_Coupons_Amount_Available.toFixed(2) >= parseFloat(values.Amount_Used_From_Wallet.toFixed(2))) {
                    let User_Shop_Price_Amount = await AdminController.List_Common_App_Setting(values)
                    let User_Shop_price_Data = User_Shop_Price_Amount.extras.Data
                    let finalprice = (User_Shop_price_Data.District_Price);


                    let Available_Amount = BuyerData.Cash_Coupons_Amount_Available;
                    console.log("4471----> ");
                    // let cartprice = Result.Cart_Final_Price.toFixed(2);
                    let priceCal = parseFloat(values.Amount_Used_From_Wallet.toFixed(2)) + parseFloat(values.Online_Amount.toFixed(2));
                    console.log("Final price==========================>", finalprice)
                    console.log("priceCal==========================>", priceCal)
                    if (finalprice == parseFloat(priceCal.toFixed(2))) {

                        console.log("4476----> ");
                        let TranxID = uuid.v4();
                        let calbk;
                        let Payment_Type;
                        let onlineamount = finalprice - BuyerData.Cash_Coupons_Amount_Available;
                        if (onlineamount <= 0) {
                            onlineamount = 0;
                            console.log("4483----> ");
                        }

                        let online_Amount = onlineamount.toFixed(2);

                        if (parseInt(values.Online_Amount) == 0) {
                            calbk = false;
                            Payment_Type = 1
                            console.log("4491----> ");
                        } else {
                            calbk = true;
                            Payment_Type = 2
                            console.log("4495----> ");
                        }

                        let Data = {
                            District_TransactionID: uuid.v4(),
                            TransactionID: TranxID,
                            BuyerID: BuyerData.BuyerID,
                            DistrictID: values.DistrictID,
                            Total_Amount: values.Total_Amount,
                            Payment_Status: 1,
                            created_at: new Date(),
                            updated_at: new Date()
                        }
                        let SavePRData = await District_Transaction.create(Data);

                        let ResultData = {
                            TransactionID: TranxID,
                            Callback: calbk,
                            Final_Amount: parseFloat(values.Online_Amount.toFixed(2))
                        }
                        let SttausUpdate = await ShopController.Update_Status_For_District(values, 1);

                        if (!calbk) {
                            console.log("4538----> ");
                            //
                            // let updateTranx = await ShopController.Complete_Payment_for_State_Purchase(UserShopData, "");
                            let updateTranx = await ShopController.Complete_Payment_for_District_Purchase(TranxID, "");
                        } else {
                            console.log("4542----> ");
                        }
                        resolve({ success: true, extras: { Data: ResultData } })
                        // resolve({ success: true, extras: { Status: "Shop Created Successfully", EventID_QR_Image, Data } })
                    } else {
                        console.log("4545----> ");
                        reject({ success: false, extras: { msg: ApiMessages.FINAL_AMOUNT_MISSMATCH } });
                    }
                } else {
                    console.log("4549----> ");
                    reject({ success: false, extras: { msg: ApiMessages.AMOUNT_EXCEED_WALLET_AVAILABLE_BALANCE } });
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Complete_Payment_for_District_Purchase = (TransactionID, WebhookData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let query = {
                    TransactionID: TransactionID,
                }
                let Result = await District_Transaction.findOne(query).lean();
                console.log("Result================>", Result)
                if (Result != null) {
                    let pay_type;
                    if (WebhookData == '') {
                        pay_type = 1;
                    } else {
                        // if (WebhookData.Amount == Result.Cart_Final_Price) {
                        let User_Shop_Price_Amount = await AdminController.List_Common_App_Setting({})
                        let User_Shop_price_Data = User_Shop_Price_Amount.extras.Data

                        let FinalPrice = User_Shop_price_Data.District_Price
                        if (WebhookData.Amount == FinalPrice) {
                            pay_type = 2;
                        } else {
                            pay_type = 3;
                        }
                    }
                    //////
                    let changes = {
                        $set: {
                            Payment_Status: 3,
                            WebHookData: WebhookData,
                            Payment_Type: pay_type,
                            Updated_at: new Date()
                        }
                    }
                    let Resultx = await District_Transaction.findOneAndUpdate(query, changes).lean().exec();

                    let SttausUpdate = await ShopController.Update_Status_For_District(Result, 2);
                    let buyer_query = {
                        BuyerID: Result.BuyerID
                    }
                    let Buyer_changes = {
                        $set: {
                            Purchase_Type: 2,
                            DistrictID: Result.DistrictID,
                        }
                    }
                    let BuyerRelut = await Buyers.findOneAndUpdate(buyer_query, Buyer_changes).lean().exec();
                    let State_query = {
                        DistrictID: Result.DistrictID
                    }
                    let State_changes = {
                        $set: {
                            BuyerID: Result.BuyerID,
                        }
                    }
                    let StateRelut = await Districts.findOneAndUpdate(State_query, State_changes).lean().exec();

                    resolve("Purchased Successfully");

                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_ORDER } });
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

ShopController.Update_Status_For_District = (values, pincodeStatus) => {
    return new Promise(async (resolve, reject) => {
        try {
            let query = {
                DistrictID: values.DistrictID
            }
            let Changes = {
                $set: {
                    District_Status: pincodeStatus,
                    Up_Time: new Date()
                }
            }
            let findupdateData = await Districts.updateOne(query, Changes).select('-_id -__v').lean();
            resolve({ success: true, extras: { Status: "Updated Successfully" } })
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}



export default ShopController;