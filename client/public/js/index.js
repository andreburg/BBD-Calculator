import MathExpression from "/js/Calculator/MathExpression.js";

const app = document.querySelector("#app");
let expression = "((5*5+3)^2)/2+4*9";

expression = new MathExpression(expression);
const e = {
    le: e,
    re: e,
    operation: () => {

    },
    getVal: () => operation(le.getVal(), re.getVal())
}

console.log(makeExpression(expression));