import Component from "../Component.js";
import NavButton from "./NavButton.js";
import ThemeToggle from "./ThemeToggle.js";

export default class Nav extends Component {
    constructor(params) {
        super(params);
        this.comps.Add("CalculatorNav", new NavButton({ text: "Calculator", url: "/calculator" }));
        this.comps.Add("HistoryNav", new NavButton({ text: "History", url: "/history" }));
        this.comps.Add("ThemeToggle", new ThemeToggle());
    }

    getHtml() {
        return `
        <nav id="NAV" style="user-select: none;">
            <div>
            </div>
            <div id="nav-router">
                ${this.comps.Render("CalculatorNav")}
                ${this.comps.Render("HistoryNav")}
            </div>
            <div id="nav-settings">
                ${this.comps.Render("ThemeToggle")}
            </div>
        </nav>
        `;
    }
}