const User = require('../models/User.model')
const createError = require('http-errors')
const bcrypt = require('bcrypt')
const cloudinary = require('../helpers/cloudinary.helpers')
const jwt = require('jsonwebtoken')

const {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
  createRecoverPasswordToken,
} = require('../helpers/jwt.helpers')
const { authSchema, loginSchema } = require('../helpers/validation.schema')
const { transporter, getPasswordResetURL, resetPasswordTemplate } = require('../helpers/emailReset.helpers')

module.exports.userControllers = {
  // GET ALL USERS REGISTERED
  getUsers: async (req, res, next) => {
    try {
      const allUsers = await User.find({});

      if (allUsers.length < 1)
        throw createError.NotFound("No users registered yet.");

      res.status(200).json({
        users: allUsers,
      });
    } catch (error) {
      next(error);
    }
  },
  // GET A PARTICULAR USER
  getUser: async (req, res, next) => {
    const oneUser = await User.findOne({ email: req.body.email });
    try {
      if (!oneUser) throw createError.NotFound("The user is not registered.");

      res.status(200).json({
        user: oneUser,
      });
    } catch (error) {
      next(error);
    }
  },

  // SIGN UP
  register: async (req, res, next) => {
    try {
      console.log(req.body);
      // Validate user data from frontend
      const validatedInput = await authSchema.validateAsync(req.body);

      // Check if a user's email already exists
      const userExists = await User.findOne({ email: validatedInput.email });

      if (userExists)
        throw createError.Conflict(
          `${validatedInput.email} is already taken. Try another email.`
        );
      // Hash password
      const hashedPassword = await bcrypt.hash(validatedInput.password, 10);

      // save data to the database
      const newUser = new User({
        ...req.body,
        password: hashedPassword,
      });

      const user = await newUser.save();

      // Generate a token and refresh token
      const accessToken = await signAccessToken(user);
      const refreshToken = await signRefreshToken(user);

      console.log(user)

      res.header("x-access-token", accessToken).status(201).json({
        user,
        message: `Registration successful`,
        // token: `Bearer ${accessToken}`,
        // refreshToken: `Bearer ${refreshToken}`
      });
    } catch (error) {
      next(error);
    }
  },

  // UPDATE USER INFO
  update: async (req, res, next) => {
    try {
      const user_details = req.body
      const user_id = req.params.id

      console.log('REQ>BODY:', req.body)
      console.log('REQ.FILE:', req.file)
      let savedURI = null

      if (req.file) {
        const file = req.file
        const { path } = file 

        const imageURI = await cloudinary.uploader.upload(path, {
          folder: "Whole Care Solutions"
        })

        savedURI = imageURI.secure_url
        // console.log(`Image URIs: ${savedURI}`)
      }
        // console.log(user_details)
        // console.log(`Body from SERVER: ${user_id}`)

        const userExists = await User.findOne({ _id: user_id })

        if (!userExists) throw createError.NotFound('Account creation failed. Can\'t seem to find your registration details.')

        const response = await User.findOneAndUpdate(
          { _id: req.params.id },
          {
            ...req.body,
            profileImage: savedURI
          },
          { new: true }
        )

        if (!response) throw createError(500, 'Your personal information not saved')
      
        // console.log(response)
      
        res.status(201).json({
          message: 'Your personal information is successfully saved',
          updatedUser: response
        })
    } catch (error) {
      next(error)
    }
  },

  // SIGN IN
  signin: async (req, res, next) => {
    try {
      // validate inputs from the user
      const validatedCredentials = await loginSchema.validateAsync(req.body);

      // check if email is registered
      const user = await User.findOne({ email: validatedCredentials.email });

      if (!user) throw createError.Forbidden("Invalid email and/or password");

      // check password
      const isPasswordValid = await bcrypt.compare(
        validatedCredentials.password,
        user.password
      );

      console.log(isPasswordValid);

      if (!isPasswordValid)
        throw createError.Forbidden("Invalid email and/or password");

      const accessToken = await signAccessToken(user);
      const refreshToken = await signRefreshToken(user);

      res.header("x-access-token", accessToken).status(200).send({
        message: `Log in successful`,
        token: `Bearer ${accessToken}`,
        refreshToken: `Bearer ${refreshToken}`,
      });
    } catch (error) {
      next(error);
    }
  },

  // REFRESH TOKEN
  refreshToken: async (req, res, next) => {
    try {
      const { refreshToken } = req.body;

      if (!refreshToken) throw createError.BadRequest();
      const userId = await verifyRefreshToken(refreshToken);

      // get user from db
      const user = await User.findOne({ _id: userId });

      const accessToken = await signAccessToken(user);
      const refreshedToken = await signRefreshToken(user);

      res.send({
        token: `Bearer ${accessToken}`,
        refreshToken: `Bearer ${refreshedToken}`,
      });
    } catch (error) {
      next(error);
    }
  },

  // LOG OUT
  logout: async (req, res, next) => {
    try {
      const { refreshToken } = req.body;
      // console.log(req.body);
      if (!refreshToken) throw createError.BadRequest();
      const userId = await verifyRefreshToken(refreshToken);

      // console.log(`USER_ID: ${userId}`);
      // Delete the refresh token from Redis
      client.DEL(userId, (err, val) => {
        if (err) {
          console.log(err);
          throw createError.InternalServerError();
        }

        // console.log(val);
        res.send({
          message: "Logged out!",
        });
      });
    } catch (error) {
      next(error);
    }
  },

  // RECOVER PASSWORD CONTROLLERS
  sendPasswordResetEmail: async (req, res, next) => {
    const { email } = req.params

    try {
      const user = await User.findOne({ email })

      if (!user) throw createError.NotFound('No user with such email is registered.')

      const token = createRecoverPasswordToken(user)
      const url = getPasswordResetURL(user, token)
      const emailTemplate = resetPasswordTemplate(user, url)

      console.log(`TOKEN: ${token}`)
      console.log(`URL: ${url}`)
      console.log(`EMAIL TEMPLATE: ${emailTemplate.html}`)

      const sendEmail = () => {
        transporter.sendMail(emailTemplate, (err, info) => {
          if (err) {
            res.status(500).json('Error sending mail')
          } else {
            res.status(200).json({
              message: 'Check your email for the instructions on how to access your password'
            })
          }
        })
      }
      sendEmail()

    } catch (error) {
      next(error)
    }
  },

  // Confirm token and update password
  receivePassword: async (req, res, next) => {
    const { id, token } = req.params
    const validatedInput = await updatePwdSchema.validateAsync(req.body);

    try {
      const user = await User.findOne({ _id: id })

      if (!user) throw createError.NotFound('User not found')

      const secret = user.password + '-' + user.createdAt
      const payload = await jwt.decode(token, secret)

      if (payload.id === user._id) {
        // Hash password
        const hashedPassword = await bcrypt.hash(validatedInput.password, 10)

        const pwdUpdate = await User.findOneAndUpdate({ _id: id }, { password: hashedPassword })

        if (pwdUpdate) {
          res.status(200).json({
            message: 'Password updated successfully'
          })
        }
      }
    } catch (error) {
      next(error)
    }
  }
}
