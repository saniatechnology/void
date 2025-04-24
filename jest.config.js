const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./", // Path to your Next.js app
});

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom", // Use jsdom for DOM testing
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Setup file for additional configurations
  moduleNameMapper: {
    // Handle module aliases (e.g., @/components)
    "^@/(.*)$": "<rootDir>/$1",
  },
};

module.exports = createJestConfig(customJestConfig);
