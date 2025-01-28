const keyboards = require("../utils/keyboards");

module.exports = (bot) => {
  bot.on("callback_query", async (query) => {
    const { data, message } = query;

    if (!message) return;

    const chatId = message.chat.id;
    const messageId = message.message_id;

    try {
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
  - Frontend: React, TS, TailwindCSS, Axios
  - Hosting: Vercel, Render
  - Third party api: thecatapi.com
            `,
            {
              chat_id: chatId,
              message_id: messageId,
              parse_mode: "Markdown",
              reply_markup: JSON.stringify(keyboards.aboutKeyboard()),
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
              reply_markup: JSON.stringify(keyboards.helpKeyboard()),
            }
          );
          break;

        case "contacts":
          await bot.editMessageText(
            `
            📞 **Contacts**

  If you have any questions or suggestions, please contact me:  

  📧 [thomasweaverson@gmail.com](mailto:thomasweaverson@gmail.com)
  
  📱 *TG:* [@vegog](https://t.me/vegog)
            `,
            {
              chat_id: chatId,
              message_id: messageId,
              parse_mode: "Markdown",
              reply_markup: JSON.stringify(keyboards.contactsKeyboard()),
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

      await bot.answerCallbackQuery(query.id);
    } catch (error) {
      console.error("Error handling callback query:", error);
      await bot.answerCallbackQuery(query.id, {
        text: "Oops! Something went wrong.",
        show_alert: true,
      });
    }
  });
};
