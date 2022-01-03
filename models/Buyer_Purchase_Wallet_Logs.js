import mongoose from 'mongoose';
const Buyer_Purchase_Wallet_Logs = mongoose.Schema({
    LogID: { type: String, default: "" },
    BuyerID: { type: String, default: "" },
    Type: { type: Number, default: 1 }, //1.Credited 2.Debited
    Amount: { type: Number, default: 0 },
    Data: {},
    Time: { type: Date, default: null }
}, { collection: "Buyer_Purchase_Wallet_Logs" });
export default mongoose.model('Buyer_Purchase_Wallet_Logs', Buyer_Purchase_Wallet_Logs);


//  Type: 1, //Credit Amount for Buyer Purchase
// Type: 2,  //User SHop debited amount for Buyer Share Amount Request Notofication
// Type: 3,  //User SHop Credited amount for Buyer Share Amount Request Notofication
//  Type: 4, //product Bill Amount sharing 9 levels
//  Type: 5,   //User SHop Credited amount for Buyer Share Amount Request Notofication Rejected



