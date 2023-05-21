const mongoose=require("mongoose")

const CategorySchema=new mongoose.Schema({
    cname: {
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
      }
})

const category =mongoose.model('Categories',CategorySchema)
module.exports = category;