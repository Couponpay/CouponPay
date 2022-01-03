import mongoose from 'mongoose';
const Gift_Meter = mongoose.Schema({
    Gift_MeterID: { type: String, default: "" },
    Title_Name: { type: String, default: "" },
    SNo: { type: Number, default: 0 },
    Value: { type: Number, default: 0 },
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

    Status: { type: Boolean, default: true },
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Gift_Meter" });
export default mongoose.model('Gift_Meter', Gift_Meter);