import Route from "./Routes/Route.js";
import Router from "./Routes/Router.js";

import CalculatorPage from "./Pages/CalculatorPage/CalculatorPage.js";
import HistoryPage from "./Pages/HistoryPage/HistoryPage.js";
import State from "./State/State.js";

let globalState = new State({});
let app = document.querySelector("#app");

document.addEventListener("DOMContentLoaded", () => {
    app = document.querySelector("#app");
    addEventListener("DOMContentLoaded", route);
    addEventListener("reRoute", route);
    addEventListener("Render", route);
})

const router = new Router([
    new Route("/", new CalculatorPage()),
    new Route("/calculator", new CalculatorPage()),
    new Route("/history", new HistoryPage()),
]);

function removeAllChildren(parentElement) {
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
  }

const route = () => {
    let route = router.LoadRoute(globalState.state.page.route);
    removeAllChildren(app);
    app.appendChild(route.comp.getHtml());
    route.comp.sideEffects();
    console.log(app.attributes);
    app.classList.value = `darkmode-${globalState.state.page.darkmode}`
}