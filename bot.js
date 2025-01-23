const TelegramBot = require("node-telegram-bot-api");

// Замените на ваш токен
const token = "7325976583:AAFKB5X3o56RZg45N93JRGRHnWYEVJ3dRBo";

// Создаем экземпляр бота
const bot = new TelegramBot(token, { polling: true });

// Команда /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Текст сообщения
  const text = `
    ฅ^•ﻌ•^ฅ
    Meow on the button to launch the application🐾
  `;

  // Кнопка для открытия Mini App
  const keyboard = {
    inline_keyboard: [
      [
        {
          text: "🚀 Открыть Mini App", // Текст на кнопке
          web_app: { url: "https://thws1testtma.vercel.app/" }, // Ссылка на ваш Mini App
        },
      ],
    ],
  };

  // Отправляем сообщение с кнопкой
  bot.sendMessage(chatId, text, {
    reply_markup: JSON.stringify(keyboard),
  });
});

// Команда /help
bot.onText(/\/help/, (msg) => {
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
  bot.sendMessage(chatId, text, { parse_mode: "Markdown" });
});

// Команда /about
bot.onText(/\/about/, (msg) => {
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
  bot.sendMessage(chatId, text, {
    parse_mode: "Markdown", // Разрешаем Markdown
  });
});

// Команда /contacts
bot.onText(/\/contacts/, (msg) => {
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
  bot.sendMessage(chatId, text, {
    parse_mode: "Markdown", // Разрешаем Markdown
  });
});

// Запуск бота
console.log("bot on duty ...");
