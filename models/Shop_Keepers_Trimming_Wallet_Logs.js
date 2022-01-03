import mongoose from 'mongoose';
const Shop_Keepers_Trimming_Wallet_Logs = mongoose.Schema({
    LogID: { type: String, default: "" },
    Type: { type: Number, default: 1 }, //1.Credited 2.Debited
    Amount: { type: Number, default: 0 },
    Data: {},
    Time: { type: Date, default: null }
}, { collection: "Shop_Keepers_Trimming_Wallet_Logs" });
export default mongoose.model('Shop_Keepers_Trimming_Wallet_Logs', Shop_Keepers_Trimming_Wallet_Logs);