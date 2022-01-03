import mongoose from 'mongoose';
const Box_Amount_Share = mongoose.Schema({
    Box_Amount_ShareID: { type: String, default: '' },
    Box_Number: { type: Number, default: 0 },  //1.Box One, 2:Box two, 3:Box Three
    Image_Data: {
        ImageID: { type: String, default: "" },
        Image50: { type: String, default: "" },
        Image100: { type: String, default: "" },
        Image250: { type: String, default: "" },
        Image550: { type: String, default: "" },
        Image900: { type: String, default: "" },
        ImageOriginal: { type: String, default: "" }
    },
    Image_Available: { type: Boolean, default: false },
    Price: { type: Number, default: 0 },
    Description: { type: String, default: "" },
    Product_Name: { type: String, default: "" },    
    Box_One : {
        Cash_Percent: { type: Number, default: 0 },
        Purchace_Percent: { type: Number, default: 0 },
        Gift_Percent: { type: Number, default: 0 },
        Upgrade_Coupon_Percent: { type: Number, default: 0 },
        Nine_Level_Percent: { type: Number, default: 0 },
    },
    Box_Two : {
        Cash_Percent: { type: Number, default: 0 },
        Purchace_Percent: { type: Number, default: 0 },
        Gift_Percent: { type: Number, default: 0 },
        Upgrade_Coupon_Percent: { type: Number, default: 0 },
        Nine_Level_Percent: { type: Number, default: 0 },
    },
    Box_Three : {
        Cash_Percent: { type: Number, default: 0 },
        Purchace_Percent: { type: Number, default: 0 },
        Gift_Percent: { type: Number, default: 0 },
        Upgrade_Coupon_Percent: { type: Number, default: 0 },
        Nine_Level_Percent: { type: Number, default: 0 },
    },

    Status: { type: Boolean, default: true },
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Box_Amount_Share" });
export default mongoose.model('Box_Amount_Share', Box_Amount_Share);