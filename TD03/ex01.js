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
    // Reset tous les error msg du formulaire    
    const clear = document.querySelectorAll("span.error-msg");

    for (let index = 0; index < clear.length; index++) {
        clear[index].innerHTML = "";
    }

    // Check des champs
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

    if ((email.value == "") && (validateEmail(email.value) == false)) {
        document.querySelector("label[for='email'] span.error-msg").innerHTML = 'Veuillez entrer votre email';
        email.focus();
        isValid = false;
    } else if (validateEmail(email.value) == false) {
        document.querySelector("label[for='email'] span.error-msg").innerHTML = 'Veuillez entrer un email valide';
        email.focus();
        isValid = false;
    }

    if (adresse.value == "") {
        document.querySelector("label[for='address'] span.error-msg").innerHTML = 'Veuillez entrer votre adresse';
        adresse.focus();
        isValid = false;
    }

    if (codePost.value == "") {
        document.querySelector("label[for='postal-code'] span.error-msg").innerHTML = 'Veuillez entrer votre code postal';
        codePost.focus();
        isValid = false;
    } else if (codePost.value.length != 5) {
        document.querySelector("label[for='postal-code'] span.error-msg").innerHTML = 'Veuillez entrer un code postal valide';
        codePost.focus();
        isValid = false;
    }

    if (ville.value == "") {
        document.querySelector("label[for='city'] span.error-msg").innerHTML = 'Veuillez entrer votre ville';
        ville.focus();
        isValid = false;
    }

    if ((numTel.value == "") && (validateNumTel(numTel.value) == false)) {
        document.querySelector("label[for='phone'] span.error-msg").innerHTML = 'Veuillez entrer votre numéro de téléphone';
        numTel.focus();
        isValid = false;
    } else if (validateNumTel(numTel.value) == false) {
        document.querySelector("label[for='phone'] span.error-msg").innerHTML = 'Veuillez entrer un numéro de téléphone valide';
        numTel.focus();
        isValid = false;
    }

    if (mdp.value == "") {
        document.querySelector("label[for='password'] span.error-msg").innerHTML = 'Veuillez entrer un mot de passe';
        mdp.focus();
        isValid = false;
    }

    if (mdp.value != mdpConfirm) {
        document.querySelector("label[for='password-confirm'] span.error-msg").innerHTML = 'Les mdp ne sont pas identiques';
        mdpConfirm.focus();
        isValid = false;
    }

    return isValid;
};

form.addEventListener("submit", (event) => {
    if (!validateForm()) {
        event.preventDefault();
    }
});

function validateEmail(email) {
    // '\S' = anything but a whitespace character
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validateNumTel(numTel) {
    // global search for non-digit characters
    var isnum = /^\d+$/;
    return isnum.test(numTel);
} 
