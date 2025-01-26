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

  const text =
    "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 \u043d\u0438\u0436\u0435:";

  const keyboard = {
    inline_keyboard: [
      [{ text: "\uD83D\uDC41 About", callback_data: "about" }],
      [{ text: "\uD83D\uDCD6 Help", callback_data: "help" }],
      [{ text: "\u260E\uFE0F Contacts", callback_data: "contacts" }],
      [{ text: "🐈 Run Purr App 🐈‍⬛", url: "https://thws1testtma.vercel.app/",}],
    ],
  };

  bot.sendMessage(chatId, text, {
    reply_markup: JSON.stringify(keyboard),
  });
});

// Обработка callback_query от inline keyboard
bot.on("callback_query", async (query) => {
  const { data, message } = query;

  if (!message) return;

  const chatId = message.chat.id;
  const messageId = message.message_id;

  try {
    // Обработчик кнопок
    switch (data) {
      case "about":
        await bot.editMessageText(
          `
          🤖 **About the bot**

          This bot was created by paws to:
          ฅ roll around
          ฅ purr
          ฅ sleep
          ฅ beg for food
          ฅ go crazy

          💡 **Technologies:**
          - Backend: Node.js
          - Frontend: React
          - Hosting: Vercel, Render
          `,
          {
            chat_id: chatId,
            message_id: messageId,
            parse_mode: "Markdown",
            reply_markup: JSON.stringify({
              inline_keyboard: [
                [
                  { text: "📖 Help", callback_data: "help" },
                  { text: "📞 Contacts", callback_data: "contacts" },
                ],
                [
                  {
                    text: "🐈 Run Purr App 🐈‍⬛",
                    url: "https://thws1testtma.vercel.app/",
                  },
                ],
              ],
            }),
          }
        );
        break;

      case "help":
        await bot.editMessageText(
          `
          📖 **Bot Help**
          Just run the app and have purr
          `,
          {
            chat_id: chatId,
            message_id: messageId,
            parse_mode: "Markdown",
            reply_markup: JSON.stringify({
              inline_keyboard: [
                [
                  { text: "📞 Contacts", callback_data: "contacts" },
                  { text: "🤖 About", callback_data: "about" },
                ],
                [
                  {
                    text: "🐈 Run Purr App 🐈‍⬛",
                    url: "https://thws1testtma.vercel.app/",
                  },
                ],
              ],
            }),
          }
        );
        break;

      case "contacts":
        await bot.editMessageText(
          `
          📞 **Contacts**

          If you have any questions or suggestions, please contact us:  
          📧 *E-mail:* [thomasweaverson@gmail.com](mailto:thomasweaverson@gmail.com)
          📱 *Telegram:* [@vegog](https://t.me/vegog)
          `,
          {
            chat_id: chatId,
            message_id: messageId,
            parse_mode: "Markdown",
            reply_markup: JSON.stringify({
              inline_keyboard: [
                [
                  { text: "📖 Help", callback_data: "help" },
                  { text: "🤖 About", callback_data: "about" },
                ],
                [
                  {
                    text: "🐈 Run Purr App 🐈‍⬛",
                    url: "https://thws1testtma.vercel.app/",
                  },
                ],
              ],
            }),
          }
        );
        break;

      default:
        await bot.answerCallbackQuery(query.id, {
          text: "Unknown command!",
          show_alert: true,
        });
        break;
    }

    // Уведомляем Telegram о завершении обработки
    await bot.answerCallbackQuery(query.id);
  } catch (error) {
    console.error("Error handling callback query:", error);
    await bot.answerCallbackQuery(query.id, {
      text: "Oops! Something went wrong.",
      show_alert: true,
    });
  }
});



// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Bot is running on port ${PORT}...`);
});
