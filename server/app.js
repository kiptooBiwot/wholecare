const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
require("dotenv").config();
require('./helpers/mongodb.init')

const app = express();

// ROUTES
const userRoutes = require('./routes/User.routes')

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use('/api/v1/users', userRoutes)

app.use(async (req, res, next) => {
  next(createError.NotFound());
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
  console.log(`Server listening on port ${PORT}`);
})
