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

var location1 = {
    name: 'Seattle',
    avgCookies: 6.3, 
    minCustomers: 23,
    maxCustomers: 65,
    customerPerHr: function(max){
        return Math.floor(Math.random() * Math.floor(max));
    },
    totalDailyCookies: function(arr){
        var hourlyCookies = this.name;
        var totalCookies = 0;

        for (var i = 0; i < arr.length; i++){
            var calCookies = this.customerPerHr(this.maxCustomers);
            console.log(`Index ${i}: calCookies: ${calCookies}`);
            var hourlyOutput = Math.round(calCookies * this.avgCookies);
            hourlyCookies = hourlyCookies + `\n${arr[i]}: ${hourlyOutput} cookies`
            totalCookies = totalCookies + hourlyOutput;
        }
        return hourlyCookies + `\nTotal: ${totalCookies} cookies`;
    }
}

console.log(location1.totalDailyCookies(operatingHours));