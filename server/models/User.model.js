const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    middleName: {
      type: String,
      trim: true,
    },
    surname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      index: true,
      lowercase: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    profileImage: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      default: 'user',
      lowercase: true,
      enum: ['admin', 'user']
    },
    isEnabled: {
      type: Boolean,
      default: false
    },
    contact_number: {
      type: String,
      trim: true
    }
  },
  { timestamps: true }
)

module.exports = model('User', userSchema)
