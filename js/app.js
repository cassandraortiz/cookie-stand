'use strict';

// 1. Stores the min/max hourly customers, and the average cookies per customer, in object properties
// 2. Uses a method of that object to generate a random number of customers per hour. [Objects/Math/random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random){:target="_blank"} 
// 3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// 4. Store the results for each location in a separate array... perhaps as a property of the object representing that location
// 5. Display the values of each array as unordered lists in the browser
// 6. Calculating the sum of these hourly totals; your output for each location should look like this:

//     Seattle
//     - 6am: 16 cookies
//     - 7am: 20 cookies
//     - 8am: 35 cookies
//     - 9am: 48 cookies
//     - 10am: 56 cookies
//     - 11am: 77 cookies
//     - 12pm: 93 cookies
//     - 1pm: 144 cookies
//     - 2pm: 119 cookies
//     - 3pm: 84 cookies
//     - 4pm: 61 cookies
//     - 5pm: 23 cookies
//     - 6pm: 42 cookies
//     - 7pm: 57 cookies
//     - Total: 875 cookies

// Here are the starting numbers that you'll need to build these objects:

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
};
// ============================================

function Location (name, minCustomers, maxCustomers, avgCookies) {
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;
    this.totalDailyCookies = 0;
    this.hourlyOutput = [];
    allLocations.push(this);
}
// generates the random number of customers per hour
Location.prototype.customerPerHr = function(){
    return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
};
// calculates the amount of cookies per hour / saves to array
Location.prototype.calcHourlyCookies = function(){
    for (var i = 0; i < operatingHours.length; i++){
        var cookiesPerHour = Math.round(this.customerPerHr() * this.avgCookies);
        this.hourlyOutput.push(cookiesPerHour);
        this.totalDailyCookies += cookiesPerHour;
    }
};
// adds the calculated sales/hr to the table
Location.prototype.addSaleToTable = function(){
    var tblRow = document.createElement('tr'); // this is my location Row
    tblBody.appendChild(tblRow);
    var rowHeader = document.createElement('th'); // this is my location name (header/bold)
    rowHeader.textContent = this.name;
    tblRow.appendChild(rowHeader);
    var col = 1; //starting column location [0] is the location name

    for(var i = 0; i < this.hourlyOutput.length; i++){
        var tblData = document.createElement('td');
        tblData.textContent = this.hourlyOutput[i];
        var cell = tblRow.insertCell(col);
        cell.textContent = this.hourlyOutput[i];
        locationTotals[i] = locationTotals[i] + this.hourlyOutput[i];
        col++;
    }
};


new Location('Seattle', 23, 65, 6.3);
new Location('Tokyo', 3, 24, 1.2);
new Location('Dubai', 11, 38, 3.7);
new Location('Paris', 20, 38, 2.3);
new Location('Lima', 2, 16, 4.6);

// ============================================
// This is the completes my total Row on Sales Table
// ============================================
function tableFooterSetup(){
    var tblFooter = document.getElementById('salesTableTotal');
    var tblRow = document.createElement('tr');
    tblFooter.appendChild(tblRow);
    var rowHeader = document.createElement('th'); // this is my location name (header/bold)
    rowHeader.textContent = 'Totals:';
    tblRow.appendChild(rowHeader);
    var col = 1;
    
    for(var i = 0; i < locationTotals.length; i++){
        var tblData = document.createElement('td');
        tblData.textContent = locationTotals[i];
        var cell = tblRow.insertCell(col);
        cell.textContent = locationTotals[i];
        col++;
    };
}
// ============================================

tableHeaderSetup();

for(var x = 0; x < allLocations.length; x++){
    allLocations[x].customerPerHr();
    allLocations[x].calcHourlyCookies();
    allLocations[x].addSaleToTable();
}
tableFooterSetup();