const mongoose=require("mongoose")

const TypeSchema=new mongoose.Schema({
    tname: {
        type: String,
        required: true
      },
      img:{
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Categories',
        required:true
      },
      category_name:{
        type:String,
        required:true
      }
})


const productType =mongoose.model('ProductTypes',TypeSchema)
module.exports = productType;