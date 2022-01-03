import mongoose from 'mongoose';
const GST_Serv_Stroe_Share_Wallet_Logs = mongoose.Schema({
    LogID: { type: String, default: "" },
    Type: { type: Number, default: 1 }, //1.Credited 2.Debited
    Amount: { type: Number, default: 0 },
    Data: {},
    Time: { type: Date, default: null }
}, { collection: "GST_Serv_Stroe_Share_Wallet_Logs" });
export default mongoose.model('GST_Serv_Stroe_Share_Wallet_Logs', GST_Serv_Stroe_Share_Wallet_Logs);