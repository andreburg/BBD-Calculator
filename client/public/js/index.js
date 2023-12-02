import Route from "./Routes/Route.js";
import Router from "./Routes/Router.js";

import HomePage from "./Pages/HomePage/HomePage.js";

let path, pathItems;

const app = document.querySelector("#app");

const router = new Router([
    new Route("/home", new HomePage()),
    new Route("/", new HomePage()),
]);

const route = () => {
    path = window.location.href.match(/:\/\/[a-zA-Z0-9:]*\/(.*)/)[1];
    pathItems = path.split("/");
    let route = router.LoadRoute(pathItems[0]);
    app.innerHTML = route.comp.getHtml();
    route.comp.sideEffects();
}

addEventListener("DOMContentLoaded", route);
addEventListener("reRoute", route);
addEventListener("Render", route);