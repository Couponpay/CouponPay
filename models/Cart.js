const mongoose = require("mongoose");
const Cart = new mongoose.Schema({
    CartID: { type: String, default: "" },
    DeviceID: { type: String, default: "" },
    Unique_CartID: { type: String, default: "" },
    BuyerID: { type: String, default: "" },
    Cart_Total_Items: { type: Number, default: 0 },
    Products_Data: [{
        ProductID: { type: String, default: "" },
        Product_Name: { type: String, default: "" },
        Weight: { type: Number, default: 0 },
        Quantity: { type: Number, default: 0 }
    }],
    Status: { type: Boolean, default: true },
}, { collection: 'Cart', timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
module.exports = mongoose.model('Cart', Cart);