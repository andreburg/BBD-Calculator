import Component, { buildComponent } from "../Component.js";
import State from "../../State/State.js";

export default class CalculatorButton extends Component {
    constructor(params) {
        super(params);
        this.text = params.text;
        this.calcVal = params.val;
        this.name = params.name;
        this.globalState = new State({});
        this.func = params.func;
        this.class = params.class;
    }

    sideEffects() {
        let cBtn = document.querySelector(`#${this.name}-calcButton`);
        cBtn.style.cursor = "pointer";
        cBtn.addEventListener("click", (e) => {
            if (this.func) {
                this.func();
            } else {
                this.globalState.notifyChange({
                    ...this.globalState.state,
                    calculator: {
                        ...this.globalState.state.calculator,
                        expression: {
                            ...this.globalState.state.calculator.expression,
                            input: this.globalState.state.calculator.expression ? this.globalState.state.calculator.expression.input + this.calcVal : this.calcVal,
                            display: "input"
                        }
                    }
                });
            }
        })
    }

    getHtml() {
        return (
            buildComponent("div", { "class": "calc-container", "id": `${this.name}-calcButton`, "style": "user-select: none;", "class": `calc-btn ${this.class ? this.class : ""}` }, [], this.text)
        )
    }
}