declare module "http://localhost:*/mfe-*.js" {
  export const mount: (el: HTMLElement) => void;
  export const unmount: () => void;
}

declare module "https://*/mfe-*.js" {
  export const mount: (el: HTMLElement) => void;
  export const unmount: () => void;
}
declare const System: {
  import: (module: string) => Promise<any>;
};
