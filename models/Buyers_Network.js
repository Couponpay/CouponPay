import mongoose from 'mongoose';
const Buyers_Network = mongoose.Schema({
    BuyerID: { type: String, default: "" },
    Network_Number: { type: Number, default: 0 },
    Parent_BuyerID: { type: String, default: "root" },
    Buyer_Name: { type: String, default: "" },
    Buyer_CountryCode: { type: String, default: "" },
    Buyer_PhoneNumber: { type: String, default: "" },
    Network_Information: [{
        _id: false,
        BuyerID: { type: String, default: "" },
        Buyer_Name: { type: String, default: "" },
        Buyer_CountryCode: { type: String, default: "" },
        Buyer_PhoneNumber: { type: String, default: "" },
        Amount_Shared: {type: Number, default: 0}
    }],
    No_of_Network: { type: Number, default: 0 },
    Status: { type: Boolean, default: true },
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Buyers_Network" });
export default mongoose.model('Buyers_Network', Buyers_Network);