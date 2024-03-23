/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log('***ESERCIZIO 1***')

let base = 10;
let altezza = 15;

function area(l1, l2) {
    console.log(l1 * l2 / 2);
}

area(base, altezza);

console.log('***Alternativa***')

let base2 = 10;
let altezza2 = 15;
let areaTriangolo = []

function area2(l1, l2) {
    areaTriangolo.push(l1 * l2 / 2);
}

area2(base2, altezza2);
console.log(areaTriangolo);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

console.log('***ESERCIZIO 2***')

let num1 = 12;
let num2 = 12;

function crazySum(n1, n2) {
    if (n1 === n2) {
        console.log((n1 + n2) * 3);
    } else {
        console.log(n1 + n2);
    }
}

crazySum(num1, num2)



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

console.log('***ESERCIZIO 3***')

let x = 38;
let diffAssoluta;

function crazyDiff(num1, num2 = 19) {
    diffAssoluta = num1 / num2;
    if (num1 > 19) {
        diffAssoluta = diffAssoluta * 3;
    }
}

crazyDiff(x);
console.log(diffAssoluta);


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

console.log('***ESERCIZIO 4***')

let numIntero = 101;

function boundary(n) {
    if ((n > 20 && n <= 100) || (n === 400)) {
        console.log(true);
    } else {
        console.log(false);
    }
}

boundary(numIntero);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

console.log('***ESERCIZIO 5***')

let stringa = 'EPICODE the best!'

if (stringa.indexOf('EPICODE') === 0) {
    console.log(stringa);
} else {
    function epify(stringa1) {
        stringa = 'EPICODE ' + stringa;
        console.log(stringa);
    }
    epify(stringa);
}

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

console.log('***ESERCIZIO 6***')

let multiplo = 16;

function check3and7(n) {
    if (n % 3 === 0 || n % 7 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

check3and7(multiplo);



/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

console.log('***ESERCIZIO 7***')

let inverti = 'EPICODE'

function reverseString(stringa) {
    inverti = stringa.split('');
    inverti.reverse();
    inverti = inverti.join('');
}

reverseString(inverti);
console.log(inverti);


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

console.log('***ESERCIZIO 8***')

let up = 'ciao, mi chiamo vincenzo'

function upperFirst(maiuscolo) {
    up = maiuscolo.split(' ');

    for (let i = 0; i < up.length; i++) {
        up[i] = up[i][0].toUpperCase('') + up[i].slice(1);
    }
    up = up.join(' ');
}

upperFirst(up);
console.log(up);


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

console.log('***ESERCIZIO 9***')

let taglia = 'ciao mondo, come stai?'

function cutString(cut) {
    taglia = cut.slice(1, -1);
}

cutString(taglia);
console.log(taglia);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

console.log('***ESERCIZIO 9***')

let random = [];

function giveMeRandom(boh) {
    for (let i = 0; i < boh; i++) {
        random.push(Math.floor(Math.random() * 11))
    };
    console.log(random);
}

giveMeRandom(10);


/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

console.log('***!!!!!!ESERCIZIO EXTRA!!!!!!***')

let maggCinque = [];
let somma = 0;

function checkArray(boh2) {
    for (let i = 0; i < boh2.length; i++) {
        if (boh2[i] > 5) {
            maggCinque.push(boh2[i])
            console.log(boh2[i] + ' è maggiore di 5')
        } else {
            console.log(boh2[i])
        } 
    } 
    for (let i = 0; i < maggCinque.length; i++) {
        somma += maggCinque[i];
      }
}

checkArray(random);
console.log(somma)