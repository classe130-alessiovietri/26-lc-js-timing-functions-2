/* 
    Il programma chiede all’utente quanti secondi mancano alla cottura della pasta.
    Dopo il tempo indicato, appare un alert().

    Passi da eseguire:
    1) Chiedo all'utente un numero
    2) Avvio un setTimeout da eseguire dopo "numero inserito" * 1000 millisecondi (che rappresenta 1 secondo)
    3) Al termine del tempo stabilito, faccio apparire un alert
*/

// const initSeconds = parseInt(prompt('Tra quanti secondi sarà cotta la pasta?'));
// console.log('initSeconds', initSeconds, typeof initSeconds);

// if (isNaN(initSeconds)) {
//     alert('Valore non valido');
// }
// else {
//     setTimeout(function () {
//         alert('La pasta è cotta!');
//     }, initSeconds * 1000);
// }

/* 
    Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"

    Passi da seguire:
    1) Creo un contatore di 10
    2) Avvio un setInterval che ad ogni esecuzione decrementa il contatore
    3) Quando il contatore arriva a 0, parte un messaggio per l'utente e stoppo l'intervallo
*/

let counter = 10;

let clock = setInterval(function () {
    console.log(counter);

    if (counter == 0) {
        alert('Buon anno!');

        clearInterval(clock);
        clock = null;
    }
    else {
        counter--;
    }
}, 1000);