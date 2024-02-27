console.log('funziona');

// Chiedo all'utente di inseire una parola
const word = prompt("Inserisci una parola");

// Definisco la funzione per verificare se la parola inserita dall'utente sia un palindromo
function isPal(word) {
    // Aggiungo una variabile vuota per poi inserire la parola invertita
    let invertWord = '';

    // Avvio un ciclo for per invertire la parola
    for (let i = word.length - 1; i >= 0; i--) {
        invertWord += word[i];
    }

    // Aggiungo if e else per farmi dire se la parola scritta e poi invertita risulta un palindromo
    if (word === invertWord) {
        return true;
       
    } else {
        return false;
    }
}

// Chimo la funziona e la stampo in console per vedere il risultato
if (isPal(word)){
    console.log(`La parola "${word}" e un palindromo`); 
}else{
    console.log(`La parola "${word}" non e un palindromo`);
}