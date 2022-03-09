"use strict"

// function getRegions() {

// }

// Add element to a select
// get reference to select element
var sel = document.getElementById('region');

// create new option element
var opt = document.createElement('option');

// create text node to add to option element (opt)
opt.appendChild(document.createTextNode('New Option Text'));

// set value property of opt
opt.value = 'option value';

// add opt to end of select box (sel)
sel.appendChild(opt);


fetch("https://geo.api.gouv.fr/regions").then(response => {
    console.log(response)
    return response.json();
}).then(result => {
    console.log(result.data);
    // document.querySelector("select[id='region']").innerHTML = result.data;
})