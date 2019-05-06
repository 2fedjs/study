/*#случаные числа*/

//Базовая генерация

Math.random()
//0.19401081069372594
//Math.random() всегда возвращает число с плавающей точкой между 0 и 1.

//Технически, число, которое вы получите, может быть 0, но никогда не будет точно 1.

//Посколько это используется достаточно часто, Math.random() помещают внутрь функции

function getRandom() {
  return Math.random();
}
//Проблема, конечно, заключается в том, что функция всегда будет создавать случайное число в пределах очень ограниченного диапазона. Большинство других рецептов на этой странице предназначены для того, чтобы решить эту проблему.

//Генерация между числами: минимальные и максимальные значения
//Чтобы добавить эту функциональность, нам потребуется немного математики.


function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
getRandomFloat(11, 101)
//> 75.31898734299466

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

getRandomInt(10, 20)
//> 12
//Случайное целое число в диапазоне, включая минимальное и максимальное.
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInRange(1, 10)
//> 7
//Подбрасывание монеты(случайное true или false)
//Если вам нужно получить просто 0 или 1, то используйте следующий код:

function coinToss() {

  return Math.floor(Math.random() * 2);

}

coinToss();

//> 0
//Если нужно конкретно true или false

function coinToss() {
  return (Math.floor(Math.random() * 2) === 0);
}
coinToss();
//> true
//Если вам нужно ассоциировать любые слова со сторонами монеты

function coinFlip() {
  return (Math.floor(Math.random() * 2) === 0) ? "up" : "down";
}
coinToss();
//> up
//Генерация с исключениями
//Для ограниченного диапазона целых чисел: создайте массив чисел, которые вы бы хотели вырисовывать, и выберите из него случайное.

var numPool = [ 1, 3, 5, 7, 9, 10 ],
rand = numPool[Math.floor(Math.random() * numPool.length)];
//Для чего-нибудь более динамичного: добавьте массив целых чисел, которые вы хотите исключить, и пустой массив, который будет содержать результат фильтрации первого массива во второй.

var numPool = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var excludePool = [ 3, 4 ];
var filteredPool = [];
//Затем создайте цикл по массиву numPool, проверьте, есть ли случайное число в массиве исключений excludePool, и поместите результат в массив filteredPool:

for (var i = 0; i < numPool.length; i++) {
  if (excludePool.indexOf(numPool[i]) === -1) {
   filteredPool.push(numPool[i]);
  }
}
//Наконец, отобразите случайное число из отфильтрованного массива

var rand = filteredPool[Math.floor(Math.random() * filteredPool.length)];
//Генерация случайного, неповторяющегося числа
//Для небольших наборов чисел: создайте массив, заполненный элементами, перетасуйте их случайным образом, поместите результат в новый массив, затем достаньте перетасованные элементы один раз:

var numPool = [ 13, 21, 36, 14, 27, 10 ];

function shuffle(numPool) {
  for(var j, x, i = numPool.length; i; j = parseInt(Math.random() * i), x = numPool[--i], numPool[i] = numPool[j], numPool[j] = x);
  return numPool;
};
var randomResult = shuffle(numPool);
while( randomResult.length > 0 ) {
  console.log( randomResult.pop() );
}
//Для более больших наборов чисел: создайте и заполните массив случайными целыми числами, отклоняя любое, которое уже было ранее сгенерировано:

var numReserve = []
while (numReserve.length < 12) {
  var randomNumber = Math.ceil(Math.random() * 1000);
  var found = false;
  for (var i = 0; i < numReserve.length; i++) {
  if (numReserve[i] === randomNumber){ 
   found = true;
   break;
  }
  }
  if (!found) { numReserve[numReserve.length]=randomNumber; }
}

//Генерация случайных чисел

Array.prototype.shuffle = function(){
  if(this.length==1) return this;
for(var j, x, i = this.length; i; j = Math.floor(Math.random()*i), x = this[--i], this[i] = this[j], this[j]=x);
  return this;
}


////////////////////////////////////////////////////////////////

/*#округление*/

//Округление до заданной точности

var n = 3.456;
alert( Math.round(n * 100) / 100 ); // 3.456 -> 345.6 -> 346 -> 3.46

////////////////////////////////////////////////////////////////

/*#строки*/

//Поиск всех вхождений
//Чтобы найти все вхождения подстроки, нужно запустить indexOf в цикле. Как только получаем очередную позицию – начинаем следующий поиск со следующей.

//Пример такого цикла:

 var str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
var target = "Иа"; // цель поиска

var pos = 0;
while (true) {
  var foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( foundPos ); // нашли на этой позиции
  pos = foundPos + 1; // продолжить поиск со следующей
}
/*Такой цикл начинает поиск с позиции 0, затем найдя подстроку на позиции foundPos, следующий поиск продолжит с позиции pos = foundPos+1, и так далее, пока что-то находит.

Впрочем, тот же алгоритм можно записать и короче:*/

var str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
var target = "Иа"; // цель поиска

var pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}

//Побитовая проверка на вхождение

var str = "Widget";
if (~str.indexOf("get")) {
  alert( 'совпадение есть!' );
}

Number(String(i)[j]); // перебор символов в строке, пришедшей как число


////////////////////////////////////////////////////////////////

/*#числа*/

//Проверка на число

function isNumeric(n) { 
return !isNaN(parseFloat(n)) && isFinite(n); 
}

//Вывод простых чисел

function showPrimes(n) { 
for (var i = 2; i < n; i++) { 
if (!isPrime(i)) continue; alert(i); // простое 
} } 
function isPrime(n) { 
for (var i = 2; i < n; i++) { 
if ( n % i == 0) return false; } 
return true; }


//Округление до заданной точности

var n = 3.456; 
alert( Math.round(n * 100) / 100 ); // 3.456 -> 345.6 -> 346 -> 3.46


////////////////////////////////////////////////////////////////

/*#объекты*/

//Клонирование объектов

var user = {
  name: "Вася",
  age: 30
};

var clone = {}; // новый пустой объект

// скопируем в него все свойства user
for (var key in user) {
  clone[key] = user[key];
}

// теперь clone - полностью независимая копия
clone.name = "Петя"; // поменяли данные в clone

alert( user.name ); // по-прежнему "Вася"

//Копировать все свойства одного объекта в другой
function copy() { 
var dst = arguments[0]; 
for (var i = 1; i < arguments.length; i++) {
 var arg = arguments[i]; 
for (var key in arg) { 
dst[key] = arg[key]; 
} } 
return dst; }


////////////////////////////////////////////////////////////////

/*#счетчик*/

function makeCounter() {
  var currentCount = 1;

  // возвращаемся к функции
  function counter() {
    return currentCount++;
  }

  // ...и добавляем ей методы!
  counter.set = function(value) {
    currentCount = value;
  };

  counter.reset = function() {
    currentCount = 1;
  };

  return counter;
}

var counter = makeCounter();

alert( counter() ); // 1
alert( counter() ); // 2

counter.set(5);
alert( counter() ); // 5

////////////////////////////////////////////////////////////////

/*#поиск максимума*/

alert( Math.max.apply(null, arr) ); // 5

var x = Math.min.apply(Math, arr) // запишет минимальное значение в массиве
arr.reduce(function(prev, item) { return Math.max(prev, item) })


let numbers = [2, 3, 15];
// Оператор ... в вызове передаст массив как список аргументов
// Этот вызов аналогичен Math.max(2, 3, 15)
let max = Math.max(...numbers);

//определить размер страницы с учетом прокрутки можно, взяв максимум из нескольких свойств:

 var scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);

alert( 'Высота с учетом прокрутки: ' + scrollHeight );

////////////////////////////////////////////////////////////////

/*#декораторы*/

var timers = {};

// прибавит время выполнения f к таймеру timers[timer]
function timingDecorator(f, timer) {
  return function() {
    var start = performance.now();

    var result = f.apply(this, arguments); // (*)

    if (!timers[timer]) timers[timer] = 0;
    timers[timer] += performance.now() - start;

    return result;
  }
}

// функция может быть произвольной, например такой:
var fibonacci = function f(n) {
  return (n > 2) ? f(n - 1) + f(n - 2) : 1;
}

// использование: завернём fibonacci в декоратор
fibonacci = timingDecorator(fibonacci, "fibo");

// неоднократные вызовы...
alert( fibonacci(10) ); // 55
alert( fibonacci(20) ); // 6765
// ...

// в любой момент можно получить общее количество времени на вызовы
alert( timers.fibo + 'мс' );

//проверку типа

// вспомогательная функция для проверки на число
function checkNumber(value) {
  return typeof value == 'number';
}

// декоратор, проверяющий типы для f
// второй аргумент checks - массив с функциями для проверки
function typeCheck(f, checks) {
  return function() {
    for (var i = 0; i < arguments.length; i++) {
      if (!checks[i](arguments[i])) {
        alert( "Некорректный тип аргумента номер " + i );
        return;
      }
    }
    return f.apply(this, arguments);
  }
}

function sum(a, b) {
  return a + b;
}

// обернём декоратор для проверки
sum = typeCheck(sum, [checkNumber, checkNumber]); // оба аргумента - числа

// пользуемся функцией как обычно
alert( sum(1, 2) ); // 3, все хорошо

// а вот так - будет ошибка
sum(true, null); // некорректный аргумент номер 0
sum(1, ["array", "in", "sum?!?"]); // некорректный аргумент номер 1

//Декоратор проверки доступа

function checkPermissionDecorator(f) {
  return function() {
    if (isAdmin()) {
      return f.apply(this, arguments);
    }
    alert( 'Недостаточно прав' );
  }
}
//Использование декоратора:

function save() { ... }

save = checkPermissionDecorator(save);
// Теперь вызов функции save() проверяет права

////////////////////////////////////////////////////////////////

/*#замер скорости*/

var arr = [];
for (var i = 0; i < 1000; i++) arr[i] = 0;

function walkIn(arr) {
  for (var key in arr) arr[key]++;
}

function walkLength(arr) {
  for (var i = 0; i < arr.length; i++) arr[i]++;
}

function bench(f) {
  var date = new Date();
  for (var i = 0; i < 1000; i++) f(arr);
  return new Date() - date;
}

// bench для каждого теста запустим много раз, чередуя
var timeIn = 0,
  timeLength = 0;
for (var i = 0; i < 100; i++) {
  timeIn += bench(walkIn);
  timeLength += bench(walkLength);
}

alert( 'Время walkIn: ' + timeIn + 'мс' );
alert( 'Время walkLength: ' + timeLength + 'мс' );

////////////////////////////////////////////////////////////////

/*#элементы*/

//перебрать в цикле элементы и присвоить всем класс

[].forEach.call(document.querySelectorAll(".story .link .highslide"), function(el){ el.classList.add("link link_ajax link_theme_normal", "story__image gw9wsja80d4pldi__image i-bem"); }); 

//плавно проскроллить
if(whereScroll() > 0) {
    window.scrollBy(0,-100);
    t = setTimeout('up()',20);
  } else clearTimeout(t);

//точное определение высоты прокрутки
var scrollHeight = Math.max( document.body.scrollHeight, 
document.documentElement.scrollHeight, 
document.body.offsetHeight, 
document.documentElement.offsetHeight, 
document.body.clientHeight, 
document.documentElement.clientHeight ); 
alert( 'Высота с учетом прокрутки: ' + scrollHeight );

//Получение координат в документе
function getCoords(elem) { // кроме IE8- 
var box = elem.getBoundingClientRect(); 
return { 
top: box.top + pageYOffset, 
left: box.left + pageXOffset 
}; 
}

//Назначить один обработчик на много кнопок
function Menu(elem) { 
this.save = function() { 
alert( 'сохраняю' ); 
}; 
this.load = function() { 
alert( 'загружаю' ); 
}; 
this.search = function() { 
alert( 'ищу' ); 
}; 
var self = this; 
elem.onclick = function(e) {
 var target = e.target; 
var action = target.getAttribute('data-action'); 
if (action) { self[action](); 
} 
}; 
} 
new Menu(menu);

//Скрывать элемент по атрибуту

document.onclick = function(event) { 
var target = event.target; 
var id = target.getAttribute('data-toggle-id'); 
if (!id) return; 
var elem = document.getElementById(id); 
elem.hidden = !elem.hidden; };

////////////////////////////////////////////////////////////////

/*#элементы*/

//Получения символа в кейпресс

function getChar(event) {
  if (event.which == null) { // IE
    if (event.keyCode < 32) return null; // спец. символ
    return String.fromCharCode(event.keyCode)
  }

  if (event.which != 0 && event.charCode != 0) { // все кроме IE
    if (event.which < 32) return null; // спец. символ
    return String.fromCharCode(event.which); // остальные
  }

  return null; // спец. символ
}

////////////////////////////////////////////////////////////////

/*#мышь*/

//Перетаскивание

avatar.addEventListener(“mousedown”, function(evt) {
  evt.preventDefault();

  var startCoords = {      // | запомнить текущие координаты по первому нажатию
    x: evt.clientX,
    y: evt.clientY
};

var onMouseMove = function (mouseEvt) {

  mouseEvt.preventDefault();
  
  var shift = {
    x: startCoords.x - moveEvt.clientX,
    y: startCoords.y - moveEvt.clientY,
           }
    startCoords = {       
    x: moveEvt.clientX,
      y: moveEvt.clientY
                  };
  
  block.style.top = (setup.offsetTop - shift.y) + ‘px’;
  block.style.left = (setup.offsetLeft - shift.x) + ‘px’;

};

var onMouseUp = function(upEvt) {
  upEvt.preventDefault();
  document.removeEventListener(“mousemove”, onMouseMove);
            document.removeEventListener(“mousemove”, onMouseUp);  

  if(dragged){
  var onClickPreventDefault = function(evt){
    evt.preventDefault();
    dialogHandler.removeEventListener(‘click’, onClickPreventDefault ) 
                };
  dialogHandler.addEventListener(‘click’, onClickPreventDefault );
            }
           };

document.addEventListener(“mousemove”, onMouseMove);   // | подписываюсь на перемещение
document.addEventListener(“mousemove”, onMouseUp);   // | подписываюсь на отжатие мыши
})

window.addEventListener('load',function() {}) -// ожидание загрузки страницы

form.addEventListener(‘submit’,function() {}) // событие отправки данные с формы
new FormData(form) // формирует массив данных введенных в форму

////////////////////////////////////////////////////////////////

/*#сортировка*/

//Сортировка методом выбора от меньшего к большему

for (var i = 0; i <= usersByDay.length - 2; i++) {
  var minValue = usersByDay[i];

  for (var j = i + 1; j <= usersByDay.length - 1; j++) {
    if (usersByDay[j] < minValue) {
      minValue = usersByDay[j];
      var swap = usersByDay[i];
      usersByDay[i] = minValue;
      usersByDay[j] = swap;
    }
  }
}

////////////////////////////////////////////////////////////////

/*#таймер*/

//Функция debounce

var DEBOUNCE_INTERVAL = 300;

window.debounce = function(fun){
  var lastTimeout = null;
  
  return function(){
  var args = arguments;
  if(lastTimaout){
  window.clearTimeout(lastTimeout )
            }
  lastTimeout = window setTimeout (function(){
  fun.apply(null,args);
            }, DEBOUNCE_INTERVAL );
};
}
