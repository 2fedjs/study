/*#ссылки*/
//plnkr.co - для решения задач онлайн

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

/*У функций в режиме use strict вместо глобального объекта this будет undefined.

При use strict код внутри eval по-прежнему сможет читать и менять внешние переменные, однако переменные и функции, объявленные внутри eval, не попадут наружу.*/

// попытаемся записать свойство в строку:
var user = "Вася";
user.age = 30;
alert( user.age ); // undefined
/*Свойство age было записано во временный объект, который был тут же уничтожен, так что смысла в такой записи немного. Пример выше выполняется без use strict, в строгом режиме была бы ошибка, и это хорошо, так как такая запись, по большому счету, не имеет смысла.*/

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

 9 (по осн. 10)
  = 00000000000000000000000000001001 //(по осн. 2)
             //  --------------------------------
~9 //(по осн. 10)
  = 11111111111111111111111111110110 //(по осн. 2)
  = -10 //(по осн. 10)
//Из-за внутреннего представления отрицательных чисел получается так, что ~n == -(n+1).

alert( ~3 ); // -4
alert( ~-1 ); // 0