import Route from "./Routes/Route.js";
import Router from "./Routes/Router.js";

import CalculatorPage from "./Pages/CalculatorPage/CalculatorPage.js";
import HistoryPage from "./Pages/HistoryPage/HistoryPage.js";
import State from "./State/State.js";

let path, pathItems;
let globalState = new State({});

const app = document.querySelector("#app");

const router = new Router([
    new Route("/", new CalculatorPage()),
    new Route("/calculator", new CalculatorPage()),
    new Route("/history", new HistoryPage()),
]);

const route = () => {
    let route = router.LoadRoute(globalState.state.page.route);
    app.innerHTML = route.comp.getHtml();
    route.comp.sideEffects();
    app.classList.value = `darkmode-${globalState.state.page.darkmode}`
}

addEventListener("DOMContentLoaded", route);
addEventListener("reRoute", route);
addEventListener("Render", route);