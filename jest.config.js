const jestConfig = {
    projects: [
        {
            displayName: "server",
            preset: "ts-jest",
            testEnvironment: "node",
            clearMocks: true,
            moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
            transform: { "^.+\\.(ts|tsx)$": "ts-jest" },
            testMatch: ["<rootDir>/src/server/**/*.(spec|test).[jt]s?(x)"],
        },
        {
            displayName: "client",
            preset: "ts-jest",
            testEnvironment: "jsdom",
            clearMocks: true,
            moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
            moduleNameMapper: { "\\.(css)$": "identity-obj-proxy" },
            testMatch: ["<rootDir>/src/client/**/*.(spec|test).[jt]s?(x)"],
            transform: { "^.+\\.(ts|tsx)$": "ts-jest" },

        },
    ],
};

export { jestConfig as default };


