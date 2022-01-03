import mongoose from 'mongoose';
const Trimer_Share_Logs = mongoose.Schema({
    LogID: { type: String, default: "" },
    Trimer_DateID: { type: String, default: "" },
    Type: { type: Number, default: 1 }, //1.Credited 2.Debited
    Amount: { type: Number, default: 0 },
    Data: {},
    Time: { type: Date, default: null }
}, { collection: "Trimer_Share_Logs" });
export default mongoose.model('Trimer_Share_Logs', Trimer_Share_Logs);


/*********
 *
 *
 *
 *
 *
 * //Type1
 *
* Type: 1,
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
 *
 *
* let Data = {
    LogID: uuid.v4(),
    Trimer_DateID: Trimer_DateID,
    Type: 2,
    Amount: Amount,
    Data: {
        Trimer_DateID: Trimmer_Share_Data.Trimer_DateID,
        Trimmer_Date: Trimmer_Share_Data.Date,
        All_Buyers_Data: All_Buyers_Data
    },
    Time: new Date()
};
 *
 *
 *
 *
 */