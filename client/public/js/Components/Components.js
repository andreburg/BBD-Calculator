export default class Components {
    constructor() {
        this.comps = [];
    }

    Add(name, comp) {
        this.comps.push({ Name: name, Component: comp, Active: false });
    }

    Render(name) {
        let c = this.comps.find(c => c.Name == name);
        if (!c) {
            c = new Component();
        }
        c.Active = true;
        return c.Component.getHtml();
    }

    Get(name) {
        let c = this.comps.find(c => c.Name == name);
        if (!c) {
            c = new Component();
        }
        return c.Component;
    }

    loadComponents() {
        this.comps.forEach(c => {
            if (c.Active)
                c.Component.sideEffects();
        });
    }
}