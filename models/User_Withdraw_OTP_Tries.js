import mongoose from 'mongoose';
const User_Withdraw_OTP_Tries = mongoose.Schema({
    CountryCode: { type: String, default: "" },
    PhoneNumber: { type: String, default: "" },
    Time: { type: Date, default: null }
}, { collection: "User_Withdraw_OTP_Tries" })
export default mongoose.model('User_Withdraw_OTP_Tries', User_Withdraw_OTP_Tries);