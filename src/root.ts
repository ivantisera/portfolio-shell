import "./shared/tolgee-export"; // TODO: Fix tolgee export implementation using systemjs!!

import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TolgeeProvider } from "@tolgee/react";
import { registerAllMfes } from "./mfes/register";
import { start } from "single-spa";

const container = document.getElementById("root");
if (!container) throw new Error("Root element not found");

const tolgee = window.tolgee; //TODO: Fix tolgee export implementation using systemjs!!
const tolgeeReady = window.tolgeeReady; //TODO: Fix tolgee export implementation using systemjs!!

if (!tolgee || !tolgeeReady) {
  throw new Error("Tolgee not found on window");
}

await tolgeeReady;

const root = ReactDOM.createRoot(container);

root.render(
  React.createElement(
    React.StrictMode,
    {},
    React.createElement(
      TolgeeProvider,
      {
        tolgee,
        fallback: React.createElement("div", {}, "Loading translations…"),
        options: { useSuspense: false },
      },
      React.createElement(App)
    )
  )
);

registerAllMfes();
start();
