# Portfolio Shell

This is the shell application for my personal technical portfolio, built using a microfrontend architecture powered by [Single SPA](https://single-spa.js.org/) and [Nx](https://nx.dev/). It serves as the host for multiple standalone microfrontend apps, each demonstrating a specific area of expertise in fullstack development.

## 🧩 About the Project

The goal of this project is to showcase my skills as a fullstack engineer through a modular, scalable architecture. The system consists of:

- A **Shell app** (`portfolio-shell`) built with **React + TypeScript**
- Several **Microfrontends (MFEs)** built independently, using React and connected via Single SPA
- A **Backend API** built in **Node.js / GraphQL** and connected to **MongoDB** & **Firebase**
- Centralized **internationalization**, **styling**, and **state management**

Each microfrontend focuses on different competencies, such as:

- Frontend architecture and state management
- Design systems and theming
- Performance optimizations
- Accessibility best practices
- Testing (unit, integration, and e2e)
- Authentication and security
- Backend integration and API design

## 🚀 Tech Stack

- **React** (Shell + MFEs)
- **TypeScript**
- **Single SPA** + **Nx Monorepo**
- **Emotion** for CSS-in-JS styling
- **Tolgee** for i18n (internationalization)
- **Node.js** + **Express/GraphQL** (backend)
- **MongoDB** or **Firebase** (data layer)

## 📁 Structure

This repository (`portfolio-shell`) contains the shell application only. Each microfrontend lives in its own separate repository and is dynamically loaded at runtime.

## 📦 Getting Started

To run this shell locally:

```bash
git clone https://github.com/your-username/portfolio-shell.git
cd portfolio-shell
npm install
npm start

🧑‍💻 Author
Made with ❤️ by Iván Tisera – Fullstack Engineer
```
