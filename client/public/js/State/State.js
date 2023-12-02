export default class State {
    constructor(params) {
        if (State.instance) {
            if (params.listener) State.instance.listeners = [...State.instance.listeners, params.listener];
            return State.instance;
        }

        State.instance = this;
        State.instance.state = {
            "calculator": {
                "expression": {
                    "input": "",
                    "output": ""
                },
                "history": []
            }
        };
        State.instance.listeners = params.listener ? [params.listener] : [];
    }

    notifyChange(obj) {
        State.instance.state = { ...State.instance.state, ...obj }
        State.instance.listeners.forEach(l => {
            l();
        });
    }
}