import mongoose from 'mongoose';
const Coupon_Products = mongoose.Schema({
    Coupons_ProductID: { type: String, default: "" },
    C_Product_Name: { type: String, default: "" },

    C_Product_Description: { type: String, default: "" },
    C_Product_Weight: { type: Number, default: 1 },
    C_Product_Price: { type: Number, default: 0 },
    SNo: { type: Number, default: 0 },
    // Coupons_Product_Price_Divisions: {
    //     Introducer_Share: { type: Number, default: 0 },
    //     Buyer_Share: { type: Number, default: 0 },
    //     Shop_Share: { type: Number, default: 0 },
    //     Company_Share: { type: Number, default: 0 }
    // },
    // Coupons_Product_Price_Data: {
    //     Introducer_Price: { type: Number, default: 0 },
    //     Buyer_Price_Array: [Number],
    //     Buyer_Price: { type: Number, default: 0 },
    //     Shop_Price: { type: Number, default: 0 },
    //     Company_Price: { type: Number, default: 0 }
    // },
    C_Product_Image_Data: {
        ImageID: { type: String, default: "" },
        Image50: { type: String, default: "" },
        Image100: { type: String, default: "" },
        Image250: { type: String, default: "" },
        Image550: { type: String, default: "" },
        Image900: { type: String, default: "" },
        ImageOriginal: { type: String, default: "" }
    },
    C_Product_Image_Available: { type: Boolean, default: false },
    // C_Product_Image_Data: {
    //     _id: false,
    //     SNo: { type: Number, default: 0 },
    //     ImageID: { type: String, default: "" },
    //     Image50: { type: String, default: "" },
    //     Image100: { type: String, default: "" },
    //     Image250: { type: String, default: "" },
    //     Image550: { type: String, default: "" },
    //     Image900: { type: String, default: "" },
    //     ImageOriginal: { type: String, default: "" }
    // },
    C_Product_HST: { type: Number, default: 0 },
    C_Product_GST: { type: Number, default: 0 }, // should be in percent %
    C_Product_Quantity: { type: Number, default: 0 },

    C_Quantity_Update_by: { type: String, default: "" },
    C_Quantity_Update_at: { type: Date, default: null },
    C_Trending_Available: { type: Boolean, default: false },

    Cash_Coupons_Share: { type: Number, default: 0 },
    Purchace_Coupons_Share: { type: Number, default: 0 },
    Gift_Coupons_Share: { type: Number, default: 0 },
    Update_Coupons_Share: [Number],

    Status: { type: Boolean, default: true },
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Coupon_Products" });
export default mongoose.model('Coupon_Products', Coupon_Products);