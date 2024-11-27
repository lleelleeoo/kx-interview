const jestConfig = {
    preset: "ts-jest",
    clearMocks: true,
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    testMatch: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    coverageProvider: "v8",
    setupFilesAfterEnv: [
        "./scripts/setupJest.ts"
    ]
};

export { jestConfig as default };
