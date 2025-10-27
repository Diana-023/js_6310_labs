'use strict'

function greenStyles() { 
    const style = document.createElement('style'); // создает новый HTML-элемент <style> (специальный HTML-тег для хранения CSS-стилей)
    style.id = 'green-styles'; // Устанавливает атрибут id="green-styles" для созданного элемента, чтобы позже можно было найти и удалить эти стили
    //Начинает записывать CSS-код внутрь элемента <style>
    style.textContent = `
        /* Текст */
        body {
            color: #ffffffff !important;
            text-shadow: 0 0 20px #22612aff, 0 0 30px #136e25ff, 0 0 40px #4b7c55ff !important;
        }
        
        /* Шапка */
        header, .header, #header {
            background-color: #ffffffff !important;
            border: none !important;
            box-shadow: 
                0 0 20px #599b6fff,
                0 0 40px #4f8862ff !important;
            margin-bottom: 40px !important;
        }
        
        /* Ссылки  */
        a {
            color: #ffffffff !important;
            text-shadow: 0 0 10px #4e9354ff, 0 0 20px #68a67aff, 0 0 30px #ffffffff !important;
            font-weight: 600 !important;
        }
        
        /* Ссылки при наведении */
        a:hover {
            color: #a7e0a7ff !important;
            background-color: #599b6fff !important;
            border: none !important;
            box-shadow: 
                0 0 20px #4f8862ff,
                0 0 40px #4f8862ff !important;
        }
        
        /* Стрелочки */
        button, .button, input[type="submit"] {
            background-color: #498650ff !important; 
            border-radius: 1px !important;
            border: 2px solid #90c296ff !important;
        }
        /* Стрелки при наведении */
        button:hover {
            box-shadow: 
                0 0 20px #a7e0a7ff,
                0 0 40px #a7e0a7ff !important;
        }
        
        /* Заголовки */
        h1, h2, h3 {
            color: #ffffffff !important;
            text-shadow: 0 0 10px #22612aff, 0 0 20px #136e25ff, 0 0 30px #4b7c55ff !important;
            font-weight: 900 !important;
        }
        
        /* Футер */
        footer, .footer {
            background-color: #a5e3b9ff !important;
            box-shadow: 
                0 0 20px #7aa989ff,
                0 0 40px #60856cff !important;
            margin-top: 40px !important;
        }

        /* Ссылки в футере */
        footer a, .footer a, footer a:visited, .footer a:visited {
            color: #FFFFFF !important; /* Белый цвет для обычных и посещенных ссылок */
            text-decoration: none !important; /* Убираем подчеркивание */
            text-shadow: 0 0 20px #b0cca2ff, 0 0 30px #9fb892ff, 0 0 40px #7c9371ff !important;
        }

        /* Ссылки при наведении в футере */
        footer a:hover, .footer a:hover {
            color: #22612aff !important;
            background-color: #4b7c55ff !important;
            border: none !important;
            box-shadow: 
                0 0 20px #588862ff,
                0 0 40px #6c9073ff !important;
        }

        /* Навигация в шапке */
        nav, .navigation, .menu {
            background-color: #68b682ff !important;
            border: none !important;
            box-shadow: 
                0 0 20px #599b6fff,
                0 0 40px #4f8862ff !important;
            border-radius: 0px !important;
            padding: 10px !important;
        }
        
        /* Я помню я сделала это и забыла подписать */
        .active {
        color: #ffffffff !important;
        background-color: #68b682ff !important;
        border-radius: 0px !important;
        text-shadow: 0 0 10px #22612aff, 0 0 20px #136e25ff, 0 0 30px #4b7c55ff !important;
        }

        /* Войти */
        .login_links{
            background-color: #68b682ff !important;
            border: none !important;
            box-shadow: 
                0 0 10px #599b6fff,
                0 0 20px #4f8862ff !important;
            border-radius: 0px !important;
        }

        /* Нечетная неделя */
        .week_parity{
            background-color: #68b682ff !important;
            border: none !important;
            box-shadow: 
                0 0 10px #599b6fff,
                0 0 20px #4f8862ff !important;
            border-radius: 0px !important;
        }

        /* Фон */
        .page_wrapper {
            background-color: #cef5ceff !important;
        }
        .main_slider_holder {
            background: #cef5ceff !important;
        }
        .news_box {
            background: #cef5ceff !important;
        }
        /* Стратегические проекты университета */
        .tab_items{
            background: #cef5ceff !important;
        }
        /* Учебные подразделения и ближайшие события */
        .slick-track{
            background: #cef5ceff !important;
            margin-top: 40px !important;
        }
        /* Ближайшие события, стратегические проекты университета, открой книту каи */
        .portlet-content{
            background: #cef5ceff !important;
        }
        
        /* Месяц год в ближайшие события */
        .events_nav{
            background: #cef5ceff !important;
            box-shadow: 
                0 0 40px #599b6fff,
                0 0 80px #4f8862ff,
                0 0 120px #457756ff !important;
            margin-top: 100px !important;
        }

        /* Учебные подразделения */
        .institutes_slider_box.institutes_box.cf.disable-user-actions{
            box-shadow: 
                0 0 40px #509c5aff,
                0 0 80px #509c5aff,
                0 0 120px #509c5aff !important;
            margin-bottom: 120px !important;
            background: #cef5ceff !important;
        }

        /* Стрелки вперед назад */
        .slick-prev, .slick-next{
            background: #22612aff !important;
            box-shadow: 
                0 0 20px #22612aff,
                0 0 30px #22612aff,
                0 0 40px #22612aff !important;
        }
        .inst-slide.prev.cf, .inst-slide.next{
            background: #cef5ceff !important;
            z-index: 9999 !important;
            opacity: 1 !important;
            width: 5% !important;
        }

        /* Стратегические проекты университета: авиатех */
        .active {
        color: #ffffffff !important;
        background-color: #68b682ff !important;
        border-radius: 0px !important;
        text-shadow: 0 0 10px #22612aff, 0 0 20px #136e25ff, 0 0 30px #4b7c55ff !important;
        }

        /* Новости RSS */
        .kai-btn-block {
        color: #ffffffff !important;
        border: none !important;
        border-radius: 0px !important;
        text-shadow: 0 0 10px #22612aff, 0 0 20px #136e25ff, 0 0 30px #4b7c55ff !important; box-shadow: 
                0 0 20px #599b6fff,
                0 0 30px #367049ff,
                0 0 400px #234c31ff !important;
        }
    `;
    document.head.appendChild(style); // Вставляет CSS в страницу, применяет стили к сайту и помещает стили в HEAD
}

function removegreenStyles() { // Объявляет функцию для удаления зеленых стилей
    const style = document.getElementById('green-styles'); //Ищет элемент с ID 'green-styles' (наш блок стилей)
    if (style) style.remove(); //Если нашел - удаляет (возвращает оригинальный вид сайта)
}

function createToggleButton() { // Создает функцию для кнопки переключения
    const button = document.createElement('button'); //Создает HTML-кнопку (<button></button>)
    button.id = 'green-toggle'; // Дает ID 'green-toggle' для поиска кнопки later
    button.innerHTML = 'eco ON🌿'; // Добавляет текст и эмодзи внутрь кнопки

    // Находим кнопку "Версия для слабовидящих", рядом с которой мы хотим разместить нашу кнопку.
    const targetButton = document.querySelector('#large_view_btn'); 
    
    if (targetButton) { //Проверяет - существует ли такая кнопка на странице
        const updatePosition = () => { //Создает функцию updatePosition которая будет вычислять и обновлять позицию нашей кнопки
            const rect = targetButton.getBoundingClientRect(); //Получает координаты целевой кнопки
            button.style.top = (rect.top + window.scrollY) + 'px'; //Устанавливает вертикальную позицию нашей кнопки (кнопка будет на той же высоте, что и целевая)
            button.style.left = (rect.right + window.scrollX + 15) + 'px'; //Устанавливает горизонтальную позицию (кнопка будет справа от целевой с небольшим отступом)
        };

    Object.assign(button.style, { // Применяет несколько CSS-стилей к кнопке сразу
        background: '#cef5ceff',
        position: 'fixed', // Фиксирует позицию
        zIndex: '10000', //Поднимает на передний план
        color: 'white', 
        border: '2px solid #599b6fff', // Рамка
        borderRadius: '8px', // Скругление углов
        padding: '10px 16px', // Внутренние отступы
        fontSize: '14px', 
        cursor: 'pointer', // Курсор при наведении
        boxShadow: '0 2px 8px #234c31ff', 
        textShadow: '0 0 10px #124318ff',
        transition: 'all 0.2s ease' // Плавные анимации - все свойства будут меняться плавно за 0.2 секунды
    });

    // Позиционируем кнопку
    updatePosition();
        
    // Обновляем позицию при скролле и изменении размера
    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);
        
} else {
    // Если не нашли элемент, используем правый верхний угол
    Object.assign(button.style, {
        background: '#cef5ceff',
        position: 'fixed',
        zIndex: '10000',
        color: 'white',
        border: '2px solid #599b6fff',
        borderRadius: '8px',
        padding: '10px 16px',
        fontSize: '14px',
        cursor: 'pointer',
        boxShadow: '0 2px 8px #234c31ff',
        textShadow: '0 0 10px #124318ff',
        transition: 'all 0.2s ease'
        });
    }

    // Назначает обработчик клика - что происходит при нажатии на кнопку
    button.onclick = function() {
        const isEnabled = localStorage.getItem('greenStyle') === 'true'; // Проверяет состояние - включены ли стили
        // localStorage сохраняет настройки между перезагрузками страницы

        if (isEnabled) { // Если стили ВКЛЮЧЕНЫ - выключает
            removegreenStyles();
            localStorage.setItem('greenStyle', 'false'); // Сохраняет в память
            button.innerHTML = 'eco ON🌿'; // Меняет текст кнопки - показывает "eco ON🌿" (предлагает включить)
            button.style.background = '#cef5ceff'; // Меняет цвет кнопки - на светло-зеленый (индикатор выключено)
        } else { // Иначе (если стили ВЫКЛЮЧЕНЫ) - включает
            greenStyles();
            localStorage.setItem('greenStyle', 'true'); //Сохраняет в память - записывает 'true' (стили включены)
            button.innerHTML = 'eco OFF'; //Меняет текст кнопки - показывает "eco OFF" (предлагает выключить)
            button.style.background = '#757575';
        }
    };

    document.body.appendChild(button); // Добавляет кнопку на страницу - вставляет созданную кнопку в тело документа
}

function demonstrateDOMUsage() {
    console.log("Demonstrating DOM methods:"); // Выводит в консоль браузера сообщение

    // getElementById
    const page = document.getElementById('page_wrapper'); // Ищет элемент с id="page_wrapper"
    if (page) {
        console.log("getElementById: page_wrapper found"); // Выводит в консоль браузера сообщение
    }
    else {
        console.log("getElementById: page_wrapper not found"); //Выводит ошибку
    }

    // querySelector со сложным селектором (два класса)
    const mainContent = document.querySelector('footer .section'); // Ищет элемент с классом section внутри <footer> (пробел означает "потомок")
    if (mainContent) {
        const classes1 = mainContent.className ? ` class="${mainContent.className}"` : '';
        console.log(`querySelector (complex): footer.section found (${mainContent.tagName.toLowerCase()}, ${classes1})`); // выводит в консоль браузера сообщение

        // parentElement
        const parent = mainContent.parentElement; // Свойство DOM-элемента, которое возвращает родительский элемент текущего элемента (если он существует).
        if (parent) {
            const classes2 = parent.className ? ` class="${parent.className}"` : '';
            console.log(`parentElement: parent found (${parent.tagName.toLowerCase()}, ${classes2})`); // Выводит сообщение в консоль браузера
        }
        else {
            console.log("parentElement: parent not found"); 
        }

        // children
        const children = mainContent.children; // Получает все дочерние элементы, показывает навигацию по DOM-дереву
        console.log(`children: ${children.length} child elements found`); // Выводит в консоль браузера сообщение
    }
    else {
        console.log("querySelector (complex): footer.section not found");
    }

    // querySelectorAll
    const links = document.querySelectorAll('a'); //Метод возвращает список всех найденных элементов (<a>/ссылок)
    console.log(`querySelectorAll: found ${links.length} <a>`); // выводит в консоль браузера сообщение
}

// Основная функция инициализации
function init() {
    console.log("Initializing KAI Green Style extension"); // Выводит сообщение о начале инициализации 

    createToggleButton(); // Создает кнопку  
    demonstrateDOMUsage(); // Запускает демонстрационные функции

    // Применяем стили если они были включены
    const isEnabled = localStorage.getItem('greenStyle') === 'true'; // Проверяет сохраненные настройки и применяет стили если нужно, чтобы при перезагрузке страницы стили оставались включенными
    if (isEnabled) {
        greenStyles();
        const btn = document.getElementById('green-toggle'); //Ищет кнопку переключения по ID 'green-toggle' и сохраняет в переменную btn
        if (btn) {
            btn.innerHTML = 'eco OFF';
            btn.style.background = '#757575';
        }
    }

    console.log("Extension initialization complete");
}

// Запуск расширения, ждет полной загрузки страницы перед запуском
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
