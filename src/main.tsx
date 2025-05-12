import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TolgeeProvider } from "@tolgee/react";
import { tolgee } from "./i18n/tolgeeInstance.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TolgeeProvider tolgee={tolgee}>
      <App />
    </TolgeeProvider>
  </StrictMode>
);
