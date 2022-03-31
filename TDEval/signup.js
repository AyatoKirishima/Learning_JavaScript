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
    console.log(name, errorMsg);
    if (errorMsg !== null) {
        errorMsg.innerText = "";
    }

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
        // This one doesn't work check html :) (required)
        case "terms":
            // Checks if the checkbox is checked
            const checkbox = root.querySelector("input:checked");
            if (checkbox === null) {
                errorMsg.innerText = "Veuillez accepter les termes avant de continuer";
                return false;
            }
            return true;
        case "captcha":
            // checkCapchat();
            const k1 = root.querySelector("input:checked");
            console.log(k1);

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
    try {
        if (!validateForm()) {
            event.preventDefault();
        }
    } catch (error) {
        event.preventDefault();
        console.log(error);
    }

});

// checkCapchat();

// ----------------------------------------------------- Options ----------------------------------------------------- //
// Captchat 

function checkCapchat() {
    const k1 = root.querySelector("input:checked");
    console.log(k1);
}

// Password Strengh verification

// Returns an array of strings with descriptions of the problems
// found with a supplied password
const checkPasswordIssues = (password) => {
    const problems = [];
    if (!password.match(/(?=.*[A-Z])/)) {
        problems.push(
            ", Le mot de passe doit contenir au moins 1 caractères majuscule\n"
        );
    }
    if (!password.match(/(?=.*[0-9])/)) {
        problems.push("Le mot de passe doit contenir au moins 1 chiffre\n");
    }
    if (!password.match(/(?=.{8,})/)) {
        problems.push("Le mot de passe doit faire 8 caractères minimum\n");
    }
    if (!password.match(/(?=.[$@$!%*#?&])/)) {
        problems.push("Le mot de passe doit contenir un caractère spécial\n");
    }
    return problems;
};

function isGood(password) {
    var password_strength = document.getElementById("password-text");

    //TextBox left blank.
    if (password.length == 0) {
        password_strength.innerHTML = "";
        return;
    }

    //Regular Expressions.
    var regex = new Array();
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.
    regex.push("[$@$!%*#?&]"); //Special Character.

    var passed = 0;

    //Validate for each Regular Expression.
    for (var i = 0; i < regex.length; i++) {
        if (new RegExp(regex[i]).test(password)) {
            passed++;
        }
    }

    //Display status.
    // var missing_elements = document.getElementById("missing_elements");
    var strength = "";
    switch (passed) {
        case 0:
        case 1:
        case 2:
            strength = "<div class='progress-bar bg-danger' style='width: 40%'>Weak</div>";
            // missing_elements.innerHTML = "Add these to increase the password strenght :<ul><li>8 characters min</li><li>Uppercase Letters</li><li>Lowercase Letters</li><li>Numbers</li><li>Special Character</li></ul>";
            break;
        case 3:
            strength = "<div class='progress-bar bg-warning' style='width: 60%'>Medium</div>";
            break;
        case 4:
            strength = "<div class='progress-bar bg-success' style='width: 100%'>Strong</div>";
            // missing_elements.innerHTML = "";
            break;

    }
    password_strength.innerHTML = strength;

}