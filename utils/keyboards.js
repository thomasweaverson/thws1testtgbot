module.exports = {
  startKeyboard: () => ({
    inline_keyboard: [
      [{ text: "ℹ️ About", callback_data: "about" }],
      [{ text: "📚 Help", callback_data: "help" }],
      [{ text: "📞 Contacts", callback_data: "contacts" }],
      [
        {
          text: "🐈 Run Purr App 🐈‍⬛",
          web_app: { url: "https://thws1testtma.vercel.app/" },
        },
      ],
    ],
  }),

  aboutKeyboard: () => ({
    inline_keyboard: [
      [
        { text: "📚 Help", callback_data: "help" },
        { text: "📞 Contacts", callback_data: "contacts" },
      ],
      [
        {
          text: "🐈 Run Purr App 🐈‍⬛",
          web_app: { url: "https://thws1testtma.vercel.app/" },
        },
      ],
    ],
  }),

  helpKeyboard: () => ({
    inline_keyboard: [
      [
        { text: "📞 Contacts", callback_data: "contacts" },
        { text: "ℹ️ About", callback_data: "about" },
      ],
      [
        {
          text: "🐈 Run Purr App 🐈‍⬛",
          web_app: { url: "https://thws1testtma.vercel.app/" },
        },
      ],
    ],
  }),

  contactsKeyboard: () => ({
    inline_keyboard: [
      [
        { text: "📚 Help", callback_data: "help" },
        { text: "ℹ️ About", callback_data: "about" },
      ],
      [
        {
          text: "🐈 Run Purr App 🐈‍⬛",
          web_app: { url: "https://thws1testtma.vercel.app/" },
        },
      ],
    ],
  }),
};