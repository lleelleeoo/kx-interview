import nextJest from "next/jest.js";

const createJestConfig = nextJest({ dir: "./" });

const jestConfig = {
    clearMocks: true,
    coverageProvider: "v8",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: [
        "./scripts/setupJest.ts"
    ]
};

const config = createJestConfig(jestConfig);
export { config as default };
