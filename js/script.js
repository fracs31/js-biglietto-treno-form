let form = document.getElementById("form"); //form
let submit = document.getElementById("submit"); //bottone per l'invio del form
let fullName; //nome completo
let km; //chilometri da percorrere
let discount; //sconto


//Creazione del biglietto
submit.addEventListener("click", function(){
    //Input
    fullName = document.getElementById("fullName").value; //prendo il nome completo
    km = document.getElementById("km").value; //prendo i chilometri da percorrere
    discount = document.getElementById("discount").value; //prendo lo sconto da applicare

    

});