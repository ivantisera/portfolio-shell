export type MfeConfig = {
  name: string;
  localUrl: string;
  prodUrl: string;
  activeWhen: string | string[];
};

export const mfeConfigs: Record<string, MfeConfig> = {
  "@portfolio/mfe-template": {
    name: "@portfolio/mfe-template",
    localUrl: "http://localhost:7101/mfe-template.js",
    prodUrl: "https://your-cdn.com/mfe-template.js", // TODO: reemplazar
    activeWhen: ["/"],
  },
  //Add more microfrontends here
};
