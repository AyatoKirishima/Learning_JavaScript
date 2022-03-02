"use strict";

const form = document.querySelector("form");

const validateForm = () => {
    // Variables (selectors)
    let nom = document.getElementById("last-name");
    let prenom = document.getElementById("first-name");
    let nomNaissance = document.getElementById("maiden-name");
    let email = document.getElementById("email");
    let adresse = document.getElementById("address");
    let codePost = document.getElementById("postal-code");
    let ville = document.getElementById("city");
    let numTel = document.getElementById("phone");
    let mdp = document.getElementById("password");
    let mdpConfirm = document.getElementById("password-confirm");

    let isValid = true;

    if (nom.value == "") {
        document.querySelector("label[for='last-name'] span.error-msg").innerHTML = 'Veuillez entrer votre nom';
        nom.focus();
        isValid = false;
    }
    
    if (prenom.value == "") {
        document.querySelector("label[for='first-name'] span.error-msg").innerHTML = 'Veuillez entrer votre prénom';
        prenom.focus();
        isValid = false;
    }

    if (nomNaissance.value == "") {
        document.querySelector("label[for='maiden-name'] span.error-msg").innerHTML = 'Veuillez entrer votre nom de naissance';
        nomNaissance.focus();
        isValid = false;
    }

    if (email.value == "") {
        document.querySelector("label[for='email'] span.error-msg").innerHTML = 'Veuillez entrer votre nom de naissance';
        email.focus();
        isValid = false;
    }
   return isValid;
};

form.addEventListener("submit", (event) => {
    if (!validateForm()) {
        event.preventDefault();
    }
});