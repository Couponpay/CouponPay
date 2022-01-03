import mongoose from 'mongoose';
const Buyers_Ultimate_Network = mongoose.Schema({
    BuyerID: { type: String, default: "" },
    Network_Number: { type: Number, default: 0 },
    Parent_BuyerID: { type: String, default: "root" },
    Buyer_Name: { type: String, default: "" },
    Buyer_CountryCode: { type: String, default: "" },
    Buyer_PhoneNumber: { type: String, default: "" },
    Network_BuyerID_Array: { type: [String], default: [] },
    // Whether_Company_Account: { type: Boolean, default: false },
    Network_Information: [{
        _id: false,
        BuyerID: { type: String, default: "" },
        Buyer_Name: { type: String, default: "" },
        Buyer_CountryCode: { type: String, default: "" },
        Buyer_PhoneNumber: { type: String, default: "" },
    }],
    No_of_Network: { type: Number, default: 0 },
    Current_Box: { type: Number, default: 0 },
    Current_Box_Count: { type: Number, default: 0 },
    Box_Amount_Data: [{
        BuyerID: { type: String, default: '' },
        Expired_Amount: { type: Number, default: 0 },
        Cash_Coupons_Amount: { type: Number, default: 0 },
        Purchace_Coupons_Amount: { type: Number, default: 0 },
        Gift_Coupons_Amount: { type: Number, default: 0 },
        Update_Coupons_Amount: { type: Number, default: 0 },
        Time: { type: Date, default: null },
    }],
    Status: { type: Boolean, default: true },
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Buyers_Ultimate_Network" });
export default mongoose.model('Buyers_Ultimate_Network', Buyers_Ultimate_Network);