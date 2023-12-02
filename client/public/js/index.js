import MathExpression from "/js/Calculator/MathExpression.js";

const app = document.querySelector("#app");
let expression = "10((((20))))";

expression = new MathExpression(expression);
console.log(expression.getVal());