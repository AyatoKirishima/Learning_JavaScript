"use strict";

const mainDiv = document.querySelector("#main-div");

// Adapter sans utiliser innerHTML
// const appendDiv = () => {
//   mainDiv.innerHTML = mainDiv.innerHTML + "<div>Appended div!</div>";
// }

const appendDiv = () => {
  mainDiv.innerHTML = mainDiv.innerHTML + "<div>Appended div!</div>";
};

mainDiv.querySelector("button").addEventListener("click", appendDiv);
