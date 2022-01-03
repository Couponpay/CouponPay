import mongoose from 'mongoose';
const Trimer_Share = mongoose.Schema({
    Trimer_DateID: { type: String, default: "" },
    Date: { type: Date, default: null }, //IST format Date
    Available_Amount: { type: Number, default: 0 },
    Withdrawn_Amount: { type: Number, default: 0 },
    Total_Amount: { type: Number, default: 0 },
}, { collection: "Trimer_Share" });
export default mongoose.model('Trimer_Share', Trimer_Share);