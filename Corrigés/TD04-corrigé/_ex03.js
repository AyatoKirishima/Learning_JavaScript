"use strict";

const comicTitle = document.querySelector(".comic-container h2");
const comicImg = document.querySelector(".comic-container img");
const comicDescription = document.querySelector(".comic-container small");

const DEFAULT_IMG_SRC = "https://place-hold.it/600x300";

const getComicData = (comicId) => {
  return fetch(`https://xkcd.com/${comicId}/info.0.json`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw response;
    }
  });
};

const setComicLoadingState = () => {
  comicTitle.innerText = "Loading Comic...";
  comicImg.setAttribute("src", DEFAULT_IMG_SRC);
  comicImg.setAttribute("alt", "Loading comic...");
  comicDescription.innerText = "Loading comic...";
};

const setComicErrorState = (
  code = "",
  fluffText = "A problem occured while getting the comic information"
) => {
  comicTitle.innerText = `Error ${code}`;
  comicImg.setAttribute("src", DEFAULT_IMG_SRC);
  comicImg.setAttribute("alt", "Comic error");
  comicDescription.innerText = fluffText;
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  setComicLoadingState();
  getComicData(document.querySelector("input").value)
    .then((data) => {
      comicTitle.innerText = data.title;
      comicImg.setAttribute("src", data.img);
      comicImg.setAttribute("alt", data.alt);
      comicDescription.innerText = data.alt;
    })
    .catch((error) => {
      console.error(error);
      setComicErrorState(
        error.status,
        error.status === 404 ? "The comic doesnt exist" : undefined
      );
    });
});
