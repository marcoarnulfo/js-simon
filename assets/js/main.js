console.log("hello");

/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/

const ulElement = document.querySelector("ul")
const timerElement = document.querySelector("h1")
// Visualizzare in pagina 5 numeri casuali.

const randomNumbers = []

// funzione per generare un numero casuale 
function numberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// funzione per inserire un numero casuale dentro il nostro array


/**
 * 
 * @param {variable} arrayName nome del nostro array
 * @param {number} maxLenght lunghezza massima che vogliamo del nostro array
 * @param {number} min numero minimo da dove partire per generare un numero casuale
 * @param {number} max numero massimo da dove partire per generare un numero casuale
 */

function pushNumbers(arrayName, maxLenght, min, max){
    while (arrayName.length !== maxLenght) {
        
        const generator = numberGenerator(min, max)

        if (!arrayName.includes(generator)) {
            arrayName.push(generator)
        }
    }
}

pushNumbers(randomNumbers, 5, 1, 100)
console.log(randomNumbers);



let seconds = 10
let id

//  Da lì parte un timer di 30 secondi.
for (let index = 0; index < randomNumbers.length; index++) {
    let element = randomNumbers[index];
    console.log(element);
    let liElement = document.createElement("li")
    ulElement.append(liElement)
    liElement.append(element)
}  

id = setInterval(function(){  
    timerElement.innerHTML = seconds
    seconds--
    if (seconds === 0) {
            setInterval(function(){
            clearInterval(id)
            timerElement.classList.add("hide")
            const test = document.querySelector("ul")
            test.classList.add("hide")
        },1000)
    }
}, 1000)



/*
if (seconds === 0) {
    for (let index = 0; index < 5; index++) {
        prompt("inserisci, uno alla volta, i numeri che hai visto precedentemente")
    }
}
*/

/*

for (let index = 0; index < randomNumbers.length; index++) {
    let element = randomNumbers[index];
    console.log(element);
    let liElement = document.createElement("li")
    ulElement.append(liElement)
    liElement.append(element)
}

*/








// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().


// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.