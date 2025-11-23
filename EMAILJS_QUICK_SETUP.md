# ⚡ Быстрая настройка EmailJS (5 минут)

## 🎯 Что нужно сделать:

### 1️⃣ Зарегистрируйтесь на https://www.emailjs.com/

### 2️⃣ Создайте Email Service
- Email Services → Add New Service → Gmail
- Подключите свой Gmail (gosha19982306@gmail.com)
- **Скопируйте Service ID** (уже указан: `service_eftexan`)

### 3️⃣ Создайте Email Template
- Email Templates → Create New Template
- **Subject:** `Новое сообщение с портфолио от {{from_name}}`
- **Content:**
  ```
  Имя: {{from_name}}
  Email: {{from_email}}
  
  Сообщение:
  {{message}}
  ```
- **To Email:** `gosha19982306@gmail.com`
- **Скопируйте Template ID**

### 4️⃣ Получите Public Key
- Account → General → API Keys → **Public Key**
- **Скопируйте Public Key**

### 5️⃣ Обновите код
Откройте `js/main.js` и замените:

**Строка ~112:**
```javascript
const PUBLIC_KEY = "ВАШ_PUBLIC_KEY_СЮДА";
```

**Строка ~114:**
```javascript
const TEMPLATE_ID = "ВАШ_TEMPLATE_ID_СЮДА";
```

### 6️⃣ Загрузите на GitHub
```bash
git add js/main.js
git commit -m "Настроена форма обратной связи"
git push
```

### 7️⃣ Протестируйте
Откройте сайт и отправьте тестовое сообщение через форму!

---

📖 **Подробная инструкция:** см. `EMAILJS_SETUP_DETAILED.md`

