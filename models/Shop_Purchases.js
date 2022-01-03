import mongoose from 'mongoose';
const Shop_Purchases = mongoose.Schema({
    PurchaseID: { type: String, default: "" },
    PurchaseNumber: { type: String, default: "" },
    ShopID: { type: String, default: "" },
    Cart_Information: [{
        _id: false,
        ProductID: { type: String, default: "" },
        Product_Name: { type: String, default: "" },
        Product_Price: { type: Number, default: 0 },
        Product_Price_Divisions: {
            Introducer_Share: { type: Number, default: 0 },
            Buyer_Share: { type: Number, default: 0 },
            //Trimer_Share: { type: Number, default: 0 },
            Shop_Share: { type: Number, default: 0 },
            Company_Share: { type: Number, default: 0 }
        },
        Product_Quantity: { type: Number, default: 0 },
        Product_Sub_Total: { type: Number, default: 0 }
    }],
    Total_Amount: { type: Number, default: 0 },
    PurchaseStatus: { type: Number, default: 1 },//1. Order Placed 2.Order Accepted 3.Order Shipped 4.Shippment Notifications 5. Order Delivered 6. Stock Purchased at Dogemo
    PurchaseLogs: [{
        _id: false,
        PurchaseStatus: { type: Number, default: 1 },
        Description: { type: String, default: "" },
        Time: { type: Date, default: null }
    }],
    Status: { type: Boolean, default: true },
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Shop_Purchases" });
export default mongoose.model('Shop_Purchases', Shop_Purchases);