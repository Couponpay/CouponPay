import mongoose from 'mongoose';
const Buyer_Share_Logs = mongoose.Schema({
    LogID: { type: String, default: "" },
    BuyerID: { type: String, default: "" },
    Type: { type: Number, default: 1 }, //1.Credited 2.Debited
    Amount: { type: Number, default: 0 },
    Data: {},
    Time: { type: Date, default: null }
}, { collection: "Buyer_Share_Logs" });
export default mongoose.model('Buyer_Share_Logs', Buyer_Share_Logs);



/*********
 *
 *
 *

//Type 1
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
Type: 2, //Credit by Trimmer of Day
Amount: Amount,
Data: {
    Trimer_DateID: Trimmer_Share_Data.Trimer_DateID,
    Amount: Amount,
    Available_Amount: Trimmer_Share_Data.Available_Amount,
    Trimmer_Date: Trimmer_Share_Data.Date,
    No_of_Buyers_Network: No_of_Buyers_Network
},

Type: 3, //Withdraw for Offer Code
Amount: Amount,
Data: {
    BuyerID: item.BuyerID,
    MessageID: OfferMessageData.MessageID,
    Type: OfferMessageData.Type,
    Whether_Shop: OfferMessageData.Whether_Shop,
    ShopID: OfferMessageData.ShopID,
    OfferCode: OfferCode,
    Message: OfferMessageData.Message,
    Offer_Message: Offer_Message,
    Buyer_Min_Amount: OfferMessageData.Buyer_Min_Amount,
    Buyer_Max_Amount: OfferMessageData.Buyer_Max_Amount,
    Buyer_Deduction_Amount: OfferMessageData.Buyer_Deduction_Amount,
    Expiry_Date: OfferMessageData.Expiry_Date
},

 */