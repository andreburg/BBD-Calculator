import Component from "../Component.js";
import State from "../../State/State.js";

export default class CalculatorButton extends Component {
    constructor(params) {
        super(params);
        this.text = params.text;
        this.calcVal = params.val;
        this.name = params.name;
        this.globalState = new State({});
        this.func = params.func;
    }

    sideEffects() {
        let cBtn = document.querySelector(`#${this.name}-calcButton`);
        cBtn.style.cursor = "pointer";
        cBtn.addEventListener("click", (e) => {
            if (this.func) {
                this.func();
            } else {
                this.globalState.notifyChange({
                    calculator: {
                        expression: {
                            input: this.globalState.state.calculator.expression ? this.globalState.state.calculator.expression.input + this.calcVal : this.calcVal
                        }
                    }
                });
            }
        })
    }

    getHtml() {
        return `
        <div id="${this.name}-calcButton" class="calc-btn">
            ${this.text}
        </div>
        `;
    }
}