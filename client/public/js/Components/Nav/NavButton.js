import Component from "../Component.js";
import State from "../../State/State.js";

export default class NavButton extends Component {
    constructor(params) {
        super(params);
        this.text = params.text;
        this.url = params.url;
        this.classes = {};
        this.globalState = new State({});
    }

    navigate() {
        window.history.pushState(null, null, this.url);
        let reRoute = new Event("reRoute");
        dispatchEvent(reRoute);
    }

    sideEffects() {
        let nBtn = document.querySelector(`#${this.text}-navBtn`);
        nBtn.style.cursor = "pointer";
        nBtn.addEventListener("click", (e) => {
            e.preventDefault();
            this.navigate();
        })
    }

    getHtml() {
        if (this.url == "/" + window.location.href.match(/:\/\/[a-zA-Z0-9:]*\/(.*)/)[1]) {
            this.classes.Active = "NavBtn-active-true";
        } else {
            this.classes.Active = "NavBtn-active-false";
        }

        if (this.globalState.state.page.darkmode) {
            this.classes.Darkmode = "NavBtn-darkmode-true"
        }
        else {
            this.classes.Darkmode = "NavBtn-darkmode-false"
        }
        let c = "";
        Object.values(this.classes).forEach(e => {
            c += ` ${e}`;
        });
        console.log(c);
        return `
        <div id="${this.text}-navBtn" class="${c}">
            ${this.text}
        </div>
        `;
    }
}