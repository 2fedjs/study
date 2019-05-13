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

/*#------------Создание------------*/
//Создает объект Date с текущей датой и временем:
var now = new Date();
alert( now );

// 24 часа после 01.01.1970 GMT+0
var Jan02_1970 = new Date(3600 * 24 * 1000);
alert( Jan02_1970 )
gfg = 6;

new Date(datestring)
//Если единственный аргумент – строка, используется вызов Date.parse для чтения даты из неё.

new Date(2011, 0, 1, 0, 0, 0, 0); // // 1 января 2011, 00:00:00
new Date(2011, 0, 1); // то же самое, часы/секунды по умолчанию равны 0

/*#------------Методы------------*/
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

 Date.now() //возвращает дату сразу в виде миллисекунд. Технически, он аналогичен вызову +new Date(), но в отличие от него не создаёт промежуточный объект даты, а поэтому – во много раз быстрее.

 //Date.parse

var msUTC = Date.parse('2012-01-26T13:51:50.417Z'); // зона UTC

alert( msUTC ); // 1327571510417 (число миллисекунд)

//С таймзоной -07:00 GMT:

 var ms = Date.parse('2012-01-26T13:51:50.417-07:00');

alert( ms ); // 1327611110417 (число миллисекунд)

performance.now() //Возвращает количество миллисекунд, прошедшее с начала загрузки страницы

/*#------------Установка компонентов даты------------*/

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

/*#------------Автоисправление------------*/
var d = new Date(2013, 0, 32); // 32 января 2013 ?!?
alert(d); // ... это 1 февраля 2013!

var d = new Date(2011, 1, 28);
d.setDate(d.getDate() + 2);

alert( d ); // 2 марта, 2011

//получим дату на 70 секунд большую текущей:

 var d = new Date();
d.setSeconds(d.getSeconds() + 70);

alert( d ); // выведет корректную дату

/*#------------Преобразование к числу------------*/
alert(+new Date) // +date то же самое, что: +date.valueOf()

//даты можно вычитать, результат вычитания объектов Date – их временная разница, в миллисекундах.
var start = new Date; // засекли время

// что-то сделать
for (var i = 0; i < 100000; i++) {
  var doSomething = i * i * i;
}

var end = new Date; // конец измерения

alert( "Цикл занял " + (end - start) + " ms" );

/*#------------Форматирование и вывод дат------------*/

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

let sym = Symbol(); //служит для создания уникальных идентификаторов.
alert( typeof sym ); // symbol

//преобразование типов

alert( '2' > 1 ); // true, сравнивается как 2 > 1
alert( '01' == 1 ); // true, сравнивается как 1 == 1
alert( false == 0 ); // true, false становится числом 0
alert( true == 1 ); // true, так как true становится числом 1.

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
/*Сравнения (1) и (2) дают false потому, что undefined при преобразовании к числу даёт NaN. А значение NaN по стандарту устроено так, что сравнения ==, <, >, <=, >= и даже === с ним возвращают false.
Проверка равенства (3) даёт false, потому что в стандарте явно прописано, что undefined равно лишь null или себе и ничему другому.*/

/*#------------Строковое преобразование------------*/
var a = true;
alert( a ); // "true"

String(null)

/*#------------Численное преобразование------------*/

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



/*#------------Логическое преобразование------------*/


//Значение  Преобразуется в...
undefined, null     false
//Числа Все true, кроме 0, NaN -- false.
//Строки  Все true, кроме пустой строки "" -- false
//Объекты Всегда true

//Для явного преобразования

!!value 
Boolean(value)

////////////////////////////////////////////////////////////////

/*#символ*/

//Для чтения (или создания, при отсутствии) «глобального» символа служит вызов

/*#------------создание символа в реестре------------*/
let name = Symbol.for("name");

// символ уже есть, чтение из реестра
alert( Symbol.for("name") == name ); // true

/*#------------keyFor------------*/
Symbol.keyFor(sym) //позволяет получить по глобальному символу его имя:
// создание символа в реестре
let test = Symbol.for("name");

// получение имени символа
alert( Symbol.keyFor(test) ); // name

/*#------------Особенность------------*/

//Особенность символов в том, что если в объект записать свойство-символ, то оно не участвует в итерации
let user = {
  name: "Вася",
  age: 30,
  [Symbol.for("isAdmin")]: true
};

// в цикле for..in также не будет символа
alert( Object.keys(user) ); // name, age

// доступ к свойству через глобальный символ — работает
alert( user[Symbol.for("isAdmin")] );

//свойство-символ недоступно, если обратиться к его названию: user.isAdmin не существует.

Symbol.toPrimitive // идентификатор для свойства, задающего функцию преобразования объекта в примитив.
Symbol.iterator // идентификатор для свойства, задающего функцию итерации по объекту.

//Пример

let s = Symbol("id");
user[s] = 123;

////////////////////////////////////////////////////////////////

/*#коллекции*/

/*#------------Map------------*/
//Map – коллекция для хранения записей вида ключ:значение.
//В отличие от объектов, в которых ключами могут быть только строки, в Map ключом может быть произвольное значение, например:

let map = new Map();

map.set('1', 'str1');   // ключ-строка
map.set(1, 'num1');     // число
map.set(true, 'bool1'); // булевое значение

alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

//В качестве ключей map можно использовать и объекты:
let user = { name: "Вася" };

// для каждого пользователя будем хранить количество посещений
let visitsCountMap = new Map();

// объект user является ключом в visitsCountMap
visitsCountMap.set(user, 123);

alert( visitsCountMap.get(user) ); // 123

map.delete(key) удаляет запись с ключом key, возвращает true, если такая запись была, иначе false.
map.clear() – удаляет все записи, очищает map.
map.has(key) – возвращает true, если ключ есть, иначе false.
map.keys() – возвращает итерируемый объект для ключей,
map.values() – возвращает итерируемый объект для значений,
map.entries() – возвращает итерируемый объект для записей [ключ, значение], он используется по умолчанию в for..of.
//у Map есть стандартный метод forEach, аналогичный встроенному в массивы:

let recipeMap = new Map([
  ['огурцов',   '500 гр'],
  ['помидоров', '350 гр'],
  ['сметаны',   '50 гр']
]);

// цикл по ключам
for(let fruit of recipeMap.keys()) {
  alert(fruit); // огурцов, помидоров, сметаны
}

// цикл по значениям
for(let amount of recipeMap.values()) {
  alert(amount); // 500 гр, 350 гр, 50 гр
}

// цикл по записям [ключ,значение]
for(let entry of recipeMap) { // то же что и recipeMap.entries()
  alert(entry); // огурцов,500 гр , и т.д., массивы по 2 значения

/*#------------Set------------*/
//Set – коллекция для хранения множества значений, причём каждое значение может встречаться лишь один раз.

let set = new Set();

let vasya = {name: "Вася"};
let petya = {name: "Петя"};
let dasha = {name: "Даша"};

// посещения, некоторые пользователи заходят много раз
set.add(vasya);
set.add(petya);
set.add(dasha);
set.add(vasya);
set.add(petya);

// set сохраняет только уникальные значения
alert( set.size ); // 3

set.forEach( user => alert(user.name ) ); // Вася, Петя, Даша

set.add(item) // добавляет в коллекцию item, возвращает set (чейнится).
set.delete(item) // удаляет item из коллекции, возвращает true, если он там был, иначе false.
set.has(item) // возвращает true, если item есть в коллекции, иначе false.
set.clear() // очищает set.

//Перебор Set осуществляется через forEach или for..of аналогично Map:

 'use strict';

let set = new Set(["апельсины", "яблоки", "бананы"]);

// то же, что: for(let value of set)
set.forEach((value, valueAgain, set) => {
  alert(value); // апельсины, затем яблоки, затем бананы
});

//WeakMap и WeakSet
//WeakSet – особый вид Set, не препятствующий сборщику мусора удалять свои элементы. То же самое – WeakMap для Map.
//То есть, если некий объект присутствует только в WeakSet/WeakMap – он удаляется из памяти.
//Если поместить такие данные в WeakMap, а объект сделать ключом, то они будут автоматически удалены из памяти, когда удалится элемент.
// текущие активные пользователи
let activeUsers = [
  {name: "Вася"},
  {name: "Петя"},
  {name: "Маша"}
];

// вспомогательная информация о них,
// которая напрямую не входит в объект юзера,
// и потому хранится отдельно
let weakMap = new WeakMap();

weakMap.set(activeUsers[0], 1);
weakMap.set(activeUsers[1], 2);
weakMap.set(activeUsers[2], 3);
weakMap.set('Katya', 4); //Будет ошибка TypeError: "Katya" is not a non-null object

alert( weakMap.get(activeUsers[0]) ); // 1

activeUsers.splice(0, 1); // Вася более не активный пользователь

// weakMap теперь содержит только 2 элемента

activeUsers.splice(0, 1); // Петя более не активный пользователь

// weakMap теперь содержит только 1 элемент
//Таким образом, WeakMap избавляет нас от необходимости вручную удалять вспомогательные данные, когда удалён основной объект.

/*У WeakMap есть ряд ограничений:

Только объекты в качестве ключей.
Нет свойства size.
Нельзя перебрать элементы итератором или forEach.
Нет метода clear().*/

////////////////////////////////////////////////////////////////

/*#строки*/

alert( "Привет, мир!".length ); // 12
alert( hello.toUpperCase() ); // "ПРИВЕТ, МИР!"
alert( "Интерфейс" [0].toLowerCase() ); // 'и'

var str = "jQuery";
alert( str.charAt(0) ); // "j"

var str = "Я - современный браузер!";
alert( str[0] ); // "Я"

.replace(“x”,”y”) // заменяет по первому вхождению в строке

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

/*#------------Специальные символы------------*/
/*Специальные символы
Символ  Описание
\b      Backspace
\f      Form feed
\n      New line
\r      Carriage return
\t      Tab
\uNNNN  Символ в кодировке Юникод с шестнадцатеричным кодом `NNNN`. Например, `\u00A9` -- юникодное представление символа копирайт ©*/

/*#------------Строки-шаблоны------------*/
//В таких кавычках разрешён перевод строки.
alert(`моя
  многострочная
  строка`);

//Можно вставлять выражения при помощи ${…}.
alert(`${apples} + ${oranges} = ${apples + oranges}`); // 2 + 3 = 5

//Функции шаблонизации
function f(strings, ...values) {
  alert(JSON.stringify(strings));     // ["Sum of "," + "," =\n ","!"]
  alert(JSON.stringify(strings.raw)); // ["Sum of "," + "," =\\n ","!"]
  alert(JSON.stringify(values));      // [3,5,8]
}
let apples = 3;
let oranges = 5;
//          |  s[0] | v[0] |s[1]| v[1]  |s[2]  |      v[2]      |s[3]
let str = f`Sum of ${apples} + ${oranges} =\n ${apples + oranges}!`;

/*#------------метод raw------------*/
//В нём находятся строки в точности как в оригинале. Это влияет на спец-символы, например в strings символ \n – это перевод строки, а в strings.raw – это именно два символа \n.
//В отличие от strings, в strings.raw содержатся участки строки в «изначально введённом» виде.
//То есть, если в строке находится \n или \u1234 или другое особое сочетание символов, то оно таким и останется.

// один символ с "длинным" (более 2 байт) unicode-кодом
alert( '𝒳'.codePointAt(0) ); // 119987

//корректно создаёт строку из «длинного кода», в отличие от старого String.fromCharCode(code).
alert( String.fromCodePoint(119987) ); // 𝒳

str.includes(s) // проверяет, включает ли одна строка в себя другую, возвращает true/false.
str.endsWith(s) // возвращает true, если строка str заканчивается подстрокой s.
str.startsWith(s) // возвращает true, если строка str начинается со строки s.
str.repeat(times) // повторяет строку str times раз.

Var name = ´${first} ${first}´ // интерполяция переменных

////////////////////////////////////////////////////////////////

/*#числа*/

//Округляет число num до n знаков после запятой
alert( n.toFixed(2) ); // "12.35"
alert( n.toFixed(0) ); // "12"
alert( n.toFixed(5) ); // "12.34500"

n.toExponential(4); //5.0000е+3 для перевод к экспонтенциальной формы с количеством цифр после запятой
n.toPrecision(8); //5000.0000 для задания точности


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

/*#------------Создание Объекты------------*/
o = new Object(); // (1)
o = {}; // пустые фигурные скобки (2)

//создаёт новый объект с указанными объектом прототипа и свойствами.
Object.create(Shape.prototype);

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

/*#------------Конструктор------------*/
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

/*#------------Прототип proto------------*/
var animal = {
  eats: true
};
var rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;

// в rabbit можно найти оба свойства
alert( rabbit.jumps ); // true
alert( rabbit.eats ); // true

/*#------------Метод hasOwnProperty------------*/
//Вызов obj.hasOwnProperty(prop) возвращает true, если свойство prop принадлежит самому объекту obj, иначе false.
var animal = {
  eats: true
};

var rabbit = {
  jumps: true,
  __proto__: animal
};

alert( rabbit.hasOwnProperty('jumps') ); // true: jumps принадлежит rabbit

alert( rabbit.hasOwnProperty('eats') ); // false: eats не принадлежит

//перебрать свойства самого объекта
for (var key in rabbit) {
  if (!rabbit.hasOwnProperty(key)) continue; // пропустить "не свои" свойства
  alert( key + " = " + rabbit[key] ); // выводит только "jumps"
}

//Object.create(null)
var data = Object.create(null);
//не имеет прототипа, а значит в нём нет лишних свойств

//Чтение: 
Object.getPrototypeOf(obj)
//Запись: 
Object.setPrototypeOf(obj, proto)

/*#------------prototype------------*/
//При создании объекта через new, в его прототип __proto__ записывается ссылка из prototype функции-конструктора.
//Свойство prototype имеет смысл только у конструктора
//Свойство с именем prototype можно указать на любом объекте, но особый смысл оно имеет, лишь если назначено функции-конструктору.
//Само по себе, без вызова оператора new, оно вообще ничего не делает, его единственное назначение – указывать __proto__ для новых объектов.

/*#------------Свойство constructor------------*/
function Rabbit() {}

Rabbit.prototype = {
  constructor: Rabbit
};
//ровно такой же – генерируется автоматически.

function Rabbit(name) {
  this.name = name;
  alert( name );
}

var rabbit = new Rabbit("Кроль");
var rabbit2 = new rabbit.constructor("Крольчиха");

//Эта возможность бывает полезна, когда, получив объект, мы не знаем в точности, какой у него был конструктор (например, сделан вне нашего кода), а нужно создать такой же.

// при перезаписи гарантировать наличие constructor вручную:
Rabbit.prototype = {
  jumps: true,
  constructor: Rabbit
};

//Наследование в наших классах
Rabbit.prototype.__proto__ = Animal.prototype;

// в IE10- задаём наследование
Rabbit.prototype = Object.create(Animal.prototype); //присваивается сразу после объявления конструктора, иначе он перезатрёт уже записанные в прототип методы.
Rabbit.prototype.constructor = Rabbit;

//Вызов конструктора родителя
function Rabbit(name) {
  Animal.apply(this, arguments);
}

//Расширить метод родителя
 Rabbit.prototype.run = function() {
   // вызвать метод родителя, передав ему текущие аргументы
   Animal.prototype.run.apply(this, arguments);
   this.jump();
 }

/*#------------instanceof------------*/
//возвращает true, если объект принадлежит классу Constructor или классу, наследующему от него.
alert( rabbit instanceof Rabbit ); // true, верно

/*#------------Деструктуризация------------*/

let {var1, var2} = {var1: …, var2: …};

//Если хочется присвоить свойство объекта в переменную с другим именем
let options = {
  title: "Меню",
  width: 100,
  height: 200
};

let {width: w, height: h, title} = options;

//значение по умолчанию

let {width=100, height=200, title} = options;

//Можно и сочетать одновременно двоеточие и равенство:

let {width:w=100, height:h=200, title} = options;

//планируется в будущем стандарте

let {title, ...size} = options;

//Вложенные деструктуризации
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Пончик", "Пирожное"]
}
let { title="Меню", size: {width, height}, items: [item1, item2] } = options;

/*#------------Вычисляемые свойства------------*/
let propName = "firstName";
let user = {
  [propName]: "Вася"
};

let a = "Мой ";
let b = "Зелёный ";
let c = "Крокодил";
let user = {
  [(a + b + c).toLowerCase()]: "Гена"
};

/*#------------Object.assign------------*/
//получает список объектов и копирует в первый target свойства из остальных.
//При этом последующие свойства перезаписывают предыдущие.

let user = { name: "Вася" };
let visitor = { isAdmin: false, visits: true };
let admin = { isAdmin: true };
Object.assign(user, visitor, admin);
// user <- visitor <- admin
alert( JSON.stringify(user) ); // name: Вася, visits: true, isAdmin: true

//для 1-уровневого клонирования объекта:
let user = { name: "Вася", isAdmin: false };
// clone = пустой объект + все свойства user
let clone = Object.assign({}, user);

/*#------------Object.is------------*/
//Новая функция для проверки равенства значений.
alert( Object.is(+0, -0)); // false
alert( +0 === -0 );        // true

// Сравнение с NaN
alert( Object.is(NaN, NaN) ); // true
alert( NaN === NaN );         // false

/*#------------Методы объекта------------*/
let name = "Вася";
let user = {
  name,
  // вместо "sayHi: function() {...}" пишем "sayHi() {...}"
  sayHi() {
    alert(this.name);
  }
};

/*#------------super------------*/
//Вызов super.parentProperty позволяет из метода объекта получить свойство его прототипа.
let animal = {
  walk() {
    alert("I'm walking");
  }
};

let rabbit = {
  __proto__: animal,
  walk() {
    alert(super.walk); // walk() { … }
    super.walk(); // I'm walking
  }
};

rabbit.walk();
//super работает только внутри методов.

/*#классы*/

class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}
// нельзя вызывать без new, будет ошибка.
// видно только в текущем блоке и только в коде, который находится ниже объявления (Function Declaration видно и до объявления).

/*#------------Class Expression------------*/

let User = class {
  sayHi() { alert('Привет!'); }
};

new User().sayHi();

//Статические свойства
// свойства непосредственно User, то есть доступные из него «через точку».
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static createGuest() {
    return new User("Гость", "Сайта");
  }
}
alert( User.createGuest ); // createGuest ... (функция)

//Наследование
class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    alert("I walk: " + this.name);
  }
}

class Rabbit extends Animal {
  walk() {
    super.walk();
    alert("...and jump!");
  }
}

new Rabbit("Вася").walk();
// I walk: Вася
// and jump!

//Если у потомка свой constructor, то, чтобы в нём вызвать конструктор родителя – используется синтаксис super() с аргументами для родителя.

class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    alert("I walk: " + this.name);
  }
}
class Rabbit extends Animal {
  constructor() {
    // вызвать конструктор Animal с аргументом "Кроль"
    super("Кроль"); // то же, что и Animal.call(this, "Кроль")
  }
}
new Rabbit().walk(); // I walk: Кроль

 //До вызова super не существует this,
 class Rabbit extends Animal {
  constructor() {
    alert(this); // ошибка, this не определён!
    // обязаны вызвать super() до обращения к this
    super();
    // а вот здесь уже можно использовать this
  }
} 

/*#------------Дескрипторы в примерах------------*/
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

/*#------------Свойство-функция------------*/
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

Reflect.owmKeys(user) //возвращает в том числе символы

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

/*#------------Итераторы------------*/

let arr = [1, 2, 3]; // массив — пример итерируемого объекта

//прерывается break-ом
for (let value of arr) {
  alert(value); // 1, затем 2, затем 3
}

for (let char of "Привет") {
  alert(char); // Выведет по одной букве: П, р, и, в, е, т
}

//Свой итератор
let range = {
  from: 1,
  to: 5
};

range[Symbol.iterator] = function() {

  let current = this.from;
  let last = this.to;

  // метод должен вернуть объект с методом next()
  return {
    next() {
      if (current <= last) {
        return {
          done: false,
          value: current++
        };
      } else {
        return {
          done: true
        };
      }
    }
  }
};

for (let num of range) {
  alert(num); // 1, затем 2, 3, 4, 5
}

//Встроенные итераторы
//Встроенные в JavaScript итераторы можно получить и явным образом, без for..of, прямым вызовом Symbol.iterator.

//Например, этот код получает итератор для строки и вызывает его полностью «вручную»:

 'use strict';

let str = "Hello";

// Делает то же, что и
// for (var letter of str) alert(letter);

let iterator = str[Symbol.iterator]();

while(true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // Выведет все буквы по очереди
}

////////////////////////////////////////////////////////////////

/*#proxy*/

//особый объект, смысл которого – перехватывать обращения к другому объекту и, при необходимости, модифицировать их.

let proxy = new Proxy(target, handler)
/*target – объект, обращения к которому надо перехватывать.
handler – объект с «ловушками»: функциями-перехватчиками для операций к target.*/

/*#------------get/set------------*/

/*get(target, property, receiver)
Срабатывает при чтении свойства из прокси. Аргументы:
target – целевой объект, тот же который был передан первым аргументом в new Proxy.
property – имя свойства.
receiver – объект, к которому было применено присваивание. Обычно сам прокси, либо прототипно наследующий от него. Этот аргумент используется редко.
set(target, property, value, receiver)
Срабатывает при записи свойства в прокси.

Аргументы:

target – целевой объект, тот же который был передан первым аргументом в new Proxy.

property – имя свойства.

value – значение свойства.

receiver – объект, к которому было применено присваивание, обычно сам прокси, либо прототипно наследующий от него.

Метод set должен вернуть true, если присвоение успешно обработано и false в случае ошибки (приведёт к генерации TypeError).

Пример с выводом всех операций чтения и записи:*/

'use strict';

let user = {};

let proxy = new Proxy(user, {
  get(target, prop) {
    alert(`Чтение ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    alert(`Запись ${prop} ${value}`);
    target[prop] = value;
    return true;
  }
});

proxy.firstName = "Ilya"; // запись

proxy.firstName; // чтение

alert(user.firstName); // Ilya

/*#------------has------------*/
//Ловушка has срабатывает в операторе in и некоторых других случаях, когда проверяется наличие свойства.
let dictionary = {
  'Hello': 'Привет'
};

dictionary = new Proxy(dictionary, {
  has(target, phrase) {
    return true;
  }
});

alert("BlaBlaBla" in dictionary); // true

/*#------------deleteProperty------------*/
//Ловушка deleteProperty по синтаксису аналогична get/has.
//Срабатывает при операции delete, должна вернуть true, если удаление было успешным.

let dictionary = {
  'Hello': 'Привет'
};

let proxy = new Proxy(dictionary, {
  deleteProperty(target, phrase) {
    return true; // ничего не делаем, но возвращает true
  }
});

// не удалит свойство
delete proxy['Hello'];

alert("Hello" in dictionary); // true

// будет то же самое, что и выше
// так как нет ловушки has, операция in сработает на исходном объекте
alert("Hello" in proxy); // true

//apply
/*Если аргумент target прокси – функция, то становится доступна ловушка apply для её вызова.

Метод apply(target, thisArgument, argumentsList) получает:

target – исходный объект.
thisArgument – контекст this вызова.
argumentsList – аргументы вызова в виде массива.
Она может обработать вызов сама и/или передать его функции.*/

'use strict';

function sum(a, b) {
  return a + b;
}

let proxy = new Proxy(sum, {
  // передаст вызов в target, предварительно сообщив о нём
  apply: function(target, thisArg, argumentsList) {
    alert(`Буду вычислять сумму: ${argumentsList}`);
    return target.apply(thisArg, argumentsList);
  }
});

// Выведет сначала сообщение из прокси,
// а затем уже сумму
alert( proxy(1, 2) );

/*#------------construct------------*/
//Ловушка construct(target, argumentsList) перехватывает вызовы при помощи new.
function User(name, surname) {
  this.name = name;
  this.surname = surname;
}

let UserProxy = new Proxy(User, {
  // передаст вызов new User, предварительно сообщив о нём
  construct: function(target, argumentsList) {
    alert(`Запуск new с аргументами: ${argumentsList}`);
    return new target(...argumentsList);
  }
});

let user = new UserProxy("Ilya", "Kantor");

alert( user.name ); // Ilya

/*#------------Другие методы------------*/
/*getPrototypeOf – перехватывает обращение к методу getPrototypeOf.
setPrototypeOf – перехватывает обращение к методу setPrototypeOf.
isExtensible – перехватывает обращение к методу isExtensible.
preventExtensions – перехватывает обращение к методу preventExtensions.
getOwnPropertyDescriptor – перехватывает обращение к методу getOwnPropertyDescriptor.
defineProperty – перехватывает обращение к методу defineProperty.
has – перехватывает проверку существования свойства, которая используется в операторе in и в некоторых других методах встроенных объектов.
get – перехватывает чтение свойства.
set – перехватывает запись свойства.
deleteProperty – перехватывает удаление свойства оператором delete.
enumerate – срабатывает при вызове for..in или for..of, возвращает итератор для свойств объекта.
ownKeys – перехватывает обращения к методу getOwnPropertyNames.
apply – перехватывает вызовы target().
construct – перехватывает вызовы new target().
Каждый перехватчик запускается с handler в качестве this. Это означает, что handler кроме ловушек может содержать и другие полезные свойства и методы.

Каждый перехватчик получает в аргументах target и дополнительные параметры в зависимости от типа.

Если перехватчик в handler не указан, то операция совершается, как если бы была вызвана прямо на target.*/

////////////////////////////////////////////////////////////////

/*#массивы*/

/*#------------Создание------------*/
//Существует еще один синтаксис для создания массива:
var arr = new Array("Яблоко", "Груша", "и т.п.");

//Операции с массивами также оптимизируются, особенно если массив хранит только один тип данных, например только числа. Порождаемый набор инструкций для процессора получается очень эффективным.

/*#------------Метод pop------------*/
var fruits = ["Яблоко", "Апельсин", "Груша"];
alert( fruits.pop() ); // удалили "Груша"
alert( fruits ); // Яблоко, Апельсин

/*#------------Метод push------------*/
var fruits = ["Яблоко", "Апельсин"];
fruits.push("Груша"); //могут добавлять сразу по несколько элементов: fruits.push("Апельсин", "Персик");
alert( fruits ); // Яблоко, Апельсин, Груша

/*#------------Метод shift------------*/
var fruits = ["Яблоко", "Апельсин", "Груша"];
alert( fruits.shift() ); // удалили Яблоко
alert( fruits ); // Апельсин, Груша

/*#------------Метод unshift------------*/
var fruits = ["Апельсин", "Груша"];
fruits.unshift('Яблоко');//могут добавлять сразу по несколько элементов: fruits.unshift("Ананас", "Лимон");
alert( fruits ); // Яблоко, Апельсин, Груша

/*#------------Метод split------------*/
//превратить строку в массив
var names = 'Маша, Петя, Марина, Василий';
var arr = names.split(', ');
//необязательный второй аргумент – ограничение на количество элементов в массиве
alert( "a,b,c,d".split(',', 2) ); // a,b

var str = "тест";
alert( str.split('') ); // т,е,с,т

/*#------------Метод join------------*/
// массив склеить в строку
var arr = ['Маша', 'Петя', 'Марина', 'Василий'];
var str = arr.join(';');
alert( str ); // Маша;Петя;Марина;Василий
//Код для повторения строки 3 раза:
 alert( new Array(4).join("ля") ); // ляляля

/*#------------Метод splice------------*/
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

/*#------------Метод slice------------*/
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

/*#------------Метод sort------------*/
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

/*#------------Метод reverse------------*/
//изменяет массив 
var arr = [1, 2, 3];
arr.reverse();
alert( arr ); // 3,2,1

/*#------------Метод concat------------*/
//создаёт новый массив, в который копируются элементы из arr, а также value1, value2, ... valueN

var arr = [1, 2];
var newArr = arr.concat(3, 4);
alert( newArr ); // 1,2,3,4

/*#------------Метод indexOf------------*/
//Метод «arr.indexOf(searchElement[, fromIndex])» возвращает номер элемента searchElement в массиве arr или -1, если его нет.
var arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

/*#------------Метод lastIndexOf------------*/
//Метод «arr.lastIndexOf(searchElement[, fromIndex])» ищет справа-налево: с конца массива или с номера fromIndex, если он указан.

/*#------------Метод forEach------------*/
//для каждого элемента массива вызывает функцию callback.
arr.forEach(function(item, i, arr) {
  alert( i + ": " + item + " (массив:" + arr + ")" );
});
//Второй, необязательный аргумент forEach позволяет указать контекст this

/*#------------Метод filter------------*/
//используется для фильтрации массива через функцию. создаёт новый массив
var arr = [1, -1, 2, -2, 3];
var positiveArr = arr.filter(function(number) {
  return number > 0;
});
alert( positiveArr ); // 1,2,3

/*#------------Метод map------------*/
//используется для трансформации массива. создаёт новый массив
var names = ['HTML', 'CSS', 'JavaScript'];
var nameLengths = names.map(function(name) {
  return name.length;
});
// получили массив с длинами
alert( nameLengths ); // 4,3,10

names.map(name => name.toUpperCase);

/*#------------Метод every------------*/
//возвращает true, если вызов callback вернёт true для каждого элемента arr
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

/*#------------Метод some------------*/
//возвращает true, если вызов callback вернёт true для какого-нибудь элемента arr.
function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true

/*#------------Метод reduce------------*/
//применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению.
var a = ['h','e','l','l','o',]; 
var as = a.reduce((sum,elem)=>sum+elem);

/*Аргументы функции callback(previousValue, currentItem, index, arr):

previousValue – последний результат вызова функции, он же «промежуточный результат».
currentItem – текущий элемент массива, элементы перебираются по очереди слева-направо.
index – номер текущего элемента.
arr – обрабатываемый массив.*/

/*#------------Метод reduceRight------------*/
//сворачивает все элементы справа налево в одно значение
var a = ['h','e','l','l','o',]; 
var as = a.reduceRight((sum,elem)=>sum+elem,0); //ноль для работы с пустыми массивами

/*#------------Метод from------------*/

Array.from() //создаёт новый экземпляр Array из массивоподобного или итерируемого объекта.
Array.from(arrayLike[, mapFn[, thisArg]])

/*arrayLike
Массивоподобный или итерируемый объект, преобразуемый в массив.
mapFn
Необязательный параметр. Отображающая функция, вызываемая для каждого элемента массива.
thisArg
Необязательный параметр. Значение, используемое в качестве this при выполнении функции map*/

//Массив из строки String
Array.from('foo'); 
// ['f', 'o', 'o']

//Массив из Set
var s = new Set(['foo', window]); 
Array.from(s); 
// ['foo', window]

//Массив из Map
var m = new Map([[1, 2], [2, 4], [4, 8]]); 
Array.from(m); 
// [[1, 2], [2, 4], [4, 8]]


//Массив из массивоподобного объекта (arguments)
function f() {
  return Array.from(arguments);
}

f(1, 2, 3); 
// [1, 2, 3]

// Использование стрелочной функции в качестве функции отображения для

// манипулирования элементами
Array.from([1, 2, 3], x => x + x); 
// [2, 4, 6] 

// Генерирования последовательности чисел
Array.from({ length: 5 }, (v, k) => k); 
// [0, 1, 2, 3, 4]

/*#------------Псевдомассив аргументов "arguments"------------*/
function sayHi() {
  for (var i = 0; i < arguments.length; i++) {
    alert( "Привет, " + arguments[i] );
  }
}

sayHi("Винни", "Пятачок"); // 'Привет, Винни', 'Привет, Пятачок'

/*#------------Метод Array.isArray()------------*/
alert( Array.isArray([1,2,3]) ); // true
alert( Array.isArray("not array")); // false

/*#------------деструктуризация------------*/

'use strict';
let [firstName, lastName] = ["Илья", "Кантор"];
alert(firstName); // Илья
alert(lastName);  // Кантор

/*#------------Оператор «spread»------------*/

'use strict';
let [firstName, lastName, ...rest] = "Юлий Цезарь Император Рима".split(" ");
alert(firstName); // Юлий
alert(lastName);  // Цезарь
alert(rest);      // Император,Рима (массив из 2х элементов)

//Значения по умолчанию
let [firstName="Гость", lastName="Анонимный"] = [];

// lastName получит значение, соответствующее текущей дате:
let [firstName, lastName=defaultLastName()] = ["Вася"];

[...arr] // превращает объкты iterable в массивы

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

/*#------------приоритет------------*/

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

/*#------------switch------------*/

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

//Группировка case:
case 3:
case 5:
 alert('Неверно!');
alert('Немного ошиблись, бывает.'); 
break;


/*#------------Оператор instanceof------------*/
//позволяет проверить, создан ли объект данной функцией
function User() {}
var user = new User();
alert( user instanceof User ); // true

////////////////////////////////////////////////////////////////

/*#побитовые операции*/

/*#------------операции------------*/
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

/*#------------& (Побитовое И)------------*/
/*a b a & b
0 0   0
0 1   0
1 0   0
1 1   1*/

/*#------------& (Побитовое И)------------*/
/*a b a | b
0 0   0
0 1   1
1 0   1
1 1   1*/

/*#------------^ (Исключающее ИЛИ)------------*/
/*a b a ^ b
0 0   0
0 1   1
1 0   1
1 1   0*/

/*#------------~ (Побитовое НЕ)------------*/

 9 //(по осн. 10)
  = 00000000000000000000000000001001 //(по осн. 2)
             //  --------------------------------
~9 //(по осн. 10)
  = 11111111111111111111111111110110 //(по осн. 2)
  = -10 //(по осн. 10)
//Из-за внутреннего представления отрицательных чисел получается так, что ~n == -(n+1).
alert( ~3 ); // -4
alert( ~-1 ); // 0

/*#------------<< (Битовый сдвиг влево)------------*/

9 //(по осн.10)
  = 00000000000000000000000000001001 //(по осн.2)
               //   --------------------------------
9 << 2 //(по осн.10)
  = 00000000000000000000000000100100 //(по осн.2)
  = 36 //(по осн.10)

  //побитовые операторы работают только с 32-битными числами

  alert(10000000000 << 1); // -1474836480, отброшен крайний-левый бит
  alert(10000000000 * 2); // 20000000000, обычное умножение

/*#------------>> (Правый битовый сдвиг, переносящий знак)------------*/

9 //(по осн.10)
  = 00000000000000000000000000001001 //(по осн.2)
          //       --------------------------------
9 >> 2 //(по осн.10)
  = 00000000000000000000000000000010 //(по осн.2)
  = 2 //(по осн.10)

/*#------------>>> (Правый сдвиг с заполнением нулями)------------*/
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

/*#------------Прерывание цикла: break------------*/

var sum = 0;
while (true) {
  var value = +prompt("Введите число", '');
  if (!value) break; // (*)
  sum += value;
}
alert( 'Сумма: ' + sum );

/*#------------Следующая итерация: continue------------*/

/*Директива continue прекращает выполнение текущей итерации цикла.
Она – в некотором роде «младшая сестра» директивы break: прерывает не весь цикл, а только текущее выполнение его тела, как будто оно закончилось.
Её используют, если понятно, что на текущем повторе цикла делать больше нечего.*/
//Например, цикл ниже использует continue, чтобы не выводить чётные значения:

for (var i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
  alert(i);
}

/*#------------Метки для break/continue------------*/

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

// создавать функцию полностью «на лету» из строки, вот так:
var sum = new Function('a,b', ' return a+b; ');

/*#------------Встроенные функции------------*/
var years = prompt('Сколько вам лет?', 100);
//Вызов prompt возвращает то, что ввёл посетитель – строку или специальное значение null, если ввод отменён.

var isAdmin = confirm("Вы - администратор?");
//Результатом будет true при нажатии OK и false – при CANCEL(Esc).

valueOf // возвращает примитивное значение указанного объекта.

/*#------------Function Expression------------*/

var sayHi = function(person) {
  alert( "Привет, " + person );
};

sayHi('Вася');

/*#------------Function Declaration------------*/

function sum(a, b) {
  return a + b;
}

//функции, объявленные как Function Declaration, создаются интерпретатором до выполнения кода.


/*#------------Named Function Expression------------*/
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

/*#------------[[Scope]]------------*/

//При создании функция получает скрытое свойство [[Scope]], которое ссылается на лексическое окружение, в котором она была создана.
sayHi.[[Scope]] = window
//При создании функции с использованием new Function, её свойство [[Scope]] ссылается не на текущий LexicalEnvironment, а на window.

/*#------------Свойства функции------------*/
function f() {}

f.test = 5;
alert( f.test );

/*Свойства функции не стоит путать с переменными и параметрами. Они совершенно никак не связаны. Переменные доступны только внутри функции, они создаются в процессе её выполнения. Это – использование функции «как функции».
А свойство у функции – доступно отовсюду и всегда. Это – использование функции «как объекта».
Если хочется привязать значение к функции, то можно им воспользоваться вместо внешних переменных.*/

/*#------------модули------------*/
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

/*#------------Метод call------------*/
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

/*#------------Метод apply------------*/
func.apply(context, [arg1, arg2]);

/*#------------Метод bind------------*/
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

/*#------------Карринг------------*/
//или каррирование – термин функционального программирования, который означает создание новой функции путём фиксирования аргументов существующей.

function mul(a, b) {
  return a * b;
};
// double умножает только на два
var double = mul.bind(null, 2); // контекст фиксируем null, он не используется

alert( double(3) ); // = mul(2, 3) = 6
alert( double(4) ); // = mul(2, 4) = 8
alert( double(5) ); // = mul(2, 5) = 10

/*#------------Декоратор------------*/
//приём программирования, который позволяет взять существующую функцию и изменить/расширить ее поведение.

/*#------------eval------------*/
//позволяет выполнить код, переданный ей в виде строки.
 eval(' alert(a) '); // 2

 //возвращает последнее вычисленное выражение, например:
 alert( eval('1+1') ); // 2

 //Параметры по умолчанию
 function showMenu(title = "Без заголовка", width = 100, height = 200) {
  alert(title + ' ' + width + ' ' + height);
}

//Параметры по умолчанию могут быть не только значениями, но и выражениями.
function sayHi(who = getCurrentUser().toUpperCase()) {
  alert('Привет, ' + who);
}

/*#------------Оператор spread------------*/
function showName(firstName, lastName, ...rest) {
  alert(firstName + ' ' + lastName + ' - ' + rest);
}
//В rest попадёт массив всех аргументов, начиная с третьего.
//rest – настоящий массив, с методами map, forEach и другими, в отличие от arguments.

/*#------------Деструктуризация в параметрах------------*/
function showMenu({title, width, height}) {
  alert(title + ' ' + width + ' ' + height); // Меню 100 200
}

function showMenu({title="Заголовок", width:w=100, height:h=200}) {
  alert(title + ' ' + w + ' ' + h);
}

//чтобы функция могла быть вызвана вообще без аргументов 
function showMenu({title="Заголовок", width:w=100, height:h=200} = {}) {
  alert(title + ' ' + w + ' ' + h);
}

/*#------------Имя «name»------------*/
//В свойстве name у функции находится её имя.

function f() {} // f.name == "f"

/*#------------стрелочные функции------------*/
let inc = x => x+1;
let sum = (a,b) => a + b;

////////////////////////////////////////////////////////////////

/*#Promise*/
//Promise – это специальный объект, который содержит своё состояние. Вначале pending («ожидание»), затем – одно из: fulfilled («выполнено успешно») или rejected («выполнено с ошибкой»).

function successCallback(result) {
  console.log("It succeeded with " + result);
}

function failureCallback(error) {
  console.log("It failed with " + error);
}

function doSomething() {
  return new Promise((resolve, reject) => {
    console.log("It is done.");
    // Succeed half of the time.
    if (Math.random() > .5) {
      resolve("SUCCESS")
    } else {
      reject("FAILURE")
    }
  })
}

const promise = doSomething(); 
promise.then(successCallback, failureCallback); //или doSomething().then(successCallback, failureCallback);

var promise = new Promise(function(resolve, reject) {
  // Эта функция будет вызвана автоматически

  // В ней можно делать любые асинхронные операции,
  // А когда они завершатся — нужно вызвать одно из:
  // resolve(результат) при успешном выполнении
  // reject(ошибка) при ошибке
})

//Универсальный метод для навешивания обработчиков:

promise.then(onFulfilled, onRejected)

//onFulfilled – функция, которая будет вызвана с результатом при resolve.
//onRejected – функция, которая будет вызвана с ошибкой при reject.

//Для того, чтобы поставить обработчик только на ошибку, вместо .then(null, onRejected) можно написать .catch(onRejected) – это то же самое.

//Если в функции промиса происходит синхронный throw (или иная ошибка), то вызывается reject:

 'use strict';

let p = new Promise((resolve, reject) => {
  // то же что reject(new Error("o_O"))
  throw new Error("o_O");
})

p.catch(alert); // Error: o_O

/*Пример с setTimeout
Возьмём setTimeout в качестве асинхронной операции, которая должна через некоторое время успешно завершиться с результатом «result»:*/

 'use strict';

// Создаётся объект promise
let promise = new Promise((resolve, reject) => {

  setTimeout(() => {
    // переведёт промис в состояние fulfilled с результатом "result"
    resolve("result");
  }, 1000);

});

// promise.then навешивает обработчики на успешный результат или ошибку
promise
  .then(
    result => {
      // первая функция-обработчик - запустится при вызове resolve
      alert("Fulfilled: " + result); // result - аргумент resolve
    },
    error => {
      // вторая функция - запустится при вызове reject
      alert("Rejected: " + error); // error - аргумент reject
    }
  );

/*#------------Цепочки промисов------------*/
// сделать запрос
httpGet('/article/promise/user.json')
  // 1. Получить данные о пользователе в JSON и передать дальше
  .then(response => {
    console.log(response);
    let user = JSON.parse(response);
    return user;
  })
  // 2. Получить информацию с github
  .then(user => {
    console.log(user);
    return httpGet(`https://api.github.com/users/${user.name}`);
  })
  // 3. Вывести аватар на 3 секунды (можно с анимацией)
  .then(githubUser => {
    console.log(githubUser);
    githubUser = JSON.parse(githubUser);

    let img = new Image();
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.appendChild(img);

    setTimeout(() => img.remove(), 3000); // (*)
  });

/*#------------Перехват ошибок------------*/
//Чтобы поймать всевозможные ошибки, которые возникнут при загрузке и обработке данных, добавим catch в конец нашей цепочки:
httpGet('/page-not-exists')
  .then(response => JSON.parse(response))
  .then(user => httpGet(`https://api.github.com/users/${user.name}`))
  .then(githubUser => {
    githubUser = JSON.parse(githubUser);

    let img = new Image();
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.appendChild(img);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        img.remove();
        resolve();
      }, 3000);
    });
  })
  .catch(error => {
    alert(error); // Error: Not Found
  });

/*#------------Внутренние свойства------------*/

/*  Согласно стандарту, у объекта new Promise(executor) при создании есть четыре внутренних свойства:

PromiseState – состояние, вначале «pending».
PromiseResult – результат, при создании значения нет.
PromiseFulfillReactions – список функций-обработчиков успешного выполнения.
PromiseRejectReactions – список функций-обработчиков ошибки.*/

/*#------------Promise.all------------*/

//Promise.all(iterable)
//получает массив (или другой итерируемый объект) промисов и возвращает промис, который ждёт, пока все переданные промисы завершатся, и переходит в состояние «выполнено» с массивом их результатов.

Promise.all([
  httpGet('/article/promise/user.json'),
  httpGet('/article/promise/guest.json')
]).then(results => {
  alert(results);
});


let urls = [
  '/article/promise/user.json',
  '/article/promise/guest.json'
];
Promise.all( urls.map(httpGet) )
  .then(results => {
    alert(results);
  });

/*#------------Promise.race------------*/

//Promise.race(iterable)
// как и Promise.all, получает итерируемый объект с промисами, которые нужно выполнить, и возвращает новый промис.
Promise.race([
  httpGet('/article/promise/user.json'),
  httpGet('/article/promise/guest.json')
]).then(firstResult => {
  firstResult = JSON.parse(firstResult);
  alert( firstResult.name ); // iliakan или guest, смотря что загрузится раньше
});

/*#------------Promise.resolve------------*/

//Promise.resolve(value)
/*создаёт успешно выполнившийся промис с результатом value.

Он аналогичен конструкции:*/

new Promise((resolve) => resolve(value))

//используют, когда хотят построить асинхронную цепочку, и начальный результат уже есть.

 Promise.resolve(window.location) // начать с этого значения
  .then(httpGet) // вызвать для него httpGet
  .then(alert) // и вывести результат

/*#------------Promise.reject------------*/

//Promise.reject(error)
//создаёт уже выполнившийся промис, но не с успешным результатом, а с ошибкой error.

 Promise.reject(new Error("..."))
  .catch(alert) // Error: ...

////////////////////////////////////////////////////////////////

/*#генераторы*/

//новый вид функций в современном JavaScript. Они отличаются от обычных тем, что могут приостанавливать своё выполнение, возвращать промежуточный результат и далее возобновлять его позже, в произвольный момент времени.

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
//код такой функции не выполняется. Вместо этого она возвращает специальный объект, который как раз и называют «генератором».

//next()
//При вызове он возобновляет выполнение кода до ближайшего ключевого слова yield. По достижении yield выполнение приостанавливается, а значение – возвращается во внешний код:
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
let generator = generateSequence();
let one = generator.next();
alert(JSON.stringify(one)); // {value: 1, done: false}

/*#------------Композиция генераторов------------*/
function* generateSequence(start, end) {

  for (let i = start; i <= end; i++) {
    yield i;
  }

}

// Используем оператор … для преобразования итерируемого объекта в массив
let sequence = [...generateSequence(2,5)];

alert(sequence); // 2, 3, 4, 5



function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generateAlphaNum() {

  // 0..9
  yield* generateSequence(48, 57);

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);

}

let str = '';

for(let code of generateAlphaNum()) {
  str += String.fromCharCode(code);
}

alert(str); // 0..9A..Za..z

////////////////////////////////////////////////////////////////

/*#модули*/

/*#------------export------------*/

/*Ключевое слово export можно ставить:

перед объявлением переменных, функций и классов.
отдельно, при этом в фигурных скобках указывается, что именно экспортируется.*/

export let one = 1;

let two = 2;

export {two};

export {one as once, two as twice};

export class User {
  constructor(name) {
    this.name = name;
  }
};

export function sayHi() {
  alert("Hello!");
};
////////////

function hello(who) {
  return "Let me introduce: " + who;
}

export hello;

/*#------------import------------*/

import {one, two} from "./nums";
//"./nums" – модуль, как правило это путь к файлу модуля.
//one, two – импортируемые переменные, которые должны быть обозначены в nums словом export.

import hello from "bar";
////////////
var hungry = "hippo";

function awesome() {
  console.log(
    hello( hungry ).toUpperCase()
  );
}

export awesome;

/*#------------Модули------------*/
module foo from "foo";
module bar from "bar";

console.log(
  bar.hello( "rhino" )
); // Let me introduce: rhino

foo.awesome(); // LET ME INTRODUCE: HIPPO

////////////////////////////////////////////////////////////////

/*#console*/

console.time(метка) // включить внутренний хронометр браузера с меткой.
console.timeEnd(метка) // выключить внутренний хронометр браузера с меткой и вывести результат.

console.dir([1,2,3]) //для доступа к свойствам

//Последний элемент, выбранный во вкладке Elements, доступен в консоли как $0, предыдущий – $1 и так далее.

$0.style.backgroundColor = 'red';
$$("div.my") // ищет все элементы в DOM по данному CSS-селектору.
$("div.my") // ищет первый элемент в DOM по данному CSS-селектору.

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

/*#------------Исправление спецификации------------*/

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

/*#------------Уточнение реализации------------*/

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

/*#------------Вложенный describe------------*/

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

/*#------------before/after и beforeEach/afterEach------------*/

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

/*#------------Расширение спецификации------------*/

describe("pow", function() {

  // ...

  it("при возведении в отрицательную степень результат NaN", function() {
    assert(isNaN(pow(2, -1)));
  });

  it("при возведении в дробную степень результат NaN", function() {
    assert(isNaN(pow(2, 1.5)));
  });

});

/*#------------самые востребованные assert-проверки, встроенные в Chai:------------*/
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

window.innerWidth/innerHeight // хранят текущий размер окна браузера. игнорируют наличие полосы прокрутки.

alert( 'Текущая прокрутка сверху: ' + window.pageYOffset );
alert( 'Текущая прокрутка слева: ' + window.pageXOffset );
 window.scrollBy(x,y)   //прокручивает страницу относительно текущих координат.
 window.scrollTo(pageX,pageY). // прокручивает страницу к указанным координатам относительно документа.

 alert( "Браузер находится на " + window.screenX + "," + window.screenY );

element.scrollIntoView(true); //вызывается на элементе и прокручивает страницу так, чтобы элемент оказался вверху, если параметр top равен true, и внизу, если top равен false. Причем, если параметр top не указан, то он считается равным true.

//Метод для открытия нового окна
// открыть новое окно/вкладку с URL http://ya.ru 
window.open('http://ya.ru');
window.open(‘about:blank’,’’,’width=300, height=300’) // открыть с параметрами
var w = window.open(‘about:blank’,’’,’width=300, height=300’) - ссылка на открытое

 w.focus //передать фокус окну
w.blur() // убрать фокус с окна
w.closed // вернет булево
w.close // закрыть окно
.moveTo(200,300)
.moveBy(200,300)
.resizeTo(200,300)
.resizeBy(200,300)



 window.onload = function() {
    alert( 'Документ и все ресурсы загружены' );
  };
//срабатывает, когда загружается вся страница, включая ресурсы на ней

//Если посетитель инициировал переход на другую страницу или нажал «закрыть окно», то обработчик onbeforeunload может приостановить процесс и спросить подтверждение.
 window.onbeforeunload = function() {
    alert( 'Документ и все ресурсы загружены' );
  };

  //Когда человек уходит со страницы или закрывает окно
 window.onunload = function() {
    alert( 'Документ и все ресурсы загружены' );
  };

/*#------------Создать переменную------------*/

window.a = 5;
alert( a ); // 5

/*#------------window.onerror------------*/

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

/*#------------Метод JSON.parse------------*/

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

/*#------------метод JSON.stringify------------*/

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

//Обработка ошибок

throw new Error(‘Unknown direction ’ + direction + ‘. Valid directions are between 0..’ + NAMES.length) // выведет в консоль новое сформированное сообщение об ошибке

//Обработка исключений

try{  
console.log(JSON.parse(xhr.responseText))   
}
catch (err){      // если ошибка произошла
  console.error(err.message); 
}
//Создается объект err
err.name //имя ошибки

//JSONP - способ отправки callback через запрос | JSON with Padding (с набивкой) | способ загрузки данных из JS, который вызывает заранее определенную функцию.

//Создается элемент скрипт и вставляется на страницу с вызовом функций.

function addScript(src) {
  var elem = document.createElement("script");
  elem.src = src;
  document.head.appendChild(elem);
}

addScript('user?id=123');

//Пример работы с двумя файлами

//Файл data.js
window.__jsonpCallback([
{“name”: “object 1”},
{“name”: “object 2”},
{“name”: “object 3”}
])

//Файл main.js
var renderItem = function (item){
var dataDiv = document.createElement(‘div’);
datadiv.textContent = item.name;
document.body.appendChild(dataDiv);
}

window.__jsonpCallback = function(data) {
  for(var i = 0; i < data.length; i++){
    renderItem(data[i]);
}
}

var loader = document.createElement(‘script’);
loader.src=’data.js’;
document.body.append(loader);



////////////////////////////////////////////////////////////////

/*#таймеры*/

/*#------------setTimeout------------*/

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

/*#------------setInterval------------*/

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

/*#------------Рекурсивный setTimeout------------*/

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

/*#------------Генерация своих ошибок------------*/

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

/*#------------Оборачивание исключений------------*/

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

////////////////////////////////////////////////////////////////

/*#document*/

document.open() //открывает поток документа
document.write('<span> </span>'); //Пишет строку в поток документа, открытый с помощью document.open().
//работает только пока HTML-страница находится в процессе загрузки
//дописывает текст в текущее место HTML ещё до того, как браузер построит из него DOM.
.close() // закрыть поток

document.writeln(str)  //добавляет после str символ перевода строки "\n".

document.documentURI //возвращает строку с текущим адресом документа.

document.links // выбрать все ссылки
document.images
document.forms


////////////////////////////////////////////////////////////////

/*#nodes*/

var textElem = document.createTextNode('Тут был я'); //Создает новый *текстовый* узел с данным текстом:

// Всевозможные значения nodeType
  const unsigned short ELEMENT_NODE = 1;
  const unsigned short ATTRIBUTE_NODE = 2;
  const unsigned short TEXT_NODE = 3;
  const unsigned short CDATA_SECTION_NODE = 4;
  const unsigned short ENTITY_REFERENCE_NODE = 5;
  const unsigned short ENTITY_NODE = 6;
  const unsigned short PROCESSING_INSTRUCTION_NODE = 7;
  const unsigned short COMMENT_NODE = 8;
  const unsigned short DOCUMENT_NODE = 9;
  const unsigned short DOCUMENT_TYPE_NODE = 10;
  const unsigned short DOCUMENT_FRAGMENT_NODE = 11;
  const unsigned short NOTATION_NODE = 12;

  if (childNodes[i].nodeType != 1) continue;

/*#------------Навигация------------*/

//Список детей – только для чтения!
document.body.childNodes //Псевдо-массив childNodes хранит все дочерние элементы, включая текстовые.

//Свойства firstChild и lastChild обеспечивают быстрый доступ к первому и последнему элементу.
elem.childNodes[0] === elem.firstChild
elem.childNodes[elem.childNodes.length - 1] === elem.lastChild

alert( document.documentElement.parentNode ); // document

alert( document.body.nodeName ); // BODY

document.head.previousSibling
div.nextSibling
list.firstChild

/*#------------Содержимое------------*/

alert( document.body.childNodes[i].data ); //Содержимое других узлов, например, текстовых или комментариев, доступно на чтение и запись через свойство data.

value = node.nodeValue; //возвращает или устанавливает значение текущего узла.

/*#------------работа с DOM------------*/

 var div2 = div.cloneNode(true); //создаст «глубокую» копию элемента – вместе с атрибутами, включая подэлементы. Если же вызвать с аргументом false, то копия будет сделана без дочерних элементов. Это нужно гораздо реже.

 node.append(...nodes) // вставляет nodes в конец node,
node.prepend(...nodes) // вставляет nodes в начало node,
node.after(...nodes) // вставляет nodes после узла node,
node.before(...nodes) // вставляет nodes перед узлом node,
node.replaceWith(...nodes) // вставляет nodes вместо node.

////////////////////////////////////////////////////////////////

/*#Element*/

var div = document.createElement('div'); //Создание элемента

/*#------------Навигация------------*/

document.body // возвращает элемент body
document.head
document.documentElement //получить узел HTML

alert( document.body.tagName ); // BODY

alert( document.documentElement.parentElement ); // null

elem.children // только дочерние узлы-элементы, то есть соответствующие тегам.
elem.firstElementChild, elem.lastElementChild // соответственно, первый и последний дети-элементы.
elem.previousElementSibling, nextElementSibling // соседи-элементы.
elem.parentElement // родитель-элемент.
var elCount = Node.childElementCount; //возвращает число дочерних элементов узла.

//Если элементу назначен специальный атрибут id, то можно получить его прямо по переменной с именем из значения id.

/*<div id="content-holder">
  <div id="content">Элемент</div>
</div>

<script>
  alert( content ); // DOM-элемент
  alert( window['content-holder'] ); // в имени дефис, поэтому через [...]
</script>*/

var elem = document.getElementById('content'); //возвращает элемеент по id

var elements = document.getElementsByTagName('div'); //ищет все элементы с заданным тегом tag внутри элемента elem и возвращает их в виде списка.

//в отличие от getElementById, который существует только в контексте document, метод getElementsByTagName может искать внутри любого элемента.

// получить все элементы документа
document.getElementsByTagName('*');

// получить всех потомков элемента elem:
elem.getElementsByTagName('*');

var elems = document.getElementsByName('age'); //позволяет получить все элементы с данным атрибутом name.

var articles = document.getElementsByClassName('article'); //возвращает коллекцию элементов с классом className

//Результаты поиска getElementsBy* – живые! При изменении документа – изменяется и результат запроса. результат запросов getElementsBy* – это не массив, а специальный объект, имеющий тип NodeList или HTMLCollection. Он похож на массив, так как имеет нумерованные элементы и длину, но внутри это не готовая коллекция, а «живой поисковой запрос».

var elements = document.querySelectorAll('ul > li:last-child'); //возвращает все элементы внутри elem, удовлетворяющие CSS-селектору css.

var elements = document.querySelector('ul'); //возвращает не все, а только первый элемент, соответствующий CSS-селектору css.

//ничего не ищет, а проверяет, удовлетворяет ли elem селектору css. Он возвращает true либо false.
if (elems[i].matches('a[href$="zip"]')) {
      alert( "Ссылка на архив: " + elems[i].href );
    }

 alert(numberSpan.closest('li').className) // ищет ближайший элемент выше по иерархии DOM, подходящий под CSS-селектор css. Сам элемент тоже включается в поиск.
 

parent.contains(child);  //Возвращает true, если parent содержит child или parent == child.

var result = nodeA.compareDocumentPosition(nodeB); //предоставляет одновременно информацию и о содержании и об относительном порядке элементов.

/*Возвращаемое значение – битовая маска (см. Побитовые операторы), биты в которой означают следующее:

Биты  Число Значение
000000  0   nodeA и nodeB -- один и тот же узел
000001  1   Узлы в разных документах (или один из них не в документе)
000010  2   nodeB предшествует nodeA (в порядке обхода документа)
000100  4   nodeA предшествует nodeB
001000  8   nodeB содержит nodeA
010000  16  nodeA содержит nodeB
100000  32  Зарезервировано для браузера
*/
//Понятие «предшествует» – означает не только «предыдущий сосед при общем родителе», но и имеет более общий смысл: "раньше встречается в порядке прямого обхода дерева документа.

  // 1. <ul> находится после <p>
  alert( ul.compareDocumentPosition(p) ); // 2 = 10

  // 2. <p> находится до <ul>
  alert( p.compareDocumentPosition(ul) ); // 4 = 100

  // 3. <ul> родитель <li>
  alert( ul.compareDocumentPosition(li) ); // 20 = 10100

  // 4. <ul> потомок <body>
  alert( ul.compareDocumentPosition(document.body) ); // 10 = 1010
/*Узлы не вложены один в другой, поэтому стоит только бит «предшествования», отсюда 10.
То же самое, но обратный порядок узлов, поэтому 100.
Здесь стоят сразу два бита: 10100 означает, что ul одновременно содержит li и является его предшественником, то есть при прямом обходе дерева документа сначала встречается ul, а потом li.
Аналогично предыдущему, 1010 означает, что document.body содержит ul и предшествует ему.*/
//Проверить конкретное условие, например, "nodeA содержит nodeB", можно при помощи битовых операций, в данном случае: 
nodeA.compareDocumentPosition(nodeB) & 16

//TABLE
table.rows // коллекция строк TR таблицы.
table.caption/tHead/tFoot // ссылки на элементы таблицы CAPTION, THEAD, TFOOT.
table.tBodies // коллекция элементов таблицы TBODY, по спецификации их может быть несколько.

//THEAD/TFOOT/TBODY
tbody.rows // коллекция строк TR секции.

//TR
tr.cells // коллекция ячеек TD/TH
tr.sectionRowIndex // номер строки в текущей секции THEAD/TBODY
tr.rowIndex // номер строки в таблице

//TD/TH
td.cellIndex // номер ячейки в строке

/*#------------Содержимое------------*/

link.innerText = 'grapes'; //это свойство, позволяющее задавать или получать текстовое содержимое элемента и его потомков.

//textContent получает содержимое всех элементов, включая <script> и <style>, тогда как innerText этого не делает. innerText умеет считывать стили и не возвращает содержимое скрытых элементов, тогда как textContent этого не делает. Метод innerText позволяет получить CSS, а textContent — нет.


alert( document.body.innerHTML ); //позволяет получить HTML-содержимое элемента в виде строки
 document.body.innerHTML = 'Новый BODY!'; // заменяем содержимое

 chatDiv.innerHTML += "<div>Привет<img src='smile.gif'/> !</div>"; //осуществляет перезапись

  alert( div.outerHTML ); //содержит HTML элемента целиком. <div>Привет <b>Мир</b></div>

   alert( news.textContent );  //содержит только текст внутри элемента, за вычетом всех <тегов>.
  document.body.children[1].textContent = name;
   //возвращает конкатенацию всех текстовых узлов внутри elem



/*#------------Стили------------*/

document.body.style // возвращает объект, который дает доступ к стилю элемента на чтение и запись.
document.body.style.background = 'red'; 
element.style.width="100px"
elem.style.backgroundColor
elem.style.zIndex
elem.style.borderLeftWidth
elem.style.cssFloat
button.style.MozBorderRadius = '5px';
button.style.WebkitBorderRadius = '5px';

elem.style.width="" //сбросить поставленный стиль

elem.style.display = "none"

document.body.style.overflow = "hidden".

var computedStyle = getComputedStyle(document.body); //Для того, чтобы получить текущее используемое значение свойства
var result = getComputedStyle(h3, ':after').content;
var result = getComputedStyle(h3, ':after').getPropertyValue('color');

 div.style.cssText="color: red !important; \
    background-color: yellow; \
    width: 100px; \
    text-align: center; \
    blabla: 5; \
  ";

lastDiv.hidden = true; //предусмотрен специальный атрибут и свойство для отображения элементов

  message.style.left = coords.left + "px";
  message.style.top = coords.bottom + "px";

/*Как узнать, какие свойства есть у данного типа элементов?

Это просто. Нужно либо посмотреть список элементов HTML5 и найти в нём интересующий вас элемент и прочитать секцию с interface.*/

//внешние размеры
elem.offsetParent, //находится ссылка на родительский элемент в смысле отображения на странице.
elem.offsetLeft/Top //задают смещение относительно offsetParent.
elem.offsetWidth //содержат «внешнюю» ширину/высоту элемента, то есть его полный размер, включая рамки border.
elem.offsetHeight

elem.clientTop/Left //ширина левой/правой рамки

elem.clientWidth/Height // размер элемента внутри рамок border.
//Свойства clientWidth/Height для элемента document.documentElement – это как раз ширина/высота видимой области окна.


elem.scrollWidth/Height //свойства clientWidth/clientHeight относятся только к видимой области элемента, а scrollWidth/scrollHeight добавляют к ней прокрученную (которую не видно) по горизонтали/вертикали.
documentElement.scrollWidth/scrollHeight //полный размер страницы с учётом прокрутки

elem.scrollLeft/scrollTop //ширина/высота невидимой, прокрученной в данный момент, части элемента слева и сверху.
//можно изменять

elem.scrollIntoView(top) // вызывается на элементе и прокручивает страницу так, чтобы элемент оказался вверху, если параметр top равен true, и внизу, если top равен false. Причем, если параметр top не указан, то он считается равным true.

elem.getBoundingClientRect() //возвращает координаты элемента, под которыми понимаются размеры «воображаемого прямоугольника», который охватывает весь элемент.
/*Координаты возвращаются в виде объекта со свойствами:

top – Y-координата верхней границы элемента,
left – X-координата левой границы,
right – X-координата правой границы,
bottom – Y-координата нижней границы.*/
//Координаты относительно окна не учитывают прокрутку, они высчитываются от границ текущей видимой области.

  var rects = elt.getClientRects(); // возвращает коллекцию DOMRectобъектов , которые указывают ограничивающие прямоугольники для каждого пограничного поле CSS в клиенте.

var elem = document.elementFromPoint(x, y); //Возвращает элемент, который находится на координатах (x, y) относительно окна.

/*#------------атрибуты------------*/

  alert( input.type ); // "text"
  alert( input.id ); // "elem"
  alert( input.value ); // значение
input.checked // false <-- может быть только true/false
input.checked = true; // поставить галочку (при этом атрибут в элементе не появится)

   alert( 'свойство:' + a.href );  // полный URL
//не тоже самое, что
alert( 'атрибут:' + a.getAttribute('href') ); // '/'

  elem.hasAttribute(name) // проверяет наличие атрибута
elem.getAttribute(name) // получает значение атрибута
elem.setAttribute(name, value) // устанавливает атрибут
elem.removeAttribute(name) // удаляет атрибут

elem.attributes //получить псевдо-массив всех атрибутов элемента
input.toggleAttribute("readonly"); //Метод Element интерфейса переключает логический атрибут (удаление его , если он присутствует , и добавление его , если его нет) на данном элементе.
// имена атрибутов нечувствительны к регистру.

// прочитать класс элемента
    alert( document.body.className ); // main page

    // поменять класс элемента
    document.body.className = "class1 class2";

elem.classList.contains("class") // возвращает true/false, в зависимости от того, есть ли у элемента класс class.
elem.classList.add/remove("class") // добавляет/удаляет класс class
elem.classList.toggle("class") // если класса class нет, добавляет его, если есть – удаляет.

//к таким атрибутам можно обратиться не только как к атрибутам, но и как к свойствам, при помощи специального свойства dataset:
/*<div id="elem" data-about="Elephant" data-user-location="street">
  По улице прошёлся слон. Весьма красив и толст был он.
</div>
<script>
  alert( elem.dataset.about ); // Elephant
  alert( elem.dataset.userLocation ); // street
</script>*/

/*#------------работа с DOM------------*/

list.appendChild(newLi); //Добавляет newLi в конец дочерних элементов list.
list.insertBefore(newLi, list.children[1]); //Вставляет newLi в коллекцию детей list, перед элементом list.children[1].

//Все методы вставки возвращают вставленный узел.

//Удаляет elem из списка детей parentElem.
parentElem.removeChild(elem)

//удаляет elem и вставляет на его место newElem.
parentElem.replaceChild(newElem, elem)

elem.remove()

li5.insertAdjacentHTML("beforeBegin", "<li>3</li><li>4</li>"); //
li5.insertAdjacentHTML("afterBegin", "<li>3</li><li>4</li>"); // внутрь elem, в самое начало.
li5.insertAdjacentHTML("beforeEnd", "<li>3</li><li>4</li>"); // внутрь elem, в конец.
li5.insertAdjacentHTML("afterEnd", "<li>3</li><li>4</li>"); // после elem.

elem.insertAdjacentElement(where, newElem) // вставляет в произвольное место не строку HTML, а элемент newElem.
elem.insertAdjacentText(where, text) // создаёт текстовый узел из строки text и вставляет его в указанное место относительно elem.

var fragment = document.createDocumentFragment(); //чтобы вставить пачку узлов единовременно
fragment.appendChild(node);
fragment.cloneNode(true); // клонирование с подэлементами
//когда DocumentFragment вставляется в DOM – то он исчезает, а вместо него вставляются его дети. 
ul.appendChild(fragment) // фрагмент растворится, и в DOM вставятся именно LI, причём в том же порядке, в котором были во фрагменте.

////////////////////////////////////////////////////////////////

/*#navigator*/

navigator.userAgent //содержит информацию о браузере
navigator.platform //содержит информацию о платформе, позволяет различать Windows/Linux/Mac

////////////////////////////////////////////////////////////////

/*#location*/

alert( location.href ); // выведет текущий адрес

Location.username; //содержащий имя пользователя, указанное перед именем домена.
Location.toString() //содержащий URL целиком.
Location.search //содержащий '?' с последующими параметрами URL.
Location.hash //содержащий '#' с последующим идентификатором.
Location.host //содержащий хост, а именно имя хоста, ':' и порт.
Location.hostname //содержащий домен текущего URL.
Location.href //содержащий URL целиком. При изменении, соответствующий документ переходит на новую страницу.
Location.origin //содержащий протокол, хост и порт текущего URL.
Location.password //содержащий пароль, указанный перед именем домена.
Location.pathname //содержащий первый '/' после хоста с последующим текстом URL.
Location.port //содержащий номер порта текущего URL.
Location.protocol // содержащий протокол текущего URL, включая ':'.
// Перезагрузить текущую страницу, без использования кэша 
document.location.reload(true);
/*перезагружает ресурс из текущего URL
Единственный опциональный параметр Boolean, при значении true указывает, что страница должна быть перезагружена с сервера. Иначе браузер может загрузить страницу из кэша. Кроме того флаг forcedReload также может влиять на поведение скролла: обычная перезагрузка старается восстановить позицию, в то время как при включенном флаге при завершении загрузки DOM устанавливается scrollTop == 0.*/



// Перейти на статью Location.reload, заменив текущую страницу 
document.location.replace('https://developer.mozilla.org/en-US/docs/Web/API/Location.reload'); 
//заменяет текущий ресурс на новый по URL, указанному в качестве параметра. Отличие от assign() в том, что при использовании replace() текущая страница не будет сохранена в History, и пользователь не сможет использовать кнопку назад, чтобы вернуться к ней.

// Перейти на статью Location.reload 
document.location.assign('https://developer.mozilla.org/en-US/docs/Web/API/Location.reload');
//запускает загрузку и отображение нового документа по указанному URL.

////////////////////////////////////////////////////////////////

/*#screen*/

// общая ширина/высота
alert( screen.width + ' x ' + screen.height );

// доступная ширина/высота (за вычетом таскбара и т.п.)
alert( screen.availWidth + ' x ' + screen.availHeight );

screen.availTop
screen.availLeft
screen.colorDepth


////////////////////////////////////////////////////////////////

/*#события*/

window.onscroll 

window.onload = function() {
    alert( 'Документ и все ресурсы загружены' );
  };

  window.onunload //Когда человек уходит со страницы или закрывает окно, на window срабатывает событие unload

window.onbeforeunload = function() {
  return "Данные не сохранены. Точно перейти?";
};


/*События документа:

DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен.
load – браузер загрузил все ресурсы.
beforeunload/unload – уход со страницы.*/

document.addEventListener("DOMContentLoaded", ready);

//удаление события

function handler() {
  alert( 'Спасибо!' );
}

input.removeEventListener("click", handler);

/*Клавиатурные события:

keydown – когда посетитель нажимает клавишу
keyup – когда посетитель отпускает клавишу*/

// event.type должен быть keypress
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


window.addEventListener(“keydown”, function(evt) {
  if(evt.keyCode === 27){
    // код ...
}
})


/*События на элементах управления:

submit – посетитель отправил форму <form>
focus – посетитель фокусируется на элементе, например нажимает на <input>*/


//использование атрибутов

//<input value="Нажми меня" onclick="alert('Клик!')" type="button">
//<input type="button" onclick="countRabbits()" value="Считать кроликов!"/>
//<input type="text" onfocus="this.value = 'Фокус!'" value="Кликни меня">
//<input onkeydown="this.nextSibling.innerHTML = event.keyCode"> <b></b>
//<input onkeypress="this.nextSibling.innerHTML = getChar(event)+''"><b></b>

/*

События CSS:

transitionend – когда CSS-анимация завершена.*/

//события мыши

 elem.onclick = function() {
    alert( 'Спасибо' );
  };
 text.onfocus = function() {
    text.value += ' !focus! ';
  };
// сфокусируется на input и вызовет обработчик onfocus
  elem.focus();

elem.addEventListener( "click" , function() {alert('Спасибо!')});

elem.addEventListener("transitionend", function() {
    alert( "addEventListener" ); // сработает по окончании анимации
  });


//события мыши

/*click – происходит, когда кликнули на элемент левой кнопкой мыши
contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши
mouseover – возникает, когда на элемент наводится мышь
mousedown и mouseup – когда кнопку мыши нажали или отжали
mousemove – при движении мышиПростые события
mousedown
Кнопка мыши нажата над элементом.
mouseup
Кнопка мыши отпущена над элементом.
mouseover
Мышь появилась над элементом.
mouseout
Мышь ушла с элемента.
mousemove
Каждое движение мыши над элементом генерирует это событие.
Комплексные события
click
Вызывается при клике мышью, то есть при mousedown, а затем mouseup на одном элементе
contextmenu
Вызывается при клике правой кнопкой мыши на элементе.
dblclick
Вызывается при двойном клике по элементу.
Комплексные можно составить из простых, поэтому в теории можно было бы обойтись вообще без них. Но они есть, и это хорошо, потому что с ними удобнее.*/

mouseenter/mouseleave //не всплывают.

event.which == 1 // левая кнопка
event.which == 2 // средняя кнопка
event.which == 3 // правая кнопка

//убрать выделение по умолчанию

/*<div ondblclick="alert('Тест')" onselectstart="return false" onmousedown="return false">*/

//При установке на родителя – все его потомки станут невыделяемыми

//Снятие выделения при двойном клике

function clearSelection() {
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    } else { // старый IE
      document.selection.empty();
    }
  }

//в обработчике события mouseover:

event.target // элемент, на который пришла мышь, то есть на котором возникло событие.
event.relatedTarget // элемент, с которого пришла мышь.
//Для mouseout всё наоборот:

event.target //элемент, с которого ушла мышь, то есть на котором возникло событие.
event.relatedTarget // элемент, на который перешла мышь.

//делегирование при движении мыши

table.onmouseover = function(event) {
  if (currentElem) {
    // перед тем, как зайти в новый элемент, курсор всегда выходит из предыдущего
    //
    // если мы еще не вышли, значит это переход внутри элемента, отфильтруем его
    return;
  }

  // посмотрим, куда пришёл курсор
  var target = event.target;

  // уж не на TD ли?
  while (target != this) {
    if (target.tagName == 'TD') break;
    target = target.parentNode;
  }
  if (target == this) return;

  // да, элемент перешёл внутрь TD!
  currentElem = target;
  target.style.background = 'pink';
};


table.onmouseout = function(event) {
  // если курсор и так снаружи - игнорируем это событие
  if (!currentElem) return;

  // произошёл уход с элемента - проверим, куда, может быть на потомка?
  var relatedTarget = event.relatedTarget;
  if (relatedTarget) { // может быть relatedTarget = null
    while (relatedTarget) {
      // идём по цепочке родителей и проверяем,
      // если переход внутрь currentElem - игнорируем это событие
      if (relatedTarget == currentElem) return;
      relatedTarget = relatedTarget.parentNode;
    }
  }

  // произошло событие mouseout, курсор ушёл
  currentElem.style.background = '';
  currentElem = null;
};

//drag n drop с правильным позицонировнаием

var ball = document.getElementById('ball');

ball.onmousedown = function(e) {

  var coords = getCoords(ball);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;

  ball.style.position = 'absolute';
  document.body.appendChild(ball);
  moveAt(e);

  ball.style.zIndex = 1000; // над другими элементами

  function moveAt(e) {
    ball.style.left = e.pageX - shiftX + 'px';
    ball.style.top = e.pageY - shiftY + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };

  ball.onmouseup = function() {
    document.onmousemove = null;
    ball.onmouseup = null;
  };

}

ball.ondragstart = function() {
  return false;
};

function getCoords(elem) {   // кроме IE8-
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}


//Свойства объекта события

elem.onclick = function(event) {
    // вывести тип события, элемент и координаты клика
    alert(event.type + " на " + event.currentTarget);
    alert(event.clientX + ":" + event.clientY);
  }

event.type //Тип события, в данном случае click

event.currentTarget //Элемент, на котором сработал обработчик. Значение – в точности такое же, как и у this, но бывают ситуации, когда обработчик является методом объекта и его this при помощи bind привязан к этому объекту, тогда мы можем использовать event.currentTarget.

event.clientX / event.clientY //Координаты курсора в момент клика (относительно окна)

event.target //Самый глубокий элемент, который вызывает событие, называется «целевым» или «исходным» элементом. это исходный элемент, на котором произошло событие, в процессе всплытия он неизменен.

 layerX, offsetX, pageX


this.value = event.pageX+':'+event.pageY

//Всплытие

event.stopPropagation() //Для остановки всплытия, препятствует продвижению события дальше, но на текущем элементе все обработчики отработают.
event.stopImmediatePropagation() //Для того, чтобы полностью остановить обработку

/*поймать событие на стадии перехвата, нужно использовать третий аргумент addEventListener:

Если аргумент true, то событие будет перехвачено по дороге вниз.
Если аргумент false, то событие будет поймано при всплытии.*/
 elems[i].addEventListener("click", highlightThis, true);

 //действия по умолчанию

/* <a href="/" onclick="return false">Нажми здесь</a>
или
<a href="/" onclick="event.preventDefault()">здесь</a>*/

 event.preventDefault() //Для отмены действия браузера

/* Действий браузера по умолчанию достаточно много.

Вот некоторые примеры событий, которые вызывают действие браузера:

mousedown – нажатие кнопкой мыши в то время как курсор находится на тексте начинает его выделение.
click на <input type="checkbox"> – ставит или убирает галочку.
submit – при нажатии на <input type="submit"> в форме данные отправляются на сервер.
wheel – движение колёсика мыши инициирует прокрутку.
keydown – при нажатии клавиши в поле ввода появляется символ.
contextmenu – при правом клике показывается контекстное меню браузера.*/

//Конструктор Event

var event = new Event(тип события[, флаги]);

var event = new Event("hello", {bubbles: true, cancelable: true}); // (3)

/*Тип события – может быть как своим, так и встроенным, к примеру "click".

Флаги – объект вида { bubbles: true/false, cancelable: true/false }, где свойство bubbles указывает, всплывает ли событие, а cancelable – можно ли отменить действие по умолчанию.

Флаги по умолчанию: {bubbles: false, cancelable: false}.*/

//Затем, чтобы инициировать событие, запускается elem.dispatchEvent(event).

var event = new Event("click");
  elem.dispatchEvent(event);


//отменить текущее созданное событие
rabbit.addEventListener('hide', function(event) {
    if (confirm("Вызвать preventDefault?")) {
      event.preventDefault();
    }
  });

event.isTrusted //отличить реальное нажатие от программного

/*isTrusted: false – означает, что событие сгенерировано скриптом, это свойство изменить невозможно.
target: null – это свойство ставится автоматически позже при dispatchEvent.
type: тип события – первый аргумент new Event.
bubbles, cancelable – по второму аргументу new Event.*/

//Конструкторы

/*UIEvent
FocusEvent
MouseEvent
WheelEvent
KeyboardEvent
CompositionEvent*/

/*Специфический конструктор позволяет указать стандартные свойства для данного типа события.

Например, clientX/clientY для события мыши:*/
var e = new MouseEvent("click", {
  bubbles: true,
  cancelable: true,
  clientX: 100,
  clientY: 100
});

alert( e.clientX ); // 100


//Для генерации своих, нестандартных, событий, хоть и можно использовать конструктор Event, но существует и специфический конструктор CustomEvent.
var event = new CustomEvent("hello", {
    detail: { name: "Вася" }
  });
//Технически, он абсолютно идентичен Event, кроме небольшой детали: у второго аргумента-объекта есть дополнительное свойство detail, в котором можно указывать информацию для передачи в событие.


/*<button oncontextmenu="alert('Клик!');">Правый клик сюда</button>*/

/*shiftKey
altKey
ctrlKey
metaKey (для Mac)*/
if (!e.altKey || !e.shiftKey) return;
    alert( 'Ура!' );


////////////////////////////////////////////////////////////////

/*#формы*/

document.forms.my // форма с именем 'my'
document.forms[0] // первая форма в документе

 var elem = form.elements.one; // можно form.elements[0]

//Свойство elements также есть у элементов <fieldset>
alert( form.elements.set.elements.text ); // set - имя филдсета 

//По элементу можно получить его форму, используя свойство element.form.
alert(elem.form == form); // true

//select и option

select.defaultSelected // какой был выбран option
select.selected // какой в данный момент выбран option
select.options // выбрать все option
select.length // количество option
select.selectedIndex // индекс выбранного
select.selectedIndex.text // текст выбранного
select.selectedIndex.value // значение выбранного
select.type // тип селекта


select.selectedIndex = 0; // первая опция
//Установка selectedIndex = -1 очистит выбор.

for (var i = 0; i < select.options.length; i++) {
  var option = select.options[i];
  if(option.selected) {
    alert( option.value );
  }
}

option = new Option(text, value, defaultSelected, selected);
var option = new Option("Текст", "value");
var option = new Option("Текст", "value", true, true);
/*text – содержимое,
value – значение,
defaultSelected и selected поставьте в true, чтобы сделать элемент выбранным.*/
//Создание нового option
var text = “HTML”, value =’5’, defaultSelected = false, selected = true;
var option = new Option(text, value, defaultSelected, selected ) - параметры необязательные
option.text = HTML;

//Добавление option в конец списка
select.add(option, null)
select.appendChild(newOption);

//Вставить перед другим
select.add(option, select.options[1])

/*У элементов option также есть особые свойства, которые могут оказаться полезными (см. the option element):

selected
выбрана ли опция
index
номер опции в списке селекта
text
Текстовое содержимое опции (то, что видит посетитель).*/

//фокусировка

//всплывают
/*form.onfocusin = onFormFocus;
form.onfocusout = onFormBlur;*/

//change

//<input type="text" onchange="alert(this.value)">

//Событие input

//срабатывает тут же при изменении значения текстового элемента
 input.oninput = function() {
    document.getElementById('result').innerHTML = input.value;
  };

//События cut, copy, paste
input.oncut = input.oncopy = input.onpaste = function(event) {
    result.innerHTML = event.type + ' ' + input.value;
    return false;
  };

//Метод submit

//Чтобы отправить форму на сервер из JavaScript – нужно вызвать на элементе формы метод 
form.submit().

//input[type-file]

//FileReader

//Data URL
//data:,Hello%2C%20World  - по протоколу data | можно закодировать картинку в base64, скрипты, html

var FILE_TYPES = [‘gif’, ‘jpg’, ‘jpeg’, ‘png’]
var fileChooser = document.querySelector(‘.upload input[type=file]’);
var preview =  document.querySelector(‘.setup-user-src’);

fileChooser.addEventListener(‘change’, function(){
  var file = fileChooser.files[0];  - коллекция всех файлов
  var fileName = file.name.toLowerCase();

var matches = FILE_TYPES.some(function(it){  // проверка файлов на соответствие типу
  return fileName.endsWith(it);
})
  if(matches){
    var reader = new FileReader();    // объект читает содержимое файла

    reader.addEventListener(‘load’, function(){
    preview.src = reader.result;
   });
reader.readAsDataURL(file);  // читает содержимое этим методом
}
});

.defaultValue // возвращает дефолтное значение

.validity // описывает валидно ли поле прямо сейчас, если нет, то почему
.onvalid

if (input.validity.tooshort/tooLong/valueMissing) {
  input.setCustomValidity(‘сообщение’)
}

////////////////////////////////////////////////////////////////

/*#графические компоненты*/

function Menu(options) {
  var elem;

  function getElem() {
    if (!elem) render();
    return elem;
  }

  function render() {
    elem = document.createElement('div');
    elem.className = "menu";

    var titleElem = document.createElement('span');
    elem.appendChild(titleElem);
    titleElem.className = "title";
    titleElem.textContent = options.title;

    elem.onmousedown = function() {
      return false;
    };

    elem.onclick = function(event) {
      if (event.target.closest('.title')) {
        toggle();
      }
    }

  }

  function renderItems() {
    var items = options.items || [];
    var list = document.createElement('ul');
    items.forEach(function(item) {
      var li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
    elem.appendChild(list);
  }

  function open() {
    if (!elem.querySelector('ul')) {
      renderItems();
    }
    elem.classList.add('open');
  };

  function close() {
    elem.classList.remove('open');
  };

  function toggle() {
    if (elem.classList.contains('open')) close();
    else open();
  };

  this.getElem = getElem;
  this.toggle = toggle;
  this.close = close;
  this.open = open;
}

////////////////////////////////////////////////////////////////

/*#localStorage*/

/*Хранить с формы данные локально:
<script>*/
      if (window.localStorage) {
        var elements = document.querySelectorAll('[name]');

        for (var i = 0, length = elements.length; i < length; i++) {
          (function(element) {
            var name = element.getAttribute('name');

            element.value = localStorage.getItem(‘name’);

            element.onkeyup = function() {
              localStorage.setItem(name, element.value);
            };
          })(elements[i]);
        }
      }
    //</script>

localStorage.setItem("name", "keks");
/*name- ключ,
keks - значение*/
localStorage.getItem(); //Получает значение ключа из хранилища. 
localStorage.setItem(); //Создаёт новую запись в хранилище. 
localStorage.removeItem(); //Удаляет запись из хранилища. 
localStorage.clear(); //Полностью очищает хранилище.

//Запросить из localStorage:

var storage = localStorage.getItem(“login”)

if (storage){
login.value = storage;
}

//Убедиться что локалсторедж существует:

try{
  storage = localStorage.getItem(“login”)
} catch (err) {
  isStorageSupport = false;
}
