import mongoose from 'mongoose';
const Delivery_Type = mongoose.Schema({
    Delivery_TypeID: { type: String, default: "" },
    Delivery_Type: { type: Number, default: 0 }, // // 1- Drop at your Home, 2- Collect at Store, 3- Pay & collect at store
    Delivery_Type_Name: { type: String, default: "" },
    Status: { type: Boolean, default: true },
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Delivery_Type" });
export default mongoose.model('Delivery_Type', Delivery_Type);