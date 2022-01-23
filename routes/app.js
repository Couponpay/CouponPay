import express from "express";
import CommonController from "../controllers/CommonController";
import AdminMediator from "../mediators/AdminMediator";
import DeviceMediator from "../mediators/DeviceMediator";
import ShopMediator from "../mediators/ShopMediator";

const router = express.Router();

router.post('/Generate_DeviceID', DeviceMediator.Generate_DeviceID);

router.post('/Splash_Screen', DeviceMediator.Splash_Screen);

router.post('/Shop_Login', ShopMediator.Shop_Login);

router.post('/Shop_Wallet_Details', ShopMediator.Shop_Wallet_Details);

router.post('/Shop_List_All_Wallet_Logs', ShopMediator.Shop_List_All_Wallet_Logs);

router.post('/Shop_List_All_Wallet_Logs_Date_Filter', ShopMediator.Shop_List_All_Wallet_Logs_Date_Filter);

router.post('/Shop_Get_All_Product_Stocks', ShopMediator.Shop_Get_All_Product_Stocks);

router.post('/Shop_Get_All_Product_Stock_Logs', ShopMediator.Shop_Get_All_Product_Stock_Logs);

router.post('/Shop_Generate_Bill', ShopMediator.Shop_Generate_Bill);

router.post('/Shop_Generate_Bill_Delivery_Type_3', ShopMediator.Shop_Generate_Bill_Delivery_Type_3);

router.post('/Shop_List_All_Bills', ShopMediator.Shop_List_All_Bills);

router.post('/Fetch_Offer_Code_Details', ShopMediator.Fetch_Offer_Code_Details);

router.post('/Apply_Buyer_Offer', ShopMediator.Apply_Buyer_Offer);

router.post('/Get_All_Products', ShopMediator.Get_All_Products); // for shop

router.post('/Shop_Add_Amount_From_Razorpay_To_Wallet', ShopMediator.Shop_Add_Amount_From_Razorpay_To_Wallet);

router.post('/Shop_Purchase_Stocks', ShopMediator.Shop_Purchase_Stocks);

router.post('/Shop_List_All_Purchases', ShopMediator.Shop_List_All_Purchases);

router.post('/Shop_Purchase_Ordered_Delivered', ShopMediator.Shop_Purchase_Ordered_Delivered);

//pj code  from below

router.post('/Generate_Buyer_OTP', ShopMediator.Generate_Buyer_OTP);

router.post('/Validate_Buyer_OTP', ShopMediator.Validate_Buyer_OTP);

router.post('/Buyer_Register', ShopMediator.Buyer_Register);

router.post('/Add_Buyer_Address', ShopMediator.Add_Buyer_Address);

router.post('/Edit_Buyer_Address', ShopMediator.Edit_Buyer_Address);

router.post('/Remove_Buyer_Address', ShopMediator.Remove_Buyer_Address);

router.post('/List_Buyer_Address', ShopMediator.List_Buyer_Address);

router.post('/List_All_Products_For_Buyer', ShopMediator.List_All_Products_For_Buyer);

router.post('/List_All_Products_For_Buyer_Category', ShopMediator.List_All_Products_For_Buyer_Category);

router.post('/Add_Product_To_Cart', ShopMediator.Add_Product_To_Cart);

router.post('/Add_Bulk_Product_To_Cart', ShopMediator.Add_Bulk_Product_To_Cart);

router.post('/Remove_All_Product_From_Cart', ShopMediator.Remove_All_Product_From_Cart);

router.post('/List_All_Products_In_Buyer_Cart', ShopMediator.List_All_Products_In_Buyer_Cart);

router.post('/Checkout_Buyer_Cart', ShopMediator.Checkout_Buyer_Cart);

router.post('/Edit_Checkout_Buyer_Cart', ShopMediator.Edit_Checkout_Buyer_Cart); // not using

router.post('/Delete_Buyer_Order', ShopMediator.Delete_Buyer_Order);

router.post('/Payment_for_Buyer_Order', ShopMediator.Payment_for_Buyer_Order);

router.post('/List_All_Shops', ShopMediator.List_All_Shops);

router.post('/List_Buyer_Orders', ShopMediator.List_Buyer_Orders);

router.post('/Get_Buyer_Single_Order', ShopMediator.Get_Buyer_Single_Order);

router.post('/Cancel_Single_Order', ShopMediator.Cancel_Single_Order);

router.post('/Home_Screen_Details', ShopMediator.Home_Screen_Details);

router.post('/Buyer_Wallet_log', ShopMediator.Buyer_Wallet_log);

router.post('/List_All_Help_Data', ShopMediator.List_All_Help_Data);

router.post('/List_All_Banner', ShopMediator.List_All_Banner);

router.post('/Pincode', ShopMediator.Pincode);

router.post('/List_All_Delivery_Type', ShopMediator.List_All_Delivery_Type);

router.post('/List_All_Shop_Buyer_Order', ShopMediator.List_All_Shop_Buyer_Order);

router.post('/Check_Buyer_Order', ShopMediator.Check_Buyer_Order);

router.post('/Complete_Buyer_Order', ShopMediator.Complete_Buyer_Order);

router.post('/Buyer_Referals', ShopMediator.Buyer_Referals);

router.post('/Buyer_Update_Profile', ShopMediator.Buyer_Update_Profile);

router.post('/Generate_ShopOTP_For_Buyer_Order', ShopMediator.Generate_ShopOTP_For_Buyer_Order);

router.post('/Validate_Referral_Phone_Number', ShopMediator.Validate_Referral_Phone_Number);

router.post('/Get_Product_Details_For_Buyer', ShopMediator.Get_Product_Details_For_Buyer);

router.post('/Get_Product_Details', ShopMediator.Get_Product_Details);

router.post('/Get_Product_Details_For_Shop', ShopMediator.Get_Product_Details_For_Shop);



router.post('/Add_Buyer_Beneficiary_Account_For_Bank_Account', ShopMediator.Add_Buyer_Beneficiary_Account_For_Bank_Account);

router.post('/List_All_Buyer_Beneficiary_Accounts', ShopMediator.List_All_Buyer_Beneficiary_Accounts);

router.post('/Make_Default_Buyer_Beneficiary_Account_For_Bank_Account', ShopMediator.Make_Default_Buyer_Beneficiary_Account_For_Bank_Account);

router.post('/Update_Buyer_Beneficiary_Account_For_Bank_Account', ShopMediator.Update_Buyer_Beneficiary_Account_For_Bank_Account);

router.post('/Delete_Buyer_Beneficiary_Account', ShopMediator.Delete_Buyer_Beneficiary_Account);

router.post('/Buyer_Fetch_Service_Amount', ShopMediator.Buyer_Fetch_Service_Amount);

router.post('/Buyer_Withdraw_Amount', ShopMediator.Buyer_Withdraw_Amount);

router.post('/List_All_Category', ShopMediator.List_All_Category);

router.post('/Product_Matrix_Referral_Amount', ShopMediator.Product_Matrix_Referral_Amount);

router.post('/Generate_OTP_for_Withdraw_Amount', ShopMediator.Generate_OTP_for_Withdraw_Amount);

router.post('/Live_Bonanza_Status', ShopMediator.Live_Bonanza_Status);

//
router.post('/List_All_News', ShopMediator.List_All_News);

router.post('/List_All_Plots', ShopMediator.List_All_Plots);

router.post('/List_All_App_Image_Resource', ShopMediator.List_All_App_Image_Resource);

router.post('/List_Coupons_Category', ShopMediator.List_Coupons_Category);

// router.post('/List_Trending_Products', ShopMediator.List_Trending_Products);

//user shops
router.post('/Register_Shop', ShopMediator.Register_Shop);

router.post('/list_My_User_Shop', ShopMediator.list_My_User_Shop);

router.post('/Fetch_Shop_By_QRCODE', ShopMediator.Fetch_Shop_By_QRCODE);

// Payment Initiated
router.post('/User_Shops_Request_ShareAmount', ShopMediator.User_Shops_Request_ShareAmount);

router.post('/List_Coupon_Products', ShopMediator.List_Coupon_Products);

router.post('/Purchase_Coupon_Product', ShopMediator.Purchase_Coupon_Products);

router.post('/Purchase_Logs', ShopMediator.Purchase_Logs);

// router.post('/Fetch_YouTube_Ad', UserMediator.Fetch_YouTube_Ad);

////shareing amount requests
router.post('/List_BuyerShare_Requests', ShopMediator.List_BuyerShare_Requests);

router.post('/List_My_BuyerShare_Requests', ShopMediator.List_My_BuyerShare_Requests);

/// commplete

router.post('/Accept_Reject_BuyerShare_Requests', ShopMediator.Accept_Reject_BuyerShare_Requests);

router.post('/List_Target_Referals', ShopMediator.List_Target_Referals);

router.post('/List_Gift_Meter', ShopMediator.List_Gift_Meter);

router.post('/With_Draw_Gift_Amount', ShopMediator.With_Draw_Gift_Amount);

router.post('/List_With_Draw_Gift_Amount_Requests', ShopMediator.List_With_Draw_Gift_Amount_Requests);

router.post('/List_All_User_Shops', ShopMediator.List_All_User_Shops);

router.post('/Check_User_Shop_By_PhoneNumber', ShopMediator.Check_User_Shop_By_PhoneNumber);

// router.post('/User_Expire_Logs', ShopMediator.Check_User_Shop_By_PhoneNumber);
router.post('/Check_User_Shops_Request_ShareAmount', ShopMediator.Check_User_Shops_Request_ShareAmount);

router.post('/Buyer_Wallets', ShopMediator.Buyer_Wallets);

router.post('/Buyer_Wallet_Logs', ShopMediator.Buyer_Wallet_Logs);

router.post('/List_My_Referals', ShopMediator.List_My_Referals);

router.post('/Coupons_NetworkData', ShopMediator.Coupons_NetworkData);

router.post('/User_Network_Heirarchy', ShopMediator.User_Network_Heirarchy);

router.post('/Purchase_Box_Product', ShopMediator.Purchase_Box_Product);

router.post('/Get_Upgrade_Box_Product', ShopMediator.Get_Upgrade_Box_Product);

router.post('/Get_My_Box_Buyers_Data', ShopMediator.Get_My_Box_Buyers_Data);

router.post('/Search_All_Products_And_Buyer_Category', ShopMediator.Search_All_Products_And_Buyer_Category);

//router.get('/getDeleteData', ShopMediator.getdelteData);

//box number array data skip limit


//Venkat apis
router.post('/List_All_States', ShopMediator.List_All_States);

router.post('/List_All_Districts', ShopMediator.List_All_Districts);

router.post('/List_All_Pincodes', ShopMediator.List_All_Pincodes);

router.post('/Add_OR_Remove_Product_To_Cart', ShopMediator.Add_OR_Remove_Product_To_Cart);

router.post('/List_All_Cart_Items', ShopMediator.List_All_Cart_Items);

router.post('/Place_Order', ShopMediator.Place_Order);

router.post('/List_My_Orders', ShopMediator.List_My_Orders);

router.post('/Add_Address', ShopMediator.Add_Address);

router.post('/Edit_Address', ShopMediator.Edit_Address);

router.post('/Remove_Address', ShopMediator.Remove_Address);

router.post('/List_Address', ShopMediator.List_Address);

router.post('/Request_OTP', ShopMediator.Request_OTP);

router.post('/Validate_Order_OTP', ShopMediator.Validate_Order_OTP);


router.post('/Purchase_State', ShopMediator.Purchase_State);

router.post('/Purchase_District', ShopMediator.Purchase_District);


router.post('/List_All_Pincodes_For_Place_order', ShopMediator.List_All_Pincodes_For_Placeorder);

router.post('/Check_Phone_Number', ShopMediator.Check_Phone_Number);

router.post('Recieve_Amount_From_DHWallet',ShopMediator.Receive_Amount_From_DHWallet);





export default router;