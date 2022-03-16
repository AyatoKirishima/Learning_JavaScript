"use strict";

const btnElement = document.querySelector("button");
const resultElement = document.querySelector("#result");

btnElement.addEventListener("click", async () => {
  btnElement.setAttribute("disabled", "true");
  resultElement.innerHTML = "<i>-- Loading your cat fact --</i>";
  const response = await fetch("https://meowfacts.herokuapp.com/");
  const result = await response.json();
  btnElement.removeAttribute("disabled");
  resultElement.innerHTML = result.data[0];
});
