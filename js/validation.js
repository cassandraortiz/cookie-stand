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

function validateNull(){
    var ele = locationForm.elements;
    var verified = true; 
    console.log('length: ' + ele.length);
    for (var e = 0; e < ele.length; e++){
        if(ele[e].type = 'text'){
            alert('good job!')
        }
    }
    console.log(verified);
    return verified;
}
// ============================================
// locationAdd - Add new Row to SalesTable
// ============================================
// var locationForm = document.getElementById('locationAdd-form');
// locationForm.addEventListener('submit', addLocation);


// function addLocation(event){
//     event.preventDefault();
//     var locationName = event.target.elCity.value;
//     var locationMax = parseInt(event.target.elMax.value); 
//     var locationMin = parseInt(event.target.elMin.value);
//     var locationAvg = parseInt(event.target.elAvg.value);

//     new Location(locationName,locationMin, locationMax, locationAvg);
    
//     var x = allLocations.length-1;

//     allLocations[x].customerPerHr();
//     allLocations[x].calcHourlyCookies();
//     allLocations[x].addSaleToTable();

//     document.getElementById('salesTableTotal').deleteRow(0);
//     tableFooterSetup();

//     event.target.elCity.value = null;
//     event.target.elMax.value = null;
//     event.target.elMin.value = null;
//     event.target.elAvg.value = null;
// }