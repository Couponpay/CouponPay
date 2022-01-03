let DeviceController = function () { };
//Dependencies
import uuid from "uuid";
import moment from "moment";

//Models
import Devices from "../models/Devices";
import ApiMessages from "../config/ApiMessages";
import Installed_Devices from "../models/Installed_Devices";
import App_Versions_Settings from "../models/App_Versions_Settings";
import CommonController from "./CommonController";

DeviceController.Generate_DeviceID = () => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let Data = {
                    DeviceID: uuid.v4()
                }
                resolve({ success: true, extras: { Data: Data } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

DeviceController.Validate_Splash_Screen_App_Versions_and_Send_Response = (values, DeviceData) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let DeviceType = parseInt(values.DeviceType) || 1;
                let AppVersion = parseFloat(values.AppVersion) || 1;
                let VersionData = await CommonController.Common_Register_or_Get_App_versions();
                let CheckingVersion = (DeviceType == 1) ? VersionData.Android_Version : VersionData.IOS_Version;
                let Whether_Latest_Version = (AppVersion >= CheckingVersion) ? true : false;
                resolve({ success: true, extras: { Status: "Device Splash Screen Completed Successfully", ApiKey: DeviceData.ApiKey, Whether_Latest_Version: Whether_Latest_Version } });
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

DeviceController.Add_or_Update_Device_And_Get_Device_Information = (values, IPAddress) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let ApiKey = uuid.v4();
                let query = {
                    DeviceID: values.DeviceID
                };
                let Result = await Devices.findOne(query).lean();
                let DeviceType = parseInt(values.DeviceType) || 1;
                if (Result == null) {
                    //New Device
                    let Interval = parseInt(moment().utcOffset(330).format('kk'));
                    let Data = {
                        ApiKey: ApiKey,
                        DeviceID: values.DeviceID,
                        DeviceType: DeviceType,
                        DeviceName: values.DeviceName,
                        AppVersion: values.AppVersion,
                        IPAddress: IPAddress,
                        InstallTime: new Date(),
                        Interval: Interval,
                        created_at: new Date(),
                        updated_at: new Date()
                    }
                    let DeviceResult = await Devices(Data).save();
                    resolve(JSON.parse(JSON.stringify(DeviceResult)));
                    let SaveResult = await Installed_Devices(Data).save();
                } else {
                    //Existing Device
                    let changes = {
                        $set: {
                            ApiKey: ApiKey,
                            AppVersion: values.AppVersion,
                            IPAddress: IPAddress,
                            updated_at: new Date()
                        }
                    };
                    let UpdatedStatus = await Devices.updateOne(query, changes).lean();
                    Result.ApiKey = ApiKey;
                    Result.AppVersion = values.AppVersion;
                    Result.IPAddress = IPAddress;
                    resolve(Result);
                };
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}


DeviceController.Splash_Screen_Validate_Device_Type = (values) => {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                let DeviceType = parseInt(values.DeviceType) || 1;
                if (DeviceType == 1 || DeviceType == 2 || DeviceType == 3) {
                    resolve("Validated Successfully");
                } else {
                    reject({ success: false, extras: { msg: ApiMessages.INVALID_DEVICE } })
                }
            } catch (error) {
                reject(await CommonController.Common_Error_Handler(error));
            }
        });
    });
}

export default DeviceController;