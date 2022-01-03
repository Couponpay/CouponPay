import mongoose from 'mongoose';
const Company_Shop_Purhase_Share = mongoose.Schema({
    Available_Amount: { type: Number, default: 0 },
    Withdrawn_Amount: { type: Number, default: 0 },
    Total_Amount: { type: Number, default: 0 },
}, { collection: "Company_Shop_Purhase_Share" });
export default mongoose.model('Company_Shop_Purhase_Share', Company_Shop_Purhase_Share);