var moment = require('moment');
var now = moment();

// console.log(now.format());
// console.log(now.format('X'));
// console.log(now.valueOf());

var timestamp = 1541717994834;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mm a')); // 11:06 am

// now.subtract(1, 'year');

// console.log(now.format());
// console.log(now.format('MMMM Do YYYY, h:mma')); //Current Time, //add November, 8th, and time