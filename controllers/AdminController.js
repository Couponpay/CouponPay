let AdminController = function () { };
import async from "async";
import Axios from "axios";
import crypto from "crypto";
import moment from "moment";
import { Boolify, isBoolean } from "node-boolify";
import uuid from "uuid";
import ApiMessages from "../config/ApiMessages";
import config from "../config/config";
import Admins from "../models/Admins";
import App_Image_Resources from "../models/App_Image_Resources";
import Banner from "../models/Banner";
import Bonanza_Log from "../models/Bonanza_Log";
import Box_Amount_Share from "../models/Box_Amount_Share";
import Buyers from "../models/Buyers";
import Buyers_Network from "../models/Buyers_Network";
import Buyers_Purchase_Log from "../models/Buyers_Purchase_Log";
import Buyers_Ultimate_Network from "../models/Buyers_Ultimate_Network";
import Buyer_Bonanza_Log from "../models/Buyer_Bonanza_Log";
import Buyer_Expired_Amount_Wallet_Logs from "../models/Buyer_Expired_Amount_Wallet_Logs";
import Buyer_Gift_Amount_WithDrawn_Logs from "../models/Buyer_Gift_Amount_WithDrawn_Logs";
import Buyer_Offer_Message from "../models/Buyer_Offer_Message";
import Buyer_Orders from "../models/Buyer_Orders";
import Buyer_Purchase_Wallet_Logs from "../models/Buyer_Purchase_Wallet_Logs";
import Buyer_Share_Logs from "../models/Buyer_Share_Logs";
import Buyer_Shop_requests_Notification from "../models/Buyer_Shop_requests_Notification";
import Category from "../models/Category";
import Common_App_Settings from "../models/Common_App_Settings";
import Company_Share from "../models/Company_Share";
import Company_Share_Logs from "../models/Company_Share_Logs";
import Counters from "../models/Counters";
import Coupons_Category from "../models/Coupons_Category";
import Coupon_Products from "../models/Coupon_Products";
import Delivery_Type from "../models/Delivery_Type";
import Districts from "../models/District";
import Files from "../models/Files";
import Gift_Meter from "../models/Gift_Meter";
import GST_Serv_Stroe_Share_Wallet from "../models/GST_Serv_Stroe_Share_Wallet";
import GST_Serv_Stroe_Share_Wallet_Logs from "../models/GST_Serv_Stroe_Share_Wallet_Logs";
import Help_Data from "../models/Help_Data";
import Images from "../models/Images";
import Introducers from "../models/Introducers";
import Introducer_Share_Logs from "../models/Introducer_Share_Logs";
import News from "../models/News";
import Offer_Messages from "../models/Offer_Messages";
import Pincodes from "../models/Pincode";
import Plots_Log from "../models/Plots_Log";
import Products from "../models/Products";
import Shiprocket_Order_Log from "../models/Shiprocket_Order_Log";
import Shops from "../models/Shops";
import Shop_Bills from "../models/Shop_Bills";
import Shop_Keepers_Trimming_Wallet from "../models/Shop_Keepers_Trimming_Wallet";
import Shop_Keepers_Trimming_Wallet_Logs from "../models/Shop_Keepers_Trimming_Wallet_Logs";
import Shop_Product_Stocks from "../models/Shop_Product_Stocks";
import Shop_Product_Stock_Logs from "../models/Shop_Product_Stock_Logs";
import Order from "../models/Orders";
import Shop_Purchases from "../models/Shop_Purchases";
import Shop_Share_Logs from "../models/Shop_Share_Logs";
import States from "../models/State";
import Target_Referal from "../models/Target_Referal";
import Trimer_Share from "../models/Trimer_Share";
import Trimer_Share_Logs from "../models/Trimer_Share_Logs";
import Trimmer_Share_Wallet from "../models/Trimmer_Share_Wallet";
import Trimmer_Share_Wallet_Logs from "../models/Trimmer_Share_Wallet_Logs";
import Users_Shops from "../models/Users_Shops";
import CommonController from "./CommonController";
import CronController from "./CronController";
import MessagesController from "./MessagesController";
import ShopController from "./ShopController";



AdminController.List_Box_Amount_Shares = (values) => {
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
                // let query = {
                //     Box_Number: { $in: [1, 2, 3] }
                // };
                let query = {
                    Status: true
                };
                let Count = await Box_Amount_Share.countDocuments(query).lean().exec();
                let Result = await Box_Amount_Share.find(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                if((Result!=null)&&(Result[0].Image_Available)){
                async.eachSeries(Result, async (item, callback) => {
                    try {
                        item.Image_Data = await CommonController.Common_Image_Response_Single_Image(true, item.Image_Data);
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async (err) => {
                    if (err) reject(err);
                    resolve({ success: true, extras: { Count: Count, Data: Result } });
                });
            }else{
                resolve({ success: true, extras: { Count: Count, Data: Result } });
            }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Add_Update_Box_Amount_Shares = (values, ImageData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Box_One_Share = (+values.Box_One.Cash_Percent) + (+values.Box_One.Purchace_Percent) + (+values.Box_One.Gift_Percent) + (+values.Box_One.Upgrade_Coupon_Percent) + (+values.Box_One.Nine_Level_Percent)
                let Box_Two_Share = (+values.Box_Two.Cash_Percent) + (+values.Box_Two.Purchace_Percent) + (+values.Box_Two.Gift_Percent) + (+values.Box_Two.Upgrade_Coupon_Percent) + (+values.Box_Two.Nine_Level_Percent)
                let Box_Three_Share = (+values.Box_Three.Cash_Percent) + (+values.Box_Three.Purchace_Percent) + (+values.Box_Three.Gift_Percent) + (+values.Box_Three.Upgrade_Coupon_Percent) + (+values.Box_Three.Nine_Level_Percent)

                let Box_Number = parseInt(values.Box_Number);
             //   if (Box_One_Share == 100 && Box_Two_Share == 100 && Box_Three_Share == 100) {
                    let fndupdquery = {
                        Status: true
                    };
                    let fndupdchanges = {
                        $setOnInsert: {
                            Box_Amount_ShareID: uuid.v4(),
                            created_at: new Date()
                        },
                        $set: {
                            Image_Data: ImageData,
                            Image_Available: values.Image_Available,
                            Price: values.Price,
                            Description: values.Description,
                            Product_Name: values.Product_Name,
                            Box_One: values.Box_One,
                            Box_Two: values.Box_Two,
                            Box_Three: values.Box_Three,
                            // Cash_Percent: values.Cash_Percent,
                            // Purchace_Percent: values.Purchace_Percent,
                            // Gift_Percent: values.Gift_Percent,
                            // Upgrade_Coupon_Percent: values.Upgrade_Coupon_Percent,
                            // Nine_Level_Percent: values.Nine_Level_Percent,
                            updated_at: new Date()
                        },
                    };
                    let fndupdoptions = {
                        upsert: true,
                        setDefaultsOnInsert: true,
                        new: true
                    }
                    let findupdateData = await Box_Amount_Share.findOneAndUpdate(fndupdquery, fndupdchanges, fndupdoptions).select('-id -_v').lean();
                    resolve({ success: true, extras: { Status: "Box Amount Share Updated Successfully" } })

                // } else {
                //     reject({ success: false, extras: { msg: ApiMessages.SHARE_PERCENT_MUSTBE_EQUALTO_100 } });
                // }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_With_Draw_Gift_Amount_Requests = values => {
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

AdminController.Buyer_Purchase_Logs = values => {
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
                // let query = { 
                //     Status: true
                // };
                if (values.Active_Inactive_Status == undefined || values.Active_Inactive_Status == null) {
                    values.Active_Inactive_Status = true
                }
                let query = {
                    // Status: values.Active_Inactive_Status
                };
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

AdminController.Activate_Inactivate_Gift_Meter = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Gift_MeterID: values.Gift_MeterID
                };
                let Result = await Gift_Meter.findOne(query).lean();
                if (Result != null) {
                    let changes;
                    if (Result.Status == true) {
                        changes = {
                            $set: {
                                Status: false,
                                updated_at: new Date()
                            }
                        }
                    } else {
                        changes = {
                            $set: {
                                Status: true,
                                updated_at: new Date()
                            }
                        }
                    }
                    let updatedSubscription_Links = await Gift_Meter.updateOne(query, changes).lean();
                    resolve({ success: true, extras: { Status: "Gift Meter Updated Successfully" } })
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_GIFT_METER } })
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_Gift_Meter = values => {
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
                // let query = { 
                //     Status: true
                // };
                if (values.Active_Inactive_Status == undefined || values.Active_Inactive_Status == null) {
                    values.Active_Inactive_Status = true
                }
                let query = {
                    Status: values.Active_Inactive_Status
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
                    resolve({ success: true, extras: { Count: Count, Data: Result } });
                });

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Check_For_Gift_Meter_SNo_Available = (values) => {
    return new Promise(async (resolve, reject) => {
        try {
            let query;
            if (values.Gift_MeterID != null && values.Gift_MeterID != "" && values.Gift_MeterID != undefined) {
                query = {
                    SNo: values.SNo,
                    Gift_MeterID: {
                        $ne: values.Gift_MeterID
                    },
                }
            } else {
                query = {
                    SNo: values.SNo,
                }
            }
            let Result = await Gift_Meter.findOne(query).lean().exec();
            if (Result == null) {
                resolve('SNo Available');
            } else {
                reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST } })
                // msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST
            }
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}

AdminController.Update_Gift_Meter = (values, ImageData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let query = {
                    Gift_MeterID: values.Gift_MeterID
                }
                let changes = {
                    $set: {
                        SNo: values.SNo,
                        Title_Name: values.Title_Name,
                        Image_Available: values.Image_Available,
                        Value: values.Value,
                        Image_Data: ImageData,
                        Status: true,
                        updated_at: new Date()
                    }
                };
                let SaveData = await Gift_Meter.updateOne(query, changes).lean().exec();
                resolve({ success: true, extras: { status: "Gift Meter Updated Successfully" } })


            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Add_Gift_Meter = (values, ImageData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                
                // if (values.CC_Admin_Share_Percent <= 100) {
                let query = {
                    SNo: values.SNo
                }
                let Result = await Gift_Meter.findOne(query).lean();
                if (Result == null) {
                    let Data = {
                        Gift_MeterID: uuid.v4(),
                        SNo: values.SNo,
                        Title_Name: values.Title_Name,
                        Image_Available: values.Image_Available,
                        Value: values.Value,
                        Image_Data: ImageData,
                        Status: true,
                        created_at: new Date(),
                        updated_at: new Date()
                    };
                    let SaveResult = await Gift_Meter(Data).save();
                    resolve({ success: true, extras: { Status: "Gift Meter Added Successfully" } });
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST } })
                }

                // } else {
                //     reject({ success: false, extras: { msg: ApiMessages.SHARE_PERCENT_MUSTBE_LESS_THAN_100 } })
                // }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Activate_Inactivate_Target_Referal = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Target_ReferalID: values.Target_ReferalID
                };
                let Result = await Target_Referal.findOne(query).lean();
                if (Result != null) {
                    let changes;
                    if (Result.Status == true) {
                        changes = {
                            $set: {
                                Status: false,
                                updated_at: new Date()
                            }
                        }
                    } else {
                        changes = {
                            $set: {
                                Status: true,
                                updated_at: new Date()
                            }
                        }
                    }
                    let updatedSubscription_Links = await Target_Referal.updateOne(query, changes).lean();
                    resolve({ success: true, extras: { Status: "Target_Referal Product Updated Successfully" } })
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_C_PRODUCT } })
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_Target_Referals = values => {
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
                // let query = { 
                //     Status: true
                // };
                if (values.Active_Inactive_Status == undefined || values.Active_Inactive_Status == null) {
                    values.Active_Inactive_Status = true
                }
                let query = {
                    Status: values.Active_Inactive_Status
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

AdminController.Update_Target_Referal = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let query = {
                    Target_ReferalID: values.Target_ReferalID
                }
                let changes = {
                    $set: {
                        SNo: values.SNo,
                        Target_Referal: values.Target_Referal,
                        Wallet_Limit: values.Wallet_Limit,

                        updated_at: new Date()
                    }
                };
                let SaveData = await Target_Referal.updateOne(query, changes).lean().exec();
                resolve({ success: true, extras: { status: "Coupon Product Updated Successfully" } })


            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Add_Target_Referal = (values, ImageData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                // if (values.CC_Admin_Share_Percent <= 100) {
                let query = {
                    SNo: values.SNo
                }
                let Result = await Target_Referal.findOne(query).lean();
                if (Result == null) {
                    let Data = {
                        Target_ReferalID: uuid.v4(),
                        SNo: values.SNo,
                        Target_Referal: values.Target_Referal,
                        Wallet_Limit: values.Wallet_Limit,

                        Status: true,
                        created_at: new Date(),
                        updated_at: new Date()
                    };
                    let SaveResult = await Target_Referal(Data).save();
                    resolve({ success: true, extras: { Status: "Target Referal Added Successfully" } });
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST } })
                }

                // } else {
                //     reject({ success: false, extras: { msg: ApiMessages.SHARE_PERCENT_MUSTBE_LESS_THAN_100 } })
                // }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_Coupon_Products = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    SNo: 1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                // let query = { 
                //     Status: true
                // };
                if (values.Active_Inactive_Status == undefined || values.Active_Inactive_Status == null) {
                    values.Active_Inactive_Status = true
                }
                let query = {
                    Status: values.Active_Inactive_Status
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

AdminController.Activate_Inactivate_Coupon_Products = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Coupons_ProductID: values.Coupons_ProductID
                };
                let Result = await Coupon_Products.findOne(query).lean();
                if (Result != null) {
                    let changes;
                    if (Result.Status == true) {
                        changes = {
                            $set: {
                                Status: false,
                                updated_at: new Date()
                            }
                        }
                    } else {
                        changes = {
                            $set: {
                                Status: true,
                                updated_at: new Date()
                            }
                        }
                    }
                    let updatedSubscription_Links = await Coupon_Products.updateOne(query, changes).lean();
                    resolve({ success: true, extras: { Status: "Coupons Product Updated Successfully" } })
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_C_PRODUCT } })
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Check_For_Coupons_Product_SNo_Available = (values) => {
    return new Promise(async (resolve, reject) => {
        try {
            let query;
            if (values.Coupons_ProductID != null && values.Coupons_ProductID != "" && values.Coupons_ProductID != undefined) {
                query = {
                    SNo: values.SNo,
                    Coupons_ProductID: {
                        $ne: values.Coupons_ProductID
                    },
                }
            } else {
                query = {
                    SNo: values.SNo,
                }
            }
            let Result = await Coupon_Products.findOne(query).lean().exec();
            if (Result == null) {
                resolve('SNo Available');
            } else {
                reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST } })
                // msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST
            }
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}

AdminController.Check_For_Target_Referal_SNo_Available = (values) => {
    return new Promise(async (resolve, reject) => {
        try {
            let query;
            if (values.Target_ReferalID != null && values.Target_ReferalID != "" && values.Target_ReferalID != undefined) {
                query = {
                    SNo: values.SNo,
                    Target_ReferalID: {
                        $ne: values.Target_ReferalID
                    },
                }
            } else {
                query = {
                    SNo: values.SNo,
                }
            }
            let Result = await Target_Referal.findOne(query).lean().exec();
            if (Result == null) {
                resolve('SNo Available');
            } else {
                reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST } })
                // msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST
            }
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}

AdminController.Update_Coupon_Products = (values, ImageData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let query = {
                    Coupons_ProductID: values.Coupons_ProductID
                }
                let changes = {
                    $set: {
                        C_Product_Name: values.C_Product_Name,
                        C_Product_Description: values.C_Product_Description,
                        C_Product_Price: values.C_Product_Price,
                        C_Product_Image_Available: values.C_Product_Image_Available,
                        C_Product_Image_Data: ImageData,
                        SNo: values.SNo,
                        Cash_Coupons_Share: values.Cash_Coupons_Share,
                        Purchace_Coupons_Share: values.Purchace_Coupons_Share,
                        Gift_Coupons_Share: values.Gift_Coupons_Share,
                        Update_Coupons_Share: values.Update_Coupons_Share,
                        updated_at: new Date()
                    }
                };
                let SaveData = await Coupon_Products.updateOne(query, changes).lean().exec();
                resolve({ success: true, extras: { status: "Coupon Product Updated Successfully" } })


            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Add_Coupon_Products = (values, ImageData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                // if (values.CC_Admin_Share_Percent <= 100) {
                let query = {
                    SNo: values.SNo
                }
                let Result = await Coupon_Products.findOne(query).lean();
                if (Result == null) {
                    let Data = {
                        Coupons_ProductID: uuid.v4(),
                        C_Product_Name: values.C_Product_Name,
                        C_Product_Description: values.C_Product_Description,
                        C_Product_Price: values.C_Product_Price,
                        C_Product_Image_Available: values.C_Product_Image_Available,
                        C_Product_Image_Data: await ImageData,
                        SNo: values.SNo,
                        Cash_Coupons_Share: values.Cash_Coupons_Share,
                        Purchace_Coupons_Share: values.Purchace_Coupons_Share,
                        Gift_Coupons_Share: values.Gift_Coupons_Share,
                        Update_Coupons_Share: values.Update_Coupons_Share,
                        Status: true,
                        created_at: new Date(),
                        updated_at: new Date()
                    };
                    let SaveResult = await Coupon_Products(Data).save();
                    resolve({ success: true, extras: { Status: "Coupons Product Added Successfully" } });
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST } })
                }

                // } else {
                //     reject({ success: false, extras: { msg: ApiMessages.SHARE_PERCENT_MUSTBE_LESS_THAN_100 } })
                // }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Levels_Amount_sharing = (values, Share_RequestData, BuyerData, Buyers_Network_Data, No_of_Buyers_Network, Remaining_Levels, one_level_Share_Amount) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let First_nine_Level_Arr = []
                if (No_of_Buyers_Network > 0) {
                    for (let i = 0; i <= 8; i++) {
                        if (Buyers_Network_Data[i] != undefined) {
                            await First_nine_Level_Arr.push(Buyers_Network_Data[i])
                        }
                    }

                    let i = 1;
                    async.eachSeries(First_nine_Level_Arr, async (item, callback) => {
                        try {
                            
                            i++
                            let user_query = {
                                BuyerID: item
                            }

                            let Level_BuyerData = await Buyers.findOne(user_query).lean().exec()
                            if (Level_BuyerData != null) {
                                let Sharing_Target_Referal_Amount = await AdminController.Purchase_Amount_Processing_Levels(values, Level_BuyerData, one_level_Share_Amount, Share_RequestData, BuyerData)
                            }


                            


                            callback();
                        } catch (error) {
                            callback(error);
                        }
                    }, async (err) => {
                        if (err) reject(err);

                        let Remaining_Level_Share_Amount = 0
                        if (Remaining_Levels > 0) {
                            // .toFixed(0);
                            Remaining_Level_Share_Amount = one_level_Share_Amount * Remaining_Levels
                            Remaining_Level_Share_Amount = Remaining_Level_Share_Amount.toFixed(0)
                            
                            //Sharing company amount>>>>>>>>>>>>>>>>>>>>>>>>>>
                            let cxData = {
                                // OrderID: Result.OrderID,
                                Buyer_Shop_request_ID: values.Buyer_Shop_request_ID,
                                Share_RequestData: Share_RequestData,
                                BuyerData: BuyerData,
                                Amount: Remaining_Level_Share_Amount
                            }

                            let CData = {
                                LogID: uuid.v4(),
                                Type: 7, //Remaining 9 Level Share Amount Credit Amount Sharing Amount Request
                                Amount: Remaining_Level_Share_Amount,
                                Data: cxData,
                                Time: new Date()
                            };
                            let SaveCData = await Company_Share_Logs(CData).save();
                            let Companychanges = {
                                $inc: {
                                    Available_Amount: Remaining_Level_Share_Amount,
                                    Total_Amount: Remaining_Level_Share_Amount
                                }
                            }
                            let CSaveData = await Company_Share.updateOne({}, Companychanges).lean().exec();
                        }
                        // 

                        resolve("Success")
                        // resolve({ success: true, extras: { Count: Count, Data: Result } });
                    });
                }
                resolve("Success")

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Purchase_Amount_Processing_Levels = (values, Level_BuyerData, one_level_Share_Amount, Share_RequestData, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                console.log("846--->" + one_level_Share_Amount);
                
                let query_network = {
                    BuyerID: Level_BuyerData.BuyerID
                }
                let network_data = await Buyers_Ultimate_Network.findOne(query_network).lean().exec()

                console.log("893--->" + JSON.stringify(network_data));

                let query_networkx = {
                    BuyerID: Share_RequestData.BuyerID
                }
                let network_datax = await Buyers.findOne(query_networkx).lean().exec()

                // let query_Share_buyer = {
                //     // From_Buyer_Name: BuyerData.Buyer_Name
                //     BuyerID: Share_RequestData.BuyerID
                // }
                
                if (network_data != null) {
                    if (network_data.No_of_Network > 0) {
                        let query_tgt_ref = {
                            Target_Referal: {
                                $gte: network_data.No_of_Network,
                            }
                        }
                        let Target_Referals = await Target_Referal.find(query_tgt_ref).lean().exec()
                        if (Target_Referals != null) {
                            
                            let min = Math.min.apply(null, Target_Referals.map(function (item) {
                                return item.Target_Referal;
                            }))
                            let Find_Doc = await Target_Referals.find(function (Target) {
                                return (Target.Target_Referal == min);
                            });
                            
                            // return true
                            console.log("883----> ("+Level_BuyerData.Purchace_Coupons_Amount_Total+ "<="+ Find_Doc.Wallet_Limit +")" )
                            if (Level_BuyerData.Purchace_Coupons_Amount_Total <= Find_Doc.Wallet_Limit) {
                                 
                                console.log("1015--->success target amt " + Level_BuyerData.Buyer_PhoneNumber + "-amt--" + one_level_Share_Amount.toFixed(0));


                               
                                let Total_Share_Amount = Level_BuyerData.Purchace_Coupons_Amount_Total + one_level_Share_Amount
                                let Extra_Amount = 0
                                let Final_Amount = 0
                                if (Total_Share_Amount > Find_Doc.Wallet_Limit) {
                                    Extra_Amount = Total_Share_Amount - Find_Doc.Wallet_Limit
                                }
                                Final_Amount = one_level_Share_Amount - Extra_Amount
                                console.log("897---> Saving Logs fromuser ---> " + network_datax.Buyer_PhoneNumber);
                               
                                // 
                                let PWData = {
                                    LogID: uuid.v4(),
                                    BuyerID: Level_BuyerData.BuyerID,
                                    Type: 3,  //User SHop Credited amount for Buyer Share Amount Request Notofication
                                    Amount: Final_Amount,
                                    Data: {
                                        Buyer_Name: network_datax.Buyer_Name,
                                        From_Buyer_Name: network_datax.Buyer_Name
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
                                    console.log("1057--->fail target amt " + Level_BuyerData.Buyer_PhoneNumber + "-amt--" + one_level_Share_Amount.toFixed(0));

                                    let Save_Expire_WalletAMount = await AdminController.Expire_Wallet_Amount_Saving(Extra_Amount, Level_BuyerData, BuyerData, Share_RequestData);

                                }

                            } else {
                                console.log("934--->fail target amt " + Level_BuyerData.Buyer_PhoneNumber + "-amt--" + one_level_Share_Amount.toFixed(0));

                                let Save_Expire_WalletAMount = await AdminController.Expire_Wallet_Amount_Saving(one_level_Share_Amount, Level_BuyerData, BuyerData, Share_RequestData);
                            }

                        } else {
                            console.log("1015--->success but no target amt " + Level_BuyerData.Buyer_PhoneNumber + "-amt--" + one_level_Share_Amount.toFixed(0));

                            let Adata = {
                                Buyer_Name: network_datax.Buyer_Name,
                                From_Buyer_Name: network_datax.Buyer_Name
                            }
                            let APWData = {
                                LogID: uuid.v4(),
                                BuyerID: Level_BuyerData.BuyerID,
                                Type: 3,  //User SHop Credited amount for Buyer Share Amount Request Notofication
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
                            Share_RequestData: Share_RequestData,
                            Buyer_Name: Level_BuyerData.Buyer_Name,
                            From_Buyer_Name: BuyerData.Buyer_Name
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
                resolve("Processed Succefully")

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


AdminController.Levels_Amount_sharing_Old = (values, Share_RequestData, BuyerData, Buyers_Network_Data, No_of_Buyers_Network, Remaining_Levels, one_level_Share_Amount) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let First_nine_Level_Arr = []
                if (No_of_Buyers_Network > 0) {
                    for (let i = 0; i <= 8; i++) {
                        // 
                        if (Buyers_Network_Data[i] != undefined) {
                            await First_nine_Level_Arr.push(Buyers_Network_Data[i])
                        }
                    }
                    // one_level_Share_Amount = one_level_Share_Amount.toFixed(0)
                    async.eachSeries(First_nine_Level_Arr, async (item, callback) => {
                        try {
                            

                            let user_query = {
                                BuyerID: item
                            }
                            let Wallet_changes = {
                                $inc: {
                                    Available_Amount: one_level_Share_Amount.toFixed(0),
                                    Total_Amount: one_level_Share_Amount.toFixed(0)
                                },
                                $set: {
                                    updated_at: new Date()
                                }
                            }
                            let UpdateData = await Buyers.updateOne(user_query, Wallet_changes).lean().exec()

                            let Data = {
                                // OrderID: Result.OrderID,
                                Buyer_Shop_request_ID: values.Buyer_Shop_request_ID,
                                BuyerData: BuyerData.Buyer_Name,
                                Amount: one_level_Share_Amount.toFixed(0)
                            }
                            let WData = {
                                LogID: uuid.v4(),
                                BuyerID: item,
                                Type: 16,  //One Level Share Amount Credited
                                Amount: one_level_Share_Amount.toFixed(0),
                                Data: Data,
                                Time: new Date()
                            }
                            let Resultlog = Buyer_Share_Logs(WData).save();

                            callback();
                        } catch (error) {
                            callback(error);
                        }
                    }, async (err) => {
                        if (err) reject(err);
                        // resolve({ success: true, extras: { Count: Count, Data: Result } });
                    });
                }

                let Remaining_Level_Share_Amount = 0
                if (Remaining_Levels > 0) {
                    // .toFixed(0);
                    Remaining_Level_Share_Amount = one_level_Share_Amount * Remaining_Levels
                    Remaining_Level_Share_Amount = Remaining_Level_Share_Amount.toFixed(0)
                    
                    //Sharing company amount>>>>>>>>>>>>>>>>>>>>>>>>>>
                    let cxData = {
                        // OrderID: Result.OrderID,
                        Buyer_Shop_request_ID: values.Buyer_Shop_request_ID,
                        Share_RequestData: Share_RequestData,
                        BuyerData: BuyerData,
                        Amount: Remaining_Level_Share_Amount
                    }

                    let CData = {
                        LogID: uuid.v4(),
                        Type: 7, //Remaining 9 Level Share Amount Credit Amount Sharing Amount Request
                        Amount: Remaining_Level_Share_Amount,
                        Data: cxData,
                        Time: new Date()
                    };
                    let SaveCData = await Company_Share_Logs(CData).save();
                    let Companychanges = {
                        $inc: {
                            Available_Amount: Remaining_Level_Share_Amount,
                            Total_Amount: Remaining_Level_Share_Amount
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

AdminController.Expire_Wallet_Amount_Saving = (Amount, Level_BuyerData, BuyerData, Share_RequestData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let query_networkx = {
                    BuyerID: Share_RequestData.BuyerID
                }
                let network_datax = await Buyers.findOne(query_networkx).lean().exec()


                let query = {
                    BuyerID: Level_BuyerData.BuyerID
                }
                let EWData = {
                    LogID: uuid.v4(),
                    BuyerID: Level_BuyerData.BuyerID,
                    Type: 2,  //User SHop Credited amount for Buyer Share Amount Request Notofication
                    Amount: Amount.toFixed(0),
                    Data: {
                        BuyerData: BuyerData.Buyer_Name,
                        Buyer_Name: BuyerData.Buyer_Name,
                        From_Buyer_Name: BuyerData.Buyer_Name
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

AdminController.Purchase_Amount_Processing = (values, BuyerData, Self_Purchase_Share_Amount, Share_RequestData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query_network = {
                    BuyerID: Share_RequestData.BuyerID
                }

                let Adata = {
                    Buyer_Name: BuyerData.Buyer_Name,
                    From_Buyer_Name: BuyerData.Buyer_Name
                }
                let APWData = {
                    LogID: uuid.v4(),
                    BuyerID: Share_RequestData.BuyerID,
                    Type: 3,  //User SHop Credited amount for Buyer Share Amount Request Notofication
                    Amount: Self_Purchase_Share_Amount.toFixed(2),
                    Data: Adata,
                    Time: new Date()
                }
                let ResultlogA = Buyer_Purchase_Wallet_Logs(APWData).save();

                let PW_ChangesA = {
                    $inc: {
                        Purchace_Coupons_Amount_Available: Self_Purchase_Share_Amount.toFixed(2),
                        Purchace_Coupons_Amount_Total: Self_Purchase_Share_Amount.toFixed(2)
                    },
                    $set: {
                        updated_at: new Date()
                    }
                }
                let UpdateDataA = await Buyers.updateOne(query_network, PW_ChangesA).lean().exec()
                resolve("Processed Succefully")


                // let network_data = await Buyers_Ultimate_Network.findOne(query_network).lean().exec()
                // 
                // if (network_data != null) {
                //     if (network_data.No_of_Network > 0) {
                //         let query_tgt_ref = {
                //             Target_Referal: {
                //                 $gte: network_data.No_of_Network,
                //             }
                //         }
                //         let Target_Referals = await Target_Referal.find(query_tgt_ref).lean().exec()
                //         if (Target_Referals != null) {
                //             
                //             
                //             let min = Math.min.apply(null, Target_Referals.map(function (item) {
                //                 return item.Target_Referal;
                //             }))
                //             let Find_Doc = await Target_Referals.find(function (Target) {
                //                 return (Target.Target_Referal = min);
                //             });
                //             
                //             if (BuyerData.Purchace_Coupons_Amount_Total <= Find_Doc.Wallet_Limit) {
                //                 let Total_Share_Amount = BuyerData.Purchace_Coupons_Amount_Total + Self_Purchase_Share_Amount
                //                 let Extra_Amount = 0
                //                 let Final_Amount = 0
                //                 if (Total_Share_Amount > Find_Doc.Wallet_Limit) {
                //                     Extra_Amount = Total_Share_Amount - Find_Doc.Wallet_Limit
                //                 }
                //                 Final_Amount = Self_Purchase_Share_Amount - Extra_Amount

                //                 
                //                 let PWData = {
                //                     LogID: uuid.v4(),
                //                     BuyerID: BuyerData.BuyerID,
                //                     Type: 3,  //User SHop Credited amount for Buyer Share Amount Request Notofication
                //                     Amount: Final_Amount,
                //                     Data: {},
                //                     Time: new Date()
                //                 }
                //                 let ResultlogP = Buyer_Purchase_Wallet_Logs(PWData).save();

                //                 let PW_Changes = {
                //                     $inc: {
                //                         Purchace_Coupons_Amount_Available: Final_Amount,
                //                         Purchace_Coupons_Amount_Total: Final_Amount
                //                     },
                //                     $set: {
                //                         updated_at: new Date()
                //                     }
                //                 }
                //                 let UpdateData = await Buyers.updateOne(query_network, PW_Changes).lean().exec()
                //                 if (Extra_Amount > 0) {
                //                     let Save_Expire_WalletAMount = await AdminController.Expire_Wallet_Amount_Saving(Extra_Amount, BuyerData);

                //                 }

                //             } else {
                //                 let Save_Expire_WalletAMount = await AdminController.Expire_Wallet_Amount_Saving(Self_Purchase_Share_Amount, BuyerData);
                //             }

                //         } else {
                //             let Adata = {

                //             }
                //             let APWData = {
                //                 LogID: uuid.v4(),
                //                 BuyerID: BuyerData.BuyerID,
                //                 Type: 3,  //User SHop Credited amount for Buyer Share Amount Request Notofication
                //                 Amount: Self_Purchase_Share_Amount,
                //                 Data: Adata,
                //                 Time: new Date()
                //             }
                //             let ResultlogA = Buyer_Purchase_Wallet_Logs(APWData).save();

                //             let PW_ChangesA = {
                //                 $inc: {
                //                     Purchace_Coupons_Amount_Available: Self_Purchase_Share_Amount,
                //                     Purchace_Coupons_Amount_Total: Self_Purchase_Share_Amount
                //                 },
                //                 $set: {
                //                     updated_at: new Date()
                //                 }
                //             }
                //             let UpdateDataA = await Buyers.updateOne(query_network, PW_ChangesA).lean().exec()
                //         }
                //     }
                // } else {
                //     let CData = {
                //         LogID: uuid.v4(),
                //         Type: 9, //Credit Amount Self Purchase Amount Sharing Amount Request
                //         Amount: Self_Purchase_Share_Amount,
                //         Data: {},
                //         Time: new Date()
                //     };
                //     let SaveCData = await Company_Share_Logs(CData).save();
                //     let Companychanges = {
                //         $inc: {
                //             Available_Amount: Self_Purchase_Share_Amount,
                //             Total_Amount: Self_Purchase_Share_Amount
                //         }
                //     }
                //     let CSaveData = await Company_Share.updateOne({}, Companychanges).lean().exec();
                // }
                // resolve("Processed Succefully")

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


AdminController.Purchase_Amount_Processing_Old = (values, BuyerData, Self_Purchase_Share_Amount, Share_RequestData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query_network = {
                    BuyerID: BuyerData.BuyerID
                }
                let network_data = await Buyers_Ultimate_Network.findOne(query_network).lean().exec()
                
                if (network_data != null) {
                    if (network_data.No_of_Network > 0) {
                        let query_tgt_ref = {
                            Target_Referal: {
                                $gte: network_data.No_of_Network,
                            }
                        }
                        let Target_Referals = await Target_Referal.find(query_tgt_ref).lean().exec()
                        if (Target_Referals != null) {
                            
                            
                            let min = Math.min.apply(null, Target_Referals.map(function (item) {
                                return item.Target_Referal;
                            }))
                            let Find_Doc = await Target_Referals.find(function (Target) {
                                return (Target.Target_Referal = min);
                            });
                            
                            if (BuyerData.Purchace_Coupons_Amount_Total <= Find_Doc.Wallet_Limit) {
                                let Total_Share_Amount = BuyerData.Purchace_Coupons_Amount_Total + Self_Purchase_Share_Amount
                                let Extra_Amount = 0
                                let Final_Amount = 0
                                if (Total_Share_Amount > Find_Doc.Wallet_Limit) {
                                    Extra_Amount = Total_Share_Amount - Find_Doc.Wallet_Limit
                                }
                                Final_Amount = Self_Purchase_Share_Amount - Extra_Amount

                                
                                let PWData = {
                                    LogID: uuid.v4(),
                                    BuyerID: BuyerData.BuyerID,
                                    Type: 3,  //User SHop Credited amount for Buyer Share Amount Request Notofication
                                    Amount: Final_Amount,
                                    Data: {
                                        BuyerData: BuyerData,
                                        Share_RequestData: Share_RequestData,
                                        Buyer_Name: BuyerData.Buyer_Name,
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
                                    // let Save_Expire_WalletAMount = await AdminController.Expire_Wallet_Amount_Saving(Extra_Amount, BuyerData);

                                }

                            } else {
                                // let Save_Expire_WalletAMount = await AdminController.Expire_Wallet_Amount_Saving(Self_Purchase_Share_Amount, BuyerData);
                            }

                        } else {
                            let Adata = {
                                Buyer_Name: BuyerData.Buyer_Name,
                            }
                            let APWData = {
                                LogID: uuid.v4(),
                                BuyerID: BuyerData.BuyerID,
                                Type: 3,  //User SHop Credited amount for Buyer Share Amount Request Notofication
                                Amount: Self_Purchase_Share_Amount,
                                Data: Adata,
                                Time: new Date()
                            }
                            let ResultlogA = Buyer_Purchase_Wallet_Logs(APWData).save();

                            let PW_ChangesA = {
                                $inc: {
                                    Purchace_Coupons_Amount_Available: Self_Purchase_Share_Amount,
                                    Purchace_Coupons_Amount_Total: Self_Purchase_Share_Amount
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
                        Amount: Self_Purchase_Share_Amount,
                        Data: {},
                        Time: new Date()
                    };
                    let SaveCData = await Company_Share_Logs(CData).save();
                    let Companychanges = {
                        $inc: {
                            Available_Amount: Self_Purchase_Share_Amount,
                            Total_Amount: Self_Purchase_Share_Amount
                        }
                    }
                    let CSaveData = await Company_Share.updateOne({}, Companychanges).lean().exec();
                }
                resolve("Processed Succefully")

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Sharing_The_Buyer_Share_Requests = (values, Share_RequestData, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Self_Purchase_Share_Amount = 0
                let Direct_Refer_Share_Amount = 0
                let Nine_Levels_Share_Amount = 0
                let Trimming_For_ID_Share_Amount = 0
                let Shop_Keepers_Trimming_Share_Amount = 0
                let Company_Share_Amount = 0
                let GST_Service_Store_etc_Share_Amount = 0
                let State_Price =0
                let District_Price = 0
                let Pincode_Price = 0


                let query = {
                    Status: true
                };


                
                let Common_Share_Settings = await Common_App_Settings.findOne(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').lean();
                let Data;
                if (Common_Share_Settings != null) {
                    Self_Purchase_Share_Amount = (values.Share_Amount / 100) * Common_Share_Settings.Self_Purchase_ID
                    Direct_Refer_Share_Amount = (values.Share_Amount / 100) * Common_Share_Settings.Direct_Refer_ID
                    Nine_Levels_Share_Amount = (values.Share_Amount / 100) * Common_Share_Settings.Nine_Levels
                    Trimming_For_ID_Share_Amount = (values.Share_Amount / 100) * Common_Share_Settings.Trimming_For_IDs
                    Shop_Keepers_Trimming_Share_Amount = (values.Share_Amount / 100) * Common_Share_Settings.Shop_Keepers_Trimming
                    Company_Share_Amount = (values.Share_Amount / 100) * Common_Share_Settings.Company
                    GST_Service_Store_etc_Share_Amount = (values.Share_Amount / 100) * Common_Share_Settings.GST_Service_Store_etc_Amount
                    State_Price = (values.Share_Amount / 100) * Common_Share_Settings.State_Price
                    District_Price = (values.Share_Amount / 100) * Common_Share_Settings.District_Price
                    Pincode_Price = (values.Share_Amount / 100) * Common_Share_Settings.Pincode_Price

                    let one_level_Share_Amount = await (Nine_Levels_Share_Amount / config.max_buyer_network_heirarchy)
                    one_level_Share_Amount = await one_level_Share_Amount

                    Data = {
                        Self_Purchase_Share_Amount, Direct_Refer_Share_Amount, Nine_Levels_Share_Amount, Trimming_For_ID_Share_Amount, Shop_Keepers_Trimming_Share_Amount, Company_Share_Amount, GST_Service_Store_etc_Share_Amount, one_level_Share_Amount
                    }

                    //levale network Find_Buyer_Hierarchy


                    let Buyers_Network_Data = await ShopController.Find_Buyer_Hierarchy([], Share_RequestData.BuyerID);

                    await Buyers_Network_Data.splice(0, 1);
                    let No_of_Buyers_Network = Buyers_Network_Data.length;
                    let Remaining_Levels = 9 - No_of_Buyers_Network

                    


                    ///Sharing Selff Purchase AMount
                    let Purchase_amount_share = await AdminController.Purchase_Amount_Processing(values, BuyerData, Self_Purchase_Share_Amount, Share_RequestData)

                    
                    let Sharing_Level_Amount = await AdminController.Levels_Amount_sharing(values, Share_RequestData, BuyerData, Buyers_Network_Data, No_of_Buyers_Network, Remaining_Levels, one_level_Share_Amount)
 
                    ////??????????? 
                    // return true
                    // is order inside

                    let Order_Query = {
                        BuyerID: values.BuyerID
                    }
                    let OrderResult = await Buyer_Shop_requests_Notification.findOne(Order_Query).lean();

                    if(Share_RequestData.IsOrderOnline!=null){
                    if(Share_RequestData.IsOrderOnline){

                        let queryOrders ={
                            OrderID:  Share_RequestData.OrderID
                        }

                        let OrderData = await Order.findOne(queryOrders).lean().exec()

                        if(OrderData!=null){
                        let Pincode_Query = {
                            PincodeID: OrderData.PincodeID
                        }
                        let PincodeData = await Pincodes.findOne(Pincode_Query).lean().exec()



                            if(PincodeData!=null){


                                let DistrictQeury = {
                                    DistrictID: PincodeData.DistrictID
                                }

                                let DistrictData = Districts.findOne(DistrictQeury).lean().exec();


                                if(DistrictData!=null){

                                    if(DistrictData.BuyerID!=null){
                                        let Buyer_query = {
                                            BuyerID: DistrictData.BuyerID
                                        }
                                        let Wallet_Buyer_changes = {
                                            $inc: {
                                                Available_Amount: Pincode_Price,
                                                Total_Amount: Pincode_Price
                                            },
                                            $set: {
                                                updated_at: new Date()
                                            }
                                        }
                                        let UpdateData = await Buyers.updateOne(Buyer_query, Wallet_Buyer_changes).lean().exec()
                    
                                        let Wallet_Data = {
                                            // OrderID: Result.OrderID,
                                           
                                            BuyerData: BuyerData.Buyer_Name,
                                            Amount: Self_Purchase_Share_Amount,
                                            From_Buyer_Name: BuyerData.Buyer_Name
                                        }
                                        let WalletData = {
                                            LogID: uuid.v4(),
                                            BuyerID: values.BuyerID,
                                            Type: 15,  //User Credited Amount for Placing order
                                            Amount: Pincode_Price,
                                            Data: Wallet_Data,
                                            Time: new Date()
                                        }
                                        let Resultlog = Buyer_Share_Logs(WalletData).save();
                

                                    }
                                }






                                let StateQeury = {
                                    StateID: PincodeData.StateID
                                }

                                let StateData = States.findOne(StateQeury).lean().exec();

                                if(StateData!=null){

                                    if(StateData.BuyerID!=""){
                                        let Buyer_query = {
                                            BuyerID: StateData.BuyerID
                                        }
                                        let Wallet_Buyer_changes = {
                                            $inc: {
                                                Available_Amount: Pincode_Price,
                                                Total_Amount: Pincode_Price
                                            },
                                            $set: {
                                                updated_at: new Date()
                                            }
                                        }
                                        let UpdateData = await Buyers.updateOne(Buyer_query, Wallet_Buyer_changes).lean().exec()
                    
                                        let Wallet_Data = {
                                            // OrderID: Result.OrderID,
                                           
                                            BuyerData: BuyerData.Buyer_Name,
                                            Amount: Self_Purchase_Share_Amount,
                                            From_Buyer_Name: BuyerData.Buyer_Name
                                        }
                                        let WalletData = {
                                            LogID: uuid.v4(),
                                            BuyerID: values.BuyerID,
                                            Type: 15,  //User Credited Amount for Placing order
                                            Amount: Pincode_Price,
                                            Data: Wallet_Data,
                                            Time: new Date()
                                        }
                                        let Resultlog = Buyer_Share_Logs(WalletData).save();
                
                                    }
                                }


                                let Users_ShopsQuery = {
                                    PincodeID : PincodeData.PincodeID
                                }
                                let Users_ShopsData = Users_Shops.findOne(Users_ShopsQuery).lean().exec()

                                if(Users_ShopsData!=null){

                                    let Buyer_query = {
                                        BuyerID: Users_ShopsData.BuyerID
                                    }
                                    let Wallet_Buyer_changes = {
                                        $inc: {
                                            Available_Amount: Pincode_Price,
                                            Total_Amount: Pincode_Price
                                        },
                                        $set: {
                                            updated_at: new Date()
                                        }
                                    }
                                    let UpdateData = await Buyers.updateOne(Buyer_query, Wallet_Buyer_changes).lean().exec()
                
                                    let Wallet_Data = {
                                        // OrderID: Result.OrderID,
                                       
                                        BuyerData: BuyerData.Buyer_Name,
                                        Amount: Self_Purchase_Share_Amount,
                                        From_Buyer_Name: BuyerData.Buyer_Name
                                    }
                                    let WalletData = {
                                        LogID: uuid.v4(),
                                        BuyerID: values.BuyerID,
                                        Type: 15,  //User Credited Amount for Placing order
                                        Amount: Pincode_Price,
                                        Data: Wallet_Data,
                                        Time: new Date()
                                    }
                                    let Resultlog = Buyer_Share_Logs(WalletData).save();
            

                                }



                            }
                        


                         }

                       
                    }
                }


                    

                    let user_query = {
                        BuyerID: values.BuyerID
                    }
                    let Wallet_changes = {
                        $inc: {
                            Available_Amount: Self_Purchase_Share_Amount,
                            Total_Amount: Self_Purchase_Share_Amount
                        },
                        $set: {
                            updated_at: new Date()
                        }
                    }
                    let UpdateData = await Buyers.updateOne(user_query, Wallet_changes).lean().exec()

                    let Data = {
                        // OrderID: Result.OrderID,
                       
                        BuyerData: BuyerData.Buyer_Name,
                        Amount: Self_Purchase_Share_Amount,
                        From_Buyer_Name: BuyerData.Buyer_Name
                    }
                    let WData = {
                        LogID: uuid.v4(),
                        BuyerID: values.BuyerID,
                        Type: 14,  //User Credited Amount for Share amount request
                        Amount: Self_Purchase_Share_Amount,
                        Data: Data,
                        Time: new Date()
                    }
                    let Resultlog = Buyer_Share_Logs(WData).save();

                    // if(BuyerData.Ref_PhoneNumber != ""){

                    // }
                    //ref Amount share >>>>>>>>>>>>>>>>>>>>>>>>>>>
                    
                    if (BuyerData.Ref_PhoneNumber_Available && BuyerData.Ref_PhoneNumber != "" && BuyerData.Ref_PhoneNumber != undefined && BuyerData.Ref_PhoneNumber != null) {
                        // ref_percent = config.User_shop_referal_Percent
                        // let ref_Amount = (Result.Amount_Paid.Total_Amount_Paid / 100) * ref_percent
                        // ref_Amount = await ref_Amount.toFixed(2);

                        let refuser_query = {
                            Buyer_PhoneNumber: BuyerData.Ref_PhoneNumber
                        }
                        let Reft_BuyerData = await Buyers.findOne(refuser_query).lean().exec()
                        if (Reft_BuyerData != null) {
                            let Wallet_changes = {
                                $inc: {
                                    Available_Amount: Direct_Refer_Share_Amount,
                                    Total_Amount: Direct_Refer_Share_Amount
                                },
                                $set: {
                                    updated_at: new Date()
                                }
                            }
                            let UpdateData = await Buyers.updateOne(refuser_query, Wallet_changes).lean().exec()

                            let Data = {
                                // OrderID: Result.OrderID,
                                
                                BuyerData: BuyerData.Buyer_Name,
                                Amount: Direct_Refer_Share_Amount,
                                From_Buyer_Name: BuyerData.Buyer_Name
                            }

                            let WData = {
                                LogID: uuid.v4(),
                                BuyerID: Reft_BuyerData.BuyerID,
                                Type: 15,  //Refreal amount credited for Share request Amount
                                Amount: Direct_Refer_Share_Amount,
                                Data: Data,
                                Time: new Date()
                            }
                            let Resultlog = Buyer_Share_Logs(WData).save();
                        }

                    }

                    //Sharing company amount>>>>>>>>>>>>>>>>>>>>>>>>>>
                    let cxData = {
                        // OrderID: Result.OrderID,
                        Buyer_Shop_request_ID: values.Buyer_Shop_request_ID,
                        Share_RequestData: Share_RequestData,
                        BuyerData: BuyerData,
                        Amount: Direct_Refer_Share_Amount
                    }

                    let CData = {
                        LogID: uuid.v4(),
                        Type: 6, //Credit Amount Sharing Amount Request
                        Amount: Company_Share_Amount,
                        Data: cxData,
                        Time: new Date()
                    };
                    let SaveCData = await Company_Share_Logs(CData).save();
                    let Companychanges = {
                        $inc: {
                            Available_Amount: Company_Share_Amount,
                            Total_Amount: Company_Share_Amount
                        }
                    }
                    let CSaveData = await Company_Share.updateOne({}, Companychanges).lean().exec();

                    //trimmer share amount>>>>>>>>>>>>>>>
                    let TrimmerData = {
                        // OrderID: Result.OrderID,
                        Buyer_Shop_request_ID: values.Buyer_Shop_request_ID,
                        Share_RequestData: Share_RequestData,
                        BuyerData: BuyerData,
                        Amount: Trimming_For_ID_Share_Amount
                    }

                    let TData = {
                        LogID: uuid.v4(),
                        Type: 1, //Credit Amount Sharing Amount Request
                        Amount: Trimming_For_ID_Share_Amount,
                        Data: TrimmerData,
                        Time: new Date()
                    };
                    let TSaveCData = await Trimmer_Share_Wallet_Logs(TData).save();
                    let Trimmerchanges = {
                        $inc: {
                            Available_Amount: Trimming_For_ID_Share_Amount,
                            Total_Amount: Trimming_For_ID_Share_Amount
                        }
                    }
                    let fndupdoptions = {
                        upsert: true,
                        setDefaultsOnInsert: true,
                        new: true
                    }
                    let TSaveData = await Trimmer_Share_Wallet.findOneAndUpdate({}, Trimmerchanges, fndupdoptions).lean().exec();

                    // let findupdateData = await Buyer_Bonanza_Log.findOneAndUpdate(fndupdquery, fndupdchanges, fndupdoptions).select('-id -_v').lean();

                    //SHop Keepers Trimmer AMount>>>>>>>>>>>>>>>>>>>
                    //trimmer share amount>>>>>>>>>>>>>>>
                    let SKTData = {
                        // OrderID: Result.OrderID,
                        Buyer_Shop_request_ID: values.Buyer_Shop_request_ID,
                        Share_RequestData: Share_RequestData,
                        BuyerData: BuyerData,
                        Amount: Shop_Keepers_Trimming_Share_Amount
                    }

                    let SKTrimmerData = {
                        LogID: uuid.v4(),
                        Type: 1, //Credit Amount Sharing Amount Request
                        Amount: Shop_Keepers_Trimming_Share_Amount,
                        Data: SKTData,
                        Time: new Date()
                    };
                    let SKTaveCData = await Shop_Keepers_Trimming_Wallet_Logs(SKTrimmerData).save();
                    let SKTchanges = {
                        $inc: {
                            Available_Amount: Shop_Keepers_Trimming_Share_Amount,
                            Total_Amount: Shop_Keepers_Trimming_Share_Amount
                        }
                    }
                    let SKTSaveData = await Shop_Keepers_Trimming_Wallet.findOneAndUpdate({}, SKTchanges, fndupdoptions).lean().exec();

                    
                    //GST Wallet >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                    let GTData = {
                        // OrderID: Result.OrderID,
                        Buyer_Shop_request_ID: values.Buyer_Shop_request_ID,
                        Share_RequestData: Share_RequestData,
                        BuyerData: BuyerData,
                        Amount: GST_Service_Store_etc_Share_Amount
                    }

                    let GSTData = {
                        LogID: uuid.v4(),
                        Type: 1, //Credit Amount Sharing Amount Request
                        Amount: GST_Service_Store_etc_Share_Amount,
                        Data: GTData,
                        Time: new Date()
                    };
                    let GSTsaveCData = await GST_Serv_Stroe_Share_Wallet_Logs(GSTData).save();
                    let GSTchanges = {
                        $inc: {
                            Available_Amount: GST_Service_Store_etc_Share_Amount,
                            Total_Amount: GST_Service_Store_etc_Share_Amount
                        }
                    }
                    let GSTSaveData = await GST_Serv_Stroe_Share_Wallet.findOneAndUpdate({}, GSTchanges, fndupdoptions).lean().exec();

                }
                resolve("Processed Succefully")

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Accept_Reject_BuyerShare_Requests = (values, ShopData, BuyerData, Share_RequestData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                 
                // return true
                let calbk;
                let query = {
                    Buyer_Shop_request_ID: values.Buyer_Shop_request_ID,
                    Request_Status: 1,
                    Shop_Payment_Status: 1
                };
                let Result = await Buyer_Shop_requests_Notification.findOne(query).lean();
                if (Result != null) {
                    if (values.Approve_Reject == 1) {
                     //   
                        // 
                        let Used_Wallet_Amount = 0
                        let Remaining_Pay_Amount = Result.Share_Amount
                        let Total_User_Share_Amount = Remaining_Pay_Amount + Used_Wallet_Amount
                        // BuyerData.Available_Amount = 40
                        if (BuyerData.Cash_Coupons_Amount_Available > 0) {
                            
                            if (Total_User_Share_Amount <= BuyerData.Cash_Coupons_Amount_Available) {
                                
                                // 
                                // Remaining_Wallet_Amount = BuyerData.Available_Amount - Total_User_Share_Amount
                                Used_Wallet_Amount = Total_User_Share_Amount
                                Remaining_Pay_Amount -= Total_User_Share_Amount

                            } else if (Total_User_Share_Amount > BuyerData.Cash_Coupons_Amount_Available) {
                                
                                Remaining_Pay_Amount = Total_User_Share_Amount - BuyerData.Cash_Coupons_Amount_Available
                                Used_Wallet_Amount = BuyerData.Cash_Coupons_Amount_Available
                                // Remaining_Wallet_Amount = 0
                            }
                        }

                        let Payment_Data = {
                            Amount_Used_From_Wallet: Used_Wallet_Amount,
                            Remaining_Pay_Amount: Remaining_Pay_Amount,
                            Total_Amount: Total_User_Share_Amount,
                            Total_Amount_Paid: (Used_Wallet_Amount + Remaining_Pay_Amount)
                        }
                        if (parseInt(Remaining_Pay_Amount) == 0) {
                            calbk = false;
                            
                            // Payment_Type = 1
                        } else {
                            calbk = true;
                            
                            // Payment_Type = 2
                        }

                        let ResultData = {
                            Payment_Data: Payment_Data,
                            Buyer_Shop_request_ID: values.Buyer_Shop_request_ID,
                            Users_ShopsID: Result.Users_ShopsID,
                            TransactionID: Result.TransactionID,
                            Callback: calbk,
                            Final_Amount: Remaining_Pay_Amount.toFixed(2)
                        }
                        let changes_BU = {
                            $set: {
                                Amount_Paid: await Object.assign({}, Payment_Data),
                                Shop_BuyerID: values.BuyerID,
                                updated_at: new Date()
                            }
                        }
                        
                        let update_BU = await Buyer_Shop_requests_Notification.updateOne(query, changes_BU).lean();
                        
                        resolve({ success: true, extras: { Data: ResultData } })
                        if (!calbk) {

                            let Share_RequestDatax = await CommonController.Buyer_Shop_Request_Data(values);

                            let updateTranx = await ShopController.Razorpay_Calbk_Sharing_The_Buyer_Share_Requests(Share_RequestDatax, "");

                            // let Share_data = await AdminController.Sharing_The_Buyer_Share_Requests(Result, Share_RequestData, BuyerData)

                            // let changes = {
                            //     $set: {
                            //         Request_Status: 3,
                            //         updated_at: new Date()
                            //     }
                            // }
                            // let updatedSubscription_Links = await Buyer_Shop_requests_Notification.updateOne(query, changes).lean();
                        }

                    } else if (values.Approve_Reject == 2) {

                        let updateTranx = await ShopController.Reject_Sharing_The_Buyer_Share_Requests(Share_RequestData);

                        resolve({ success: true, extras: { Status: "User Share Request Rejected Successfully" } });
                    }
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.NO_REQUEST_FOUND } })
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_My_BuyerShare_Requests = (values, BuyerData) => {
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
                    // Users_ShopsID: ShopData.Users_ShopsID,
                    BuyerID: BuyerData.BuyerID,
                    // Request_Status: values.Status,  //1.pending 2.cancelled 3.Approved 
                    Buyer_Payment_Status: 3
                };
                
                let Count = await Buyer_Shop_requests_Notification.countDocuments(query).lean().exec();
                let Result = await Buyer_Shop_requests_Notification.find(query).select('').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                console.log("1808 -- new count ")
                async.eachSeries(Result, async (item, callback) => {
                    try {
                        console.log("new count ")
                        // item.Users_ShopsID_QR_Image = `${config.S3URL}${item.Users_ShopsID_QR_Image}`;
                        item.BuyerData = await CommonController.Check_for_Buyer_new_last(item);
                        item.User_Shop_Data = await CommonController.Check_For_User_Shop_new_la(item);

                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async (err) => {
                    if (err) reject(err);
                    console.log("new count final  + " + JSON.stringify(Result));
                    resolve({ success: true, extras: { Count: Count, Data: Result } });
                });

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_BuyerShare_Requests = (values, ShopData) => {
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
                    Users_ShopsID: ShopData.Users_ShopsID,
                    Request_Status: values.Status,  //1.pending 2.cancelled 3.Approved 
                    // Buyer_Payment_Status: 3
                };
                console.log("1901---->" +JSON.stringify(query))
                let Count = await Buyer_Shop_requests_Notification.countDocuments(query).lean().exec();
                let Result = await Buyer_Shop_requests_Notification.find(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                async.eachSeries(Result, async (item, callback) => {
                    try {
                        // item.Users_ShopsID_QR_Image = `${config.S3URL}${item.Users_ShopsID_QR_Image}`;
                        item.BuyerData = await CommonController.Check_for_Buyer_new_last(item);
                      //  item.User_Shop_Data = await CommonController.Check_For_User_Shop(item);

                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async (err) => {
                    if (err) reject(err);
                  //  console.log("1862---> " + JSON.stringify(Result));
                    resolve({ success: true, extras: { Count: Count, Data: Result } });
                });

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Accept_Reject_User_Shop = (values, ShopData, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Users_ShopsID: values.Users_ShopsID,
                    Payment_Status: 3,
                    User_Shop_Status: 1
                };
                let Result = await Users_Shops.findOne(query).lean();
                if (Result != null) {
                    if (values.Approve_Reject == 1) {
                        
                        let ref_percent = 100;
                        if (BuyerData.Ref_PhoneNumber_Available && BuyerData.Ref_PhoneNumber != "" && BuyerData.Ref_PhoneNumber != undefined && BuyerData.Ref_PhoneNumber != null) {
                            ref_percent = config.User_shop_referal_Percent
                            let ref_Amount = (Result.Amount_Paid.Total_Amount_Paid / 100) * ref_percent
                            ref_Amount = await ref_Amount.toFixed(2);

                            let refuser_query = {
                                Buyer_PhoneNumber: BuyerData.Ref_PhoneNumber
                            }
                            let Reft_BuyerData = await Buyers.findOne(refuser_query).lean().exec()
                            if (Reft_BuyerData != null) {
                                let Wallet_changes = {
                                    $inc: {
                                        Available_Amount: ref_Amount,
                                        Total_Amount: ref_Amount
                                    },
                                    $set: {
                                        updated_at: new Date()
                                    }
                                }
                                let UpdateData = await Buyers.updateOne(refuser_query, Wallet_changes).lean().exec()

                                let Data = {
                                    // OrderID: Result.OrderID,
                                    BuyerData: BuyerData.Buyer_Name,
                                    Amount: ref_Amount,
                                    From_Buyer_Name: BuyerData.Buyer_Name,
                                }
                                let WData = {
                                    LogID: uuid.v4(),
                                    BuyerID: Reft_BuyerData.BuyerID,
                                    Type: 13,  //Refreal amount for shop purchace
                                    Amount: ref_Amount,
                                    Data: Data,
                                    Time: new Date()
                                }
                                let Resultlog = Buyer_Share_Logs(WData).save();
                            }

                        }
                        let changes = {
                            $set: {
                                User_Shop_Status: 3,
                                updated_at: new Date()
                            }
                        }
                        let updatedSubscription_Links = await Users_Shops.updateOne(query, changes).lean();
                        resolve({ success: true, extras: { Status: "User Shop Approved Successfully" } });

                    } else if (values.Approve_Reject == 2) {

                        let user_query = {
                            BuyerID: ShopData.BuyerID
                        }
                        let Wallet_changes = {
                            $inc: {
                                Available_Amount: Result.Amount_Paid.Total_Amount_Paid,
                                Total_Amount: Result.Amount_Paid.Total_Amount_Paid
                            },
                            $set: {
                                updated_at: new Date()
                            }
                        }
                        let UpdateData = await Buyers.updateOne(user_query, Wallet_changes).lean().exec()

                        let Data = {
                            // OrderID: Result.OrderID,
                            BuyerData: BuyerData.Buyer_Name,
                            Amount: Result.Amount_Paid.Total_Amount_Paid,
                            From_Buyer_Name: BuyerData.Buyer_Name,
                        }
                        let WData = {
                            LogID: uuid.v4(),
                            BuyerID: Result.BuyerID,
                            Type: 12,  //User returened cancelled shop amount Purchase Credited amount
                            Amount: Result.Amount_Paid.Total_Amount_Paid,
                            Data: Data,
                            Time: new Date()
                        }
                        let Resultlog = Buyer_Share_Logs(WData).save();


                        let changes = {
                            $set: {
                                User_Shop_Status: 2,
                                updated_at: new Date()
                            }
                        }
                        let updatedSubscription_Links = await Users_Shops.updateOne(query, changes).lean();

                        resolve({ success: true, extras: { Status: "User Shop Cancelled Successfully" } });
                    }
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.NO_USER_SHOP_FOUND } })
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_All_User_Shops = values => {
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
                    Status: true,
                    Payment_Status: 3,
                    User_Shop_Status: values.Status  //1.pending 2.cancelled 3.Approved
                };
                
                let Count = await Users_Shops.countDocuments(query).lean().exec();
                let Result = await Users_Shops.find(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                async.eachSeries(Result, async (item, callback) => {
                    try {
                        item.Users_ShopsID_QR_Image = `${config.S3URL}${item.Users_ShopsID_QR_Image}`;
                        item.Coupons_Category_Data = await CommonController.Check_for_Coupons_Category_only(item);

                        // item.ImageData = await CommonController.Common_Image_Response_Single_Image(true, item.ImageData);
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

AdminController.List_Common_App_Setting = values => {
    return new Promise((resolve, reject) => {
        console.log("Enterered into Admin Controller")
        setImmediate(async () => {
            try {
                // let toSkip = parseInt(values.skip);
                // let toLimit = parseInt(values.limit);
                let sortOptions = {
                    created_at: -1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                let query = {
                    Status: true
                };
                
                // let Count = await Common_App_Settings.countDocuments(query).lean().exec();
                let Result = await Common_App_Settings.findOne(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').lean();
                if (Result == null) {
                    resolve({ success: true, extras: { Data: [] } });
                } else {
                    resolve({ success: true, extras: { Data: Result } });
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Activate_Inactivate_Common_App_Setting = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Common_App_SettingsID: values.Common_App_SettingsID
                };
                let Result = await Common_App_Settings.findOne(query).lean();
                if (Result != null) {
                    let changes;
                    if (Result.Status == true) {
                        changes = {
                            $set: {
                                Status: false,
                                updated_at: new Date()
                            }
                        }
                    } else {
                        changes = {
                            $set: {
                                Status: true,
                                updated_at: new Date()
                            }
                        }
                    }
                    let updatedSubscription_Links = await Common_App_Settings.updateOne(query, changes).lean();
                    resolve({ success: true, extras: { Status: "Common App Settings Updated Successfully" } })
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_COUPON_CATAGORY } })
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Update_Common_App_Setting = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Total_Percent = 0
                Total_Percent = (+values.Self_Purchase_ID) + (+values.Direct_Refer_ID) + (+values.Nine_Levels) + (+values.Trimming_For_IDs) + (+values.Shop_Keepers_Trimming) + (+values.Company) + (+values.GST_Service_Store_etc_Amount);
                // + (+values.Box_One_Max_Amount) + (+values.Box_Two_Max_Amount) + (+values.Box_Three_Max_Amount);
                
                if (Total_Percent == 100) {
                    let query = {
                        // Common_App_SettingsID: values.Common_App_SettingsID,
                        Status: true
                    }
                    let Result = await Common_App_Settings.findOne(query).lean();
                    // if (Result != null) {
                    let changes = {
                        $set: {
                            Self_Purchase_ID: values.Self_Purchase_ID,
                            Direct_Refer_ID: values.Direct_Refer_ID,
                            Nine_Levels: values.Nine_Levels,
                            Trimming_For_IDs: values.Trimming_For_IDs,
                            Shop_Keepers_Trimming: values.Shop_Keepers_Trimming,
                            Company: values.Company,
                            GST_Service_Store_etc_Amount: values.GST_Service_Store_etc_Amount,
                            Box_One_Max_Amount: values.Box_One_Max_Amount,
                            Box_Two_Max_Amount: values.Box_Two_Max_Amount,
                            Box_Three_Max_Amount: values.Box_Three_Max_Amount,
                            District_Price: values.District_Price,
                            State_Price: values.State_Price,
                            Pincode_Price: values.Pincode_Price,
                            District_Share: values.District_Share,
                            State_Share: values.State_Share,
                            Pincode_Share: values.Pincode_Share,
                            User_Shop_Price: values.User_Shop_Price,
                            updated_at: new Date()
                        }
                    }
                    let fndupdoptions = {
                        upsert: true,
                        setDefaultsOnInsert: true,
                        new: true
                    }
                    // let findupdateData = await Buyer_Bonanza_Log.findOneAndUpdate(fndupdquery, fndupdchanges, fndupdoptions).select('-id -_v').lean();

                    let SaveResult = await Common_App_Settings.findOneAndUpdate(query, changes, fndupdoptions).lean();
                    resolve({ success: true, extras: { Status: "Common App Settings Updated Successfully" } });
                    // } else {
                    //     reject({ success: false, extras: { msg: ApiMessages.NO_DATA_FOUND } })
                    // }

                } else {
                    reject({ success: false, extras: { msg: ApiMessages.SHARE_PERCENT_MUSTBE_EQUALTO_100 } })
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Add_Common_App_Setting = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Total_Percent = 0
                Total_Percent = (+values.Self_Purchase_ID) + (+values.Direct_Refer_ID) + (+values.Nine_Levels) + (+values.Trimming_For_IDs) + (+values.Shop_Keepers_Trimming) + (+values.Company) + (+values.GST_Service_Store_etc_Amount);
                // + (+values.Box_One_Max_Amount) + (+values.Box_Two_Max_Amount) + (+values.Box_Three_Max_Amount);
                
                if (Total_Percent == 100) {
                    let query = {
                        Status: true
                    }
                    let Result = await Common_App_Settings.findOne(query).lean();
                    if (Result == null) {
                        let Data = {
                            Common_App_SettingsID: uuid.v4(),
                            Self_Purchase_ID: values.Self_Purchase_ID,
                            Direct_Refer_ID: values.Direct_Refer_ID,
                            Nine_Levels: values.Nine_Levels,
                            Trimming_For_IDs: values.Trimming_For_IDs,
                            Shop_Keepers_Trimming: values.Shop_Keepers_Trimming,
                            Company: values.Company,
                            GST_Service_Store_etc_Amount: values.GST_Service_Store_etc_Amount,
                            Box_One_Max_Amount: values.Box_One_Max_Amount,
                            Box_Two_Max_Amount: values.Box_Two_Max_Amount,
                            Box_Three_Max_Amount: values.Box_Three_Max_Amount,
                            Status: true,
                            created_at: new Date(),
                            updated_at: new Date()
                        };
                        let SaveResult = await Common_App_Settings(Data).save();
                        resolve({ success: true, extras: { Status: "Common App Settings Added Successfully" } });
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.COMMON_APP_SETTINGS_ALREADY_EXISTS } })
                    }

                } else {
                    reject({ success: false, extras: { msg: ApiMessages.SHARE_PERCENT_MUSTBE_EQUALTO_100 } })
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Check_For_Coupons_Category_SNo_Available = (values) => {
    return new Promise(async (resolve, reject) => {
        try {
            let query;
            if (values.Coupons_CategoryID != null && values.Coupons_CategoryID != "" && values.Coupons_CategoryID != undefined) {
                query = {
                    SNo: values.SNo,
                    Coupons_CategoryID: {
                        $ne: values.Coupons_CategoryID
                    },
                }
            } else {
                query = {
                    SNo: values.SNo,
                }
            }
            let Result = await Coupons_Category.findOne(query).lean().exec();
            if (Result == null) {
                resolve('SNo Available');
            } else {
                reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST } })
                // msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST
            }
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}

AdminController.Activate_Inactivate_Coupons_Category = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Coupons_CategoryID: values.Coupons_CategoryID
                };
                let Result = await Coupons_Category.findOne(query).lean();
                if (Result != null) {
                    let changes;
                    if (Result.Status == true) {
                        changes = {
                            $set: {
                                Status: false,
                                updated_at: new Date()
                            }
                        }
                    } else {
                        changes = {
                            $set: {
                                Status: true,
                                updated_at: new Date()
                            }
                        }
                    }
                    let updatedSubscription_Links = await Coupons_Category.updateOne(query, changes).lean();
                    resolve({ success: true, extras: { Status: "Coupons Category Updated Successfully" } })
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_COUPON_CATAGORY } })
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Update_Coupons_Category = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Coupons_CategoryID: values.Coupons_CategoryID
                };
                let Coupons_CategoryData = await Coupons_Category.findOne(query).lean().exec();
                if (Coupons_CategoryData != null) {
                    let queryx = {
                        SNo: values.SNo,
                    }
                    let Coupons_CategoryData1 = await Coupons_Category.find(queryx).lean().exec();
                    if (Coupons_CategoryData1.length != 0) {
                        if (Coupons_CategoryData1[0].SNo == Coupons_CategoryData.SNo) {
                            let changes = {
                                $set: {
                                    Coupons_Category_Name: values.Coupons_Category_Name,
                                    SNo: values.SNo,
                                    CC_Admin_Share_Percent: values.CC_Admin_Share_Percent,
                                    updated_at: new Date()
                                }
                            };
                            let UpdatedStatus = await Coupons_Category.updateOne(query, changes).lean();
                            resolve({ success: true, extras: { Status: "Updated Successfully" } })
                        } else {
                            reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST } })
                        }
                    } else {
                        let changes = {
                            $set: {
                                Coupons_Category_Name: values.Coupons_Category_Name,
                                SNo: values.SNo,
                                CC_Admin_Share_Percent: values.CC_Admin_Share_Percent,
                                updated_at: new Date()
                            }
                        }
                        let Updatedate = await Coupons_Category.updateOne(query, changes).lean();
                        resolve({ success: true, extras: { Status: "Updated Successfully" } });
                    }
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_COUPON_CATAGORY } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}



AdminController.List_Coupons_Category = values => {
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
                if (values.Active_Inactive_Status == undefined || values.Active_Inactive_Status == null) {
                    values.Active_Inactive_Status = true
                }
                let query = {
                    Status: values.Active_Inactive_Status
                };
                let Count = await Coupons_Category.countDocuments(query).lean().exec();
                let Result = await Coupons_Category.find(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                resolve({ success: true, extras: { Count: Count, Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Add_Coupons_Category = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                if (values.CC_Admin_Share_Percent <= 100) {
                    let query = {
                        SNo: values.SNo,
                        Status: true
                    }
                    let Result = await Coupons_Category.findOne(query).lean();
                    if (Result == null) {
                        let Data = {
                            Coupons_CategoryID: uuid.v4(),
                            Coupons_Category_Name: values.Coupons_Category_Name,
                            SNo: values.SNo,
                            CC_Admin_Share_Percent: values.CC_Admin_Share_Percent,
                            created_at: new Date(),
                            updated_at: new Date()
                        };
                        let SaveResult = await Coupons_Category(Data).save();
                        resolve({ success: true, extras: { Status: "Coupons Category Added Successfully" } });
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST } })
                    }

                } else {
                    reject({ success: false, extras: { msg: ApiMessages.SHARE_PERCENT_MUSTBE_LESS_THAN_100 } })
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


AdminController.Check_For_App_Image_SNo_Available = (values) => {
    return new Promise(async (resolve, reject) => {
        try {
            let query;
            if (values.ResourceID != null && values.ResourceID != "" && values.ResourceID != undefined) {
                query = {
                    SNo: values.SNo,
                    ResourceID: {
                        $ne: values.ResourceID
                    },
                }
            } else {
                query = {
                    SNo: values.SNo,
                }
            }
            let Result = await App_Image_Resources.findOne(query).lean().exec();
            if (Result == null) {
                resolve('SNo Available');
            } else {
                reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST } })
                // msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST
            }
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}

AdminController.Check_For_Plot_SNo_Available = (values) => {
    return new Promise(async (resolve, reject) => {
        try {
            let query;
            if (values.PlotID != null && values.PlotID != "" && values.PlotID != undefined) {
                query = {
                    SNo: values.SNo,
                    PlotID: {
                        $ne: values.PlotID
                    },
                }
            } else {
                query = {
                    SNo: values.SNo,
                }
            }
            let Result = await Plots_Log.findOne(query).lean().exec();
            if (Result == null) {
                resolve('SNo Available');
            } else {
                reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST } })
                // msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST
            }
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}

AdminController.Check_For_News_SNo_Available = (values) => {
    return new Promise(async (resolve, reject) => {
        try {
            let query;
            if (values.NewsID != null && values.NewsID != "" && values.NewsID != undefined) {
                query = {
                    SNo: values.SNo,
                    NewsID: {
                        $ne: values.NewsID
                    },
                }
            } else {
                query = {
                    SNo: values.SNo,
                }
            }
            let Result = await News.findOne(query).lean().exec();
            if (Result == null) {
                resolve('SNo Available');
            } else {
                reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST } })
                // msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST
            }
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}

AdminController.List_All_App_Image_Resource = values => {
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

AdminController.Edit_App_Image_Resource = (values, ImageData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    ResourceID: values.ResourceID,
                }
                let ResourceData = await App_Image_Resources.findOne(query).lean().exec();
                if (ResourceData != null) {
                    let queryx = {
                        SNo: values.SNo,
                    }
                    let ResourceData1 = await App_Image_Resources.find(queryx).lean().exec();
                    if (ResourceData1.length != 0) {
                        if (ResourceData1[0].SNo == ResourceData.SNo) {
                            let changes = {
                                $set: {
                                    ImageData: ImageData,
                                    SNo: ResourceData.SNo,
                                    Status: true,
                                    updated_at: new Date()
                                }
                            }
                            let Updatedate = await App_Image_Resources.updateOne(query, changes).lean();
                            resolve({ success: true, extras: { Status: "Updated Successfully" } });
                        } else {
                            reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST } })
                        }
                    } else {
                        let changes = {
                            $set: {
                                ImageData: ImageData,
                                SNo: values.SNo,
                                Status: true,
                                updated_at: new Date()
                            }
                        }
                        let Updatedate = await App_Image_Resources.updateOne(query, changes).lean();
                        resolve({ success: true, extras: { Status: "Updated Successfully" } });
                    }
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_RESOURCE } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


AdminController.Add_App_Image_Resource = (values, ImageData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    SNo: values.SNo,
                    Status: true
                }
                let Result = await App_Image_Resources.findOne(query).lean();
                if (Result == null) {
                    let ResourceType = parseInt(values.ResourceType);
                    let Data = {
                        ResourceID: uuid.v4(),
                        ResourceType: ResourceType,
                        ImageData: ImageData,
                        SNo: values.SNo,
                        created_at: new Date(),
                        updated_at: new Date()
                    };
                    let SaveResult = await App_Image_Resources(Data).save();
                    resolve({ success: true, extras: { Status: "Image Added Successfully" } })
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Add_App_Image_Resource_Validate_All = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    SNo: values.SNo,
                    Status: true
                }
                let Result = await App_Image_Resources.findOne(query).lean();
                if (Result == null) {
                    let ResourceType = parseInt(values.ResourceType);
                    if (ResourceType == 1 || ResourceType == 2 || ResourceType == 3) {
                        let Evaluate_Count = (ResourceType == 1) ? config.SMALL_BANNERS_LIMIT : (ResourceType == 2) ? config.SMALL_ICONS_LIMIT : config.BIG_BANNERS_LIMIT;
                        let query = {
                            ResourceType: ResourceType,
                            Status: true
                        };
                        let Count = await App_Image_Resources.countDocuments(query).lean().exec();
                        if (Count < Evaluate_Count) {
                            resolve("Validated Successfully")
                        } else {
                            reject({ success: false, extras: { msg: ApiMessages.MAXIMUM_IMAGES_EXCEEDED } })
                        }
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.INVALID_RESOURCE_TYPE } });
                    }
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_All_Plot = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    SNo: 1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                let UserType = 1
                let User_query = {}
                if (values.UserType != null && values.UserType != undefined && isFinite(values.UserType)) {
                    UserType = values.UserType

                }
                User_query = {
                    UserType: UserType
                }
                
                let Count = await Plots_Log.countDocuments(User_query).lean().exec();
                let Result = await Plots_Log.find(User_query).select('-_id -__v').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                
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


AdminController.Activate_Inactivate_Plot = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    PlotID: values.PlotID
                };
                let Result = await Plots_Log.findOne(query).lean();
                if (Result != null) {
                    let changes;
                    if (Result.Status == true) {
                        changes = {
                            $set: {
                                Status: false,
                                updated_at: new Date()
                            }
                        }
                    } else {
                        changes = {
                            $set: {
                                Status: true,
                                updated_at: new Date()
                            }
                        }
                    }
                    let updatedplot = await Plots_Log.updateOne(query, changes).lean();
                    resolve({ success: true, extras: { Status: "Plot updated Successfully" } })
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_PLOT } })
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Edit_Plot = (values, All_Images_Data, File_Data, ImageData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    PlotID: values.PlotID
                };
                let Result = await Plots_Log.findOne(query).lean();
                if (Result != null) {
                    let queryx = {
                        SNo: values.SNo,
                    }
                    let ResourceData1 = await Plots_Log.find(queryx).lean().exec();
                    if (ResourceData1.length != 0) {
                        if (ResourceData1[0].SNo == Result.SNo) {
                            let changes = {
                                $set: {
                                    Plot_Name: values.Plot_Name,
                                    Company_Name: values.Company_Name,
                                    SNo: Result.SNo,
                                    Address: values.Address,
                                    Description: values.Description,
                                    Plot_Image_Data: All_Images_Data,
                                    Company_Image_Data: ImageData,
                                    FileData: File_Data,
                                    Latitude: parseFloat(values.Latitude),
                                    Longitude: parseFloat(values.Longitude),
                                    Point: [parseFloat(values.Longitude), parseFloat(values.Latitude)],
                                    updated_at: new Date()
                                }
                            };
                            let UpdatePlot = await Plots_Log.updateOne(query, changes).lean();
                            resolve({ success: true, extras: { Status: "Plot Updated Successfully" } })

                        } else {
                            reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST } })
                        }
                    } else {
                        let changes = {
                            $set: {
                                Plot_Name: values.Plot_Name,
                                Company_Name: values.Company_Name,
                                SNo: values.SNo,
                                Address: values.Address,
                                Description: values.Description,
                                Plot_Image_Data: All_Images_Data,
                                Company_Image_Data: ImageData,
                                FileData: File_Data,
                                Latitude: parseFloat(values.Latitude),
                                Longitude: parseFloat(values.Longitude),
                                Point: [parseFloat(values.Longitude), parseFloat(values.Latitude)],
                                updated_at: new Date()
                            }
                        };
                        let UpdatePlot = await Plots_Log.updateOne(query, changes).lean();
                        resolve({ success: true, extras: { Status: "Plot Updated Successfully" } })
                    }
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_PLOT } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Create_Plot = (values, All_Images_Data, File_Data, ImageData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                
                    let Data = {
                        PlotID: uuid.v4(),
                        SNo: 0,
                        Plot_Name: values.Plot_Name,
                        Company_Name: values.Company_Name,
                        Address: values.Address,
                        Description: values.Description,
                        Plot_Image_Data: All_Images_Data,
                        Company_Image_Data: ImageData,
                        FileData: File_Data,
                        UserType: 1,
                        Latitude: parseFloat(values.Latitude),
                        Longitude: parseFloat(values.Longitude),
                        Point: [parseFloat(values.Longitude), parseFloat(values.Latitude)],
                        Status: true,
                        created_at: new Date(),
                        updated_at: new Date()
                    };
                    let SavePlot = await Plots_Log(Data).save();
                    resolve({ success: true, extras: { Status: "Plot Created Successfully" } })
               
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Check_File_Data_From_FileID = (FileID) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    FileID: FileID
                }
                let Result = await Files.findOne(query).select('-_id -__v').lean();
                if (Result == null) {
                    res.json({ success: false, extras: { msg: ApiMessages.INVALID_FILE } });
                } else {
                    resolve(Result)
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Add_Remove_Trending_Products = (values) => {
    return new Promise(async (resolve, reject) => {
        try {
            var xc = 0;
            var DishIDs = []

            // for (var ix = 0; ix < values.Dishes.length; ix++) {
            //     var pardsd = values.Dishes[ix];
            //     DishIDs.push(pardsd.DishID)
            //     xc++;

            // }
            let query = {
                ProductID: { $in: values.ProductID_Arr }
            }
            let Trending_Available = false
            let status = "Removed"
            if (values.Add_Remove == 1) {
                Trending_Available = true
                status = "Added"
            } else if (values.Add_Remove == -1) {
                Trending_Available = false
                status = "Removed"
            }

            let changes = {
                $set: {
                    Trending_Available: await Trending_Available,
                    updated_at: new Date()
                }
            }
            let fndupdoptions = {
                multi: true,
                setDefaultsOnInsert: true,
                new: true
            }
            
            let Result2 = await Products.update(query, changes, { multi: true, new: true }).lean();
            resolve({ success: true, extras: { Status: `Trending Products ${status} Successfully` } })
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}

AdminController.Activate_Inactivate_News = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    NewsID: values.NewsID
                };
                let Result = await News.findOne(query).lean();
                if (Result != null) {
                    let changes;
                    if (Result.Status == true) {
                        changes = {
                            $set: {
                                Status: false,
                                updated_at: new Date()
                            }
                        }
                    } else {
                        changes = {
                            $set: {
                                Status: true,
                                updated_at: new Date()
                            }
                        }
                    }
                    let updatedSubscription_Links = await News.updateOne(query, changes).lean();
                    resolve({ success: true, extras: { Status: "News Updated Successfully" } })
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_NEWS } })
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_All_News = values => {
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
                let Count = await News.countDocuments(query).lean().exec();
                let Result = await News.find(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                resolve({ success: true, extras: { Count: Count, Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Update_News = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    NewsID: values.NewsID
                };
                let ResourceData = await News.findOne(query).lean().exec();
                if (ResourceData != null) {
                    let queryx = {
                        SNo: values.SNo,
                    }
                    let ResourceData1 = await News.find(queryx).lean().exec();
                    if (ResourceData1.length != 0) {
                        if (ResourceData1[0].SNo == ResourceData.SNo) {
                            let changes = {
                                $set: {
                                    Title: values.Title,
                                    SNo: ResourceData.SNo,
                                    Description: values.Description,
                                    updated_at: new Date()
                                }
                            };
                            let UpdatedStatus = await News.updateOne(query, changes).lean();
                            resolve({ success: true, extras: { Status: "Updated Successfully" } })
                        } else {
                            reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST } })
                        }
                    } else {
                        let changes = {
                            $set: {
                                Title: values.Title,
                                SNo: values.SNo,
                                Description: values.Description,
                                updated_at: new Date()
                            }
                        }
                        let Updatedate = await News.updateOne(query, changes).lean();
                        resolve({ success: true, extras: { Status: "Updated Successfully" } });
                    }
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_NEWS } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


AdminController.Update_News_Validate_All = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                if (values.Title.length <= config.News_Title_Length) {
                    if (values.Description.length <= config.News_Description_Length) {
                        resolve("Validated Successfully");
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.NEWS_TITLE_CHARACTERS_EXCEEDED } })
                    }
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.NEWS_TITLE_CHARACTERS_EXCEEDED } })
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Add_News = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    SNo: values.SNo,
                    Status: true
                }
                let Result = await News.findOne(query).lean();
                if (Result == null) {
                    let Data = {
                        NewsID: uuid.v4(),
                        Title: values.Title,
                        SNo: values.SNo,
                        Description: values.Description,
                        created_at: new Date(),
                        updated_at: new Date()
                    };
                    let SaveResult = await News(Data).save();
                    resolve({ success: true, extras: { Status: "News Added Successfully" } });
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Add_News_Validate_All = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    SNo: values.SNo,
                    Status: true
                }
                let Result = await News.findOne(query).lean();
                if (Result == null) {
                    let Count = await News.countDocuments({ Status: true }).lean();
                    if (Count < config.NEWS_LIMIT) {
                        if (values.Title.length <= config.News_Title_Length) {
                            if (values.Description.length <= config.News_Description_Length) {
                                resolve("Validated Successfully");
                            } else {
                                reject({ success: false, extras: { msg: ApiMessages.NEWS_TITLE_CHARACTERS_EXCEEDED } })
                            }
                        } else {
                            reject({ success: false, extras: { msg: ApiMessages.NEWS_TITLE_CHARACTERS_EXCEEDED } })
                        }
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.NEWS_LIMIT_EXCEEDED } })
                    }
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

////

AdminController.List_Buyers_Bonanza_Status = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let toSkip = parseInt(values.skip)
                let toLimit = parseInt(values.limit)
                let sortOptions = {
                    Start_Date: -1
                }
                let query = {
                    BonanzaID: values.BonanzaID,
                    // Bonanza_Type: values.Bonanza_Type
                }
                if (values.Bonanza_Type == 1) {
                    query.Bonanza_Type = {
                        $in: [1, 3]
                    }
                } else if (values.Bonanza_Type == 2) {
                    query.Bonanza_Type = {
                        $in: [2, 3]
                    }
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_BONANZA_TYPE } })
                }
                let BonanzaLogData = await Buyer_Bonanza_Log.find(query).lean().sort(sortOptions).exec();
                let BD = []
                for (let itteration of BonanzaLogData) {
                    let BuyerData = await CommonController.Check_for_Buyer(itteration)
                    itteration.BuyerData = {
                        BuyerID: BuyerData.BuyerID,
                        Buyer_Name: BuyerData.Buyer_Name,
                        Buyer_CountryCode: BuyerData.Buyer_CountryCode,
                        Buyer_PhoneNumber: BuyerData.Buyer_PhoneNumber,
                    }
                    if (values.Bonanza_Type == 1) {
                        let Bonanza_Points_Data = itteration.Bonanza_Points_Data.filter(function (ResultTemp) {
                            if (ResultTemp.Levels == values.Levels
                                && ResultTemp.Progress > 0
                                && ResultTemp.Whether_Completed == values.Completed
                            ) {
                                return ResultTemp
                            }
                        });
                        delete itteration.Bonanza_Points_Data;
                        delete itteration.Bonanza_Matrix_Data;
                        if (itteration.Bonanza_Type == 1 || itteration.Bonanza_Type == 3) {
                            if (Bonanza_Points_Data.length > 0) {
                                itteration.Bonanza_Points_Data = Bonanza_Points_Data[0];
                                itteration.Bonanza_Matrix_Data = {
                                    Levels: 0,
                                    Matrix: 0,
                                    Fullfilled_Level: [],
                                    Winning: "",
                                    Progress: 0,
                                    Whether_Completed: false
                                };
                                BD.push(itteration)
                            }
                        }
                    } else {
                        let Bonanza_Matrix_Data = itteration.Bonanza_Matrix_Data.filter(function (ResultTemp) {
                            if (ResultTemp.Levels == values.Levels
                                && ResultTemp.Progress > 0
                                && ResultTemp.Whether_Completed == values.Completed
                            ) {
                                return ResultTemp
                            }
                        });
                        delete itteration.Bonanza_Points_Data;
                        delete itteration.Bonanza_Matrix_Data;
                        if (itteration.Bonanza_Type == 2 || itteration.Bonanza_Type == 3) {
                            if (Bonanza_Matrix_Data.length > 0) {
                                itteration.Bonanza_Matrix_Data = Bonanza_Matrix_Data[0];
                                itteration.Bonanza_Points_Data = {
                                    Levels: 0,
                                    Min_Points: 0,
                                    Max_Points: 0,
                                    Winning: "",
                                    Achived_Points: 0,
                                    Progress: 0,
                                    Whether_Completed: false
                                };

                                BD.push(itteration)
                            }
                        }
                    }
                }
                let Count = BD.length
                resolve({ success: true, extras: { Count: Count, Data: BD.splice(toSkip, toSkip + toLimit) } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Delete_Bonanza = (values, BonanzaData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BonanzaID: values.BonanzaID
                }
                let changes = {
                    $set: {
                        Bonanza_Status: 3, //1- live, 2- completed, 3- cancelled, 4- upcoming
                        Status: false,
                        updated_at: new Date()
                    }
                };
                let SaveData = await Bonanza_Log.updateOne(query, changes).lean().exec();
                resolve({ success: true, extras: { status: "Deleted Successfully" } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Activate_Inactivate_Bonanza = (values, BonanzaData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BonanzaID: values.BonanzaID
                }
                let changes = {}
                if (BonanzaData.Bonanza_Status == 3) {
                    let Bonanza_Status = 4;
                    let Today = moment();
                    let Start_Date = moment(BonanzaData.Start_Date)//, config.Take_Date_Format).subtract(330, 'minutes');
                    let End_Date = moment(BonanzaData.End_Date)//, config.Take_Date_Format).subtract(330, 'minutes').add(1, 'day').subtract(1, 'ms');
                    if (Start_Date.isValid() && End_Date.isValid()) {
                        if (Start_Date.isBefore(Today) && End_Date.isAfter(Today)) {
                            Bonanza_Status = 1
                        } else if (End_Date.isBefore(Today)) {
                            Bonanza_Status = 2
                        }
                    }
                    changes = {
                        $set: {
                            Bonanza_Status: Bonanza_Status, //1- live, 2- completed, 3- cancelled, 4- upcoming
                            updated_at: new Date()
                        }
                    };
                } else {
                    changes = {
                        $set: {
                            Bonanza_Status: 3, //1- live, 2- completed, 3- cancelled, 4- upcoming
                            updated_at: new Date()
                        }
                    };
                }
                let SaveData = await Bonanza_Log.updateOne(query, changes).lean().exec();
                resolve({ success: true, extras: { status: "Updated Successfully" } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Edit_Bonanza = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Bonanza_Status = 4;
                let Today = moment();
                let Start_Date = moment(values.Start_Date)//, config.Take_Date_Format).subtract(330, 'minutes');
                let End_Date = moment(values.End_Date)//, config.Take_Date_Format).subtract(330, 'minutes').add(1, 'day').subtract(1, 'ms');
                if (Start_Date.isValid() && End_Date.isValid()) {
                    if (Start_Date.isBefore(Today) && End_Date.isAfter(Today)) {
                        Bonanza_Status = 1
                    } else if (End_Date.isBefore(Today)) {
                        Bonanza_Status = 2
                    }
                }
                let query = {
                    BonanzaID: values.BonanzaID
                }
                let changes = {
                    $set: {
                        Name: values.Name,
                        Description: values.Description,
                        Start_Date: values.Start_Date,
                        End_Date: values.End_Date,
                        Bonanza_Type: values.Bonanza_Type, //1- Points, 2- Matrix, 3-both
                        Points_Calculation_Data: values.Points_Calculation_Data,
                        Bonanza_Points_Data: values.Points_Level_Data,
                        Bonanza_Matrix_Data: values.Matrix_Levels_Data,
                        Bonanza_Status: Bonanza_Status, //1- live, 2- completed, 3- cancelled, 4- upcoming
                        updated_at: new Date()
                    }
                };
                let SaveData = await Bonanza_Log.updateOne(query, changes).lean().exec();
                resolve({ success: true, extras: { status: "Updated Successfully" } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_All_Bonanza = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let toSkip = parseInt(values.skip)
                let toLimit = parseInt(values.limit)
                let sortOptions = {
                    Start_Date: -1
                }
                let query = {
                    Status: true
                };
                if (values.Bonanza_Status != 5) {
                    query.Bonanza_Status = values.Bonanza_Status
                }
                if (Boolify(values.whether_Date_Filter)) {
                    query.$or = [
                        {
                            Start_Date: {
                                $gte: values.Start_Date,
                            }
                        },
                        {
                            End_Date: {
                                $lte: values.End_Date
                            }
                        }
                    ]
                }
                let Count = await Bonanza_Log.countDocuments(query).lean();
                let BonanzaData = await Bonanza_Log.find(query).lean().sort(sortOptions).skip(toSkip).limit(toLimit).exec();
                resolve({ success: true, extras: { Count: Count, Data: BonanzaData } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Create_Bonanza = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Bonanza_Status = 4;
                let Today = moment();
                let Start_Date = moment(values.Start_Date)//, config.Take_Date_Format).subtract(330, 'minutes');
                let End_Date = moment(values.End_Date)//, config.Take_Date_Format).subtract(330, 'minutes').add(1, 'day').subtract(1, 'ms');
                if (Start_Date.isValid() && End_Date.isValid()) {
                    if (Start_Date.isBefore(Today) && End_Date.isAfter(Today)) {
                        Bonanza_Status = 1
                    } else if (End_Date.isBefore(Today)) {
                        Bonanza_Status = 2
                    }
                }
                let Data = {
                    BonanzaID: uuid.v4(),
                    Bonanza_Code: Today.valueOf(),
                    Name: values.Name,
                    Description: values.Description,
                    Start_Date: values.Start_Date,
                    End_Date: values.End_Date,
                    Bonanza_Type: values.Bonanza_Type, //1- Points, 2- Matrix, 3-both
                    Points_Calculation_Data: values.Points_Calculation_Data,
                    Bonanza_Points_Data: values.Points_Level_Data,
                    Bonanza_Matrix_Data: values.Matrix_Levels_Data,
                    Bonanza_Status: Bonanza_Status, //1- live, 2- completed, 3- cancelled, 4- upcoming
                    created_at: new Date(),
                    updated_at: new Date()
                };
                let SaveData = await Bonanza_Log(Data).save();
                resolve({ success: true, extras: { status: "Created Successfully" } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Date_Range_for_Previous_Bonanza = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Start_Date = moment(values.Start_Date)//, config.Take_Date_Format).subtract(330, 'minutes');
                let End_Date = moment(values.End_Date)//, config.Take_Date_Format).subtract(330, 'minutes').add(1, 'day').subtract(1, 'ms');

                if (values.BonanzaID == null || values.BonanzaID == undefined || values.BonanzaID == '') {
                    values.BonanzaID = '';
                }
                let query = {
                    BonanzaID: {
                        $ne: values.BonanzaID
                    },
                    Status: true,
                    // $or: [
                    //     {
                    Start_Date: {
                        $gte: Start_Date,
                    },
                    End_Date: {
                        $lte: End_Date
                    }
                    // },
                    // {
                    //     End_Date: {
                    //         $lte: End_Date
                    //     }
                    // }
                    // ]
                };
                // 
                let result = await Bonanza_Log.findOne(query).lean().exec();
                // 
                if (result == null) {
                    resolve("Validated Success");
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.BONANZA_ALREADY_AVAILABLE_IN_SELECTED_DATES } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Get_Shiprocket_Order_Pricing = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    OrderID: values.OrderID,
                    Payment_Status: 3
                };
                let Result = await Buyer_Orders.findOne(query).lean().exec();
                if (Result != null) {
                    let LoginData = {
                        email: config.shiprocket.email,
                        password: config.shiprocket.password
                    }
                    let request_options_login = {
                        method: 'POST',
                        baseURL: config.shiprocket.baseurl,
                        url: `/auth/login`,
                        params: LoginData
                    };
                    let Response_login = await Axios(request_options_login);
                    ////////////////////////////////////////
                    let CalculateData = {
                        "pickup_postcode": 500062,
                        "delivery_postcode": Result.Delivery_Address_Information.Postal_Code,
                        "cod": 0,
                        "length": values.Length,
                        "breadth": values.Breadth,
                        "height": values.Height,
                        "weight": values.Weight
                    }
                    let request_options_Calculation = {
                        method: 'GET',
                        baseURL: config.shiprocket.baseurl,
                        url: `/courier/serviceability/`,
                        headers: { 'Authorization': 'Bearer ' + Response_login.data.token },
                        params: CalculateData
                    };
                    let Response_Calculation = await Axios(request_options_Calculation);
                    if (Response_Calculation.data.data == undefined) {
                        reject(await CommonController.Common_Error_Handler1(Response_Calculation.data));
                    } else {
                        resolve({ success: true, extras: { Data: Response_Calculation.data.data.available_courier_companies } })
                    }

                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_SHIPROCKET_ORDERID } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Get_Single_Shiprocket_Order = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Shiprocket_Order_LogID: values.Shiprocket_Order_LogID,
                    Status: true
                };
                let Result = await Shiprocket_Order_Log.findOne(query).select('-_id -__v -Status').lean().exec();
                if (Result != null) {
                    resolve({ success: true, extras: { Data: Result } })
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_SHIPROCKET_ORDERID } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


AdminController.Cancel_Shiprocket_Order = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Shiprocket_Order_LogID: values.Shiprocket_Order_LogID,
                    Status: true
                };
                let Result = await Shiprocket_Order_Log.findOne(query).lean().exec();
                if (Result != null) {
                    let LoginData = {
                        email: config.shiprocket.email,
                        password: config.shiprocket.password
                    }
                    let request_options_login = {
                        method: 'POST',
                        baseURL: config.shiprocket.baseurl,
                        url: `/auth/login`,
                        params: LoginData
                    };
                    let Response_login = await Axios(request_options_login);
                    
                    let cancelData = {
                        ids: [Result.Shiprocket_OrderID],
                    }
                    let request_options_Cancel = {
                        method: 'POST',
                        baseURL: config.shiprocket.baseurl,
                        url: `/orders/cancel`,
                        headers: { 'Authorization': 'Bearer ' + Response_login.data.token },
                        params: cancelData
                    };
                    let Response_Cancel = await Axios(request_options_Cancel);
                    
                    let changes = {
                        $set: {
                            Status: false,
                            updated_at: new Date()
                        }
                    };
                    let UpdateData = await Shiprocket_Order_Log.updateOne(query, changes).lean().exec()
                    let Oquery = {
                        OrderID: Result.OrderID
                    };
                    let Ochanges = {
                        $set: {
                            Shiprocket_Order_LogID: '',
                            updated_at: new Date()
                        }
                    }
                    let OupdateData = await Buyer_Orders.updateOne(Oquery, Ochanges).lean().exec();
                    resolve({ success: true, extras: { Status: 'Cancelled Successfully' } })
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_SHIPROCKET_ORDERID } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Shiprocket_Order_Create = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    OrderID: values.OrderID,
                    Payment_Status: 3
                };
                let Result = await Buyer_Orders.findOne(query).lean().exec();
                if (Result != null) {
                    let LoginData = {
                        email: config.shiprocket.email,
                        password: config.shiprocket.password
                    }
                    let request_options_login = {
                        method: 'POST',
                        baseURL: config.shiprocket.baseurl,
                        url: `/auth/login`,
                        params: LoginData
                    };
                    let Response_login = await Axios(request_options_login);
                    
                    //now create order in shiprocket
                    //let BuyerData = await Buyers.findOne({BuyerID: Result.BuyerID}).lean().exec()
                    let order_items = await AdminController.Order_Items_Data(Result.Cart_Information)
                    let Shiprocket_Order_Number = await CommonController.Random_12_Digit_Number()
                    let Create_OrderData = {
                        "order_id": Shiprocket_Order_Number,
                        "order_date": Result.created_at,
                        "pickup_location": "Pickup",
                        "comment": "DOGEMO DIGI INDIA PRIVATE LIMITED",
                        "billing_customer_name": Result.Delivery_Address_Information.Name,
                        "billing_last_name": "",
                        "billing_address": "Flat_No: " + Result.Delivery_Address_Information.Flat_No + ", Plot_No: " + Result.Delivery_Address_Information.Plot_No + ", " + Result.Delivery_Address_Information.City,
                        "billing_address_2": Result.Delivery_Address_Information.Land_Mark,
                        "billing_city": Result.Delivery_Address_Information.City,
                        "billing_pincode": Result.Delivery_Address_Information.Postal_Code,
                        "billing_state": Result.Delivery_Address_Information.State,
                        "billing_country": "India",
                        "billing_email": "info@dogemo.com",
                        "billing_phone": Result.Delivery_Address_Information.PhoneNumber,
                        "shipping_is_billing": true,
                        "shipping_customer_name": "",
                        "shipping_last_name": "",
                        "shipping_address": "",
                        "shipping_address_2": "",
                        "shipping_city": "",
                        "shipping_pincode": "",
                        "shipping_country": "",
                        "shipping_state": "",
                        "shipping_email": "",
                        "shipping_phone": "",
                        "order_items": order_items,
                        "payment_method": "Prepaid",
                        "shipping_charges": 0,
                        "giftwrap_charges": 0,
                        "transaction_charges": 0,
                        "total_discount": 0,
                        "sub_total": Result.Cart_Final_Price,
                        "length": 10, //values.Length,
                        "breadth": 10, //values.Breadth,
                        "height": 10, //values.Height,
                        "weight": Result.Cart_Weight
                    }
                    let request_options_create_order = {
                        method: 'POST',
                        baseURL: config.shiprocket.baseurl,
                        url: `/orders/create/adhoc`,
                        headers: { 'Authorization': 'Bearer ' + Response_login.data.token },
                        data: Create_OrderData
                    };
                    let Response_create_order = await Axios(request_options_create_order);

                    
                    // Save shiprocket Data in db with our Order_number and OrderId
                    // if (Response_create_order.status == 200 || Response_create_order.status == 201) {
                    let awbData = {
                        shipment_id: Response_create_order.data.shipment_id,
                        courier_id: Result.Courier_Company_Id//values.courier_company_id
                    };
                    let request_options_generate_awb = {
                        method: 'POST',
                        baseURL: config.shiprocket.baseurl,
                        url: `/courier/assign/awb`,
                        headers: { 'Authorization': 'Bearer ' + Response_login.data.token },
                        data: awbData
                    };
                    let Response_generate_awb = await Axios(request_options_generate_awb);
                    
                    if (Response_generate_awb.data.status_code == 350) {
                        reject({ success: false, extras: { msg: ApiMessages.DATABASE_ERROR, Data: Response_generate_awb.data } })
                    } else {
                        let pickupData = {
                            shipment_id: [Response_create_order.data.shipment_id]
                        };
                        let request_options_generate_pickup = {
                            method: 'POST',
                            baseURL: config.shiprocket.baseurl,
                            url: `/courier/generate/pickup`,
                            headers: { 'Authorization': 'Bearer ' + Response_login.data.token },
                            data: pickupData
                        };
                        let Response_generate_pickup = await Axios(request_options_generate_pickup);
                        let srolid = uuid.v4();
                        let ShipData = {
                            Shiprocket_Order_LogID: srolid,
                            Shiprocket_OrderID: Response_create_order.data.order_id,
                            Shipment_ID: Response_create_order.data.shipment_id,
                            Shiprocket_Order_Number: Shiprocket_Order_Number,
                            BuyerID: Result.BuyerID,
                            OrderID: Result.OrderID,
                            Pickup_Data: Response_generate_pickup.data,
                            courier_company_id: Response_generate_awb.data.response.data.courier_company_id,
                            Courier_Name: Response_generate_awb.data.response.data.courier_name,
                            AWB: Response_generate_awb.data.response.data.awb_code,
                            Order_Number: Result.Order_Number, // 12 digits random number
                            created_at: new Date(),
                            updated_at: new Date(),
                        }
                        let SavaShipData = await Shiprocket_Order_Log(ShipData).save()
                        let changes = {
                            $set: {
                                Shiprocket_Order_LogID: srolid,
                                updated_at: new Date(),
                            }
                        }
                        let updateDatax = await Buyer_Orders.updateOne(query, changes).lean().exec();
                        resolve({ success: true, extras: { Data: ShipData } })
                        //     } else {
                        //         reject({ success: false, extras: { msg: ApiMessages.INVALID_SHIPROCKET_REQUEST } });
                        //     }
                        // } else {
                        //     reject({ success: false, extras: { msg: ApiMessages.INVALID_SHIPROCKET_REQUEST } });
                        // }
                    }
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_ORDER } })
                }
            } catch (error) {

                reject(await CommonController.Common_Error_Handler1(error.response.data));
            }
        });
    });
}

AdminController.Order_Items_Data = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let order_items = [];
                async.eachSeries(values, async (item, callback) => {
                    try {
                        let Cart_Information = {
                            name: item.Product_Name,
                            sku: item.ProductID,
                            units: item.Product_Quantity,
                            selling_price: item.Product_Price,
                        }
                        order_items.push(Cart_Information)
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async (err) => {
                    if (err) reject(err);
                    resolve(order_items)
                });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Update_Product_Quantity = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    ProductID: values.ProductID
                };
                let Result = await Products.findOne(query).lean().exec();
                if (Result != null) {
                    let changes = {
                        $inc: {
                            Product_Quantity: values.Quantity
                        },
                        $set: {
                            Quantity_Update_by: values.AdminID,
                            Quantity_Update_at: new Date(),
                            updated_at: new Date()
                        }
                    }
                    let UpdateData = await Products.updateOne(query, changes).lean().exec()
                    resolve({ success: true, extras: { Status: "Updated Successfully" } })
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_PRODUCT } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_All_Category = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {

                };
                let sortOptions = {
                    Category_Name: 1
                };
                let Result = await Category.find(query).select('-_id -__v').sort(sortOptions).lean().exec();
                let Data = []
                async.eachSeries(Result, async (item, callback) => {
                    try {
                        item.Category_Name = item.Category_Name.charAt(0).toUpperCase() + item.Category_Name.slice(1).toLowerCase()
                        Data.push(item)
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async (err) => {
                    if (err) reject(err);
                    resolve({ success: true, extras: { Data: Data } })
                });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Add_Category = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Category_Name: values.Category_Name.toUpperCase()
                }
                let Result = await Category.findOne(query).lean().exec();
                if (Result == null) {
                    let Data = {
                        CategoryID: uuid.v4(),
                        Category_Name: values.Category_Name.toUpperCase()
                    }
                    let SAveData = await Category(Data).save();
                    resolve({ success: true, extras: { Status: "Created Successfully" } })
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.CATEGORY_EXIST } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_All_Delivery_Type = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {

                };
                let sortOptions = {
                    Delivery_Type: 1
                };
                let Result = await Delivery_Type.find(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings').sort(sortOptions).lean().exec();
                resolve({ success: true, extras: { Data: Result } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Active_Inactive_Delivery_Type = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Delivery_TypeID: values.Delivery_TypeID
                }
                let DResult = await Delivery_Type.findOne(query).lean().exec()
                let statys;
                if (DResult.Status) {
                    statys = "Inactivated Successfully";
                    let changes = {
                        $set: {
                            Status: false,
                            updated_at: new Date()
                        }
                    }
                    let UpdatedStatus = await Delivery_Type.updateOne(query, changes).lean().exec();
                } else {
                    statys = "Activated Successfully"
                    let changes = {
                        $set: {
                            Status: true,
                            updated_at: new Date()
                        }
                    }
                    let UpdatedStatus = await Delivery_Type.updateOne(query, changes).lean().exec();
                }
                resolve({ success: true, extras: { Status: statys } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Add_Delivery_Type = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Data = {
                    Delivery_TypeID: uuid.v4(),
                    Delivery_Type: values.Delivery_Type,
                    Delivery_Type_Name: values.Delivery_Type_Name,
                    Status: true,
                    created_at: new Date(),
                    updated_at: new Date()
                }
                let SAveData = await Delivery_Type(Data).save();
                resolve({ success: true, extras: { Status: "Created Successfully" } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Active_Inactive_Banner = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BannerID: values.BannerID
                }
                let BannerResult = await Banner.findOne(query).lean().exec()
                let statys;
                if (BannerResult.Status) {
                    statys = "Inactivated Successfully";
                    let changes = {
                        $set: {
                            Status: false,
                            updated_at: new Date()
                        }
                    }
                    let UpdatedStatus = await Banner.updateOne(query, changes).lean().exec();
                } else {
                    let querycheck = {
                        SNo: BannerResult.SNo
                    }
                    let checkSno = await Banner.find(querycheck).lean().exec()
                    if (checkSno.length <= 1) {
                        statys = "Activated Successfully"
                        let changes = {
                            $set: {
                                Status: true,
                                updated_at: new Date()
                            }
                        }
                        let UpdatedStatus = await Banner.updateOne(query, changes).lean().exec();
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_EXIST } })
                    }
                }
                resolve({ success: true, extras: { Status: statys } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Edit_Banner = (values, ImageData, WEvImageData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BannerID: values.BannerID,
                }
                let BannerData = await Banner.findOne(query).lean().exec();
                if (BannerData != null) {
                    let queryx = {
                        SNo: values.SNo,
                    }

                    let BannerData1 = await Banner.find(queryx).lean().exec();

                    if (BannerData1.length != 0) {

                        if (BannerData1[0].SNo == BannerData.SNo) {
                            let changes = {
                                $set: {
                                    Image_Data: ImageData,
                                    WebImageData: WebImageData,
                                    Banner_Name: values.Banner_Name,
                                    SNo: BannerData.SNo,
                                    Status: true,
                                    updated_at: new Date()
                                }
                            }
                            let Updatedate = await Banner.updateOne(query, changes).lean();
                            resolve({ success: true, extras: { Status: "Banner Updated Successfully" } });
                        } else {
                            reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_EXIST } })
                        }
                    } else {
                        let changes = {
                            $set: {
                                Image_Data: ImageData,
                                Banner_Name: values.Banner_Name,
                                SNo: values.SNo,
                                Status: true,
                                updated_at: new Date()
                            }
                        }
                        let Updatedate = await Banner.updateOne(query, changes).lean();
                        resolve({ success: true, extras: { Status: "Banner Updated Successfully" } });
                    }

                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_BANNER } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_All_Banner = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {

                };
                let sortOptions = {
                    SNo: -1
                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let Count = await Banner.countDocuments(query).lean().exec();
                let Result = await Banner.find(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings').sort(sortOptions).skip(toSkip).limit(toLimit).lean().exec();
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
                    }
                }, async (err) => {
                    if (err) reject(err);
                    resolve({ success: true, extras: { Count: Count, Data: Data } })
                });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Create_Banner = (values, ImageData, WebImageData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    SNo: values.SNo,
                    Status: true
                }
                let Result = await Banner.findOne(query).lean();
                if (Result == null) {
                    let Data = {
                        BannerID: uuid.v4(),
                        Image_Data: ImageData,
                        WebImageData: WebImageData,
                        Banner_Name: values.Banner_Name,
                        SNo: values.SNo,
                        Status: true,
                        created_at: new Date(),
                        updated_at: new Date()
                    };
                    let SaveData = await Banner(Data).save()
                    resolve({ success: true, extras: { Status: "Banner Created Successfully" } });
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_EXIST } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_All_Help_Data = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {

                };
                let sortOptions = {
                    created_at: -1
                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let Count = await Help_Data.countDocuments(query).lean().exec();
                let Result = await Help_Data.find(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings').sort(sortOptions).skip(toSkip).limit(toLimit).lean().exec();
                resolve({ success: true, extras: { Count: Count, Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Active_Inactive_Help = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    HelpDataID: values.HelpDataID
                }
                let HelpResult = await Help_Data.findOne(query).lean().exec()
                let statys;
                if (HelpResult.Status) {
                    statys = "Inactivated Successfully";
                    let changes = {
                        $set: {
                            Status: false,
                            updated_at: new Date()
                        }
                    }
                    let UpdatedStatus = await Help_Data.updateOne(query, changes).lean().exec();
                } else {
                    statys = "Activated Successfully"
                    let changes = {
                        $set: {
                            Status: true,
                            updated_at: new Date()
                        }
                    }
                    let UpdatedStatus = await Help_Data.updateOne(query, changes).lean().exec();
                }
                resolve({ success: true, extras: { Status: statys } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Edit_Help = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    HelpDataID: values.HelpDataID
                }
                let changes = {
                    $set: {
                        Title: values.Title,
                        Description: values.Description,
                        Status: true,
                        updated_at: new Date()
                    }
                }
                let UpdatedStatus = await Help_Data.updateOne(query, changes).lean().exec();
                resolve({ success: true, extras: { Status: "Updated successfully" } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Create_Help = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Data = {
                    HelpDataID: uuid.v4(),
                    Title: values.Title,
                    Description: values.Description,
                    Status: true,
                    created_at: new Date(),
                    updated_at: new Date()
                }
                let ResultStatus = await Help_Data(Data).save();
                resolve({ success: true, extras: { Status: "Created successfully" } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Complete_Buyer_Order = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    OrderID: values.OrderID,
                    Status: true,
                }
                let changes = {
                    $set: {
                        Order_Status: 3
                    },
                    $push: {
                        Order_Report: {
                            Title: 'Order Delivered',
                            Description: 'Order Delivered',
                            Time: new Date()
                        }
                    }
                }
                let UpdatedStatus = await Buyer_Orders.updateOne(query, changes).lean();
                resolve({ success: true, extras: { Status: "Order Status updated successfully" } })
                //Amount Sharing after order delivery complete
                let OrderData = await Buyer_Orders.findOne(query).lean().exec();
                let BuyerData = await Buyers.findOne({ BuyerID: OrderData.BuyerID }).lean().exec()
                if (OrderData.Delivery_Type == 1) {
                    let Total_Introducer_Amount = 0;
                    let Total_Buyer_Amount = 0;
                    let Total_Shop_Amount = 0;
                    let Total_Company_Amount = 0;
                    let Total_Buyer_Amount_Array = [0, 0, 0, 0, 0, 0, 0, 0, 0];

                    console.log("4200 ----> full item c--" +"--"+  JSON.stringify(OrderData.Cart_Information))

                   await async.eachSeries(OrderData.Cart_Information, async (item, callback) => {
                        //
                        try {
                            console.log("4205 ----> full it--" +"--"+  JSON.stringify(item))
                            for (var i = 0; i < item.Total_Product_Share_Distributed_Amount.Buyer_Amount_Array.length; i++) {
                                console.log("4205 ----> full it--" +"--"+  JSON.stringify(item.Total_Product_Share_Distributed_Amount.Buyer_Amount_Array[i]))
                                Total_Buyer_Amount_Array[i] += item.Total_Product_Share_Distributed_Amount.Buyer_Amount_Array[i];
                                console.log("4205 ----> single item c--"+i +"--"+  Total_Buyer_Amount_Array[i])
                            }
                            Total_Introducer_Amount += item.Total_Product_Share_Distributed_Amount.Introducer_Amount;
                            Total_Buyer_Amount += item.Total_Product_Share_Distributed_Amount.Buyer_Amount;
                            Total_Shop_Amount += item.Total_Product_Share_Distributed_Amount.Shop_Amount;
                            Total_Company_Amount += item.Total_Product_Share_Distributed_Amount.Company_Amount;
                            callback();
                        } catch (error) {
                            callback(error);
                        }
                    }, async (err) => {
                        if (err) reject(err);

                        console.log("4218 ----> single final t--" +  JSON.stringify(Total_Buyer_Amount_Array));
                        /// check for User network and split amount to network for below 9 referals and add remainnig amount to company account 
                        let HeirarchyResult = await ShopController.Find_Buyer_Hierarchy([], BuyerData.BuyerID);
                        HeirarchyResult.shift();

                        let HeirarchyLength = HeirarchyResult.length;
                        let Each_buyer_share_amount = parseFloat(Total_Buyer_Amount / config.max_buyer_network_heirarchy);
                        let ExcessAmount = 0;
                        if (HeirarchyLength >= config.max_buyer_network_heirarchy) {
                            //remove excess childs
                            HeirarchyResult.length = config.max_buyer_network_heirarchy
                        } else {
                            let Number_of_Empty = parseFloat(config.max_buyer_network_heirarchy - HeirarchyLength) * -1
                            let DummyArray = Total_Buyer_Amount_Array
                            ExcessAmount = DummyArray.slice(Number_of_Empty).reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
                        }
                        // amount processing
                        console.log("4228---> "+JSON.stringify(HeirarchyResult));
                        let AmountProcessing = await AdminController.Amount_Processing_For_Buyers(OrderData, BuyerData, HeirarchyResult, Total_Buyer_Amount_Array);
                        /////
                        let Final_Total_Company_Amount = parseFloat(Total_Introducer_Amount + Total_Shop_Amount + Total_Company_Amount + OrderData.Tax + ExcessAmount);
                        // amount added to company after product delivered
                        let Data = {
                            Amount: Final_Total_Company_Amount,
                            OrderData: OrderData,
                            BuyerData: BuyerData,
                            Delivery_Type: 1
                        };
                        let CData = {
                            LogID: uuid.v4(),
                            Type: 4, //Credit Amount buyer Order
                            Amount: Final_Total_Company_Amount,
                            Data: Data,
                            Time: new Date()
                        };
                        let SaveCData = await Company_Share_Logs(CData).save();
                        let changes = {
                            $inc: {
                                Available_Amount: Final_Total_Company_Amount,
                                Total_Amount: Final_Total_Company_Amount
                            }
                        }
                        let CSaveData = await Company_Share.updateOne({}, changes).lean().exec();
                    });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Amount_Processing_For_Buyers = (OrderData, BuyerData, HeirarchyResult, Total_Buyer_Amount_Array) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                console.log("4275 ----> single final t--" +  JSON.stringify(Total_Buyer_Amount_Array));
                let i = 0;
                let BonanzaData = await Bonanza_Log.findOne({
                    Bonanza_Status: 1,
                    Bonanza_Type: {
                        $in: [1, 3]
                    },
                    Status: true
                }).lean().exec();
                async.eachSeries(HeirarchyResult, async (item, callback) => {
                    try {
                        let Amount = Total_Buyer_Amount_Array[i];
                        console.log("4275 ----> single final single c--" +i+"---"+  JSON.stringify(Total_Buyer_Amount_Array[i]));
                        i++;
                        let query = {
                            BuyerID: item
                        };
                        let changes = {
                            $inc: {
                                Purchace_Coupons_Amount_Available: Amount,
                                Purchace_Coupons_Amount_Total: Amount
                            },
                            $set: {
                                updated_at: new Date()
                            }
                        }
                     //   let UpdateData = await Buyers.updateOne(query, changes).lean().exec();
                        let Data = {
                            Amount: Amount,
                            BuyerData: BuyerData,
                            OrderData: OrderData
                        };
                        let OCData = {
                            LogID: uuid.v4(),
                            BuyerID: item,
                            Type: 6, //Buyer order share credit
                            Amount: Amount,
                            Data: Data,
                            Time: new Date()
                        }
                     //   let SaveData = await Buyers_Purchase_Log(OCData).save();


                        let query_network = {
                            BuyerID: item
                        }
                        let network_data = await Buyers_Ultimate_Network.findOne(query_network).lean().exec()
        
                        console.log("4317--->" + JSON.stringify(network_data));

                        console.log("4319--->amount dviding --" + JSON.stringify(Amount));
        
                        let query_networkx = {
                            BuyerID: item
                        }
                        let network_datax = await Buyers.findOne(query_networkx).lean().exec();

                        let Level_BuyerData = network_datax;

                        let Share_RequestData = network_datax;

                        let one_level_Share_Amount = Amount;
        
                        if (network_data != null) {
                            if (network_data.No_of_Network > 0) {
                                let query_tgt_ref = {
                                    Target_Referal: {
                                        $gte: network_data.No_of_Network,
                                    }
                                }
                                let Target_Referals = await Target_Referal.find(query_tgt_ref).lean().exec()
                                if (Target_Referals != null) {
                                    
                                    let min = Math.min.apply(null, Target_Referals.map(function (item) {
                                        return item.Target_Referal;
                                    }))
                                    let Find_Doc = await Target_Referals.find(function (Target) {
                                        return (Target.Target_Referal == min);
                                    });
                                    
                                    // return true
                                    console.log("4350----> ("+network_datax.Purchace_Coupons_Amount_Total+ "<="+ Find_Doc.Wallet_Limit +")" )
                                    if (Level_BuyerData.Purchace_Coupons_Amount_Total <= Find_Doc.Wallet_Limit) {
                                         
                                        console.log("4353--->success target amt " + network_datax.Buyer_PhoneNumber + "-amt--" + one_level_Share_Amount.toFixed(0));
        
                                        
                                       
                                        let Total_Share_Amount = Level_BuyerData.Purchace_Coupons_Amount_Total + one_level_Share_Amount
                                        let Extra_Amount = 0
                                        let Final_Amount = 0
                                        if (Total_Share_Amount > Find_Doc.Wallet_Limit) {
                                            Extra_Amount = Total_Share_Amount - Find_Doc.Wallet_Limit
                                        }
                                        Final_Amount = one_level_Share_Amount - Extra_Amount
                                        console.log("4364---> Saving Logs fromuser ---> " + network_datax.Buyer_PhoneNumber);
                                        console.log("4375---> Final Amount ---> " + Final_Amount);
                                        console.log("4377---> from  Amount ---> " + BuyerData.Buyer_PhoneNumber);
                                       
                                        // 
                                        let PWData = {
                                            LogID: uuid.v4(),
                                            BuyerID: Level_BuyerData.BuyerID,
                                            Type: 6,  //User SHop Credited amount for Buyer Share Amount Request Notofication
                                            Amount: Final_Amount,
                                            Data: {
                                                Buyer_Name: BuyerData.Buyer_Name,
                                                From_Buyer_Name: BuyerData.Buyer_Name
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
                                            console.log("4392--->fail target amt " + Level_BuyerData.Buyer_PhoneNumber + "-amt--" + one_level_Share_Amount.toFixed(0));
        
                                            let Save_Expire_WalletAMount = await AdminController.Expire_Wallet_Amount_Saving(Extra_Amount, Level_BuyerData, BuyerData, Share_RequestData);
        
                                        }
        
                                    } else {
                                        console.log("4399--->fail target amt " + Level_BuyerData.Buyer_PhoneNumber + "-amt--" + one_level_Share_Amount.toFixed(0));
        
                                        let Save_Expire_WalletAMount = await AdminController.Expire_Wallet_Amount_Saving(one_level_Share_Amount, Level_BuyerData, BuyerData, Share_RequestData);
                                    }
        
                                } else {
                                    console.log("4405--->success but no target amt " + Level_BuyerData.Buyer_PhoneNumber + "-amt--" + one_level_Share_Amount.toFixed(0));
        
                                    let Adata = {
                                        Buyer_Name: network_datax.Buyer_Name,
                                        From_Buyer_Name: network_datax.Buyer_Name
                                    }
                                    let APWData = {
                                        LogID: uuid.v4(),
                                        BuyerID: Level_BuyerData.BuyerID,
                                        Type: 6,  //User SHop Credited amount for Buyer Share Amount Request Notofication
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
                        }





































                        let networkquery = {
                            BuyerID: item,
                            'Network_Information.BuyerID': BuyerData.BuyerID
                        }
                        let networkchanges = {
                            $inc: {
                                'Network_Information.$.Amount_Shared': Amount
                            }
                        }
                        let networkUpdate = await Buyers_Ultimate_Network.updateOne(networkquery, networkchanges).lean().exec()
                        if (BonanzaData != null) {
                            let OrderValues = await OrderData.Cart_Total_Price
                            let BasePoints = parseInt(OrderValues / BonanzaData.Points_Calculation_Data.Amount)
                            let Points = BasePoints * BonanzaData.Points_Calculation_Data.Points
                            let Bonanza_Points_Data = [];
                            for (let PointsData of BonanzaData.Bonanza_Points_Data) {
                                let BPD = await CronController.Bonanza_Level_Points_Calculation(PointsData, item, Points, i)
                                Bonanza_Points_Data.push(BPD);
                            }
                            let fndupdquery = {
                                BuyerID: item,
                                BonanzaID: BonanzaData.BonanzaID,
                            };
                            let fndupdchanges = {
                                $setOnInsert: {
                                    LogID: uuid.v4(),
                                    Bonanza_Code: BonanzaData.Bonanza_Code,
                                    BonanzaID: BonanzaData.BonanzaID,
                                    BuyerID: item,
                                    Name: BonanzaData.Name,
                                    Description: BonanzaData.Description,
                                    Start_Date: BonanzaData.Start_Date,
                                    End_Date: BonanzaData.End_Date,
                                    Bonanza_Type: BonanzaData.Bonanza_Type, //1- Points, 2- Matrix, 3-both
                                    Points_Calculation_Data: BonanzaData.Points_Calculation_Data,
                                    Bonanza_Status: BonanzaData.Bonanza_Status,
                                    created_at: new Date()
                                },
                                $set: {
                                    Bonanza_Points_Data: Bonanza_Points_Data,
                                    updated_at: new Date()
                                },
                            };
                            let fndupdoptions = {
                                upsert: true,
                                setDefaultsOnInsert: true,
                                new: true
                            }
                            let findupdateData = await Buyer_Bonanza_Log.findOneAndUpdate(fndupdquery, fndupdchanges, fndupdoptions).select('-id -_v').lean();
                        }


                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async (err) => {
                    if (err) reject(err);
                    resolve("Process Completed")
                });

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Change_Buyer_Order_Status = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    OrderID: values.OrderID,
                    Status: true,
                }
                let changes = {
                    $push: {
                        Order_Report: {
                            Title: values.Title,
                            Description: values.Description,
                            Time: new Date()
                        }
                    }
                }
                let UpdatedStatus = await Buyer_Orders.updateOne(query, changes).lean();
                resolve({ success: true, extras: { Status: "Order Status updated successfully" } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Delete_Buyer_Order = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    OrderID: values.OrderID,
                    Status: true,
                    Order_Status: {
                        $eq: 1
                    }
                }
                let orderDetails = await Buyer_Orders.findOne(query).select('BuyerID Amount_Paid').lean();
                if (orderDetails != null) {
                    let changes = {
                        $set: {
                            Status: false,
                            Order_Status: 4,
                            updated_at: new Date()
                        },
                        $push: {
                            Order_Report: {
                                Title: "Cancelled by Seller",
                                Description: "",
                                Time: new Date()
                            }
                        }
                    }
                    let UpdatedStatus = await Buyer_Orders.updateOne(query, changes).lean();
                    // refund amount to wallet

                    let BuyerQuery = {
                        BuyerID: orderDetails.BuyerID
                    }
                    let Amount = parseFloat(orderDetails.Total_Amount_Paid)
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
                        BuyerData: buyerupdate,
                        Amount: Amount,
                        OrderData: orderDetails,
                    };
                    let WData = {
                        LogID: uuid.v4(),
                        BuyerID: orderDetails.BuyerID,
                        Type: 5, //Credited amount Cancelled Order by Seller
                        Amount: Amount,
                        Data: Data,
                        Time: new Date()
                    }
                    let logupdate = await Buyer_Share_Logs(WData).save();
                    resolve({ success: true, extras: { Status: "Order Status updated successfully" } })
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.PURCHASE_ORDER_CAN_NOT_CANCEL } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_Buyer_Orders = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    created_at: -1
                };

                let matchquery = {
                    Status: values.Status,
                    BuyerID: values.BuyerID,
                    Payment_Status: {
                        $ne: 0
                    },
                    created_at: {
                        $gte: values.Start_Date,
                        $lte: values.End_Date
                    }
                };
                let Count = await Buyer_Orders.countDocuments(matchquery).lean().exec();
                let Result = await Buyer_Orders.find(matchquery).sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();

                resolve({ success: true, extras: { Count: Count, Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_All_Buyers_Orders = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    created_at: -1
                };

                let matchquery = {
                    Status: values.Status,
                    Payment_Status: {
                        $ne: 0
                    },
                    created_at: {
                        $gte: values.Start_Date,
                        $lte: values.End_Date
                    }
                };
                let Count = await Buyer_Orders.countDocuments(matchquery).lean().exec();
                let Result = await Buyer_Orders.find(matchquery).sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();

                resolve({ success: true, extras: { Count: Count, Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_All_Trending_Buyers = (values, All_ShopID_Array) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                // let Start_Date = moment(values.Start_Date, config.Take_Date_Format).subtract(330, 'minutes').toDate();
                // let End_Date = moment(values.End_Date, config.Take_Date_Format).subtract(330, 'minutes').add(1, 'day').subtract(1, 'ms').toDate();
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    Sum_of_Total_Amount: -1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                let matchquery = {
                    Status: {
                        $eq: true
                    },
                    ShopID: {
                        $in: All_ShopID_Array
                    },
                    created_at: {
                        $gte: values.Start_Date,
                        $lte: values.End_Date
                    }
                };
                let GroupMap = {
                    _id: "$BuyerID",
                    BuyerID: {
                        $first: "$BuyerID"
                    },
                    No_of_Orders: {
                        $sum: 1
                    },
                    Sum_of_Total_Amount: {
                        $sum: "$Total_Amount"
                    }
                }
                let lookupoptions = {
                    from: 'Buyers',
                    localField: 'BuyerID',
                    foreignField: 'BuyerID',
                    as: 'BuyerData'
                }
                let addoptionsmap = {
                    Buyer_Name: "$BuyerData.Buyer_Name",
                    Buyer_CountryCode: "$BuyerData.Buyer_CountryCode",
                    Buyer_PhoneNumber: "$BuyerData.Buyer_PhoneNumber",
                    Buyer_Available_Amount: "$BuyerData.Cash_Coupons_Amount_Available",
                    Buyer_Withdrawn_Amount: "$BuyerData.Withdrawn_Amount",
                    Buyer_Total_Amount: "$BuyerData.Total_Amount"
                };
                let removeoptions = {
                    _id: 0,
                    BuyerData: 0
                }
                let CountAggregate = await Shop_Bills.aggregate().match(matchquery).group(GroupMap).count('Count').exec();
                let ResultAggregate = await Shop_Bills.aggregate().match(matchquery).group(GroupMap).lookup(lookupoptions).unwind('BuyerData').addFields(addoptionsmap).project(removeoptions).sort(sortOptions).skip(toSkip).limit(toLimit).exec();
                let Count = (CountAggregate.length > 0) ? CountAggregate[0].Count : 0;
                resolve({ success: true, extras: { Count: Count, Data: ResultAggregate } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_All_Trending_Buyers_Validate_Shops_Information = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let All_ShopID_Array = [];
                if (Boolify(values.Whether_All_Shops)) {
                    All_ShopID_Array = await Shops.distinct('ShopID', { Status: true });
                    resolve(All_ShopID_Array);
                } else {
                    if (values.ShopID != null && values.ShopID != undefined && values.ShopID != '') {
                        let query = {
                            ShopID: values.ShopID
                        };
                        let Result = await Shops.findOne(query).lean();
                        if (Result == null) {
                            reject({ success: false, extras: { msg: ApiMessages.INVALID_SHOP } })
                        } else {
                            All_ShopID_Array.push(values.ShopID);
                            resolve(All_ShopID_Array);
                        };
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } })
                    }
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Edit_Shop = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    ShopID: values.ShopID
                };
                let changes = {
                    $set: {
                        Address: values.Address,
                        Latitude: parseFloat(values.Latitude),
                        Longitude: parseFloat(values.Longitude),
                        Point: [parseFloat(values.Longitude), parseFloat(values.Latitude)],
                        updated_at: new Date()
                    }
                };
                let UpdatedStatus = await Shops.updateOne(query, changes).lean();
                resolve({ success: true, extras: { Status: "Updated Successfully" } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Edit_Shop_Name = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    ShopID: values.ShopID
                };
                let changes = {
                    $set: {
                        Shop_Name: values.Shop_Name,
                        updated_at: new Date()
                    }
                };
                let UpdatedStatus = await Shops.updateOne(query, changes).lean();
                resolve({ success: true, extras: { Status: "Updated Successfully" } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Edit_Shop_GST = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    ShopID: values.ShopID
                };
                let changes = {
                    $set: {
                        GST_Number: values.GST_Number,
                        updated_at: new Date()
                    }
                };
                let UpdatedStatus = await Shops.updateOne(query, changes).lean();
                resolve({ success: true, extras: { Status: "Updated Successfully" } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Activate_Product = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    ProductID: values.ProductID
                };
                let changes = {
                    $set: {
                        Status: true,
                        updated_at: new Date()
                    }
                };
                let UpdatedStatus = await Products.updateOne(query, changes).lean();
                resolve({ success: true, extras: { Status: "Activated Successfully" } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_All_Inactive_Products = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Status: false
                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    Product_Name: 1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                let Count = await Products.countDocuments(query).lean().exec();
                let Result = await Products.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                resolve({ success: true, extras: { Count: Count, Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Inactivate_Product = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    ProductID: values.ProductID
                };
                let changes = {
                    $set: {
                        Status: false,
                        updated_at: new Date()
                    }
                };
                let UpdatedStatus = await Products.updateOne(query, changes).lean();
                resolve({ success: true, extras: { Status: "Inactivated Successfully" } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Edit_Product = (values, ImageData, Product_ImageData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                console.log(111)
                let q = {
                    CategoryID: values.CategoryID
                }
                let CategoryData = await Category.findOne(q).lean().exec();
                let Buyer_Price_Array = values.Buyer_Price_Array
                let Introducer_Price = parseFloat(values.Introducer_Price) || 0;
                let Buyer_Price = Buyer_Price_Array.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
                let Shop_Price = parseFloat(values.Shop_Price) || 0;
                let Company_Price = parseFloat(values.Company_Price) || 0;
                let Product_Price = Introducer_Price + Buyer_Price + Shop_Price + Company_Price;
                let Introducer_Share = parseFloat((Introducer_Price / Product_Price) * 100).toFixed(2);
                let Buyer_Share = parseFloat((Buyer_Price / Product_Price) * 100).toFixed(2);
                let Shop_Share = parseFloat((Shop_Price / Product_Price) * 100).toFixed(2);
                let Company_Share = parseFloat((Company_Price / Product_Price) * 100).toFixed(2);
                let Total_Share = parseFloat(Company_Share) + parseFloat(Shop_Share) + parseFloat(Buyer_Share) + parseFloat(Introducer_Share);
                if (Total_Share > 100) {
                    Company_Share = parseFloat(Company_Share) - 0.01
                } else if (Total_Share < 100) {
                    Company_Share = parseFloat(Company_Share) + 0.01
                }
                let query = {
                    ProductID: values.ProductID
                };
                let Product_Weight = 1;
                if (values.Product_Weight <= 30) {
                    Product_Weight = values.Product_Weight
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.PRODUCT_WEIGHT_LIMIT_EXCIDED_30KG } })
                }
                let changes = {
                    $set: {
                        Product_Name: values.Product_Name,
                        Product_Price: Product_Price,
                        Product_Description: values.Product_Description,
                        Product_Category: CategoryData,
                        Product_Price_Divisions: {
                            Introducer_Share: Introducer_Share,
                            Buyer_Share: Buyer_Share,
                            Shop_Share: Shop_Share,
                            Company_Share: Company_Share
                        },
                        Product_Price_Data: {
                            Introducer_Price: Introducer_Price,
                            Buyer_Price_Array: Buyer_Price_Array,
                            Buyer_Price: Buyer_Price,
                            Shop_Price: Shop_Price,
                            Company_Price: Company_Price
                        },
                        Image_Data: ImageData,
                        Product_Image_Data: Product_ImageData,
                        Product_GST: values.Product_GST,
                        Product_HST: values.Product_HST,
                        Quantity_Update_by: values.AdminID,
                        Quantity_Update_at: new Date(),
                        updated_at: new Date()
                    },
                    $inc: {
                        Product_Quantity: values.Product_Quantity,
                    }
                };
                let UpdatedStatus = await Products.updateOne(query, changes).lean();
                resolve({ success: true, extras: { Status: "Updated Successfully" } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Buyer_List_All_Shop_Bills = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: values.BuyerID,
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
                let Result = await Shop_Bills.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                async.eachSeries(Result, async (item, callback) => {
                    try {
                        let ShopData = await CommonController.Check_Only_Shop(item);
                        item.ShopID = ShopData.ShopID;
                        item.Shop_Name = ShopData.Shop_Name;
                        item.Shop_CountryCode = ShopData.Shop_CountryCode;
                        item.Shop_PhoneNumber = ShopData.Shop_PhoneNumber;
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async (err) => {
                    if (err) reject(err);
                    resolve({ success: true, extras: { Count: Count, Data: Result } })
                });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Shipping_Notification_Shop_Purchase = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    PurchaseID: values.PurchaseID
                };
                let changes = {
                    $set: {
                        PurchaseStatus: 4,
                        updated_at: new Date()
                    },
                    $push: {
                        PurchaseLogs: {
                            PurchaseStatus: 4,
                            Description: values.Description,
                            Time: new Date()
                        }
                    }
                };
                let UpdatedStatus = await Shop_Purchases.updateMany(query, changes).lean();
                resolve({ success: true, extras: { Status: "Shipping Notification Updated" } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Shipping_Notification_Shop_Purchase_Validate_Status = (PurchaseData) => {
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

AdminController.Shipping_Shop_Purchase = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    PurchaseID: values.PurchaseID
                };
                let changes = {
                    $set: {
                        PurchaseStatus: 3,
                        updated_at: new Date()
                    },
                    $push: {
                        PurchaseLogs: {
                            PurchaseStatus: 3,
                            Description: values.Description,
                            Time: new Date()
                        }
                    }
                };
                let UpdatedStatus = await Shop_Purchases.updateMany(query, changes).lean();
                resolve({ success: true, extras: { Status: "Purchase Order Shipped" } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


AdminController.Shipping_Shop_Purchase_Validate_Status = (PurchaseData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                if (PurchaseData.PurchaseStatus == 2) {
                    resolve("Validate Successfully")
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.PURCHASE_ORDER_ALREADY_SHIPPED } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Accept_Shop_Purchase = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    PurchaseID: values.PurchaseID
                };
                let changes = {
                    $set: {
                        PurchaseStatus: 2,
                        updated_at: new Date()
                    },
                    $push: {
                        PurchaseLogs: {
                            PurchaseStatus: 2,
                            Description: values.Description,
                            Time: new Date()
                        }
                    }
                };
                let UpdatedStatus = await Shop_Purchases.updateMany(query, changes).lean();
                resolve({ success: true, extras: { Status: "Purchase Order Accepted" } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Accept_Shop_Purchase_Validate_Status = (PurchaseData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                if (PurchaseData.PurchaseStatus == 1) {
                    resolve("Validate Successfully")
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.PURCHASE_ORDER_ALREADY_ACCEPTED } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


AdminController.List_All_Shop_Purchases = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
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
                let Count = await Shop_Purchases.countDocuments(query).lean().exec();
                let Result = await Shop_Purchases.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                async.eachSeries(Result, async (item, callback) => {
                    try {
                        let ShopData = await CommonController.Check_Only_Shop(item);
                        item.ShopID = ShopData.ShopID;
                        item.Shop_Name = ShopData.Shop_Name;
                        item.Shop_CountryCode = ShopData.Shop_CountryCode;
                        item.Shop_PhoneNumber = ShopData.Shop_PhoneNumber;
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

AdminController.List_All_Buyer_Offer_Message_Logs = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    MessageID: values.MessageID
                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    created_at: -1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                let Count = await Buyer_Offer_Message.countDocuments(query).lean().exec();
                let Result = await Buyer_Offer_Message.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                async.eachSeries(Result, async (item, callback) => {
                    try {
                        let BuyerData = await CommonController.Check_for_Buyer(item);
                        item.Buyer_Name = BuyerData.Buyer_Name;
                        item.Buyer_CountryCode = BuyerData.Buyer_CountryCode;
                        item.Buyer_PhoneNumber = BuyerData.Buyer_PhoneNumber;
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

AdminController.List_All_Offer_Messages = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {

                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    created_at: -1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                let Count = await Offer_Messages.countDocuments(query).lean().exec();
                let Result = await Offer_Messages.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                async.eachSeries(Result, async (item, callback) => {
                    try {
                        item.No_of_Buyers = item.Buyers_Information.length;
                        item.Buyers_Information = item.Buyers_Information.slice(0, 5);
                        item.ShopData = {
                            ShopID: "",
                            Shop_Name: "",
                            Shop_CountryCode: "",
                            Shop_PhoneNumber: ""
                        };
                        if (item.Whether_Shop) {
                            let ShopData = await CommonController.Check_Only_Shop(item);
                            item.ShopData.ShopID = ShopData.ShopID;
                            item.ShopData.Shop_Name = ShopData.Shop_Name;
                            item.ShopData.Shop_CountryCode = ShopData.Shop_CountryCode;
                            item.ShopData.Shop_PhoneNumber = ShopData.Shop_PhoneNumber;
                        }
                        delete item.ShopID;
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

AdminController.Take_Unique_Buyer_Offer_Code = () => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let OfferCode = await CommonController.Common_Unique_Six_Digit_String();
                let query = {
                    OfferCode: OfferCode
                };
                let Result = await Buyer_Offer_Message.findOne(query).lean();
                if (Result == null) {
                    resolve(OfferCode);
                } else {
                    OfferCode = await AdminController.Take_Unique_Buyer_Offer_Code();
                    resolve(OfferCode);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Create_Offer_Message_Process_Individual_Buyer_Offer = (values, OfferMessageData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Buyers_Information = OfferMessageData.Buyers_Information;
                async.each(Buyers_Information, async (item, callback) => {
                    try {
                        let OfferCode = await AdminController.Take_Unique_Buyer_Offer_Code();
                        let PhoneNumber = `${item.Buyer_CountryCode}${item.Buyer_PhoneNumber}`;
                        let Offer_Message = `${OfferMessageData.Message} Code: ${OfferCode}`;
                        let BuyerOfferData = {
                            BuyerID: item.BuyerID,
                            MessageID: OfferMessageData.MessageID,
                            Type: OfferMessageData.Type,
                            Whether_Shop: OfferMessageData.Whether_Shop,
                            ShopID: OfferMessageData.ShopID,
                            OfferCode: OfferCode,
                            Message: OfferMessageData.Message,
                            Offer_Message: Offer_Message,
                            Buyer_Min_Amount: OfferMessageData.Buyer_Min_Amount,
                            Buyer_Max_Amount: OfferMessageData.Buyer_Max_Amount,
                            Buyer_Deduction_Amount: OfferMessageData.Buyer_Deduction_Amount,
                            Expiry_Date: OfferMessageData.Expiry_Date,
                            created_at: new Date(),
                            updated_at: new Date()
                        }
                        let SaveBuyerOfferResult = await Buyer_Offer_Message(BuyerOfferData).save();
                        let Amount = OfferMessageData.Buyer_Deduction_Amount;
                        let LogData = {
                            LogID: uuid.v4(),
                            BuyerID: item.BuyerID,
                            Type: 3, //Withdraw for Redeem
                            Amount: Amount,
                            Data: {
                                BuyerID: item.Buyer_Name,
                                
                            },
                            Time: new Date()
                        };
                        let SaveLogResult = await Buyer_Share_Logs(LogData).save();
                        let uquery = {
                            BuyerID: item.BuyerID
                        };
                        let uchanges = {
                            $set: {
                                updated_at: new Date()
                            },
                            $inc: {
                                Withdrawn_Amount: Amount,
                                Available_Amount: Amount * -1
                            }
                        };
                        let uoptions = {
                            new: true
                        };
                        let UpdateAmountData = await Buyers.findOneAndUpdate(uquery, uchanges, uoptions).lean();
                        let MessageSentStatus = await MessagesController.Send_SMS(PhoneNumber, Offer_Message);
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, err => {
                    if (err) console.error(err);
                    resolve("Processed all buyer logs");
                })

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Create_Offer_Message = (values, Buyers_Information) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Type = parseInt(values.Type) || 1;
                let Buyer_Min_Amount = parseFloat(values.Buyer_Min_Amount) || 0;
                let Buyer_Max_Amount = parseFloat(values.Buyer_Max_Amount) || 1;
                let Buyer_Deduction_Amount = parseFloat(values.Buyer_Deduction_Amount) || 1;
                let Message = String(values.Message);
                let Expiry_Date = moment(values.Expiry_Date, config.Take_Date_Format).subtract(330, 'minutes').add(1, 'day').subtract(1, 'ms').toDate();
                let Data = {
                    MessageID: uuid.v4(),
                    Type: Type,
                    Whether_Shop: (Type == 2) ? true : false,
                    ShopID: values.ShopID,
                    Buyers_Information: Buyers_Information,
                    Buyer_Min_Amount: Buyer_Min_Amount,
                    Buyer_Max_Amount: Buyer_Max_Amount,
                    Buyer_Deduction_Amount: Buyer_Deduction_Amount,
                    Message: Message,
                    Expiry_Date: Expiry_Date,
                    created_at: new Date(),
                    updated_at: new Date()
                };
                let SaveResult = await Offer_Messages(Data).save();
                resolve([{ success: true, extras: { Status: "Offer Message Created Successfully" } }, JSON.parse(JSON.stringify(SaveResult))]);
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Create_Offer_Message_Fetch_Buyer_Information = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Data = [];
                let Type = parseInt(values.Type) || 1;
                let Buyer_Min_Amount = parseFloat(values.Buyer_Min_Amount) || 0;
                let Buyer_Max_Amount = parseFloat(values.Buyer_Max_Amount) || 1;
                let Buyer_Deduction_Amount = parseFloat(values.Buyer_Deduction_Amount) || 1;
                if (Type == 1) {
                    let query = {
                        Available_Amount: {
                            $gte: Buyer_Min_Amount,
                            $lte: Buyer_Max_Amount
                        },
                        Status: true
                    };
                    Data = await Buyers.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').lean().exec();
                    if (Data.length > 0) {
                        resolve(Data);
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.NO_BUYERS_AVAILABLE_FOR_THIS_OFFER } })
                    }
                } else if (Type == 2) {
                    let arr = [];
                    arr = await Shop_Bills.distinct('BuyerID', { ShopID: values.ShopID }).lean();
                    let query = {
                        BuyerID: {
                            $in: arr
                        },
                        Available_Amount: {
                            $gte: Buyer_Min_Amount,
                            $lte: Buyer_Max_Amount
                        },
                        Status: true
                    };
                    Data = await Buyers.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').lean().exec();
                    if (Data.length > 0) {
                        resolve(Data);
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.NO_BUYERS_AVAILABLE_FOR_THIS_OFFER } })
                    }
                } else if (Type == 3) {
                    //Individual Buyer
                    if (values.BuyerID == "") {
                        reject({ success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } })
                    } else {
                        let BuyerData = await CommonController.Check_for_Buyer(values);
                        if (BuyerData.Cash_Coupons_Amount_Available >= Buyer_Deduction_Amount) {
                            Data.push(BuyerData);
                            resolve(Data);
                        } else {
                            reject({ success: false, extras: { msg: ApiMessages.INSUFFICIENT_BALANCE } })
                        }
                    }
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Create_Offer_Message_Validate_Shop = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Type = parseInt(values.Type) || 1;
                if (Type == 2) {
                    if (values.ShopID == "") {
                        reject({ success: false, extras: { msg: ApiMessages.ENTER_ALL_TAGS } })
                    } else {
                        let ShopData = await CommonController.Check_Only_Shop(values);
                        resolve("Validated Successfully");
                    }
                } else {
                    resolve("Validated Successfully");
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Create_Offer_Message_Validity_Params = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Type = parseInt(values.Type) || 1;
                let Buyer_Min_Amount = parseFloat(values.Buyer_Min_Amount) || 0;
                let Buyer_Max_Amount = parseFloat(values.Buyer_Max_Amount) || 1;
                let Buyer_Deduction_Amount = parseFloat(values.Buyer_Deduction_Amount) || 1;
                let Message = String(values.Message);
                let Expiry_Date = moment(values.Expiry_Date, config.Take_Date_Format).subtract(330, 'minutes');
                if (Type == 1 || Type == 2 || Type == 3) {
                    if (Buyer_Min_Amount <= Buyer_Max_Amount) {
                        if (Buyer_Deduction_Amount <= Buyer_Min_Amount) {
                            if (Message.length <= config.OFFER_MESSAGE_LENGTH) {
                                if (Expiry_Date.isValid()) {
                                    resolve("Validated Successfully")
                                } else {
                                    reject({ success: false, extras: { msg: ApiMessages.INVALID_EXPIRY_DATE } })
                                }
                            } else {
                                reject({ success: false, extras: { msg: ApiMessages.MESSAGE_SIZE_EXCEEDED } })
                            }
                        } else {
                            reject({ success: false, extras: { msg: ApiMessages.DEDUCTION_AMOUNT_MUST_BE_LESS_THAN_ALL_EQUAL_TO_MINIMUM_AMOUNT } })
                        }
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.MINIMUN_AMOUNT_MUST_BE_LESS_MAXIMUM_AMOUNT } })
                    }
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_OFFER_TYPE } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Search_Buyers = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let SearchValue = String(values.SearchValue);
                let regexquery = {
                    $regex: SearchValue, $options: "i"
                }
                let query = {
                    Status: true,
                    $or: [
                        {
                            Buyer_Name: regexquery
                        },
                        {
                            Buyer_PhoneNumber: regexquery
                        },
                    ]
                };
                let Result = await Buyers.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').limit(10).exec();
                resolve({ success: true, extras: { Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


AdminController.Buyer_Network_Heirarchy = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let netquery = {

                };
                if (values.BuyerID == null || values.BuyerID == undefined || values.BuyerID == '') {
                    netquery.Parent_BuyerID = 'root';
                } else {
                    let BuyerData = await CommonController.Check_for_Buyer(values);
                    netquery.BuyerID = values.BuyerID;
                };
                let NetworkResult = await Buyers_Network.findOne(netquery).lean();
                let ParentData = await CommonController.Check_for_Buyer(NetworkResult);
                ParentData.No_of_Child_Network = await NetworkResult.No_of_Network;
                ParentData.Network_Level = await CommonController.Common_Finding_Network_Level(NetworkResult.Network_Number);
                let Network_Buyer_Array = [];
                await NetworkResult.Network_Information.forEach((item) => {
                    Network_Buyer_Array.push(item.BuyerID);
                });
                let query = {
                    BuyerID: {
                        $in: Network_Buyer_Array
                    },
                    Status: true
                };
                let sortOptions = {
                    No_of_Network: 1
                };
                let ChildData = await Buyers.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings').sort(sortOptions).lean().exec();
                async.eachSeries(ChildData, async (item, callback) => {
                    try {
                        let fquery = {
                            BuyerID: item.BuyerID,
                        };
                        let Child_Network_Data = await Buyers_Network.findOne(fquery).lean().exec();
                        item.No_of_Child_Network = await Child_Network_Data.No_of_Network;
                        item.Network_Level = await CommonController.Common_Finding_Network_Level(Child_Network_Data.Network_Number);
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, err => {
                    if (err) reject(err);
                    resolve({ success: true, extras: { ParentData: ParentData, ChildData: ChildData } });
                })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

// AdminController.Trimmer_Share_Information_and_Logs_By_Date = (values) => {
//     return new Promise((resolve, reject) => {
//         setImmediate(async () => {
//             try {
//                 let date = await CommonController.Common_Start_Date(values.Date);
//                 let Trimer_DateID = date.toISOString()
//                 let fndupdquery = {
//                     Date: date
//                 };
//                 let fndupdchanges = {
//                     $set: {
//                         Trimer_DateID: Trimer_DateID
//                     }
//                 };
//                 let fndupdoptions = {
//                     upsert: true,
//                     setDefaultsOnInsert: true,
//                     new: true
//                 };
//                 let Trimmer_Share_Data = await Trimer_Share.findOneAndUpdate(fndupdquery, fndupdchanges, fndupdoptions).select('-_id -__v').lean();
//                 let query = {
//                     Trimer_DateID: Trimer_DateID
//                 };
//                 let toSkip = parseInt(values.skip);
//                 let toLimit = parseInt(values.limit);
//                 let sortOptions = {
//                     Time: -1
//                 };
//                 let Count = await Trimer_Share_Logs.countDocuments(query).lean().exec();
//                 let Result = await Trimer_Share_Logs.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings').sort(sortOptions).skip(toSkip).limit(toLimit).lean().exec();
//                 resolve({ success: true, extras: { Count: Count, Trimmer_Share_Data: Trimmer_Share_Data, Data: Result } });
//             } catch (error) {
//                 reject(await CommonController.Common_Error_Handler(error));
//             }
//         });
//     });
// }

AdminController.List_All_Buyers_Share_Logs = (values) => {
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

AdminController.List_All_Buyers = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Status: true
                };
                let sortOptions = {
                    created_at: -1
                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let Count = await Buyers.countDocuments(query).lean().exec();
                let Result = await Buyers.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -SessionID').sort(sortOptions).skip(toSkip).limit(toLimit).lean().exec();
                resolve({ success: true, extras: { Count: Count, Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Company_Share_Information_and_Logs = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let fndupdquery = {

                };
                let fndupdchanges = {

                };
                let fndupdoptions = {
                    upsert: true,
                    setDefaultsOnInsert: true,
                    new: true
                }
                let Company_Share_Data = await Company_Share.findOneAndUpdate(fndupdquery, fndupdchanges, fndupdoptions).select('-_id -__v').lean();
                let query = {

                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    Time: -1
                };
                let Count = await Company_Share_Logs.countDocuments(query).lean().exec();
                let Result = await Company_Share_Logs.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings').sort(sortOptions).skip(toSkip).limit(toLimit).lean().exec();
                resolve({ success: true, extras: { Count: Count, Company_Share_Data: Company_Share_Data, Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


AdminController.List_All_Introducer_Share_Logs = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    IntroducerID: values.IntroducerID
                };
                let sortOptions = {
                    Time: -1
                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let Count = await Introducer_Share_Logs.countDocuments(query).lean().exec();
                let Result = await Introducer_Share_Logs.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings').sort(sortOptions).skip(toSkip).limit(toLimit).lean().exec();
                resolve({ success: true, extras: { Count: Count, Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_All_Introducers = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Status: true
                };
                let sortOptions = {
                    created_at: -1
                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let Count = await Introducers.countDocuments(query).lean().exec();
                let Result = await Introducers.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings').sort(sortOptions).skip(toSkip).limit(toLimit).lean().exec();
                resolve({ success: true, extras: { Count: Count, Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_All_Shop_Share_Logs = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    ShopID: values.ShopID
                };
                let sortOptions = {
                    Time: -1
                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let Count = await Shop_Share_Logs.countDocuments(query).lean().exec();
                let Result = await Shop_Share_Logs.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings').sort(sortOptions).skip(toSkip).limit(toLimit).lean().exec();
                resolve({ success: true, extras: { Count: Count, Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_All_Shop_Product_stock_Logs = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    ShopID: values.ShopID,
                    ProductID: values.ProductID,
                    Status: true
                };
                let sortOptions = {
                    created_at: -1
                }
                let Result = await Shop_Product_Stock_Logs.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings').sort(sortOptions).lean().exec();
                resolve({ success: true, extras: { Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_All_Shop_Product_Stocks = (values) => {
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
                    let ShopData = await CommonController.Check_Only_Shop(item);
                    let ProductData = await CommonController.Check_For_Product(item);
                    item.Shop_Name = ShopData.Shop_Name;
                    item.Shop_CountryCode = ShopData.Shop_CountryCode;
                    item.Shop_PhoneNumber = ShopData.Shop_PhoneNumber;
                    item.Product_Name = ProductData.Product_Name;
                    item.Product_Price = ProductData.Product_Price;
                    item.Product_Price_Divisions = ProductData.Product_Price_Divisions;
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

AdminController.Update_Shop_Product_Stock_Validate_Operation_Type = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let OperationType = parseInt(values.OperationType);
                if (OperationType == 1 || OperationType == 2) {
                    resolve("Validated Successfully");
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_OPERATION_TYPE } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Update_Shop_Product_Stock = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let queryx = {
                    ProductID: values.ProductID
                };
                let Resultx = await Products.findOne(queryx).lean().exec();
                if (Resultx.Product_Quantity >= parseInt(values.OperationInput)) {
                    if (parseInt(values.OperationInput) > 0) {
                        let query = {
                            ShopID: values.ShopID,
                            ProductID: values.ProductID
                        };
                        let changes = {
                            $set: {
                                ShopID: values.ShopID,
                                ProductID: values.ProductID,
                                Status: true
                            },
                            $inc: {
                                Shop_Available_Stock: parseInt(values.OperationInput)
                            }
                        };
                        let options = {
                            upsert: true,
                            setDefaultsOnInsert: true,
                            new: true
                        };
                        let Result = await Shop_Product_Stocks.findOneAndUpdate(query, changes, options).lean();

                        let changesx = {
                            $inc: {
                                Product_Quantity: parseInt(values.OperationInput) * -1
                            },
                            $set: {
                                Quantity_Update_by: values.AdminID,
                                Quantity_Update_at: new Date(),
                                updated_at: new Date()
                            }
                        }
                        let UpdateData = await Products.updateOne(queryx, changesx).lean().exec()
                        let Cart_Information = []
                        let ProductData = {
                            ProductID: values.ProductID,
                            Product_Name: Resultx.Product_Name,
                            Product_Price: Resultx.Product_Price,
                            Product_Price_Divisions: Resultx.Product_Price_Divisions,
                            Product_Quantity: values.OperationInput,
                            Product_Sub_Total: parseFloat(Resultx.Product_Price) * parseInt(values.OperationInput)
                        }
                        Cart_Information.push(ProductData);
                        let SData = {
                            PurchaseID: uuid.v4(),
                            PurchaseNumber: await CommonController.Common_Unique_String(),
                            ShopID: values.ShopID,
                            Cart_Information: Cart_Information,
                            Total_Amount: parseFloat(Resultx.Product_Price) * parseInt(values.OperationInput),
                            PurchaseStatus: 6, //6. Stock Purchased at Dogemo
                            PurchaseLogs: {
                                PurchaseStatus: 6,
                                Description: "Stock Purchased at Dogemo",
                                Time: new Date()
                            },
                            created_at: new Date(),
                            updated_at: new Date()
                        };
                        
                        let PurchaseData = await Shop_Purchases(SData).save();
                        resolve({ success: true, extras: { Status: "Stock Updated Successfully" } });
                        let Data = {
                            ReferenceID: uuid.v4(),
                            ShopID: values.ShopID,
                            ProductID: values.ProductID,
                            OperationType: parseInt(values.OperationType),
                            OperationInput: parseInt(values.OperationInput),
                            created_at: new Date(),
                            updated_at: new Date()
                        }
                        let LogResult = await Shop_Product_Stock_Logs(Data).save();


                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.INVALID_PRODUCT_QUANTITY } });
                    }
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_PRODUCT_QUANTITY } });
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}
AdminController.Edit_Product_Validate_Product_Shares = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Introducer_Share = parseFloat(values.Introducer_Share) || 0;
                let Buyer_Share = parseFloat(values.Buyer_Share) || 0;
                let Shop_Share = parseFloat(values.Shop_Share) || 0;
                let Company_Share = parseFloat(values.Company_Share) || 0;
                let Total_Shares = Introducer_Share + Buyer_Share + Shop_Share + Company_Share;
                if (Total_Shares == 100) {
                    resolve("Validated Successfully");
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.TOTAL_PRODUCT_SHARE_MUST_BE_HUNDRED_PERCENT } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_All_Products = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
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
                let Count = await Products.countDocuments(query).lean().exec();
                let Result = await Products.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
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
                        item.Image_Data = ImageData;
                        let ProductImageData = await CommonController.Common_Multiple_Image_Response(item.Product_Image_Data);
                        item.Product_Image_Data = ProductImageData;
                        Data.push(item);
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async (err) => {
                    if (err) reject(err);
                    resolve({ success: true, extras: { Count: Count, Data: Data } })
                });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Add_Product = (values, ImageData, Product_ImageData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let q = {
                    CategoryID: values.CategoryID
                }
                let CategoryData = await Category.findOne(q).lean().exec();
                let Buyer_Price_Array = values.Buyer_Price_Array
                let Introducer_Price = parseFloat(values.Introducer_Price) || 0;
                let Buyer_Price = Buyer_Price_Array.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
                let Shop_Price = parseFloat(values.Shop_Price) || 0;
                let Company_Price = parseFloat(values.Company_Price) || 0;
                let Product_Price = Introducer_Price + Buyer_Price + Shop_Price + Company_Price;
                let Introducer_Share = parseFloat((Introducer_Price / Product_Price) * 100).toFixed(2);
                let Buyer_Share = parseFloat((Buyer_Price / Product_Price) * 100).toFixed(2);
                let Shop_Share = parseFloat((Shop_Price / Product_Price) * 100).toFixed(2);
                let Company_Share = parseFloat((Company_Price / Product_Price) * 100).toFixed(2);
                let Total_Share = parseFloat(Company_Share) + parseFloat(Shop_Share) + parseFloat(Buyer_Share) + parseFloat(Introducer_Share);
                if (Total_Share > 100) {
                    Company_Share = parseFloat(Company_Share) - 0.01
                } else if (Total_Share < 100) {
                    Company_Share = parseFloat(Company_Share) + 0.01
                }
                let Product_Weight = 1;
                if (values.Product_Weight <= 30) {
                    Product_Weight = values.Product_Weight
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.PRODUCT_WEIGHT_LIMIT_EXCIDED_30KG } })
                }
                let Unique_ProductID = (values.Product_Name.toUpperCase() + await CommonController.Random_OTP_Number()).split(" ").join("")
                let Data = { 
                    ProductID: uuid.v4(),
                    Product_Name: values.Product_Name,
                    Unique_ProductID: Unique_ProductID,
                    Product_Description: values.Product_Description,
                    Product_Weight: Product_Weight,
                    Product_Category: CategoryData,
                    Product_Price: Product_Price,
                    Product_Price_Divisions: {
                        Introducer_Share: Introducer_Share,
                        Buyer_Share: Buyer_Share,
                        Shop_Share: Shop_Share,
                        Company_Share: Company_Share
                    },
                    Product_Price_Data: {
                        Introducer_Price: Introducer_Price,
                        Buyer_Price_Array: Buyer_Price_Array,
                        Buyer_Price: Buyer_Price,
                        Shop_Price: Shop_Price,
                        Company_Price: Company_Price
                    },
                    Image_Data: ImageData,
                    Product_Image_Data: Product_ImageData,
                    Product_GST: values.Product_GST,
                    Product_HST: values.Product_HST,
                    Product_Quantity: values.Product_Quantity,
                    Quantity_Update_by: values.AdminID,
                    Quantity_Update_at: new Date(),
                    created_at: new Date(),
                    updated_at: new Date()
                };
                let SaveResult = await Products(Data).save();
                resolve({ success: true, extras: { Status: "Product Added Successfully" } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Image_Data_From_ImageID_Array_Plot = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Data = [];
                if (values.All_ImageID_Array.length > 0) {
                    async.eachSeries(values.All_ImageID_Array, async (Image, callback) => {
                        try {
                            let query = {
                                ImageID: Image
                            };
                            let Result = await Images.findOne(query).lean();

                            if (Result == null) {
                                callback({ success: false, extras: { msg: ApiMessages.INVALID_IMAGE } })
                            } else {
                                Result.SNo = Image.SNo;
                                Data.push(Result);
                                callback();
                            };
                        } catch (error) {
                            callback(error);
                        }
                    }, async (err) => {
                        if (err) reject(err);
                        resolve(Data);
                    });
                } else {
                    resolve(Data);
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Image_Data_From_ImageID_Array = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                // console.log("6209--->"+JSON.stringify(values));
                let Data = [];
                if (values.All_ImageID_Array.length > 0) {
                    // console.log("6206--->"+JSON.stringify(values.All_ImageID_Array.length));
                   await async.eachSeries(values.All_ImageID_Array, async (Image, callback) => {
                        try {
                            let query = {
                                ImageID: Image.ImageID
                            };
                            let Result = await Images.findOne(query).lean();
                            // console.log("6213--->"+JSON.stringify(Result));

                            if (Result == null) {
                                // console.log("6215--->"+JSON.stringify(Result));
                   
                                callback({ success: false, extras: { msg: ApiMessages.INVALID_IMAGE } })
                            } else {
                                Result.SNo = Image.SNo;
                                Data.push(Result);
                                // console.log("6221--->"+JSON.stringify(Result));
                                callback();
                            };
                        } catch (error) {
                            // console.log("6226--->"+JSON.stringify(error));
                            callback(error);
                        }
                    }, async (err) => {
                        if (err) reject(err);
                        // console.log("6230--->"+JSON.stringify(Data));
                        resolve(Data);
                    });
                } else {
                    resolve(Data);
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Add_Product_Validate_Product_Shares = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                console.log("6252--->"+JSON.stringify(values));
                let Introducer_Share = parseFloat(values.Introducer_Share) || 0;
                let Buyer_Share = parseFloat(values.Buyer_Share) || 0;
                let Shop_Share = parseFloat(values.Shop_Share) || 0;
                let Company_Share = parseFloat(values.Company_Share) || 0;
                let Total_Shares = Introducer_Share + Buyer_Share + Shop_Share + Company_Share;
                if (Total_Shares == 100) {
                    resolve("Validated Successfully");
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.TOTAL_PRODUCT_SHARE_MUST_BE_HUNDRED_PERCENT } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_Only_Shops = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Status: true
                };
                let sortOptions = {
                    Shop_Name: 1
                };
                let Result = await Shops.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings').sort(sortOptions).lean().exec();
                resolve({ success: true, extras: { Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_All_Shops = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Status: true
                };
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    Shop_Name: 1
                };
                if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                    sortOptions = values.sortOptions;
                };
                let Count = await Shops.countDocuments(query).lean().exec();
                let Result = await Shops.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                async.eachSeries(Result, async (item, callback) => {
                    let IntroducerData = await CommonController.Check_For_Introducer(item);
                    item.Introducer_Name = IntroducerData.Introducer_Name;
                    item.Introducer_CountryCode = IntroducerData.Introducer_CountryCode;
                    item.Introducer_PhoneNumber = IntroducerData.Introducer_PhoneNumber;
                    item.Introducer_Password = IntroducerData.Introducer_Password;
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

AdminController.Create_Shop = (values, IntroducerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Data = {
                    ShopID: uuid.v4(),
                    IntroducerID: IntroducerData.IntroducerID,
                    Shop_Name: values.Shop_Name,
                    Shop_CountryCode: values.Shop_CountryCode,
                    Shop_PhoneNumber: values.Shop_PhoneNumber,
                    Shop_Password: await CommonController.Random_OTP_Number(),
                    Address: values.Address,
                    GST_Number: values.GST_Number,
                    Latitude: parseFloat(values.Latitude),
                    Longitude: parseFloat(values.Longitude),
                    Point: [parseFloat(values.Longitude), parseFloat(values.Latitude)],
                    created_at: new Date(),
                    updated_at: new Date()
                };
                let SaveResult = await Shops(Data).save();
                resolve({ success: true, extras: { Status: "Shop Created Successfully" } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


AdminController.Find_or_Create_Introducer_Information = (values, ImageData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Introducer_CountryCode: values.Introducer_CountryCode,
                    Introducer_PhoneNumber: values.Introducer_PhoneNumber
                };
                let Result = await Introducers.findOne(query).lean();
                if (Result == null) {
                    let Data = {
                        IntroducerID: uuid.v4(),
                        Introducer_Name: values.Introducer_Name,
                        Introducer_CountryCode: values.Introducer_CountryCode,
                        Introducer_PhoneNumber: values.Introducer_PhoneNumber,
                        Introducer_PAN: values.Introducer_PAN,
                        Introducer_PAN_ImageData: ImageData,
                        Introducer_Password: await CommonController.Random_OTP_Number(),
                        created_at: new Date(),
                        updated_at: new Date()
                    }
                    let SaveResult = await Introducers(Data).save();

                    let Bquery = {
                        Buyer_CountryCode: values.Introducer_CountryCode,
                        Buyer_PhoneNumber: values.Introducer_PhoneNumber
                    };
                    let Resultx = await Buyers.findOne(query).lean();
                    if (Resultx == null) {
                        let Data = {
                            BuyerID: uuid.v4(),
                            SessionID: session,
                            DeviceID: deviceID,
                            Buyer_Name: values.Introducer_Name,
                            Buyer_CountryCode: values.Introducer_CountryCode,
                            Buyer_PhoneNumber: values.Introducer_PhoneNumber,
                            created_at: new Date(),
                            updated_at: new Date()
                        }
                        let SaveResultx = await Buyers(Data).save();
                        let Resultxx = await Buyers.findOne(query).lean();
                        let RazorpayXContactStoring = await ShopController.Add_Update_RazorpayX_Buyer_Contact(Resultxx);
                    }
                    resolve(JSON.parse(JSON.stringify(SaveResult)));
                } else {
                    resolve(Result);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Create_Shop_Validate_Shop_Already_Exist_With_Phone_Number = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Shop_CountryCode: values.Shop_CountryCode,
                    Shop_PhoneNumber: values.Shop_PhoneNumber
                };
                let Result = await Shops.findOne(query).lean();
                if (Result == null) {
                    resolve("Validated Successfully");
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.SHOP_ALREADY_REGISTERED } })
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Login = (values, AdminData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Password = String(values.Password);
                let PasswordSalt = AdminData.PasswordSalt;
                let pass = Password + PasswordSalt;
                let PasswordHash = crypto.createHash('sha512').update(pass).digest("hex");
                if (AdminData.PasswordHash == PasswordHash) {
                    let fndupdquery = {
                        AdminID: AdminData.AdminID
                    };
                    let fndupdchanges = {
                        $set: {
                            SessionID: uuid.v4(),
                            updated_at: new Date()
                        }
                    };
                    let fndupdoptions = {
                        upsert: true,
                        setDefaultsOnInsert: true,
                        new: true
                    }
                    let findupdateData = await Admins.findOneAndUpdate(fndupdquery, fndupdchanges, fndupdoptions).lean();
                    resolve({ success: true, extras: { Status: "Login Successfully", AdminData: findupdateData } })
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_PASSWORD } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.List_All_Admin_User = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
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
                let Count = await Admins.countDocuments(query).lean().exec();
                let Result = await Admins.find(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                resolve({ success: true, extras: { Count: Count, Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Create_Admin_User = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Password = String(values.Password);
                let PasswordSalt = await CommonController.Random_OTP_Number();
                let pass = Password + PasswordSalt;
                let Data = {
                    AdminID: uuid.v4(),
                    Name: values.Name,
                    EmailID: values.EmailID,
                    PasswordHash: crypto.createHash('sha512').update(pass).digest("hex"),
                    PasswordSalt: PasswordSalt,
                    Admin_Section_Permision: Boolify(values.Admin_Section_Permision),
                    created_at: new Date(),
                    updated_at: new Date()
                };
                let SaveResult = await Admins(Data).save();
                resolve({ success: true, extras: { Status: "Admin Created Successfully" } })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Check_Whether_Admin_Email_Registered = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    EmailID: values.EmailID
                };
                let Result = await Admins.findOne(query).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.EMAIL_NOT_REGISTERED } })
                } else {
                    resolve(Result);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Check_Whether_Admin_Email_Already_Exist = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    EmailID: values.EmailID,
                    Status: true
                };
                let Result = await Admins.findOne(query).lean();
                if (Result == null) {
                    resolve("Validated Successfully");
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.EMAIL_ALREADY_REGISTERED } })
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}
AdminController.List_States = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    created_at: -1
                };
                // if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                //     sortOptions = values.sortOptions;
                // };

                let Status = true
                if (values.Status == 1) {
                    Status = true
                } else if (values.Status == 2) {
                    Status = false
                }
                let query = {
                    Status: Status
                };


                let Count = await States.countDocuments(query).lean().exec();
                let Result = await States.find(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();

                resolve({ success: true, extras: { Count: Count, Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Edit_State = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    StateID: values.StateID
                };
                let Result = await States.findOne(query).lean();
                if (Result != null) {
                    let changes = {
                        $set: {
                            SNo: values.SNo,
                            State_Name: values.State_Name,
                            updated_at: new Date(),
                        }
                    };
                    let Update = await States.updateOne(query, changes).lean();
                    resolve({ success: true, extras: { Status: "State Updated Successfully" } })
                } else {
                    reject({ success: false, extras: { msg: "State Not Available" } })
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Add_State = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                // console.log(values)

                let Data = {
                    StateID: uuid.v4(),
                    SNo: values.SNo,
                    State_Name: values.State_Name,
                    Up_Time: new Date(),
                    created_at: new Date(),
                    updated_at: new Date()
                }
                let Result = await States(Data).save();
                resolve({ success: true, extras: { Status: "State Created Successfully" } });

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Activate_Inactivate_State = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    StateID: values.StateID
                };
                let Result = await States.findOne(query).lean();
                if (Result != null) {
                    let changes;
                    if (Result.Status == true) {
                        changes = {
                            $set: {
                                Status: false,
                                updated_at: new Date()
                            }
                        }
                    } else {
                        changes = {
                            $set: {
                                Status: true,
                                updated_at: new Date()
                            }
                        }
                    }
                    let update_States_Link = await States.updateOne(query, changes).lean();
                    resolve({ success: true, extras: { Status: "State Updated Successfully" } })
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_STATE } })
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Check_For_State_SNo_Available = (values) => {
    return new Promise(async (resolve, reject) => {
        try {
            let SNo = parseInt(values.SNo);
            if (values.StateID === null || values.StateID === undefined || values.StateID === "") {
                values.StateID = "";
            };
            let query = {
                StateID: {
                    $ne: values.StateID
                },
                SNo: SNo
            };
            let Result = await States.findOne(query).lean().exec();
            if (Result === null) {
                resolve('SNo Available');
            } else {
                reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST } })
                // msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST
            }
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}

AdminController.List_Districts = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    created_at: -1
                };
                // if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                //     sortOptions = values.sortOptions;
                // };

                let Status = true
                if (values.Status == 1) {
                    Status = true
                } else if (values.Status == 2) {
                    Status = false
                }
                let query = {
                    Status: Status,
                };

                if (Boolify(values.Whether_State_Filter)) {
                    query.StateID = values.StateID
                }


                let Count = await Districts.countDocuments(query).lean().exec();
                let Result = await Districts.find(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                for (let item of Result) {

                    if (item.StateID != null && item.StateID != "") {
                      item.StateData = await CommonController.Check_for_State(item);
                    }
                }
                resolve({ success: true, extras: { Count: Count, Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Edit_District = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    DistrictID: values.DistrictID
                };
                let Result = await Districts.findOne(query).lean();
                if (Result != null) {
                    let changes = {
                        $set: {
                            SNo: values.SNo,
                            StateID:values.StateID,
                            District_Name: values.District_Name,
                            updated_at: new Date(),
                        }
                    };
                    let Update = await Districts.updateOne(query, changes).lean();
                    resolve({ success: true, extras: { Status: "District Updated Successfully" } })
                } else {
                    reject({ success: false, extras: { msg: "District Not Available" } })
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Add_District = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                // console.log(values)

                let Data = {
                    DistrictID: uuid.v4(),
                    SNo: values.SNo,
                    StateID:values.StateID,
                    District_Name: values.District_Name,
                    Up_Time:new Date(),
                    created_at: new Date(),
                    updated_at: new Date()
                }
                let Result = await Districts(Data).save();
                resolve({ success: true, extras: { Status: "District Created Successfully" } });

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Activate_Inactivate_District = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    DistrictID: values.DistrictID
                };
                let Result = await Districts.findOne(query).lean();
                if (Result != null) {
                    let changes;
                    if (Result.Status == true) {
                        changes = {
                            $set: {
                                Status: false,
                                updated_at: new Date()
                            }
                        }
                    } else {
                        changes = {
                            $set: {
                                Status: true,
                                updated_at: new Date()
                            }
                        }
                    }
                    let update_Districts_Link = await Districts.updateOne(query, changes).lean();
                    resolve({ success: true, extras: { Status: "District Updated Successfully" } })
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_DISTRICT } })
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Check_For_District_SNo_Available = (values) => {
    return new Promise(async (resolve, reject) => {
        try {
            let SNo = parseInt(values.SNo);
            if (values.DistrictID === null || values.DistrictID === undefined || values.DistrictID === "") {
                values.DistrictID = "";
            };
            let query = {
                DistrictID: {
                    $ne: values.DistrictID
                },
                SNo: SNo
            };
            let Result = await Districts.findOne(query).lean().exec();
            if (Result === null) {
                resolve('SNo Available');
            } else {
                reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST } })
                // msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST
            }
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}


AdminController.List_Pincodes = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let toSkip = parseInt(values.skip);
                let toLimit = parseInt(values.limit);
                let sortOptions = {
                    created_at: -1
                };
                // if (values.sortOptions != null && Object.keys(values.sortOptions).length > 0) {
                //     sortOptions = values.sortOptions;
                // };

                let Status = true
                if (values.Status == 1) {
                    Status = true
                } else if (values.Status == 2) {
                    Status = false
                }
                let query = {
                    Status: Status,
                };

                if (Boolify(values.Whether_Pincode_Status_Filter)) {
                    query.Pincode_Status = values.Pincode_Status
                }

                if (Boolify(values.Whether_District_Filter)) {
                    query.DistrictID = values.DistrictID
                }




                let Count = await Pincodes.countDocuments(query).lean().exec();
                let Result = await Pincodes.find(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID').sort(sortOptions).lean().skip(toSkip).limit(toLimit).exec();
                for (let item of Result) {

                    if (item.DistrictID != null && item.DistrictID != "") {
                      item.DistrictData = await CommonController.Check_for_District(item);
                    }
                }
                resolve({ success: true, extras: { Count: Count, Data: Result } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Edit_Pincode = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    PincodeID: values.PincodeID
                };
                let Result = await Pincodes.findOne(query).lean();
                if (Result != null) {
                    let changes = {
                        $set: {
                            SNo: values.SNo,
                            StateID:values.StateID,
                            DistrictID:values.DistrictID,
                            Pincode: values.Pincode,
                            updated_at: new Date(),
                        }
                    };
                    let Update = await Pincodes.updateOne(query, changes).lean();
                    resolve({ success: true, extras: { Status: "Pincode Updated Successfully" } })
                } else {
                    reject({ success: false, extras: { msg: "Pincode Not Available" } })
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Add_Pincode = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                // console.log(values)

                let Data = {
                    PincodeID: uuid.v4(),
                    SNo: values.SNo,
                    StateID:values.StateID,
                    DistrictID:values.DistrictID,
                    Pincode: values.Pincode,
                    Up_Time:new Date(),
                    created_at: new Date(),
                    updated_at: new Date()
                }
                let Result = await Pincodes(Data).save();
                resolve({ success: true, extras: { Status: "Pincode Created Successfully" } });

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Activate_Inactivate_Pincode = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    PincodeID: values.PincodeID
                };
                let Result = await Pincodes.findOne(query).lean();
                if (Result != null) {
                    let changes;
                    if (Result.Status == true) {
                        changes = {
                            $set: {
                                Status: false,
                                updated_at: new Date()
                            }
                        }
                    } else {
                        changes = {
                            $set: {
                                Status: true,
                                updated_at: new Date()
                            }
                        }
                    }
                    let update_Pincode = await Pincodes.updateOne(query, changes).lean();
                    resolve({ success: true, extras: { Status: "Pincode Updated Successfully" } })
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_PINCODE } })
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

AdminController.Check_For_Pincode_SNo_Available = (values) => {
    return new Promise(async (resolve, reject) => {
        try {
            let SNo = parseInt(values.SNo);
            if (values.PincodeID === null || values.PincodeID === undefined || values.PincodeID === "") {
                values.PincodeID = "";
            };
            let query = {
                PincodeID: {
                    $ne: values.PincodeID
                },
                SNo: SNo
            };
            let Result = await Pincodes.findOne(query).lean().exec();
            if (Result === null) {
                resolve('SNo Available');
            } else {
                reject({ success: false, extras: { msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST } })
                // msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST
            }
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}
AdminController.Check_For_Pincode = (values) => {
    return new Promise(async (resolve, reject) => {
        console.log("Values=======================>",values)
        try {
            let Pincode = parseInt(values.Pincode);
            if (values.PincodeID === null || values.PincodeID === undefined || values.PincodeID === "") {
                values.PincodeID = "";
            };
            let query = {
                PincodeID: {
                    $ne: values.PincodeID
                },
                Pincode: Pincode
            };
            console.log("Query=========================>",query)
            let Result = await Pincodes.findOne(query).lean().exec();
            console.log("Result========================>",Result)
            if (Result === null) {
                resolve('Pincode Available');
            } else {
                console.log("Reentered============================>")
                reject({ success: false, extras: { msg: ApiMessages.INVALID_PINCODENUMBER } })
                // msg: ApiMessages.SERIAL_NUMBER_ALREADY_EXIST
            }
        } catch (error) {
            console.log("Error==================>",error)
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}


export default AdminController;