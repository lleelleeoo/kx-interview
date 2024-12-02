import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import eslintPluginImport from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
    js.configs.recommended,
    reactPlugin.configs.flat.all,
    {
        plugins: {
            react: reactPlugin,
            "simple-import-sort": simpleImportSort,
            "@stylistic": stylistic,
            import: eslintPluginImport,
        },

        rules: {
            "no-var": ["error"],
            "prefer-const": ["error"],
            "no-return-await": ["error"],

            "react/jsx-no-useless-fragment": ["error"],

            "simple-import-sort/imports": ["error"],
            "import/first": "error",
            "import/newline-after-import": ["error"],
            "import/no-duplicates": ["error"],

            "eol-last": ["error", "always"],
            "@stylistic/max-len": ["error", { code: 120 }],
            "@stylistic/indent": ["error", 4],
            "@stylistic/semi": ["error", "always"],
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/no-trailing-spaces": "error",
            "@stylistic/key-spacing": ["error"],
            "@stylistic/object-curly-spacing": ["error", "always"]
        }
    }
];
