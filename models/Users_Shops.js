import mongoose from 'mongoose';
const Users_Shops = mongoose.Schema({
    Users_ShopsID: { type: String, default: "" },
    BuyerID: { type: String, default: "" },
    Users_ShopsID_QR_Image: { type: String, default: "" },
    IntroducerID: { type: String, default: "" },
    Users_Shop_Name: { type: String, default: "" },
    Users_Shop_CountryCode: { type: String, default: "" },
    Users_Shop_PhoneNumber: { type: String, default: "" },
    Users_Shop_Password: { type: String, default: "" },
    // Available_Amount: { type: Number, default: 0 },
    // Withdrawn_Amount: { type: Number, default: 0 },
    // Total_Amount: { type: Number, default: 0 },
    // GST_Number: { type: String, default: "" }, 
    Status: { type: Boolean, default: true },
    Latitude: Number,
    Longitude: Number,
    Point: {
        type: [Number],
        index: '2d'
    },
    Address: { type: String, default: "" },

    Whether_Pincode : {type: Boolean,default:false},

    PincodeID:{ type:String,default:""},

    Whether_Pincode_Available:{type:Boolean,default:false},

    Payment_Type: { type: Number, default: 0 }, //1- Wallet, 2- RazorPay 3- both 4- Shop Payment
    User_Shop_Number: { type: String, default: "" }, // 12 digits random number
    Payment_Status: { type: Number, default: 0 }, // 1- initial, 2- fail, 3- Success, 4- Shop Payment
    TransactionID: { type: String, default: "" },
    Total_Price: { type: Number, default: 0 },
    User_Shop_Status: { type: Number, default: 0 }, //1- started, 2- cancelled, 3- completed 4- Cancelled by admin
    Tax: { type: Number, default: 0 }, //5%
    Discount: { type: Number, default: 0 },
    Amount_Paid: {
        Amount_Used_From_Wallet: { type: Number, default: 0 },
        Amount_Paid_Online: { type: Number, default: 0 },
        Total_Amount_Paid: { type: Number, default: 0 },
    },
    WebHookData: {},
    Coupons_CategoryID: { type: String, default: "" },
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Users_Shops" });
Users_Shops.index({ Point: '2dsphere' });
export default mongoose.model('Users_Shops', Users_Shops);