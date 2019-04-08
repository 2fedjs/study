/*#1*/

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