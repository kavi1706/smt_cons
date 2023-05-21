const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  quantity:{
      type:Number,
      required:true
  },
  totalPrice:{
      type:Number,
      required:true
  },
  isdeleivered:{
       type:Boolean,
       default:false
  }
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
