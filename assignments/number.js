// ParseInt
function explainParseInt(value) {
    console.log("Orignal Value:", value);
    let result = parseInt(value);
    console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("58");
explainParseInt("58px");
explainParseInt("3.14");

// ParseFloat
function explainParseFloat(value) {
    console.log("Orignal Value:", value);
    let result = parseFloat(value);
    console.log("AfterparseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("58");
explainParseFloat("58px");
explainParseFloat("3.14");