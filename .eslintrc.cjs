module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "airbnb-base", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "consistent-return": "off",
    "import/extensions": "off",
    "import/newline-after-import": "off",
    "import/no-unresolved": ["error", { ignore: ["^dotenv/config$"] }],
    "import/order": "off",
    "import/prefer-default-export": "off",
    "no-underscore-dangle": ["error", { allow: ["_id"] }],
    "no-unused-vars": ["error", { argsIgnorePattern: "^(next|req|res)$" }],
    "spaced-comment": "off",
  },
};
