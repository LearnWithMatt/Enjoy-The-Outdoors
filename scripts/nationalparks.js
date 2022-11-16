"use strict";

window.onload = init;


function init(){
    selectLocationShow();
    selectParktypeHide();
    populateLocationOptions();
    populateParktypeOptions();


}


//load up options from data file.
function populateLocationOptions(){

}


//load up options from data file.
function populateParktypeOptions(){

}

//figure out which is the selected optoin, and hide/show the appropriate areas...
function OnSearchTypeChanged(){
    let current = getCurrentlySelectedSearchType();
    if (current == "location"){
        selectLocationShow();
        selectParktypeHide();
    }
    else if (current = "parktype"){
        selectLocationHide();
        selectParktypeShow();
    }
}


function filterParksByParkType(inputParks, parkType){
    let results = [];


    return results;
}


function filterParksByLocation(inputParks, location){
    let results = [];


    return results;
}

//returns "location" or "parktype" depending on current selection
function getCurrentlySelectedSearchType(){

}

function selectLocationHide(){

}

function selectLocationShow(){

}

function selectParktypeHide(){

}

function selectParktypeShow(){

}


function clearSearchResults(){

}


//Add an array of parks to the results div...
function addParksToResults(parks){
    for(let park of parks){
        addParkToResults(park);
    }
}

//Adds a single park to the results div.
function addParkToResults(park){
    const resultsRow = document.getElementById("resultsRow");

    let outerCardDiv = document.createElement("div");
    //create the html to represetn a single park, and add it to the 
    // serach reasults div with "resultsRow" id

    //do all of my styling / content here....


    resultsRow.appendChild(outerCardDiv);
}