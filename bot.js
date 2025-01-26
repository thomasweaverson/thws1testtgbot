const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');
const startCommand = require('./commands/start');
const callbackQueryHandler = require('./handlers/callback-query');

const app = express();
const bot = new TelegramBot(config.token);

// Middleware для обработки JSON
app.use(express.json());

// Обработка вебхуков
app.post('/', (req, res) => {
  const { body } = req;
  bot.processUpdate(body);
  res.status(200).send('OK');
});

// Подключение обработчиков
startCommand(bot);
callbackQueryHandler(bot);

// Запуск сервера
app.listen(config.port, () => {
  console.log(`Bot is running on port ${config.port}...`);
});