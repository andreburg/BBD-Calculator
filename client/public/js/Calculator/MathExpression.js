import { tokenizeMathFunction, tokenizeMathOperation, clean, formatBrackets, replaceMathConstants } from "./bbdMathTextParser.js";

export default class MathExpression {
    constructor(expression) {
        this.expression = replaceMathConstants(formatBrackets(clean(expression)));
        this.token = this.tokenize(this.expression);
    }

    getVal() {
        return this.token.operation ? this.token.operation(new MathExpression(this.token.le).getVal(), new MathExpression(this.token.re).getVal()) : this.expression;
    }

    tokenize = () => {
        let tokenized = tokenizeMathOperation(this.expression);
        if (tokenized) return tokenized;

        tokenized = tokenizeMathFunction(this.expression)
        if (tokenized) return tokenized;

        return this.expression;
    }
} 