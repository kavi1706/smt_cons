//const { error } = require("console")
const express=require("express")
const routes=express.Router()
const Product=require('../models/product')
const Image=require("../models/image")
const ProductType=require("../models/type")
const Category=require("../models/category")
const multer = require("multer")
const fs=require("fs")
const { log } = require("console")
const product = require("../models/product")
const app=express()
const path=require("path")



const cat_storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, "./uploads/category_images");
  },
  filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, fileName)
  }
});

const upload_cat= multer({
  storage: cat_storage,
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif"];
    const allowedExtensions = [".png", ".jpeg", ".jpg", ".gif"];

    if (allowedMimeTypes.includes(file.mimetype) && allowedExtensions.includes(path.extname(file.originalname).toLowerCase())) {
        cb(null, true);
    } else {
        cb(null, false);
        return cb(new Error('Allowed only .png, .jpg, .jpeg, and .gif'));
    }
  }
});
  
  routes.post("/category", upload_cat.single("categoryImage"), (req, res) => {
    const url = req.protocol + '://' + req.get('host')
    const saveImage =  Category({
      cname: req.body.cname,
      img: url + '/uploads/category_images/' + req.file.filename,
      description:req.body.description
    });
    saveImage
      .save()
      .then((res) => {
        console.log("category image is saved");
      })
      .catch((err) => {
        console.log(err, "error has occur");
      });
      res.send('category image is saved')
  });


  // product types upload

  
  const type_storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/product_types");
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName)
    }
  });
  
  const upload_type= multer({
    storage: type_storage,
    fileFilter: (req, file, cb) => {
      const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif"];
      const allowedExtensions = [".png", ".jpeg", ".jpg", ".gif"];
  
      if (allowedMimeTypes.includes(file.mimetype) && allowedExtensions.includes(path.extname(file.originalname).toLowerCase())) {
          cb(null, true);
      } else {
          cb(null, false);
          return cb(new Error('Allowed only .png, .jpg, .jpeg, and .gif'));
      }
    }
  });
   

  routes.post("/types", upload_type.single("productTypeImage"), async(req, res) => {
    try{
      const url = req.protocol + '://' + req.get('host')
    const category=req.body.category;
    //console.log(category);
    const cat=await Category.find({cname:category})
    const id=cat[0].id
  
    const saveImage =  ProductType({
      tname: req.body.tname,
      img:url + '/uploads/product_types/' + req.file.filename,
      description:req.body.description,
      category_id:id,
      category_name:req.body.category
    });
    saveImage
      .save()
      .then((res) => {
        console.log("type image is saved");
      })
      .catch((err) => {
        console.log(err, "error has occur");
      });
      res.send('type image is saved')
    }
    catch(err){
      console.log(err)
              res.sendStatus(412)
    }
  });
  

// product upload

const product_storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, "./uploads/products");
  },
  filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, fileName)
  }
});


const upload_product= multer({
  storage: product_storage,
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif", "image/jfif"];
    const allowedExtensions = [".png", ".jpeg", ".jpg", ".gif", ".jfif"];

    if (allowedMimeTypes.includes(file.mimetype) && allowedExtensions.includes(path.extname(file.originalname).toLowerCase())) {
        cb(null, true);
    } else {
        cb(null, false);
        return cb(new Error('Allowed only .png, .jpg, .jpeg, and .gif, .jfif'));
    }
  }
});

  routes.post("/product", upload_product.single("productImage"),async (req, res) => {
    try{
      const url = req.protocol + '://' + req.get('host')
    const category=req.body.category;
    console.log(req.body.category);
    const cat=await Category.find({cname:category})
    const c_id=cat[0].id
    //console.log("dsd"+c_id);


    const product=req.body.type
    const pro=await ProductType.find({tname:product})
    const p_id=pro[0].id;
    //console.log(p_id)




    const saveImage =  Product({
      pname: req.body.pname,
      img: url + '/uploads/products/' + req.file.filename ,
      description:req.body.description,
      price:req.body.price,
      rating:req.body.rating,
      product_type_id:p_id,
      product_type:req.body.type,
      category_id:c_id,
      category_type:req.body.category,

    });
    saveImage
      .save()
      .then((res) => {
        console.log("product image is saved");
      })
      .catch((err) => {
        console.log(err, "error has occur");
      });
      res.send('product image is saved')

    }
    catch(err){
      console.log(err)
      res.send(412)
    }
  });
  



//get category

routes.get("/category",async(req,res)=>{
  try{
  const category=await Category.find()
 // console.log(category.length);
  res.send(category)
  }
  catch(err){
console.log(err)

  }
})


//get types acccording to category

routes.get("/category/type/:category",async(req,res)=>{
    try{
        const category= await Category.find({cname:req.params.category})
        const types= await ProductType.find({category_id:category[0].id})
        res.send(types)
    }
    catch(err){
      res.sendStatus(412)
    }
})


//get products according to types


routes.get("/category/product/:type",async(req,res)=>{
  try{
    const type=await ProductType.find({tname:req.params.type})
    const products= await Product.find({product_type_id:type[0].id})
    res.send(products)
  }
  catch(err){
    res.sendStatus(412)
  }
})

routes.delete("/product/delete/:id",async(req,res)=>{
  try{
        const product=await Product.deleteOne({_id:req.params.id})

  }
  catch(err){
console.log();
  }
})



//delete category

routes.delete("/deletecategory/:id",async(req,res)=>{
     try{
           
           const product=await Product.deleteMany({category_id:req.params.id})
           const type=await ProductType.deleteMany({category_id:req.params.id})
           await Category.deleteOne({_id:req.params.id})

           res.send("yes")
     }
     catch(err){
res.send(err)
     }
})


module.exports=routes