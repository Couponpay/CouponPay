import mongoose from 'mongoose';
const Bonanza_Log = mongoose.Schema({
    BonanzaID: { type: String, default: "" },
    Bonanza_Code: { type: String, default: "" },
    Name: { type: String, default: "" },
    Description: { type: String, default: '' },
    Start_Date: { type: Date, default: null },
    End_Date: { type: Date, default: null },
    Bonanza_Type: { type: Number, default: 1 }, //1- Points, 2- Matrix, 3-both
    Points_Calculation_Data: {
        Amount: { type: Number, default: 0 },
        Points: { type: Number, default: 0 }
    },
    Bonanza_Points_Data: [{
        _id: false,
        Levels: { type: Number, default: 0 },
        Winning: { type: String, default: "" },
        Min_Points: { type: Number, default: 0 },
        Max_Points: { type: Number, default: 0 },
    }],
    Bonanza_Matrix_Data: [{
        _id: false,
        Winning: { type: String, default: "" },
        Levels: { type: Number, default: 0 },
        Matrix: { type: Number, default: 0 }
    }],
    Bonanza_Status: { type: Number, default: 1 }, //1- live, 2- completed, 3- cancelled, 4- upcoming
    Status: { type: Boolean, default: true },
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
}, { collection: "Bonanza_Log" });
export default mongoose.model('Bonanza_Log', Bonanza_Log);