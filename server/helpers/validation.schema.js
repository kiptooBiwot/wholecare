const Joi = require('joi')

const authSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().lowercase(),
    firstName: Joi.string(),
    middleName: Joi.string(),
    surname: Joi.string(),
    acceptTerms: Joi.boolean()
})


const loginSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().lowercase()
})

const updatePwdSchema = Joi.object({
    password: Joi.string().min(6).required().trim(),
})

module.exports = {
  authSchema,
  loginSchema,
  updatePwdSchema,
};