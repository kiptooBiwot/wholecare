const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    middleName: {
      type: String,
      trim: true,
    },
    surname: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
      lowercase: true,
    },
    dob: {
      type: Date
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
    mobile_number: {
      type: String,
      trim: true
    },
    work_number: {
      type: String,
      trim: true
    },
    home_number: {
      type: String,
      trim: true
    },
    bio: {
      type: String,
      trim: true
    },
    acceptTerms: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      trim: true
    },
    address: {
      type: String,
      trim: true
    },
    isOnline: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
)

module.exports = model('User', userSchema)
