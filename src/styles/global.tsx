/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: "Segoe UI", sans-serif;
        background-color: #fafafa;
        color: #333;
        width: 100%;
      }

      button {
        font-family: inherit;
      }
    `}
  />
);
