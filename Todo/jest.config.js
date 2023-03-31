/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  testEnvironment: 'jsdom',
  verbose: true,
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@mocks(.*)$': '<rootDir>/src/mocks$1',
    '^@assets(.*)$': '<rootDir>/src/assets$1',
    '^@contexts(.*)$': '<rootDir>/src/contexts$1',
    '^@reducers(.*)$': '<rootDir>/src/reducers$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@helpers(.*)$': '<rootDir>/src/helpers$1',
    '^@service(.*)$': '<rootDir>/src/service$1',
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/image.js',
  },
  collectCoverageFrom: [
    'src/*.{ts,tsx}',
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/*.{test,stories}.{js,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/main.tsx',
    '!src/constants/**/*.ts',
    '!src/service/**/*.ts',
    '!src/types/**/*.ts',
    '!src/pages/**/*.tsx',
    '!src/assets/**/*.ts',
  ],
  coverageThreshold: {
    global: {
      statements: 85,
      branches: 85,
      functions: 85,
      lines: 85,
    },
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
