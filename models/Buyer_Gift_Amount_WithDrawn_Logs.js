import mongoose from 'mongoose';
const Buyer_Gift_Amount_WithDrawn_Logs = mongoose.Schema({
    LogID: { type: String, default: "" },
    BuyerID: { type: String, default: "" },
    Gift_MeterID: { type: String, default: "" },
    // Type: { type: Number, default: 1 }, //1. Credited from Razorpay
    Amount: { type: Number, default: 0 },
    Request_Status: { type: Number, default: 0 },
    Type: { type: Number, default: 0 },
    Data: {},
    Time: { type: Date, default: null }
}, { collection: "Buyer_Gift_Amount_WithDrawn_Logs" });
export default mongoose.model('Buyer_Gift_Amount_WithDrawn_Logs', Buyer_Gift_Amount_WithDrawn_Logs);