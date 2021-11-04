const router = require('express').Router()
const invoiceControllers =  require('../controllers/Invoice.controllers')

router.get('/', invoiceControllers.getAll)

router.get('/:id', invoiceControllers.getOne)

router.post('/', invoiceControllers.createInvoice)

router.patch('/:id/edit', invoiceControllers.updateOne)

router.delete('/:id/delete', invoiceControllers.deleteOne)

module.exports = router