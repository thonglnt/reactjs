### OVERVIEW

- This document contains the plan for React practice #3 about a website where users can create a Todo and manage Todo.

### TECHNICAL

- [React (17.0.2)](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Typescript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [Vite](https://vitejs.dev/guide/) - a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts.
- [Storybook](https://storybook.js.org/) - an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.
- [React Router 6](https://reactrouter.com/docs/en/v6/getting-started/overview) - React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
- [Jest](https://jestjs.io/) - is a delightful JavaScript Testing Framework with a focus on simplicity.

### TIMELINE

- Estimation Time: 4 Days
- Actual Time: 13 Days

### TIME SIZE

- 1 dev

### TARGET

- Require
  - Apply React's Context API and React's useReducer for state management
  - Optimize re-render
  - Apply react router
  - Unit test coverage should greater than 85%
- Optional
  - Customization use hook
  - Good practice at form
  - Theming

### STEP TO STEP GUIDE TO INSTALL AND RUN

- Download source from repository:
  [practice-03](https://gitlab.asoft-python.com/thong.le/react-training/-/tree/practice-03)
- cd react-training
- git checkout practice-03
- cd Todo
- pnpm install
- Create new file `.env.local` and paste `BASE_URL=http://localhost:3001` in file
- Run Storybook `pnpm storybook`, you can view storybook at `http://localhost:6006/`
- Run App `pnpm dev`, you can use app at `http://localhost:5173/`
- Run `pnpm test` to test
- Run `pnpm test:updateSnapshots` to update snapshot
- Run `pnpm test:coverage` to test coverage
