// Ottieni la scelta dell'utente (trasformata in minuscolo per uniformità)
const userSelect= prompt('Pari o dispari').toLowerCase();

// Ottieni un numero dall'utente compreso tra 1 e 5
const userChoice = parseInt(prompt('Scegli un numero da 1 a 5'));

// Genera un numero casuale per il computer compreso tra 1 e 5
const pcChoice = Math.round(Math.random() * 5) + 1;

// Stampa la scelta dell'utente, il numero dell'utente e il numero del computer
console.log(userSelect);
console.log(userChoice);
console.log(pcChoice);


// Calcola la somma dei numeri dell'utente e del computer
let sum = userChoice + pcChoice;
// Stampa la somma
console.log(sum);

// Inserisco una variabile vuota per inseire il risultato della somma
let message = "";


// Funzione per determinare il risultato del gioco (se l'utente ha vinto o perso)
function game(userSelect, userChoice) {
     // se la somma dei numeri e pari l'utente ha vinto
     if (sum % 2 == 0 && userSelect == 'pari') {
        return message = 'Hai vinto!';
    // Se la somma dei numeri e dispari e l'utente ha scelto dispari ha vinto
    } else if (sum % 2 ==- 1 && userSelect == 'dispari') {
        return message = 'Hai vinto!';
    // Altrimenti, l'utente perde
    } else {
        return message = 'Hai perso!';
    }
}

// Chiama la funzione per determinare il risultato del gioco e visualizza un alert con il risultato
alert(game(userSelect, userChoice));