import mongoose from 'mongoose';
const GST_Serv_Stroe_Share_Wallet = mongoose.Schema({
    Available_Amount: { type: Number, default: 0 },
    Withdrawn_Amount: { type: Number, default: 0 },
    Total_Amount: { type: Number, default: 0 },
}, { collection: "GST_Serv_Stroe_Share_Wallet" });
export default mongoose.model('GST_Serv_Stroe_Share_Wallet', GST_Serv_Stroe_Share_Wallet);