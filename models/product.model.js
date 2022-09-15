const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Shema({
    _id:Schema.Types.ObjectId,
    title: String,
    description: String,
    Originalprice: String,
    price:String,
    categoryName: String,
    discount:String,
    Stockquantity: String,
    featured: Boolean,
    rating:String,
    imageUrl:String,
})

const Product = mongoose.model('Product', productSchema);

module.exports={Product}
