/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va scritto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
 */
let prezzo_totale;
let prezzo_sconto;
let prezzo_finito;

// Chiedi all'utente nome e cognome


// Chiedi all'utente il numero dei KM da percorrere


/* function myFunction() {
    var form_selector = document.getElementById("form_selector");
    document.getElementById("offerta").value = form_selector.options[form_selector.selectedIndex].text;
} */

// GENERA TIcket
const elementButton = document.querySelector('.btn_genera');
const sectionTicket = document.querySelector('.section_ticket');



elementButton.addEventListener('click', function () {
    // Rimuove la classe con disply none
    sectionTicket.classList.remove('section_ticket');

    // Cattura il nome completo dell'utente e lo mette alla riga 63 dell'HTML
    let full_name = document.getElementById("nome_cognome").value;
    document.querySelector('.nome_passeggero').innerHTML += full_name;

    let option_value = document.getElementById("form_selector").value;

    document.querySelector('.offerta').innerHTML += option_value;

    //Crea un numero randomico per la carrozza
    let random_number = Math.floor((Math.random() * 10) + 1);
    document.querySelector(".carrozza").innerHTML += random_number;

     //Crea un numero randomico per la carrozza
     let random_cp = Math.floor((Math.random() * 9999) + 1);
     document.querySelector(".cod_cp").innerHTML += random_cp


    // Cattura il nemro dei KM e li moltiplica per 0.21€/km 
    let numero_km = document.getElementById("km_da_percorrere").value;
    let prezzo_totale = numero_km * 0.21;

    // Cattura l'età dell'utente e la verifica con la select indicata nel form per poi eseguire lo sconto
    let eta_utente = document.getElementById("form_selector").value;

    if (eta_utente == "Minorenne") {
        prezzo_sconto = prezzo_totale - (prezzo_totale * 0.2);
        
    } else if (eta_utente == "Over 65") {
        prezzo_sconto = prezzo_totale - (prezzo_totale * 0.4);
        
    } else {
        prezzo_sconto = prezzo_totale;
        
    }

    prezzo_finito = prezzo_sconto.toFixed(2);
    document.querySelector(".costo_ticket").innerHTML += prezzo_finito;
    
})



