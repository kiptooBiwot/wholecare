const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
const cors = require('cors')
require("dotenv").config();
require('./helpers/mongodb.init')

const app = express();

// ROUTES
const userRoutes = require('./routes/User.routes')
const participantRoutes = require('./routes/Participant.routes')
const invoiceRoutes = require('./routes/Invoice.routes')

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))
app.use(cors())

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/participant', participantRoutes)
app.use('/api/v1/invoice', invoiceRoutes)

app.use(async (req, res, next) => {
  next(createError.NotFound())
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
