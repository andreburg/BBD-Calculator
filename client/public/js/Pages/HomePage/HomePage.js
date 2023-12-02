import Nav from "../../Components/Nav/Nav.js";
import Page from "../Page.js";
import State from "../../State/State.js";

export default class HomePage extends Page {
    constructor(params) {
        super(params);
        this.comps.Add("nav", new Nav())
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