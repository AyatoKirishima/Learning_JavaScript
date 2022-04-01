"use strict";

// SearchBar
function mySearchFunction() {
    // Declare variables
    let input, filter, ul, listePoke, item, i, txtValue;
    // User Input
    input = document.getElementById("poke-filter");
    // Filter, makes search not case sensitive
    filter = input.value.toUpperCase();
    // Grabs the parent element by id
    ul = document.getElementById("poke-list");
    // Individual item on list
    listePoke = ul.getElementsByTagName("li");

    // Treats lists items like an array, where each item can be accessed through it's index
    for (i = 0; i < listePoke.length; i++) {
        item = listePoke[i];
        // Iterate over each list item to see if the value of the input, ignoring  case, matches the inner text or inner html of the item.
        txtValue = item.textContent || item.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            // Displays list items that are a match, and nothing if no match
            listePoke[i].style.display = "";
        } else {
            listePoke[i].style.display = "none";
        }
    }
}
// End SearchBar


/*
* Par la magie du getElementById, cela selectionne bien l'élément
* Cependant pas possible de le manipuler comme avec un query selector :(
* let pokeSelect = document.getElementById("poke-list");
* console.log(pokeSelect);
* console.log(pokeSelect.firstElementChild);
* Aucune idée pourquoi
 */

let list = document.querySelector("ol[id='poke-list']");

function clearList() {
    // looping through each child of the search results list and remove each child
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }
}

// clear the actual list in the html
clearList();

fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0").then(response => {
    return response.json();
}).then(result => {
    console.log(result);

    /* On cherche la longueur maximale de l'array 
    * (results est l'array) : results: Array(151)
    * Sinon on obtient un "undefined"
     */
    console.log(result.results.length);
    let max = result.results.length;


    for (let i = 0; i < max; i++) {
        // supprimer décalage entre JSON et numéro poke
        let j = i + 1;

        /*
        * Ajout des <> infos des pokemons dans la poke-list
         */
        function creaListePoke() {
            let listePoke = document.createElement('li');
            listePoke.id = result.results[i].name;
            listePoke.value = j;
            listePoke.onclick = update;
            list.appendChild(listePoke);
            let imgPoke = document.createElement('img');
            imgPoke.onerror = "this.onerror=null;this.src='assets/poke-icons/0.png';"
            imgPoke.src = "assets/poke-icons/" + j + ".png"
            listePoke.appendChild(imgPoke);
            if (j < 10) {
                let nbPokemon = "00" + j;
                listePoke.insertAdjacentHTML("beforeEnd", nbPokemon + " - " + capitalizeFirstLetter(result.results[i].name));
            }
            else if (j < 100) {
                let nbPokemon = "0" + j;
                listePoke.insertAdjacentHTML("beforeEnd", nbPokemon + " - " + capitalizeFirstLetter(result.results[i].name));
            }
            else {
                let nbPokemon = j;
                listePoke.insertAdjacentHTML("beforeEnd", nbPokemon + " - " + capitalizeFirstLetter(result.results[i].name));
            }
        }
        creaListePoke();

        function clearActive() {
            let olPokeList = document.querySelector("ol[id='poke-list']");
            if (olPokeList.hasChildNodes) {
                let olPokeListChildren = olPokeList.children;
                for (let i = 0; i < olPokeListChildren.length; i++) {
                    olPokeListChildren[i].setAttribute('class', '');
                }
            }
        }

        function update() {
            clearActive();
            this.setAttribute('class', 'active');
            let spanTitle = document.querySelector("span[id='poke-title']");

            if (j < 10) {
                let nbPokemon = "00" + j;
                spanTitle.innerHTML = "#" + nbPokemon + " - " + capitalizeFirstLetter(result.results[i].name);
            }
            else if (j < 100) {
                let nbPokemon = "0" + j;
                spanTitle.innerHTML = "#" + nbPokemon + " - " + capitalizeFirstLetter(result.results[i].name);
            }
            else {
                let nbPokemon = j;
                spanTitle.innerHTML = "#" + nbPokemon + " - " + capitalizeFirstLetter(result.results[i].name);
            }

            let detailsPoke = document.querySelector("div[id='poke-details']");
            detailsPoke.firstElementChild.firstElementChild.src = "assets/poke-img/" + j + ".png";
            let iconPoke = document.querySelector("h1");
            iconPoke.firstElementChild.src = "assets/poke-icons/" + j + ".png";

            fetch("https://pokeapi.co/api/v2/pokemon/" + j + "/").then(response => {
                return response.json();
            }).then(result => {

                let typesPoke = document.querySelector("div[id='poke-types']");
                let max = result.types.length;
                console.log("max : " + max);

                // Clear all types (sinon ça se stack à l'infini)
                while (typesPoke.firstChild) {
                    typesPoke.removeChild(typesPoke.firstChild);
                }

                let i = 0;
                for (i = 0; i < max; i++) {
                    let imgTypesPoke = document.createElement('img');
                    imgTypesPoke.onerror = "this.onerror=null;this.src='assets/poke-icons/0.png';"
                    imgTypesPoke.src = "assets/poke-types//" + result.types[i].type.name + ".gif"
                    typesPoke.appendChild(imgTypesPoke);
                }

                let poidsPoke = document.querySelector("span[id='poke-weight']");
                // console.log(poidsPoke);
                // console.log(result.weight);
                poidsPoke.innerHTML = result.weight;

                let taillePoke = document.querySelector("span[id='poke-height']");
                taillePoke.innerHTML = result.height;

                let valeurVitesse = result.stats[5].base_stat;
                let vitesse = document.querySelector("li[id = 'poke-speed'] .progress-bar");
                vitesse.style = "width: " + valeurVitesse + "px";
                vitesse.innerHTML = valeurVitesse;

                let valeurHp = result.stats[0].base_stat;
                let hp = document.querySelector("div[class='progress-bar']");
                hp.style = "width: " + valeurHp + "px";
                hp.innerHTML = valeurHp;

                let valeurAttaque = result.stats[1].base_stat;
                let attaque = document.querySelector("li[id = 'poke-attack'] .progress-bar");
                attaque.style = "width: " + valeurAttaque + "px";
                attaque.innerHTML = valeurAttaque;

                let valeurDefense = result.stats[2].base_stat;
                let defense = document.querySelector("li[id = 'poke-defense'] .progress-bar");
                defense.style = "width: " + valeurDefense + "px";
                defense.innerHTML = valeurDefense;

                let valeurAttaqueSpe = result.stats[3].base_stat;
                let attaqueSpe = document.querySelector("li[id = 'poke-special-attack'] .progress-bar");
                attaqueSpe.style = "width: " + valeurAttaqueSpe + "px";
                attaqueSpe.innerHTML = valeurAttaqueSpe;

                let valeurDefenseSpeciale = result.stats[4].base_stat;
                let defenseSpeciale = document.querySelector("li[id = 'poke-special-defense'] .progress-bar");
                defenseSpeciale.style = "width: " + valeurDefenseSpeciale + "px";
                defenseSpeciale.innerHTML = valeurDefenseSpeciale;

            })

        }

    }
})

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}