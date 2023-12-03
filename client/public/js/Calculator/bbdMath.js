import MathExpression from "./MathExpression.js";
import State from "../State/State.js";

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
    "cosec": (val) => Math.asin(val) / (Math.PI / 180),
    "sec": (val) => Math.acos(val) / (Math.PI / 180),
    "cot": (val) => Math.atan(val) / (Math.PI / 180),
    "sin": (val) => Math.sin(val * Math.PI / 180.0),
    "cos": (val) => Math.cos(val * Math.PI / 180.0),
    "tan": (val) => Math.tan(val * Math.PI / 180.0),
    "ln": (val) => Math.log(val),
    "g": (val) => new MathExpression("2(x)+2".replace(/x/g, val)).getVal(),
    "sqrt": (val) => new MathExpression("(x)^(1/2)".replace(/x/g, val)).getVal(),
    "floor": (val) => Math.floor(val),
    "ceil": (val) => Math.floor(val),
    "round": (val) => Math.round(val),
}

export const mathConstants = {
    "π": () => Math.PI,
    "e": () => Math.E
}