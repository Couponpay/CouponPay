import mongoose from 'mongoose';
const Buyer_Address_Log = mongoose.Schema({
    AddressID: { type: String, default: "" },
    BuyerID: { type: String, default: "" },
    Name: { type: String, default: "" },
    PhoneNumber: { type: String, default: '' },
    Flat_No: { type: String, default: "" },
    Plot_No: { type: String, default: "" },
    Postal_Code: { type: Number, default: 0 },
    State: { type: String, default: "" },
    City: { type: String, default: "" },
    Land_Mark: { type: String, default: "" },
    Address_Type: { type: Number, default: 0 }, //1- Home, 2- Work, 3- Other
    Address_Default: { type: Boolean, default: false },
    Status: { type: Boolean, default: false },
    Latitude: Number,
    Longitude: Number,
    Point: {
        type: [Number],
        index: '2d'
    },
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Buyer_Address_Log" });
Buyer_Address_Log.index({ Point: '2dsphere' });
export default mongoose.model('Buyer_Address_Log', Buyer_Address_Log);