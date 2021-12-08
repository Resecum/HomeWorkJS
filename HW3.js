// Задание No1. Проверка на пустоту
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств,
// иначе false.
/*
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
 */

//Задание No2. Умножаем все числовые свойства на 2
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.
/*
function multiplyNumeric(obj) {
    for (let key in obj) {
        if(typeof obj[key] === 'number'){
            obj[key] *=2;
        }
    }
}
 */

// Задание No3. Ввод числового значения
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую
// строку или нажав «Отмена». В этом случае функция должна вернуть null.
/*
function readNumber() {
    let promptNum;

    do {
        promptNum = prompt("Введите число", 0);
    } while (!isFinite(promptNum));

    if (promptNum === null || promptNum === '') {
        return null;
    }

    return +promptNum;
}
alert(readNumber());
 */

// Задание No4. Случайное число от min до max
// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до
// 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число с
// плавающей точкой от min до max (но не включая max).
/*
function random(min, max) {
    let rand = min + Math.random() * (max - min);
    return rand;
}

alert( random(1, 5) );
 */

// Задание No5. Случайное целое число от min до max
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое
// (integer) число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.
/*
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

alert( randomInteger(1, 5) );
 */

//Задание No6. Сделать первый символ заглавным
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
/*
function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("вася") );
 */

// Задание No7. Проверка на спам
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или
// 'XXX', а иначе false.
/*
function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );
 */

// Задание No8. Усечение строки
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если
// она превосходит maxlength, заменяет конец str на "...", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо,
// если необходимо, усечённая строка.
/*
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '…'
    } else {
        return str
    }
    ;
}

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
 */

// Задание No9. Выделить число
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять
// числовое значение и возвращать его.
/*
function extractCurrencyValue(str) {
    return +str.slice(1);
}

alert( extractCurrencyValue('$120') === 120 );
 */

// Задание No10. Сумма введённых чисел
// Напишите функцию sumInput(), которая:
// • Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// • Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// • Подсчитывает и возвращает сумму элементов массива.
// • P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
/*
function sumInput() {

    let numbers = [];
    let sum = 0;

    while (true) {

        let value = prompt("Введите число", 0);

        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);

        sum += +value;
    }

    return sum;
}

alert(sumInput());
 */

// Задание No11. Подмассив наибольшей суммы
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.
/*
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) { // для каждого элемента массива
        partialSum += item; // добавляем значение элемента к partialSum
        maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
        if (partialSum < 0) partialSum = 0; // ноль если отрицательное
    }

    return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) );
 */

// Задание No12. Обязателен ли "else"?
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она запрашивает подтверждение через confirm и возвращает его
// результат:
// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// // ...
// return confirm('Родители разрешили?');
// }
// }
// Будет ли эта функция работать как-то иначе, если убрать else? // Думаю будет работать так же
// function checkAge(age) {
// if (age > 18) {
// return true;
// }
// // ...
// return confirm('Родители разрешили?');
// }
// Есть ли хоть одно отличие в поведении этого варианта? // Думаю отличий нету.


// Задание No13. Перепишите функцию, используя оператор '?' или '||'
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она задаёт вопрос confirm и возвращает его результат.
// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Родители разрешили?');
// }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
// Сделайте два варианта функции checkAge:
// Используя оператор ?
// Используя оператор ||
/*
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge2(age) {
    return (age > 18) || confirm('Родители разрешили?');
}
 */

// Задание No14. Функция min(a, b)
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
/*
function min(a,b) {
    return (a < b) ? a : b;
}
 */

// Задание No15. Функция pow(x,n)
// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря,
// умножает x на себя n раз и возвращает результат.
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.
/*
function pow(x, n) {

    return x**n;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    alert( pow(x, n) );
}
 */

// Задание No16. Перепишите с использованием функции-стрелки
// Замените код Function Expression стрелочной функцией:
// function ask(question, yes, no) {
// if (confirm(question)) yes()
// else no();
// }
// ask(
// "Вы согласны?",
// function() { alert("Вы согласились."); },
// function() { alert("Вы отменили выполнение."); }
// );
/*
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);
 */

// Задание No17. Робинзон Крузо
// Ваш месячный доход - 3333 попугая. Вы хотите купить пальму за 8000
// попугаев. Вычислите, за какой промежуток времени вы насобираете на
// пальму, при условии что ваши ежемесячные расходы составляют 1750 попугаев.
/*
function calcHowMonthSaveMoneyOnGoal(monthlyIncome, monthlyConsumption, goal) {
    let monthlySavings = monthlyIncome - monthlyConsumption;
    return Math.ceil(goal / monthlySavings) + " месяцев";
}

alert(calcHowMonthSaveMoneyOnGoal(3333,1750,8000));
 */

// Задание No18. Вопросы пользователю
// 1. Спросить у пользователя 10 чисел
// 2. Если число
// - положительное —> ничего не делать
// - отрицательная —> получить их сумму
// 3. Вывести сумму отрицательных чисел, которые ввел пользователь
// ВАЖНО: по условиям задачи в вашем коде должен быть только 1 prompt и только 1 цикл for
/*
function calcSum10Numbers() {
    let sum = 0;
    for (let i = 1; i < 11; i++) {
        let getPrompt = +prompt("Введите " + i + "е число")
        if (getPrompt < 0) {
            sum += getPrompt
        }
    }
    return alert(sum);
}

calcSum10Numbers();
 */

// Задание No19. Скопирован ли массив?
// Что выведет следующий код?
// let fruits = ["Яблоки", "Груша", "Апельсин"];
// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");
// // что в fruits?                // fruits = ["Яблоки", "Груша", "Апельсин", "Банан"]
// alert( fruits.length ); // ?   // 4

// Задание No20. Операции с массивами
// Давайте произведём 5 операций с массивом.
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в
// середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.
/*
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп", "Регги");
 */

// Задание No21. Вызов в контексте массива
// Каков результат? Почему?
// let arr = ["a", "b"];
// arr.push(function() {
// alert( this );
// })
// arr[2](); // ?

/*
Каков результат?
a,b, function() {
  alert( this );
}
Почему?
У нас есть вызов функции arr[2] как метода объекта. Соответственно, он получает в качестве this объект arr и выводит массив
 */

