import mongoose from 'mongoose';
const Help_Data = mongoose.Schema({
    HelpDataID: { type: String, default: "" },
    Title: { type: String, default: "" },
    Description: { type: String, default: "" },
    Status: { type: Boolean, default: true },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() }
}, { collection: "Help_Data" });
export default mongoose.model('Help_Data', Help_Data);