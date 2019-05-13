function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}

function checkAge(age) {
 return  age > 18 ? true : confirm('Do you have your parents permission to access this page?');
}

function checkAge(age) {
 return age > 18 || confirm('Do you have your parents permission to access this page?');
}

/////////////////////////////////////////////////////////////////////////////////////////////////

function min(a, b) {
	a < b ? a : b
}

/////////////////////////////////////////////////////////////////////////////////////////////////

function pow(a, b) {
	let temp = a
	for(let i = 1; i < b; i++){
		a*=temp
	}
	return a
}

/////////////////////////////////////////////////////////////////////////////////////////////////

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

/////////////////////////////////////////////////////////////////////////////////////////////////

function sumTo(n) { 
	let temp = n;
 for(let i = n-1; i >0; i--){
 	temp += i;
 }
 return temp;
}

console.log( sumTo(100) ); // 5050


function sumTo(n) {
  return n > 1 ? (n + sumTo(n-1)) : n ;
}

function sumTo(n) { 

 return  n * (n + 1) / 2;
}

console.log( sumTo(100) ); // 5050

/////////////////////////////////////////////////////////////////////////////////////////////////

function factorial(n) {
  return n > 1 ? (n * factorial(n - 1)) : n ;
}

console.log( factorial(5) ); // 120


/////////////////////////////////////////////////////////////////////////////////////////////////

function fib(n) { 
	let arr = [1, 1];
	let res = 0;
	for (let i = 2; i<n; i++){
		arr[i] = arr[i-1] + arr[i-2];
		res = arr[i];
	}
	return res;
}

console.log( fib(7) ); // 13

/////////////////////////////////////////////////////////////////////////////////////////////////

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

let arr = []
function printList(n) {

  if (n.next) {
		arr.push(n.value); 
		printList(n.next);
  } else{
  	arr.push(n.value);
  	for(let i = arr.length - 1; i>=0; i--)
	console.log(arr[i]);
  } 
  
}


printList(list);

/////////////////////////////////////////////////////////////////////////////////////////////////

function sum(a){

  return function(b){
   return  a + b
  }

}

/////////////////////////////////////////////////////////////////////////////////////////////////

let arr = [1, 2, 3, 4, 5, 6, 7];
  
  function inBetween(a, b) {
    return function(x){
      if (x>=a && x<=b){
        return x;
      }
    }
  }
arr.filter(inBetween(3, 6))

let arr = [1, 2, 3, 4, 5, 6, 7];
  
  function inArray(arr) {
    return function(x){
      return arr.includes(x)
    }
  }
arr.filter(inArray([1, 2, 10]))

/////////////////////////////////////////////////////////////////////////////////////////////////

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(param){
 return ((a, b) => a[param] > b[param] ? 1 : -1);
}

users.sort(byField('name'));

/////////////////////////////////////////////////////////////////////////////////////////////////

function makeArmy() {
let shooters = [];
  let i = 0;
  while (i < 10) {
    let shooter = function() { // shooter function
      console.log( i ); // should show its number
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // the shooter number 0 shows 10
army[5](); // and number 5 also outputs 10...