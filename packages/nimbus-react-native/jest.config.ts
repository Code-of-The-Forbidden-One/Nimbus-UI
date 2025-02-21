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
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
};

export default config;
