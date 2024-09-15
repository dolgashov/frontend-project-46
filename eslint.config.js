import globals from "globals";


export default [
  {languageOptions: { globals: globals.browser }},
  {
    rules: {
      "import/extensions": 0,
      "no-console": 0,
      "no-undef": 0
    }
  }
];