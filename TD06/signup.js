"use strict";

// HTML Nodes
const form = document.querySelector("main");
console.log(form);
const allFormItems = form.querySelectorAll("label");
console.log(allFormItems);

// Gets the root element of a form item based on the "for"
// attribute of its label element
const getFormItemRoot = (name) => {
    return document.querySelector(`label[for='${name}']`);
};

// Checks if a supplied email is valid or not
const validateEmail = (email) => {
    return email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

// Returns an array of strings with descriptions of the problems
// found with a supplied password
const checkPasswordIssues = (password) => {
    const problems = [];
    if (!password.match(/(?=.*[A-Z])/)) {
        problems.push(
            "Le mot de passe doit contenir au moins 1 caractères majuscule"
        );
    }
    if (!password.match(/(?=.*[0-9])/)) {
        problems.push("Le mot de passe doit contenir au moins 1 chiffre");
    }
    if (!password.match(/(?=.{8,})/)) {
        problems.push("Le mot de passe doit faire 8 caractères minimum");
    }
    return problems;
};

// Checks if any kind of form item is valid
const validateFormItem = (name) => {
    // Get constants and reset field error message
    const root = getFormItemRoot(name);
    // Safety check
    if (!root) {
        throw new Error("Field " + name + " doesn't exist in this form");
    }
    // If the field is hidden, value is assumed valid
    if (root.style.display === "none") {
        return true;
    }
    const errorMsg = root.querySelector(".error");
    errorMsg.innerText = "";
    // Do the check
    switch (name) {
        case "email":
            // Check if the value is an email
            const valueMail = root.querySelector("input").value;
            if (!validateEmail(valueMail)) {
                errorMsg.innerText = "Veuillez saisir un e-mail valide";
                return false;
            }
            return true;
        case "password":
            // Check password requirements
            const valuePassword = root.querySelector("input").value;
            const passwordIssues = checkPasswordIssues(valuePassword);
            if (passwordIssues.length > 0) {
                errorMsg.innerText = passwordIssues.join(", ");
                return false;
            }
            return true;
        case "password-confirm":
            // Check if the confirm field matches the original
            const valuePasswordConfirm = root.querySelector("input").value;
            const originalValuePassword = document.querySelector(
                "input[name='password']"
            ).value;
            if (originalValuePassword !== valuePasswordConfirm) {
                errorMsg.innerText =
                    "La confirmation de mot de passe ne correspond pas";
                return false;
            }
            return true;
        case "terms-accept":
            // Checks if the checkbox is checked
            const checkbox = root.querySelector("input:checked");
            if (checkbox === null) {
                errorMsg.innerText = "Veuillez accepter les termes avant de continuer";
                return false;
            }
            return true;
        default:
            console.warn("No check for field", name);
            return true;
    }
};


// Validate the entire form
const validateForm = () => {
    let formIsValid = true;
    allFormItems.forEach((formItem) => {
        const validateResult = validateFormItem(formItem.getAttribute("for"));
        if (formIsValid) {
            formIsValid = validateResult;
        }
    });
    if (!formIsValid) {
        alert("Veuillez vérifier le formulaire");
    }
    return formIsValid;
};

// Add change events
document
    .querySelectorAll(
        "form input[type='radio'], form select, form input[type='date'], form input[type='checkbox']"
    )
    .forEach((node) => {
        node.addEventListener("change", () => {
            validateFormItem(node.getAttribute("name"));
        });
    });
// Add blur events
document
    .querySelectorAll("input[type='text'], input[type='password']")
    .forEach((node) => {
        node.addEventListener("blur", () => {
            validateFormItem(node.getAttribute("name"));
        });
    });

// Add form checker
form.addEventListener("submit", (event) => {
    if (!validateForm()) {
        event.preventDefault();
    }
});