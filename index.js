const sum = require("./sum");
const multiply = require("./multiply");
const sub = require("./sub");
const divid = require("./divid");

const [,, operation, num1, num2] = process.argv;

const a = parseFloat(num1);
const b = parseFloat(num2);

switch (operation) {
    case 'sum':
        console.log("Sum:", sum(a, b));
        break;
    case 'multiply':
        console.log("Multiplication:", multiply(a, b));
        break;
    case 'sub':
        console.log("Subtraction:", sub(a, b));
        break;
    case 'divid':
        try {
            console.log("Division:", divid(a, b));
        } catch (error) {
            console.log(error.message);
        }
        break;
    default:
        console.log("Invalid operation. Use 'sum', 'multiply', 'subtract', or 'divide'.");
}
