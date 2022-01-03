import mongoose from 'mongoose';
const States = mongoose.Schema({
    StateID: { type: String, default: "" },
    BuyerID: { type: String, default: "" },
    State_Name: { type: String, default: "" },
    SNo:{ type: Number, default: 0 },
    Status: { type: Boolean, default: true },
    State_Status:{ type: Number, default: 0 }, //0:Inititated,1:Intransaction,2:Purchased
    Up_Time :{ type: Date, default: Date.now() },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() }
}, { collection: "States" });
export default mongoose.model('States', States);