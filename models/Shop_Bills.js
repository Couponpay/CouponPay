import mongoose from 'mongoose';
const Shop_Bills = mongoose.Schema({
    BillID: { type: String, default: "" },
    BillNumber: { type: String, default: "" },
    ShopID: { type: String, default: "" },
    BuyerID: { type: String, default: "" },
    Cart_Information: [{
        _id: false,
        ProductID: { type: String, default: "" },
        Product_Name: { type: String, default: "" },
        Product_Price: { type: Number, default: 0 },
        Product_Price_Divisions: {
            Introducer_Share: { type: Number, default: 0 },
            Buyer_Share: { type: Number, default: 0 },
            Shop_Share: { type: Number, default: 0 },
            Company_Share: { type: Number, default: 0 }
        },
        Product_Quantity: { type: Number, default: 0 },
        Product_Sub_Total: { type: Number, default: 0 },
        Total_Product_Share_Distributed_Amount: { //Including All Quantities
            Introducer_Amount: { type: Number, default: 0 },
            Buyer_Amount: { type: Number, default: 0 },
            //Trimer_Amount: { type: Number, default: 0 },
            Shop_Amount: { type: Number, default: 0 },
            Company_Amount: { type: Number, default: 0 },
            Buyer_Amount_Array: [Number]
        },
    }],
    Total_Amount: { type: Number, default: 0 },
    Buyers_Share_Distribution: {
        No_of_Buyers_Network: { type: Number, default: 0 },
        Buyers_Network_Data: { type: [String], default: [] }
    },
    Status: { type: Boolean, default: true },
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Shop_Bills" });
export default mongoose.model('Shop_Bills', Shop_Bills);