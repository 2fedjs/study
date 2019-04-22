﻿/*#случаные числа*/

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


let numbers = [2, 3, 15];
// Оператор ... в вызове передаст массив как список аргументов
// Этот вызов аналогичен Math.max(2, 3, 15)
let max = Math.max(...numbers);

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