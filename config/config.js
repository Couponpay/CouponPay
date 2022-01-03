let config = function () { };

//Buyer Settings
config.max_buyer_network_heirarchy = 9;
config.no_of_buyer_share = 6; //We will remove the first element before processing
config.buyer_share_total_amount_limit = 25000;
config.OFFER_MESSAGE_LENGTH = 146;
config.MAX_NUMBER_TRIMMING_HEIRARCHY = 10;
config.max_buyer_ultimate_network_heirarchy = 10;

//user shops
config.User_Shop_Amount = 100;
config.User_shop_referal_Percent = 500;
config.User_shop_rejister_cash_coupons = 10;

config.Take_Date_Time_Format = 'DD-MM-YYYY HH:mm:ss';
config.Take_Date_Format = 'DD-MM-YYYY';

config.Common_Date_Time_Format = 'DD-MM-YYYY, HH:mm:ss A';
config.Common_Date_Format = 'DD-MM-YYYY';
config.Common_Time_Format = 'HH:mm:ss';

//Body Parser Limit
config.BodyParserLimit = '2mb';

//Tax Persent
config.TAX = 5; //5%
config.TDS = 5; //5%

//User OTP Tries and OTP Request
config.OTP_COUNT = 4;
config.OTP_TRIES_COUNT = 4;
//config.PIN_TRIES_COUNT = 10;
config.OTP_COUNT_TIME_IN_MINUTES = 30
config.OTP_TRIES_COUNT_TIME_IN_MINUTES = 30
//config.PURCHASE_PIN_TRIES_COUNT_TIME_IN_MINUTES = 30

//Application Secret Credentials
config.SECRETCODE = "EDFGJS-DHSHAJ-DASHJDJH-DHJSGAJH";
config.SECRET_OTP_CODE = '900900';
config.SECRET_API_KEY = "API123";
config.SECRET_SESSIONID = 'TESTING123';

config.NEWS_LIMIT = 10;
config.News_Title_Length = 160;
config.News_Description_Length = 260;

//Image Limit Size
config.Image_Size = 5 * 1024 * 1024;

//
config.SMALL_BANNERS_LIMIT = 10;
config.BIG_BANNERS_LIMIT = 10;
config.SMALL_ICONS_LIMIT = 10;
config.UPI_REGEX_FORMAT = /^\w+@\w+$/;

//Buyer Amount Share Request
config.Wallet_Amount_Request_Share_Percent = 20;
config.Purchase_Wallet_Amount_Request_Share_Percent = 80;

// //AWS Credentials
// config.S3AccessKey = "AKIAIPMNRY3QJCW5VY7Q"; //Dogemo
// config.S3Secret = "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";
// config.S3Bucket = "dogemo";
// config.S3URL = "https://s3-us-west-2.amazonaws.com/dogemo/";

//AWS Credentials  Dream House
// config.S3AccessKey = "AKIAJPZSXQSZOZSND7JA";
// config.S3Secret = "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";
// config.S3Bucket = "ncevo";
// config.S3URL = "https://s3-us-west-2.amazonaws.com/ncevo/";

config.S3Region = "ap-south-1";
config.S3AccessKey = "AKIATQR42DYPEDH5DQFX";
config.S3Secret = "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";
config.S3Bucket = "cbsagiam";
config.S3URL = "https://cbsagiam.s3.ap-south-1.amazonaws.com/"

config.AWS = {
    S3Region: "ap-south-1",
    S3AccessKey: "AKIATQR42DYPEDH5DQFX",  // Studentx
    S3Secret: "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",
    S3Bucket: "cbsagiam",
    S3URL: "https://cbsagiam.s3.ap-south-1.amazonaws.com/"
};

// //MSG91 Credentials
// config.msg91 = {
//     "authkey": "298172AIWaRfM4R55d9ef2a6", //Dogemo
//     "sender_id": "DOGEMO",
//     "route_no": "4"
// } 

//MSG91 Credentials Dream House
// config.msg91 = {
//     "host": "http://control.msg91.com/api/",
//     "authkey": "265241A2LCITy67l5c7cd8e3",
//     "sender_id": "DHOUSE",
//     "route_no": "4"
// }


config.msg91 = {
    "host": "http://control.msg91.com/api/",
    "authkey": "353785AdboEgarbV602151f6P1",
    "sender_id": "ONEMOR",
    "route_no": "4",
    "otp_template_id": "606afba78f0f9f7d9968673a",
    "baseURL": 'https://api.msg91.com/api'

}

//ShipRocket 
config.shiprocket = {
    "baseurl": "https://apiv2.shiprocket.in/v1/external", //Dogemo
    "email": "tech@kenwin.in",
    "password": "Api@123"
}

//Admin Dashboard Config
config.AdminID = 'ADMIN123456789-0123456789-ADMIN123456789';
config.SessionID = 'SESSION123456789-0123456789-SESSION123456789';


config.RazorpayX_Service_Amount = Amount => {
    return new Promise(async (resolve, reject) => {
        try {
            let Service_Amount = 0;
            if (Amount < 1000) {
                Service_Amount = 10;
            } else if (Amount >= 1000 && Amount < 25000) {
                Service_Amount = 15;
            } else if (Amount >= 25000 && Amount < 50000) {
                Service_Amount = 20;
            } else if (Amount >= 50000 && Amount < 100000) {
                Service_Amount = 30;
            } else if (Amount >= 100000) {
                Service_Amount = 50;
            };
            if (Amount <= Service_Amount) {
                Service_Amount = 0;
            };
            resolve(Service_Amount);
        } catch (error) {
            console.error("config error----->");
            console.error(error);
            resolve(0);
        }
    });
}

//RazorpayX Transaction Statuses
config.Razorpay_Transaction_Data = [
    {
        Transaction_Status: 0,
        Comment: "transaction initiated",
        status: "initiated"
    },
    {
        Transaction_Status: 1,
        Comment: "transaction queued",
        status: "queued"
    },
    {
        Transaction_Status: 2,
        Comment: "transaction processed",
        status: "processed"
    },
    {
        Transaction_Status: 3,
        Comment: "transaction issued",
        status: "issued"
    },
    {
        Transaction_Status: 4,
        Comment: "transaction initiated",
        status: "processing"
    },
    {
        Transaction_Status: 5,
        Comment: "transaction reversed",
        status: "reversed"
    },
    {
        Transaction_Status: 6,
        Comment: "transaction created",
        status: "processing"
    },
    {
        Transaction_Status: 7,
        Comment: "transaction cancelled",
        status: "cancelled"
    }
];

config.Box_One_Max_Count = 2;
config.Box_Two_Max_Amount = 3;
config.Box_Three_Max_Amount = 4;
config.Take_Date_Format_Order = 'YYYYMMDD';


/***************************
 * 
 * Server Setting for Production and Development
 * 
 * **********************************************************/

config.Whether_Production_Settings = false;

if (config.Whether_Production_Settings) {
    // Production Settings
    config.hostname = 'https://apicb.mobilerechargeapp.net';
    // config.hostname = 'http://localhost:11001';
    // config.MongoURL = `mongodb://usersag1more:usersag1more123@dbcb.mobilerechargeapp.net:1234/cpnbazar?replicaSet=cb`;
    config.MongoURL = `mongodb+srv://couponpay:couponpay123@cluster0.dfzce.mongodb.net/buypay?retryWrites=true&w=majority`;
    //config.MongoURL = `mongodb://dogemo:dogemo123@ds329058.mlab.com:29058/dogemo`;

    //ports
    config.api_port = 3000;
    config.admin_port = 3001;
    config.web_port = 3002;

    config.File_Size = 5 * 1024 * 1024;

    // //Razorpay Dogemo live
    // config.razorpay = {
    //     host: "api.razorpay.com/v1",
    //     baseURL: "https://api.razorpay.com/v1",
    //     merchant_id: "90ry5yGtvC1t87",
    //     key_id: "rzp_live_KMjigiMmgv0osg",
    //     key_secret: "zYnbxYaHJs582SVnERIxSuZ7",
    //     razorpayx_account_number: "7878780043771557",
    //     webhook_secret: "indian153"
    // }

    //Razorpay Dogemo Test
    config.razorpay = {
        host: "api.razorpay.com/v1",
        baseURL: "https://api.razorpay.com/v1",
        merchant_id: "90ry5yGtvC1t87",
        key_id: "rzp_test_FIzHP8BxeZ6fQP",
        key_secret: "LJIWIIMt0rULsnflpzVCnSxx",
        razorpayx_account_number: "7878780043771557",
        webhook_secret: "indian153"
    }

} else {
    // Testing Settings
    config.hostname = 'http://localhost:5001/';

    // config.hostname = '	cxapi.mobilerechargeapp.net';
    // config.MongoURL = `mongodb://usersag1more:usersag1more123@dbf.1more.plus:1234/cpnbazar?replicaSet=onemoreplus`;
    config.MongoURL = `mongodb+srv://couponpay:couponpay123@cluster0.dfzce.mongodb.net/buypay_test?retryWrites=true&w=majority`;

    //ports
    // config.api_port = 6000;
    config.api_port = 5001;
    config.admin_port = 5002;
    config.web_port = 8000;

    //File Size
    config.File_Size = 5 * 1024 * 1024;

    //Razorpay
    // config.razorpay = {
    //     host: "api.razorpay.com/v1",
    //     baseURL: "https://api.razorpay.com/v1",
    //     merchant_id: "DSLMGDyWYCSHHA",
    //     key_id: "rzp_test_3XFfYKSUgd26T9",
    //     key_secret: "ZXWSYj7fC9zXQtm3Qcq6kA6c",
    //     razorpayx_account_number: "7878780088919398",
    //     webhook_secret: "indian153"
    // }
    config.razorpay = {
        host: "api.razorpay.com/v1",
        baseURL: "https://api.razorpay.com/v1",
        merchant_id: "90ry5yGtvC1t87",
        key_id: "rzp_test_FIzHP8BxeZ6fQP",
        key_secret: "LJIWIIMt0rULsnflpzVCnSxx",
        razorpayx_account_number: "7878780043771557",
        webhook_secret: "indian153"
    }
}

export default config;