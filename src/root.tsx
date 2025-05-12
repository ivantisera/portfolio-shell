import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@portfolio/base",
  app: async () => ({
    bootstrap: async () => {},
    mount: async () => {},
    unmount: async () => {},
  }),
  activeWhen: ["/"],
});

start();
