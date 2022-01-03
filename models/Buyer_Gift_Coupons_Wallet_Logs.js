import mongoose from 'mongoose';
const Buyer_Gift_Coupons_Wallet_Logs = mongoose.Schema({
    LogID: { type: String, default: "" },
    BuyerID: { type: String, default: "" },
    Type: { type: Number, default: 1 }, //1.Credited 2.Debited
    Amount: { type: Number, default: 0 },
    Data: {},
    Time: { type: Date, default: null }
}, { collection: "Buyer_Gift_Coupons_Wallet_Logs" });
export default mongoose.model('Buyer_Gift_Coupons_Wallet_Logs', Buyer_Gift_Coupons_Wallet_Logs);