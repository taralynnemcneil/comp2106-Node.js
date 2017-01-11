// link to the fileSystem module
var fs = require('fs');

// print food
console.log('FOOD:');
fs.readFile('food.txt', 'utf8', function(err, food) {
    
    // error handling
    if (err) {
        console.log('Error: ' + err);
        return;
    }

    console.log(food);
});

// print drinks
fs.readFile('drinks.txt', 'utf8', function(err, drinks) {
    console.log('\nDRINKS:');

    // error handling
    if (err) {
        console.log('Error: ' + err);
        return;
    }

    console.log(drinks);
});