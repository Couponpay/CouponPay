import mongoose from 'mongoose';
const Shops = mongoose.Schema({
    ShopID: { type: String, default: "" },
    SessionID: { type: String, default: "" },
    IntroducerID: { type: String, default: "" },
    Shop_Name: { type: String, default: "" },
    Shop_CountryCode: { type: String, default: "" },
    Shop_PhoneNumber: { type: String, default: "" },
    Shop_Password: { type: String, default: "" },
    Available_Amount: { type: Number, default: 0 },
    Withdrawn_Amount: { type: Number, default: 0 },
    Total_Amount: { type: Number, default: 0 },
    GST_Number: { type: String, default: "" }, 
    Status: { type: Boolean, default: true },
    Latitude: Number,
    Longitude: Number,
    Point: {
        type: [Number],
        index: '2d'
    },
    Address:{type: String, default: "" },
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Shops" });
Shops.index({ Point: '2dsphere' });
export default mongoose.model('Shops', Shops);