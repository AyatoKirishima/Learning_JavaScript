"use strict";

const form = document.querySelector("form");

const validateForm = () => {
    var nom = document.getElementById("last-name");
    // Logique pour vérifier le formulaire ici
    if (nom.value == "") {
        alert("Mettez votre nom.");       
        document.querySelector("label[for='last-name'] span.error-msg").innerHTML = 'Veuillez entrer votre nom';
        nom.focus();
        return false;
    }
    return true;
};

form.addEventListener("submit", (event) => {
    if (!validateForm()) {
        event.preventDefault();
    }
});