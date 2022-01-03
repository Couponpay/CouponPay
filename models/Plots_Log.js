import mongoose from 'mongoose';
const Plots_Log = mongoose.Schema({
    PlotID: { type: String, default: "" },
    BuyerID: { type: String, default: "" },
    SNo: { type: Number, default: 0},
    Plot_Name: { type: String, default: "" },
    Company_Name: { type: String, default: "" },
    Address: { type: String, default: "" },
    UserType: { type: Number, default: 0 }, //1.Admin 2.User
    Payment_Type: { type: Number, default: 0 }, //1- Wallet, 2- RazorPay 3- both 4- Subscription
    AmountPaid:{ type: Number, default: 0 }, 
    
    Admin_Approve: { type: Number, default: 1 }, //1:Pending 2:Approved 3:Rejected
    Payment_Status: { type: Number, default: 0 }, // 1- initial, 2- fail, 3- Success,
    TransactionID: { type: String, default:"" },
    Company_Image_Data: {
        ImageID: { type: String, default: "" },
        Image50: { type: String, default: "" },
        Image100: { type: String, default: "" },
        Image250: { type: String, default: "" },
        Image550: { type: String, default: "" },
        Image900: { type: String, default: "" },
        ImageOriginal: { type: String, default: "" }
    },
    Description: { type: String, default: "" },
    Plot_Image_Data: [{
        ImageID: { type: String, default: "" },
        Image50: { type: String, default: "" },
        Image100: { type: String, default: "" },
        Image250: { type: String, default: "" },
        Image550: { type: String, default: "" },
        Image900: { type: String, default: "" },
        ImageOriginal: { type: String, default: "" }
    }],
    Latitude: Number,
    Longitude: Number,
    Point: {
        type: [Number],
        index: '2d'
    },
    FileData: {},
    Status:{ type: Boolean, default: true},
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() }
}, { collection: 'Plots_Log' });
Plots_Log.index({ Point: '2dsphere' });
export default mongoose.model('Plots_Log', Plots_Log);