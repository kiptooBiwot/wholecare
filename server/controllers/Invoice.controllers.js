const Invoice = require('../models/Invoice.model')
const createError = require('http-errors')
// const Item = require('../models/Item.model')

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const invoice = await Invoice.find({})
      res.status(200).json(invoice)
    } catch (err) {
      next(err)
    }
  },
  getOne: async (req, res, next) => {
    try {
      const oneInvoice = await Invoice.findById({ _id: req.params.id })

      res.status(200).json(oneInvoice)
    } catch (err) {
      console.log(err)
      next(err)
    }
  },
  createInvoice: async (req, res, next) => {
    try {
      const { id, billerStreetAddress, billerCity, billerZipCode, billerCountry, clientName, clientEmail, clientStreetAddress, clientCity, clientZipCode, clientCountry, invoiceDateUnix, invoiceDate, paymentTerms, paymentDueDateUnix, paymentDueDate, productDescription, invoicePending, invoiceDraft, invoiceTotal, invoiceItemList } = req.body
      // console.log('REQ.BODY: ', req.body)
      const formattedItems =  invoiceItemList.map(item => ({ ...item }))

      const newInvoice = new Invoice({
        id, billerStreetAddress, billerCity, billerZipCode, billerCountry, clientName, clientEmail, clientStreetAddress, clientCity, clientZipCode, clientCountry, invoiceDateUnix, invoiceDate, paymentTerms, paymentDueDateUnix, paymentDueDate, productDescription, invoicePending, invoiceDraft, invoiceTotal, invoiceItemList: formattedItems
      })

      const savedInvoice = await newInvoice.save()

      res.status(201).json({
        message: 'Invoice created',
        savedInvoice
        // savedItems
      })

    } catch (err) {
      next(err)
    }
  },

  updateOne: async (req, res, next) => {
    try {
      const id = req.params.id

      // console.log(`From FE: ${req.body}`)
      
      const invoiceFound =  await Invoice.findById({ _id: id })
      
      if (!invoiceFound) throw createError.NotFound('That invoice was not found!')

      // const formattedItems = req.body.invoiceItemList.map(item => ({ ...item }))

      const updatedInvoice = await Invoice.findByIdAndUpdate({ _id: id }, 
        {
          ...req.body,
          // invoiceItemList: formattedItems
        },
        { new: true } 
      )

      res.status(200).json({
        updatedInvoice,
        message: 'Invoice updated successfully'
      })
    } catch (err) {
      console.log(err)
      next(err)
    }
  },

  deleteOne: async (req, res, next) => {
    try {
      const id = req.params.id

      const deletedInvoice = await Invoice.deleteOne({ _id: id })

      if (!deletedInvoice) throw createError(500, 'Deletion failed')

      res.status(200).json({
        message: 'Invoice deleted!'
      })
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
}