import mongoose from 'mongoose';
const Order_OTP_Tries = mongoose.Schema({
    OrderID: { type: String, default: "" },
    Time: { type: Date, default: null }
}, { collection: "Order_OTP_Tries" })
export default mongoose.model('Order_OTP_Tries', Order_OTP_Tries);