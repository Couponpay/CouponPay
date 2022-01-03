
let ShiprocketController = function () { };
import ApiMessages from "../config/ApiMessages.js";
import config from "../config/config.js";
import CommonController from "./CommonController.js";
import Shiprocket_Order_Log from "../models/Shiprocket_Order_Log.js";

ShiprocketController.CallbackFunctionality = async (req, res) => {
    try {
        let Data = JSON.parse(JSON.stringify(req.body));
        res.status(200).send("Callback Completed Successfully");
        
        let query = {
            AWB: Data.awb
        };
        let changes = {
            Current_Status: Data.current_status,
            Current_Status_ID: Data.current_status_id,
            Shipment_Status: Data.shipment_status,
            Shipment_Status_ID: Data.shipment_status_id,
            Scans: Data.scans,
            Etd: Data.etd,
            Current_Timestamp: Data.current_timestamp,
            updated_at: new Date()
        }
        let updateData = await Shiprocket_Order_Log.updateOne(query, changes).lean().exec();
        
        resolve("Successfully Completed");
    }
    catch (error) {
        if (!res.headersSent) {
            console.error("Something Shiprocket Callback error-->", error)
            res.status(200).send("Callback Completed Successfully");
        }
    }
}

export default ShiprocketController;