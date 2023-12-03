import CalculationsHistory from "../../Components/CalculationHistory/CalculationsHistory.js";
import Calculator from "../../Components/Calculator/Calculator.js";
import Nav from "../../Components/Nav/Nav.js";
import Page from "../Page.js";

export default class HistoryPage extends Page {
    constructor(params) {
        super(params);
        this.comps.Add("nav", new Nav());
        this.comps.Add("calculator", new Calculator());
        this.comps.Add("calc-history", new CalculationsHistory());
    };

    getHtml() {
        return `
            ${this.comps.Render("nav")}
            <div id="history-page">
                ${this.comps.Render("calc-history")}
            </div>
        `
    };
};