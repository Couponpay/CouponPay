import mongoose from 'mongoose';
const Buyer_Shop_requests_Notification = mongoose.Schema({
    Buyer_Shop_request_ID: { type: String, default: "" },
    Users_ShopsID: { type: String, default: "" },
    BuyerID: { type: String, default: "" },
    Shop_BuyerID: { type: String, default: "" },
    Coupons_CategoryID: { type: String, default: "" },
    Total_Amount: { type: Number, default: 0 },
    Share_Amount: { type: Number, default: 0 },
    Payment_Type: { type: Number, default: 0 },
    Buyer_Payment_Type: { type: Number, default: 0 },
    Request_Status: { type: Number, default: 0 }, //1.pending 2.cancelled 3.Approved
    Buyer_Request_Status: { type: Number, default: 0 }, //1.pending 2.cancelled 3.Approved
    Shop_Payment_Status: { type: Number, default: 0 }, // 1- initial, 2- fail, 3- Success, 4- Shop Payment
    Buyer_Payment_Status: { type: Number, default: 0 }, // 1- initial, 2- fail, 3- Success, 4- Shop Payment
    TransactionID: { type: String, default: "" },
    Buyer_TransactionID: { type: String, default: "" },
    IsOrderOnline: { type: Boolean, default: false },
    OrderID: { type: String, default: "" },
    Amount_Paid: {
        Amount_Used_From_Wallet: { type: Number, default: 0 },
        Amount_Paid_Online: { type: Number, default: 0 },
        Total_Amount: { type: Number, default: 0 },
        Total_Amount_Paid: { type: Number, default: 0 }
    },
    Buyer_Amount_Paid: {
        Amount_Used_From_Wallet: { type: Number, default: 0 },
        Amount_Used_From_Purchase_Wallet: { type: Number, default: 0 },
        Amount_Paid_Online: { type: Number, default: 0 },
        Total_Amount: { type: Number, default: 0 },
        Total_Amount_Paid_From_Wallet: { type: Number, default: 0 },
        Remaining_Cash_Amount: { type: Number, default: 0 },
    },
    WebHookData: {}, //shop webhook data
    Buyer_WebHookData: {},

    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Buyer_Shop_requests_Notification" });
export default mongoose.model('Buyer_Shop_requests_Notification', Buyer_Shop_requests_Notification); 