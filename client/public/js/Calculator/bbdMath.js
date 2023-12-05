import MathExpression from "./MathExpression.js";
import State from "../State/State.js";
let globalState = new State({});
let degrees = () => globalState.state.calculator.buttonState.degrees ? (Math.PI / 180) : 1;

export const operations = {
    "-": (l, r) => {
        if (!l) {
            l = 0;
        }
        return new Number(l) - new Number(r)
    },
    "+": (l, r) => {
        if (!l) {
            l = 0;
        }
        return new Number(l) + new Number(r)
    },
    "*": (l, r) => new Number(l) * new Number(r),
    "/": (l, r) => new Number(l) / new Number(r),
    "^": (l, r) => Math.pow(new Number(l), new Number(r)),
    "%": (l, r) => new Number(l) % new Number(r),
    "f": (l, r) => functions[l](new Number(r))
}

export const functions = {
    "cosec": (val) => Math.asin(val) / degrees(),
    "sec": (val) => Math.acos(val) / degrees(),
    "cot": (val) => Math.atan(val) / degrees(),
    "sin": (val) => Math.sin(val * degrees()),
    "cos": (val) => Math.cos(val * degrees()),
    "tan": (val) => Math.tan(val * degrees()),
    "ln": (val) => Math.log(val),
    "g": (val) => new MathExpression("2(x)^2+2".replace(/x/g, val)).getVal(),
    "sqrt": (val) => new MathExpression("(x)^(1/2)".replace(/x/g, val)).getVal(),
    "floor": (val) => Math.floor(val),
    "ceil": (val) => Math.floor(val),
    "round": (val) => Math.round(val),
}

export const mathConstants = {
    "π": () => Math.PI,
    "e": () => Math.E,
}