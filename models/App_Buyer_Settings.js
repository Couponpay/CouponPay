import mongoose from 'mongoose';
const App_Buyer_Settings = mongoose.Schema({
    Razorpay_Processing_Fee_Percentage: { type: Number, default: 3 },
    Minimum_Withdraw_Transaction_Amount: { type: Number, default: 100 },//1K
    Maximum_Withdraw_Transaction_Amount: { type: Number, default: 100000 }//1 Lakh
}, { collection: 'App_Buyer_Settings' });
export default mongoose.model('App_Buyer_Settings', App_Buyer_Settings);