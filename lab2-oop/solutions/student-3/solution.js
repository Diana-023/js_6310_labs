'use strict'

// ===== ЗАДАНИЕ 1: Базовый класс Vehicle =====
class Vehicle {
    // Создайте базовый класс Vehicle.
    // В конструкторе принимайте и сохраняйте в this свойства: 
    // make (марка), model (модель), year (год выпуска).
    static vehicleCount = 0;

    constructor(make, model, year) {
        if (!make || !model || year === undefined) {
            throw new Error('Обязательные параметры: make, model, year');
        }

        if (typeof make !== 'string' || typeof model !== 'string' || make.trim().length === 0 || model.trim().length === 0) {
            throw new Error('Make и model должны быть строками');
        }

        if (typeof year !== 'number' || year < 1886 || isNaN(year) || !Number.isInteger(year)) {
            throw new Error('Год должен быть числом после 1886');
        }
        const currentYear = new Date().getFullYear();
        if (year > currentYear) {
            throw new Error(`Год не может быть больше текущего: ${currentYear}`)
        }

        this.make = make;
        this.model = model;
        this._year = year;
        Vehicle.vehicleCount++; // Увеличиваем счетчик при создании
    }

    // Добавьте метод displayInfo(), который выводит в консоль информацию 
    // о транспортном средстве в формате: "Марка: [make], Модель: [model], Год: [year]".
    displayInfo() {
        console.log(`Марка: ${this.make}, Модель: ${this.model}, Год: ${this.year}`);
    }

    // Добавьте геттер age, который возвращает возраст транспортного средства 
    // (текущий год минус год выпуска). Используйте new Date().getFullYear().
    get age() {
        return new Date().getFullYear() - this._year;
    }

    // Добавьте сеттер для года выпуска с проверкой: год не может быть больше текущего.
    set year(newYear) {
        const currentYear = new Date().getFullYear();
        if (newYear > currentYear) {
            throw new Error('Год выпуска не может быть больше текущего года');
        }
        this._year = newYear;
    }

    // Геттер для года выпуска
    get year() {
        return this._year;
    }

    // Добавьте статический метод compareAge(vehicle1, vehicle2), 
    // который возвращает разницу в возрасте между двумя транспортными средствами.
    static compareAge(vehicle1, vehicle2) {
        return Math.abs(vehicle1.age - vehicle2.age);
    }

    static getTotalVehicles() {
        return Vehicle.vehicleCount;
    }
}

// ===== ЗАДАНИЕ 2: Класс Car (наследуется от Vehicle) =====
class Car extends Vehicle {
    // Создайте дочерний класс Car, который наследуется от Vehicle.
    // Добавьте новое свойство numDoors (количество дверей).
    constructor(make, model, year, numDoors) {
        // Вызываем конструктор родительского класса
        super(make, model, year);

        if (typeof numDoors !== 'number' || isNaN(numDoors) || !Number.isInteger(numDoors) || numDoors <= 0) {
            Vehicle.vehicleCount--
            throw new TypeError("Некорректное количество дверей");
        }
        // Добавляем новое свойство для Car
        this.numDoors = numDoors;
    }

    // Переопределите метод displayInfo() так, чтобы он также выводил количество дверей. 
    // Используйте super.displayInfo() для вызова метода родителя.
    displayInfo() {
        // Вызываем метод родителя для базовой информации
        super.displayInfo();
        // Добавляем информацию о количестве дверей
        console.log(`Количество дверей: ${this.numDoors}`);
    }

    // Добавьте метод honk(), который выводит "Beep beep!".
    honk() {
        return "Beep beep!";
    }
}

// ===== ЗАДАНИЕ 3: Класс ElectricCar (наследуется от Car) =====
class ElectricCar extends Car {
    // Создайте дочерний класс ElectricCar, который наследуется от Car.
    // Добавьте новое свойство batteryCapacity (емкость батареи в кВт·ч).
    constructor(make, model, year, numDoors, batteryCapacity) {
        super(make, model, year, numDoors);
        this.batteryCapacity = batteryCapacity;
        
        if (typeof batteryCapacity !== "number" || isNaN(batteryCapacity) || !Number.isInteger(batteryCapacity) || batteryCapacity <= 0) {
            Vehicle.vehicleCount--
            throw new TypeError('Некорректная емкость батареи');
        }
    }

    // Переопределите метод displayInfo() для вывода дополнительной информации о батарее.
    displayInfo() {
        // Вызываем метод родителя (Car), который в свою очередь вызывает метод Vehicle
        super.displayInfo();
        // Добавляем информацию о батарее
        console.log(`Емкость батареи: ${this.batteryCapacity} кВт·ч`);
    }

    // Добавьте метод calculateRange(), который рассчитывает примерный запас хода 
    // (предположим, что 1 кВт·ч = 6 км).
    calculateRange() {
        return this.batteryCapacity * 6;
    }
}


// ===== ЗАДАНИЕ 4: Каррирование =====

// Создайте функцию createVehicleFactory, которая возвращает функцию 
// для создания транспортных средств определенного типа (каррирование).
const createVehicleFactory = (vehicleType) => (...args) => {
    try {
        return new vehicleType(...args);
    } catch (error) {
        throw new Error(`Ошибка создания ${vehicleType.name}: ${error.message}`);
    }
};


// ===== ЗАДАНИЕ 5: Статические методы и свойства =====

// Добавьте статическое свойство vehicleCount в класс Vehicle 
// для подсчета количества созданных транспортных средств.
// Модифицируйте конструктор Vehicle для увеличения счетчика
// (добавьте в начало конструктора: Vehicle.vehicleCount++);
// Создайте статический метод getTotalVehicles(), 
// который возвращает общее количество созданных транспортных средств.


// Автоматические тесты
function runTests() {
    console.log('Запуск тестов...');

    // Расширьте тесты для полного покрытия задания.

    // Сохраняем начальное количество
    const initialCount = Vehicle.getTotalVehicles();
    
    // Тест Vehicle
    const vehicleToyota = new Vehicle('Toyota', 'Camry', 2015);
    vehicleToyota.displayInfo();
    
    try{
        const vehicleError = new Vehicle(Toyota, 'Camry', 2015)
    }
    catch{
        console.error("Ошибка: марка и модель должны быть непустыми строками");
    }

    try{
        const vehicleError = new Vehicle('', 'Camry', 2015)
    }
    catch{
        console.error("Ошибка: марка и модель должны быть непустыми строками");
    }

    try{
        const vehicleError = new Vehicle(1, 'Camry', 2015)
    }
    catch{
        console.error("Ошибка: марка и модель должны быть непустыми строками");
    }

    try{
        const vehicleError = new Vehicle('Toyota', '', 2015)
    }
    catch{
        console.error("Ошибка: марка и модель должны быть непустыми строками");
    }

    try{
        const vehicleError = new Vehicle('Toyota', Camry, 2015)
    }
    catch{
        console.error("Ошибка: марка и модель должны быть непустыми строками");
    }

    try{
        const vehicleError = new Vehicle('Toyota', 1, 2015)
    }
    catch{
        console.error("Ошибка: марка и модель должны быть непустыми строками");
    }

    try{
        const vehicleError = new Vehicle('Toyota', 'Camry', '2015')
    }
    catch{
        console.error("Ошибка: год выпуска должен быть целым числом");
    }

    try{
        const vehicleError = new Vehicle('Toyota', 'Camry')
    }
    catch{
        console.error("Ошибка: год выпуска должен быть целым числом");
    }

    try{
        const vehicleError = new Vehicle('Toyota', 'Camry', 2015.5)
    }
    catch{
        console.error("Ошибка: год выпуска должен быть целым числом");
    }

    try{
        const vehicleError = new Vehicle('Toyota', 'Camry', 2030)
    }
    catch{
        console.error("Ошибка");
    }

    try{
        const vehicleError = new Vehicle('Toyota', 'Camry', 1)
    }
    catch{
        console.error("Ошибка");
    }

    try{
        const vehicleToyota = 2026
    }
    catch{
        console.error("Ошибка: год выпуска должен быть целым числом");
    }

    console.assert(vehicleToyota.make === 'Toyota', "Тест make провален");
    console.assert(vehicleToyota.model === 'Camry', "Тест model провален");
    console.assert(vehicleToyota.year === 2015, "Тест year провален");
    console.assert(vehicleToyota.age === new Date().getFullYear() - 2015, 'Тест возраста провален');
    console.assert(Vehicle.getTotalVehicles() === initialCount + 1, `Тест кол-ва тр.средств провален: ожидалось ${initialCount + 1}, получено ${Vehicle.getTotalVehicles()}`);

    // Тест сеттера
    try{
    const nextyear = new Date().getFullYear() + 1;
    vehicleToyota.year = nextyear;
    }
    catch{
        console.error("Ошибка: год выпуска не может быть больше текущего года");
    }

    // Тест Car
    const carHonda = new Car('Honda', 'Civic', 2018, 4);
    carHonda.displayInfo();

    console.log(`Разница возраста: ${Vehicle.compareAge(carHonda, vehicleToyota)} лет`);
    console.log(`Общее количество созданных транспортных средств: ${Vehicle.getTotalVehicles()} шт`);

    try{
        const carError = new Car('Honda', 'Civic', 2018, 0);
    }
    catch{
        console.error("Ошибка: некорректное количество дверей");
    }

    try{
        const carError = new Car('Honda', 'Civic', 2018, 4.5);
    }
    catch{
        console.error("Ошибка: некорректное количество дверей");
    }

    try{
        const carError = new Car('Honda', 'Civic', 2018, '4');
    }
    catch{
        console.error("Ошибка: некорректное количество дверей");
    }

    try{
        const carError = new Car('Honda', 'Civic', 2018);
    }
    catch{
        console.error("Ошибка: некорректное количество дверей");
    }

    try{
        const carError = new Car('', 'Civic', 2018, 4);
    }
    catch{
        console.error("Ошибка: марка и модель должны быть непустыми строками");
    }

    try{
        const carError = new Car(Honda, 'Civic', 2018, 4);
    }
    catch{
        console.error("Ошибка: марка и модель должны быть непустыми строками");
    }

    try{
        const carError = new Car(1, 'Civic', 2018, 4);
    }
    catch{
        console.error("Ошибка: марка и модель должны быть непустыми строками");
    }

    try{
        const carError = new Car('Honda', '', 2018, 4);
    }
    catch{
        console.error("Ошибка: марка и модель должны быть непустыми строками");
    }

    try{
        const carError = new Car('Honda', Civic, 2018, 4);
    }
    catch{
        console.error("Ошибка: марка и модель должны быть непустыми строками");
    }

    try{
        const carError = new Car('Honda', 1, 2018, 4);
    }
    catch{
        console.error("Ошибка: марка и модель должны быть непустыми строками");
    }

    try{
        const vehicleError = new Vehicle('Honda', 'Civic', '2018', 4)
    }
    catch{
        console.error("Ошибка: год выпуска должен быть целым числом");
    }

    try{
        const vehicleError = new Vehicle('Honda', 'Civic', 2018.5, 4)
    }
    catch{
        console.error("Ошибка: год выпуска должен быть целым числом");
    }

    try{
        const vehicleError = new Vehicle('Honda', 'Civic', 2018.5, 4)
    }
    catch{
        console.error("Ошибка: год выпуска должен быть целым числом");
    }

    try{
        const vehicleError = new Vehicle('Honda', 'Civic', 2030, 4)
    }
    catch{
        console.error("Ошибка");
    }

    try{
        const vehicleError = new Vehicle('Honda', 'Civic', 1, 4)
    }
    catch{
        console.error("Ошибка");
    }

    console.assert(carHonda.make === 'Honda', "Тест make провален");
    console.assert(carHonda.model === 'Civic', "Тест model провален");
    console.assert(carHonda.year === 2018, "Тест year провален");
    console.assert(carHonda.age === new Date().getFullYear() - 2018, 'Тест возраста провален');

    console.assert(carHonda instanceof Vehicle, "Тест наследования провален");
    console.assert(carHonda.numDoors === 4, "Тест количества дверей провален");
    console.assert(carHonda.honk() === "Beep beep!", "Тест honk провален");
   console.assert(Vehicle.getTotalVehicles() === 2, 'не совпадает кол-во тр.средства');
    vehicleToyota.year = 2010;
    vehicleToyota.displayInfo();
    console.assert(vehicleToyota.year === 2010, 'не совпадает год');

    // Тест compareAge
    console.assert(Vehicle.compareAge(carHonda, vehicleToyota) === carHonda.year - vehicleToyota.year , "Тест compareAge провален");

    // Тест ElectricCar
    const electricTesla = new ElectricCar('Tesla', 'Model 3', 2020, 4, 75);
    electricTesla.displayInfo();

    try{
        const electricError = new ElectricCar('Tesla', 'Model 3', 2020, 4, undefined);
    }
    catch{
        console.error("Ошибка: емкость батареи должна быть указана");
    }
  
    try{
        const electricError = new ElectricCar('', 'Model 3', 2020, 4, 75);
    }
    catch{
        console.error("Ошибка: марка и модель должны быть непустыми строками");
    }
   
    try{
        const electricError = new ElectricCar(Tesla, 'Model 3', 2020, 4, 75);
    }
    catch{
        console.error("Ошибка: марка и модель должны быть непустыми строками");
    }
 
    try{
        const electricError = new ElectricCar(1, 'Model 3', 2020, 4, 75);
    }
    catch{
        console.error("Ошибка: марка и модель должны быть непустыми строками");
    }
  
    try{
        const electricError = new ElectricCar('Tesla', '', 2020, 4, 75);
    }
    catch{
        console.error("Ошибка: марка и модель должны быть непустыми строками");
    }
 
    try{
        const electricError = new ElectricCar('Tesla', 1, 2020, 4, 75);
    }
    catch{
        console.error("Ошибка: марка и модель должны быть непустыми строками");
    }
  
    try{
        const electricError = new ElectricCar('Tesla', 'Model 3', 2020.5, 4, 75);
    }
    catch{
        console.error("Ошибка: год выпуска должен быть целым числом");
    }
  
    try{
        const electricError = new ElectricCar('Tesla', 'Model 3', '2020', 4, 75);
    }
    catch{
        console.error("Ошибка: год выпуска должен быть целым числом");
    }
   
    try{
        const electricError = new ElectricCar('Tesla', 'Model 3', 2030, 4, 75);
    }
    catch{
        console.error("Ошибка");
    }
   
    try{
        const electricError = new ElectricCar('Tesla', 'Model 3', 1, 4, 75);
    }
    catch{
        console.error("Ошибка");
    }
  
    try{
        const electricError = new ElectricCar('Tesla', 'Model 3', 2020, '4', 75);
    }
    catch{
        console.error("Ошибка: некорректное количество дверей");
    }
   
    try{
        const electricError = new ElectricCar('Tesla', 'Model 3', 2020, 0, 75);
    }
    catch{
        console.error("Ошибка: некорректное количество дверей");
    }
   
    try{
        const electricError = new ElectricCar('Tesla', 'Model 3', 2020, 4.5, 75);
    }
    catch{
        console.error("Ошибка: некорректное количество дверей");
    }
 
    try{
        const electricError = new ElectricCar('Tesla', 'Model 3', 2020, 4, '75');
    }
    catch{
        console.error("Ошибка: некорректная емкость батареи");
    }
 
    try{
        const electricError = new ElectricCar('Tesla', 'Model 3', 2020, 4, 75.5);
    }
    catch{
        console.error("Ошибка: некорректная емкость батареи");
    }

    try{
        const electricError = new ElectricCar('Tesla', 'Model 3', 2020, 4, 0);
    }
    catch{
        console.error("Ошибка: некорректная емкость батареи");
    }

    try{
        const electricError = new ElectricCar('Tesla', 'Model 3', 2020, 4);
    }
    catch{
        console.error("Ошибка: некорректная емкость батареи");
    }


    console.assert(electricTesla.make === 'Tesla', "Тест make провален");
    console.assert(electricTesla.model === 'Model 3', "Тест model провален");
    console.assert(electricTesla.year === 2020, "Тест year провален");
    console.assert(electricTesla.age === new Date().getFullYear() - 2020, 'Тест возраста провален');

    console.assert(electricTesla instanceof Car, "Тест наследования провален");
    console.assert(electricTesla.numDoors === 4, "Тест количества дверей провален");
    console.assert(electricTesla.honk() === "Beep beep!", "Тест honk провален");
    console.assert(Vehicle.getTotalVehicles() === 3, 'не совпадает кол-во тр.средства');
    electricTesla.year = 2020;
    electricTesla.displayInfo();
    console.assert(electricTesla.year === 2020, 'не совпадает год');
    console.assert(Vehicle.compareAge(vehicleToyota, electricTesla) === electricTesla.year - vehicleToyota.year, 'Тест разницы возраста тр.средств провален');

    console.assert(electricTesla.batteryCapacity === 75, "Тест емкости батареи провален");
    console.assert(electricTesla.calculateRange() == 450, "Тест calculateRange провален");
    
    // Тест createVehicleFactory
    const createCarFactory_1 = createVehicleFactory(Vehicle);
    const myNewCar_1 = createCarFactory_1('BMW', 'X5', 2022);
    console.log('Создан новый автомобиль:');
    myNewCar_1.displayInfo();
    
    const createCarFactory_2 = createVehicleFactory(Car);
    const myNewCar_2 = createCarFactory_2('BMW', 'X5', 2022, 4);
    console.log('Создан новый автомобиль:');
    myNewCar_2.displayInfo();

    const createCarFactory_3 = createVehicleFactory(ElectricCar);
    const myNewCar_3 = createCarFactory_3('BMW', 'X5', 2022, 4, 60);
    console.log('Создан новый автомобиль:');
    myNewCar_3.displayInfo();
    
    const testVehicle = new Vehicle('Test', 'Model', 2010);
    console.assert(testVehicle.age === (new Date().getFullYear() - 2010), 'Тест возраста провален');

    console.log('Всего создано транспортных средств:', Vehicle.getTotalVehicles());
    console.log('Все тесты пройдены! ✅');
}

runTests();