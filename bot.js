const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const app = express();

require("dotenv").config();
const token = process.env.TELEGRAM_BOT_TOKEN;

// Создаем экземпляр бота
const bot = new TelegramBot(token);

// Middleware для обработки JSON
app.use(express.json());

// Обработка вебхуков
app.post("/", (req, res) => {
  const { body } = req;
  bot.processUpdate(body);
  res.status(200).send("OK");
});

// Команда /start с inline keyboard
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const text = "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 \u043d\u0438\u0436\u0435:";

  const keyboard = {
    inline_keyboard: [
      [{ text: "\uD83D\uDC41 About", callback_data: "about" }],
      [{ text: "\uD83D\uDCD6 Help", callback_data: "help" }],
      [{ text: "\u260E\uFE0F Contacts", callback_data: "contacts" }],
    ],
  };

  bot.sendMessage(chatId, text, {
    reply_markup: JSON.stringify(keyboard),
  });
});

// Обработка callback_query от inline keyboard
bot.on("callback_query", (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data === "about") {
    bot.sendMessage(
      chatId,
      "\uD83E\uDD16 **About the bot**\n\nThis bot is created with paws to:\n- Roll a cat\n- Purr\n- Sleep\n- Ask for food\n- Drive out the devil",
      { parse_mode: "Markdown" }
    );
  } else if (data === "help") {
    bot.sendMessage(
      chatId,
      "\uD83D\uDCD6 **Help**\n\nPush the kitty-button to start the PurrApp",
      { parse_mode: "Markdown" }
    );
  } else if (data === "contacts") {
    bot.sendMessage(
      chatId,
      "\u260E\uFE0F **Contacts**\n\n- Email: [thomasweaverson@gmail.com](mailto:thomasweaverson@gmail.com)\n- Telegram: [@vegog](https://t.me/vegog)",
      { parse_mode: "Markdown" }
    );
  }
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Bot is running on port ${PORT}...`);
});
