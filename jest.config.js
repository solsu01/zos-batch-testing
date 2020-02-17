module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  "reporters": ["default", "jest-stare"],
  "testResultsProcessor": "./node_modules/jest-stare"
};