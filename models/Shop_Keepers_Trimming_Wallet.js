import mongoose from 'mongoose';
const Shop_Keepers_Trimming_Wallet = mongoose.Schema({
    Available_Amount: { type: Number, default: 0 },
    Withdrawn_Amount: { type: Number, default: 0 },
    Total_Amount: { type: Number, default: 0 },
}, { collection: "Shop_Keepers_Trimming_Wallet" });
export default mongoose.model('Shop_Keepers_Trimming_Wallet', Shop_Keepers_Trimming_Wallet);