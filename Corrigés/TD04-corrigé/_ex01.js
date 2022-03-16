"use strict";

const btnElement = document.querySelector("button");
const resultElement = document.querySelector("#result");

btnElement.addEventListener("click", () => {
  btnElement.setAttribute("disabled", "true");
  resultElement.innerHTML = "<i>-- Loading your cat fact --</i>";
  fetch("https://meowfacts.herokuapp.com/")
    .then((response) => response.json())
    .then((result) => {
      btnElement.removeAttribute("disabled");
      resultElement.innerHTML = result.data[0];
    });
});
