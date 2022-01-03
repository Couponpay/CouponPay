import mongoose from 'mongoose';
const Company_Shop_Purhase_Share_Logs = mongoose.Schema({
    LogID: { type: String, default: "" },
    Type: { type: Number, default: 1 }, //1.Shop Purchase Credited
    Amount: { type: Number, default: 0 },
    Data: {},
    Time: { type: Date, default: null }
}, { collection: "Company_Shop_Purhase_Share_Logs" });
export default mongoose.model('Company_Shop_Purhase_Share_Logs', Company_Shop_Purhase_Share_Logs);