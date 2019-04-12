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