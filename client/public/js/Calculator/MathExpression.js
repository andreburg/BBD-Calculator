import { operations, functions } from "./MathConstants.js";

export default class MathExpression {
    constructor(expression) {
        this.expression = this.formatBrackets(this.clean(expression));
        console.log(this.expression);
        const t = this.tokenize();
        if (t.le) {
            this.le = new MathExpression(t.le);
            this.re = new MathExpression(t.re);
        }
        this.getVal = t.le ? () => (t.operation(this.le.getVal(), this.re.getVal())) : () => expression;
    }

    clean = (expression) => {
        if (expression[0] == "(" && expression[expression.length - 1] == ")") {
            return expression.substring(1, expression.length - 1);
        }
        else {
            return expression;
        }
    }

    tokenize = () => {
        for (let op in operations) {
            let ops = this.findAllOccurrences(this.expression, op);

            for (let i = 0; i < ops.length; i++) {

                let index = ops[i];
                if (index > -1) {
                    let brackets = this.getMatchingBrackets();
                    let valid = true;

                    if (brackets) {
                        for (let j = 0; j < brackets.length; j++) {
                            if (!(index > brackets[j][1] || index < brackets[j][0])) {
                                valid = false;
                            }
                        }

                        if (valid) return (
                            {
                                le: this.clean(this.expression.slice(0, index)),
                                re: this.clean(this.expression.slice(index + 1)),
                                operation: operations[op]
                            }
                        );
                    }
                }
            }
        }

        for (let func in functions) {
            let funcs = this.findAllOccurrences(this.expression, func);
            for (let i = 0; i < funcs.length; i++) {
                let index = funcs[i];
                if (index > -1) {
                    let brackets = this.getMatchingBrackets();
                    if (brackets) {
                        let brack = brackets.find((b) => b[0] == index + func.length);
                        if (brack)
                            return ({
                                le: func,
                                re: this.clean(this.expression.slice(brack[0], brack[1] + 1)),
                                operation: operations["f"]
                            })
                    }
                }
            }
        }

        return this.expression;
    }

    getMatchingBrackets(expression = this.expression) {
        let brackets = [];
        let stack = [];

        for (let i = 0; i < expression.length; i++) {
            if (expression[i] == "(") {
                stack.push(i);
            }
            else if (expression[i] == ")") {
                if (stack.length > 0) brackets.push([stack.pop(), i])
                else return null;

                if (brackets[brackets.length - 1][0] == 0 && brackets[brackets.length - 1][1] == expression.length - 1) {
                    brackets.pop();
                }
            }
        }
        return (stack.length === 0) ? brackets : null;
    }

    formatBrackets(expression) {
        let brackets = this.getMatchingBrackets(expression);
        let newExpression = "";
        for (let i = 0; i < expression.length; i++) {
            if (!brackets.find(b => i < b[1] && i > b[0])) {
                if (i > 0 && expression[i] === "(") {
                    newExpression += !isNaN(expression[i - 1]) ? "*" + expression[i] : expression[i];
                }
                else if (i < expression.length - 1 && expression[i] === ")") {
                    newExpression += expression[i] + "*";
                }
                else {
                    newExpression += expression[i];
                }
            }
            else {
                newExpression += expression[i];
            }
        }
        return newExpression;
    }

    findAllOccurrences(string, substring) {
        const occurrences = [];
        let index = string.indexOf(substring);

        while (index !== -1) {
            occurrences.push(index);
            index = string.indexOf(substring, index + 1);
        }

        return occurrences;
    }
} 