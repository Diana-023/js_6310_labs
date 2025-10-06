// ===== ЗАДАНИЕ 1: Базовые операции =====
function simpleTask() {
    // 1.1 Объявите переменные разных типов (не менне 5)
    // 1.2 Выведите типы всех переменных
    let str = "Hello World";          // строка
    let num = 42;                     // число
    let bool = true;                  // булево значение
    let obj = {name: "Diana", age: 20};  // объект
    let undef;
    
    console.log("Типы переменных:");
    console.log(typeof str);
    console.log(typeof num);
    console.log(typeof bool);
    console.log(typeof obj);
    console.log(typeof undef);
    
}
simpleTask()


// ===== ЗАДАНИЕ 2: Функции =====
function getReviewerNumber(number, lab) {
    // 2.1 Функция определяющая номер ревьюера для вашей группы по вашему номеру и номеру лабораторной работы
    let num = (number + lab) % 23
    return num;
}

function getVariant(number, variants) {
    // 2.2 Функция определяющая номер варианта, исходя из количества вариантов
    // Вариант = (номер студента - 1) % количество вариантов + 1
    // Это гарантирует, что варианты будут от 1 до variants
    let variant = ((number - 1) % variants) + 1;
    return variant;
}

function calculate(a, b, operation) {
    // 2.3 Напишите функцию калькулятор, калькулятор обрабатывает следующие операции: +, -, *, /
    if(typeof(a) !== "number" || typeof(b) !== "number"){
        return "Аргументы функции должны быть числами"
    }
    if (operation === '+') {
        return a + b;
    } 
    else if (operation === '-') {
        return a - b;
    } 
    else if (operation === '*') {
        return a * b;
    } 
    else if (operation === '/') {
        if (b === 0) {
            return "Ошибка: деление на ноль!";
        }
        return a / b;
    } 
    else {
        return "Ошибка: неизвестная операция!";
    }    
}

function calculateArea(figure, ...params) {
    // 2.4 Напишите функцию для определения площади фигур 'circle', 'rectangle', 'triangle'
    // Используйте switch.
    switch (figure.toLowerCase()) {
        case 'circle':
            if (params.length !== 1) {
                return "Ошибка: для круга нужен 1 параметр (радиус)";
            }
            const radius = params[0];
            if (radius <= 0) {
                return "Ошибка: радиус должен быть положительным числом";
            }
            return Math.PI * radius * radius;
            
        case 'rectangle':
            if (params.length !== 2) {
                return "Ошибка: для прямоугольника нужны 2 параметра (длина и ширина)";
            }
            const [length, width] = params;
            if (length <= 0 || width <= 0) {
                return "Ошибка: длина и ширина должны быть положительными числами";
            }
            return length * width;
            
        case 'triangle':
            if (params.length !== 2) {
                return "Ошибка: для треугольника нужны 2 параметра (основание и высота)";
            }
            const [base, height] = params;
            if (base <= 0 || height <= 0) {
                return "Ошибка: основание и высота должны быть положительными числами";
            }
            return 0.5 * base * height;
            
        default:
            return "Ошибка: неизвестная фигура. Доступные: circle, rectangle, triangle";
    }
}

// 2.5 Стрелочные функции
const reverseString = (str) => {
    // Функция возвращает перевернутую строку
    return str.split('').reverse().join('');
};

const getRandomNumber = (min, max) => {
    // Функция возвращает случайное число между min и max
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// ===== ЗАДАНИЕ 3: Объекты =====
const book = {
    // 3.1 Создайте объект "книга" с полями для хранения заголовка, автора, 
    // года выпуска, количества страниц, и доступности
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    year: 1866,
    pages: 671,
    isAvailable: true,
    // объект должен иметь два метода getInfo возвращает одной строкой информацию о названии книги, аторе, годе выпуска, количестве страниц
    getInfo() {
        return `"${this.title}" - ${this.author}, ${this.year} год, ${this.pages} страниц`;
    },
    // метод toggleAvailability - который меняет значение доступности и возвращает его
    toggleAvailability() {
        this.isAvailable = !this.isAvailable;
        return this.isAvailable;
    }
};

const student = {
    // 3.2 Реализуйте методы объекта "студент" 
    name: "Анна Петрова",
    age: 20,
    course: 2,
    grades: {
        math: 90,
        programming: 95,
        history: 85
    },
    
    // Метод для расчета среднего балла
    getAverageGrade() {
        const grades = Object.values(this.grades);
        if (grades.length === 0) return 0;
        
        const sum = grades.reduce((total, grade) => total + grade, 0);
        return sum / grades.length;
    },
    
    // Метод для добавления новой оценки
    addGrade(subject, grade) {
        if (grade < 0 || grade > 100) {
            return "Ошибка: оценка должна быть от 0 до 100";
        }
        this.grades[subject] = grade;
        return `Оценка по предмету "${subject}" добавлена: ${grade}`;
    }
};

// ===== ЗАДАНИЕ 4: Массивы =====
function processArrays() {
    const numbers = [12, 45, 23, 67, 34, 89, 56, 91, 27, 14];
    const words = ["JavaScript", "программирование", "массив", "функция", "объект"];
    const users = [
        { id: 1, name: "Анна", age: 25, isActive: true },
        { id: 2, name: "Борис", age: 30, isActive: false },
        { id: 3, name: "Виктория", age: 22, isActive: true },
        { id: 4, name: "Григорий", age: 35, isActive: true },
        { id: 5, name: "Дарья", age: 28, isActive: false }
    ];
    
    // 1. Используйте forEach для вывода всех чисел больше 50
    console.log("Числа больше 50:");
    numbers.forEach(number => {
        if (number > 50) {
            console.log(number);
        }
    });

    // 2. Используйте map для создания массива квадратов чисел
    const squares = numbers.map(number => number * number);
    console.log("\n2. Квадраты чисел:");
    console.log(squares);

    // 3. Используйте filter для получения активных пользователей
    const activeUsers = users.filter(user => user.isActive);
    console.log("\n3. Активные пользователи:");
    console.log(activeUsers);

    // 4. Используйте find для поиска пользователя с именем "Виктория"
    const victoria = users.find(user => user.name === "Виктория");
    console.log("\n4. Пользователь с именем 'Виктория':");
    console.log(victoria);

    // 5. Используйте reduce для подсчета суммы всех чисел
    const sum = numbers.reduce((total, number) => total + number, 0);
    console.log("\n5. Сумма всех чисел:");
    console.log(sum);

    // 6. Используйте sort для сортировки пользователей по возрасту (по убыванию)
    const sortedByAge = users.sort((a, b) => b.age - a.age);
    console.log("Пользователи отсортированные по возрасту (по убыванию):");
    console.log(sortedByAge);

    // 7. Используйте метод для проверки, все ли пользователи старше 18 лет
    const allAdults = users.every(user => user.age > 18);
    console.log("\n7. Все ли пользователи старше 18 лет:");
    console.log(allAdults);

    // 8. Создайте цепочку методов: 
    //    - отфильтровать активных пользователей
    //    - преобразовать в массив имен
    //    - отсортировать по алфавиту
    const activeUserNames = users
        .filter(user => user.isActive)
        .map(user => user.name)
        .sort();
    console.log("\n8. Имена активных пользователей (отсортированные по алфавиту):");
    console.log(activeUserNames);
}

// ===== ЗАДАНИЕ 5: Менеджер задач =====
const taskManager = {
    tasks: [
        { id: 1, title: "Изучить JavaScript", completed: false, priority: "high" },
        { id: 2, title: "Сделать лабораторную работу", completed: true, priority: "high" },
        { id: 3, title: "Прочитать книгу", completed: false, priority: "medium" }
    ],
    
    addTask(title, priority = "medium") {
        // 5.1 Добавление задачи
        const newTask = {
            id: this.tasks.length + 1,
            title,
            completed: false,
            priority
        };
        this.tasks.push(newTask);
    },
    
    completeTask(taskId) {
        // 5.2 Отметка выполнения
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = true;
            return `Задача "${task.title}" выполнена`;
        }
        return "Задача не найдена";
    },

    // Удаление задачи
    deleteTask(taskId) {
        // 5.3 Ваш код здесь
        const taskIndex = this.tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            const deletedTask = this.tasks.splice(taskIndex, 1)[0];
            return `Задача "${deletedTask.title}" удалена`;
        }
        return "Задача не найдена";
    },

    // Получение списка задач по статусу
    getTasksByStatus(completed) {
        // 5.4 Ваш код здесь
        return this.tasks.filter(task => task.completed === completed);
    },
    
    getStats() {
        /* 5.5 Статистика возвращает объект:        
        total,
        completed,
        pending,
        completionRate
        */
       const total = this.tasks.length;
        const completed = this.tasks.filter(task => task.completed).length;
        const pending = total - completed;
        const completionRate = total > 0 ? (completed / total * 100).toFixed(1) : 0; 
        return {
            total,
            completed,
            pending,
            completionRate: `${completionRate}%`
        };
    }
};


// ===== ЗАДАНИЕ 6: Регулярные выражения =====
/*
Дополнительные материалы:
https://regex101.com/ - интерактивный тестер regex
MDN Regular Expressions - https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_expressions
Learn Regex - https://github.com/ziishaned/learn-regex - учебник по regex
 
Задание (по вариантам):
1. Изучите функции с регулярными выражениями по своему варианту
На защите вы должны суметь объяснить структуру регулярного выражения.
2. Напишите тесты, покрывающие все различные варианты. Обратите внимание тесты должны обеспечивать полное покрытие, но не быть дублирующимися.
3. Если предложенное регулярное выражение некорректно, вы можете исправить его.

Вычисление своего варианта:
Номер варианта = Ваш номер % Общее количество вариантов
= ((3-1)%4)+1=3
 */

/**
 * Вариант 1: Валидация email адреса
 * Правила:
 * - Латиница, цифры, спецсимволы: ._%+-
 * - Обязательный символ @
 * - Доменная часть: латиница, цифры, точка
 * - Минимальная длина 5 символов
 */
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

/**
 * Вариант 2: Валидация пароля
 * Правила:
 * - Минимум 8 символов
 * - Хотя бы одна заглавная буква
 * - Хотя бы одна строчная буква  
 * - Хотя бы одна цифра
 * - Хотя бы один специальный символ: !@#$%^&*()
 */
function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
    return passwordRegex.test(password);
}

/**
 * Вариант 3: Валидация номера телефона (российский формат)
 * Поддерживает форматы:
 * - +7 (999) 123-45-67
 * - 8 (999) 123-45-67  
 * - 89991234567
 * - +7(999)123-45-67
 */
function validatePhone(phone) {
    const phoneRegex = /^(\+7|8)(\s?\(?\d{3}\)?\s?\d{3}[\s-]?\d{2}[\s-]?\d{2}|\d{10})$/;
    return phoneRegex.test(phone);
}

/**
 * Вариант 4: Валидация даты в формате DD.MM.YYYY
 * Правила:
 * - День: 01-31
 * - Месяц: 01-12
 * - Год: 1900-2099
 */
function validateDate(date) {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/;
    return dateRegex.test(date);
}

// Бонус: выполните все остальные варианты. Выполнение бонуса не учитывается в итоговой оценке.


// ===== ТЕСТИРОВАНИЕ =====
function runTests() {
    console.log("=== ТЕСТИРОВАНИЕ ===");

    // Тест задания 2.1
    console.assert(getReviewerNumber(5, 1) === 6, "Тест получения ревьюера провален");
    
    // Тест задания 2.2
    console.assert(getVariant(1, 10) === 1, "Студент 1, 10 вариантов → вариант 1");
    console.assert(getVariant(5, 10) === 5, "Студент 5, 10 вариантов → вариант 5");
    console.assert(getVariant(10, 10) === 10, "Студент 10, 10 вариантов → вариант 10");

    // Тест задания 2.3: calculate
    console.assert(calculate(10, 5, '+') === 15, "Тест калькулятора провален");
    console.assert(calculate(10, 4, '-') === 6, "10 - 4 = 6");
    console.assert(calculate(4, 5, '*') === 20, "4 * 5 = 20");
    console.assert(calculate(10, 2, '/') === 5, "10 / 2 = 5");
    console.assert(calculate(10, 0, '/') === "Ошибка: деление на ноль!", "10 / 0 = Ошибка");
    console.assert(calculate(5, 3, '^') === "Ошибка: неизвестная операция!", "5 ^ 3 = Ошибка");
    console.assert(calculate(2, 2, '%') === "Ошибка: неизвестная операция!", "2 % 2 = Ошибка");
    console.assert(calculate(1, 1, '') === "Ошибка: неизвестная операция!", "1 '' 1 = Ошибка");
    console.assert(calculate(1000000, 500000, '+') === 1500000, "1,000,000 + 500,000 = 1,500,000");
    console.assert(calculate(999999, 1, '-') === 999998, "999,999 - 1 = 999,998");
    console.assert(calculate("a", "b", "+") === "Аргументы функции должны быть числами", "Тест калькулятора 2.3 провален (аргументы должны быть числовыми)");
    console.assert(calculate("a", 5, "+") === "Аргументы функции должны быть числами", "Тест калькулятора 2.3 провален (аргументы должны быть числовыми)");
    console.assert(calculate(5, "b", "+") === "Аргументы функции должны быть числами", "Тест калькулятора 2.3 провален (аргументы должны быть числовыми)");
    console.assert(calculate(3, 6, "~") === "Ошибка: неизвестная операция!", "Тест калькулятора 2.3 провален (неизвестная операция)");
    console.assert(calculate(Number.MAX_VALUE, 1, '+') === Number.MAX_VALUE+1, "Тест калькулятора 2.3 провален (переполнение при сложении)");
    console.assert(calculate(Number.MAX_VALUE, Number.MAX_VALUE, '+') === Infinity, "Тест калькулятора 2.3 провален (переполнение при сложении двух больших чисел)");
    console.assert(calculate(Number.MAX_VALUE, 2, '-') === Number.MAX_VALUE - 2, "Тест калькулятора 2.3 провален (вычитание из максимального значения)");
    console.assert(calculate(Number.MAX_VALUE, 1, '*') === Number.MAX_VALUE, "Тест калькулятора 2.3 провален (переполнение при умножении)");
    console.assert(calculate(1, Number.MAX_VALUE, '*') === Number.MAX_VALUE, "Тест калькулятора 2.3 провален (переполнение при умножении с максимальным значением)");
    console.assert(calculate(Number.MAX_VALUE, 10, "*") === Infinity, "Тест калькулятора провален (умножение максимального числа на 10)");
    console.assert(calculate(Number.MAX_VALUE, 2, '/') === Number.MAX_VALUE / 2, "Тест калькулятора 2.3 провален (деление максимального значения)");
    
    // Тест задания 2.4
    console.assert(calculateArea('circle', 5) === Math.PI * 25, "Круг: радиус 5 → площадь " + (Math.PI * 25));
    console.assert(calculateArea('rectangle', 4, 5) === 20, "Прямоугольник: 4x5 → площадь 20");
    console.assert(calculateArea('triangle', 6, 4) === 12, "Треугольник: основание 6, высота 4 → площадь 12");
    console.assert(calculateArea('square', 5) === "Ошибка: неизвестная фигура. Доступные: circle, rectangle, triangle", "Неизвестная фигура");
    console.assert(calculateArea('', 5) === "Ошибка: неизвестная фигура. Доступные: circle, rectangle, triangle", "Пустая фигура → ошибка");
    console.assert(calculateArea('circle', -5) === "Ошибка: радиус должен быть положительным числом");
    console.assert(calculateArea('circle') === "Ошибка: для круга нужен 1 параметр (радиус)", "Круг: нет параметров → ошибка");
    console.assert(calculateArea('circle', 5, 10) === "Ошибка: для круга нужен 1 параметр (радиус)", "Круг: лишние параметры → ошибка");
    console.assert(calculateArea('rectangle', -4, 5) === "Ошибка: длина и ширина должны быть положительными числами");
    console.assert(calculateArea('rectangle', 4) === "Ошибка: для прямоугольника нужны 2 параметра (длина и ширина)");
    console.assert(calculateArea('triangle', -6, 4) === "Ошибка: основание и высота должны быть положительными числами");
    console.assert(calculateArea('triangle', 6) === "Ошибка: для треугольника нужны 2 параметра (основание и высота)");

    // Тест задания 2.5
    console.assert(reverseString("hello") === "olleh", "reverseString('hello') → 'olleh'");
    console.assert(reverseString("12345") === "54321", "reverseString('12345') → '54321'");
    console.assert(reverseString("а") === "а", "reverseString('а') → 'а'");
    console.assert(reverseString("") === "", "reverseString('') → '' (пустая строка)");
    console.assert(reverseString("123 456") === "654 321", "reverseString('123 456') → '654 321'");
    console.assert(getRandomNumber(5, 5) === 5, "getRandomNumber(5, 5) → 5 (min = max)");
    console.assert(getRandomNumber(0, 0) === 0, "getRandomNumber(0, 0) → 0 (min = max = 0)");

    console.assert(getRandomNumber(1, 10) >= 1 && getRandomNumber(1, 10) <= 10, "Тест 2.6 провален: результат не в диапазоне [1, 10]");
    console.assert(typeof(getRandomNumber(1, 10)) === "number", "Тест 2.6 провален: результат не число");

    // Тест задания 3.1
    console.log(book.getInfo());
    console.log(book.toggleAvailability());
    console.log(book.toggleAvailability());
    book.toggleAvailability();     
    console.log(book.isAvailable);

    // Тест задания 3.2
    console.log(student.getAverageGrade());
    console.log(student.addGrade('physics', 88));
    console.log(student.getAverageGrade());
    console.log(student.grades); //вывод всех оценок

    // Тест задания 4
    processArrays();

    // Тест задания 5
    console.log("Добавление задачи");
    taskManager.addTask("Выучить Python", "high");
    console.log(taskManager.tasks);
    console.log();

    console.log("Отметка выполнения");
    taskManager.completeTask(true);
    console.log(taskManager.tasks);
    console.log();

    console.log("Удаление элемента");
    taskManager.deleteTask(1);
    console.log(taskManager.tasks);
    console.log();

    console.log("(Получение списка задач):");
    console.log(taskManager.getTasksByStatus(true));
    console.log();
    
    console.log("(Статистика возвращает объект):");
    console.log(taskManager.getStats());
    console.log();

    // Тест задания 6
    console.assert(validatePhone('+7 (999) 123-45-67'), "Тест с +7 (999) 123-45-67 провален");
    console.assert(validatePhone('8 (999) 123-45-67'), "Тест с 8 (999) 123-45-67 провален");
    console.assert(validatePhone('89991234567'), "Тест без пробелов с 8 провален");
    console.assert(validatePhone('+7(999)123-45-67'), "Тест без пробелов с +7 провален");
    console.assert(validatePhone("8 999 123 45 67"), "Тест с пробелами провален");

    console.assert(validatePhone('1234567890') === false, "Тест с неправильным номером провален");
    console.assert(validatePhone('+1 (999) 123-45-67') === false, "Тест с неправильным кодом провален");
    console.assert(validatePhone('+7 (999) 123-45-7') === false, "Тест с неправильным кодом провален");
    console.assert(validatePhone('+8 (999) 123-45-67') === false, "Тест с неправильным кодом провален");
    console.assert(validatePhone('+7-999-123-45-67') === false, "Тест с неправильным кодом провален");
    console.assert(validatePhone("") === false, "Тест с пустой строкой провален")
    console.assert(validatePhone("kekdhas") === false, "Тест с неправильной строкой провален")
    
    console.log("Все тесты пройдены! ✅");
}

// Запуск тестов
runTests();