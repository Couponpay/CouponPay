import mongoose from 'mongoose';
const Products = mongoose.Schema({
    ProductID: { type: String, default: "" },
    Unique_ProductID: { type: String, default: "" },
    Product_Name: { type: String, default: "" },
    Product_Category: {
        CategoryID: { type: String, default: '' },
        Category_Name: { type: String, default: '' }
    },
    Product_Description: { type: String, default: "" },
    Product_Weight: { type: Number, default: 1 },
    Product_Price: { type: Number, default: 0 },
    Product_Price_Divisions: {
        Introducer_Share: { type: Number, default: 0 },
        Buyer_Share: { type: Number, default: 0 },
        Shop_Share: { type: Number, default: 0 },
        Company_Share: { type: Number, default: 0 }
    },
    Product_Price_Data: {
        Introducer_Price: { type: Number, default: 0 },
        Buyer_Price_Array: [Number],
        Buyer_Price: { type: Number, default: 0 },
        Shop_Price: { type: Number, default: 0 },
        Company_Price: { type: Number, default: 0 }
    },
    Image_Data: {
        ImageID: { type: String, default: "" },
        Image50: { type: String, default: "" },
        Image100: { type: String, default: "" },
        Image250: { type: String, default: "" },
        Image550: { type: String, default: "" },
        Image900: { type: String, default: "" },
        ImageOriginal: { type: String, default: "" }
    },
    Product_Image_Data: [{
        _id: false,
        SNo: { type: Number, default: 0 },
        ImageID: { type: String, default: "" },
        Image50: { type: String, default: "" },
        Image100: { type: String, default: "" },
        Image250: { type: String, default: "" },
        Image550: { type: String, default: "" },
        Image900: { type: String, default: "" },
        ImageOriginal: { type: String, default: "" }
    }],
    Product_HST: { type: Number, default: 0 },
    Product_GST: { type: Number, default: 0 }, // should be in percent %
    Product_Quantity: { type: Number, default: 0 },
    Quantity_Update_by: { type: String, default: "" },
    Quantity_Update_at: { type: Date, default: null },
    Trending_Available: { type: Boolean, default: false },
    Status: { type: Boolean, default: true },
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Products" });
export default mongoose.model('Products', Products);