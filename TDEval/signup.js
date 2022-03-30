"use strict";


// Password Strengh verification
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
    var missing_elements = document.getElementById("missing_elements");
    var strength = "";
    switch (passed) {
        case 0:
        case 1:
        case 2:
            strength = "<div class='progress-bar bg-danger' style='width: 40%'>Weak</div>";
            missing_elements.innerHTML = "Add these to increase the password strenght :<ul><li>Uppercase Letters</li><li>Lowercase Letters</li><li>Numbers</li><li>Special Character</li></ul>";
            break;
        case 3:
            strength = "<div class='progress-bar bg-warning' style='width: 60%'>Medium</div>";
            break;
        case 4:
            strength = "<div class='progress-bar bg-success' style='width: 100%'>Strong</div>";
            missing_elements.innerHTML = "";
            break;

    }
    password_strength.innerHTML = strength;

}