import mongoose from 'mongoose';
const Banner = mongoose.Schema({
    BannerID: { type: String, default: "" },
    Image_Data: {
        ImageID: { type: String, default: "" },
        Image50: { type: String, default: "" },
        Image100: { type: String, default: "" },
        Image250: { type: String, default: "" },
        Image550: { type: String, default: "" },
        Image900: { type: String, default: "" },
        ImageOriginal: { type: String, default: "" }
    },
    WebImageData: {
        ImageID: { type: String, default: "" },
        Image50: { type: String, default: "" },
        Image100: { type: String, default: "" },
        Image250: { type: String, default: "" },
        Image550: { type: String, default: "" },
        Image900: { type: String, default: "" },
        ImageOriginal: { type: String, default: "" }
    },
    Banner_Name:{ type: String, default: "" },
    SNo:{ type: Number, default: 0 },
    Status:{ type: Boolean, default: false },
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Banner" });
export default mongoose.model('Banner', Banner);
