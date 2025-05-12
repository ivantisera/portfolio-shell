import { Tolgee, DevTools, FormatSimple } from "@tolgee/react";

export const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatSimple())
  .init({
    apiUrl: import.meta.env.VITE_TOLGEE_API_URL,
    apiKey: import.meta.env.VITE_TOLGEE_API_KEY,
    language: "en",
    fallbackLanguage: "en",
  });
