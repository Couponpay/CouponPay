import mongoose from 'mongoose';
const Introducers = mongoose.Schema({
    IntroducerID: { type: String, default: "" },
    SessionID: { type: String, default: "" },
    Introducer_Name: { type: String, default: "" },
    Introducer_CountryCode: { type: String, default: "" },
    Introducer_PhoneNumber: { type: String, default: "" },
    Introducer_PAN: { type: String, default: "" },
    Introducer_PAN_ImageData:  {
        ImageID: { type: String, default: "" },
        Image50: { type: String, default: "" },
        Image100: { type: String, default: "" },
        Image250: { type: String, default: "" },
        Image550: { type: String, default: "" },
        Image900: { type: String, default: "" },
        ImageOriginal: { type: String, default: "" }
    },
    Introducer_Password: { type: Number, default: 0 },
    Available_Amount: { type: Number, default: 0 },
    Withdrawn_Amount: { type: Number, default: 0 },
    Total_Amount: { type: Number, default: 0 },
    Status: { type: Boolean, default: true },
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Introducers" });
export default mongoose.model('Introducers', Introducers);