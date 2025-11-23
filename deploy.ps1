# Скрипт для автоматической загрузки на GitHub
# Убедитесь, что вы авторизованы в git: git config --global user.name "Your Name" и git config --global user.email "your.email@example.com"

Write-Host "Проверка статуса git..." -ForegroundColor Cyan

# Проверяем, есть ли удаленный репозиторий
$remoteExists = git remote get-url origin 2>$null
if ($remoteExists) {
    Write-Host "Удаленный репозиторий уже настроен: $remoteExists" -ForegroundColor Yellow
    Write-Host "Загружаю изменения..." -ForegroundColor Cyan
    git push -u origin main
} else {
    Write-Host "Удаленный репозиторий не найден." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Для создания репозитория выполните следующие шаги:" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "1. Создайте репозиторий на GitHub: https://github.com/new" -ForegroundColor White
    Write-Host "   Название: portfolio" -ForegroundColor White
    Write-Host "   Тип: Public" -ForegroundColor White
    Write-Host ""
    Write-Host "2. После создания выполните команду:" -ForegroundColor White
    Write-Host "   git remote add origin https://github.com/Kucaimon/portfolio.git" -ForegroundColor Green
    Write-Host "   git push -u origin main" -ForegroundColor Green
    Write-Host ""
    Write-Host "   (Замените Kucaimon на ваше имя пользователя GitHub)" -ForegroundColor Yellow
}

