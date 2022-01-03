import mongoose from 'mongoose';
const Company_Share_Logs = mongoose.Schema({
    LogID: { type: String, default: "" },
    Type: { type: Number, default: 1 }, //1.Credited 2.Debited
    Amount: { type: Number, default: 0 },
    Data: {},
    Time: { type: Date, default: null }
}, { collection: "Company_Share_Logs" });
export default mongoose.model('Company_Share_Logs', Company_Share_Logs);

/**********

//Type 1


//Shop Bill Company Credit

Type: 1,
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

Type: 2, //Credited Buyer Share Amount
Amount: Amount,
Data: {
    No_of_Buyer_Share_For_Company: No_of_Buyer_Share_For_Company,
    Each_Buyer_Amount: Each_Buyer_Amount,
    Amount: Amount,
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

//Type 3
Type: 3, //Credited Buyer Offer Expired Amount
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
 */