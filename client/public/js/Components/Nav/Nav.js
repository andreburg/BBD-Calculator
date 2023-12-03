import Component from "../Component.js";
import NavButton from "./NavButton.js";

export default class Nav extends Component {
    constructor(params) {
        super(params);
        this.comps.Add("CalculatorNav", new NavButton({ text: "Calculator", url: "/calculator" }));
        this.comps.Add("HistoryNav", new NavButton({ text: "History", url: "/history" }));
    }

    getHtml() {
        return `
        <nav id="NAV" style="user-select: none;">
            <div>
                ${this.comps.Render("CalculatorNav")}
                ${this.comps.Render("HistoryNav")}
            </div>
        </nav>
        `;
    }
}