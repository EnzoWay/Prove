/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype in JS sono i seguenti:
    1   Stringhe: tutto ciò che è scritto tra apici/virgolette è stringa. Vengono interpretate da JS come "testo" (esempio let testo = "ciao sono Vincenzo, ho 32 anni";). 
        Per testo intentediamo tutti i caratteri possibili cioè lettere maiuscole/minuscole, numeri, spazi e simboli;

    2   Numeri: tutti i numeri scritti senza apici/virgolette è numero. Vengono interpretate da JS come "numero" (esempio let numero = 30;). In questo caso 30 è diverso da "30" perchè
        è inteso come numero reale e non più come testo;
        
    3   Booleani: i booleani sono dati che permettono di verificare la vericità di una condizione è possono essere solo di due tipi, ossia vero o falso, scritto in inglese "true" o "false".

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = 'Vincenzo';
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numero1 = 12;
let numero2 = 20;

numero3 = numero1 + numero2;
console.log(numero3);

/* in questo caso ho assegnato un valore a numero3 sommando numero1 e numero2. Se volessi semplicemente
    effettuare una addizione senza assegnare alcun valore e nessuna variabile farei nel seguente modo: */

  console.log(12 + 20);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = 'Cesarano'
console.log(myName);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x;
console.log(sottrazione);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john';
let name2 = 'John';
console.log('i valori sono uguali?', name1 === name2);

console.log('i valori in lowercase sono uguali?', name1.toLowerCase === name2.toLowerCase);
