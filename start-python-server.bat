
@echo off
echo Запуск локального сервера на Python...

REM Проверка наличия Python
where python >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
    echo Ошибка: Python не установлен.
    echo Установи Python с https://www.python.org/downloads/
    pause
    exit /b
)

REM Запуск сервера
python -m http.server 8000

pause
