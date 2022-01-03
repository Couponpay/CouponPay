let RazorpayController = function () { };
import axios from "axios";
import uuid from "uuid";
import ApiMessages from "../config/ApiMessages";
import config from "../config/config";
import CommonController from "./CommonController";
import Buyer_Orders from "../models/Buyer_Orders";
import Razorpay_Webhooks from "../models/Razorpay_Webhooks";
import ShopController from "./ShopController";
import Users_Shops from "../models/Users_Shops";
import Buyer_Shop_requests_Notification from "../models/Buyer_Shop_requests_Notification";
import Buyers_Purchase_Log from "../models/Buyers_Purchase_Log";
import Buyer_Box_Product_Purchased_Logs from "../models/Buyer_Box_Product_Purchased_Logs";

import Orders from "../models/Orders"
import State_Transaction from "../models/State_Transaction"
import District_Transaction from "../models/District_Transaction"

RazorpayController.CallbackInFunctionality = async (req, res) => {
    try {
        let values = JSON.parse(JSON.stringify(req.body));
        
        res.status(200).send("Callback Completed Successfully");
        let PaymentData = new Object();
        let paymentarray = ["payment.authorized", "payment.captured", "payment.failed"];
        if (paymentarray.indexOf(values.event) >= 0) {
            PaymentData = values.payload.payment.entity;
        }
        
        let Data = {
            WebookID: uuid.v4(),
            PaymentID: PaymentData.id,
            Captured: PaymentData.status,
            Amount: values.payload.payment.entity.amount / 100,
            RequestData: values,
            PaymentData: PaymentData,
            created_at: new Date(),
            updated_at: new Date()
        };
        
        let SaveResult = await Razorpay_Webhooks(Data).save();
        if (paymentarray.indexOf(values.event) >= 0) {
            if (PaymentData.status == 'authorized') {
                if (values.payload.payment.entity.notes.type != "Shop Stock Purchase" && values.payload.payment.entity.notes.type != "UserShop_Purchace") {
                    PaymentData = await RazorpayController.Capture_Razorpay_Payment(PaymentData.id, PaymentData.amount);
                } else if (values.payload.payment.entity.notes.type == "UserShop_Purchace") {
                    PaymentData = await RazorpayController.Capture_Razorpay_Payment(PaymentData.id, PaymentData.amount);
                }else if(values.payload.payment.entity.notes.type == "Normal_Order"){
                    PaymentData = await RazorpayController.Capture_Razorpay_Payment(PaymentData.id, PaymentData.amount);
                }else if(values.payload.payment.entity.notes.type == "State_Purchase"){
                    PaymentData = await RazorpayController.Capture_Razorpay_Payment(PaymentData.id, PaymentData.amount);
                }
                resolve("Functionality Completed");
            } else if (PaymentData.status == 'captured') {

                console.log("56 --Razorpay  ---")
                console.log(JSON.stringify(values.payload.payment.entity))
                if (values.payload.payment.entity.notes.type != "State_Purchase" &&values.payload.payment.entity.notes.type != "District_Purchase" && values.payload.payment.entity.notes.type != "Shop Stock Purchase" && values.payload.payment.entity.notes.type != "UserShop_Purchace" && values.payload.payment.entity.notes.type != "Share_Amount_Request" && values.payload.payment.entity.notes.type != "Purchase_C_Product" && values.payload.payment.entity.notes.type != "Buyer_Share_Amount_Request" && values.payload.payment.entity.notes.type != "Buyer_Box_Product_Share_Amount") {
                    let query = {
                        TransactionID: values.payload.payment.entity.notes.TransactionId
                    };
                    let ResultData = await Buyer_Orders.findOne(query).lean();
                    let updateTranx = await ShopController.Complete_Payment_for_Buyer_Order(ResultData, Data);
                } else if (values.payload.payment.entity.notes.type == "UserShop_Purchace") {
                    let query = {
                        TransactionID: values.payload.payment.entity.notes.TransactionId,
                        Payment_Status: 1
                    };

                    let UserShopData = await Users_Shops.findOne(query).lean();
                    // 
                    if (UserShopData != null) {
                        let updateTranx = await ShopController.Complete_Payment_for_Buyer_Shop(UserShopData, Data,);
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.INVALID_ORDER } });
                    }
                } else if (values.payload.payment.entity.notes.type == "Share_Amount_Request") {
                    
                    let query = {
                        TransactionID: values.payload.payment.entity.notes.TransactionId,
                        Shop_Payment_Status: 1,
                        Request_Status: 1
                    };

                    let Share_Request_Data = await Buyer_Shop_requests_Notification.findOne(query).lean();
                    
                    if (Share_Request_Data != null) {
                        
                        
                        let updateTranx = await ShopController.Razorpay_Calbk_Sharing_The_Buyer_Share_Requests(Share_Request_Data, Data);
                    } else {
                        reject({ success: false, extras: { msg: ApiMessages.INVALID_REQUEST } });
                    }
                } else if (values.payload.payment.entity.notes.type == "Purchase_C_Product") {
                    let updateTranx = await ShopController.Complete_Payment_for_Buyer_Purchase(values.payload.payment.entity.notes.TransactionId, Data);
                } else if (values.payload.payment.entity.notes.type == "Buyer_Share_Amount_Request") {
                    let updateTranx = await ShopController.Complete_Payment_for_User_Shops_Request(values.payload.payment.entity.notes.TransactionId, Data);
                } else if (values.payload.payment.entity.notes.type == "Buyer_Box_Product_Share_Amount") {


                    let query = {
                        TransactionID: values.payload.payment.entity.notes.TransactionId
                    };
                    let changes = {
                        $set: {
                            Payment_Status: 3,
                            WebHookData: Data,
                            Updated_at: new Date()
                        }
                    };
                    let UpdatedStatus = await Buyer_Box_Product_Purchased_Logs.updateOne(query, changes).lean();
                    
                    let updateTranx = await ShopController.Complete_Payment_for_Buyer_Box_Purchase(values.payload.payment.entity.notes.TransactionId, Data);
                }else if (values.payload.payment.entity.notes.type == "Normal_Order") {
                    let TransactionID = values.payload.payment.entity.notes.TransactionID;
                    if (TransactionID == null) {
                        TransactionID = values.payload.payment.entity.notes.TransactionId;
                    }
                    console.log("56--> " + JSON.stringify(TransactionID))
                    let updateTranx = await ShopController.Complete_Payment_for_Order(TransactionID, Data, 2);
                } else if (values.payload.payment.entity.notes.type == "State_Purchase"){
                    let TransactionID = values.payload.payment.entity.notes.TransactionID;
                    if (TransactionID == null) {
                        TransactionID = values.payload.payment.entity.notes.TransactionId;
                    }
                    console.log("56--> " + JSON.stringify(TransactionID))
                    let updateTranx = await ShopController.Complete_Payment_for_State_Purchase(TransactionID, Data);
                    
                } else if(values.payload.payment.entity.notes.type == "District_Purchase"){

                    let TransactionID = values.payload.payment.entity.notes.TransactionID;
                    if (TransactionID == null) {
                        TransactionID = values.payload.payment.entity.notes.TransactionId;
                    }
                    console.log("56--> " + JSON.stringify(TransactionID))
                    let updateTranx = await ShopController.Complete_Payment_for_District_Purchase(TransactionID, Data);
                }
                resolve("Captured Completed");
            } else if (PaymentData.status == 'failed') {
                if (values.payload.payment.entity.notes.type != "Shop Stock Purchase" && values.payload.payment.entity.notes.type != "UserShop_Purchace" && values.payload.payment.entity.notes.type != "Share_Amount_Request"
                    && values.payload.payment.entity.notes.type != "Purchase_C_Product" && values.payload.payment.entity.notes.type != "Buyer_Share_Amount_Request"
                    && values.payload.payment.entity.notes.type != "Buyer_Box_Product_Share_Amount") {
                    let query = {
                        TransactionID: values.payload.payment.entity.notes.TransactionId
                    };
                    let changes = {
                        $set: {
                            Payment_Status: 2,
                            Order_Status: 0,
                            WebHookData: Data,
                            Updated_at: new Date()
                        }
                    };
                    let UpdatedStatus = await Buyer_Orders.updateOne(query, changes).lean();
                } else if (values.payload.payment.entity.notes.type == "UserShop_Purchace") {
                    let query = {
                        TransactionID: values.payload.payment.entity.notes.TransactionId
                    };
                    let changes = {
                        $set: {
                            Payment_Status: 2,
                            Order_Status: 0,
                            WebHookData: Data,
                            Updated_at: new Date()
                        }
                    };
                    let UpdatedStatus = await Users_Shops.updateOne(query, changes).lean();
                } else if (values.payload.payment.entity.notes.type == "Share_Amount_Request") {

                } else if (values.payload.payment.entity.notes.type == "Purchase_C_Product") {
                    let query = {
                        TransactionID: values.payload.payment.entity.notes.TransactionId
                    };
                    let changes = {
                        $set: {
                            Payment_Status: 2,
                            Updated_at: new Date()
                        }
                    }
                    let Resultx = await Buyers_Purchase_Log.findOneAndUpdate(query, changes).lean().exec();
                } else if (values.payload.payment.entity.notes.type == "Buyer_Share_Amount_Request") {
                    let query = {
                        Buyer_TransactionID: Buyer_TransactionID,
                        Buyer_Payment_Status: 1,
                        // Request_Status: 1
                    }
                    let changes = {
                        $set: {
                            Buyer_Payment_Status: 2,
                            Updated_at: new Date()
                        }
                    }
                    let Resultx = await Buyer_Shop_requests_Notification.findOneAndUpdate(query, changes).lean().exec();
                } else if (values.payload.payment.entity.notes.type == "Buyer_Box_Product_Share_Amount") {
                    let query = {
                        TransactionID: Buyer_TransactionID,
                        Payment_Status: 1,
                        // Request_Status: 1
                    }
                    let changes = {
                        $set: {
                            Buyer_Payment_Status: 2,
                            Updated_at: new Date()
                        }
                    }
                    let Resultx = await Buyer_Box_Product_Purchased_Logs.findOneAndUpdate(query, changes).lean().exec();
                } else if(values.payload.payment.entity.notes.type == "Normal_Order"){
                    let query = {
                        TransactionID: TransactionID,
                        Payment_Type: 2,
                    }
                    //  
                    let Result = await Orders.findOne(query).lean();
                    if (Result != null) {
    
    
                        let changes = {}
                        changes = {
                            $set: {
                                Payment_Status: 2,
                                WebHookData: WebHookData,
                                Updated_at: new Date()
                            }
                        }
    
    
                        let Resultx = await Orders.findOneAndUpdate(query, changes).lean().exec();
                        resolve("Purchase Cancelled Successfully");
                }
                resolve("Payment Failed");
            } else if (values.payload.payment.entity.notes.type == "State_Purchase"){
                let query = {
                    TransactionID: TransactionID,
                }
                //  
                let Result = await State_Transaction.findOne(query).lean();
                if (Result != null) {


                    let changes = {}
                    changes = {
                        $set: {
                            Payment_Status: 2,
                            WebHookData: WebHookData,
                            Updated_at: new Date()
                        }
                    }


                    let Resultx = await State_Transaction.findOneAndUpdate(query, changes).lean().exec();
                    resolve("Purchase Cancelled Successfully");
            }
            resolve("Payment Failed");
            }else if(values.payload.payment.entity.notes.type == "District_Purchase"){
                let query = {
                    TransactionID: TransactionID,
                }
                //  
                let Result = await District_Transaction.findOne(query).lean();
                if (Result != null) {


                    let changes = {}
                    changes = {
                        $set: {
                            Payment_Status: 2,
                            WebHookData: WebHookData,
                            Updated_at: new Date()
                        }
                    }


                    let Resultx = await District_Transaction.findOneAndUpdate(query, changes).lean().exec();
                    resolve("Purchase Cancelled Successfully");
            }
            resolve("Payment Failed");
            }
            else {
                reject({ success: false, extras: { msg: ApiMessages.INVALID_ORDER } });
            }
            } 
        }
    } catch (error) {
        if (!res.headersSent) {
            console.error("Something Razorpay Callback error-->", error)
            res.status(200).send("Callback Completed Successfully");
        }
    }
}

RazorpayController.Create_Razorpay_Buyer_Contact = (BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                if (BuyerData.Buyer_Name.length <= 2) {
                    BuyerData.Buyer_Name = `${BuyerData.Buyer_Name} Dogemo`;
                }
                BuyerData.Buyer_Name = BuyerData.Buyer_Name.replace(/[^a-zA-Z0-9 ]/g, "");
                if (BuyerData.Whether_RazorpayX_Buyer_Register == null || !BuyerData.Whether_RazorpayX_Buyer_Register) {
                    let request_options = {
                        method: 'post',
                        baseURL: config.razorpay.baseURL,
                        url: `/contacts`,
                        data: {
                            "name": BuyerData.Buyer_Name,
                            "email": '',
                            "contact": BuyerData.Buyer_PhoneNumber,
                            "type": "customer",
                            "reference_id": BuyerData.BuyerID,
                            "notes": {
                                "note_key": "Dogemo Buyer Registration"
                            }
                        },
                        auth: {
                            username: config.razorpay.key_id,
                            password: config.razorpay.key_secret
                        },
                    };
                    let Response = await axios(request_options);
                    if (Response.status == 200 || Response.status == 201) {
                        resolve(Response.data);
                    } else if (Response.status == 400) {
                        console.error("Razorpay Error")
                        console.error(Response.data);
                        reject({ success: false, extras: { msg: ApiMessages.INVALID_RAZORPAY_REQUEST } });
                    } else if (Response.status == 401) {
                        console.error("Razorpay Error")
                        console.error(Response.data);
                        reject({ success: false, extras: { msg: ApiMessages.INVALID_API_KEY } });
                    }
                } else {
                    //Fetch Customer
                    let request_options = {
                        method: 'get',
                        baseURL: config.razorpay.baseURL,
                        url: `/contacts/${BuyerData.RazorpayX_ContactID}`,
                        auth: {
                            username: config.razorpay.key_id,
                            password: config.razorpay.key_secret
                        },
                    };
                    let Response = await axios(request_options);
                    if (Response.status == 200 || Response.status == 201) {
                        resolve(Response.data);
                    } else if (Response.status == 400) {
                        console.error("Razorpay Error")
                        console.error(Response.data);
                        reject({ success: false, extras: { msg: ApiMessages.INVALID_RAZORPAY_REQUEST } });
                    } else if (Response.status == 401) {
                        console.error("Razorpay Error")
                        console.error(Response.data);
                        reject({ success: false, extras: { msg: ApiMessages.INVALID_API_KEY } });
                    }
                }
            } catch (error) {
                console.error("Razorpay Error-->", error);
                reject({ success: false, extras: { msg: ApiMessages.RAZORPAY_ERROR } });
            }
        });
    });
}


RazorpayController.Razorpay_Beneficiary_Account_Payout = (BeneficiaryData, Amount, TransactionID, TransactionType) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                //Note------->   TransactionType ----->  1. Driver Payout  2. User Main Order Refund 3. Driver Wallet Withdrawl

                Amount = parseFloat(Amount) * 100;//converting to paise;
                Amount = parseInt(Amount);
                let mode = (BeneficiaryData.BeneficiaryType == 1) ? 'IMPS' : 'UPI';
                if (config.Whether_Production_Settings) {
                    let request_options = {
                        method: 'post',
                        baseURL: config.razorpay.baseURL,
                        url: `/payouts`,
                        data: {
                            "account_number": config.razorpay.razorpayx_account_number,
                            "fund_account_id": BeneficiaryData.RazorpayX_BeneficiaryID,
                            "amount": Amount,
                            "currency": "INR",
                            "mode": mode,
                            "purpose": "payout",
                            "queue_if_low_balance": true,
                            "reference_id": TransactionID,
                            "narration": "Dogemo-Bank-Transfer",
                            "notes": {
                                "note_key": "Dogemo-Bank-Transfer",
                                "TransactionType": TransactionType
                            }
                        },
                        auth: {
                            username: config.razorpay.key_id,
                            password: config.razorpay.key_secret
                        },
                    };
                    let Response = await axios(request_options);
                    if (Response.status == 200 || Response.status == 201) {
                        resolve(Response.data);
                    } else if (Response.status == 400) {
                        console.error("Razorpay Error")
                        console.error(Response.data);
                        reject({ success: false, extras: { msg: ApiMessages.INVALID_RAZORPAY_REQUEST } });
                    } else if (Response.status == 401) {
                        console.error("Razorpay Error")
                        console.error(Response.data);
                        reject({ success: false, extras: { msg: ApiMessages.INVALID_API_KEY } });
                    }
                } else {
                    let Data = {
                        id: uuid.v4(),
                        amount: Amount,
                        currency: "INR",
                        fees: 30,
                        tax: 10,
                        status: "processed",
                        utr: uuid.v4(),
                        mode: mode,
                        reference_id: TransactionID,
                        failure_reason: "",
                        notes: {
                            "note_key": "Dogemo-Bank-Transfer",
                            "TransactionType": TransactionType
                        }
                    };
                    resolve(Data);
                }
            } catch (error) {
                console.error("Razorpay Error-->", error);
                reject({ success: false, extras: { msg: ApiMessages.RAZORPAY_ERROR } });
            }
        });
    });
}


RazorpayController.Create_Razorpay_Buyer_Beneficiary_Account_for_Bank_Account = (values, BuyerData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                if (values.Name.length <= 4) {
                    values.Name = `${values.Name} Dogemo`;
                };
                values.Name = values.Name.replace(/[^a-zA-Z0-9 ]/g, "");
                let request_options = {
                    method: 'post',
                    baseURL: config.razorpay.baseURL,
                    url: `/fund_accounts`,
                    data: {
                        "contact_id": BuyerData.RazorpayX_ContactID,
                        "account_type": "bank_account",
                        "bank_account": {
                            "name": values.Name,
                            "ifsc": values.IFSC,
                            "account_number": values.Account_Number
                        }
                    },
                    auth: {
                        username: config.razorpay.key_id,
                        password: config.razorpay.key_secret
                    },
                };
                let Response = await axios(request_options);
                if (Response.status == 200 || Response.status == 201) {
                    resolve(Response.data);
                } else if (Response.status == 400) {
                    console.error("Razorpay Error")
                    console.error(Response.data);
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_RAZORPAY_REQUEST } });
                } else if (Response.status == 401) {
                    console.error("Razorpay Error")
                    console.error(Response.data);
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_API_KEY } });
                }
            } catch (error) {
                console.error("Razorpay Error-->", error);
                reject({ success: false, extras: { msg: ApiMessages.RAZORPAY_ERROR } });
            }
        });
    });
}



RazorpayController.Check_Razorpay_Payment = (PaymentID) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let url = `https://${config.razorpay.key_id}:${config.razorpay.key_secret}@${config.razorpay.host}/payments/${PaymentID}`;
                let request_options = {
                    method: 'get',
                    url: url
                };
                let Response = await axios(request_options);
                if (Response.status == 200) {
                    let Data = Response.data;
                    if (Data.status == "created" || Data.status == "failed") {
                        reject({ success: false, extras: { msg: ApiMessages.RAZORPAY_PAYMENT_FAILED } });
                    } else {
                        resolve(Data);
                    }
                } else if (Response.status == 400) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_PAYMENT_ID } });
                } else if (Response.status == 401) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_API_KEY } });
                }
            } catch (error) {
                console.error("Razorpay Error-->", error);
                reject({ success: false, extras: { msg: ApiMessages.RAZORPAY_ERROR } });
            }
        });
    });
}

RazorpayController.Capture_Razorpay_Payment = (PaymentID, amount) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let url = `https://${config.razorpay.key_id}:${config.razorpay.key_secret}@${config.razorpay.host}/payments/${PaymentID}/capture`;
                let request_options = {
                    method: 'post',
                    url: url,
                    data: {
                        amount: amount// In paise
                    }
                };
                let Response = await axios(request_options);
                if (Response.status == 200) {
                    resolve(Response.data);
                } else if (Response.status == 400) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_CAPTURE_AMOUNT } });
                } else if (Response.status == 401) {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_API_KEY } });
                }
            } catch (error) {
                console.error("Razorpay Error-->", error);
                reject({ success: false, extras: { msg: ApiMessages.RAZORPAY_ERROR } });
            }
        });
    });
}

export default RazorpayController;