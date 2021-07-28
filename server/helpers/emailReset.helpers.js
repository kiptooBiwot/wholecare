const nodemailer = require("nodemailer");

module.exports = {
  transporter: nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_LOGIN,
      pass: process.env.EMAIL_PASSWORD,
    },
  }),

  getPasswordResetURL: (user, token) => {
   return `http://localhost:3000/password/reset/${user._id}/${token}`
  },

  resetPasswordTemplate: (user, url) => {
    const from = process.env.EMAIL_LOGIN;
    const to = user.email;
    const subject = "🌻 Whole Care Solutions App Password Reset 🌻";
    const html = `
  <p>Hey ${user.displayName || user.email},</p>
  <p>We heard that you lost your Whole Care Solutions App password. Sorry about that!</p>
  <p>But don’t worry! You can use the following link to reset your password:</p>
  <a href=${url}>${url}</a>
  <p>The one-time above link expires in 1 hour.</p>
  <p>Be productive today! </p>
  <p>–Your friends at Whole Care Solutions</p>
  `;

    return { from, to, subject, html };
  },
};
