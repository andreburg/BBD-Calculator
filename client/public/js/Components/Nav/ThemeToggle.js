import Component, { buildComponent } from "../Component.js";
import State from "../../State/State.js";

export default class ThemeToggle extends Component {
    constructor(params) {
        super(params);
        this.classes = {};
        this.globalState = new State({});
    }

    sideEffects() {
        let nBtn = document.querySelector("#themeToggle");
        nBtn.style.cursor = "pointer";
        nBtn.addEventListener("click", (e) => {
            e.preventDefault();
            this.globalState.notifyChange({
                ...this.globalState.state,
                page: {
                    ...this.globalState.state.page,
                    darkmode: !this.globalState.state.page.darkmode
                }
            })
        })
    }

    getHtml() {
        if (this.globalState.state.page.darkmode) {
            this.classes.Darkmode = "themetoggle-darkmode-true"
        }
        else {
            this.classes.Darkmode = "themetoggle-darkmode-false"
        }
        let c = "";
        Object.values(this.classes).forEach(e => {
            c += ` ${e}`;
        });
        return (
            buildComponent("div", { "id": "themeToggle", "class": c }, [], this.globalState.state.page.darkmode ? "Light Mode" : "Dark Mode")
        )
    }
}