import mongoose from 'mongoose';
const Shop_Product_Stocks = mongoose.Schema({
    ShopID: { type: String, default: "" },
    ProductID: { type: String, default: "" },
    Shop_Available_Stock: { type: Number, default: 0 },
    Status: { type: Boolean, default: true }
}, { collection: "Shop_Product_Stocks" });
export default mongoose.model('Shop_Product_Stocks', Shop_Product_Stocks);