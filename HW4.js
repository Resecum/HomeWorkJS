
// Задание No1. Дочерние элементы в DOM
// Для страницы:
// <html>
// <body>
// <div>Пользователи:</div>
// <ul>
// <li>Джон</li>
// <li>Пит</li>
// </ul>
// </body>
// </html>
// Как получить:
// • Напишите код, который получит элемент <div>?              // document.body.firstElementChild
// • Напишите код, который получит <ul>?                       // document.body.firstElementChild.nextElementSibling
// • Напишите код, который получит второй <li> (с именем Пит)? // document.body.firstElementChild.nextElementSibling.lastElementChild

// Задание No2. Выделите ячейки по диагонали
// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их,
// используя код:
// // в переменной td находится DOM-элемент для тега <td>
// td.style.backgroundColor = 'red';
/*
let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}
*/

// Задание No3. Поиск элементов
// Вот документ с таблицей и формой. Как найти?...
// • Таблицу с id="age-table".                       // let table = document.getElementById('age-table')
// • Все элементы label внутри этой таблицы (их три).// document.querySelectorAll('#age-table label')
// • Первый td в этой таблице (со словом «Age»).     // table.querySelector('td')
// • Форму form с именем name="search".              // document.querySelector('form[name="search"]')
// • Первый input в этой форме.                      // document.querySelector('input')
// • Последний input в этой форме.
/*
let inputs = document.querySelectorAll('input')
inputs[inputs.length-1].style.backgroundColor = "red";
 */

// Задание No4. Очистите элемент
// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
// <ol id="elem">
// <li>Привет</li>
// <li>Мир</li>
// </ol>
// <script>
// function clear(elem) {
// /* ваш код */
// }
// clear(elem); // очищает список
// </script>
/*
function clear(elem) {
    while (elem.firstChild) {
        elem.firstChild.remove();
    }
}
 */

// Задание No5. Создайте список
// Напишите интерфейс для создания списка.
// Для каждого пункта:
// 1. Запрашивайте содержимое пункта у пользователя с помощью prompt.
// 2. Создавайте элемент <li> и добавляйте его к <ul>.
// 3. Процесс прерывается, когда пользователь нажимает Esc или вводит пустую
// строку.
// Все элементы должны создаваться динамически.
// Если пользователь вводит HTML-теги -– пусть в списке они показываются как обычный
// текст.
/*
while (true) {
    let data = prompt("Введите текст для элемента списка", "");

    if (!data) {
        break;
    }

    let li = document.createElement('li');
    li.textContent = data;
    ul.append(li);
}
 */

// Задание No6. Вставьте HTML в список
// Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:
// <ul id="ul">
// <li id="one">1</li>
// <li id="two">4</li>
// </ul>
/*
let one = document.getElementById('one');
one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');
 */

// Задание No7. Создать уведомление
// Напишите функцию showNotification(options), которая создаёт уведомление: <div
// class="notification"> с заданным содержимым. Уведомление должно автоматически
// исчезнуть через 1,5 секунды.
/*
function showNotification({top = 0, right = 0, html, className}) {

    let notification = document.createElement('div');
    notification.className = "notification";
    if (className) {
        notification.classList.add(className);
    }

    notification.style.top = top + 'px';
    notification.style.right = right + 'px';

    notification.innerHTML = html;
    document.body.append(notification);

    setTimeout(() => notification.remove(), 1500);
}

setInterval(() => {
    showNotification({
        top: 10,
        right: 10,
        html: 'Hello !',
        className: "welcome"
    });
}, 2000);
 */
