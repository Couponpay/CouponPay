const mongoose = require("mongoose");
const Orders = new mongoose.Schema({
    OrderID: { type: String, default: "" },
    Order_Number: { type: String, default: "" },
    Unique_CartID: { type: String, default: "" },
    BuyerID: { type: String, default: "" },
    Users_ShopsID:{type:String,default:""},
    Products_Data: [{
        ProductID: { type: String, default: "" },
        Product_Name: { type: String, default: "" },
        Quantity: { type: Number, default: 0 },
        Weight: { type: Number, default: 0 },
    }],
    PincodeID : { type: String, default: "" },
    Order_DeleveryType:{ type: Number, default: 1 },// 1. Self pickup 2.Door Delivery
    Delivery_Address: {
        AddressID: { type: String, default: "" },
        BuyerID: { type: String, default: "" },
        Name: { type: String, default: "" },
        Street: { type: String, default: "" },
        Landmark: { type: String, default: "" },
        PinCode: { type: Number, default: 0 },
        House_Flat_Block_NO: { type: String, default: "" },
        Address_Type: { type: Number, default: 0 }, //1- Home, 2- Work, 3- Other
        Address_Default: { type: Boolean, default: false },
        Address: { type: String, default: "" },
        Latitude: { type: Number, default: 0 },
        Longitude: { type: Number, default: 0 },
        PhoneNumber: { type: String, default: "" },
        StateID: { type: String, default: "" },
        DistrictID: { type: String, default: "" },
    },
    Total_Amount:{type:Number,default:0},
    Device_Information: {
        DeviceID: { type: String, default: "" },
        DeviceType: { type: Number, default: 1 },//1. Android 2.IOS 3.Web
        DeviceName: { type: String, default: "" },
        AppVersion: { type: Number, default: 0 },
        IPAddress: { type: String, default: "" }
    },
    Payment_Status: { type: Number, default: 0 }, //0. not paid, // 1- initial, 2- fail, 3- Success, 4.COD
    Payment_Type: { type: Number, default: 0 }, //1. COD 2.Razorpay
    PaymentID: { type: String, default: "" },
    PaymentData: {},
    Buyer_Shop_request_ID:{ type: String, default: "" },
    Payment_Time: { type: Date, default: null },
    TransactionID: { type: String, default: "" },
    Order_Status: { type: Number, default: 1 },//1.initiated 2.Payment Initiated 3.complted
    Order_Status_Logs: [
        {
            _id: false,
            LogID: { type: String, default: "" },
            Order_Status: { type: Number, default: 1 },
            Title: { type: String, default: "" },
            Comment: { type: String, default: "" },
            Time: { type: Date, default: null },
        },
    ],
    WebHookData: {},

    Share_Amount: { type: Number, default: 0 },

    Cart_Total_Items: { type: Number, default: 1 },
    Total_Cart_Quantity: { type: Number, default: 1 },
    Total_Cart_Weight: { type: Number, default: 1 },

    Order_Report: [{
        _id: false,
        Title: { type: String, default: "" },
        Description: { type: String, default: "" },
        Time: { type: Date, default: null }
    }],
    Status: { type: Boolean, default: true },
}, { collection: 'Orders', timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
module.exports = mongoose.model('Orders', Orders);