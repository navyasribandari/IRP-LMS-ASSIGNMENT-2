
"use strict";

// ==========================================
// PART 1: TYPES & COERCION
// ==========================================

// "5" + 2 gives "52" because + joins a string and a number.
// "5" - 2 gives 3 because - converts the string into a number.

// typeof null === "object" is a historical JavaScript behavior.


// Function to validate the amount
function parseAmount(input) {

    // 1. Check whether input is null or undefined
    if (input === null || input === undefined) {
        throw new Error("Amount is required");
    }

    // 2. Check whether input is a string or number
    if (typeof input !== "string" && typeof input !== "number") {
        throw new Error("Invalid input type");
    }

    let value = input;

    // 3. Remove extra spaces from the string
    if (typeof input === "string") {
        value = input.trim();
    }

    // 4. Check whether the string is empty
    if (value === "") {
        throw new Error("Amount cannot be empty");
    }

    // 5. Convert the input into a number
    const amount = Number(value);

    // 6. Check whether the result is NaN
    if (Number.isNaN(amount)) {
        throw new Error("Invalid amount. Please enter a valid number");
    }

    // 7. Amount must be greater than zero
    if (amount <= 0) {
        throw new Error("Amount must be greater than zero");
    }

    // Return the valid number
    return amount;
}


// Testing parseAmount() with different inputs

console.log("========== PART 1: TYPES & COERCION ==========");

const testInputs = [
    "500",
    " 250 ",
    "",
    "abc",
    null,
    undefined,
    "12.5.3"
];

for (const input of testInputs) {

    try {
        const result = parseAmount(input);
        console.log("Valid amount:", result);
    }

    catch (error) {
        console.log("Error:", error.message);
    }

}


// ==========================================
// PART 2: SCOPING & HOISTING
// ==========================================


// STEP 1: MAIN DECLARATIONS

// const is used because the bank name never changes.
// let is used because the transaction counter can increase.

console.log("\n========== PART 2: SCOPING & HOISTING ==========");

const BANK_NAME = "JS National Bank";

let transactionCounter = 0;

console.log("Bank Name:", BANK_NAME);

transactionCounter++;

console.log("Transaction Counter:", transactionCounter);


// ==========================================
// STEP 2: HOISTING DEMO
// ==========================================


// 1. VAR HOISTING

console.log("\n---------- VAR HOISTING ----------");

// var declaration is hoisted and initialized with undefined.
console.log("Before declaration:", hoistedVar);

var hoistedVar = 100;

console.log("After declaration:", hoistedVar);


// 2. LET AND TEMPORAL DEAD ZONE

console.log("\n---------- LET AND TEMPORAL DEAD ZONE ----------");

try {

    console.log(hoistedLet);

    let hoistedLet = 200;

}

catch (error) {

    console.log("Caught Error:", error.message);

}


// 3. FUNCTION DECLARATION HOISTING

console.log("\n---------- FUNCTION DECLARATION ----------");

// Function declarations can be called before their definition.
announce();

function announce() {

    console.log("Welcome to JS National Bank");

}


// 4. FUNCTION EXPRESSION HOISTING

console.log("\n---------- FUNCTION EXPRESSION ----------");

try {

    // notify is undefined at this point.
    notify();

    var notify = function () {

        console.log("Bank notification");

    };

}

catch (error) {

    console.log("Caught Error:", error.message);

}


// Execution context creation:
// JavaScript prepares declarations before executing statements.
// var is initialized with undefined, while let stays in the TDZ.

// Execution phase:
// JavaScript executes the statements line by line
// and assigns values to variables.


// ==========================================
// STEP 3: ASYNCHRONOUS LOOP BUG
// ==========================================


// 1. LOOP USING VAR

console.log("\n---------- ASYNCHRONOUS LOOP USING VAR ----------");

// var shares one function-scoped variable.
// All callbacks access the final value of i.

for (var i = 0; i < 3; i++) {

    setTimeout(function () {

        console.log("var loop:", i);

    }, 1000);

}


// 2. LOOP USING LET

console.log("\n---------- ASYNCHRONOUS LOOP USING LET ----------");

// let creates a fresh lexical binding for every iteration.
// Each callback remembers its own value of i.

for (let i = 0; i < 3; i++) {

    setTimeout(function () {

        console.log("let loop:", i);

    }, 1000);

}
