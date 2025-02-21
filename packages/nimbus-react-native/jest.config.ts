import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "react-native",
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@react-native|your-other-packages-to-transform).+',
  ],
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/__tests__/setup.ts"],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
};

export default config;
