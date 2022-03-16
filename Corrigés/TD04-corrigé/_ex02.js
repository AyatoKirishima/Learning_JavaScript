"use strict";

const regionSelect = document.getElementById("region");
const departementSelect = document.getElementById("departement");
const communeSelect = document.getElementById("commune");

const generateEmptyOption = (text) => {
  return `<option value='null'>-- ${text} --</option>`;
};

const disableSelect = (element, disableText) => {
  element.innerHTML = generateEmptyOption(disableText);
  element.setAttribute("disabled", "true");
};

const getRegions = () => {
  return fetch("https://geo.api.gouv.fr/regions").then((response) =>
    response.json()
  );
};

const populateRegions = () => {
  regionSelect.innerHTML = generateEmptyOption("Chargement des régions...");
  getRegions().then((regions) => {
    regionSelect.innerHTML = generateEmptyOption("Sélectionnez une région");
    regions.forEach((region) => {
      const option = document.createElement("option");
      option.setAttribute("value", region.code);
      option.innerText = region.nom;
      regionSelect.appendChild(option);
    });
  });
};

const getDepartements = (regionCode) => {
  return fetch(
    `https://geo.api.gouv.fr/regions/${regionCode}/departements`
  ).then((response) => response.json());
};

const populateDepartements = (regionCode) => {
  disableSelect(departementSelect, "Chargement des départements...");
  getDepartements(regionCode).then((departements) => {
    departementSelect.removeAttribute("disabled");
    departementSelect.innerHTML = generateEmptyOption(
      "Sélectionnez un département"
    );
    departements.forEach((departement) => {
      const option = document.createElement("option");
      option.setAttribute("value", departement.code);
      option.innerText = departement.nom;
      departementSelect.appendChild(option);
    });
  });
};

const getCommunes = (departementCode) => {
  return fetch(
    `https://geo.api.gouv.fr/departements/${departementCode}/communes`
  ).then((response) => response.json());
};

const populateCommunes = (departementCode) => {
  disableSelect(communeSelect, "Chargement des communes...");
  getCommunes(departementCode).then((communes) => {
    communeSelect.removeAttribute("disabled");
    communeSelect.innerHTML = generateEmptyOption("Sélectionnez une commune");
    communes.forEach((commune) => {
      const option = document.createElement("option");
      option.setAttribute("value", commune.code);
      option.innerText = commune.nom;
      communeSelect.appendChild(option);
    });
  });
};

const addEventListeners = () => {
  regionSelect.addEventListener("change", (event) => {
    disableSelect(communeSelect, "Choisissez d'abord un département");
    if (event.target.value === "null") {
      disableSelect(departementSelect, "Choisissez d'abord une région");
      return;
    }
    populateDepartements(event.target.value);
  });
  departementSelect.addEventListener("change", (event) => {
    if (event.target.value === "null") {
      disableSelect(communeSelect, "Choisissez d'abord un département");
      return;
    }
    populateCommunes(event.target.value);
  });
};

disableSelect(departementSelect, "Choisissez d'abord une région");
disableSelect(communeSelect, "Choisissez d'abord un département");
populateRegions();
addEventListeners();
