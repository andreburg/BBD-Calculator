import Component from "../Component.js";
import NavButton from "./NavButton.js";

export default class Nav extends Component {
    constructor(params) {
        super(params);
        this.comps.Add("HomeNav", new NavButton({ text: "Home", url: "/home" }));
        this.comps.Add("CalculatorNav", new NavButton({ text: "Calculator", url: "/calculator" }));
    }

    getHtml() {
        return `
        <nav id="NAV" style="user-select: none;">
            <div>
                LOGO
            </div>
            <div>
                ${this.comps.Render("HomeNav")}
                ${this.comps.Render("CalculatorNav")}
            </div>
        </nav>
        `;
    }
}