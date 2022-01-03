import mongoose from 'mongoose';
const Shop_Product_Stock_Logs = mongoose.Schema({
    ReferenceID: { type: String, default: "" },
    ShopID: { type: String, default: "" },
    ProductID: { type: String, default: "" },
    OperationType: { type: Number, default: 1 }, //1. Cash Purchase 2.Substraction for Bill 3. App Purchase Cost
    OperationInput: { type: Number, default: 0 },
    Data: {},//Log Data only for BillData or App Purchase Stocks
    Status: { type: Boolean, default: true },
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Shop_Product_Stock_Logs" });
export default mongoose.model('Shop_Product_Stock_Logs', Shop_Product_Stock_Logs);