// Задача 1: Geolocation API
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation не поддерживается вашим браузером");
    }
}

function showPosition(position) {
    alert(`Широта: ${position.coords.latitude}\nДолгота: ${position.coords.longitude}`);
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("Пользователь отклонил запрос на геолокацию");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Информация о местоположении недоступна");
            break;
        case error.TIMEOUT:
            alert("Время запроса на получение местоположения истекло");
            break;
        case error.UNKNOWN_ERROR:
            alert("Произошла неизвестная ошибка");
            break;
    }
}

// Задача 2: Анимация при прокрутке
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animated');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 50) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Задача 3: Fetch API
fetch('fetch_api.txt')
    .then(response => response.text())
    .then(data => {
        console.log(data);
        // Можно вывести на страницу
        const fetchDiv = document.getElementById('fetch-content');
        if (fetchDiv) {
            fetchDiv.innerHTML = data;
        }
    })
    .catch(error => console.error('Ошибка:', error));

// Задача 4: Смена цвета фона
function changeBackgroundColor() {
    const colors = [
        { code: '#ffffff', name: 'Белый' },
        { code: '#ff0000', name: 'Красный' },
        { code: '#00ff00', name: 'Зеленый' },
        { code: '#0000ff', name: 'Синий' },
        { code: '#ffff00', name: 'Желтый' },
        { code: '#ff00ff', name: 'Пурпурный' }
    ];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor.code;
    
    const colorInfo = document.getElementById('color-info');
    if (colorInfo) {
        colorInfo.innerHTML = `Текущий цвет: ${randomColor.code} - ${randomColor.name}`;
    }
}

// Задача 5: XML парсинг (упрощенный вариант)
function loadXMLAlbum() {
    // Здесь будет код для загрузки и парсинга XML
    alert('Функция загрузки XML альбома');
}