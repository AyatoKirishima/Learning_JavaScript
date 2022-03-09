"use strict"
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

// Affichage des régions dans le select
fetch("https://geo.api.gouv.fr/regions").then(response => {
    console.log(response)
    return response.json();
}).then(result => {
    let i = 0;
    result.forEach(element => {
        // get reference to select element
        let sel = document.getElementById('region');

        // create new option element
        let opt = document.createElement('option');

        // create text node to add to option element (opt)
        opt.appendChild(document.createTextNode(result[i].nom));

        // set value property of opt
        opt.value = result[i].code;

        // add opt to end of select box (sel)
        sel.appendChild(opt);

        i++;
    });
    console.log(result);
})

// Lors d'un changement de région, on réexécute la fonction departement
let element = document.getElementById("region");
// console.log(element);
element.addEventListener('change', departement);

// Affichage des départements dans le select
function departement() {
    // Vider le select
    $("#departement").empty();
    // Récupération du code région : document.getElementById("region").value
    fetch("https://geo.api.gouv.fr/regions/" + document.getElementById("region").value + "/departements ").then(response => {
        console.log(response)
        return response.json();
    }).then(result => {
        let i = 0;
        result.forEach(element => {
            // get reference to select element
            let sel = document.getElementById('departement');

            // create new option element
            let opt = document.createElement('option');

            // create text node to add to option element (opt)
            opt.appendChild(document.createTextNode(result[i].nom));

            // set value property of opt
            opt.value = result[i].code;

            // add opt to end of select box (sel)
            sel.appendChild(opt);

            i++;
        });
        console.log(result);
    })
}
