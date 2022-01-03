import mongoose from 'mongoose';
const Order_OTPS = mongoose.Schema({
    Request_Id: { type: String, default: "" },
    BuyerID: { type: String, default: "" },
    Users_ShopsID: { type: String, default: "" },
    Buyer_PhoneNumber: { type: String, default: "" },
    OrderID:{type:String,default:""},
    OTP: { type: Number, default: 0 },
    Total_Amount: { type: Number, default: 0 },
    Latest: { type: Boolean, default: true },
    Time: { type: Date, default: null }
}, { collection: "Order_OTPS" });
export default mongoose.model('Order_OTPS', Order_OTPS);