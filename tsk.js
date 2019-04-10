﻿/*#1*/

/*В примере ниже подключены два скрипта small.js и big.js.

Если предположить, что small.js загружается гораздо быстрее, чем big.js – какой выполнится первым?

<script src="big.js"></script>
<script src="small.js"></script>
А вот так?

<script async src="big.js"></script>
<script async src="small.js"></script>
А так?

<script defer src="big.js"></script>
<script defer src="small.js"></script>*/

////////////////////////////////////////////////////////////////

/*#2*/

//Посмотрите, понятно ли вам, почему код ниже работает именно так?

var a = 1, b = 1, c, d;

c = ++a; alert(c); // 2
d = b++; alert(d); // 1

c = (2+ ++a); alert(c); // 5
d = (2+ b++); alert(d); // 4

alert(a); // 3
alert(b); // 3

////////////////////////////////////////////////////////////////

/*#3*/

//Чему будет равен x в примере ниже?

var a = 2;

var x = 1 + (a *= 2);

////////////////////////////////////////////////////////////////

/*#4*/

//Почему побитовые операции в примерах ниже не меняют число? Что они делают внутри?

 alert( 123 ^ 0 ); // 123
alert( 0 ^ 123 ); // 123
alert( ~~123 ); // 123

////////////////////////////////////////////////////////////////

/*#5*/

/*Напишите функцию isInteger(num), которая возвращает true, если num – целое число, иначе false.

Например:*/

alert( isInteger(1) ); // true
alert( isInteger(1.5) ); // false
alert( isInteger(-0.5) ); // false

////////////////////////////////////////////////////////////////

/*#6*/

//Верно ли, что для любых a и b выполняются равенства ниже?

(a ^ b) == (b ^ a)
(a & b) == (b & a)
(a | b) == (b | a)
//Иными словами, при перемене мест – всегда ли результат остаётся тем же?

////////////////////////////////////////////////////////////////

/*#7*/

//Почему результат второго alert'а такой странный?

 alert( 123456789 ^ 0 ); // 123456789
alert( 12345678912345 ^ 0 ); // 1942903641

////////////////////////////////////////////////////////////////

/*#8*/

//Выведется ли alert?

if ("0") {
  alert( 'Привет' );
}

////////////////////////////////////////////////////////////////

/*#9*/

/*Используя конструкцию if..else, напишите код, который получает значение prompt, а затем выводит alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.*/

////////////////////////////////////////////////////////////////

/*#10*/

Перепишите if с использованием оператора '?':

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

////////////////////////////////////////////////////////////////

/*#11*/

/*Перепишите if..else с использованием нескольких операторов '?'.

Для читаемости – оформляйте код в несколько строк.*/

var message;

if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

////////////////////////////////////////////////////////////////

/*#12*/

//Что выведет код ниже?

alert( null || 2 || undefined );

////////////////////////////////////////////////////////////////

/*#13*/

//Что выведет код ниже?

alert( alert(1) || 2 || alert(3) );

////////////////////////////////////////////////////////////////

/*#14*/

//Что выведет код ниже?

alert( 1 && null && 2 );

////////////////////////////////////////////////////////////////

/*#15*/

//Что выведет код ниже?

alert( alert(1) && alert(2) );

////////////////////////////////////////////////////////////////

/*#16*/

//Что выведет код ниже?

alert( null || 2 && 3 || 4 );

////////////////////////////////////////////////////////////////

/*#17*/

/*Напишите условие if для проверки того факта, что переменная age находится между 14 и 90 включительно.

«Включительно» означает, что концы промежутка включены, то есть age может быть равна 14 или 90.*/

////////////////////////////////////////////////////////////////

/*#18*/

/*Напишите условие if для проверки того факта, что age НЕ находится между 14 и 90 включительно.

Сделайте два варианта условия: первый с использованием оператора НЕ !, второй – без этого оператора.*/

////////////////////////////////////////////////////////////////

/*#19*/

/*Какие из этих if верны, т.е. выполнятся?

Какие конкретно значения будут результатами выражений в условиях if(...)?*/

if (-1 || 0) alert( 'первое' );
if (-1 && 0) alert( 'второе' );
if (null || -1 && 1) alert( 'третье' );

////////////////////////////////////////////////////////////////

/*#20*/

//Подумайте, какой результат будет у выражений ниже. Тут не только преобразования типов. Когда закончите – сверьтесь с решением.

"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5

"4" - 2

"4px" - 2

7 / 0

"  -9\n" + 5
"  -9\n" - 5
5 && 2

2 && 5

5 || 0

0 || 5
null + 1
undefined + 1
null == "\n0\n"
+null == +"\n0\n"

////////////////////////////////////////////////////////////////

/*#21*/

//Какое последнее значение выведет этот код? Почему?

var i = 3;

while (i) {
  alert( i-- );
}

////////////////////////////////////////////////////////////////

/*#22*/

/*Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

Префиксный вариант*/

var i = 0;
while (++i < 5) alert( i );
//Постфиксный вариант

var i = 0;
while (i++ < 5) alert( i );

////////////////////////////////////////////////////////////////

/*#23*/

/*Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

Постфиксная форма:*/

for (var i = 0; i < 5; i++) alert( i );
//Префиксная форма:

for (var i = 0; i < 5; ++i) alert( i );

////////////////////////////////////////////////////////////////

/*#24*/

//При помощи цикла for выведите чётные числа от 2 до 10.

////////////////////////////////////////////////////////////////

/*#25*/

//Перепишите код, заменив цикл for на while, без изменения поведения цикла.

 for (var i = 0; i < 3; i++) {
  alert( "номер " + i + "!" );
}

////////////////////////////////////////////////////////////////

/*#26*/

/*Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Cancel (ESC).

Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.*/

////////////////////////////////////////////////////////////////

/*#27*/

/*Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.

Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.

P.S. Код также должен легко модифицироваться для любых других интервалов.*/

////////////////////////////////////////////////////////////////

/*#28*/

//Что оно выведет при вводе числа 0? Числа 1? 2? 3?

var arg = prompt("Введите arg?")
switch (arg) {
  case '0':
  case '1':
    alert( 'Один или ноль' );

  case '2':
    alert( 'Два' );
    break;

  case 3:
    alert( 'Никогда не выполнится' );

  default:
    alert('Неизвестное значение: ' + arg)
}

////////////////////////////////////////////////////////////////

/*#29*/

//Напишите if..else, соответствующий следующему switch:

switch (browser) {
  case 'IE':
    alert( 'О, да у вас IE!' );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Да, и эти браузеры мы поддерживаем' );
    break;

  default:
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}

////////////////////////////////////////////////////////////////

/*#30*/

//Перепишите код с использованием одной конструкции switch:

 var a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

////////////////////////////////////////////////////////////////

/*#31*/

//Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос посредством вызова confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
//Будет ли эта функция работать как-то иначе, если убрать else?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}
//Есть ли хоть одно отличие в поведении этого варианта?

////////////////////////////////////////////////////////////////

/*#32*/

//Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
/*Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку. Сделайте два варианта функции checkAge:

Используя оператор '?'
Используя оператор ||*/

////////////////////////////////////////////////////////////////

/*#33*/

/*Задача «Hello World» для функций :)

Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.

Пример вызовов:*/

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

////////////////////////////////////////////////////////////////

/*#34*/

//Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...*1 = 1
//Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

//P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

////////////////////////////////////////////////////////////////

/*#35*/

//Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
//Сделайте три варианта решения:

/*С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.
С использованием формулы для суммы арифметической прогрессии.
Пример работы вашей функции:*/

function sumTo(n) { /*... ваш код ... */ }

alert( sumTo(100) ); // 5050
//Какой вариант решения самый быстрый? Самый медленный? Почему?

//Можно ли при помощи рекурсии посчитать sumTo(100000)? Если нет, то почему?

////////////////////////////////////////////////////////////////

/*#36*/

//Факториа́л числа – это число, умноженное на «себя минус один», затем на «себя минус два» и так далее, до единицы. Обозначается n!

//Определение факториала можно записать как:

n! = n * (n - 1) * (n - 2) * ...*1
//Примеры значений для разных n:

1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
//Задача – написать функцию factorial(n), которая возвращает факториал числа n!, используя рекурсивный вызов.

alert( factorial(5) ); // 120
//Подсказка: обратите внимание, что n! можно записать как n * (n-1)!. Например: 3! = 3*2! = 3*2*1! = 6

////////////////////////////////////////////////////////////////

/*#37*/

/*Последовательность чисел Фибоначчи имеет формулу Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

Напишите функцию fib(n), которая возвращает n-е число Фибоначчи. Пример работы:*/

function fib(n) { /* ваш код */ }

alert( fib(3) ); // 2
alert( fib(7) ); // 13
alert( fib(77)); // 5527939700884757
//Все запуски функций из примера выше должны срабатывать быстро.

////////////////////////////////////////////////////////////////

/*#38*/

//Каков будет результат выполнения кода?

function g() { return 1; }

alert(g);
//А такого? Будет ли разница, если да – почему?

(function g() { return 1; });

alert(g);

////////////////////////////////////////////////////////////////

/*#39*/

/*Исправьте код функции pow, чтобы тесты проходили.

Для этого ниже в задаче вы найдёте ссылку на песочницу.

Она содержит HTML с тестами. Обратите внимание, что HTML-страница в ней короче той, что обсуждалась в статье Автоматические тесты при помощи chai и mocha. Это потому что библиотеки Chai, Mocha и Sinon объединены в один файл:

<script src="https://js.cx/test/libs.js"></script>
Этот файл содержит код библиотек, стили, настройки для них и запуск mocha.run по окончании загрузки страницы. Если нет элемента с id="mocha", то результаты выводятся в <body>.

Сборка сделана исключительно для более компактного представления задач, без рекомендаций использовать именно её в проектах.

Открыть песочницу с тестами для задачи.*/

////////////////////////////////////////////////////////////////

/*#40*/
/*
Добавьте к предыдущей задаче тесты, которые будут проверять, что любое число, кроме нуля, в нулевой степени равно 1, а ноль в нулевой степени даёт NaN (это математически корректно, результат 00 не определён).

При необходимости, исправьте саму функцию pow(), чтобы тесты проходили без ошибок.

Открыть песочницу с тестами для задачи.*/

////////////////////////////////////////////////////////////////

/*#41*/

//Что не так в этом тесте функции pow?

it("Возводит x в степень n", function() {
  var x = 5;

  var result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});
//P.S. Синтаксически он верен и работает, но спроектирован неправильно.