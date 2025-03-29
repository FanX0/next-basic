import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  modulePaths: ["<rootDir>/src"],
  collectCoverage: true,
  collectCoverageFrom: [
    //file yang akan di testing
    "**/*.{js,jsx,ts,tsx}",

    //file tidak  testing
    "!**/*d.ts", // d.ts tidak perlu
    "!**/node_modules",
    "!**/coverage/**", //hasil unit testing  tidak perlu
    "!**/*.type.ts", //type tidak perlu
    "!<rootDir>/.next/**", //hasil build  tidak perlu
    "!<rootDir>/*.config.js", //file konfigurasi  tidak perlu
    "!<rootDir>/*.config.ts", //file konfigurasi  tidak perlu

    //agar sisi server tidak di
    "!<rootDir>/src/app/api/**",

    //jika hanya ingin component dan pagenya saja
    "!<rootDir>/src/app/lib/**",
    "!<rootDir>/src/app/middlewares/**",
    "!<rootDir>/src/app/middleware.ts/**",
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
