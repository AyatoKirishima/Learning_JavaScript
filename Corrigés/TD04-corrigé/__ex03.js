"use strict";

const comicTitle = document.querySelector(".comic-container h2");
const comicImg = document.querySelector(".comic-container img");
const comicDescription = document.querySelector(".comic-container small");

const DEFAULT_IMG_SRC = "https://place-hold.it/600x300";

const getComicData = async (comicId) => {
  const response = await fetch(`https://xkcd.com/${comicId}/info.0.json`);
  if (response.ok) {
    return await response.json();
  } else {
    throw response;
  }
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

document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();
  setComicLoadingState();
  try {
    const data = await getComicData(document.querySelector("input").value);
    comicTitle.innerText = data.title;
    comicImg.setAttribute("src", data.img);
    comicImg.setAttribute("alt", data.alt);
    comicDescription.innerText = data.alt;
  } catch (error) {
    console.error(error);
    setComicErrorState(
      error.status,
      error.status === 404 ? "The comic doesnt exist" : undefined
    );
  }
});
