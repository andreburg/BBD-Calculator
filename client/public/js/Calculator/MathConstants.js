const operations = {
    "-": (l, r) => {
        return new Number(l) - new Number(r);
    },
    "+": (l, r) => {
        return new Number(l) + new Number(r);
    },
    "*": (l, r) => {
        return new Number(l) * new Number(r);
    },
    "/": (l, r) => {
        return new Number(l) / new Number(r);
    },
    "^": (l, r) => {
        return Math.pow(new Number(l), new Number(r));
    },
    "f": (l, r) => {
        return functions[l](new Number(r))
    }
}

const functions = {
    "sin": (val) => (
        Math.sin(val * Math.PI / 180.0)
    ),
    "cos": (val) => (
        Math.cos(val * Math.PI / 180.0)
    ),
    "tan": (val) => {
        Math.tan(val * Math.PI / 180.0)
    }
}

module.exports = {
    operations,
    functions
}