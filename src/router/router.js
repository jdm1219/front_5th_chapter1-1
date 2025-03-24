function createBaseRouter({
  mount,
  routes,
  beforeEnter,
  getRoutePath,
  navigate,
  eventType,
}) {
  const root =
    mount instanceof HTMLElement
      ? mount
      : document.body.querySelector(mount || "#root");

  function getRoute(routePath = getRoutePath()) {
    return routes.find((route) => route.path === routePath) || getRoute("*");
  }

  function renderComponent(component) {
    root.innerHTML = component();
  }

  function render(routePath = getRoutePath()) {
    const route = getRoute(routePath);

    if (!beforeEnter) {
      renderComponent(route.component);
      return;
    }

    beforeEnter(route, (newPath) => {
      if (newPath && newPath !== routePath) {
        navigate(newPath, true);
      } else {
        renderComponent(route.component);
      }
    });
  }

  function push(routePath) {
    navigate(routePath, false);
  }

  function replace(routePath) {
    navigate(routePath, true);
  }

  function init(type) {
    window.addEventListener(type, () => render());
    render();
  }

  init(eventType);

  return { push, replace };
}

export function createHistoryRouter({ mount, routes, beforeEnter }) {
  return createBaseRouter({
    mount,
    routes,
    beforeEnter,
    getRoutePath: () => location.pathname,
    navigate: (routePath, replace) => {
      history[replace ? "replaceState" : "pushState"](null, "", routePath);
      window.dispatchEvent(new PopStateEvent("popstate"));
    },
    eventType: "popstate",
  });
}

export function createHashRouter({ mount, routes, beforeEnter }) {
  return createBaseRouter({
    mount,
    routes,
    beforeEnter,
    getRoutePath: () => location.hash.replace(/^#\/?/, "/"),
    navigate: (routePath) => {
      location.hash = `#${routePath.replace(/^\/?/, "")}`;
    },
    eventType: "hashchange",
  });
}
