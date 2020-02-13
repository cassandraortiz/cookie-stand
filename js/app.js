'use strict';
// LAB 09
// ==============================
// 1. Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the 'new' keyword, it creates a new instance.

// 2. Replace the lists of your data for each store and build a single table of data instead. It shoudl look similar to the following:

//  Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a "Daily Location Total".


//          | 6:00 am  | 7:00 am | 8:00 am | 9:00 am | 10:00 am | 11:00 am | 12:00 pm | Daily Location Total | 
// ---------|----------|---------|---------|---------|----------|----------|----------|----------------------|
// Seattle  |          |         |         |         |          |          |          |                      |
// ---------|----------|---------|---------|---------|----------|----------|----------|----------------------|
// Tokyo    |          |         |         |         |          |          |          |                      |
// ---------|----------|---------|---------|---------|----------|----------|----------|----------------------|
// Dubai    |          |         |         |         |          |          |          |                      |
// ---------|----------|---------|---------|---------|----------|----------|----------|----------------------|
// Paris    |          |         |         |         |          |          |          |                      |
// ---------|----------|---------|---------|---------|----------|----------|----------|----------------------|
// Lima     |          |         |         |         |          |          |          |                      |
// ---------|----------|---------|---------|---------|----------|----------|----------|----------------------|
// Totals   |          |         |         |         |          |          |          |                      |
// ---------|----------|---------|---------|---------|----------|----------|----------|----------------------|

// - Each cookie stand location should have a separate render() method that creates and appends its row to the table

// - The header row and footer row are each created in their own stand-alone function

// Location | Min / Cust | Max / Cust | Avg Cookie / Sale
// ---------|------------|------------|-------------------
// Seattle  |      23    |     65     |        6.3
// Tokyo    |      3     |     24     |        1.2
// Dubai    |      11    |     38     |        3.7
// Paris    |      20    |     38     |        2.3
// Lima     |      2     |     16     |        4.6


var operatingHours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var franchiseLocations = ['Seattle','Tokyo','Dubai','Paris','Lima'];
var allLocations = [];
var locationTotals = [];
var grandTotal = 0;
var tblBody = document.getElementById('salesByLocation');

// =========================================================
// This is the start setting up my basic Sales Table Header
// =========================================================
function tableHeaderSetup(){
    var tblHeader = document.getElementById('salesTableHeader');
    var headerEl = document.createElement('th');
    tblHeader.appendChild(headerEl);

    for (var i = 0; i < operatingHours.length; i++){
        headerEl = document.createElement('th');
        headerEl.textContent = operatingHours[i];
        tblHeader.appendChild(headerEl);
        locationTotals[i] = 0;
    };
    headerEl = document.createElement('th');
    headerEl.textContent = 'Total Daily Sales';
    headerEl.id = 'TotalHeader';
    tblHeader.appendChild(headerEl);
};

// =========================================================
// Object Constructor (Location)
// =========================================================
function Location (name, minCustomers, maxCustomers, avgCookies) {
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;
    this.totalDailyCookies = 0;
    this.hourlyOutput = [];
    allLocations.push(this);
}
//----------------------------
// Prototype Functions
//----------------------------
// generates the random number of customers per hour
//-------------------------------------------------------
Location.prototype.customerPerHr = function(){
    return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
};

//----------------------------
// calculates the amount of cookies per hour / saves to array
//-----------------------------------------------------------------
Location.prototype.calcHourlyCookies = function(){
    for (var i = 0; i < operatingHours.length; i++){
        var cookiesPerHour = Math.round(this.customerPerHr() * this.avgCookies);
        this.hourlyOutput.push(cookiesPerHour);
        this.totalDailyCookies += cookiesPerHour;
    }
};

//----------------------------
// adds the calculated sales/hr to the table
//-----------------------------------------------------------------
Location.prototype.addSaleToTable = function(){
    var tblRow = document.createElement('tr');      // create my table Row
    tblBody.appendChild(tblRow);                    // add the table to my global table body
    var rowHeader = document.createElement('th');   // create a row header
    rowHeader.textContent = this.name;              // add the location name to the row header
    tblRow.appendChild(rowHeader);                  // add the row header to my row
    var col = 1;                                    //starting column location [0] is the location name

    for(var i = 0; i < this.hourlyOutput.length; i++){  // loop through the hourly Cookie sales
        var cell = tblRow.insertCell(col);                  // create a cell - insert that cell in specific index location
        cell.textContent = this.hourlyOutput[i];            // give that cell hourly sales
        locationTotals[i] += this.hourlyOutput[i];          // running total of cookie sales/hour
        col++;                                              // increasing column index
    }
    cell = tblRow.insertCell(col);                  // create a cell - insert that cell in specific index location
    cell.textContent = this.totalDailyCookies;      // give that cell total sales per location
    cell.id = "locationTotals";
    grandTotal += this.totalDailyCookies;           // increasing grand total
};

// ============================================
// - Add in the new objects
// ============================================
new Location('Seattle', 23, 65, 6.3);
new Location('Tokyo', 3, 24, 1.2);
new Location('Dubai', 11, 38, 3.7);
new Location('Paris', 20, 38, 2.3);
new Location('Lima', 2, 16, 4.6);

// ============================================
// Footer/Total Row Function
// ============================================
function tableFooterSetup(){

    var tblFooter = document.getElementById('salesTableTotal');
    var tblRow = document.createElement('tr');
    tblFooter.appendChild(tblRow);

    var rowHeader = document.createElement('th'); 
    rowHeader.textContent = 'Totals:';
    rowHeader.id = 'totalsRow';
    tblRow.appendChild(rowHeader);
    var col = 1;
    
    for(var i = 0; i < locationTotals.length; i++){
        var cell = tblRow.insertCell(col);
        cell.textContent = locationTotals[i];
        col++;
    };

    cell = tblRow.insertCell(col);
    cell.id = "grandTotal";
    cell.textContent = grandTotal;
}


// ============================================
// Invoke the functions
// ============================================
tableHeaderSetup();

for(var x = 0; x < allLocations.length; x++){
    allLocations[x].customerPerHr();
    allLocations[x].calcHourlyCookies();
    allLocations[x].addSaleToTable();
}

tableFooterSetup();


// ============================================
// locationAdd - Add new Row to SalesTable
// ============================================
var locationForm = document.getElementById('locationAdd-form');
locationForm.addEventListener('submit', addLocation);

function addLocation(event){
    event.preventDefault();

    // involks validation function - if all fields are entered (returns boolean)
    var checking = validateNull();  

    // false: fields are NOT all entered
    if(! checking){
        alert("You will need to enter in all the form fields to continue");
    
    // true: all fields are entered correctly - proceed with adding object/row
    } else {
        var locationName = event.target.elCity.value;
        var locationMax = parseInt(event.target.elMax.value); 
        var locationMin = parseInt(event.target.elMin.value);
        var locationAvg = parseInt(event.target.elAvg.value);
    
        new Location(locationName,locationMin, locationMax, locationAvg);
        
        var x = allLocations.length-1;
    
        allLocations[x].customerPerHr();
        allLocations[x].calcHourlyCookies();
        allLocations[x].addSaleToTable();
    
        document.getElementById('salesTableTotal').deleteRow(0);
        tableFooterSetup();
    
        event.target.elCity.value = null;
        event.target.elMax.value = null;
        event.target.elMin.value = null;
        event.target.elAvg.value = null;
    };
}

