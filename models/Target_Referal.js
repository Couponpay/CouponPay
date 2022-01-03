import mongoose from 'mongoose';
const Target_Referal = mongoose.Schema({
    Target_ReferalID: { type: String, default: "" },
    SNo: { type: Number, default: 0 },
    Target_Referal: { type: Number, default: 0 },
    Wallet_Limit: { type: Number, default: 0 },
    Status: { type: Boolean, default: true },
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Target_Referal" });
export default mongoose.model('Target_Referal', Target_Referal);