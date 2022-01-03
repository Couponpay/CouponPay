import mongoose from 'mongoose';
const Buyer_Orders = mongoose.Schema({
    OrderID: { type: String, default: "" },
    BuyerID: { type: String, default: "" },
    Status: { type: Boolean, default: false },
    Order_Status: { type: Number, default: 0 }, //1- started, 2- cancelled, 3- completed 4- Cancelled by admin
    Order_Report: [{
        _id: false,
        Title: { type: String, default: "" },
        Description: { type: String, default: "" },
        Time: { type: Date, default: null }
    }],
    Amount_Paid: {
        Amount_Used_From_Wallet: { type: Number, default: 0 },
        Amount_Paid_Online: { type: Number, default: 0 },
        Total_Amount_Paid: { type: Number, default: 0 }
    },
    Payment_Type: { type: Number, default: 0 }, //1- Wallet, 2- RazorPay 3- both 4- Shop Payment
    Order_Number: { type: String, default: "" }, // 12 digits random number
    Payment_Status: { type: Number, default: 0 }, // 1- initial, 2- fail, 3- Success, 4- Shop Payment
    TransactionID: { type: String, default: "" },
    Cart_Total_Items: { type: Number, default: 0 },
    Cart_Total_Price: { type: Number, default: 0 },
    Tax: { type: Number, default: 0 }, //5%
    Discount: { type: Number, default: 0 },
    Cart_Final_Price: { type: Number, default: 0 }, // Cart_Total_Price + Tax - Discount
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
        Product_Price_Data: {
            Introducer_Price: { type: Number, default: 0 },
            Buyer_Price_Array: [Number],
            Buyer_Price: { type: Number, default: 0 },
            Shop_Price: { type: Number, default: 0 },
            Company_Price: { type: Number, default: 0 }
        },
        Product_Quantity: { type: Number, default: 0 },
        Product_Sub_Total: { type: Number, default: 0 },
        Total_Product_Share_Distributed_Amount: { //Including All Quantities
            Introducer_Amount: { type: Number, default: 0 },
            Buyer_Amount_Array: [Number],
            Buyer_Amount: { type: Number, default: 0 },
            Shop_Amount: { type: Number, default: 0 },
            Company_Amount: { type: Number, default: 0 }
        },
        ImageID: { type: String, default: "" }
    }],
    Delivery_Address_Information: {
        AddressID: { type: String, default: "" },
        Name: { type: String, default: "" },
        PhoneNumber: { type: String, default: '' },
        Flat_No: { type: String, default: "" },
        Plot_No: { type: String, default: "" },
        Postal_Code: { type: Number, default: 0 },
        State: { type: String, default: "" },
        City: { type: String, default: "" },
        Land_Mark: { type: String, default: "" },
        Address_Type: { type: Number, default: 0 }, //1- Home, 2- Work, 3- Other
        Latitude: Number,
        Longitude: Number,
        Point: {
            type: [Number],
            index: '2d'
        },
    },
    Shop_Information: {
        ShopID: { type: String, default: "" },
        Shop_Name: { type: String, default: "" },
        Shop_CountryCode: { type: String, default: "" },
        Shop_PhoneNumber: { type: String, default: "" },
        Latitude: Number,
        Longitude: Number,
        Point: {
            type: [Number],
            index: '2d'
        },
        Address: { type: String, default: "" },
    },
    ShopOTP: { type: Number, default: 0 },
    WebHookData: {},
    Shiprocket_Order_LogID: { type: String, default: "" },
    Delivery_Pricings: { type: Number, default: 0 },
    Courier_Company_Id: { type: Number, default: 0 },
    ETA_Hrs: { type: Number, default: 0 },
    // ETA: { type: Number, default: 0 },
    ETA: { type: String, default: "" },
    Cart_Weight: { type: Number, default: 1 },
    Delivery_Type: { type: Number, default: 0 }, // 1- Drop at your Home, 2- Collect at Store, 3- Pay & collect at store
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Buyer_Orders" });
export default mongoose.model('Buyer_Orders', Buyer_Orders);