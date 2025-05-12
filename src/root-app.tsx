import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { TolgeeProvider } from "@tolgee/react";
import { tolgee } from "./i18n/tolgeeInstance.ts";

let root: ReturnType<typeof createRoot>;

export async function bootstrap() {}

export async function mount() {
  const container = document.getElementById("root");
  if (!container) throw new Error("Root element not found");
  root = createRoot(container);
  root.render(
    <StrictMode>
      <TolgeeProvider tolgee={tolgee}>
        <App />
      </TolgeeProvider>
    </StrictMode>
  );
}

export async function unmount() {
  root?.unmount();
}
