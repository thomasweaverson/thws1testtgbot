const keyboards = require('../utils/keyboards');

module.exports = (bot) => {
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const text = "Выберите действие из списка ниже:";

    bot.sendMessage(chatId, text, {
      reply_markup: JSON.stringify(keyboards.startKeyboard()),
    });
  });
};