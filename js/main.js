// Un alert espone 5 numeri casuali diversi.

var randomNum = []; 

for (var i = 0; i < 5; i++) {
 randomNum.push(Math.floor(Math.random() * 100) + 1)
}
alert(randomNum);
console.log(randomNum);

// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.

setTimeout(askNumbers, 30000);
var numeriUtente = [];

function askNumbers() {
 for (var i = 0; i < 5; i++) {
  numeriUtente.push(parseInt(prompt("Inserisci i numeri che ricordi")));
 }
 for (var i = 0; i < 5; i++) {
  if(randomNum.includes(numeriUtente[i])) {

   console.log("Hai indovinato " + numeriUtente[i]);
  }
  else {
   console.log("non hai indovinato");
  }

 }
}
console.log(numeriUtente);








