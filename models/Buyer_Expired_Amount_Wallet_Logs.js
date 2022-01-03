import mongoose from 'mongoose';
const Buyer_Expired_Amount_Wallet_Logs = mongoose.Schema({
    LogID: { type: String, default: "" },
    BuyerID: { type: String, default: "" },
    Type: { type: Number, default: 1 }, //1.Credited 2.Debited 3.Credited from Expire Form Box Sharing 
    Amount: { type: Number, default: 0 },
    Data: {},
    Time: { type: Date, default: null }
}, { collection: "Buyer_Expired_Amount_Wallet_Logs" });
export default mongoose.model('Buyer_Expired_Amount_Wallet_Logs', Buyer_Expired_Amount_Wallet_Logs);