# Автоматическое создание репозитория на GitHub
Write-Host "Открываю страницу создания репозитория на GitHub..." -ForegroundColor Cyan
Write-Host ""
Write-Host "После создания репозитория нажмите любую клавишу для продолжения..." -ForegroundColor Yellow
Write-Host ""

# Открываем страницу создания репозитория
Start-Process "https://github.com/new?name=portfolio&description=Portfolio%20website&public=true"

# Ждем нажатия клавиши
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

Write-Host ""
Write-Host "Загружаю код на GitHub..." -ForegroundColor Cyan

# Пробуем запушить
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✓ Успешно загружено на GitHub!" -ForegroundColor Green
    Write-Host "Ссылка на репозиторий: https://github.com/Kucaimon/portfolio" -ForegroundColor Cyan
    Write-Host "Ссылка на сайт (после настройки Pages): https://kucaimon.github.io/portfolio/" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "Ошибка при загрузке. Убедитесь, что репозиторий создан на GitHub." -ForegroundColor Red
}

