let CronController = function () { };
import uuid from "uuid";
import cron from "cron";
import ApiMessages from "../config/ApiMessages";
import CommonController from "./CommonController";
import Counters from "../models/Counters";
import async from "async";
import { isBoolean, Boolify } from "node-boolify";
import moment from "moment";
import axios from "axios";
import config from "../config/config";
import Introducers from "../models/Introducers";
import Shops from "../models/Shops";
import Products from "../models/Products";
import Shop_Product_Stocks from "../models/Shop_Product_Stocks";
import Shop_Product_Stock_Logs from "../models/Shop_Product_Stock_Logs";
import Shop_Share_Logs from "../models/Shop_Share_Logs";
import Introducer_Share_Logs from "../models/Introducer_Share_Logs";
import Company_Share from "../models/Company_Share";
import Company_Share_Logs from "../models/Company_Share_Logs";
import Buyers from "../models/Buyers";
import Buyer_Share_Logs from "../models/Buyer_Share_Logs";
import Trimer_Share from "../models/Trimer_Share";
import Trimer_Share_Logs from "../models/Trimer_Share_Logs";
import Buyers_Network from "../models/Buyers_Network";
import Buyer_Offer_Message from "../models/Buyer_Offer_Message";
import Bonanza_Log from "../models/Bonanza_Log";
import Buyer_Bonanza_Log from "../models/Buyer_Bonanza_Log";
import Buyer_Orders from "../models/Buyer_Orders";
import Shop_Keepers_Trimming_Wallet from "../models/Shop_Keepers_Trimming_Wallet";
import Shop_Keepers_Trimming_Wallet_Logs from "../models/Shop_Keepers_Trimming_Wallet_Logs";

CronController.Shop_Keepers_Trimmer_Share_Distribution_Shops = () => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let date = await CommonController.Common_Last_Day_Start_Date();
                let Trimer_DateID = date.toISOString();
                let fndupdquery = {
                    // Date: date
                };
                let fndupdchanges = {
                    // $set: {
                    //     // Trimer_DateID: Trimer_DateID
                    // }
                };
                let fndupdoptions = {
                    upsert: true,
                    setDefaultsOnInsert: true,
                    new: true
                };
                let Trimmer_Share_Data = await Shop_Keepers_Trimming_Wallet.findOneAndUpdate(fndupdquery, fndupdchanges, fndupdoptions).select('-_id -__v').lean();
                if (Trimmer_Share_Data.Available_Amount > 0) {
                    let Eligible_ShopsData = await CommonController.Get_Eligible_Shops_Cron();
                    let Divindent_Amount = (Trimmer_Share_Data.Available_Amount / Eligible_ShopsData.length)

                    let PurchaseAmout_Updated = await CommonController.Adding_Amount_Into_Purchase_Shop_Wallet(Eligible_ShopsData, Divindent_Amount);

                    let SKTData = {
                        msg: "Shop Trimming Amount Shares",
                        Amount: Trimmer_Share_Data.Available_Amount
                    }


                    let SKTrimmerData = {
                        LogID: uuid.v4(),
                        Type: 2, //Debited Amount for Trimmeing Hshrae
                        Amount: Trimmer_Share_Data.Available_Amount,
                        Data: SKTData,
                        Time: new Date()
                    };
                    let SKTaveCData = await Shop_Keepers_Trimming_Wallet_Logs(SKTrimmerData).save();

                    let Trim_W_Changes = {
                        $inc: {
                            Available_Amount: Trimmer_Share_Data.Available_Amount * -1,
                            Withdrawn_Amount: Trimmer_Share_Data.Available_Amount
                        },
                        $set: {

                        }
                    }

                    let SKTW_Update = await Shop_Keepers_Trimming_Wallet.update({}, Trim_W_Changes)


                    resolve({ success: true, extras: { Status: "Trimmer share distribution functionality completed" } });
                } else {
                    resolve({ success: true, extras: { Status: "Trimmer share distribution functionality completed" } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CronController.Bonanza_Level_Points_Calculation = (PointsData, BuyerID, Points, level) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Progress = 0;
                let Whether_Completed = false;
                let Achived_Points = 0;
                if (PointsData.Levels >= level) { //
                    let Blog = await Buyer_Bonanza_Log.findOne({
                        BuyerID: BuyerID,
                        Bonanza_Status: 1,
                        Bonanza_Type: {
                            $in: [1, 3]
                        },
                        Status: true,
                    }).select('Bonanza_Points_Data').lean().exec()
                    if (Blog != null) {
                        let Result = Blog.Bonanza_Points_Data.filter(function (ResultTemp) {
                            return ResultTemp.Levels == PointsData.Levels;
                        });
                        Achived_Points = Result[0].Achived_Points + Points
                    } else {
                        Achived_Points = Points
                    }
                    let Total_Points_Req = PointsData.Max_Points - PointsData.Min_Points
                    if (Achived_Points >= PointsData.Min_Points) {
                        Progress = parseInt((Achived_Points - PointsData.Min_Points) * Total_Points_Req / 100)
                    }
                    if (Progress >= 100) {
                        Whether_Completed = true
                    }
                }
                let Bonanza_Points_Data = {
                    Levels: PointsData.Levels,
                    Min_Points: PointsData.Min_Points,
                    Max_Points: PointsData.Max_Points,
                    Winning: PointsData.Winning,
                    Achived_Points: Achived_Points,
                    Progress: Progress,
                    Whether_Completed: Whether_Completed
                };
                // 
                resolve(Bonanza_Points_Data)
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CronController.Single_Buyer_Bonanza_Matrix = (Matrix, BuyerID) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let BuyerID_Array = []
                let NetworkData = await Buyers_Network.findOne({ BuyerID: BuyerID }).lean().exec()
                if (NetworkData != null) {
                    if (NetworkData.Network_Information.length >= Matrix) {
                        for (let BuyerData of NetworkData.Network_Information) {
                            let ValidateSale = await Buyer_Orders.findOne({ BuyerID: BuyerData.BuyerID, Order_Status: 3 }).lean().exec()
                            if (ValidateSale != null) {
                                BuyerID_Array.push(BuyerData.BuyerID)
                            }
                        }
                        if (BuyerID_Array.length >= Matrix) {
                            resolve(BuyerID_Array)
                        } else {
                            resolve("Next")
                        }
                    } else {
                        resolve("Next")
                    }
                } else {
                    resolve("Next")
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CronController.Bonanza_Level_Matrix_Calculation = (MatrixData, BuyerID) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Fullfilled_Level = [];
                let Progress = 0;
                let Whether_Completed = false;
                let BuyerID_Array = [BuyerID]
                for (let i = 1; i <= MatrixData.Levels; i++) {
                    let BuyerID_Temp = []
                    let Flevel = 0
                    for (let BuyerID of BuyerID_Array) {
                        let bData = await CronController.Single_Buyer_Bonanza_Matrix(MatrixData.Matrix, BuyerID)
                        if (bData != "Next") {
                            Flevel++
                            BuyerID_Temp.push(bData)
                        }
                    }
                    if (Flevel >= MatrixData.Matrix) {
                        Fullfilled_Level.push(i)
                    }
                    BuyerID_Array = [];
                    BuyerID_Array = BuyerID_Temp;
                }
                let ProgressDivision = 100 / MatrixData.Levels
                Progress = ProgressDivision * Fullfilled_Level.length
                if (Progress >= 100) {
                    Whether_Completed = true
                }
                let Bonanza_Matrix_Data = {
                    Levels: MatrixData.Levels,
                    Matrix: MatrixData.Matrix,
                    Fullfilled_Level: Fullfilled_Level,
                    Winning: MatrixData.Winning,
                    Progress: Progress,
                    Whether_Completed: Whether_Completed
                };
                // 
                resolve(Bonanza_Matrix_Data)
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CronController.Buyer_Bonanza_Matrix_Calculation = () => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                //check for live Bonanza for each level
                
                let query = {
                    Bonanza_Status: 1,
                    Bonanza_Type: {
                        $in: [2, 3]
                    },
                    Status: true
                }
                let BonanzaData = await Bonanza_Log.findOne(query).lean().exec()
                if (BonanzaData != null) {
                    let BuyerID_Array = await Buyers.distinct('BuyerID', { Status: true }).lean().exec()
                    for (let BuyerID of BuyerID_Array) {
                        // let BuyerData = await CommonController.Check_for_Buyer({ BuyerID: BuyerID });
                        let Bonanza_Matrix_Data = [];
                        for (let MatrixData of BonanzaData.Bonanza_Matrix_Data) {
                            let BMD = await CronController.Bonanza_Level_Matrix_Calculation(MatrixData, BuyerID)
                            Bonanza_Matrix_Data.push(BMD);
                        }
                        
                        let fndupdquery = {
                            BuyerID: BuyerID,
                            BonanzaID: BonanzaData.BonanzaID,
                        };
                        let fndupdchanges = {
                            $setOnInsert: {
                                LogID: uuid.v4(),
                                Bonanza_Code: BonanzaData.Bonanza_Code,
                                BonanzaID: BonanzaData.BonanzaID,
                                BuyerID: BuyerID,
                                Name: BonanzaData.Name,
                                Description: BonanzaData.Description,
                                Start_Date: BonanzaData.Start_Date,
                                End_Date: BonanzaData.End_Date,
                                Bonanza_Type: BonanzaData.Bonanza_Type, //1- Points, 2- Matrix, 3-both
                                Bonanza_Status: BonanzaData.Bonanza_Status,
                                created_at: new Date()
                            },
                            $set: {
                                Bonanza_Matrix_Data: Bonanza_Matrix_Data,
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
                }
                
                resolve('process completed')
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CronController.Make_Bonanza_Live_Complete = () => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let query = {
                    Status: true,
                    Bonanza_Status: {
                        $in: [1, 4]
                    }
                };
                let Result = await Bonanza_Log.find(query).lean().exec()
                for (let Bonanza_Data of Result) {
                    let Bonanza_Status = 4;
                    let Today = moment();
                    let Start_Date = moment(Bonanza_Data.Start_Date)//, config.Take_Date_Format).subtract(330, 'minutes');
                    let End_Date = moment(Bonanza_Data.End_Date)//, config.Take_Date_Format).subtract(330, 'minutes').add(1, 'day').subtract(1, 'ms');
                    if (Start_Date.isValid() && End_Date.isValid()) {
                        if (Start_Date.isBefore(Today) && End_Date.isAfter(Today)) {
                            Bonanza_Status = 1
                        } else if (End_Date.isBefore(Today)) {
                            Bonanza_Status = 2
                        }
                    }
                    let q1 = {
                        BonanzaID: Bonanza_Data.BonanzaID
                    };
                    let changes = {
                        $set: {
                            Bonanza_Status: Bonanza_Status,
                            updated_at: new Date()
                        }
                    };
                    let UpdateData = await Bonanza_Log.updateOne(q1, changes).lean().exec();
                    let BuyerUpdateData = await Buyer_Bonanza_Log.updateMany(q1, changes).lean().exec();
                }
                resolve('process completed')
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CronController.Expired_Offer_Credit_Amount_In_Company = () => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let now = new Date();
                let query = {
                    OfferStatus: 1,
                    Expiry_Date: {
                        $lte: now
                    }
                };
                let Expired_Offers_Data = await Buyer_Offer_Message.find(query).lean().exec();
                let ALL_EXPIRED_PROCESSING = CronController.All_Buyer_Expired_Offer_Company_Crediting_Process(Expired_Offers_Data);
                resolve({ success: true, extras: { Status: "Expired Offers Credited to Company Successfully" } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CronController.All_Buyer_Expired_Offer_Company_Crediting_Process = (Expired_Offers_Data) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                async.eachSeries(Expired_Offers_Data, async (OfferData, callback) => {
                    try {
                        let Buyer_Purchasing = await CronController.Buyer_Expired_Offer_Company_Crediting_Process(OfferData);
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, async (err) => {
                    if (err) reject(err);
                    resolve("All Buyer Processing Completed Successfully");
                });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}
CronController.Buyer_Expired_Offer_Company_Crediting_Process = (OfferData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let fndupdquery = {
                    OfferCode: OfferData.OfferCode
                };
                let fndupdchanges = {
                    $set: {
                        OfferStatus: 3, //Expired
                        updated_at: new Date()
                    }
                };
                let fndupdoptions = {
                    upsert: true,
                    setDefaultsOnInsert: true,
                    new: true
                };
                OfferData = await Buyer_Offer_Message.findOneAndUpdate(fndupdquery, fndupdchanges, fndupdoptions).lean();
                let BuyerData = await CommonController.Check_for_Buyer(OfferData);
                OfferData.Buyer_Name = BuyerData.Buyer_Name;
                OfferData.Buyer_CountryCode = BuyerData.Buyer_CountryCode;
                OfferData.Buyer_PhoneNumber = BuyerData.Buyer_PhoneNumber;
                let Amount = OfferData.Buyer_Deduction_Amount;
                let Data = {
                    LogID: uuid.v4(),
                    Type: 3, //Credited Buyer Offer Expired Amount
                    Amount: Amount,
                    Data: OfferData,
                    Time: new Date()
                };
                let SaveResult = await Company_Share_Logs(Data).save();
                let fquery = {

                };
                let fchanges = {
                    $inc: {
                        Available_Amount: Amount,
                        Total_Amount: Amount
                    }
                };
                let foptions = {
                    upsert: true,
                    setDefaultsOnInsert: true,
                    new: true
                };
                let UpdateData = await Company_Share.findOneAndUpdate(fquery, fchanges, foptions).lean();
                resolve("Buyer Processing Completed Successfully");
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CronController.Trimmer_Share_Distribution_For_Referal_Buyers = () => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let date = await CommonController.Common_Last_Day_Start_Date();
                let Trimer_DateID = date.toISOString();
                let fndupdquery = {
                    Date: date
                };
                let fndupdchanges = {
                    $set: {
                        Trimer_DateID: Trimer_DateID
                    }
                };
                let fndupdoptions = {
                    upsert: true,
                    setDefaultsOnInsert: true,
                    new: true
                };
                let Trimmer_Share_Data = await Trimer_Share.findOneAndUpdate(fndupdquery, fndupdchanges, fndupdoptions).select('-_id -__v').lean();
                if (Trimmer_Share_Data.Available_Amount > 0) {
                    let Eligible_BuyersData = await CommonController.Get_Eligible_Buyers_Cron();
                    let Not_ELigible_BuyersData = await CommonController.Get_Not_Eligible_Buyers_Cron();

                    let Divindent_Amount = (Trimmer_Share_Data.Available_Amount / BuyersData.length)

                    let PurchaseAmout_Updated = await CommonController.Adding_Amount_Into_Purchase_Wallet(Eligible_BuyersData, Divindent_Amount);

                    let ExpireeAmout_Updated = await CommonController.Adding_Amount_Into_Expire_Wallet(Not_ELigible_BuyersData, Divindent_Amount);


                    let cxData = {
                        msg: "Trimming Amount Share",
                        Amount: Trimmer_Share_Data.Available_Amount
                    }

                    let CData = {
                        LogID: uuid.v4(),
                        Type: 3, //Trimming AMount Share
                        Amount: Trimmer_Share_Data.Available_Amount,
                        Data: cxData,
                        Time: new Date()
                    };
                    let SaveCData = await Trimmer_Share_Wallet_Logs(CData).save();

                    let Trim_W_Changes = {
                        $inc: {
                            Available_Amount: Trimmer_Share_Data.Available_Amount * -1,
                            Withdrawn_Amount: Trimmer_Share_Data.Available_Amount
                        },
                        $set: {

                        }
                    }

                    let SKTW_Update = await Trimer_Share.update(fndupdquery, Trim_W_Changes)

                    resolve({ success: true, extras: { Status: "Trimmer share distribution functionality completed" } });

                } else {
                    resolve({ success: true, extras: { Status: "Trimmer share distribution functionality completed" } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


CronController.Trimmer_Share_Distribution_in_Buyers = () => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let date = await CommonController.Common_Last_Day_Start_Date();
                let Trimer_DateID = date.toISOString();
                let fndupdquery = {
                    Date: date
                };
                let fndupdchanges = {
                    $set: {
                        Trimer_DateID: Trimer_DateID
                    }
                };
                let fndupdoptions = {
                    upsert: true,
                    setDefaultsOnInsert: true,
                    new: true
                };
                let Trimmer_Share_Data = await Trimer_Share.findOneAndUpdate(fndupdquery, fndupdchanges, fndupdoptions).select('-_id -__v').lean();
                if (Trimmer_Share_Data.Available_Amount > 0) {
                    let fquery = {
                        Status: true,
                        Total_Amount: {
                            $lt: config.buyer_share_total_amount_limit
                        }
                    };
                    let All_Buyers_Data = await Buyers.find(fquery).select('-_id -__v -updated_at -Status -Point -Geometry -Delivery_Pricings').lean().exec();
                    if (All_Buyers_Data.length > 0) {
                        let ALL_Buyers_Share_Processing = await CronController.All_Buyers_Share_Amount_Processing(Trimmer_Share_Data, All_Buyers_Data);
                        let Timer_Share_Withdraw_Processing = await CronController.Trimmer_Share_Withdraw_from_Wallet_After_Distribution(Trimmer_Share_Data, All_Buyers_Data);
                        resolve({ success: true, extras: { Status: "Trimmer share distribution functionality completed" } });
                    } else {
                        
                        resolve({ success: true, extras: { Status: "Trimmer share distribution functionality completed" } });
                    }
                } else {
                    resolve({ success: true, extras: { Status: "Trimmer share distribution functionality completed" } });
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CronController.Trimmer_Share_Withdraw_from_Wallet_After_Distribution = (Trimmer_Share_Data, All_Buyers_Data) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let wquery = {
                    Trimer_DateID: Trimmer_Share_Data.Trimer_DateID
                };
                let wchanges = {
                    $inc: {
                        Available_Amount: Trimmer_Share_Data.Available_Amount * -1,
                        Withdrawn_Amount: Trimmer_Share_Data.Available_Amount,
                    }
                };
                let UpdatedStatus = await Trimer_Share.updateOne(wquery, wchanges).lean();
                let Data = {
                    LogID: uuid.v4(),
                    Trimer_DateID: Trimmer_Share_Data.Trimer_DateID,
                    Type: 2,
                    Amount: Trimmer_Share_Data.Available_Amount,
                    Data: {
                        Trimer_DateID: Trimmer_Share_Data.Trimer_DateID,
                        Trimmer_Date: Trimmer_Share_Data.Date,
                        All_Buyers_Data: All_Buyers_Data
                    },
                    Time: new Date()
                };
                let SaveResult = await Trimer_Share_Logs(Data).save();
                resolve("Successfully Processed the Trimer Withdraw in Wallet");
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CronController.All_Buyers_Share_Amount_Processing = (Trimmer_Share_Data, All_Buyers_Data) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let No_of_Buyers_Network = await All_Buyers_Data.length;
                let Each_Buyer_Amount = parseFloat(Trimmer_Share_Data.Available_Amount / No_of_Buyers_Network);
                async.eachSeries(All_Buyers_Data, async (item, callback) => {
                    try {
                        let Buyer_Share_Amount_Processing = await CronController.Buyer_Share_Amount_Processing(item.BuyerID, Each_Buyer_Amount, Trimmer_Share_Data, No_of_Buyers_Network);
                        callback();
                    } catch (error) {
                        callback(error);
                    }
                }, err => {
                    if (err) reject(err);
                    resolve("Successfully Processed All Buyers");
                })
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

CronController.Buyer_Share_Amount_Processing = (BuyerID, Amount, Trimmer_Share_Data, No_of_Buyers_Network) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Data = {
                    LogID: uuid.v4(),
                    BuyerID: BuyerID,
                    Type: 2, //Credit by Trimmer of Day
                    Amount: Amount,
                    Data: {
                        Amount: Amount,
                        Buyer_Name: "Trimming amount"
                        
                    },
                    Time: new Date()
                };
                let SaveResult = await Buyer_Share_Logs(Data).save();
                let query = {
                    BuyerID: BuyerID
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
                let UpdateData = await Buyers.findOneAndUpdate(query, changes, options).lean();
                resolve("Successfully Processed the Buyer Share in Wallets");
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

//-------------------------------------------CRON JOB-----------------------------
//--------------------------------------------------------------------------------
let Shop_Keepers_Trimmer_Share_Distribution_Shops = new cron.CronJob('5 0 * * *', async () => {
    try {
        // if (config.Whether_Production_Settings) {
        //Production
        let Request_Body = {
            "SECRETCODE": config.SECRETCODE
        };
        let Request_Options = {
            method: 'post',
            url: '/cron/Shop_Keepers_Trimmer_Share_Distribution_Shops',
            baseURL: config.hostname,
            data: Request_Body
        };
        let Response = await axios(Request_Options);
        let ResponseData = await Response.data;
        // }
    } catch (error) {
        console.error("Some Cron Error--------->", error);
    }
}, null, true, 'Asia/Kolkata');
Shop_Keepers_Trimmer_Share_Distribution_Shops.start();

let expired_offer_cron = new cron.CronJob('15 0 * * *', async () => {
    try {
        // if (config.Whether_Production_Settings) {
            //Production
            let Request_Body = {
                "SECRETCODE": config.SECRETCODE
            };
            let Request_Options = {
                method: 'post',
                url: '/cron/Expired_Offer_Credit_Amount_In_Company',
                baseURL: config.hostname,
                data: Request_Body
            };
            let Response = await axios(Request_Options);
            let ResponseData = await Response.data;
        // }
    } catch (error) {
        console.error("Some Cron Error--------->", error);
    }
}, null, true, 'Asia/Kolkata');
expired_offer_cron.start();

let Trimmer_Share_Distribution_For_Referal_Buyers = new cron.CronJob('5 0 * * *', async () => {
    try {
        // if (config.Whether_Production_Settings) {
        //Production
        let Request_Body = {
            "SECRETCODE": config.SECRETCODE
        };
        let Request_Options = {
            method: 'post',
            url: '/cron/Trimmer_Share_Distribution_For_Referal_Buyers',
            baseURL: config.hostname,
            data: Request_Body
        };
        let Response = await axios(Request_Options);
        let ResponseData = await Response.data;
        // }
    } catch (error) {
        console.error("Some Cron Error--------->", error);
    }
}, null, true, 'Asia/Kolkata');
Trimmer_Share_Distribution_For_Referal_Buyers.start();

let trimmer_distributer_cron = new cron.CronJob('5 0 * * *', async () => {
    try {
        // if (config.Whether_Production_Settings) {
            //Production
            let Request_Body = {
                "SECRETCODE": config.SECRETCODE
            };
            let Request_Options = {
                method: 'post',
                url: '/cron/Trimmer_Share_Distribution_in_Buyers',
                baseURL: config.hostname,
                data: Request_Body
            };
            let Response = await axios(Request_Options);
            let ResponseData = await Response.data;
        // }
    } catch (error) {
        console.error("Some Cron Error--------->", error);
    }
}, null, true, 'Asia/Kolkata');
trimmer_distributer_cron.start();

let Bonanza_live_complete = new cron.CronJob('0 0 * * *', async () => {
    try {
        let Request_Body = {
            "SECRETCODE": config.SECRETCODE
        };
        let Request_Options = {
            method: 'post',
            url: '/cron/Make_Bonanza_Live_Complete',
            baseURL: config.hostname,
            data: Request_Body
        };
        let Response = await axios(Request_Options);
        let ResponseData = await Response.data;
    } catch (error) {
        console.error("Some Cron Error--------->", error);
    }
}, null, true, 'Asia/Kolkata');
Bonanza_live_complete.start();

let Bonanza_Matrix_Calculation = new cron.CronJob('59 23 * * *', async () => {
    try {
        
        let Request_Body = {
            "SECRETCODE": config.SECRETCODE
        };
        let Request_Options = {
            method: 'post',
            url: '/cron/Buyer_Bonanza_Matrix_Calculation',
            baseURL: config.hostname,
            data: Request_Body
        };
        let Response = await axios(Request_Options);
        let ResponseData = await Response.data;
    } catch (error) {
        console.error("Some Cron Error--------->", error);
    }
}, null, true, 'Asia/Kolkata');
Bonanza_Matrix_Calculation.start();

export default CronController;