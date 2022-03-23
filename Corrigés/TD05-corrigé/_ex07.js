"use strict";

// Constants
const INTERVAL_TIME = 3 * 1000;
const elementGallery = $("#gallery");
const elementImages = $("#gallery .thumbnails .image-container img");
const elementMainImage = $("#gallery .main-picture-container img");
const elementDescription = $("#gallery .main-picture-container .description");
const elementFullScreenContainer = $(".full-screen-container");

// Variables
let selectedIndex = 0;
let intervalRef = null;
let isFullScreen = false;

// Set the focus of an image
const focusImage = (index) => {
  selectedIndex = index;
  elementMainImage.attr("src", $(elementImages[index]).attr("src"));
  elementDescription.innerText = $(elementImages[index]).attr("alt");
  $("#gallery .thumbnails .image-container img.active").removeClass("active");
  $(elementImages[index]).addClass("active");
};

// Thumbnail click handler script
elementImages.each((index, image) => {
  $(image).on("click", () => focusImage(index));
});

// Prev/Next image script handlers
const selectPreviousImage = () => {
  if (selectedIndex === 0) {
    focusImage(elementImages.length - 1);
  } else {
    focusImage(selectedIndex - 1);
  }
};

const selectNextImage = () => {
  if (selectedIndex === elementImages.length - 1) {
    focusImage(0);
  } else {
    focusImage(selectedIndex + 1);
  }
};

// Back/Next button handlers
$("#back-btn").on("click", selectPreviousImage);
$("#next-btn").on("click", selectNextImage);

// Left/Right arrow key handler
window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    selectNextImage();
  }
  if (event.key === "ArrowLeft") {
    selectPreviousImage();
  }
});

// Interval handlers
const createCycleInterval = () => {
  if (intervalRef === null && !isFullScreen) {
    console.log("cycle created");
    intervalRef = setInterval(selectNextImage, INTERVAL_TIME);
  }
};

const removeCycleInterval = () => {
  if (intervalRef !== null) {
    console.log("cycle removed");
    clearInterval(intervalRef);
    intervalRef = null;
  }
};

// Apply interval by default
createCycleInterval();

// MouseEnter/MouseLeave events
elementGallery.on("mouseenter", removeCycleInterval);
elementGallery.on("mouseleave", createCycleInterval);

// Fullscreen click handler
elementFullScreenContainer.on("click", () => {
  isFullScreen = false;
  elementFullScreenContainer.html("");
  createCycleInterval();
  $("body").css("overflow", "auto");
});
elementMainImage.on("click", () => {
  isFullScreen = true;
  elementFullScreenContainer.html(elementMainImage.prop("outerHTML"));
  removeCycleInterval();
  $("body").css("overflow", "hidden");
});
