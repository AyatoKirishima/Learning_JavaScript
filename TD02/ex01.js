"use strict";

const mainDiv = document.querySelector("#main-div");

// Adapter sans utiliser innerHTML
// const appendDiv = () => {
//   mainDiv.innerHTML = mainDiv.innerHTML + "<div>Appended div!</div>";
// }

const appendDiv = () => {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Oy oy oy");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("main-div");
  // document.body.insertBefore(newDiv, currentDiv); 
  $("div").append("Hello");
  // Permet de remplacer le texte de la 'main-div'
  // document.getElementById('main-div').textContent = 'oy oy oy';
};

mainDiv.querySelector("button").addEventListener("click", appendDiv);
