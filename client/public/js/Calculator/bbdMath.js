import MathExpression from "./MathExpression.js";

export const operations = {
    "-": (l, r) => new Number(l) - new Number(r),
    "+": (l, r) => new Number(l) + new Number(r),
    "*": (l, r) => new Number(l) * new Number(r),
    "/": (l, r) => new Number(l) / new Number(r),
    "^": (l, r) => Math.pow(new Number(l), new Number(r)),
    "%": (l, r) => new Number(l) % new Number(r),
    "f": (l, r) => functions[l](new Number(r))
}

export const functions = {
    "sin": (val) => Math.sin(val * Math.PI / 180.0),
    "cos": (val) => Math.cos(val * Math.PI / 180.0),
    "tan": (val) => Math.tan(val * Math.PI / 180.0),
    "ln": (val) => Math.log(val),
    "g": (val) => new MathExpression("2(x)+2".replace(/x/g, val)).getVal(),
    "sqrt": (val) => new MathExpression("(x)^(1/2)".replace(/x/g, val)).getVal()
}