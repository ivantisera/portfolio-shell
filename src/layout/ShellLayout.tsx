/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { ReactNode } from "react";
import { Navbar } from "../components/NavBar";

const layoutStyles = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const contentStyles = css`
  flex: 1;
  padding: 1rem;
  overflow: auto;
`;

export const ShellLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div css={layoutStyles}>
      <Navbar />
      <main css={contentStyles}>{children}</main>
    </div>
  );
};
