import mongoose from 'mongoose';
const Shiprocket_Order_Log = mongoose.Schema({
    Shiprocket_Order_LogID: {type: String, default: ""},
    Shiprocket_OrderID: {type: Number, default: null},
    Shipment_ID: {type: Number, default: null},
    BuyerID: { type: String, default: "" },
    OrderID: {type: String, default: ""},
    Order_Number: { type: String, default: "" }, // 12 digits random number
    Shiprocket_Order_Number: { type: String, default: "" }, // 12 digits random number
    Scans: [{}],
    Current_Timestamp: {},
    Courier_Name: {type: String, default: ""},
    Etd: {type: String, default: ""},
    AWB: {type: String, default: ""},
    Pickup_Data: {},
    courier_company_id: {type: Number, default: null},
    Current_Status: {type: String, default: ""},
    Current_Status_ID: {type: String, default: ""},
    Shipment_Status: {type: String, default: ""},
    Shipment_Status_ID: {type: String, default: ""},
    Status: {type: Boolean, default: true},
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Shiprocket_Order_Log" });
export default mongoose.model('Shiprocket_Order_Log', Shiprocket_Order_Log);