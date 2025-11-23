// Автоматическое приветственное окно при загрузке главной страницы
document.addEventListener('DOMContentLoaded', function() {
    // Показываем приветствие только на главной странице
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/html_номер/')) {
        setTimeout(showWelcome, 1000);
    }
});

// Красивое приветственное окно
function showWelcome() {
    const modal = document.getElementById('welcomeModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeWelcome() {
    const modal = document.getElementById('welcomeModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Закрытие модального окна при клике вне его
document.addEventListener('click', function(event) {
    const modal = document.getElementById('welcomeModal');
    if (event.target === modal) {
        closeWelcome();
    }
});

// Обработка формы регистрации
function handleRegistration(event) {
    event.preventDefault();
    alert('Регистрация успешно завершена!');
    return false;
}