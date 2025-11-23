# Инструкция по загрузке на GitHub

## Шаг 1: Создайте репозиторий на GitHub

1. Перейдите на https://github.com/new
2. Название репозитория: `portfolio` (или другое на ваше усмотрение)
3. Выберите **Public** (публичный)
4. **НЕ** добавляйте README, .gitignore или лицензию
5. Нажмите "Create repository"

## Шаг 2: Подключите удаленный репозиторий

После создания репозитория GitHub покажет вам команды. Выполните:

```bash
git remote add origin https://github.com/Kucaimon/portfolio.git
git branch -M main
git push -u origin main
```

**Важно:** Замените `Kucaimon/portfolio` на ваше имя пользователя и название репозитория.

## Шаг 3: Настройте GitHub Pages

1. Перейдите в Settings вашего репозитория
2. В разделе Pages выберите:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
3. Нажмите Save

Ваш сайт будет доступен по адресу: `https://kucaimon.github.io/portfolio/`

## Альтернатива: Использование GitHub CLI

Если у вас установлен GitHub CLI, выполните:

```bash
gh repo create portfolio --public --source=. --remote=origin --push
```

Это автоматически создаст репозиторий и загрузит код.

