let form = document.getElementById("form"); //form
let submit = document.getElementById("submit"); //bottone per l'invio del form
let fullName; //nome completo
let km; //chilometri da percorrere
let discount; //sconto
let finalPrice; //prezzo finale
let coach; //carrozza
let code; //codice CP
const priceforkm = 0.21; //prezzo per chilometro
const discount20 = 0.2; //sconto del 20% per i minorenni
const discount40 = 0.4; //sconto del 40% per gli over65

//Creazione del biglietto
submit.addEventListener("click", function(){
    //Reset dati
    document.getElementById("fullNameTicket").innerHTML = ""; //stampa del nome completo
    document.getElementById("offert").innerHTML = ""; //stampa dello sconto effettuato
    document.getElementById("coach").innerHTML = ""; //stampa della carrozza
    document.getElementById("code").innerHTML = ""; //stampa della carrozza
    document.getElementById("price").innerHTML = ""; //stampa del prezzo finale
    //Input
    fullName = document.getElementById("fullName").value; //prendo il nome completo
    km = parseFloat(document.getElementById("km").value); //prendo i chilometri da percorrere
    discount = document.getElementById("discount").value; //prendo lo sconto da applicare
    //Calcolo del prezzo del biglietto
    switch (discount) {
        //Sconto minorenni
        case 'under18':
            //Se l'utente ha inserito il nome e i chilometri da percorrere
            if (fullName != "" && km > 0) {
                finalPrice = km * priceforkm; //calcolo del prezzo base
                finalPrice = (finalPrice - (finalPrice * discount20)).toFixed(2); //calcolo sconto 20%
                coach =  Math.floor(Math.random() * (5 - 1 + 1) + 1); //calcolo casuale della carrozza
                code = Math.floor(Math.random() * (9200 - 9100 + 1) + 9100); //calcolo casuale del treno
                document.getElementById("fullNameTicket").innerHTML = fullName; //stampa del nome completo
                document.getElementById("offert").innerHTML = "Sconto minorenni"; //stampa dello sconto effettuato
                document.getElementById("coach").innerHTML = coach; //stampa della carrozza
                document.getElementById("code").innerHTML = code; //stampa della carrozza
                document.getElementById("price").innerHTML = finalPrice + "€"; //stampa del prezzo finale
            } else { //altrimenti
                alert("Inserire correttamente i dati!"); //messaggio di errore
            }
            break; //fine condizione
        //Nessuno sconto
        case 'over18':
            //Se l'utente ha inserito il nome e i chilometri da percorrere
            if (fullName != "" && km > 0) {
                finalPrice = (km * priceforkm).toFixed(2); //calcolo del prezzo finale
                coach =  Math.floor(Math.random() * (5 - 1 + 1) + 1); //calcolo casuale della carrozza
                code = Math.floor(Math.random() * (9200 - 9100 + 1) + 9100); //calcolo casuale del treno
                document.getElementById("fullNameTicket").innerHTML = fullName; //stampa del nome completo
                document.getElementById("offert").innerHTML = "Biglietto Standard"; //stampa dello sconto effettuato
                document.getElementById("coach").innerHTML = coach; //stampa della carrozza
                document.getElementById("code").innerHTML = code; //stampa della carrozza
                document.getElementById("price").innerHTML = finalPrice + "€"; //stampa del prezzo finale
            } else { //altrimenti
                alert("Inserire correttamente i dati!"); //messaggio di errore
            }
            break; //fine condizione
        //Sconto over65
        case 'over65':
            //Se l'utente ha inserito il nome e i chilometri da percorrere
            if (fullName != "" && km > 0) {
                finalPrice = km * priceforkm; //calcolo del prezzo base
                finalPrice = (finalPrice - (finalPrice * discount40)).toFixed(2); //calcolo sconto 40%
                coach =  Math.floor(Math.random() * (5 - 1 + 1) + 1); //calcolo casuale della carrozza
                code = Math.floor(Math.random() * (9200 - 9100 + 1) + 9100); //calcolo casuale del treno
                document.getElementById("fullNameTicket").innerHTML = fullName; //stampa del nome completo
                document.getElementById("offert").innerHTML = "Sconto over65"; //stampa dello sconto effettuato
                document.getElementById("coach").innerHTML = coach; //stampa della carrozza
                document.getElementById("code").innerHTML = code; //stampa della carrozza
                document.getElementById("price").innerHTML = finalPrice + "€"; //stampa del prezzo finale
            } else { //altrimenti
                alert("Inserire correttamente i dati!"); //messaggio di errore
            }
            break; //fine condizione
        //Errore
        default:
            alert("Inserire correttamente i dati!"); //messaggio di errore
            break; //fine condizione
    }
});