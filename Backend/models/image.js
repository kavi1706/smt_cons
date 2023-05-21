const mongoose=require("mongoose")

const ImgSchema=mongoose.Schema({
    name:String,
    imageURL:String
})

module.exports=Imagemodel=mongoose.model("Images",ImgSchema)