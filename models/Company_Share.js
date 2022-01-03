import mongoose from 'mongoose';
const Company_Share = mongoose.Schema({
    Available_Amount: { type: Number, default: 0 },
    Withdrawn_Amount: { type: Number, default: 0 },
    Total_Amount: { type: Number, default: 0 },
}, { collection: "Company_Share" });
export default mongoose.model('Company_Share', Company_Share);