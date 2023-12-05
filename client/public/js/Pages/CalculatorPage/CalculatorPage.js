import Calculator from "../../Components/Calculator/Calculator.js";
import Nav from "../../Components/Nav/Nav.js";
import Page from "../Page.js";
import { buildComponent } from "../../Components/Component.js";

export default class CalculatorPage extends Page {
    constructor(params) {
        super(params);
        this.comps.Add("nav", new Nav());
        this.comps.Add("calculator", new Calculator());
    };

    getHtml() {
        return (
            buildComponent("div", { "id": "calc-page" }, [
                this.comps.Render("nav"),
                this.comps.Render("calculator")
            ])
        )
    };
};