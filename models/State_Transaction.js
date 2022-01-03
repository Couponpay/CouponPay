import mongoose from 'mongoose';
const State_Transaction = mongoose.Schema({
    State_TransactionID: {type:String,default:""},
    StateID: { type: String, default: "" },
    BuyerID: { type: String, default: "" },
    TransactionID:{ type: String, default: "" },
    Total_Amount:{ type: Number, default: 0 },
    Status: { type: Boolean, default: true },
    Payment_Status: { type: Number, default: 0 }, // 1- initial, 2- fail, 3- Success,
    WebHookData: {},
    Payment_Type: { type: Number, default: 0 }, //1- Wallet, 2- RazorPay 3- both
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() }
}, { collection: "State_Transaction" });
export default mongoose.model('State_Transaction', State_Transaction);