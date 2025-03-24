import { state } from "./store/state.js";
import { createHashRouter } from "./router/router.js";
import { ROUTE_PATHS, routes } from "./router/routes.js";

const root = document.body.querySelector("#root");

const router = createHashRouter({
  mount: root,
  routes,
  beforeEnter: (to, next) => {
    if (to.requiresAuth && !state.loggedIn) {
      next(ROUTE_PATHS.LOGIN);
    } else if (to.path === ROUTE_PATHS.LOGIN && state.loggedIn) {
      next(ROUTE_PATHS.MAIN);
    } else {
      next();
    }
  },
});

root.addEventListener("click", (e) => {
  if (e.target && e.target.nodeName == "A") {
    e.preventDefault();
    router.push(e.target.href.replace(location.origin, ""));
  }
});

root.addEventListener("click", (e) => {
  if (e.target && e.target.id === "logout") {
    state.logout();
    router.push(ROUTE_PATHS.LOGIN);
  }
});
root.addEventListener("submit", (e) => {
  if (e.target && e.target.id === "login-form") {
    e.preventDefault();
    const username = e.target.querySelector("#username").value;
    state.setUser({ username, email: "", bio: "" });
    router.push(ROUTE_PATHS.MAIN);
  }

  if (e.target && e.target.id === "profile-form") {
    e.preventDefault();
    const username = e.target.querySelector("#username").value;
    const email = e.target.querySelector("#email").value;
    const bio = e.target.querySelector("#bio").value;
    state.setUser({ username, email, bio });
  }
});
