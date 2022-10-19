

/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/

const ulElement = document.querySelector(".randomNumber")
const timerElement = document.querySelector("h1")
// Visualizzare in pagina 5 numeri casuali.

const randomNumbers = []

// funzione per generare un numero casuale 
function numberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// funzione per inserire un numero casuale dentro il nostro array


/**
 * 
 * @param {variable} arrayName nome del nostro array
 * @param {number} maxLenght lunghezza massima che vogliamo del nostro array
 * @param {number} min numero minimo da dove partire per generare un numero casuale
 * @param {number} max numero massimo da dove partire per generare un numero casuale
 */

function pushNumbers(arrayName, maxLenght, min, max) {
    while (arrayName.length !== maxLenght) {
        const generator = numberGenerator(min, max)
        if (!arrayName.includes(generator)) {
            arrayName.push(generator)
        }
    }
}

pushNumbers(randomNumbers, 5, 1, 100)
console.log(randomNumbers); //<--- ATTIVARE QUESTO CONSOLE LOG SE SI VUOLE AVERE I NUMERI IN CONSOLE




for (let index = 0; index < randomNumbers.length; index++) {
    let element = randomNumbers[index];
    //console.log(element);
    let liElement = document.createElement("li")
    ulElement.append(liElement)
    liElement.append(element)
}

let prompts

let id

let seconds = 30  // <--- cambiare i secondi del gioco


    id = setInterval(function () {
        timerElement.innerHTML = seconds
        seconds--
        if (seconds < 0) {
            timerElement.classList.add("hide")
            const ulEl = document.querySelector(".randomNumber")
            ulEl.classList.add("hide")
            prompts = setInterval(function () {
                promptsCicle(0, 5)
                clearInterval(prompts)
            }, 1000)
            clearInterval(id)
        }
    }, 1000)

let userNumberChoise = []

counter = 0
const numberWin = document.querySelector(".numbersWin")
const results = document.querySelector("h2")

function promptsCicle(min, max) {
    for (let index = min; index < max; index++) {
        const userNumbers = Number(prompt("inserisci numero"))
            userNumberChoise.push(userNumbers);
            console.log(userNumberChoise);
    }
    for (let index = 0; index < randomNumbers.length; index++) {
        const element = randomNumbers[index];
        const elementSecond = userNumberChoise[index]
        console.log(element);
        console.log(elementSecond);
        if (randomNumbers.includes(userNumberChoise[index])) {
            counter++
            console.log(userNumberChoise[index], counter, "sono il counter!");
            results.innerHTML = "Hai indovinato " + counter + " numeri"
            document.querySelector("h3").innerHTML ="Ecco i numeri che ti sei ricordato"
            const alternativeLi = document.createElement("li")
            numberWin.append(alternativeLi)
            alternativeLi.append(userNumberChoise[index])
        }
    }
} 






