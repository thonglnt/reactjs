# React Practice Three

# Overview

This document provides the requirement, assumption, and estimation for reading the news practice.

# Target

- Product data will be kept when refresh the page 
- Apply useContext and useReducer for state management 
- Apply SWR for fetching data - from a simple json-server 
- Unit test coverage should greater than 80%
- Apply use form in react hook form
- Apply Eslint, Prettier


# Timeline

- 5 day (Oct 5, 2022 to Oct 10, 2022)

# Teamsize

- 1 dev

# Technical

- [React (18.2.0)](https://reactjs.org/) - A JavaScript library for building user interfaces. 
- [Typescript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. 
- [Vite](https://vitejs.dev/guide/) - a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts. 
- [Storybook](https://storybook.js.org/) - an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation. 
- [React Router 6](https://reactrouter.com/en/v6.3.0/getting-started/overview) - React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. 
- [Jest](https://jestjs.io/) - is a delightful JavaScript Testing Framework with a focus on simplicity.

# Structure
- This is not the final structure, it can be edited while coding

```
practice-3
├─ .eslintrc.json
├─ .gitignore
├─ .prettierrc
├─ index.html
├─ jest.config.js
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ src
     ├─ assets
     ├─ components
     ├─ constants
     ├─ context
     ├─ helpers
     ├─ json-server
     ├─ mocks
     ├─ pages
     ├─ types
     ├─ App.tsx
     └─ main.tsx
```

# Plan and Estimation Details:

https://docs.google.com/document/d/1oCEqwV8saBsbca2GPDWIozs8JB9-zD70OmLArm98Wm4

# Environment

- Node v16.13.0
- Yarn v1.22.19
- VSCode v1.62.3

# Getting Started

1. git clone git@gitlab.asoft-python.com:thong.le/react-training.git

2. git checkout practice-3

3. cd practice-3

4. yarn install

5. run app and json server: yarn dev

6. open on web: http://localhost:3000

7. run storybook: yarn storybook

8. open on web: http://localhost:6006/

9. run test: yarn test

10. run test coverage: yarn test:coverage

- You can login in admin page with
  - username: news@gmail.com
  - password: abc
