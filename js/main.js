// Un alert espone 5 numeri casuali diversi.

var randomNum = []; 

for (var i = 0; i < 5; i++) {
 randomNum.push(Math.floor(Math.random() * 100) + 1)
}
document.getElementById("random").innerHTML = randomNum;
console.log(randomNum);

// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
setTimeout(numDisappear, 3000);

function numDisappear() {
 document.getElementById("random").style.display = "none";
console.log(numeriUtente);
};


setTimeout(askNumbers, 3000);
var numeriUtente = [];

function askNumbers() {

 for (var i = 0; i < 5; i++) {
  numeriUtente.push(parseInt(prompt("Inserisci i numeri che ricordi")));
 }
 for (var i = 0; i < 5; i++) {
  
  if(randomNum.includes(numeriUtente[i])) {
   document.getElementById("result_right").innerHTML = "hai indovinato: " + numeriUtente;
   console.log("Hai indovinato il numero " + numeriUtente[i]);
  }
  else {
   document.getElementById("result_wrong").innerHTML = "Non hai indovinato: " + numeriUtente;
   console.log("Non hai indovinato");
  }
 }
}


//su chrome non sempre scompaiono i numeri dall'html, su firefox funziona sempre

//riesco a far stampare nel console tutti i numeri indovinati ma non nell'Html






