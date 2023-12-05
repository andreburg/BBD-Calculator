export default class State {
    constructor(params) {
        if (State.instance) {
            if (params.listener) State.instance.listeners = [...State.instance.listeners, params.listener];
            return State.instance;
        }
        State.instance = this;
        if (localStorage.getItem('state')) {
            State.instance.state = JSON.parse(localStorage.getItem('state'));
        }
        else {
            State.instance.state = {
                "calculator": {
                    "expression": {
                        "input": "",
                        "output": "",
                        "display": ""
                    },
                    "history": [],
                    "buttonState": {
                        inverse: true,
                        degrees: true
                    }
                },
                "page": {
                    darkmode: true,
                    route: "/"
                }
            };
        }

        if (!State.instance.state.page.route) state.instance.page.route = "/";

        State.instance.listeners = params.listener ? [params.listener] : [];
        localStorage.setItem('state', JSON.stringify(State.instance.state));
    }

    notifyChange(obj) {
        State.instance.state = { ...State.instance.state, ...obj }
        localStorage.setItem('state', JSON.stringify(State.instance.state));
        dispatchEvent(new Event("Render"));
    }

    silentChange(obj) {
        State.instance.state = { ...State.instance.state, ...obj }
        localStorage.setItem('state', JSON.stringify(State.instance.state));
    }
}