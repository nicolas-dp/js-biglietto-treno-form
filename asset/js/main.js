/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va scritto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
 */


// Chiedi all'utente il numero dei KM da percorrere
const numero_km = parseInt(prompt("Quanti KM dovrai percorrere?"));
console.log("Il numero dei KM da percorrere è: " + numero_km);



if (isNaN(numero_km) || numero_km <= 0) {
    alert("Devi inserire un valore numerico maggiore o uguale a 1");
}

// Chiedi all'utente l'età 

const eta_utente = parseInt(prompt("Quanti anni hai?"));
console.log("L'età dell'utente è: " + eta_utente);

if (isNaN(eta_utente) || eta_utente <= 0 || eta_utente >= 101) {
    alert("Devi inserire un valore numerico compreso tra 1 e 100");
}

//Calcoliamo il costo del biglietto al netto degli sconti

const prezzo_totale = numero_km * 0.21;
let prezzo_sconto;
console.log("Il prezzo totale senza sconti è: " + prezzo_totale + " €");

//Calcoliamo il costo del biglietto applicando lo sconto

if (eta_utente < 18) {
    prezzo_sconto = prezzo_totale - (prezzo_totale * 0.2);
} else if (eta_utente >= 65) {
    prezzo_sconto = prezzo_totale - (prezzo_totale * 0.4);
} else {
    prezzo_sconto = prezzo_totale;
}

console.log("Il prezzo scontato è: " + prezzo_sconto + " €");

document.getElementById("prezzo").innerHTML = prezzo_sconto.toFixed(2) + " €";