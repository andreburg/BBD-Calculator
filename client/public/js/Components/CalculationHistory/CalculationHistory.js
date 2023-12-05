import State from "../../State/State.js";
import Component, { buildComponent } from "../Component.js";

export default class CalculationHistory extends Component {
    constructor(props) {
        super(props);
        this.input = props.input;
        this.output = props.output;
        this.id = props.id;
        this.globalState = new State({});
    }

    navigate() {
        this.globalState.notifyChange({
            ...this.globalState.state,
            page: {
                ...this.globalState.state.page,
                route: "/calculator"
            }
        })
        //let reRoute = new Event("reRoute");
        //dispatchEvent(reRoute);
    }

    sideEffects() {
        let delBtn = document.querySelector(`#calc-history-${this.id}-delete`);
        delBtn.style.cursor = "pointer";
        delBtn.addEventListener("click", (e) => {
            e.preventDefault();
            let newHistory = [];
            for (let i = 0; i < this.globalState.state.calculator.history.length; i++) {
                if (i !== this.id) {
                    newHistory.push(this.globalState.state.calculator.history[i])
                }
            }
            this.globalState.notifyChange({
                ...this.globalState.state,
                calculator: {
                    ...this.globalState.state.calculator,
                    history: newHistory
                }
            })
        })
        let viewBtn = document.querySelector(`#calc-history-${this.id}-view`);
        viewBtn.style.cursor = "pointer";
        viewBtn.addEventListener("click", (e) => {
            e.preventDefault();
            this.globalState.silentChange({
                ...this.globalState.state,
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
        return (
            buildComponent("div", { "id": `calc-history-${this.id}`, "style": "user-select: none;", "class": "calc-history-item" }, [
                buildComponent("div", { "id": `calc-history-${this.id}-view`, "class": "calc-history-item-btn" }, [], "View"),
                buildComponent("div", { "id": `calc-history-${this.id}-delete`, "class": "calc-history-item-btn" }, [], "Delete"),
                buildComponent("p", { "class": "calc-history-item-text"}, [], `${this.input} = ${this.output}`)
            ])
        )
    }
}