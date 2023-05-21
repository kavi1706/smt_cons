const mongoose=require("mongoose")

const ProductSchema = new mongoose.Schema({
    pname: {
      type: String,
      required: true,
    },
    img:  {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    product_type_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductTypes',
      required: true,
    },
    product_type: {
      type: String,
      required: true,
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Categories',
      required: true,
    },
    category_type: {
      type: String,
      required: true,
    },
  });
  
  const product = mongoose.model('Products', ProductSchema);
  
  module.exports = product;
  





// const ProductSchema=new mongoose.Schema({
//     pname: {
//         type: String,
//         required: true
//       },
//       img:{
//         data:Buffer,
//         contentType:String,
//     },
//       description: {
//         type: String,
//         required: true
//       },
//       price: {
//         type: Number,
//         required: true
//       },
//       rating: {
//         type: Number,
//         required: true
//       },
//       product_type_id: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'ProductTypes',
//         required: true
//       },
//       category_id:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:'Categories',
//         required:true
//       }

// })


// const product =mongoose.model('Products',ProductSchema)
// module.exports = product;