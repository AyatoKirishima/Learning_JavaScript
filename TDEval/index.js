"use strict"

/*
* Par la magie du getElementById, cela selectionne bien l'élément
* Cependant pas possible de le manipuler comme avec un query selector
* let pokeSelect = document.getElementById("poke-list");
* console.log(pokeSelect);
* console.log(pokeSelect.firstElementChild);
 */

let pokeSelect = document.querySelector("ol[id='poke-list']");
while (pokeSelect.firstChild) {
    pokeSelect.removeChild(pokeSelect.firstChild);
}

fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0").then(response => {
    return response.json();
}).then(result => {
    console.log(result);

    /* On cherche la longueur maximale de l'array 
    * (results est l'array) : results: Array(151)
    * Sinon on obtient un "undefined"
     */
    console.log(result.results.length);
    let maxLengthArrayPoke = result.results.length;


    function afficherPoke() {
        let elementListePoke = document.createElement("li");
        console.log(capitalizeFirstLetter(result.results[i].name));
        let namePoke = capitalizeFirstLetter(result.results[i].name);
        elementListePoke.id = result.results[i].name;
        elementListePoke.innerHTML = namePoke;
        //elementListePoke.onclick = update;

        pokeSelect.appendChild(elementListePoke);
    }

    let i = 0;
    for (i = 0; i < maxLengthArrayPoke; i++) {
        afficherPoke();
    }
})

// Mettre la première lettre en majuscule
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}