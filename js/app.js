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

var location1 = {
    name: 'Seattle',
    avgCookies: 6.3, 
    minCustomers: 23,
    maxCustomers: 65,
    customerPerHr: function(min, max){
        // does the lowest number of a random number max of 0-42 (difference)  ( but adds back in the minium 23 if value is 0)
        var randomNumber = Math.floor(Math.random() * (max - min)) + min;
        //console.log(`Here is the random number: ${randomNumber}`);
        return randomNumber;
    },
    totalDailyCookies: function(arr){
        var hourlyCookies = this.name;
        var totalCookies = 0;
        var arrOutput = [];
        
        for (var i = 0; i < arr.length; i++){
            var cookiesNeeded = this.customerPerHr(this.minCustomers, this.maxCustomers);
            //console.log(`Index ${i}: cookiesNeeded: ${cookiesNeeded}`);
            var hourlyOutput = Math.round(cookiesNeeded * this.avgCookies);
            arrOutput[i] = `${arr[i]}: ${hourlyOutput} cookies`;
            //this is my string output result and total tally
            hourlyCookies = hourlyCookies + `\n${arr[i]}: ${hourlyOutput} cookies`
            totalCookies = totalCookies + hourlyOutput;
        }
        //console.log(hourlyCookies + `\nTotal: ${totalCookies} cookies`);
        arrOutput.push(`Total: ${totalCookies} cookies`);
        return arrOutput;
    },
};

console.log(location1.name +"; " + location1.totalDailyCookies(operatingHours));
// Tokyo    |      3     |     24     |        1.2

var location2 = {
    name: 'Tokyo',
    avgCookies: 1.2, 
    minCustomers: 3,
    maxCustomers: 24,
    customerPerHr: function(min, max){
        var randomNumber = Math.floor(Math.random() * (max - min)) + min;
        return randomNumber;
    },
    totalDailyCookies: function(arr){
        var hourlyCookies = this.name;
        var totalCookies = 0;
        var arrOutput = [];
        
        for (var i = 0; i < arr.length; i++){
            var cookiesNeeded = this.customerPerHr(this.minCustomers, this.maxCustomers);
            var hourlyOutput = Math.round(cookiesNeeded * this.avgCookies);
            arrOutput[i] = `${arr[i]}: ${hourlyOutput} cookies`;
            hourlyCookies = hourlyCookies + `\n${arr[i]}: ${hourlyOutput} cookies`
            totalCookies = totalCookies + hourlyOutput;
        }
        arrOutput.push(`Total: ${totalCookies} cookies`);
        return arrOutput;
    },
};

console.log(location2.name +"; " + location2.totalDailyCookies(operatingHours));

// Dubai    |      11    |     38     |        3.7

var location3 = {
    name: 'Dubai',
    avgCookies: 3.7, 
    minCustomers: 11,
    maxCustomers: 38,
    customerPerHr: function(min, max){
        var randomNumber = Math.floor(Math.random() * (max - min)) + min;
        return randomNumber;
    },
    totalDailyCookies: function(arr){
        var hourlyCookies = this.name;
        var totalCookies = 0;
        var arrOutput = [];
        
        for (var i = 0; i < arr.length; i++){
            var cookiesNeeded = this.customerPerHr(this.minCustomers, this.maxCustomers);
            var hourlyOutput = Math.round(cookiesNeeded * this.avgCookies);
            arrOutput[i] = `${arr[i]}: ${hourlyOutput} cookies`;
            hourlyCookies = hourlyCookies + `\n${arr[i]}: ${hourlyOutput} cookies`
            totalCookies = totalCookies + hourlyOutput;
        }
        arrOutput.push(`Total: ${totalCookies} cookies`);
        return arrOutput;
    },
};

console.log(location3.name +"; " + location3.totalDailyCookies(operatingHours));

// Paris    |      20    |     38     |        2.3

var location4 = {
    name: 'Paris',
    avgCookies: 2.3, 
    minCustomers: 20,
    maxCustomers: 38,
    customerPerHr: function(min, max){
        var randomNumber = Math.floor(Math.random() * (max - min)) + min;
        return randomNumber;
    },
    totalDailyCookies: function(arr){
        var hourlyCookies = this.name;
        var totalCookies = 0;
        var arrOutput = [];
        
        for (var i = 0; i < arr.length; i++){
            var cookiesNeeded = this.customerPerHr(this.minCustomers, this.maxCustomers);
            var hourlyOutput = Math.round(cookiesNeeded * this.avgCookies);
            arrOutput[i] = `${arr[i]}: ${hourlyOutput} cookies`;
            hourlyCookies = hourlyCookies + `\n${arr[i]}: ${hourlyOutput} cookies`
            totalCookies = totalCookies + hourlyOutput;
        }
        arrOutput.push(`Total: ${totalCookies} cookies`);
        return arrOutput;
    },
};

console.log(location4.name +"; " + location4.totalDailyCookies(operatingHours));

// Lima     |      2     |     16     |        4.6


var location5 = {
    name: 'Lima',
    avgCookies: 4.6, 
    minCustomers: 2,
    maxCustomers: 16,
    customerPerHr: function(min, max){
        var randomNumber = Math.floor(Math.random() * (max - min)) + min;
        return randomNumber;
    },
    totalDailyCookies: function(arr){
        var hourlyCookies = this.name;
        var totalCookies = 0;
        var arrOutput = [];
        for (var i = 0; i < arr.length; i++){
            var cookiesNeeded = this.customerPerHr(this.minCustomers, this.maxCustomers);
            var hourlyOutput = Math.round(cookiesNeeded * this.avgCookies);
            arrOutput[i] = `${arr[i]}: ${hourlyOutput} cookies`;
            hourlyCookies = hourlyCookies + `\n${arr[i]}: ${hourlyOutput} cookies`
            totalCookies = totalCookies + hourlyOutput;
        }
        arrOutput.push(`Total: ${totalCookies} cookies`);
        return arrOutput;
    },
};

console.log(location5.name +"; " + location5.totalDailyCookies(operatingHours));

//Here is calling the totalDailyCookies function (***RETURNS an ARRAY***): location1.totalDailyCookies(operatingHours));
//Here is calling the customerPerHr function  (***RETURNS an RANDOM NUMBER***):   location1.customerPerHr(location1.minCustomers, location1.maxCustomers));

//
var salesSection = document.getElementById('dailySalesByLocation');
//creating an article for each location;
// contains header and ordered list
for(var i = 0; i<franchiseLocations.length; i++){

    //sets the objectName I am looking to get information from
    var objectName = `location${i+1}`;
    //find the array of each object return array
    var arrHourlyOutput = eval(objectName).totalDailyCookies(operatingHours);
    console.log(arrHourlyOutput);

    //add in a Header with the Location Name - create / name / id name / append
    var headerElement = document.createElement('h2');
    headerElement.textContent = franchiseLocations[i];
    headerElement.id = 'location';
    salesSection.appendChild(headerElement);
    
    //create ordered list - give id name - append
    var orderElement = document.createElement('ol');
    orderElement.id = 'hourlyOutput';
    salesSection.appendChild(orderElement);

    // loop through my array of hourly output - add li - give text - append
    for (var j = 0; j < arrHourlyOutput.length; j++){
        var hourItem = document.createElement('li');
        hourItem.textContent = arrHourlyOutput[j];
        orderElement.appendChild(hourItem);
    };
}