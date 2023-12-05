import Page from "../Page.js";
import State from "../../State/State.js";

export default class NotFoundPage extends Page {
    constructor(params) {
        super(params);

        this.globalState = new State({});
        this.globalState.notifyChange({
            ...this.globalState.state,
            page: {
                ...this.globalState.state.page,
                route: "/"
            }
        });
    };

    getHtml() {
        return `
            <div>404 Not Found</div>
        `
    };
};