// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str) {
    console.log("Orignal String:", str);
    console.log("Length:", str.length);
}
 getLength("I am a fullstack developer");

// indexOf
function findIndexOf(str, target) {
    console.log("Orignal String:", str);
    console.log("Index:", str.indexOf(target));
}
findIndexOf("I am a fullstack developer", "fullstack");

// lastIndexOf
function findLastindexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.lastIndexOf(target));
}
findLastindexOf("I am a fullstack developer", "developer");

// slice
function getSlice(str, start, end) {
    console.log("orignal String:", str);
    console.log("After slice:", str.slice(start, end));
}
getSlice("I am a fullstack developer", 0, 5);

// substring
function getSubstring(str, start, end) {
    console.log("Orignal String:" , str);
    console.log("AFter substring:", str.substring(start, end));
}
getSubstring("I am a fullstack developer", 0, 5);

// trim
function trimString(str) {
    console.log("Orignal String:", str);
    console.log("After Trim:", str.trim());
}

trimString(" I am a fullstack developer ");

//toUpperCase
function toUpper(str) {
    console.log("Orignal Strings:", str);
    console.log("After toUpperCase:", str.toUpperCase());
}

toUpper(" i am a fullstack developer");

// toLowerCase
function toLower(str) {
    console.log("Orignal String:", str);
    console.log("After toLowerCase:", str.toLowerCase());
}
toLower("I AM A FULLSTACK DEVELOPER");