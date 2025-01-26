require('dotenv').config();

module.exports = {
  token: process.env.TELEGRAM_BOT_TOKEN,
  port: process.env.PORT || 3000,
  webAppUrl: 'https://thws1testtma.vercel.app/',
};