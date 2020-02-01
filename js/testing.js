'use strict';


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

function Location (name, minCustomers, maxCustomers, avgCookies) {
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;
    this.totalDailyCookies = 0;
    this.hourlyOutput = [];
    allLocations.push(this);
}

Location.prototype.customerPerHr = function(){
    //console.log(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)+1) + this.minCustomers);
    return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
};

Location.prototype.calcHourlyCookies = function(){
    for (var i = 0; i < operatingHours.length; i++){
        var cookiesPerHour = Math.round(this.customerPerHr() * this.avgCookies);
        this.hourlyOutput.push(`${operatingHours[i]}: ${cookiesPerHour} cookies`);
        this.totalDailyCookies += cookiesPerHour;
    }
};

new Location('Seattle', 23, 65, 6.3);
new Location('Tokyo', 3, 24, 1.2);
new Location('Dubai', 11, 38, 3.7);
new Location('Paris', 20, 38, 2.3);
new Location('Lima', 2, 16, 4.6);




console.log(allLocations);
console.log(allLocations[0].customerPerHr());
console.log(allLocations[0].calcHourlyCookies());

