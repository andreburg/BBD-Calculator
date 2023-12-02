import Page from "../Page.js";

export default class NotFoundPage extends Page {
    constructor(params) {
        super(params);
    };

    getHtml() {
        return `
            <div>404 Not Found</div>
        `
    };
};