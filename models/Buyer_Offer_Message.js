import mongoose from 'mongoose';
const Buyer_Offer_Message = mongoose.Schema({
    BuyerID: { type: String, default: "" },
    MessageID: { type: String, default: "" },
    Type: { type: Number, default: 1 }, //1. All Shops 2.Based on Shop 3.Direct Buyer
    Whether_Shop: { type: Boolean, default: false },
    ShopID: { type: String, default: "" }, //Only based on shop
    OfferCode: { type: String, default: "" },
    Message: { type: String, default: "" },
    Offer_Message: { type: String, default: "" },
    Buyer_Min_Amount: { type: Number, default: 0 },
    Buyer_Max_Amount: { type: Number, default: 0 },
    Buyer_Deduction_Amount: { type: Number, default: 0 },
    OfferStatus: { type: Number, default: 1 }, //1. Available 2. Redeemed 3. Expired
    Whether_Offer_Applied: { type: Boolean, default: false },
    Applied_Shop_Details: {
        ShopID: { type: String, default: "" },
        Shop_Name: { type: String, default: "" },
        Shop_CountryCode: { type: String, default: "" },
        Shop_PhoneNumber: { type: String, default: "" },
    },
    Expiry_Date: { type: Date, default: null },
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Buyer_Offer_Message" });
export default mongoose.model('Buyer_Offer_Message', Buyer_Offer_Message);