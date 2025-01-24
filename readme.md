## **1. Разработка локально**

### **a. Внесите изменения в код**

1. Откройте проект в **VSCode**.
2. Внесите необходимые изменения в код (например, добавьте новые команды или измените существующие).

---

## **2. Развертывание изменений на Vercel**

можно развернуть их на Vercel.

### **a. Сохраните изменения в Git**

1. Добавьте изменения в Git:
   ```bash
   git add .
   ```
2. Создайте коммит:
   ```bash
   git commit -m "Описание изменений"
   ```

### **b. Разверните изменения на Vercel**

1. Запустите команду для развертывания:
   ```bash
   vercel --prod
   ```
2. Следуйте инструкциям на экране.

---

## **3. Проверка работы на production**

1. После завершения развертывания проверьте, что бот работает на production-URL:
   ```
   https://thws1testtgbot.vercel.app
   ```
2. Отправьте команду `/start` вашему боту в Telegram и убедитесь, что изменения применились.

---

## **4. Основные команды для работы**

### **a. Локальная разработка**

- Запуск бота:
  ```bash
  node bot.js
  ```

### **b. Развертывание на Vercel**

- Развертывание в preview-режиме:
  ```bash
  vercel
  ```
- Развертывание в production:
  ```bash
  vercel --prod
  ```

---

<!-- TODO -->

Про хранение токена.

если я буду хранить токен в переменной окружения, то как он попадет на vercel? Не понимаю концептуально

Отличный вопрос! Давайте разберем, как работают переменные окружения и как их правильно использовать при развертывании на Vercel.

1. Что такое переменные окружения?

Переменные окружения — это ключ-значение пары, которые хранят конфиденциальные данные (например, токены, API-ключи) вне вашего кода. Это позволяет:

    Не коммитить чувствительные данные в Git.

    Легко менять значения переменных без изменения кода.

    Использовать разные значения для разных окружений (например, локальное, staging, production).

2. Как использовать переменные окружения локально

   Создайте файл .env в корне проекта:
   Copy

   TELEGRAM_BOT_TOKEN=7325976583:AAFKB5X3o56RZg45N93JRGRHnWYEVJ3dRBo

   Установите пакет dotenv для загрузки переменных из .env:
   bash
   Copy

   npm install dotenv

   Загрузите переменные в коде:
   javascript
   Copy

   require("dotenv").config();
   const token = process.env.TELEGRAM_BOT_TOKEN;

   Добавьте .env в .gitignore, чтобы не коммитить его:
   Copy

   .env

3. Как передать переменные окружения на Vercel

Vercel позволяет настроить переменные окружения через интерфейс или CLI.
a. Через Dashboard Vercel

    Перейдите в Dashboard Vercel.

    Выберите ваш проект (thws1testtgbot).

    Перейдите в раздел Settings → Environment Variables.

    Добавьте переменную:

        Name: TELEGRAM_BOT_TOKEN

        Value: 7325976583:AAFKB5X3o56RZg45N93JRGRHnWYEVJ3dRBo

    Нажмите Save.

b. Через Vercel CLI

    Установите Vercel CLI, если ещё не установлен:
    bash
    Copy

    npm install -g vercel

    Добавьте переменную окружения:
    bash
    Copy

    vercel env add TELEGRAM_BOT_TOKEN

        Введите значение переменной (7325976583:AAFKB5X3o56RZg45N93JRGRHnWYEVJ3dRBo).

    Проверьте, что переменная добавлена:
    bash
    Copy

    vercel env ls

4.  Как Vercel использует переменные окружения

    При развертывании Vercel автоматически подставляет переменные окружения в ваш код.

    В коде вы можете обращаться к ним через process.env, как и локально.

5.  Пример использования
    a. Локально

        Создайте .env:
        Copy

        TELEGRAM_BOT_TOKEN=7325976583:AAFKB5X3o56RZg45N93JRGRHnWYEVJ3dRBo

        Используйте переменную в коде:
        javascript
        Copy

        require("dotenv").config();
        const token = process.env.TELEGRAM_BOT_TOKEN;

b. На Vercel

    Добавьте переменную через Dashboard или CLI.

    Используйте переменную в коде:
    javascript
    Copy

    const token = process.env.TELEGRAM_BOT_TOKEN;

6. Преимущества такого подхода

   Безопасность: Токен не хранится в коде и не коммитится в Git.

   Гибкость: Вы можете использовать разные токены для локальной разработки и production.

   Удобство: Не нужно менять код при смене окружения.

7. Если вы забыли добавить переменную на Vercel

Если вы развернули проект, но забыли добавить переменную окружения, бот не будет работать. В этом случае:

    Добавьте переменную через Dashboard или CLI.

    Переразверните проект:
    bash
    Copy

    vercel --prod

Теперь вы знаете, как безопасно хранить и использовать токен бота! Если остались вопросы, пишите, я помогу. 😊
