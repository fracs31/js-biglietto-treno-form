let form = document.getElementById("form"); //form
let submit = document.getElementById("submit"); //bottone per l'invio del form
let fullName; //nome completo
let km; //chilometri da percorrere
let discount; //sconto
let finalPrice; //prezzo finale
const priceforkm = 0.21; //prezzo per chilometro
const discount20 = 0.2; //sconto del 20% per i minorenni
const discount40 = 0.4; //sconto del 40% per gli over65

//Creazione del biglietto
submit.addEventListener("click", function(){
    //Input
    fullName = document.getElementById("fullName").value; //prendo il nome completo
    km = parseFloat(document.getElementById("km").value); //prendo i chilometri da percorrere
    discount = document.getElementById("discount").value; //prendo lo sconto da applicare
    //Calcolo del prezzo del biglietto
    switch (discount) {
        //Sconto minorenni
        case 'under18':
            finalPrice = km * priceforkm;
            finalPrice = (finalPrice - (finalPrice * discount20)).toFixed(2);
            console.log(finalPrice);
            break;
        //Nessuno sconto
        case 'over18':
            finalPrice = (km * priceforkm).toFixed(2);
            console.log(finalPrice);
            break;
        //Sconto over65
        case 'over65':
            finalPrice = km * priceforkm;
            finalPrice = (finalPrice - (finalPrice * discount40)).toFixed(2);
            console.log(finalPrice);
            break;
        //Errore
        default:
            console.log("Errore");
            break;
    }
});