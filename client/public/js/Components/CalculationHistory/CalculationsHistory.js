import Component, { buildComponent } from "../Component.js";
import CalculationHistory from "./CalculationHistory.js";
import State from "../../State/State.js";
import Components from "../Components.js";

export default class CalculationsHistory extends Component {
    constructor(props) {
        super(props);
        this.globalState = new State({});
    }

    getCalculations() {
        let calcs = [];
        this.comps = new Components();
        let history = this.globalState.state.calculator.history;
        for (let i = 0; i < history.length; i++) {
            this.comps.Add(`calc-h${i}`, new CalculationHistory({
                input: history[i].input,
                output: history[i].output,
                id: i
            }))

            calcs = [...calcs, this.comps.Render(`calc-h${i}`)];
        }
        return calcs;
    }

    getHtml() {
        return (
            buildComponent("div", { "class": "calc-history-collection" },
                this.getCalculations()
            )
        );
    }
}