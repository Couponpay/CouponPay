import mongoose from 'mongoose';
const Pincodes = mongoose.Schema({
    PincodeID: { type: String, default: "" },
    StateID: { type: String, default: "" },
    DistrictID: { type: String, default: "" },
    Pincode: { type: String, default: "" },
    SNo:{ type: Number, default: 0 },
    Pincode_Status:{ type: Number, default: 0 }, //0:Inititated,1:Intransaction,2:Purchased
    Up_Time: { type: Date, default: Date.now() },
    Status: { type: Boolean, default: true },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() }
}, { collection: "Pincodes" });
export default mongoose.model('Pincodes', Pincodes);