import mongoose from 'mongoose';
const Buyers = mongoose.Schema({
    BuyerID: { type: String, default: "" },
    SessionID: { type: String, default: "" },
    DeviceID: { type: String, default: "" },
    Whether_RazorpayX_Buyer_Register: { type: Boolean, default: false },
    RazorpayX_ContactID: { type: String, default: "" },
    Buyer_Name: { type: String, default: "" },
    Buyer_CountryCode: { type: String, default: "" },
    Buyer_PhoneNumber: { type: String, default: "" },
    Ref_PhoneNumber: { type: String, default: "" },
    Buyer_Basic_Info_Available: { type: Boolean, default: false },
    Ref_PhoneNumber_Available: { type: String, default: false },
    Buyer_alread_reg: { type: String, default: false },
    ref_Data:{},
    Buyer_Password: { type: String, default: "" },
    Available_Amount: { type: Number, default: 0 },
    Withdrawn_Amount: { type: Number, default: 0 },
    Total_Amount: { type: Number, default: 0 },
    Status: { type: Boolean, default: true },
    Cart_Total_Items: { type: Number, default: 0 },
    Cart_Total_Price: { type: Number, default: 0 },
    Purchase_Type: { type: Number, default: 0 },//1:State,2:District
    StateID: { type: String, default: "" },
    DistrictID: { type: String, default: "" },
    DirectRef:[],
    DownID:{},
    Cart_Information: [{
        _id: false,
        ProductID: { type: String, default: "" },
        Product_Name: { type: String, default: "" },
        Product_Price: { type: Number, default: 0 },
        Product_Price_Divisions: {
            Introducer_Share: { type: Number, default: 0 },
            Buyer_Share: { type: Number, default: 0 },
            Shop_Share: { type: Number, default: 0 },
            Company_Share: { type: Number, default: 0 }
        },
        Product_Quantity: { type: Number, default: 0 },
        Product_Sub_Total: { type: Number, default: 0 },
        Total_Product_Share_Distributed_Amount: { //Including All Quantities
            Introducer_Amount: { type: Number, default: 0 },
            Buyer_Amount: { type: Number, default: 0 },
            Shop_Amount: { type: Number, default: 0 },
            Company_Amount: { type: Number, default: 0 },
            Buyer_Amount_Array:[]
        },
        
        ImageID: { type: String, default: "" }
    }],

    Current_Box: { type: Number, default: 0 },
    Current_Box_Count: { type: Number, default: 0 },

    Box_One_Count: {},
    Box_One_Arr: [{}],

    Box_Two_Count: {},
    Box_Two_Arr: [{}],

    Box_Three_Count: {},
    Box_Three_Arr: [{}],

    Total_Box_Arr : [{}],

    Expired_Amount: { type: Number, default: 0 },
    Expired_Amount_Withdraw: { type: Number, default: 0 },
    Expired_Amount_Total: { type: Number, default: 0 },

    Cash_Coupons_Amount_Unprocessed: { type: Number, default: 0 },
    Cash_Coupons_Amount_Available: { type: Number, default: 0 },
    Cash_Coupons_Amount_Withdraw: { type: Number, default: 0 },
    Cash_Coupons_Amount_Total: { type: Number, default: 0 },

    Purchace_Coupons_Amount_Unprocessed: { type: Number, default: 0 },
    Purchace_Coupons_Amount_Available: { type: Number, default: 0 },
    Purchace_Coupons_Amount_Withdraw: { type: Number, default: 0 },
    Purchace_Coupons_Amount_Total: { type: Number, default: 0 },

    Gift_Coupons_Amount_Unprocessed: { type: Number, default: 0 },
    Gift_Coupons_Amount_Available: { type: Number, default: 0 },
    Gift_Coupons_Amount_Withdraw: { type: Number, default: 0 },
    Gift_Coupons_Amount_Total: { type: Number, default: 0 },

    Update_Coupons_Amount_Unprocessed: { type: Number, default: 0 },
    Update_Coupons_Amount_Available: { type: Number, default: 0 },
    Update_Coupons_Amount_Withdraw: { type: Number, default: 0 },
    Update_Coupons_Amount_Total: { type: Number, default: 0 },

    Box_One_Upgrade_Amount_Unprocessed: { type: Number, default: 0 },
    Box_One_Upgrade_Amount_Available: { type: Number, default: 0 },
    Box_One_Upgrade_Amount_Withdraw: { type: Number, default: 0 },
    Box_One_Upgrade_Amount_Total: { type: Number, default: 0 },

    Box_Two_Upgrade_Amount_Unprocessed: { type: Number, default: 0 },
    Box_Two_Upgrade_Amount_Available: { type: Number, default: 0 },
    Box_Two_Upgrade_Amount_Withdraw: { type: Number, default: 0 },
    Box_Two_Upgrade_Amount_Total: { type: Number, default: 0 },

    Box_Three_Upgrade_Amount_Unprocessed: { type: Number, default: 0 },
    Box_Three_Upgrade_Amount_Available: { type: Number, default: 0 },
    Box_Three_Upgrade_Amount_Withdraw: { type: Number, default: 0 },
    Box_Three_Upgrade_Amount_Total: { type: Number, default: 0 },

    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Buyers" });
export default mongoose.model('Buyers', Buyers);