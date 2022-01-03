import mongoose from 'mongoose';
const Coupons_Category = mongoose.Schema({
    Coupons_CategoryID: { type: String, default: '' },
    Coupons_Category_Name: { type: String, default: '' },
    CC_Admin_Share_Percent: { type: Number, default: 0 },
    SNo: { type: Number, default: 0 },
    Status:{ type: Boolean, default: false },
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Coupons_Category" });
export default mongoose.model('Coupons_Category', Coupons_Category);