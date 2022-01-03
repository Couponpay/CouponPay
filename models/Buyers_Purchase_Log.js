import mongoose from 'mongoose';
const Buyers_Purchase_Log = mongoose.Schema({
    PurchaseID: { type: String, default: "" },
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
    Cart_Final_Price: { type: Number, default: 0 }, // Cart_Total_Price + GST
    Cart_Information: {
        Coupons_ProductID: { type: String, default: "" },
        C_Product_Name: { type: String, default: "" },

        C_Product_Description: { type: String, default: "" },
        C_Product_Price: { type: Number, default: 0 },
        C_Product_Image_Available: { type: Boolean, default: false },
        C_Product_Image_Data: {
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
        C_Product_HST: { type: Number, default: 0 },
        C_Product_GST: { type: Number, default: 0 }, // should be in percent %
        C_Product_GST_Amount: { type: Number, default: 0 },

        Cash_Coupons_Share: { type: Number, default: 0 },
        Purchace_Coupons_Share: { type: Number, default: 0 },
        Gift_Coupons_Share: { type: Number, default: 0 },
        Update_Coupons_Share: [Number],
    },
    WebHookData: {},

    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Buyers_Purchase_Log" });
export default mongoose.model('Buyers_Purchase_Log', Buyers_Purchase_Log);