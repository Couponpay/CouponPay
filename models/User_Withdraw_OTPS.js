import mongoose from 'mongoose';
const User_Withdraw_OTPS = mongoose.Schema({
    CountryCode: { type: String, default: "" },
    PhoneNumber: { type: String, default: "" },
    OTP: { type: Number, default: 0 },
    Latest: { type: Boolean, default: true },
    Time: { type: Date, default: null }
}, { collection: "User_Withdraw_OTPS" });
export default mongoose.model('User_Withdraw_OTPS', User_Withdraw_OTPS);