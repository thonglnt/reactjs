/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '@components': '<rootDir>/src/components',
    '^@helpers/(.*)$': '<rootDir>/src/helpers/$1',
    '^@mocks/(.*)$': '<rootDir>/src/mocks/$1',
    '^@common-styled/(.*)$': '<rootDir>/src/common-styled/$1',
    '^@themes': '<rootDir>/src/themes',
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
  collectCoverageFrom: [
    'src/*.{ts,tsx}',
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/*.{test,stories}.{js,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/main.tsx',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
}
