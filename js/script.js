/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

// Chiedere all'utente il numero dei Km da percorrere
var kmToGo = parseInt (prompt ("How many kilometers do you want to travel?"));

console.log("kmToGo", kmToGo);

// Chiedere all'utente l'età del passeggero
var passengerAge = parseInt (prompt ("How old are you?"));

console.log("passengerAge", passengerAge);

// Il prezzo è 0.21€ al Km
var startingPrice = kmToGo * 0.21;

console.log("startingPrice", startingPrice);

// Sconto 20% per gli under 18


console.log();

// Sconto 40% per gli over 65


console.log();

// Arrotondare prezzo a 2 numeri decimali


console.log();

// Emettere risultato

