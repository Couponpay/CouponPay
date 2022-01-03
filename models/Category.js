import mongoose from 'mongoose';
const Category = mongoose.Schema({
    CategoryID: { type: String, default: '' },
    Category_Name: { type: String, default: '' },
}, { collection: "Category" });
export default mongoose.model('Category', Category);