import { MainPage } from "./pages/MainPage.js";
import { LoginPage } from "./pages/LoginPage.js";
import { ProfilePage } from "./pages/ProfilePage.js";
import { ErrorPage } from "./pages/ErrorPage.js";
import { state } from "./store/state.js";

const routes = [
  { path: "/", component: MainPage },
  { path: "/login", component: LoginPage },
  { path: "/profile", component: ProfilePage, requiresAuth: true },
];

const navigateTo = (path) => {
  history.pushState(null, "", path);
  render();
};

const App = () => {
  const { pathname } = location;
  const route = routes.find((route) => route.path === pathname);

  if (!route) return ErrorPage();

  if (route.requiresAuth && !state.loggedIn) {
    history.replaceState(null, "", "/login");
    return LoginPage();
  }

  if (pathname === "/login" && state.loggedIn) {
    history.replaceState(null, "", "/");
    return MainPage();
  }

  return route.component();
};

const root = document.getElementById("root");

const render = () => {
  root.innerHTML = App();
};

window.addEventListener("popstate", render);

root.addEventListener("click", (e) => {
  if (e.target && e.target.nodeName == "A") {
    e.preventDefault();
    navigateTo(e.target.href.replace(location.origin, ""));
  }
});

root.addEventListener("click", (e) => {
  if (e.target && e.target.id === "logout") {
    state.logout();
    history.pushState(null, "", "/login");
    render();
  }
});
root.addEventListener("submit", (e) => {
  if (e.target && e.target.id === "login-form") {
    e.preventDefault();
    const username = e.target.querySelector("#username").value;
    state.setUser({ username, email: "", bio: "" });
    history.pushState(null, "", "/");
    render();
  }

  if (e.target && e.target.id === "profile-form") {
    e.preventDefault();
    const username = e.target.querySelector("#username").value;
    const email = e.target.querySelector("#email").value;
    const bio = e.target.querySelector("#bio").value;
    state.setUser({ username, email, bio });
    render();
  }
});

render();
