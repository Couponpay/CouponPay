import mongoose from 'mongoose';
const Buyer_Box_Product_Purchased_Logs = mongoose.Schema({
    Box_Product_PurchaseID: { type: String, default: "" },
    BuyerID: { type: String, default: "" },
    Amount_Paid: {
        Amount_Used_From_Wallet: { type: Number, default: 0 },
        Amount_Paid_Online: { type: Number, default: 0 },
        Total_Amount_Paid: { type: Number, default: 0 }
    },
    Payment_Type: { type: Number, default: 0 }, //1- Wallet, 2- RazorPay 3- both 4- Shop Payment
    Purchase_Number: { type: String, default: "" }, // 12 digits random number
    Payment_Status: { type: Number, default: 0 }, // 1- initial, 2- fail, 3- Success, 4- Shop Payment
    TransactionID: { type: String, default: "" },
    Cart_Final_Price: { type: Number, default: 0 }, 
    Cart_Information: {
        Product_Name: { type: String, default: "" },
        Description: { type: String, default: "" },
        Price: { type: Number, default: 0 },
        Image_Available: { type: Boolean, default: false },
        Image_Data: {
            _id: false,
            SNo: { type: Number, default: 0 },
            ImageID: { type: String, default: "" },
            Image50: { type: String, default: "" },
            Image100: { type: String, default: "" },
            Image250: { type: String, default: "" },
            Image550: { type: String, default: "" },
            Image900: { type: String, default: "" },
            ImageOriginal: { type: String, default: "" }
        },
        Box_One: {
            Cash_Percent: { type: Number, default: 0 },
            Purchace_Percent: { type: Number, default: 0 },
            Gift_Percent: { type: Number, default: 0 },
            Upgrade_Coupon_Percent: { type: Number, default: 0 },
            Nine_Level_Percent: { type: Number, default: 0 },
        },
        Box_Two: {
            Cash_Percent: { type: Number, default: 0 },
            Purchace_Percent: { type: Number, default: 0 },
            Gift_Percent: { type: Number, default: 0 },
            Upgrade_Coupon_Percent: { type: Number, default: 0 },
            Nine_Level_Percent: { type: Number, default: 0 },
        },
        Box_Three: {
            Cash_Percent: { type: Number, default: 0 },
            Purchace_Percent: { type: Number, default: 0 },
            Gift_Percent: { type: Number, default: 0 },
            Upgrade_Coupon_Percent: { type: Number, default: 0 },
            Nine_Level_Percent: { type: Number, default: 0 },
        },
    },
    WebHookData: {},
    Delivery_Address_Information:{},
    Order_Status: { type: Number, default: 0 }, //1- started, 2- cancelled, 3- completed 4- Cancelled by admin
    Order_Report: [{
        _id: false,
        Title: { type: String, default: "" },
        Description: { type: String, default: "" },
        Time: { type: Date, default: null }
    }],

    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Buyer_Box_Product_Purchased_Logs" });
export default mongoose.model('Buyer_Box_Product_Purchased_Logs', Buyer_Box_Product_Purchased_Logs);