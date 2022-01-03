const mongoose = require("mongoose");
const User_Address = new mongoose.Schema({
    AddressID: { type: String, default: "" },
    StateID: { type: String, default: "" },
    DistrictID: { type: String, default: "" },
    BuyerID: { type: String, default: "" },
    Name: { type: String, default: "" },
    Street: { type: String, default: "" },
    Landmark: { type: String, default: "" },
    PhoneNumber: { type: String, default: "" },
    PinCode: { type: Number, default: 0 },
    House_Flat_Block_NO: { type: String, default: "" },
    Address_Type: { type: Number, default: 0 }, //1- Home, 2- Work, 3- Other
    Address_Default: { type: Boolean, default: false },
    Address: { type: String, default: "" },
    Latitude: { type: Number, default: 0 },
    Longitude: { type: Number, default: 0 },
    Point: {
        type: [Number],
        index: '2d'
    },
    Status: { type: Boolean, default: false },
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: 'User_Address', timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
User_Address.index({ Point: '2dsphere' });
module.exports = mongoose.model('User_Address', User_Address);