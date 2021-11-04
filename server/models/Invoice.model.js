const { Schema, model } = require('mongoose')

const InvoiceSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  billerStreetAddress: {
    type: String,
    required: true,
    trim: true
  },
  billerCity: {
    type: String,
    required: true,
    trim: true
  },
  billerZipCode: {
    type: String,
    required: true,
    trim: true
  },
  billerCountry: {
    type: String,
    required: true,
    trim: true
  },
  clientName: {
    type: String,
    required: true,
    trim: true
  },
  clientEmail: {
    type: String,
    required: true,
    trim: true
  },
  clientStreetAddress: {
    type: String,
    required: true,
    trim: true
  },
  clientCity: {
    type: String,
    required: true,
    trim: true
  },
  clientZipCode: {
    type: String,
    required: true,
    trim: true
  },
  clientCountry: {
    type: String,
    required: true,
    trim: true
  },
  invoiceDateUnix: {
    type: Date,
    required: true
  },
  invoiceDate: {
    type: Date,
    required: true
  },
  paymentTerms: {
    type: String,
    required: true,
    trim: true
  },
  paymentDueDateUnix: {
    type: Date,
    required: true,
    trim: true
  },
  paymentDueDate: {
    type: Date,
    required: true,
    trim: true
  },
  productDescription: {
    type: String,
    required: true,
    trim: true
  },
  invoicePending: {
    type: Boolean,
    required: true,
    default: true,
    trim: true
  },
  invoiceDraft: {
    type: Boolean,
    required: true,
    default: false,
    trim: true
  },
  invoicePaid: {
    type: Boolean,
    required: true,
    default: false,
    trim: true
  },
  invoiceItemList: [
    {
      // _id: {
      //   type: String,
      //   unique: true,
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
      }
    }
],
  invoiceTotal: {
    type: Number,
    required: true,
    trim: true
  }
}, { timestamps: true })

// InvoiceSchema.virtual ('invoiceItemList', {
//   ref: 'Item',
//   localField: '_id',
//   foreignField: 'invoice',
//   justOne: false
// })

InvoiceSchema.set('toObject', { virtuals: true })
InvoiceSchema.set('toJSON', { virtuals: true })

module.exports = model('Invoice', InvoiceSchema)
