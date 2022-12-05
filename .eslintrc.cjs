module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "plugin:jsx-a11y/recommended", "airbnb"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
      ],
      parserOptions: {
        project: ["./tsconfig.json"], // Specify it only for TypeScript files
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig(.*)?.json"],
  },
  plugins: ["react", "@typescript-eslint", "jsx-a11y"],
  rules: {
    "eol-last": ["error", "always"],
    quotes: ["error", "double"],
    "@typescript-eslint/rule-name": "error",
    indent: ["error", 2],
    "jsx-a11y/rule-name": 2
  },
};
