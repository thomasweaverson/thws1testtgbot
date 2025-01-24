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
  console.log("Received update U*,*U:", body); // Логируем входящее обновление
  bot.processUpdate(body); // Передаем обновление боту
  console.log("Update processed"); // Логируем успешную обработку
  res.status(200).send("OK");
});

// Команда /start
bot.onText(/\/start/, (msg) => {
  console.log("/start command received");
  const chatId = msg.chat.id;

  // Текст сообщения
  const text = `ฅ^•ﻌ•^ฅ\nMeow on the button to launch the application🐾`;

  // Кнопка для открытия Mini App
  const keyboard = {
    inline_keyboard: [
      [
        {
          text: "🐾Open Mini App🐾", // Текст на кнопке
          web_app: { url: "https://thws1testtma.vercel.app/" }, // Ссылка на ваш Mini App
        },
      ],
    ],
  };

  // Отправляем сообщение с кнопкой
  bot
    .sendMessage(chatId, text, {
      reply_markup: JSON.stringify(keyboard),
    })
    .then(() => {
      console.log("Message sent successfully");
    })
    .catch((error) => {
      console.error("Error sending message:", error);
    });
});

// Команда /help
bot.onText(/\/help/, (msg) => {
  console.log("/help command received");
  const chatId = msg.chat.id;
  const text = `
      📖 **Bot Help**

      Here is a list of available commands:
      ฅ /start - Easy start
      ฅ /contacts - Contacts
      ฅ /about - Description
      ฅ /help - Help
  `;

  // Отправляем сообщение
  bot
    .sendMessage(chatId, text, { parse_mode: "Markdown" })
    .then(() => {
      console.log("Message sent successfully");
    })
    .catch((error) => {
      console.error("Error sending message:", error);
    });
});

// Команда /about
bot.onText(/\/about/, (msg) => {
  console.log("/about command received");
  const chatId = msg.chat.id;

  // Текст сообщения
  const text = `
        🤖 **About the bot**

        This bot is created with paws to:

            ฅ roll a cat
            ฅ purr
            ฅ sleep
            ฅ ask for food
            ฅ drive out the devil

        💡 **Technologies:**
        - Backend: Node.js
        - Frontend: React
        - Hosting: Vercel
  `;

  // Отправляем сообщение с кнопкой
  bot
    .sendMessage(chatId, text, {
      parse_mode: "Markdown", // Разрешаем Markdown
    })
    .then(() => {
      console.log("Message sent successfully");
    })
    .catch((error) => {
      console.error("Error sending message:", error);
    });
});

// Команда /contacts
bot.onText(/\/contacts/, (msg) => {
  console.log("/contacts command received");
  const chatId = msg.chat.id;

  // Текст сообщения
  const text = `
    📞 **Contacts**

    If you have any questions or suggestions, please contact us:  

    📧 *E-mail:*
    [thomasweaverson@gmail.com](mailto:thomasweaverson@gmail.com)

    📱 *Telegram:*
    [@vegog](https://t.me/vegog)
    

    🌐 *Website:*
    [example-test-not-real.com](https://example.com)

    📱 *Social networks (not real links):*
    ฅ [Telegram](https://t.me/your_channel)
    ฅ [Twitter](https://twitter.com/your_profile)
    ฅ [Instagram](https://instagram.com/your_profile)

    We are always happy to help! 😺
  `;

  // Отправляем сообщение
  bot
    .sendMessage(chatId, text, {
      parse_mode: "Markdown", // Разрешаем Markdown
    })
    .then(() => {
      console.log("Message sent successfully");
    })
    .catch((error) => {
      console.error("Error sending message:", error);
    });
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Bot is running on port ${PORT}...`);
});
