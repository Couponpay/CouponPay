import mongoose from 'mongoose';
const Offer_Messages = mongoose.Schema({
    MessageID: { type: String, default: "" },
    Type: { type: Number, default: 1 }, //1. All Shops 2.Based on Shop 3.Direct Buyer
    Whether_Shop: { type: Boolean, default: false },
    ShopID: { type: String, default: "" }, //Only based on shop
    Buyers_Information: [{
        _id: false,
        BuyerID: { type: String, default: "" },
        Buyer_Name: { type: String, default: "" },
        Buyer_CountryCode: { type: String, default: "" },
        Buyer_PhoneNumber: { type: String, default: "" },
    }], //Direct Buyer
    Buyer_Min_Amount: { type: Number, default: 0 },
    Buyer_Max_Amount: { type: Number, default: 0 },
    Buyer_Deduction_Amount: { type: Number, default: 0 },
    Message: { type: String, default: "" },
    Expiry_Date: { type: Date, default: null },
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Offer_Messages" });
export default mongoose.model('Offer_Messages', Offer_Messages);