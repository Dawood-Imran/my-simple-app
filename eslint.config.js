const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node // Includes process, module, etc.
      },
      sourceType: "commonjs"
    },
    ...js.configs.recommended // Use the recommended config from @eslint/js
  }
];