import mongoose from 'mongoose';
const Trimmer_Share_Wallet_Logs = mongoose.Schema({
    LogID: { type: String, default: "" },
    Type: { type: Number, default: 1 }, //1.Credited 2.Debited
    Amount: { type: Number, default: 0 },
    Data: {},
    Time: { type: Date, default: null }
}, { collection: "Trimmer_Share_Wallet_Logs" });
export default mongoose.model('Trimmer_Share_Wallet_Logs', Trimmer_Share_Wallet_Logs);