import Component from "../Component.js";
import State from "../../State/State.js";

export default class CalculationHistory extends Component {
    constructor(props) {
        super(props);
        this.input = props.input;
        this.output = props.output;
        this.id = props.id;
        this.globalState = new State({});
    }

    navigate() {
        window.history.pushState(null, null, "/calculator");
        let reRoute = new Event("reRoute");
        dispatchEvent(reRoute);
    }

    sideEffects() {
        let hist = document.querySelector(`#calc-history-${id}`);
        hist.addEventListener("click", () => {
            e.preventDefault();
            this.globalState.silentChange({
                calculator: {
                    ...this.globalState.state.calculator,
                    expression: {
                        output: this.output,
                        input: this.input,
                        display: "input"
                    }
                }
            })
            this.navigate();
        })
    }

    getHtml() {
        return `
            <div id="calc-history-${id}">
                <h1>
                
                </h1>

                <h1>

                </h1>
            </div>           
        `;
    }
}