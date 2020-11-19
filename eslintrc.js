

module.exports = {
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  rules: {

    "rules": {
        "no-console": 0,
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    },
    "parser":"vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }
    }
}

  plugins: ['vue', 'html'],
};