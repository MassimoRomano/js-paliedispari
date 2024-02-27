// Chiedo all'utente di inseire una parola
const word = prompt("Inserisci una parola");

//definisco la funzione per verificare se la parola inserita dall'utente sia un palindromo
function isPal(word){


//aggiungo una variabile vuota per poi inseire la parola invertita
    let invertWord = '';
    

//avvio un ciclo for per invertire la parola
for(let i = 0 ; word.lenght -1 ; i >= 0 ; i-- ){
    invertWord += word[i];
}
}