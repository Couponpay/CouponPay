import express from "express";
import AdminMediator from "../mediators/AdminMediator";
import moment from "moment";
import config from "../config/config";
const router = express.Router();

router.post('/Create_Admin_User', AdminMediator.Create_Admin_User);

router.post('/List_All_Admin_User', AdminMediator.List_All_Admin_User);

router.post('/Login', AdminMediator.Login);

router.post('/Create_Shop', AdminMediator.Create_Shop);

router.post('/List_All_Shops', AdminMediator.List_All_Shops);

router.post('/List_Only_Shops', AdminMediator.List_Only_Shops);

router.post('/Edit_Shop_Name', AdminMediator.Edit_Shop_Name);

router.post('/Add_Product', AdminMediator.Add_Product);

router.post('/List_All_Products', AdminMediator.List_All_Products);

router.post('/Edit_Product', AdminMediator.Edit_Product);

router.post('/Inactivate_Product', AdminMediator.Inactivate_Product);

router.post('/List_All_Inactive_Products', AdminMediator.List_All_Inactive_Products);

router.post('/Activate_Product', AdminMediator.Activate_Product);

router.post('/Update_Shop_Product_Stock', AdminMediator.Update_Shop_Product_Stock);

router.post('/List_All_Shop_Product_Stocks', AdminMediator.List_All_Shop_Product_Stocks);

router.post('/List_All_Shop_Product_stock_Logs', AdminMediator.List_All_Shop_Product_stock_Logs);

router.post('/List_All_Shop_Share_Logs', AdminMediator.List_All_Shop_Share_Logs);

router.post('/List_All_Introducers', AdminMediator.List_All_Introducers);

router.post('/List_All_Introducer_Share_Logs', AdminMediator.List_All_Introducer_Share_Logs);

router.post('/Company_Share_Information_and_Logs', AdminMediator.Company_Share_Information_and_Logs);

router.post('/List_All_Buyers', AdminMediator.List_All_Buyers);

router.post('/List_All_Buyers_Share_Logs', AdminMediator.List_All_Buyers_Share_Logs);

//router.post('/Trimmer_Share_Information_and_Logs_By_Date', AdminMediator.Trimmer_Share_Information_and_Logs_By_Date);

router.post('/Buyer_Network_Heirarchy', AdminMediator.Buyer_Network_Heirarchy);

router.post('/Buyer_List_All_Shop_Bills', AdminMediator.Buyer_List_All_Shop_Bills);

router.post('/Search_Buyers', AdminMediator.Search_Buyers);

router.post('/Create_Offer_Message', AdminMediator.Create_Offer_Message);

router.post('/List_All_Offer_Messages', AdminMediator.List_All_Offer_Messages);

router.post('/List_All_Buyer_Offer_Message_Logs', AdminMediator.List_All_Buyer_Offer_Message_Logs);

router.post('/List_All_Shop_Purchases', AdminMediator.List_All_Shop_Purchases);

router.post('/Get_Purchase_Details', AdminMediator.Get_Purchase_Details);

router.post('/Accept_Shop_Purchase', AdminMediator.Accept_Shop_Purchase);

router.post('/Shipping_Shop_Purchase', AdminMediator.Shipping_Shop_Purchase);

router.post('/Shipping_Notification_Shop_Purchase', AdminMediator.Shipping_Notification_Shop_Purchase);

router.post('/List_All_Trending_Buyers', AdminMediator.List_All_Trending_Buyers);

router.post('/List_All_Buyers_Orders', AdminMediator.List_All_Buyers_Orders);

router.post('/List_Buyer_Orders', AdminMediator.List_Buyer_Orders);

router.post('/Change_Buyer_Order_Status', AdminMediator.Change_Buyer_Order_Status);

router.post('/Complete_Buyer_Order', AdminMediator.Complete_Buyer_Order);

router.post('/Delete_Buyer_Order', AdminMediator.Delete_Buyer_Order);

router.post('/Edit_Shop', AdminMediator.Edit_Shop);

router.post('/Edit_Shop_GST', AdminMediator.Edit_Shop_GST);

router.post('/Create_Help', AdminMediator.Create_Help);

router.post('/Edit_Help', AdminMediator.Edit_Help);

router.post('/Active_Inactive_Help', AdminMediator.Active_Inactive_Help);

router.post('/List_All_Help_Data', AdminMediator.List_All_Help_Data);

router.post('/Create_Banner', AdminMediator.Create_Banner);

router.post('/List_All_Banner', AdminMediator.List_All_Banner);

router.post('/Active_Inactive_Banner', AdminMediator.Active_Inactive_Banner);

router.post('/Edit_Banner', AdminMediator.Edit_Banner);

router.post('/Add_Delivery_Type', AdminMediator.Add_Delivery_Type);

router.post('/Active_Inactive_Delivery_Type', AdminMediator.Active_Inactive_Delivery_Type);

router.post('/List_All_Delivery_Type', AdminMediator.List_All_Delivery_Type);

router.post('/Add_Category', AdminMediator.Add_Category);

router.post('/List_All_Category', AdminMediator.List_All_Category);

router.post('/Update_Product_Quantity', AdminMediator.Update_Product_Quantity);

router.post('/Shiprocket_Order_Create', AdminMediator.Shiprocket_Order_Create);

router.post('/Cancel_Shiprocket_Order', AdminMediator.Cancel_Shiprocket_Order);

router.post('/Get_Single_Shiprocket_Order', AdminMediator.Get_Single_Shiprocket_Order);

router.post('/Get_Shiprocket_Order_Pricing', AdminMediator.Get_Shiprocket_Order_Pricing);

//Bonanza

router.post('/Create_Bonanza', AdminMediator.Create_Bonanza);

router.post('/List_All_Bonanza', AdminMediator.List_All_Bonanza);

router.post('/Edit_Bonanza', AdminMediator.Edit_Bonanza);

router.post('/Fetch_Single_Bonanza', AdminMediator.Fetch_Single_Bonanza);

router.post('/Activate_Inactivate_Bonanza', AdminMediator.Activate_Inactivate_Bonanza);

router.post('/Delete_Bonanza', AdminMediator.Delete_Bonanza);

router.post('/List_Buyers_Bonanza_Status', AdminMediator.List_Buyers_Bonanza_Status);


/////////////////Raj 
router.post('/Check_For_News_SNo_Available', AdminMediator.Check_For_News_SNo_Available);

router.post('/Add_News', AdminMediator.Add_News);

router.post('/List_All_News', AdminMediator.List_All_News);

router.post('/Activate_Inactivate_News', AdminMediator.Activate_Inactivate_News);

router.post('/Update_News', AdminMediator.Update_News); 

router.post('/Add_Remove_Trending_Products', AdminMediator.Add_Remove_Trending_Products); 

//plots

router.post('/Check_For_Plot_SNo_Available', AdminMediator.Check_For_Plot_SNo_Available);

router.post('/Create_Plot', AdminMediator.Create_Plot);

router.post('/Activate_Inactivate_Plot', AdminMediator.Activate_Inactivate_Plot);

router.post('/List_All_Plots', AdminMediator.List_All_Plot);

router.post('/Edit_Plot', AdminMediator.Edit_Plot);

//image Resource
router.post('/Check_For_App_Image_SNo_Available', AdminMediator.Check_For_App_Image_SNo_Available);

router.post('/Add_App_Image_Resource', AdminMediator.Add_App_Image_Resource);

router.post('/Edit_App_Image_Resource', AdminMediator.Edit_App_Image_Resource);

router.post('/List_All_App_Image_Resource', AdminMediator.List_All_App_Image_Resource);


//coupons catagory
router.post('/Check_For_Coupons_Category_SNo_Available', AdminMediator.Check_For_Coupons_Category_SNo_Available);

router.post('/Add_Coupons_Category', AdminMediator.Add_Coupons_Category);

router.post('/List_Coupons_Category', AdminMediator.List_Coupons_Category); 

router.post('/Activate_Inactivate_Coupons_Category', AdminMediator.Activate_Inactivate_Coupons_Category);

router.post('/Update_Coupons_Category', AdminMediator.Update_Coupons_Category);


//Common App Settings

router.post('/Add_Common_App_Setting', AdminMediator.Add_Common_App_Setting);

router.post('/List_Common_App_Setting', AdminMediator.List_Common_App_Setting);

router.post('/Activate_Inactivate_Common_App_Setting', AdminMediator.Activate_Inactivate_Common_App_Setting);

router.post('/Update_Common_App_Setting', AdminMediator.Update_Common_App_Setting);


//User Shops
router.post('/List_All_User_Shops', AdminMediator.List_All_User_Shops);

router.post('/Accept_Reject_User_Shop', AdminMediator.Accept_Reject_User_Shop);

// router.post('/Activate_Inactivate_Common_App_Setting', AdminMediator.Activate_Inactivate_Common_App_Setting);

// router.post('/Update_Common_App_Setting', AdminMediator.Update_Common_App_Setting);

//shareing amount requests
router.post('/List_BuyerShare_Requests', AdminMediator.List_BuyerShare_Requests);

router.post('/Accept_Reject_BuyerShare_Requests', AdminMediator.Accept_Reject_BuyerShare_Requests);


//Coupons Products >>>>>>>>>
router.post('/Add_Coupon_Products', AdminMediator.Add_Coupon_Products);

router.post('/Update_Coupon_Products', AdminMediator.Update_Coupon_Products);

router.post('/Check_For_Coupons_Product_SNo_Available', AdminMediator.Check_For_Coupons_Product_SNo_Available);

router.post('/List_Coupon_Products', AdminMediator.List_Coupon_Products);

router.post('/Activate_Inactivate_Coupon_Products', AdminMediator.Activate_Inactivate_Coupon_Products);

//Target Referals >>>>>>>>>
router.post('/Add_Target_Referal', AdminMediator.Add_Target_Referal);

router.post('/Update_Target_Referal', AdminMediator.Update_Target_Referal);

router.post('/Check_For_Target_Referal_SNo_Available', AdminMediator.Check_For_Target_Referal_SNo_Available);

router.post('/List_Target_Referals', AdminMediator.List_Target_Referals);

router.post('/Activate_Inactivate_Target_Referal', AdminMediator.Activate_Inactivate_Target_Referal);
 
//Gift Meter Referals >>>>>>>>>
router.post('/Add_Gift_Meter', AdminMediator.Add_Gift_Meter);

router.post('/Update_Gift_Meter', AdminMediator.Update_Gift_Meter);

router.post('/Check_For_Gift_Meter_SNo_Available', AdminMediator.Check_For_Gift_Meter_SNo_Available);

router.post('/List_Gift_Meter', AdminMediator.List_Gift_Meter);

router.post('/Activate_Inactivate_Gift_Meter', AdminMediator.Activate_Inactivate_Gift_Meter);

router.post('/Buyer_Purchase_Logs', AdminMediator.Buyer_Purchase_Logs);

router.post('/List_With_Draw_Gift_Amount_Requests', AdminMediator.List_With_Draw_Gift_Amount_Requests);

router.post('/Add_Update_Box_Amount_Shares', AdminMediator.Add_Update_Box_Amount_Shares);

router.post('/List_Box_Amount_Shares', AdminMediator.List_Box_Amount_Shares);

//Venkat apis
//States Section
router.post('/Add_State', AdminMediator.Add_State);

router.post('/Edit_State', AdminMediator.Edit_State);

router.post('/List_States', AdminMediator.List_States);

router.post('/Activate_Inactivate_State', AdminMediator.Activate_Inactivate_State);

//District Section
router.post('/Add_District', AdminMediator.Add_District);

router.post('/Edit_District', AdminMediator.Edit_District);

router.post('/List_Districts', AdminMediator.List_Districts);

router.post('/Activate_Inactivate_District', AdminMediator.Activate_Inactivate_District);

//Pincode Section
router.post('/Add_Pincode', AdminMediator.Add_Pincode);

router.post('/Edit_Pincode', AdminMediator.Edit_Pincode);

router.post('/List_Pincodes', AdminMediator.List_Pincodes);

router.post('/Activate_Inactivate_Pincode', AdminMediator.Activate_Inactivate_Pincode);

router.post('/Pincode', AdminMediator.Check_For_Pincode);

export default router;