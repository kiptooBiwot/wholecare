const { Schema, model } = require('mongoose')

const ItemSchema = new Schema({
  // _id: {
  //   type: Schema.Types.ObjectId,
  //   required: true
  // },
  name: {
    type: String,
    required: true,
    trim: true
  },
  qty: {
    type: Number,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  invoice: {
    type: Schema.Types.ObjectId,
    ref: 'Invoice'
  }
}, { timestamps: true })

module.exports = model('Item', ItemSchema)