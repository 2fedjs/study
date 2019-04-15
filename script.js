/*#ссылки*/

//plnkr.co - для решения задач онлайн
//https://github.com/azat-io/you-dont-know-js-ru - you-dont-know-js-ru

////////////////////////////////////////////////////////////////

/*#подключение*/

/*<script src="/path/to/script.js"></script> - загрузка внешнего скрипта
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js"></script> - загрузка внешнего скрипта
<script src="1.js" async></script> не будет мешать отображению документа, выполнится при загрузке, выполняются по мере загрузки
<script src="2.js" defer></script> - выполнится после загрузки документа, выполнятюся скрипты последовательно
<link rel=”preload” href=”external.js” as=”script”>*/

//Создать элемент и вставить на страницу
function addScript(src){ 

  var script = document.createElement('script'); 
  script.src = src; 
  script.async = false; // чтобы гарантировать порядок 
  document.head.appendChild(script); 

}

////////////////////////////////////////////////////////////////

/*#use strict*/

num = 5; // error: num is not defined

/*Function Declaration при use strict видны только внутри блока, в котором объявлены*/

function f(x) {
 "use strict"; // для браузеров с поддержкой строгого режима 
arguments[0] = 5; 
alert( x ); // не 5, а 1! Переменная "отвязана" от arguments 
} 
f(1);

arguments.callee //при use strict оно не работает. хранит в свойстве ссылку на функцию, которая выполняется в данный момент.
arguments.callee.caller //при use strict оно не работает. хранит ссылку на функцию, которая вызвала данную.

/*У функций в режиме use strict для this вместо глобального объекта this будет undefined.

При use strict код внутри eval по-прежнему сможет читать и менять внешние переменные, однако переменные и функции, объявленные внутри eval, не попадут наружу.*/

// попытаемся записать свойство в строку:
var user = "Вася";
user.age = 30;
alert( user.age ); // undefined
/*Свойство age было записано во временный объект, который был тут же уничтожен, так что смысла в такой записи немного. Пример выше выполняется без use strict, в строгом режиме была бы ошибка, и это хорошо, так как такая запись, по большому счету, не имеет смысла.*/

//В современном JavaScript от with отказались. С use strict она не работает.
with(obj) { 
  //...код...
}

////////////////////////////////////////////////////////////////

/*#Дата и Время*/

//Создание
//Создает объект Date с текущей датой и временем:
var now = new Date();
alert( now );

// 24 часа после 01.01.1970 GMT+0
var Jan02_1970 = new Date(3600 * 24 * 1000);
alert( Jan02_1970 )

new Date(datestring)
//Если единственный аргумент – строка, используется вызов Date.parse для чтения даты из неё.

new Date(2011, 0, 1, 0, 0, 0, 0); // // 1 января 2011, 00:00:00
new Date(2011, 0, 1); // то же самое, часы/секунды по умолчанию равны 0

getFullYear()
//Получить год (из 4 цифр)
getMonth()
//Получить месяц, от 0 до 11.
getDate()
//Получить число месяца, от 1 до 31.
getHours(), getMinutes(), getSeconds(), getMilliseconds()
//Получить соответствующие компоненты.
//Дополнительно можно получить день недели:
getDay()  //от 0(воскресенье) до 6(суббота).

//Существуют также UTC-варианты этих методов, возвращающие день, месяц, год и т.п. для зоны GMT+0 (UTC): getUTCFullYear(), getUTCMonth(), getUTCDay().
// текущая дата
var date = new Date();

// час в текущей временной зоне
alert( date.getHours() );

// сколько сейчас времени в Лондоне?
// час в зоне GMT+0
alert( date.getUTCHours() );

//существуют два специальных метода без UTC-варианта:

getTime()
//Возвращает число миллисекунд, прошедших с 1 января 1970 года GMT+0, то есть того же вида, который используется в конструкторе new Date(milliseconds).

getTimezoneOffset()
//Возвращает разницу между местным и UTC-временем, в минутах.

 alert( new Date().getTimezoneOffset() ); // Для GMT-1 выведет 60

//Установка компонентов даты

//Следующие методы позволяют устанавливать компоненты даты и времени:

setFullYear(year [, month, date])
setMonth(month [, date])
setDate(date)
d.setDate(1); // поставить первое число месяца
d.setDate(0); // нулевого числа нет, будет последнее число предыдущего месяца
d.setDate(-1); // предпоследнее число предыдущего месяца
setHours(hour [, min, sec, ms])
setMinutes(min [, sec, ms])
setSeconds(sec [, ms])
setMilliseconds(ms)
setTime(milliseconds) //(устанавливает всю дату по миллисекундам с 01.01.1970 UTC)
//Все они, кроме setTime(), обладают также UTC-вариантом, например: setUTCHours().

//Автоисправление 
var d = new Date(2013, 0, 32); // 32 января 2013 ?!?
alert(d); // ... это 1 февраля 2013!

var d = new Date(2011, 1, 28);
d.setDate(d.getDate() + 2);

alert( d ); // 2 марта, 2011

//получим дату на 70 секунд большую текущей:

 var d = new Date();
d.setSeconds(d.getSeconds() + 70);

alert( d ); // выведет корректную дату

//Преобразование к числу
alert(+new Date) // +date то же самое, что: +date.valueOf()

//даты можно вычитать, результат вычитания объектов Date – их временная разница, в миллисекундах.
var start = new Date; // засекли время

// что-то сделать
for (var i = 0; i < 100000; i++) {
  var doSomething = i * i * i;
}

var end = new Date; // конец измерения

alert( "Цикл занял " + (end - start) + " ms" );

//Форматирование и вывод дат

var date = new Date(2014, 11, 31, 12, 30, 0);

var options = {
  era: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

alert( date.toLocaleString("ru", options) ); // среда, 31 декабря 2014 г. н.э. 12:30:00
alert( date.toLocaleString("en-US", options) ); // Wednesday, December 31, 2014 Anno Domini 12:30:00 PM

//без локализации:

toString(), toDateString(), toTimeString() //Возвращают стандартное строчное представление, не заданное жёстко в стандарте, а зависящее от браузера. 

var d = new Date();
alert( d.toString() ); // вывод, похожий на 'Wed Jan 26 2011 16:40:50 GMT+0300'

toUTCString() //То же самое, что toString(), но дата в зоне UTC.

toISOString() //Возвращает дату в формате ISO

var d = new Date();

alert( d.toISOString() ); // вывод, похожий на '2011-01-26T13:51:50.417Z'

//Date.parse

var msUTC = Date.parse('2012-01-26T13:51:50.417Z'); // зона UTC

alert( msUTC ); // 1327571510417 (число миллисекунд)

//С таймзоной -07:00 GMT:

 var ms = Date.parse('2012-01-26T13:51:50.417-07:00');

alert( ms ); // 1327611110417 (число миллисекунд)

//Date.now()

Date.now() //возвращает дату сразу в виде миллисекунд. Технически, он аналогичен вызову +new Date(), но в отличие от него не создаёт промежуточный объект даты, а поэтому – во много раз быстрее.
 
////////////////////////////////////////////////////////////////

/*#типы данных*/

//Number:
Infinity, -Infinity , NaN

//String

//Boolean

//Null

//undefined

//object

//Оператор typeof возвращает тип аргумента.
typeof x
typeof(x)
//Результатом typeof является строка, содержащая тип

////////////////////////////////////////////////////////////////

/*#строки*/

alert( "Привет, мир!".length ); // 12
alert( hello.toUpperCase() ); // "ПРИВЕТ, МИР!"
alert( "Интерфейс" [0].toLowerCase() ); // 'и'

var str = "jQuery";
alert( str.charAt(0) ); // "j"

var str = "Я - современный браузер!";
alert( str[0] ); // "Я"

//charAt выдает пустую строку, а скобки – undefined:

var str = "Widget with id";
alert( str.indexOf("Widget") ); // 0, т.к. "Widget" найден прямо в начале str
alert( str.indexOf("id") ); // 1, т.к. "id" найден, начиная с позиции 1
alert( str.indexOf("widget") ); // -1, не найдено, так как поиск учитывает регистр
alert(str.indexOf("id", 2)) // 12, поиск начат с позиции 2

var str = "stringify";
alert(str.slice(0,1)); // "s", символы с позиции 0 по 1 не включая 1.
alert( "testme".slice(-2) ); // "me", от 2 позиции с конца
alert( "testme".slice(1, -1) ); // "estm", от 1 позиции до первой с конца.

alert(str.substring(0,1)); // "s", символы с позиции 0 по 1 не включая 1.
alert( "testme".substring(-2) ); // "testme", -2 становится 0
//если start > end, то аргументы меняются местами, т.е. возвращается участок строки между start и end:
alert( "testme".substring(4, -1) ); // "test"
// -1 становится 0 -> получили substring(4, 0)
// 4 > 0, так что аргументы меняются местами -> substring(0, 4) = "test"
alert(str.substring(2)); // ringify, символы с позиции 2 до конца

str = str.substr(2,4); // ring, со 2-й позиции 4 символа
//Если параметр start является отрицательным, метод substr() использует его как индекс символа, начиная с конца строки. Если параметр start отрицателен и по модулю больше длины строки, метод substr() будет использовать 0 в качестве начального индекса.

alert( String.fromCharCode(1072) ); // 'а'
alert( "абрикос".charCodeAt(0) ); // 1072, код 'а'

var str = "Ёлки";
alert( str.localeCompare("Яблони") ); // -1
//Метод str1.localeCompare(str2) возвращает -1, если str1 < str2, 1, если str1 > str2 и 0, если они равны.

/*Специальные символы
Символ  Описание
\b      Backspace
\f      Form feed
\n      New line
\r      Carriage return
\t      Tab
\uNNNN  Символ в кодировке Юникод с шестнадцатеричным кодом `NNNN`. Например, `\u00A9` -- юникодное представление символа копирайт ©*/

////////////////////////////////////////////////////////////////

/*#числа*/

//Округляет число num до n знаков после запятой
alert( n.toFixed(2) ); // "12.35"
alert( n.toFixed(0) ); // "12"
alert( n.toFixed(5) ); // "12.34500"

alert( 0xFF ); // 255 в шестнадцатиричной системе

isNaN(n)

//точная проверка на число, которая не считает числом строку из пробелов, логические и специальные значения, а также отсекает Infinity
isNumeric(n)

//Проверка на три специальных числовых значения: NaN, Infinity и -Infinity.
alert( isFinite(1) ); // true
alert( isFinite(Infinity) ); // false
alert( isFinite(NaN) ); // false

alert( parseInt('12px') ); // 12
alert( parseInt('FF', 16) ); // 255

alert( parseFloat('12.3.4') ) // 12.3, ошибка на второй точке

alert( n.toString(16) ); // ff
var n = 1234567890;
alert( n.toString(36) ); // kf12oi

alert( number.toLocaleString() ); // 123 456 789

////////////////////////////////////////////////////////////////

/*#объекты*/

//Создание объектов
o = new Object(); // (1)
o = {}; // пустые фигурные скобки (2)

//проверить, есть ли в объекте свойство с определенным ключом.
if ("name" in person) //причем имя свойства – в виде строки

//Для перебора всех свойств из объекта
for (var key in menu) {
  alert( "Ключ: " + key + " значение: " + menu[key] );
}

// работать со свойствами в виде массива
var user = {
  name: "Петя",
  age: 30
}
var keys = Object.keys(user);
alert( keys ); // name, age

//Конструктор
//Конструктором становится любая функция, вызванная через new.
function Animal(name) {
  this.name = name;
  this.canWalk = true;
}

var animal = new Animal("ёжик");

//Иногда функцию-конструктор объявляют и тут же используют, вот так:

var animal = new function() {
  this.name = "Васька";
  this.canWalk = true;
};

//Дескрипторы в примерах
Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});
/*В нём могут быть следующие поля:

value – значение свойства, по умолчанию undefined
writable – значение свойства можно менять, если true. По умолчанию false.
configurable – если true, то свойство можно удалять, а также менять его в дальнейшем при помощи новых вызовов defineProperty. По умолчанию false.
enumerable – если true, то свойство просматривается в цикле for..in и методе Object.keys(). По умолчанию false.
get – функция, которая возвращает значение свойства. По умолчанию undefined.
set – функция, которая записывает значение свойства. По умолчанию undefined.*/
//Чтобы избежать конфликта, запрещено одновременно указывать значение value и функции get/set. Либо значение, либо функции для его чтения-записи, одно из двух. Также запрещено и не имеет смысла указывать writable при наличии get/set-функций.

//Свойство-функция
var user = {
  firstName: "Вася",
  surname: "Петров"
}

Object.defineProperty(user, "fullName", {
  get: function() {
    return this.firstName + ' ' + this.surname;
  },
   set: function(value) {
      var split = value.split(' ');
      this.firstName = split[0];
      this.surname = split[1];
    }
});

alert(user.fullName); // Вася Петров
//Если мы создаём объект при помощи синтаксиса { ... }, то задать свойства-функции можно прямо в его определении.
var user = {
  firstName: "Вася",
  surname: "Петров",

  get fullName() {
    return this.firstName + ' ' + this.surname;
  },

  set fullName(value) {
    var split = value.split(' ');
    this.firstName = split[0];
    this.surname = split[1];
  }
};

//Позволяет объявить несколько свойств сразу:
Object.defineProperties(user, {
  firstName: {
    value: "Петя"
  },

  surname: {
    value: "Иванов"
  },

  fullName: {
    get: function() {
      return this.firstName + ' ' + this.surname;
    }
  }
});


//возвращает только enumerable-свойства.
var obj = {
  a: 1,
  b: 2,
  internal: 3
};
alert( Object.keys(obj) ); // a,b

//возвращает все:
alert( Object.getOwnPropertyNames(obj) ); // a, b, internal

//Возвращает дескриптор для свойства obj[prop].
var obj = {
  test: 5
};
var descriptor = Object.getOwnPropertyDescriptor(obj, 'test');

// заменим value на геттер, для этого...
delete descriptor.value; // ..нужно убрать value/writable
delete descriptor.writable;
descriptor.get = function() { // и поставить get
  alert( "Preved :)" );
};

Object.preventExtensions(obj)
//Запрещает добавление свойств в объект.
Object.seal(obj)
//Запрещает добавление и удаление свойств, все текущие свойства делает configurable: false.
Object.freeze(obj)
//Запрещает добавление, удаление и изменение свойств, все текущие свойства делает configurable: false, writable: false.
Object.isExtensible(obj)
//Возвращает false, если добавление свойств объекта было запрещено вызовом метода Object.preventExtensions.
Object.isSealed(obj)
//Возвращает true, если добавление и удаление свойств объекта запрещено, и все текущие свойства являются configurable: false.
Object.isFrozen(obj)
//Возвращает true, если добавление, удаление и изменение свойств объекта запрещено, и все текущие свойства являются configurable: false, writable: false.

////////////////////////////////////////////////////////////////

/*#массивы*/

//Метод pop
var fruits = ["Яблоко", "Апельсин", "Груша"];
alert( fruits.pop() ); // удалили "Груша"
alert( fruits ); // Яблоко, Апельсин

//Метод push
var fruits = ["Яблоко", "Апельсин"];
fruits.push("Груша"); //могут добавлять сразу по несколько элементов: fruits.push("Апельсин", "Персик");
alert( fruits ); // Яблоко, Апельсин, Груша

//Метод shift
var fruits = ["Яблоко", "Апельсин", "Груша"];
alert( fruits.shift() ); // удалили Яблоко
alert( fruits ); // Апельсин, Груша

//Метод unshift
var fruits = ["Апельсин", "Груша"];
fruits.unshift('Яблоко');//могут добавлять сразу по несколько элементов: fruits.unshift("Ананас", "Лимон");
alert( fruits ); // Яблоко, Апельсин, Груша

//Существует еще один синтаксис для создания массива:
var arr = new Array("Яблоко", "Груша", "и т.п.");

//Операции с массивами также оптимизируются, особенно если массив хранит только один тип данных, например только числа. Порождаемый набор инструкций для процессора получается очень эффективным.

//Метод split
//превратить строку в массив
var names = 'Маша, Петя, Марина, Василий';
var arr = names.split(', ');
//необязательный второй аргумент – ограничение на количество элементов в массиве
alert( "a,b,c,d".split(',', 2) ); // a,b

var str = "тест";
alert( str.split('') ); // т,е,с,т

//Метод join
// массив склеить в строку
var arr = ['Маша', 'Петя', 'Марина', 'Василий'];
var str = arr.join(';');
alert( str ); // Маша;Петя;Марина;Василий
//Код для повторения строки 3 раза:
 alert( new Array(4).join("ля") ); // ляляля

//Метод splice
// изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
 arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
 // удалить 3 первых элемента и добавить другие вместо них
arr.splice(0, 3, "Мы", "изучаем")
//splice возвращает массив из удаленных элементов

// с позиции 2
// удалить 0
// вставить "сложный", "язык"
arr.splice(2, 0, "сложный", "язык");

// начиная с позиции индексом -1 (перед последним элементом)
// удалить 0 элементов,
// затем вставить числа 3 и 4
arr.splice(-1, 0, 3, 4);

//Метод slice
//Создает новый массив
//Метод slice(begin, end) копирует участок массива от begin до end, не включая end. Исходный массив при этом не меняется.
var arr = ["Почему", "надо", "учить", "JavaScript"];
var arr2 = arr.slice(1, 3); // элементы 1, 2 (не включая 3)
alert( arr2 ); // надо, учить

var arr = ["Почему", "надо", "учить", "JavaScript"];
alert( arr.slice(1) ); // взять все элементы, начиная с номера 1

var arr2 = arr.slice(-2); // копировать от 2-го элемента с конца и дальше

//Если вообще не указать аргументов – скопируется весь массив:
var fullCopy = arr.slice();

//Метод sort
//Метод sort() сортирует массив на месте. Например:
 var arr = [ 1, 2, 15 ];
arr.sort();
alert( arr );  // 1, 15, 2

function compareNumeric(a, b) { // return a - b;
  if (a > b) return 1;
  if (a < b) return -1;
}
var arr = [ 1, 2, 15 ];
arr.sort(compareNumeric);
alert(arr);  // 1, 2, 15

//Метод reverse
//изменяет массив 
var arr = [1, 2, 3];
arr.reverse();
alert( arr ); // 3,2,1

//Метод concat
//создаёт новый массив, в который копируются элементы из arr, а также value1, value2, ... valueN

var arr = [1, 2];
var newArr = arr.concat(3, 4);
alert( newArr ); // 1,2,3,4

//метод indexOf
//Метод «arr.indexOf(searchElement[, fromIndex])» возвращает номер элемента searchElement в массиве arr или -1, если его нет.
var arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

//метод lastIndexOf
//Метод «arr.lastIndexOf(searchElement[, fromIndex])» ищет справа-налево: с конца массива или с номера fromIndex, если он указан.

//Метод forEach
//для каждого элемента массива вызывает функцию callback.
arr.forEach(function(item, i, arr) {
  alert( i + ": " + item + " (массив:" + arr + ")" );
});
//Второй, необязательный аргумент forEach позволяет указать контекст this

//Метод filter
//используется для фильтрации массива через функцию. создаёт новый массив
var arr = [1, -1, 2, -2, 3];
var positiveArr = arr.filter(function(number) {
  return number > 0;
});
alert( positiveArr ); // 1,2,3

//Метод map
//используется для трансформации массива. создаёт новый массив
var names = ['HTML', 'CSS', 'JavaScript'];
var nameLengths = names.map(function(name) {
  return name.length;
});
// получили массив с длинами
alert( nameLengths ); // 4,3,10

//Метод every
//возвращает true, если вызов callback вернёт true для каждого элемента arr
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

//Метод some
//возвращает true, если вызов callback вернёт true для какого-нибудь элемента arr.
function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true

//Метод reduce
//применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению.
var a = ['h','e','l','l','o',]; 
var as = a.reduce((sum,elem)=>sum+elem);

/*Аргументы функции callback(previousValue, currentItem, index, arr):

previousValue – последний результат вызова функции, он же «промежуточный результат».
currentItem – текущий элемент массива, элементы перебираются по очереди слева-направо.
index – номер текущего элемента.
arr – обрабатываемый массив.*/

//Метод reduceRight
//сворачивает все элементы справа налево в одно значение
var a = ['h','e','l','l','o',]; 
var as = a.reduceRight((sum,elem)=>sum+elem);

//Псевдомассив аргументов "arguments"
function sayHi() {
  for (var i = 0; i < arguments.length; i++) {
    alert( "Привет, " + arguments[i] );
  }
}

sayHi("Винни", "Пятачок"); // 'Привет, Винни', 'Привет, Пятачок'

//Метод Array.isArray()
alert( Array.isArray([1,2,3]) ); // true
alert( Array.isArray("not array")); // false

////////////////////////////////////////////////////////////////

/*#Math*/

alert( Math.floor(3.1) );  // 3
alert( Math.ceil(3.1) );   // 4
alert( Math.round(3.1) );  // 3 , до ближайшего целого

Math.acos(x)
//Возвращает арккосинус x (в радианах)
Math.asin(x)
//Возвращает арксинус x (в радианах)
Math.atan(x)
//Возвращает арктангенс x (в радианах)
Math.atan2(y, x)
//Возвращает угол до точки (y, x). Описание функции: Atan2.
Math.sin(x)
//Вычисляет синус x
Math.cos(x)
//Вычисляет косинус x
Math.tan(x)
//Возвращает тангенс x
Math.sqrt(x)
//Возвращает квадратный корень из x.
Math.log(x)
//Возвращает натуральный (по основанию e) логарифм x.
Math.pow(x, exp)
//Возводит число в степень, возвращает xexp, например Math.pow(2,3) = 8. Работает в том числе с дробными и отрицательными степенями, например: Math.pow(4, -1/2) = 0.5.
Math.abs(x)
//Возвращает абсолютное значение числа
Math.exp(x)
//Возвращает ex, где e – основание натуральных логарифмов.
Math.max(a, b, c...)
//Возвращает наибольший из списка аргументов
Math.min(a, b, c...)
//Возвращает наименьший из списка аргументов
Math.random()
//Возвращает псевдослучайное число в интервале [0,1) – то есть между 0 (включительно) и 1 (не включая). Генератор случайных чисел инициализуется текущим временем.

////////////////////////////////////////////////////////////////

/*#операторы*/

// Кроме плюса арифметические операторы работают только с числами и всегда приводят аргументы к числу.

alert( +apples + +oranges ); // 5, число, оба операнда предварительно преобразованы в числа

//приоритет

/*20  Grouping  n/a ( … )
19          Member Access left-to-right … . …
  Computed Member Access  left-to-right … [ … ]
      new (with argument list)  n/a new … ( … )
            Function Call left-to-right … ( … )
18  new (without argument list) right-to-left new …
17  Postfix Increment n/a … ++
        Postfix Decrement … --
16  Logical NOT right-to-left ! …
                  Bitwise NOT ~ …
                  Unary Plus  + …
              Unary Negation  - …
            Prefix Increment  ++ …
            Prefix Decrement  -- …
                  typeof  typeof …
                      void  void …
                  delete  delete …
                    await await …
15  Exponentiation  right-to-left … ** …
14  Multiplication  left-to-right … * …
                        Division  … / …
                        Remainder … % …
13  Addition  left-to-right … + …
                Subtraction … - …
12  Bitwise Left Shift  left-to-right … << …
                  Bitwise Right Shift … >> …
        Bitwise Unsigned Right Shift  … >>> …
11  Less Than left-to-right … < …
        Less Than Or Equal  … <= …
              Greater Than  … > …
      Greater Than Or Equal … >= …
                        in  … in …
        instanceof  … instanceof …
10  Equality  left-to-right … == …
                Inequality  … != …
            Strict Equality … === …
          Strict Inequality … !== …
9 Bitwise AND left-to-right … & …
8 Bitwise XOR left-to-right … ^ …
7 Bitwise OR  left-to-right … | …
6 Logical AND left-to-right … && …
5 Logical OR  left-to-right … || …
4 Conditional right-to-left … ? … : …
3 Assignment  right-to-left … = …
                            … += …
                            … -= …
                            … **= …
                            … *= …
                            … /= …
                            … %= …
                            … <<= …
                            … >>= …
                            … >>>= …
                            … &= …
                            … ^= …
                            … |= …
2 yield right-to-left yield …
              yield*  yield* …
1 Comma / Sequence  left-to-right … , …*/

//Для if Число 0, пустая строка "", null и undefined, а также NaN являются false,

//В частности, двойное НЕ используют для преобразования значений к логическому типу:

 alert( !!"строка" ); // true
alert( !!null ); // false

//switch 

var a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( 'Я таких значений не знаю' );
}

//Оператор instanceof
//позволяет проверить, создан ли объект данной функцией
function User() {}
var user = new User();
alert( user instanceof User ); // true


////////////////////////////////////////////////////////////////

/*#преобразование типов*/

alert( '2' > 1 ); // true, сравнивается как 2 > 1
alert( '01' == 1 ); // true, сравнивается как 1 == 1
alert( false == 0 ); // true, false становится числом 0
alert( true == 1 ); // true, так как true становится числом 1.

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
/*Сравнения (1) и (2) дают false потому, что undefined при преобразовании к числу даёт NaN. А значение NaN по стандарту устроено так, что сравнения ==, <, >, <=, >= и даже === с ним возвращают false.
Проверка равенства (3) даёт false, потому что в стандарте явно прописано, что undefined равно лишь null или себе и ничему другому.*/

//Строковое преобразование
var a = true;
alert( a ); // "true"

String(null)

//Численное преобразование

//Численное преобразование происходит в математических функциях и выражениях, а также при сравнении данных различных типов (кроме сравнений ===, !==).
var a = +"123"; // 123
var a = Number("123"); // 123, тот же эффект

//Значение  Преобразуется в...
undefined     NaN
null          0
true / false  1 / 0
/*Строка  Пробельные символы по краям обрезаются.
Далее, если остаётся пустая строка, то 0, иначе из непустой строки "считывается" число, при ошибке результат NaN.
Например:*/

 // после обрезания пробельных символов останется "123"
alert( +"   \n  123   \n  \n" ); // 123

//Логическое преобразование


//Значение  Преобразуется в...
undefined, null     false
//Числа Все true, кроме 0, NaN -- false.
//Строки  Все true, кроме пустой строки "" -- false
//Объекты Всегда true

//Для явного преобразования

!!value 
Boolean(value)

////////////////////////////////////////////////////////////////

/*#побитовые операции*/

/*операции

Побитовое И (AND) 
a & b Ставит 1 на бит результата, для которого соответствующие биты операндов равны 1.
Побитовое ИЛИ (OR)  
a | b Ставит 1 на бит результата, для которого хотя бы один из соответствующих битов операндов равен 1.
Побитовое исключающее ИЛИ (XOR) 
a ^ b Ставит 1 на бит результата, для которого только один из соответствующих битов операндов равен 1 (но не оба).
Побитовое НЕ (NOT)  
~a  Заменяет каждый бит операнда на противоположный.
Левый сдвиг 
a << b  Сдвигает двоичное представление a на b битов влево, добавляя справа нули.
Правый сдвиг, переносящий знак  
a >> b  Сдвигает двоичное представление a на b битов вправо, отбрасывая сдвигаемые биты.
Правый сдвиг с заполнением нулями 
a >>> b Сдвигает двоичное представление a на b битов вправо, отбрасывая сдвигаемые биты и добавляя нули слева.*/

parseInt("11000", 2) //переводит строку с двоичной записью числа в число.

n.toString(2) //получает для числа n запись в 2-ной системе в виде строки.

//& (Побитовое И)
/*a b a & b
0 0   0
0 1   0
1 0   0
1 1   1*/

//| (Побитовое ИЛИ)
/*a b a | b
0 0   0
0 1   1
1 0   1
1 1   1*/

//^ (Исключающее ИЛИ)
/*a b a ^ b
0 0   0
0 1   1
1 0   1
1 1   0*/

//~ (Побитовое НЕ)

 9 //(по осн. 10)
  = 00000000000000000000000000001001 //(по осн. 2)
             //  --------------------------------
~9 //(по осн. 10)
  = 11111111111111111111111111110110 //(по осн. 2)
  = -10 //(по осн. 10)
//Из-за внутреннего представления отрицательных чисел получается так, что ~n == -(n+1).
alert( ~3 ); // -4
alert( ~-1 ); // 0

//<< (Битовый сдвиг влево)

9 //(по осн.10)
  = 00000000000000000000000000001001 //(по осн.2)
               //   --------------------------------
9 << 2 //(по осн.10)
  = 00000000000000000000000000100100 //(по осн.2)
  = 36 //(по осн.10)

  //побитовые операторы работают только с 32-битными числами

  alert(10000000000 << 1); // -1474836480, отброшен крайний-левый бит
  alert(10000000000 * 2); // 20000000000, обычное умножение

 // >> (Правый битовый сдвиг, переносящий знак)

9 //(по осн.10)
  = 00000000000000000000000000001001 //(по осн.2)
          //       --------------------------------
9 >> 2 //(по осн.10)
  = 00000000000000000000000000000010 //(по осн.2)
  = 2 //(по осн.10)

//  >>> (Правый сдвиг с заполнением нулями)
/*Для неотрицательных чисел правый сдвиг с заполнением нулями >>> и правый сдвиг с переносом знака >> дадут одинаковый результат, т.к в обоих случаях слева добавятся нули.
Для отрицательных чисел – результат работы разный. Например, -9 >>> 2 даст 1073741821, в отличие от -9 >> 2 (дает -3):*/
-9 //(по осн.10)
  = 11111111111111111111111111110111 //(по осн.2)
              //      --------------------------------
-9 >>> 2 //(по осн.10)
  = 00111111111111111111111111111101 //(по осн.2)
  = 1073741821 //(по осн.10)

//Пример
  // найти пользователей с правами на изменение товаров или администраторов
findUsers(ACCESS_GOODS_EDIT | ACCESS_ADMIN);


var str = "Проверка";

if (~str.indexOf("верка")) { // Сочетание "if (~...indexOf)" читается как "если найдено"
  alert( 'найдено!' );
}

////////////////////////////////////////////////////////////////

/*#циклы*/

var i = 0;
while (i < 3) {
  alert( i );
  i++;
}

var i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

var i;
for (i = 0; i < 3; i++) {
  alert( i );
}

//Прерывание цикла: break

var sum = 0;
while (true) {
  var value = +prompt("Введите число", '');
  if (!value) break; // (*)
  sum += value;
}
alert( 'Сумма: ' + sum );

//Следующая итерация: continue

/*Директива continue прекращает выполнение текущей итерации цикла.
Она – в некотором роде «младшая сестра» директивы break: прерывает не весь цикл, а только текущее выполнение его тела, как будто оно закончилось.
Её используют, если понятно, что на текущем повторе цикла делать больше нечего.*/
//Например, цикл ниже использует continue, чтобы не выводить чётные значения:

for (var i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
  alert(i);
}

//Метки для break/continue

//Например, внутри цикла по i находится цикл по j, и при выполнении некоторого условия мы бы хотели выйти из обоих циклов сразу:
outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    var input = prompt('Значение в координатах '+i+','+j, '');
    // если отмена ввода или пустая строка -
    // завершить оба цикла
    if (!input) break outer; // (*)
  }
}
alert('Готово!');

//Метка имеет вид "имя:", имя должно быть уникальным. Она ставится перед циклом, вот так:

outer: for (var i = 0; i < 3; i++) { ... }

//Вызов break outer ищет ближайший внешний цикл с такой меткой и переходит в его конец.

////////////////////////////////////////////////////////////////

/*#функции*/

//Встроенные функции
var years = prompt('Сколько вам лет?', 100);
//Вызов prompt возвращает то, что ввёл посетитель – строку или специальное значение null, если ввод отменён.

var isAdmin = confirm("Вы - администратор?");
//Результатом будет true при нажатии OK и false – при CANCEL(Esc).

//Function Expression

var sayHi = function(person) {
  alert( "Привет, " + person );
};

sayHi('Вася');

//Function Declaration

function sum(a, b) {
  return a + b;
}

//функции, объявленные как Function Declaration, создаются интерпретатором до выполнения кода.

// создавать функцию полностью «на лету» из строки, вот так:
var sum = new Function('a,b', ' return a+b; ');

//Named Function Expression
var f = function sayHi(name) {
  alert( sayHi ); // изнутри функции - видно (выведет код функции)
};

alert( sayHi ); // снаружи - не видно (ошибка: undefined variable 'sayHi')
//Внутреннее имя позволяет функции надёжно обращаться к самой себе, где бы она ни находилась.
//Попробуем перенести её в другую переменную g:
function f(n) {
  return n ? n * f(n - 1) : 1;
};

var g = f;
f = null;

alert( g(5) ); // запуск функции с новым именем - ошибка при выполнении!

//Для того, чтобы функция всегда надёжно работала, объявим её как Named Function Expression:
 var f = function factorial(n) {
  return n ? n*factorial(n-1) : 1;
};

var g = f;  // скопировали ссылку на функцию-факториал в g
f = null;

alert( g(5) ); // 120, работает!

//При создании функция получает скрытое свойство [[Scope]], которое ссылается на лексическое окружение, в котором она была создана.
sayHi.[[Scope]] = window
//При создании функции с использованием new Function, её свойство [[Scope]] ссылается не на текущий LexicalEnvironment, а на window.

//Свойства функции
function f() {}

f.test = 5;
alert( f.test );

/*Свойства функции не стоит путать с переменными и параметрами. Они совершенно никак не связаны. Переменные доступны только внутри функции, они создаются в процессе её выполнения. Это – использование функции «как функции».
А свойство у функции – доступно отовсюду и всегда. Это – использование функции «как объекта».
Если хочется привязать значение к функции, то можно им воспользоваться вместо внешних переменных.*/

//модули
//Немедленно самоисполняемая функция - IIFE (Immediately Invoked Function Expression)

(function() {

  alert( "объявляем локальные переменные, функции, работаем" );
  // ...

}());

//Экспорт через return
var lodash = (function() {

  var version;
  function assignDefaults() { ... }

  return {
    defaults: function() {  }
  }

})();

//Метод call
func.call(context, arg1, arg2, ...) // то же, что обычный вызов func(a, b...), но с явно указанным this(=context).

var user = {
  firstName: "Василий",
  surname: "Петров",
  patronym: "Иванович"
};

function showFullName(firstPart, lastPart) {
  alert( this[firstPart] + " " + this[lastPart] );
}

// f.call(контекст, аргумент1, аргумент2, ...)
showFullName.call(user, 'firstName', 'surname') // "Василий Петров"
showFullName.call(user, 'firstName', 'patronym') // "Василий Иванович"

//Метод apply
func.apply(context, [arg1, arg2]);

//Метод bind
var g = f.bind("Context");
setTimeout(user.sayHi.bind(user), 1000); // аналог через встроенный метод
//Методы call/apply вызывают функцию с заданным контекстом и аргументами.
//А bind не вызывает функцию. Он только возвращает «обёртку», которую мы можем вызвать позже, и которая передаст вызов в исходную функцию, с привязанным контекстом.

//Привязать всё: bindAll
for (var prop in user) {
  if (typeof user[prop] == 'function') {
    user[prop] = user[prop].bind(user);
  }
}

//Карринг 
//или каррирование – термин функционального программирования, который означает создание новой функции путём фиксирования аргументов существующей.

function mul(a, b) {
  return a * b;
};
// double умножает только на два
var double = mul.bind(null, 2); // контекст фиксируем null, он не используется

alert( double(3) ); // = mul(2, 3) = 6
alert( double(4) ); // = mul(2, 4) = 8
alert( double(5) ); // = mul(2, 5) = 10

//Декоратор
//приём программирования, который позволяет взять существующую функцию и изменить/расширить ее поведение.

//eval 
//позволяет выполнить код, переданный ей в виде строки.
 eval(' alert(a) '); // 2

 //возвращает последнее вычисленное выражение, например:
 alert( eval('1+1') ); // 2

////////////////////////////////////////////////////////////////

/*#console*/

console.time(метка) // включить внутренний хронометр браузера с меткой.
console.timeEnd(метка) // выключить внутренний хронометр браузера с меткой и вывести результат.

////////////////////////////////////////////////////////////////

/*#тесты*/

/*Пример HTML-страницы для тестов:

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">

  <!-- подключаем стили Mocha, для отображения результатов -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/2.1.0/mocha.css">
  <!-- подключаем библиотеку Mocha -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/2.1.0/mocha.js"></script>
  <!-- настраиваем Mocha: предстоит BDD-тестирование -->
  <script>
    mocha.setup('bdd');
  </script>

  <!-- подключаем chai -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/2.0.0/chai.js"></script>
  <!-- в chai есть много всего, выносим assert в глобальную область -->
  <script>
    var assert = chai.assert;
  </script>
</head>

<body>

  <script>
    function pow(x, n) {
      // код функции, пока что пусто 
    }
  </script>

  <!-- в этом скрипте находятся спеки -->
  <script src="test.js"></script>

  <!-- в элементе с id="mocha" будут результаты тестов -->
  <div id="mocha"></div>

  <!-- запустить тесты! -->
  <script>
    mocha.run();
  </script>
</body>

</html>*/

//Исправление спецификации

//Первый вариант – добавить assert в тот же it:

describe("pow", function() {

  it("возводит в n-ю степень", function() {
    assert.equal(pow(2, 3), 8);
    assert.equal(pow(3, 4), 81);
  });

});
//Второй вариант – сделать два теста:

describe("pow", function() {

  it("при возведении 2 в 3ю степень результат 8", function() {
    assert.equal(pow(2, 3), 8);
  });

  it("при возведении 3 в 4ю степень равен 81", function() {
    assert.equal(pow(3, 4), 81);
  });

});

//Уточнение реализации
//Придётся написать нечто более реальное, чтобы тесты проходили:

function pow(x, n) {
  var result = 1;

  for (var i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
//Чтобы быть уверенными, что функция работает верно, желательно протестировать её на большем количестве значений. Вместо того, чтобы писать блоки it вручную, мы можем сгенерировать тесты в цикле for:

describe("pow", function() {

  function makeTest(x) {
    var expected = x * x * x;
    it("при возведении " + x + " в степень 3 результат: " + expected, function() {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (var x = 1; x <= 5; x++) {
    makeTest(x);
  }

});

//Вложенный describe
//Функция makeTest и цикл for, очевидно, нужны друг другу, но не нужны для других тестов, которые мы добавим в дальнейшем. Они образуют единую группу, задача которой – проверить возведение в n-ю степень.

//Будет правильно выделить их, при помощи вложенного блока describe:
describe("pow", function() {

  describe("возводит x в степень n", function() {

    function makeTest(x) {
      var expected = x * x * x;
      it("при возведении " + x + " в степень 3 результат: " + expected, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (var x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  // ... дальнейшие тесты it и подблоки describe ...
});

//before/after и beforeEach/afterEach
//В каждом блоке describe можно также задать функции before/after, которые будут выполнены до/после запуска тестов, а также beforeEach/afterEach, которые выполняются до/после каждого it.

//Например:

describe("Тест", function() {

  before(function() { alert("Начало тестов"); });
  after(function() { alert("Конец тестов"); });

  beforeEach(function() { alert("Вход в тест"); });
  afterEach(function() { alert("Выход из теста"); });

  it('тест 1', function() { alert('1'); });
  it('тест 2', function() { alert('2'); });

});

//Расширение спецификации

describe("pow", function() {

  // ...

  it("при возведении в отрицательную степень результат NaN", function() {
    assert(isNaN(pow(2, -1)));
  });

  it("при возведении в дробную степень результат NaN", function() {
    assert(isNaN(pow(2, 1.5)));
  });

});

/*самые востребованные assert-проверки, встроенные в Chai:

assert(value) – проверяет что value является true в логическом контексте.
assert.equal(value1, value2) – проверяет равенство value1 == value2.
assert.strictEqual(value1, value2) – проверяет строгое равенство value1 === value2.
assert.notEqual, assert.notStrictEqual – проверки, обратные двум предыдущим.
assert.isTrue(value) – проверяет, что value === true
assert.isFalse(value) – проверяет, что value === false*/

//Все вызовы assert позволяют дополнительным последним аргументом указать строку с описанием ошибки, которое выводится, если assert не проходит.

//Добавим описание ошибки в конец наших assert'ов:
describe("pow", function() {

  // ...

  it("при возведении в отрицательную степень результат NaN", function() {
    assert(isNaN(pow(2, -1)), "pow(2, -1) не NaN");
  });

  it("при возведении в дробную степень результат NaN", function() {
    assert(isNaN(pow(2, 1.5)), "pow(2, 1.5) не NaN");
  });

});

////////////////////////////////////////////////////////////////

/*#window*/

//Создать переменную
window.a = 5;
alert( a ); // 5

//window.onerror
//В браузере существует специальное свойство window.onerror, если в него записать функцию, то она выполнится и получит в аргументах сообщение ошибки, текущий URL и номер строки, откуда «выпала» ошибка.

window.onerror = function(message, url, lineNumber) {
    alert("Поймана ошибка, выпавшая в глобальную область!\n" +
      "Сообщение: " + message + "\n(" + url + ":" + lineNumber + ")");
  };

  function readData() {
    error(); // ой, что-то не так
  }

  readData();

////////////////////////////////////////////////////////////////

/*#JSON*/

//Метод JSON.parse
JSON.parse // читает объекты из строки в формате JSON.
//превратит строку с данными в формате JSON в JavaScript-объект/массив/значение.
var numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
alert( numbers[1] ); // 1

//Для интеллектуального восстановления из строки у JSON.parse(str, reviver) есть второй параметр reviver, который является функцией function(key, value).
var str = '{"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}';
var event = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});
alert( event.date.getDate() ); // теперь сработает!

//метод JSON.stringify
JSON.stringify(value, replacer, space);
JSON.stringify // превращает объекты в строку в формате JSON, используется, когда нужно из JavaScript передать данные по сети.

var event = {
  title: "Конференция",
  date: "сегодня"
};

var str = JSON.stringify(event);
alert( str ); // {"title":"Конференция","date":"сегодня"}

//Во втором параметре JSON.stringify(value, replacer) можно указать массив свойств, которые подлежат сериализации.
var user = {
  name: "Вася",
  age: 25,
  window: window
};

alert( JSON.stringify(user, ["name", "age"]) );
// {"name":"Вася","age":25}

var user = {
  name: "Вася",
  age: 25,
  window: window
};

var str = JSON.stringify(user, function(key, value) {
  if (key == 'window') return undefined;
  return value;
});

alert( str ); // {"name":"Вася","age":25}

//В методе JSON.stringify(value, replacer, space) есть ещё третий параметр space.
//Если он является числом – то уровни вложенности в JSON оформляются указанным количеством пробелов, если строкой – вставляется эта строка.
var user = {
  name: "Вася",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

var str = JSON.stringify(user, "", 4);

alert( str );
/* Результат -- красиво сериализованный объект:
{
    "name": "Вася",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/

////////////////////////////////////////////////////////////////

/*#таймеры*/

//setTimeout
var timerId = setTimeout(func / code, delay[, arg1, arg2...])
/*Параметры:

func/code
Функция или строка кода для исполнения. Строка поддерживается для совместимости, использовать её не рекомендуется.
delay
Задержка в миллисекундах, 1000 миллисекунд равны 1 секунде.
arg1, arg2…
Аргументы, которые нужно передать функции.*/
function func() {
  alert( 'Привет' );
}

setTimeout(func, 1000);
setTimeout(func, 1000, "Привет", "Вася"); // Привет, Вася

//Отмена исполнения clearTimeout
var timerId = setTimeout(...);
clearTimeout(timerId);

//setInterval
var timerId = setInterval(func / code, delay[, arg1, arg2...])
// регулярно повторяет  через указанный интервал времени

// начать повторы с интервалом 2 сек
var timerId = setInterval(function() {
  alert( "тик" );
}, 2000);

// через 5 сек остановить повторы
setTimeout(function() {
  clearInterval(timerId);
  alert( 'стоп' );
}, 5000);

//Рекурсивный setTimeout

var timerId = setTimeout(function tick() {
  alert( "тик" );
  timerId = setTimeout(tick, 2000);
}, 2000);
//Рекурсивный setTimeout – более гибкий метод тайминга, чем setInterval, так как время до следующего выполнения можно запланировать по-разному, в зависимости от результатов текущего.

////////////////////////////////////////////////////////////////

/*#перехват ошибок*/
try {

  alert('Начало блока try');  // (1) <--

  lalala; // ошибка, переменная не определена!

  alert('Конец блока try');  // (2)

} catch(e) {

  alert('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack); // (3) <--

}

alert("Потом код продолжит выполнение...");

/*name
Тип ошибки. Например, при обращении к несуществующей переменной: "ReferenceError".
message
Текстовое сообщение о деталях ошибки.
stack
Везде, кроме IE8-, есть также свойство stack, которое содержит строку с информацией о последовательности вызовов, которая привела к ошибке.*/

//Генерация своих ошибок
try {

  var user = JSON.parse(data); // <-- выполнится без ошибок

  if (!user.name) {
    throw new SyntaxError("Данные некорректны");
  }

  alert( user.name );

} catch (e) {
 if (e.name == "SyntaxError") {
    alert( "Извините, в данных ошибка" );
  } else {
    throw e;
  }
}

//В JavaScript встроен ряд конструкторов для стандартных ошибок: SyntaxError, ReferenceError, RangeError и некоторые другие.

//Оборачивание исключений
function ReadError(message, cause) {
  this.message = message;
  this.cause = cause;
  this.name = 'ReadError';
  this.stack = cause.stack;
}

function readData() {
  var data = '{ bad data }';

  try {
    // ...
    JSON.parse(data);
    // ...
  } catch (e) {
    // ...
    if (e.name == 'URIError') {
      throw new ReadError("Ошибка в URI", e);
    } else if (e.name == 'SyntaxError') {
      throw new ReadError("Синтаксическая ошибка в данных", e);
    } else {
      throw e; // пробрасываем
    }
  }
}

try {
  readData();
} catch (e) {
  if (e.name == 'ReadError') {
    alert( e.message );
    alert( e.cause ); // оригинальная ошибка-причина
  } else {
    throw e;
  }
}

//Секция finally
//не обязательна, но если она есть, то она выполняется всегда:
try {
  alert( 'try' );
  if (confirm('Сгенерировать ошибку?')) BAD_CODE();
} catch (e) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}