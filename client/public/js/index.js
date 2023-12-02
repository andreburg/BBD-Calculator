import MathExpression from "/js/Calculator/MathExpression.js";

const app = document.querySelector("#app");
let expression = "sin(20)cos(30)";

expression = new MathExpression(expression);
console.log(expression.getVal());