"use strict";

document.querySelector("main").addEventListener("click", (event) => {
  logEvent("Click event caught on MAIN"); //inutile de stopper la propagation : il n'y a qu'un élément
});

document.querySelector("#outer-div").addEventListener("click", (event) => {
  logEvent("Click event caught on DIV");
  // event.preventDefault();
  event.stopPropagation();
});

document.querySelector("#main-button").addEventListener("click", (event) => {
  logEvent("Click event caught on BUTTON");
  event.stopPropagation();
});
