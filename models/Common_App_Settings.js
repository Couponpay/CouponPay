import mongoose from 'mongoose';
const Common_App_Settings = mongoose.Schema({
    Common_App_SettingsID: { type: String, default: '' },
    Self_Purchase_ID: { type: Number, default: 0 },
    Direct_Refer_ID: { type: Number, default: 0 },
    Nine_Levels: { type: Number, default: 0 },
    Trimming_For_IDs: { type: Number, default: 0 },
    Shop_Keepers_Trimming: { type: Number, default: 0 },
    Company: { type: Number, default: 0 },
    GST_Service_Store_etc_Amount: { type: Number, default: 0 },
    Box_One_Max_Amount: { type: Number, default: 0 },
    Box_Two_Max_Amount: { type: Number, default: 0 },
    Box_Three_Max_Amount: { type: Number, default: 0 },
    User_Shop_Price: { type: Number, default: 0 },
    District_Price: { type: Number, default: 0 },
    State_Price: { type: Number, default: 0 },
    Pincode_Price: { type: Number, default: 0 },
    District_Share: { type: Number, default: 0 },
    State_Share: { type: Number, default: 0 },
    Pincode_Share: { type: Number, default: 0 },
    Status:{ type: Boolean, default: false },
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Common_App_Settings" });
export default mongoose.model('Common_App_Settings', Common_App_Settings);