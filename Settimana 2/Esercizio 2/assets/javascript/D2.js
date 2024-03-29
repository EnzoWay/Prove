/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let pNumero = 10;
let sNumero = 8;

if (pNumero > sNumero) {
  console.log(pNumero + ' è il più grande tra i due numeri')
} else if (pNumero === sNumero) {
  console.log('i due numeri sono uguali')
} else {
  console.log(sNumero + ' è il più grande tra i due numeri')
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let numero = 15;

if (numero !== 5) {
  console.log('not equal')
} else {
  console.log('equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let divisoCinque = 25;

if (divisoCinque % 5 === 0) {
  console.log(divisoCinque + " è perfettamente divisibile per 5.")
} else {
  console.log(divisoCinque + " non è perfettamente divisibile per 5.")
};

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let numero1 = 5;
let numero2 = 3;

if (numero1 === 8 || numero2 === 8 || numero1 + numero2 === 8 || numero1 - numero2 === 8 || numero2 - numero1 === 8) {
  console.log('uguale a 8')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 55;

if (totalShoppingCart > 50) {
  document.getElementById('promozione').innerHTML = 'hai diritto alla spedizione gratuita. La tua spesa totale è di ' + totalShoppingCart + '€'
  console.log(totalShoppingCart)
} else {
  (totalShoppingCart + 10)
  document.getElementById('promozione').innerHTML = 'costo della spedizione pari a 10€. La tua spesa totale è di ' + totalShoppingCart + '€'
  console.log(totalShoppingCart)
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart1 = 80;
totalShoppingCart1 = totalShoppingCart1 - (20 / 100 * totalShoppingCart1);

if (totalShoppingCart1 > 50) {
  document.getElementById('promozione1').innerHTML = 'hai diritto alla spedizione gratuita. La tua spesa totale è di ' + totalShoppingCart1 + '€'
  console.log(totalShoppingCart1)
} else {
  (totalShoppingCart1 + 10)
  document.getElementById('promozione1').innerHTML = 'costo della spedizione pari a 10€. La tua spesa totale è di ' + totalShoppingCart1 + '€'
  console.log(totalShoppingCart1)
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let n1 = 47;
let n2 = 50;
let n3 = 55;

if (n2 >= n1 && n3 >= n2) {
  console.log(n3, n2, n1)
} else if (n1 >= n2 && n3 >= n1) {
  console.log(n3, n1, n2)
} else if (n3 >= n1 && n2 >= n3) {
  console.log(n2, n3, n1)
} else if (n1 >= n3 && n2 >= n1) {
  console.log(n2, n1, n3)
} else if (n3 >= n2 && n1 >= n3) {
  console.log(n1, n3, n2)
} else {
  console.log(n1, n2, n3)
};


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let numFornito = 'ciao';
console.log(typeof numFornito);

if (typeof numFornito == 'number') {
  console.log('è un numero');
} else {
  console.log('non è un numero');
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let pariODispari = 9;

if (pariODispari % 2 === 0) {
  console.log(pariODispari + " è un numero pari.");
} else {
  console.log(pariODispari + " è un numero dispari.");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto';
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2];
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let vuoto = [];

vuoto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(vuoto);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

vuoto[9] = 100;
console.log(vuoto);
