import { useTranslate } from "@tolgee/react";
import styled from "@emotion/styled";
import { useState } from "react";

const Nav = styled.nav`
  padding: 1rem;
  background: #f3f3f3;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
`;

const LanguageButton = styled.button<{ active?: boolean }>`
  margin-left: 0.5rem;
  padding: 0.4rem 0.9rem;
  border-radius: 9999px;
  font-weight: 600;
  border: none;
  background: ${({ active }) => (active ? "#333" : "#e0e0e0")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  cursor: ${({ active }) => (active ? "default" : "pointer")};
  transition: background 0.3s ease, color 0.3s ease;
  box-shadow: ${({ active }) =>
    active ? "0 2px 6px rgba(0,0,0,0.2)" : "none"};

  &:hover {
    background: ${({ active }) => (active ? "#333" : "#ccc")};
  }
`;

const LanguageSwitcher = styled.div`
  display: flex;
  align-items: center;
`;

export const Navbar = () => {
  const [currentLang, setCurrentLang] = useState(window.tolgee.getLanguage());

  const switchLanguage = (lang: string) => {
    if (lang !== currentLang) {
      window.tolgee.changeLanguage(lang);
      setCurrentLang(lang);
    }
  };

  const { t } = useTranslate();
  return (
    <Nav aria-label="Main navigation">
      <p>{t("my_name")}</p>
      <LanguageSwitcher role="group" aria-label="Language switcher">
        {["en", "es"].map((lang) => (
          <LanguageButton
            key={lang}
            onClick={() => switchLanguage(lang)}
            active={lang === currentLang}
            disabled={lang === currentLang}
          >
            {lang.toUpperCase()}
          </LanguageButton>
        ))}
      </LanguageSwitcher>
    </Nav>
  );
};
