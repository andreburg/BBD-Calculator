import Component from "../Component.js";
import CalculatorButton from "./CalculatorButton.js";
import State from "../../State/State.js";
import MathExpression from "../../Calculator/MathExpression.js";

export default class Calculator extends Component {
    constructor(params) {
        super(params);
        this.comps.Add("calcbtnplus", new CalculatorButton({ text: "+", val: "+", name: "calcbtnplus" }));
        this.comps.Add("calcbtnminus", new CalculatorButton({ text: "-", val: "-", name: "calcbtnminus" }));
        this.comps.Add("calcbtnmult", new CalculatorButton({ text: "*", val: "*", name: "calcbtnmult" }));
        this.comps.Add("calcbtndivide", new CalculatorButton({ text: "/", val: "/", name: "calcbtndivide" }));
        this.comps.Add("calcbtnopenb", new CalculatorButton({ text: "(", val: "(", name: "calcbtnopenb" }));
        this.comps.Add("calcbtncloseb", new CalculatorButton({ text: ")", val: ")", name: "calcbtncloseb" }));
        this.comps.Add("calcbtncalculate", new CalculatorButton({
            text: "=", val: "=", name: "calcbtncalculate", func: () => {
                this.globalState.silentChange({
                    calculator: {
                        expression: {
                            ...this.globalState.state.expression,
                            output: new MathExpression(this.globalState.state.calculator.expression.input).getVal(),
                            input: this.globalState.state.calculator.expression.input,
                            display: "output"
                        }
                    }
                });

                this.globalState.notifyChange({
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
                    calculator: {
                        expression: {
                            input: "",
                            output: ""
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

        const stateChanged = () => {
            this.RENDER();
        }

        this.globalState = new State({
            listener: stateChanged
        })
    }

    sideEffects() {
        let tbx = document.querySelector(".calc-input-text");
        tbx.addEventListener("focusout", (e) => {
            this.globalState.silentChange({
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
        return `
            <div class="calc-container">
                <div class="calc-expression-container">
                    <input class="calc-input-text" value="${this.globalState.state.calculator.expression[this.globalState.state.calculator.expression.display]}"/>
                </div>
                <div class="calc-btn-grid">
                    <div class="calc-btn-number-grid">
                        ${this.comps.Render("calcbtn9")}
                        ${this.comps.Render("calcbtn8")}
                        ${this.comps.Render("calcbtn7")}
                        ${this.comps.Render("calcbtn6")}
                        ${this.comps.Render("calcbtn5")}
                        ${this.comps.Render("calcbtn4")}
                        ${this.comps.Render("calcbtn3")}
                        ${this.comps.Render("calcbtn2")}
                        ${this.comps.Render("calcbtn1")}
                        ${this.comps.Render("calcbtn0")}
                    </div>
                    <div class="calc-btn-operations-grid">
                        ${this.comps.Render("calcbtnopenb")}
                        ${this.comps.Render("calcbtncloseb")}
                        ${this.comps.Render("calcbtnplus")}
                        ${this.comps.Render("calcbtnminus")}
                        ${this.comps.Render("calcbtnmult")}
                        ${this.comps.Render("calcbtndivide")}
                        ${this.comps.Render("calcbtncalculate")}
                        ${this.comps.Render("calcbtnclear")}
                    </div>
                </div>
            </div>
        `;
    }
}