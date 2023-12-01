export default class MathExpression {
    constructor(expression) {
        this.expression = expression;
        const t = this.tokenize();
        this.le = new MathExpression(t.le);
        this.re = new MathExpression(t.re);
    }

    getVal = () => (
        t.operation(le.getVal(), re.getVal())
    );

    tokenize() {

        return {
            le: null,
            re: null,
            operation: null
        };
    }

    isTokenizable(){
        
    }
} 