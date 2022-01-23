let CommonController = function () { };
//Dependencies
import uuid from "uuid";
import moment from "moment";
import axios from "axios";
import async from "async";
import mongoose from "mongoose";
import ifsc from "ifsc";

//Models or Common files
import ApiMessages from "../config/ApiMessages";
import config from "../config/config";
import Images from "../models/Images";
import Counters from "../models/Counters";
import validator from 'validator';
import App_Versions_Settings from "../models/App_Versions_Settings";
import App_SMS_Providers from "../models/App_SMS_Providers";
import Devices from "../models/Devices";
import Introducers from "../models/Introducers";
import Shops from "../models/Shops";
import Products from "../models/Products";
import Buyers from "../models/Buyers";
import Admins from "../models/Admins";
import Buyer_Offer_Message from "../models/Buyer_Offer_Message";
import Offer_Messages from "../models/Offer_Messages";
import Shop_Purchases from "../models/Shop_Purchases";
import Buyer_Bank_Beneficiary_Accounts from "../models/Buyer_Bank_Beneficiary_Accounts";
import App_Buyer_Settings from "../models/App_Buyer_Settings";
import Axios from "axios";
import { Boolify } from "node-boolify";
import Bonanza_Log from "../models/Bonanza_Log";
import News from "../models/News";
import Coupons_Category from "../models/Coupons_Category";
import Users_Shops from "../models/Users_Shops";
import Buyer_Shop_requests_Notification from "../models/Buyer_Shop_requests_Notification";
import Coupon_Products from "../models/Coupon_Products";
import Gift_Meter from "../models/Gift_Meter";
import Box_Amount_Share from "../models/Box_Amount_Share";
import Buyers_Ultimate_Network from "../models/Buyers_Ultimate_Network";
import Buyer_Purchase_Wallet_Logs from "../models/Buyer_Purchase_Wallet_Logs";
import Buyer_Expired_Amount_Wallet_Logs from "../models/Buyer_Expired_Amount_Wallet_Logs";

import Pincodes from "../models/Pincode"
import Cart from "../models/Cart"
import User_Address from "../models/User_Address"

import State from "../models/State"
import District from "../models/District"
import Orders from "../models/Orders"

import Order_Otp from "../models/Order_Otp"
import Buyer_Wallet_Logs from "../models/Buyer_Wallet_Logs"
import User_Transfer_Money_Requests from "../models/User_Transfer_Money_Requests"

CommonController.Check_for_Box_Product = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Status: true
                };
                let Result = await Box_Amount_Share.findOne(query).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.BOX_PRODUCT_NOT_FOUND } })
                } else {
                    resolve(Result);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Check_Only_User = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: values.BuyerID
                };

                // let Result = await Buyers.findOne(query).select('-_id USERID  Whether_Company_Account User_Basic_Information_Available User_Amounts User_Account_Status User_Account_Registered_Date').lean();

                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_USER } })
                } else {
                    resolve(Result);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Check_For_Gift_Meter = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Gift_MeterID: values.Gift_MeterID,
                    // Status: true
                };
                let Result = await Gift_Meter.findOne(query).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_GIFT_METER } })
                } else {
                    resolve(Result);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Check_for_Coupons_Product = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let query = {
                    Coupons_ProductID: values.Coupons_ProductID,
                    Status: true
                }


                let Result = await Coupon_Products.findOne(query).lean();

                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_C_PRODUCT } })
                } else {
                    resolve(Result);
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Check_for_Coupons_Product_box = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let query = {
                    Box_Amount_ShareID: values.Coupons_ProductID,
                    Status: true
                }


                let Result = await Box_Amount_Share.findOne(query).lean();

                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_C_PRODUCT } })
                } else {
                    resolve(Result);
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}
CommonController.Buyer_Shop_Request_Data = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Buyer_Shop_request_ID: values.Buyer_Shop_request_ID,
                    // Payment_Status:3,
                    // User_Shop_Status:1
                };
                let Result = await Buyer_Shop_requests_Notification.findOne(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -Users_Shop_Password').lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.NO_REQUEST_FOUND } })
                } else {
                    resolve(Result);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
};

CommonController.Check_For_User_Shop_Data = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: values.BuyerID,
                    Payment_Status: 3,
                    User_Shop_Status: [1, 3]
                };
                let Result = await Users_Shops.findOne(query).lean();
                if (Result == null) {
                    resolve(Result);
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.USER_ALREADY_HAS_SHOP } })
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
};

CommonController.Check_For_User_Shop = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Users_ShopsID: values.Users_ShopsID,
                    // Payment_Status:3,
                    // User_Shop_Status:1
                };

                let Result = await Users_Shops.findOne(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -Amount_Paid -Users_Shop_Password').lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.NO_USER_SHOP_FOUND } })
                } else {
                    resolve(Result);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
};

CommonController.Check_For_User_Shop_new_la = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Users_ShopsID: values.Users_ShopsID,
                    // Payment_Status:3,
                    // User_Shop_Status:1
                };

                let Result = await Users_Shops.findOne(query).select('Users_Shop_CountryCode Users_Shop_PhoneNumber Users_Shop_Name User_Shop_Number').lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.NO_USER_SHOP_FOUND } })
                } else {
                    resolve(Result);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
};

CommonController.Check_For_User_Shop_BuyerID = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: values.BuyerID,
                    Payment_Status: 3,
                    User_Shop_Status: [1, 3]
                };
                let Result = await Users_Shops.findOne(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -Amount_Paid -Users_Shop_Password').lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.NO_USER_SHOP_FOUND } })
                } else {
                    resolve(Result);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
};

CommonController.Check_for_Coupons_Category_only = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Coupons_CategoryID: values.Coupons_CategoryID,
                    Status: true
                };
                let Result = await Coupons_Category.findOne(query).lean();
                if (Result == null) {
                    Result = {}
                    resolve(Result);
                } else {
                    resolve(Result);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Check_for_Coupons_Category_Data = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Coupons_CategoryID: values.Coupons_CategoryID,
                    Status: true
                };
                let Result = await Coupons_Category.findOne(query).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_COUPON_CATAGORY } })
                } else {
                    resolve(Result);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}
CommonController.Check_for_PinCode_Data = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                let currentDate = new Date()
                let Currenttime = currentDate.getTime()
                let MinusHours = 60 * 60 * 2000
                let existedDate = new Date(Currenttime - MinusHours)

                console.log("ExistedDate==================>", existedDate)

                let query = {
                    PincodeID: values.PincodeID,
                    Status: true,
                    $or: [{
                        Pincode_Status: 0,

                    },
                    {
                        Pincode_Status: 1,
                        Up_Time: {
                            $lte: existedDate
                        }
                    }
                    ]
                };
                console.log("347--->" + JSON.stringify(query))

                let Result = await Pincodes.findOne(query).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.PINCODE_REJECTED } })
                } else {
                    resolve(Result);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Common_File_Response_Single_File = (Available, Data) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                if (Available) {
                    Data.File_Path = config.S3URL + Data.File_Path;
                    resolve(Data);
                } else {
                    resolve(new Object());
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Check_for_News = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    NewsID: values.NewsID
                };
                let Result = await News.findOne(query).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_NEWS } })
                } else {
                    resolve(Result);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Check_for_Bonanza = (values) => {
    return new Promise(async (resolve, reject) => {
        try {
            let fndupdquery = {
                BonanzaID: values.BonanzaID
            };
            let Result = await Bonanza_Log.findOne(fndupdquery).lean().exec();
            if (Result == null) {
                reject({ success: false, extras: { msg: ApiMessages.INVALID_BONANZA } })
            } else {
                if (Boolify(Result.Status)) {
                    resolve(Result);
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.BONANZA_DELETED } })
                }
            }
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}

CommonController.Calculate_Delivery_Price_From_WareHouse = (Total_Weight, AddressData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
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

                let request_options_Pickup = {
                    method: 'GET',
                    baseURL: config.shiprocket.baseurl,
                    url: `/settings/company/pickup/`,
                    headers: { 'Authorization': 'Bearer ' + Response_login.data.token },
                    // params: CalculateData
                };
                let Response_Pickup = await Axios(request_options_Pickup);
                let Pickup_Address = new Object();
                if (Response_Pickup.data.data.shipping_address.length > 0) {
                    Pickup_Address = Response_Pickup.data.data.shipping_address[0]
                }
                // let queryShipping = {
                //     AddressID: Pickup_AddressID
                // }
                // let Pickup_Address = await Manufacturer_Address_Log.findOne(queryShipping).lean().exec();
                let CalculateData = {
                    "pickup_postcode": Pickup_Address.pin_code,
                    "delivery_postcode": AddressData.Postal_Code,
                    "cod": 0,
                    "weight": Total_Weight
                }
                let request_options_Calculation = {
                    method: 'GET',
                    baseURL: config.shiprocket.baseurl,
                    url: `/courier/serviceability/`,
                    headers: { 'Authorization': 'Bearer ' + Response_login.data.token },
                    params: CalculateData
                };
                let Response_Calculation = await Axios(request_options_Calculation);
                let Data = Response_Calculation.data.data.available_courier_companies

                const cheap = Data.reduce(
                    (acc, loc) =>
                        acc.rate < loc.rate
                            ? acc
                            : loc
                )
                // 
                // 

                let Final_Data = [cheap.rate, cheap.courier_company_id, cheap.etd_hours, cheap.etd]
                resolve(Final_Data)

            } catch (error) {

                reject(await CommonController.Common_Error_Handler1(error.response.data));
            }
        });
    });
}

CommonController.Common_Floating_Beautify_Value = (Num) => {
    return new Promise(async (resolve, reject) => {
        try {
            Num = (Math.round(Num * 100) / 100);
            resolve(Num);
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}

CommonController.Fetch_App_Buyer_Settings = () => {
    return new Promise(async (resolve, reject) => {
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
            let Result = await App_Buyer_Settings.findOneAndUpdate(fndupdquery, fndupdchanges, fndupdoptions).select('-_id -__v').lean();
            resolve(Result);
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}

CommonController.Check_for_Buyer_Bank_Beneficiary_Account = (values) => {
    return new Promise(async (resolve, reject) => {
        try {
            let query = {
                BeneficiaryID: values.BeneficiaryID
            };
            let Result = await Buyer_Bank_Beneficiary_Accounts.findOne(query).select('-_id -__v').lean();
            if (Result === null) {
                reject({ success: false, extras: { msg: ApiMessages.INVALID_BENEFICIARY_ACCOUNT } })
            } else {
                resolve(Result);
            };
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}

CommonController.Check_for_Buyer_Bank_Beneficiary_Account = (values) => {
    return new Promise(async (resolve, reject) => {
        try {
            let query = {
                BeneficiaryID: values.BeneficiaryID
            };
            let Result = await Buyer_Bank_Beneficiary_Accounts.findOne(query).select('-_id -__v').lean();
            if (Result === null) {
                reject({ success: false, extras: { msg: ApiMessages.INVALID_BENEFICIARY_ACCOUNT } })
            } else {
                resolve(Result);
            };
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}

CommonController.Validate_IFSC_Code = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                if (ifsc.validate(values.IFSC)) {
                    let Data = await ifsc.fetchDetails(values.IFSC);
                    resolve(Data);
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_IFSC_CODE } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Common_Start_Date_End_Date_Validation = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Start_Date = moment(values.Start_Date)//, config.Take_Date_Format).subtract(330, 'minutes');
                let End_Date = moment(values.End_Date)//, config.Take_Date_Format).subtract(330, 'minutes').add(1, 'day').subtract(1, 'ms');
                if (Start_Date.isValid() && End_Date.isValid()) {
                    if (Start_Date.isBefore(End_Date)) {
                        resolve("Validated Successfully")
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.START_DATE_MUST_BE_LESS_THAN_END_DATE } })
                    }
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_DATE } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Drop_All_Collections_Database = async (req, res) => {
    try {
        let All_Collections = await mongoose.connections[0].collections;
        let Collection_Names = [];
        async.eachSeries(Object.keys(All_Collections), async (item, callback) => {
            try {
                if (item != 'Admins') {
                    Collection_Names.push(item);
                    await mongoose.connection.db.dropCollection(item);
                    callback();
                } else {
                    callback();
                }
            } catch (error) {
                callback();
            }
        }, async (err) => {
            res.json({ success: true, extras: { Status: "All Collections Dropped Successfully", Data: Collection_Names } });
        });
    } catch (error) {
        if (!res.headersSent) {
            res.json(error);
        }
    }
}

CommonController.Check_for_Shop_Purchase = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    PurchaseID: values.PurchaseID
                };
                let Result = await Shop_Purchases.findOne(query).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_PURCHASE_ID } })
                } else {
                    resolve(Result);
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}
CommonController.Check_for_Offer_Message = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    MessageID: values.MessageID
                };
                let Result = await Offer_Messages.findOne(query).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_OFFER_MESSAGE } })
                } else {
                    resolve(Result);
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Check_for_Buyer_Offer_Code = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    OfferCode: values.OfferCode
                };
                let Result = await Buyer_Offer_Message.findOne(query).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_OFFER_CODE } })
                } else {
                    resolve(Result);
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Common_Unique_Six_Digit_String = () => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let alphabank = "ABCDEFGHIJKLMNPQRSTUVWXYZ";
                let charBank = "0123456789ABCDEFGHIJKLMNPQRSTUVWXYZ9876543210";
                charBank = charBank.toUpperCase();
                let fstring = alphabank[parseInt(Math.random() * alphabank.length)];
                for (let i = 0; i < 5; i++) {
                    fstring += charBank[parseInt(Math.random() * charBank.length)];
                }
                resolve(fstring);
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}
CommonController.Common_Unique_String = () => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let date = new Date().getTime();
                let charBank = "abcdefghijklmnpqrstuvwxyz";
                charBank = charBank.toUpperCase();
                let fstring = '';
                for (let i = 0; i < 5; i++) {
                    fstring += charBank[parseInt(Math.random() * charBank.length)];
                }
                resolve(fstring += date);
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Common_Finding_Network_Level = (Network_Number) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let level = 0;
                let heirarhy_sum = 0;
                for (let x = 0; x < 1 / 0; x++) {
                    level++;
                    heirarhy_sum += Math.pow(10, x);
                    if (Network_Number <= heirarhy_sum) {
                        break;
                    }
                }
                resolve(level);
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Check_for_Buyer = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: values.BuyerID
                };

                let Result = await Buyers.findOne(query).select('-_id -__v -updated_at -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -RazorpayX_ContactID -Cart_Information').lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_BUYER } })
                } else {
                    resolve(Result);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


CommonController.Check_for_Buyer_new_last = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: values.BuyerID
                };

                let Result = await Buyers.findOne(query).select('Buyer_Name Buyer_PhoneNumber').lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_BUYER } })
                } else {
                    resolve(Result);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}
CommonController.Common_Last_Day_Start_Date = (qDate) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                if (qDate == null || qDate == undefined) {
                    var date = moment().startOf('day').subtract(330, 'minutes').subtract(1, 'day').add(1, 'ms').toDate();
                } else {
                    var date = moment(qDate, config.Take_Date_Format).subtract(330, 'minutes').subtract(1, 'day').add(1, 'ms').toDate();
                }
                resolve(date);
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Common_Start_Date = (qDate) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                if (qDate == null || qDate == undefined) {
                    var date = moment().startOf('day').subtract(330, 'minutes').add(1, 'ms').toDate();
                } else {
                    var date = moment(qDate, config.Take_Date_Format).subtract(330, 'minutes').add(1, 'ms').toDate();
                }
                resolve(date);
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Check_For_Product = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    ProductID: values.ProductID
                };
                let Result = await Products.findOne(query).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_PRODUCT } })
                } else {
                    resolve(Result);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
};

CommonController.Check_For_Buyer_Already_reg = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                console.log("744---> checking for buyer already registered")
                let query = {
                    BuyerID: values.BuyerID,
                    Buyer_alread_reg: false

                };
                let Result = await Buyers.findOne(query).lean();
                if (Result == null) {
                    console.log("751---> checking for buyer failed")
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_BUYER } })
                } else {
                    console.log("753---> checking for buyer clread for next Step")
                    let queryxc = {
                        BuyerID: values.BuyerID
                    }

                    let PW_Changesxc = {
                        $set: {
                            Buyer_alread_reg: true
                        }
                    }

                    let UpdateData = await Buyers.updateOne(queryxc, PW_Changesxc).lean().exec()

                    resolve(Result);

                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Check_For_Buyer_Session = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: values.BuyerID

                };
                let Result = await Buyers.findOne(query).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_BUYER } })
                } else {
                    if (Result.SessionID == values.SessionID || config.SECRET_SESSIONID == values.SessionID) {


                        resolve(Result);
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.SESSION_EXPIRED } });
                    }
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Check_For_Shop = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    ShopID: values.ShopID
                };
                let Result = await Shops.findOne(query).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_SHOP } })
                } else {
                    if (Result.SessionID == values.SessionID) {
                        Result.Available_Amount = Result.Available_Amount.toFixed(2);
                        Result.Withdrawn_Amount = Result.Withdrawn_Amount.toFixed(2);
                        Result.Total_Amount = Result.Total_Amount.toFixed(2);
                        resolve(Result);
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.SESSION_EXPIRED } });
                    }
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Check_Only_Shop = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    ShopID: values.ShopID
                };
                let Result = await Shops.findOne(query).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_SHOP } })
                } else {
                    resolve(Result);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Check_For_Introducer = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    IntroducerID: values.IntroducerID
                };
                let Result = await Introducers.findOne(query).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_INTRODUCER } })
                } else {
                    resolve(Result);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Random_OTP_Number = () => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let charBank = "123456789";
                let str = '';
                for (let i = 0; i < 6; i++) {
                    str += charBank[parseInt(Math.random() * charBank.length)];
                };
                resolve(str);
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Random_12_Digit_Number = () => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let charBank = "123456789";
                let str = '';
                for (let i = 0; i < 12; i++) {
                    str += charBank[parseInt(Math.random() * charBank.length)];
                };
                resolve(str);
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Check_for_Api_Key = (values) => {
    console.log(values)
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    ApiKey: values.ApiKey
                };
                let Result = await Devices.findOne(query).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_API_KEY } })
                } else {
                    if (
                        Result.ApiKey === values.ApiKey ||
                        config.SECRET_API_KEY === values.ApiKey
                    ) {

                        resolve(Result);
                    }

                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


CommonController.Check_Phone_Number = (values) => {
    console.log(values)
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                    let query = {
                        Buyer_PhoneNumber: values.PhoneNumber
                    };
                    let Result = await Buyers.findOne(query).lean();
                    if (Result == null) {
                        reject({ success: false, extras: { msg: ApiMessages.INVALID_PHONE_NUMBER } })
                } else {
                        resolve(Result);
                    }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Common_Find_Default_SMS_Provider = () => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Selected_Provider: true,
                    Status: true
                };
                let Result = await App_SMS_Providers.findOne(query).lean();
                resolve(Result);
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Common_Register_or_Get_App_versions = () => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Result = await App_Versions_Settings.findOne().lean();
                if (Result == null) {
                    let VersionData = await App_Versions_Settings().save();
                    resolve(JSON.parse(JSON.stringify(VersionData)));
                } else {
                    resolve(Result);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Common_IP_Address = (req) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let IPAddress = req.headers["x-forwarded-for"];
                if (IPAddress) {
                    let list = IPAddress.split(",");
                    IPAddress = list[list.length - 1];
                } else {
                    IPAddress = req.connection.remoteAddress;
                }
                IPAddress = (IPAddress == '::1') ? '0:0:0:0' : IPAddress;
                resolve(IPAddress);
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


CommonController.Common_Email_Validation = EmailID => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                if (EmailID == "") {
                    resolve("Validated Successfully");
                } else {
                    if (validator.isEmail(EmailID)) {
                        resolve("Validated Successfully");
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.INVALID_EMAIL_FORMAT } });
                    }
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


CommonController.Generate_Counter_Sequence = (CounterID) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    _id: CounterID
                };
                let changes = {
                    $set: {
                        _id: CounterID
                    },
                    $inc: {
                        "seq": 1
                    }
                };
                let options = {
                    upsert: true,
                    setDefaultsOnInsert: true,
                    new: true
                };
                let Result = await Counters.findByIdAndUpdate(query, changes, options).lean();
                resolve(Result.seq);
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}




CommonController.Check_for_Admin = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = new Object();
                if (config.AdminID == values.AdminID) {
                    query = {
                        Status: true
                    };
                } else {
                    query = {
                        AdminID: values.AdminID
                    };
                }
                let Result = await Admins.findOne(query).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_ADMIN } })
                } else {
                    if (Result.SessionID == values.SessionID || config.SECRET_SESSIONID == values.SessionID || config.SessionID == values.SessionID) {
                        resolve(Result);
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.SESSION_EXPIRED } })
                    }
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Check_for_Image = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                if (values.Image_Available != false) {
                    let query = {
                        ImageID: values.ImageID
                    };
                    let Result = await Images.findOne(query).lean();
                    if (Result == null) {
                        reject({ success: false, extras: { msg: ApiMessages.IMAGE_NOT_FOUND } })
                    } else {
                        resolve(Result);
                    }
                } else {
                    resolve("no images")
                }

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Check_for_Web_Image = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    ImageID: values.Web_ImageID
                };
                let Result = await Images.findOne(query).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.IMAGE_NOT_FOUND } })
                } else {
                    resolve(Result);
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Common_Image_Response_Single_Image = (Available, Data) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                if (Available) {
                    Data.Image50 = config.S3URL + Data.Image50;
                    Data.Image100 = config.S3URL + Data.Image100;
                    Data.Image250 = config.S3URL + Data.Image250;
                    Data.Image550 = config.S3URL + Data.Image550;
                    Data.Image900 = config.S3URL + Data.Image900;
                    Data.ImageOriginal = config.S3URL + Data.ImageOriginal;
                    resolve(Data);
                } else {
                    resolve(new Object());
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Check_for_Secret_Code = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                if (values.SECRETCODE == config.SECRETCODE) {
                    resolve("Validated Successfully")
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_SECRET_CODE } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Common_Error_Handler = (error) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                console.error("Common_Error_Handler---------->", error);
                if (error instanceof SyntaxError) {
                    resolve({ success: false, extras: { msg: ApiMessages.SERVER_ERROR } })
                } else {
                    resolve({ success: false, extras: { msg: ApiMessages.DATABASE_ERROR } })
                }
            } catch (error) {
                console.error('Something Error Handler--->', error);
            }
        });
    });
};

CommonController.Common_Error_Handler1 = (error) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                console.error("Common_Error_Handler---------->", error);
                if (error instanceof SyntaxError) {
                    resolve({ success: false, extras: { msg: ApiMessages.SERVER_ERROR, Data: error } })
                } else {
                    resolve({ success: false, extras: { msg: ApiMessages.DATABASE_ERROR, Data: error } })
                }
            } catch (error) {
                console.error('Something Error Handler--->', error);
            }
        });
    });
};

CommonController.Common_Multiple_Image_Response = Data => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                async.eachSeries(Data, async (item, callback) => {
                    try {
                        item.Image50 = config.S3URL + item.Image50;
                        item.Image100 = config.S3URL + item.Image100;
                        item.Image250 = config.S3URL + item.Image250;
                        item.Image550 = config.S3URL + item.Image550;
                        item.Image900 = config.S3URL + item.Image900;
                        item.ImageOriginal = config.S3URL + item.ImageOriginal;
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async (err) => {
                    if (err) reject(err);
                    resolve(Data);
                });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Get_Not_Eligible_Buyers_Cron = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {

                // db.inventory.find( { qty: { $nin: [ 5, 15 ] } } )

                let query = {
                    No_of_Network: {
                        $lte: config.MAX_NUMBER_TRIMMING_HEIRARCHY,
                    }
                }
                // let Count = await Buyers_Ultimate_Network.countDocuments(query).lean().exec();
                let Buyer_Data = await Buyers_Ultimate_Network.find(query).lean().exec()
                resolve(Buyer_Data)

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Get_Eligible_Buyers_Cron = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    No_of_Network: {
                        $gte: config.MAX_NUMBER_TRIMMING_HEIRARCHY,
                    }
                }
                // let Count = await Buyers_Ultimate_Network.countDocuments(query).lean().exec();
                let Buyer_Data = await Buyers_Ultimate_Network.find(query).lean().exec()
                resolve(Buyer_Data)

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Adding_Amount_Into_Purchase_Wallet = (Buyers_Data, Divindent_Amount) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                async.eachSeries(Buyers_Data, async (item, callback) => {
                    try {

                        let TData = {
                            LogID: uuid.v4(),
                            BuyerID: item.BuyerID,
                            Type: 7, //Trimming Amount
                            Amount: Divindent_Amount,
                            Data: {
                                msg: "Trimming Amount",
                                Buyer_Data: item.Buyer_Name
                            },
                            Time: new Date()
                        };
                        let PSaveResult = await Buyer_Purchase_Wallet_Logs(TData).save();


                        let query = {
                            BuyerID: item.BuyerID
                        }

                        let PW_Changes = {
                            $set: {
                                updated_at: new Date()
                            },
                            $inc: {
                                Purchace_Coupons_Amount_Available: Divindent_Amount,
                                Purchace_Coupons_Amount_Total: Divindent_Amount,
                            }
                        }

                        let UpdateData = await Buyers.updateOne(query, PW_Changes).lean().exec()

                        callback();
                    } catch (error) {
                        callback();
                    }
                }, async (err) => {
                    resolve("Data Updated Success")
                });

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Adding_Amount_Into_Expire_Wallet = (Buyers_Data, Divindent_Amount) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                async.eachSeries(Buyers_Data, async (item, callback) => {
                    try {

                        let TData = {
                            LogID: uuid.v4(),
                            BuyerID: item.BuyerID,
                            Type: 5, //Credited trimming amount
                            Amount: Divindent_Amount,
                            Data: {
                                msg: "Trimming Amount",
                                Buyer_Data: item
                            },
                            Time: new Date()
                        };
                        let PSaveResult = await Buyer_Expired_Amount_Wallet_Logs(TData).save();


                        let query = {
                            BuyerID: item.BuyerID
                        }

                        let EW_Changes = {
                            $set: {
                                updated_at: new Date()
                            },
                            $inc: {
                                Expired_Amount: Divindent_Amount,
                                Expired_Amount_Total: Divindent_Amount,
                            }
                        }

                        let UpdateData = await Buyers.updateOne(query, EW_Changes).lean().exec()

                        callback();
                    } catch (error) {
                        callback();
                    }
                }, async (err) => {
                    resolve("Data Updated Success")
                });

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Get_Eligible_Shops_Cron = values => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Payment_Status: 3,
                    Status: true
                }
                let User_SHops_Data = await Users_Shops.find(query).lean().exec()
                resolve(User_SHops_Data)

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CommonController.Adding_Amount_Into_Purchase_Shop_Wallet = (Eligible_ShopsData, Divindent_Amount) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                async.eachSeries(Eligible_ShopsData, async (item, callback) => {
                    try {

                        let TData = {
                            LogID: uuid.v4(),
                            BuyerID: item.BuyerID,
                            Type: 8, //Shop Keepers Trimming Amount
                            Amount: Divindent_Amount,
                            Data: {
                                msg: "Shop Keepers Trimming Amount",
                                Buyer_Data: item
                            },
                            Time: new Date()
                        };
                        let PSaveResult = await Buyer_Purchase_Wallet_Logs(TData).save();


                        let query = {
                            BuyerID: item.BuyerID
                        }

                        let PW_Changes = {
                            $set: {
                                updated_at: new Date()
                            },
                            $inc: {
                                Purchace_Coupons_Amount_Available: Divindent_Amount,
                                Purchace_Coupons_Amount_Total: Divindent_Amount,
                            }
                        }

                        let UpdateData = await Buyers.updateOne(query, PW_Changes).lean().exec()

                        callback();
                    } catch (error) {
                        callback();
                    }
                }, async (err) => {
                    resolve("Data Updated Success")
                });

            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}
CommonController.Check_for_User_Cart = (values, DeviceData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: values.BuyerID,

                };
                let Result = await Cart.findOne(query).lean();
                if (Result != null) {
                    resolve(Result);
                } else {
                    resolve(Result);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}
CommonController.Check_For_Pincode_Shop = (values, DeviceData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    PincodeID: values.PincodeID,

                };
                let Result = await Users_Shops.findOne(query).lean();
                if (Result != null) {
                    resolve(Result);
                } else {
                    reject({ success: false, extras: { code: 2, msg: ApiMessages.INVALID_PINCODE } })
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}
CommonController.isNumber = (num) => {
    if (
        num != null &&
        num != undefined &&
        String(num) != "" &&
        isFinite(num) &&
        !isNaN(num)
    ) {
        return true;
    } else {
        return false;
    }
};

CommonController.GENERATE_TEN_DIGIT_INCREMENT_COUNTER_SEQUENCE = (
    CounterID,
    StartCode
) => {
    return new Promise(async (resolve, reject) => {
        try {
            CounterID = String(CounterID);
            StartCode = String(StartCode);
            let seq = await CommonController.Generate_Counter_Sequence(CounterID);
            let Unique_Sequnce = StartCode;
            let seq_length = String(seq).length <= 10 ? String(seq).length : 10;
            let length = 10 - seq_length;
            for (let t = 0; t < length; t++) {
                Unique_Sequnce += 0;
            }
            Unique_Sequnce += seq;
            resolve(Unique_Sequnce);
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
};

CommonController.Check_for_User_Address = (values) => {
    return new Promise(async (resolve, reject) => {
        try {
            let query = {
                AddressID: values.AddressID,
                Status: true
            }
            let Result = await User_Address.findOne(query).lean();
            if (Result != null) {
                resolve(Result);
            } else {
                reject({ success: false, extras: { code: 2, msg: ApiMessages.INVALID_ADDRESS } })
            }
        } catch (error) {
            reject(await CommonController.Common_Error_Handler(error));
        }
    });
}

CommonController.Check_for_District = (values) => {
    return new Promise(async (resolve, reject) => {
        try {
            let query = {
                DistrictID: values.DistrictID,
            }
            let Result = await District.findOne(query).lean().exec();
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

CommonController.Check_for_State = (values) => {
    return new Promise(async (resolve, reject) => {
        try {
            let query = {
                StateID: values.StateID,
            }
            let Result = await State.findOne(query).lean().exec();
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

CommonController.Check_for_Order_Data = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    OrderID: values.OrderID,
                    Order_Status: 1
                    // Payment_Status:3,
                    // User_Shop_Status:1
                };

                let Result = await Orders.findOne(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -Amount_Paid -Users_Shop_Password').lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.NO_ORDER_DATA } })
                } else {
                    resolve(Result);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
};
CommonController.Check_for_Order_OTP_Data = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    OrderID: values.OrderID,
                    // Payment_Status:3,
                    // User_Shop_Status:1
                };

                let Result = await Order_Otp.findOne(query).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings -PasswordHash -PasswordSalt -SessionID -Amount_Paid -Users_Shop_Password').lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.NO_ORDER_DATA } })
                } else {
                    resolve(Result);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
};


CommonController.Check_for_State_Purchase = (values, DistrictData) => {
    return new Promise(async (resolve, reject) => {
        try {

            let currentDate = new Date()
            let Currenttime = currentDate.getTime()
            let MinusHours = 60 * 60 * 10
            let existedDate = new Date(Currenttime - MinusHours)

            let query = {
                StateID: values.StateID,

                $or: [{
                    State_Status: 0
                   
                },
                {
                    State_Status: 1,
                    Up_Time: {
                        $lte: existedDate
                    }
                }
                ]
            }

            console.log("1717---->" + JSON.stringify(query))
            let Result = await State.findOne(query).lean().exec();
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
CommonController.Check_for_District_Purchase = (values, DistrictData) => {
    return new Promise(async (resolve, reject) => {
        try {
            let currentDate = new Date()
            let Currenttime = currentDate.getTime()
            let MinusHours = 60 * 60 * 10
            let existedDate = new Date(Currenttime - MinusHours)

            let query = {
                DistrictID: values.DistrictID,

                $or: [{
                    District_Status: 0
                    
                },
                {
                    District_Status: 1,
                    Up_Time: {
                        $lte: existedDate
                    }
                }
                ]
            }

            console.log("1756---->" + JSON.stringify(query))
            let Result = await District.findOne(query).lean().exec();
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

CommonController.Check_For_Buyer_Session_State_Purchase = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    BuyerID: values.BuyerID
                };
                let Result = await Buyers.findOne(query).lean();
                if (Result == null) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_BUYER } })
                } else {
                    if (Result.SessionID == values.SessionID || config.SECRET_SESSIONID == values.SessionID) {


                        resolve(Result);
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.SESSION_EXPIRED } });
                    }
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


CommonController.Receive_Amount_From_DHWallet = (values,FriendData,UserData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Amount = parseFloat(values.Amount);
                if (Amount <= UserData.User_Amounts.Available_Amount) {
                  //  let After_Commissioned_Amount = ((Amount * config.Friend_Money_Transfer_After_Commissioned) / 100);
                   

                    let FData = {
                        Buyer_PhoneNumber:values.PhoneNumber,
                       // LogID: uuid.v4(),
                        //USERID: FriendData.USERID,
                        //Type: 12,
                        Amount: Amount
                        //Data: {
                          //  UserData: UserData,
                            //FriendData: FriendData,
                           // After_Commissioned_Amount: After_Commissioned_Amount
                        }
                        Time: new Date()
                    
                    let FSaveResult = await Buyer_Wallet_Logs(FData).save();
                    let Ffndupdquery = {
                        USERID: FriendData.USERID
                    };
                    let Ffndupdchanges = {
                        $set: {
                            updated_at: new Date()
                        },
                        $inc: {
                            "User_Amounts.Available_Amount": Amount,
                            "User_Amounts.Total_Amount": Amount,
                        }
                    };
                    let Ffndupdoptions = {
                        upsert: true,
                        setDefaultsOnInsert: true,
                        new: true
                    };
                    let FfindupdateData = await Buyers.findOneAndUpdate(Ffndupdquery, Ffndupdchanges, Ffndupdoptions).select('-_id -__v').lean();
                    let Data = {
                        USERID: FriendData.USERID,
                        Amount: Amount,
                       // After_Commissioned_Amount: After_Commissioned_Amount,
                        REQUEST_DETAILS: UserData,
                        created_at: new Date(),
                        updated_at: new Date()
                    }
                    let SaveResult = await User_Transfer_Money_Requests(Data).save();
                    resolve({ success: true, extras: { Status: "Money Transferred and Requested in Cash Successfully" } })
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INSUFFICIENT_BALANCE } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}
export default CommonController;