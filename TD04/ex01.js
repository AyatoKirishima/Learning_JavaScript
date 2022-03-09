"use strict"
let src = "ex01.js";
let element = document.querySelector("button");
// console.log(element);
element.addEventListener('click', getCatFact);
// ne pas mettre de () car sinon cela pointe le return de la fonction

function getCatFact() {
    fetch("https://meowfacts.herokuapp.com").then(response => {
        console.log(response)
        return response.json();
    }).then(result => {
        console.log(result.data);
        document.querySelector("p[id='result']").innerHTML = result.data;
    })
}