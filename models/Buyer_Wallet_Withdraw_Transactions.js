import mongoose from 'mongoose';
const Driver_Wallet_Withdraw_Transactions = mongoose.Schema({
    Withdraw_TransactionID: { type: String, default: "" },
    RazorpayX_TransactionID: { type: String, default: "" },
    BuyerID: { type: String, default: "" },
    Amount: { type: Number, default: 0 },//Rupees //Final Amount for Razorpay
    Service_Amount: { type: Number, default: 0 },
    Total_Amount: { type: Number, default: 0 },
    BeneficiaryID: { type: String, default: "" },
    RazorpayX_BeneficiaryID: { type: String, default: "" },
    RazorpayX_ContactID: { type: String, default: "" },
    BeneficiaryType: { type: Number, default: 1 },//1. Bank Account 2.UPI 
    Name: { type: String, default: "" },
    Account_Number: { type: String, default: "" },
    IFSC: { type: String, default: "" },
    Whether_Default_Account: { type: Boolean, default: false },
    Bank_Details: {
        BANK: { type: String, default: "" },
        BANKCODE: { type: String, default: "" },
        IFSC: { type: String, default: "" },
        CONTACT: { type: String, default: "" },
        BRANCH: { type: String, default: "" },
        ADDRESS: { type: String, default: "" },
        CITY: { type: String, default: "" },
        DISTRICT: { type: String, default: "" },
        STATE: { type: String, default: "" }
    },
    UPI: { type: String, default: "" },
    Transaction_Status: { type: Number, default: 1 }, //0.queue initiated 1. queued 2. processed 3. issued 4.payout initiated 5. reversed 6.created 7.cancelled
    Transaction_Reference_ID: { type: String, default: "" },
    Transaction_Completion_Remarks: { type: String, default: "" },
    Transaction_Status_Logs: [{
        _id: false,
        LogID: { type: String, default: "" },
        Transaction_Status: { type: Number, default: 1 }, //0.queue initiated 1. queued 2. processed 3. issued 4.payout initiated 5. reversed 6.created 7.cancelled
        Comment: { type: String, default: "" },
        Time: { type: Date, default: null }
    }],
    RazorpayXPayoutData: {
        id: { type: String, default: "" },
        amount: { type: Number, default: 0 },
        currency: { type: String, default: "INR" },
        fees: { type: Number, default: 0 },
        tax: { type: Number, default: 0 },
        status: { type: String, default: "" },
        utr: { type: String, default: "" },
        mode: { type: String, default: "" },
        reference_id: { type: String, default: "" },
        failure_reason: { type: String, default: "" }
    },
    Status: { type: Boolean, default: true },
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Driver_Wallet_Withdraw_Transactions" });
export default mongoose.model('Driver_Wallet_Withdraw_Transactions', Driver_Wallet_Withdraw_Transactions);