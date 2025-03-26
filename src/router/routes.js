import { MainPage } from "../pages/MainPage.js";
import { LoginPage } from "../pages/LoginPage.js";
import { ProfilePage } from "../pages/ProfilePage.js";
import { ErrorPage } from "../pages/ErrorPage.js";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function createRoutes(baseUrl = "/", paths = {}) {
  baseUrl = baseUrl.replace(/\/+$/, "");

  return Object.fromEntries(
    Object.entries(paths).map(([key, path]) => {
      if (path === "*") return [key, path];
      return [key, `${baseUrl}/${path.replace(/^\/+/, "")}`];
    }),
  );
}

export const ROUTE_PATHS = createRoutes(BASE_URL, {
  MAIN: "/",
  LOGIN: "/login",
  PROFILE: "/profile",
  ERROR: "*",
});

export const routes = [
  { path: ROUTE_PATHS.MAIN, component: MainPage },
  { path: ROUTE_PATHS.LOGIN, component: LoginPage },
  { path: ROUTE_PATHS.PROFILE, component: ProfilePage, requiresAuth: true },
  { path: ROUTE_PATHS.ERROR, component: ErrorPage },
];
