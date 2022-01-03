import mongoose from 'mongoose';
const Shop_Share_Logs = mongoose.Schema({
    LogID: { type: String, default: "" },
    ShopID: { type: String, default: "" },
    Type: { type: Number, default: 1 }, //1.Credited 2.Debited
    Amount: { type: Number, default: 0 },
    Data: {},
    Time: { type: Date, default: null }
}, { collection: "Shop_Share_Logs" });
export default mongoose.model('Shop_Share_Logs', Shop_Share_Logs);


/***********
 *
 *
 *
 *
 * //Type 1
Type: 1, //Shop Bill Credit
Amount: Amount,
Data: {
    BillID: BillData.BillID,
    ShopID: ShopData.ShopID,
    Shop_Name: ShopData.Shop_Name,
    Shop_CountryCode: ShopData.Shop_CountryCode,
    Shop_PhoneNumber: ShopData.Shop_PhoneNumber,
    BuyerID: BuyerData.BuyerID,
    Buyer_Name: BuyerData.Buyer_Name,
    Buyer_CountryCode: BuyerData.Buyer_CountryCode,
    Buyer_PhoneNumber: BuyerData.Buyer_PhoneNumber,
    Buyers_Network_Data: Buyers_Network_Data,
    ProductData: ProductCartData
},


//Type2


Type: 2,//Shop Buyer Offer Credit
Amount: Amount,
Data: {
    "_id": "5c7e2645b5083a20a46de7c9",
    "Applied_Shop_Details": {
        "ShopID": "",
        "Shop_Name": "",
        "Shop_CountryCode": "",
        "Shop_PhoneNumber": ""
    },
    "BuyerID": "b82f91e7-6fe3-4c94-aefa-e935c0533669",
    "MessageID": "3391dab8-37e2-4292-aee7-4e9018def588",
    "Type": 3,
    "Whether_Shop": false,
    "ShopID": "",
    "OfferCode": "KTK49R",
    "Message": "You can Redeem Rs.10 from the coffee shop with",
    "Offer_Message": "You can Redeem Rs.10 from the coffee shop with Code: KTK49R",
    "Buyer_Min_Amount": 0,
    "Buyer_Max_Amount": 100,
    "Buyer_Deduction_Amount": 10,
    "OfferStatus": 1,
    "Whether_Offer_Applied": false,
    "Expiry_Date": "2019-03-09T13:00:00.000Z",
    "created_at": "2019-03-05T07:33:25.015Z",
    "updated_at": "2019-03-05T07:33:25.015Z",
    "__v": 0,
    "Buyer_Name": "Uday",
    "Buyer_CountryCode": "+91",
    "Buyer_PhoneNumber": "8801362790"
},

//Type3

    Type: 3, //Money Credited from Razorpay
    Amount: Amount,
    Data: {
        id: 'pay_C3i1doL5h4J1VL',
        entity: 'payment',
        amount: 500,
        currency: 'INR',
        status: 'captured',
        order_id: null,
        invoice_id: null,
        international: false,
        method: 'upi',
        amount_refunded: 0,
        refund_status: null,
        captured: true,
        description: 'Order #123456',
        card_id: null,
        bank: null,
        wallet: null,
        vpa: 'success@razorpay',
        email: 'sranjeeth.619@gmail.com',
        contact: '+919640335513',
        notes: [],
        fee: 12,
        tax: 2,
        error_code: null,
        error_description: null,
        created_at: 1551789503
    },

    
    Type: 4, //Shop Money Debited for Stock Purchase
    Amount: Amount,
    Data: {
    "PurchaseID" : "5dc95062-456b-4c22-9f3c-e5f75eab74e0",
    "PurchaseNumber" : "XGGUB1551853761878",
    "ShopID" : "ecb96415-09da-4ea8-a288-dfd8a5085532",
    "Total_Amount" : 40,
    "PurchaseStatus" : 1,
    "Status" : true,
    "created_at" : ISODate("2019-03-06T06:29:21.879Z"),
    "updated_at" : ISODate("2019-03-06T06:29:21.879Z"),
    "_id" : ObjectId("5c7f68c1d0cf0832046d87db"),
    "Cart_Information" : [ 
        {
            "Product_Price_Divisions" : {
                "Introducer_Share" : 2.5,
                "Buyer_Share" : 20,
                "Trimer_Share" : 2.5,
                "Shop_Share" : 30,
                "Company_Share" : 45
            },
            "ProductID" : "c79e9ecf-f22d-4eb7-a053-5f464785af26",
            "Product_Name" : "COFFEE",
            "Product_Price" : 10,
            "Product_Quantity" : 4,
            "Product_Sub_Total" : 40
        }
    ],
    "PurchaseLogs" : [ 
        {
            "PurchaseStatus" : 1,
            "Description" : "Stock Purchase",
            "Time" : ISODate("2019-03-06T06:29:21.879Z")
        }
    ],
    "__v" : 0
},

 *
 */