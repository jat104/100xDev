// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push()
function pushExample(arr, element) {
    console.log("Orignal Arrya:", arr);

    arr.push(element);
    console.log("After push:", arr);
}
pushExample([1, 2, 3],4);

// pop()
function popExample(arr) {
    console.log("Orignal Array:", arr);

    arr.pop();
    console.log("After pop:", arr);
}
popExample([1, 2, 3]);

// shift()
function shiftExample(arr) {
    console.log("Orignal Array:", arr);

    arr.shift();
    console.log("After Shift:", arr);
}
shiftExample([1, 2, 3]);

// unshift()
function unshiftExample(arr, element) {
    console.log("orignal Array:", arr);

    arr.unshift(element);
    console.log("After Unshift:", arr);
}
unshiftExample([1, 2, 3], 4);

// map()
function mapExample(arr) {
    console.log("Orignal Array:", arr);

    let newArr = arr.map(function(item) {
        return item * 2;
    });
    console.log("After Map:", newArr);
}
mapExample([1, 2, 3]);

// filter()
function filterExample(arr) {
    console.log("Original Array:", arr);

    let newArr = arr.filter(function(item) {
        return item > 3;
    });
    console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);

// find()
function findExample(arr) {
    console.log("Original Array:", arr);

    let found = arr.find(function(item) {
        return item > 3;
    })
    console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);

// sort()
function sortExample(arr) {
    console.log("Original Array:", arr);

    arr.sort(function(a, b){
        return a - b;
    });
    console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);