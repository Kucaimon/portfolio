# Настройка EmailJS для формы обратной связи

## Инструкция по настройке

### Шаг 1: Регистрация на EmailJS

1. Перейдите на сайт [EmailJS](https://www.emailjs.com/)
2. Зарегистрируйтесь или войдите в аккаунт
3. Перейдите в Dashboard

### Шаг 2: Создание Email Service

1. В Dashboard перейдите в раздел **Email Services**
2. Нажмите **Add New Service**
3. Выберите ваш email-провайдер (Gmail, Outlook и т.д.)
4. Следуйте инструкциям для подключения
5. Скопируйте **Service ID** (например: `service_xxxxxxx`)

### Шаг 3: Создание Email Template

1. Перейдите в раздел **Email Templates**
2. Нажмите **Create New Template**
3. Настройте шаблон:

   - **Subject**: `Новое сообщение с портфолио от {{from_name}}`
   - **Content**:

   ```
   Имя: {{from_name}}
   Email: {{from_email}}

   Сообщение:
   {{message}}
   ```

4. Сохраните шаблон
5. Скопируйте **Template ID** (например: `template_xxxxxxx`)

### Шаг 4: Получение Public Key

1. Перейдите в раздел **Account** → **General**
2. Найдите **Public Key**
3. Скопируйте его

### Шаг 5: Обновление кода

Откройте файл `js/main.js` и замените следующие значения:

1. **YOUR_PUBLIC_KEY** на ваш Public Key (строка 100)
2. **YOUR_SERVICE_ID** на ваш Service ID (строка 120)
3. **YOUR_TEMPLATE_ID** на ваш Template ID (строка 121)

### Пример:

```javascript
emailjs.init("abc123xyz"); // Ваш Public Key

emailjs.send(
  "service_abc123", // Ваш Service ID
  "template_xyz789", // Ваш Template ID
  templateParams
);
```

## Альтернативный вариант: Formspree

Если предпочитаете использовать Formspree:

1. Зарегистрируйтесь на [Formspree](https://formspree.io/)
2. Создайте новую форму
3. Получите endpoint URL (например: `https://formspree.io/f/xxxxxxx`)
4. Замените код в `js/main.js` на вариант с Formspree (раскомментируйте закомментированный код)

## Готово!

После настройки форма будет отправлять письма на ваш email: **gosha19982306@gmail.com**
