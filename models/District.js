import mongoose from 'mongoose';
const Districts = mongoose.Schema({
    DistrictID: { type: String, default: "" },
    StateID: { type: String, default: "" },
    BuyerID: { type: String, default: "" },
    District_Name: { type: String, default: "" },
    SNo:{ type: Number, default: 0 },
    District_Status:{ type: Number, default: 0 }, //0:Inititated,1:Intransaction,2:Purchased
    Status: { type: Boolean, default: true },
    Up_Time :{ type: Date, default: Date.now() },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() }
}, { collection: "Districts" });
export default mongoose.model('Districts', Districts);