import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@portfolio/base",
  app: () => import("./root-app"),
  activeWhen: ["/"],
});

start();
