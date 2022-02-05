"use strict";

/*let i = prompt ('Введите число',''); 

for (i = 0; i < 100; i++){
     alert(i);
}*/

/*let num;

do {
  num = prompt("Введите число больше 100?", 0);
 
} while (num <= 100 && num);*/

let n = 0;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert( i ); // простое число
}