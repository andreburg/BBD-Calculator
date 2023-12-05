import Component, { buildComponent } from "../Component.js";
import CalculatorButton from "./CalculatorButton.js";
import State from "../../State/State.js";
import MathExpression from "../../Calculator/MathExpression.js";
import Components from "../Components.js";


export default class Calculator extends Component {
    constructor(params) {
        super(params);

        this.initComponents();
        this.globalState = new State({})
        this.inverse = this.globalState.state.calculator.buttonState.inverse;
    }

    sideEffects() {
        let tbx = document.querySelector(".calc-input-text");
        tbx.addEventListener("focusout", (e) => {
            this.globalState.silentChange({
                ...this.globalState.state,
                calculator: {
                    ...this.globalState.state.calculator,
                    expression: {
                        ...this.globalState.state.calculator.expression,
                        input: tbx.value,
                        display: "input"
                    }
                }
            });
        })
        this.comps.loadComponents();
    }

    getHtml() {
        this.inverse = this.globalState.state.calculator.buttonState.inverse;
        this.degrees = this.globalState.state.calculator.buttonState.degrees;
        this.comps = new Components();
        this.initComponents();
        return (
            buildComponent("div", { "class": "calc-container" }, [
                buildComponent("div", { "class": "calc-expression-container" }, [
                    buildComponent("input", { "class": "calc-input-text", "value": `${this.globalState.state.calculator.expression[this.globalState.state.calculator.expression.display]}` }, []),
                ]),
                buildComponent("div", { "class": "calc-btn-grid" }, [
                    buildComponent("div", { "class": "calc-btn-function-grid" }, [
                        this.inverse ? this.comps.Render("calcbtncosec") : this.comps.Render("calcbtnsin"),
                        this.inverse ? this.comps.Render("calcbtnsec") : this.comps.Render("calcbtncos"),
                        this.inverse ? this.comps.Render("calcbtncot") : this.comps.Render("calcbtntan"),
                        this.comps.Render("calcbtnln"),
                        this.comps.Render("calcbtneuler"),
                        this.comps.Render("calcbtnpi"),
                        this.comps.Render("calcbtnopenb"),
                        this.comps.Render("calcbtncloseb"),
                    ]),
                    buildComponent("div", { "class": "calc-btn-settings-grid" }, [
                        this.comps.Render("calcbtninverse"),
                        this.comps.Render("calcbtndegrees")
                    ]),
                    buildComponent("div", { "class": "calc-btn-number-grid" }, [
                        this.comps.Render("calcbtn7"),
                        this.comps.Render("calcbtn8"),
                        this.comps.Render("calcbtn9"),
                        this.comps.Render("calcbtn4"),
                        this.comps.Render("calcbtn5"),
                        this.comps.Render("calcbtn6"),
                        this.comps.Render("calcbtn1"),
                        this.comps.Render("calcbtn2"),
                        this.comps.Render("calcbtn3"),
                        this.comps.Render("calcbtn0"),
                        this.comps.Render("calcbtndecimal")
                    ]),
                    buildComponent("div", { "class": "calc-btn-operations-grid" }, [
                        this.comps.Render("calcbtnclear"),
                        this.comps.Render("calcbtndelete"),
                        this.comps.Render("calcbtnmult"),
                        this.comps.Render("calcbtndivide"),
                        this.comps.Render("calcbtnplus"),
                        this.comps.Render("calcbtnminus"),
                        this.comps.Render("calcbtnpower"),
                        this.comps.Render("calcbtncalculate")
                    ])
                ]),
            ])
        )
    }

    initComponents() {
        this.comps.Add("calcbtnpower", new CalculatorButton({ text: "^", val: "^", name: "calcbtnpower" }));
        this.comps.Add("calcbtndecimal", new CalculatorButton({ text: ".", val: ".", name: "calcbtndecimal" }));
        this.comps.Add("calcbtninverse", new CalculatorButton({
            text: "inv", val: "inv", name: "calcbtninverse", class: `inverse-btn-${this.inverse}`, func: () => {
                this.globalState.notifyChange({
                    ...this.globalState.state,
                    calculator: {
                        ...this.globalState.state.calculator,
                        buttonState: {
                            ...this.globalState.state.calculator.buttonState,
                            inverse: !this.globalState.state.calculator.buttonState.inverse
                        }
                    }
                });
            }
        }));
        this.comps.Add("calcbtndegrees", new CalculatorButton({
            text: "deg", val: "deg", name: "calcbtndegrees", class: `degree-btn-${this.degrees}`, func: () => {
                this.globalState.notifyChange({
                    ...this.globalState.state,
                    calculator: {
                        ...this.globalState.state.calculator,
                        buttonState: {
                            ...this.globalState.state.calculator.buttonState,
                            degrees: !this.globalState.state.calculator.buttonState.degrees
                        }
                    }
                });
            }
        }));

        this.comps.Add("calcbtn0", new CalculatorButton({ text: "0", val: "0", name: "calcbtn0" }));
        this.comps.Add("calcbtn1", new CalculatorButton({ text: "1", val: "1", name: "calcbtn1" }));
        this.comps.Add("calcbtn2", new CalculatorButton({ text: "2", val: "2", name: "calcbtn2" }));
        this.comps.Add("calcbtn3", new CalculatorButton({ text: "3", val: "3", name: "calcbtn3" }));
        this.comps.Add("calcbtn4", new CalculatorButton({ text: "4", val: "4", name: "calcbtn4" }));
        this.comps.Add("calcbtn5", new CalculatorButton({ text: "5", val: "5", name: "calcbtn5" }));
        this.comps.Add("calcbtn6", new CalculatorButton({ text: "6", val: "6", name: "calcbtn6" }));
        this.comps.Add("calcbtn7", new CalculatorButton({ text: "7", val: "7", name: "calcbtn7" }));
        this.comps.Add("calcbtn8", new CalculatorButton({ text: "8", val: "8", name: "calcbtn8" }));
        this.comps.Add("calcbtn9", new CalculatorButton({ text: "9", val: "9", name: "calcbtn9" }));

        this.comps.Add("calcbtnpi", new CalculatorButton({ text: "π", val: "π", name: "calcbtnpi" }));
        this.comps.Add("calcbtneuler", new CalculatorButton({ text: "e", val: "e", name: "calcbtneuler" }));

        this.comps.Add("calcbtnsin", new CalculatorButton({ text: "sin", val: "sin(", name: "calcbtnsin" }));
        this.comps.Add("calcbtncos", new CalculatorButton({ text: "cos", val: "cos(", name: "calcbtncos" }));
        this.comps.Add("calcbtntan", new CalculatorButton({ text: "tan", val: "tan(", name: "calcbtntan" }));
        this.comps.Add("calcbtncosec", new CalculatorButton({ text: "cosec", val: "cosec(", name: "calcbtncosec" }));
        this.comps.Add("calcbtnsec", new CalculatorButton({ text: "sec", val: "sec(", name: "calcbtnsec" }));
        this.comps.Add("calcbtncot", new CalculatorButton({ text: "cot", val: "cot(", name: "calcbtncot" }));
        this.comps.Add("calcbtnln", new CalculatorButton({ text: "ln", val: "ln(", name: "calcbtnln" }));

        this.comps.Add("calcbtnplus", new CalculatorButton({ text: "+", val: "+", name: "calcbtnplus" }));
        this.comps.Add("calcbtnminus", new CalculatorButton({ text: "-", val: "-", name: "calcbtnminus" }));
        this.comps.Add("calcbtnmult", new CalculatorButton({ text: "*", val: "*", name: "calcbtnmult" }));
        this.comps.Add("calcbtndivide", new CalculatorButton({ text: "/", val: "/", name: "calcbtndivide" }));
        this.comps.Add("calcbtnopenb", new CalculatorButton({ text: "(", val: "(", name: "calcbtnopenb" }));
        this.comps.Add("calcbtncloseb", new CalculatorButton({ text: ")", val: ")", name: "calcbtncloseb" }));
        this.comps.Add("calcbtncalculate", new CalculatorButton({
            text: "=", val: "=", name: "calcbtncalculate", func: () => {
                let newNum = new Number(new MathExpression(this.globalState.state.calculator.expression.input).getVal());
                if (!/^[0-9.e-]+$/.test(newNum)) newNum = undefined;
                this.globalState.silentChange({
                    ...this.globalState.state,
                    calculator: {
                        ...this.globalState.state.calculator,
                        expression: {
                            ...this.globalState.state.expression,
                            output: newNum,
                            input: this.globalState.state.calculator.expression.input,
                            display: "output"
                        }
                    }
                });

                this.globalState.notifyChange({
                    ...this.globalState.state,
                    calculator: {
                        ...this.globalState.state.calculator,
                        history: this.globalState.state.calculator.history ? [...this.globalState.state.calculator.history, this.globalState.state.calculator.expression] : [this.globalState.state.calculator.expression]
                    }
                })
            }
        }));
        this.comps.Add("calcbtnclear", new CalculatorButton({
            text: "AC", val: "AC", name: "calcbtnclear", func: () => {
                this.globalState.notifyChange({
                    ...this.globalState.state,
                    calculator: {
                        ...this.globalState.state.calculator,
                        expression: {
                            input: "",
                            output: "",
                            display: "input"
                        }
                    }
                });
            }
        }));

        this.comps.Add("calcbtndelete", new CalculatorButton({
            text: "DEL", val: "DEL", name: "calcbtndelete", func: () => {
                this.globalState.notifyChange({
                    ...this.globalState.state,
                    calculator: {
                        ...this.globalState.state.calculator,
                        expression: {
                            ...this.globalState.state.calculator.expression,
                            input: `${this.globalState.state.calculator.expression.input}`.slice(0, -1)
                        }
                    }
                });
            }
        }));
    }
}