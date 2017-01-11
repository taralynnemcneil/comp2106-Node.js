
// link to the fileSystem module
var fs = require('fs');

// print food
console.log('FOOD:');

var food = fs.readFileSync('food.txt', 'utf8'); // nothing happens until all content of file has been readFileSync
console.log(food);

// print drinks
console.log('\nDRINKS:');

var drinks = fs.readFileSync('drinks.txt', 'utf8');
console.log(drinks);