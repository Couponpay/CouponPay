import mongoose from 'mongoose';
const Introducer_Share_Logs = mongoose.Schema({
    LogID: { type: String, default: "" },
    IntroducerID: { type: String, default: "" },
    Type: { type: Number, default: 1 }, //1.Credited 2.Debited
    Amount: { type: Number, default: 0 },
    Data: {},
    Time: { type: Date, default: null }
}, { collection: "Introducer_Share_Logs" });
export default mongoose.model('Introducer_Share_Logs', Introducer_Share_Logs);


/******************
 * 
 * 
 * //Type 1

{
    "_id" : ObjectId("5c81e12a39e84c4ceddd4036"),
    "LogID" : "2a639c07-29e3-429b-b2e3-729245c3fe91",
    "IntroducerID" : "fcf827c0-dd92-471b-9441-66f822ec54b5",
    "Type" : 1,
    "Amount" : 3.5,
    "Time" : ISODate("2019-03-08T03:27:38.133Z"),
    "Data" : {
        "BillID" : "15586d92-5660-46b2-a1aa-4ffe82d93d27",
        "ShopID" : "841008c9-a718-4acb-b7b0-6b094a4a5bd6",
        "Shop_Name" : "Ranjith Shop",
        "Shop_CountryCode" : "+91",
        "Shop_PhoneNumber" : "9640335513",
        "BuyerID" : "babb712d-12de-4aa7-9de2-ca910b57572b",
        "Buyer_Name" : "Naresh",
        "Buyer_CountryCode" : "+91",
        "Buyer_PhoneNumber" : "7989317085",
        "Buyers_Network_Data" : [],
        "ProductData" : {
            "Product_Price_Divisions" : {
                "Introducer_Share" : 5,
                "Buyer_Share" : 5,
                "Trimer_Share" : 20,
                "Shop_Share" : 20,
                "Company_Share" : 50
            },
            "Total_Product_Share_Distributed_Amount" : {
                "Introducer_Amount" : 3.5,
                "Buyer_Amount" : 3.5,
                "Trimer_Amount" : 14,
                "Shop_Amount" : 14,
                "Company_Amount" : 35
            },
            "ProductID" : "64a0c672-b67e-422d-b5bc-8059eb9e8481",
            "Product_Name" : "Tea",
            "Product_Price" : 10,
            "Product_Quantity" : 7,
            "Product_Sub_Total" : 70
        }
    },
    "__v" : 0
}

 * 
 * 
 */
