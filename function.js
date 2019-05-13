/*----#объявление функции----*/

function showMessage() {
  alert( 'Hello everyone!' );
}

/*----#вызов функции----*/

showMessage();

/*----#переменные в функции----*/

//Переменная, объявленная внутри функции, видна только внутри этой функции.
//Функция имеет полный доступ к внешней переменной. Может ее изменить.

let userName = 'John';
function showMessage() {
  userName = "Bob"; // (1) changed the outer variable
  let message = 'Hello, ' + userName;
  alert(message);
}
alert( userName ); // John before the function call
showMessage();
alert( userName ); // Bob, the value was modified by the function

//Внешняя переменная используется только в том случае, если нет локальной переменной.

/*----#параметры по умолчанию----*/

//Если параметр не указан, его значение становится равным undefined.

//Если мы хотим использовать «по умолчанию» 

function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}
showMessage("Ann"); // Ann: no text given

//если text параметр не передан, он получит значение"no text given"
//можно присвоить по умолчанию функцию, которая вычислится только при отсутствии значения

function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}

//Параметры по умолчанию в старом стиле

function showMessage(from, text) {
  if (text === undefined) {
    text = 'no text given';
  }
  alert( from + ": " + text );
}

//... или ||оператор:

function showMessage(from, text) {
  // if text is falsy then text gets the "default" value
  text = text || 'no text given';
  ...
}

/*----#возврат значения----*/

//Функция с пустым return или без него возвращает undefined

function doNothing() { /* empty */ }
alert( doNothing() === undefined ); // true

/*----#Function Declaration----*/

function sayHi() {
  alert( "Hello" );
}

//может быть вызвана раньше, чем она определена.
// при use strict видно только внутри блока кода, в котором оно находится.

/*----#Function Expression----*/

let sayHi = function() {
  alert( "Hello" );
};

/*----#стрелочные функции----*/

let sum = (a, b) => a + b;

//Если у нас есть только один аргумент, то скобки можно опустить, что делает его еще короче:

// same as
// let double = function(n) { return n * 2 }
let double = n => n * 2;

alert( double(3) ); // 6

//Если аргументов нет, скобки должны быть пустыми (но они должны присутствовать):

 let sayHi = () => alert("Hello!");

sayHi();

/*----#рекурсия----*/

function pow(x, n) {
  return (n == 1) ? x : (x * pow(x, n - 1));
}

/*----#Связанный список----*/

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

//Альтернативный код для создания:

let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

// разбить на несколько частей, а затем объединить:

let secondList = list.next.next;
list.next.next = null;

//Присоединиться:

list.next.next = secondList;

// чтобы добавить новое значение, нам нужно обновить заголовок списка:

let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

// prepend the new value to the list
list = { value: "new item", next: list };

//Чтобы удалить значение из середины, измените nextпредыдущее:

/*----#Rest----*/

//аргументы собираются в массив

list.next = list.next.next;
function sumAll(...args) { // args is the name for the array
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6

/*----#spread----*/

//работает с коллекциями | при передачи в функцию

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(...arr1, ...arr2) ); // 8

// для объединения массивов:

let arr = [3, 5, 1];
let arr2 = [8, 9, 15];
let merged = [0, ...arr, 2, ...arr2];

//...str становится "H","e","l","l","o"

/*----#arguments----*/

ассивоподобный объект с именем, argumentsкоторый содержит все аргументы по их индексу.

function showName() {
  alert( arguments.length );
  alert( arguments[0] );
  alert( arguments[1] );
  // it's iterable
  // for(let arg of arguments) alert(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");

/*----#IIFE----*/

(function() {
  alert("Parentheses around the function");
})();

(function() {
  alert("Parentheses around the whole thing");
}());

!function() {
  alert("Bitwise NOT operator starts the expression");
}();

+function() {
  alert("Unary plus starts the expression");
}();