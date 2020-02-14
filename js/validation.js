'use strict';

// ============================================
// Validate - input is a Number
// ============================================
var customerData = document.getElementById('CustomerInfo');
customerData.addEventListener('change', validateNumber);

function validateNumber(event){
    if (isNaN(event.target.value)){
        alert('number required');
        event.target.value = "";
        event.target.focus;
    }
}

// =================================================
// Validate - City is not already entered in array
// =================================================
var cityEntry = document.getElementById('elCity');
cityEntry.addEventListener('change', validateCity);

function validateCity(event){

    var entry = event.target.value; 
    entry = entry.toLowerCase();

    for (var i = 0; i < allLocations.length; i++){

        var checkCity = allLocations[i].name;
        checkCity = checkCity.toLowerCase();

        if(checkCity===entry){
            alert('City has already been entered');
            event.target.value = "";
        }
    }
}

// ============================================
// Validate - all fields have an entry
// ============================================
function validateNull(){
    var ele = locationForm.elements;
    var verified = true; 
    for (var e = 0; e < ele.length; e++){
        if(ele[e].type === 'text' && ele[e].value === ""){
            verified = false;
        }
    }
    return verified;
}

// ============================================
// Validate - that the Max# is greater than Min#
// ============================================
function validateMinMax(min, max){
    var checkNumbers = false;
    if(max > min){
        checkNumbers = true;
    }
    return checkNumbers;
}