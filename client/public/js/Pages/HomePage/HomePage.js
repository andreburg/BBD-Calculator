import NavButton from "../../Components/Nav/NavButton.js";
import Page from "../Page.js";

export default class HomePage extends Page {
    constructor(params) {
        super(params);
        this.comps.Add("nav", new NavButton({text:"Home", url:"/home"}))
    };

    getHtml() {
        return `
            ${this.comps.Render("nav")}
            <div>
            Home
            </div>
        `
    };
};