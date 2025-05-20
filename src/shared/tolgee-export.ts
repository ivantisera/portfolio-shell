import { tolgee, tolgeeReady } from "../i18n/tolgeeInstance";

import type { TolgeeInstance } from "@tolgee/core";

declare global {
  interface Window {
    tolgee: TolgeeInstance;
    tolgeeReady: Promise<void>;
  }
}

window.tolgee = tolgee; //TODO: Fix tolgee export implementation using systemjs!!
window.tolgeeReady = tolgeeReady; //TODO: Fix tolgee export implementation using systemjs!!
