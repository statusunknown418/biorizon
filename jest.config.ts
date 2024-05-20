import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/__tests__/**/*.test.ts?(x)"],
  moduleNameMapper: {
    "~/auth": "<rootDir>/src/__tests__/mocks/auth.ts",
    "next-auth": "<rootDir>/src/__tests__/mocks/next-auth.ts",
  },
};

export default createJestConfig(config);
