"use strict"

fetch("https://reqres.in/api/users/2").then(response => {
    return response.json();
}).then(result => {
    console.log(result.data.email);
})