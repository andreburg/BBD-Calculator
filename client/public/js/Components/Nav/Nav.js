import Component from "../Component.js";
import NavButton from "./NavButton.js";
import NavProfile from "./Profile/NavProfile.js";

export default class Nav extends Component {
    constructor(params) {
        super(params);
        this.comps.Add("HomeNav", new NavButton({ text: "Home", url: "/home" }));
    }

    async getHtml() {
        return `
        <nav id="NAV" style="user-select: none;">
            <div>
                LOGO
            </div>
            <div>
                ${this.comps.Render("HomeNav")}
            </div>
        </nav>
        `;
    }
}