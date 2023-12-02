import MathExpression from "/js/Calculator/MathExpression.js";

const app = document.querySelector("#app");
let expression = "(sin(5*5+3)^cos(2))(5)(5)/2+4*9";

expression = new MathExpression(expression);
console.log(expression.getVal());