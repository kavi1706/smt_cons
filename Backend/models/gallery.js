const mongoose=require("mongoose")

const gallerySchema=mongoose.Schema({
    image:{
        type:String,
        require:true
    }
})


module.exports=mongoose.model("Gallery",gallerySchema)
