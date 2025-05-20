import { registerApplication } from "single-spa";
import { mfeConfigs } from "./config";
import { getMfeUrl } from "./utils";

export function registerAllMfes() {
  Object.values(mfeConfigs).forEach((config) => {
    const url = getMfeUrl(config.name);
    registerApplication({
      name: config.name,
      app: async () => {
        console.log(`[MFE Loader] Loading ${config.name} from ${url}`);
        const mod = await System.import(url);
        console.log(`[MFE Loader] Loaded module for ${config.name}`, mod);
        return mod;
      },
      activeWhen: config.activeWhen,
      customProps: {
        domElementGetter: () =>
          document.getElementById("microfrontend-container"),
      },
    });
  });
}
