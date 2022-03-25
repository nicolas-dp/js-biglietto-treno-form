/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va scritto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
 */
let prezzo_totale;
let prezzo_sconto;


// Chiedi all'utente nome e cognome
let full_name = document.getElementById("nome_cognome").value;
    document.querySelector('.nome_passeggero').innerHTML = full_name;
// Chiedi all'utente il numero dei KM da percorrere
// GENERA NUMERO RANDOM

const elementButton = document.querySelector('.btn_genera');

elementButton.addEventListener('click', function () {
    

    let numero_km = document.getElementById("km_da_percorrere").value;
    let prezzo_totale = numero_km * 0.21;
    let eta_utente = document.getElementById("form_selector").value;
    console.log("Il prezzo totale senza sconti è: " + prezzo_totale + " €");
    if (eta_utente == 1) {
        prezzo_sconto = prezzo_totale - (prezzo_totale * 0.2);
    } else if (eta_utente == 2) {
        prezzo_sconto = prezzo_totale - (prezzo_totale * 0.4);
    } else {
        prezzo_sconto = prezzo_totale;
    }
    console.log("Il prezzo totale senza sconti è: " + prezzo_sconto + " €");
    
})



