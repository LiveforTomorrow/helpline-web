module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:jest/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },
  rules: {
    "import/no-duplicates": "error",
    "import/extensions": "error",
    "import/order": "error",
    "import/newline-after-import": "error",
    "import/prefer-default-export": "error",
    "import/no-named-default": "error",
    "import/no-anonymous-default-export": "error",
    "import/dynamic-import-chunkname": "error",
    "@typescript-eslint/no-unused-vars": "error",
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  overrides: [
    {
      "files": ["*.js"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": "off"
      }
    },
    {
      "files": ["*.stories.tsx"],
      "rules": {
        "import/no-anonymous-default-export": "off"
      }
    }
  ]
};
