import { functions, operations } from "./bbdMath.js";

export const clean = (expression) => {
    if (getMatchingBrackets(expression).find((b) => b[0] == 0 && b[1] == (expression.length - 1)))
        return clean(expression.substring(1, expression.length - 1));

    return expression;
}

export const tokenizeMathOperation = (expression) => {
    for (let op in operations) {
        let ops = findAllOccurrences(expression, op);

        for (let i = 0; i < ops.length; i++) {

            let index = ops[i];
            if (index > -1) {
                let brackets = getMatchingBrackets(expression);
                let valid = true;

                if (brackets) {
                    for (let j = 0; j < brackets.length; j++) {
                        if (!(index > brackets[j][1] || index < brackets[j][0])) {
                            valid = false;
                        }
                    }

                    if (valid) return (
                        {
                            le: clean(expression.slice(0, index)),
                            re: clean(expression.slice(index + 1)),
                            operation: operations[op]
                        }
                    );
                }
            }
        }
    }
}

export const tokenizeMathFunction = (expression) => {
    for (let func in functions) {
        let funcs = findAllOccurrences(expression, func);
        for (let i = 0; i < funcs.length; i++) {
            let index = funcs[i];
            let exact = true;

            if (index > 0)
                if (/^[a-z]$/.test(expression[index - 1])) exact = false;

            if (index > -1 && exact) {
                let brackets = getMatchingBrackets(expression);
                let valid = true;

                if (brackets) {
                    if (brackets) {
                        for (let j = 0; j < brackets.length; j++) {
                            if (!(index > brackets[j][1] || index < brackets[j][0])) {
                                valid = false;
                            }
                        }

                        let brack = brackets.find((b) => b[0] == index + func.length);

                        if (brack && valid) return (
                            {
                                le: func,
                                re: clean(expression.slice(brack[0], brack[1] + 1)),
                                operation: operations["f"]
                            }
                        )
                    }
                }
            }
        }
    }
}

export const getMatchingBrackets = (expression) => {
    let brackets = [];
    let stack = [];

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] == "(") {
            stack.push(i);
        }
        else if (expression[i] == ")") {
            if (stack.length > 0) brackets.push([stack.pop(), i])
            else return null;
        }
    }
    return (stack.length === 0) ? brackets : null;
}

export const formatBrackets = (expression) => {
    let brackets = getMatchingBrackets(expression);
    if (brackets) {
        let newExpression = "";
        for (let i = 0; i < expression.length; i++) {
            let ignoreOperations = !(expression[i + 1] in operations) && !(expression[i] in operations);
            if (!brackets.find(b => i < b[1] && i > b[0])) {
                if (i >= 0 && i < expression.length - 1) {
                    if (isNaN(expression[i]) && !isNaN(expression[i + 1])) {
                        newExpression += (expression[i] !== "(" && ignoreOperations) ? expression[i] + "*" : expression[i];
                    }
                    else if (!isNaN(expression[i]) && isNaN(expression[i + 1])) {
                        newExpression += (expression[i + 1] !== ")" && ignoreOperations) ? expression[i] + "*" : expression[i];
                    }
                    else if (expression[i] === ")" && i < expression.length) {
                        newExpression += (expression[i + 1] !== ")" && ignoreOperations) ? expression[i] + "*" : expression[i];
                    }
                    else {
                        newExpression += expression[i]
                    }
                } else {
                    newExpression += expression[i]
                }
            } else {
                newExpression += expression[i]
            }
        }
        return newExpression;
    }

    return expression;
}

export const findAllOccurrences = (string, substring) => {
    const occurrences = [];
    let index = string.indexOf(substring);

    while (index !== -1) {
        occurrences.push(index);
        index = string.indexOf(substring, index + 1);
    }
    return occurrences;
}